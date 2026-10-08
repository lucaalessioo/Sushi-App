import { useState, useEffect, useRef } from "react";
import { Pencil, Check, Plus, Trash2, X, Lock, LayoutGrid } from "lucide-react";

const STATO_LABEL = {
  LIBERO: "Libero",
  OCCUPATO: "Occupato",
  IN_PAGAMENTO: "In pagamento",
  PRENOTATO: "Prenotato",
};

const STATO_BORDER = {
  LIBERO: "border-green-500",
  OCCUPATO: "border-red-500",
  IN_PAGAMENTO: "border-amber-500",
  PRENOTATO: "border-blue-500",
};

const STATO_DOT = {
  LIBERO: "bg-green-500",
  OCCUPATO: "bg-red-500",
  IN_PAGAMENTO: "bg-amber-500",
  PRENOTATO: "bg-blue-500",
};

const CICLO_TAP = ["LIBERO", "OCCUPATO", "IN_PAGAMENTO"];

export default function PianoSala({ ruolo = "ROLE_ADMIN" }) {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [modal, setModal] = useState(null);
  const floorRef = useRef(null);
  const dragInfo = useRef(null);

  // Helper per costruire gli header con il token JWT
  const getAuthHeaders = () => {
    const token = localStorage.getItem("token"); // Assicurati che la chiave combaci con dove salvi il JWT al login
    return {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    };
  };

  if (ruolo !== "ROLE_ADMIN") {
    return (
      <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-8 min-h-[300px] flex flex-col items-center justify-center text-center gap-2">
        <Lock size={28} className="text-neutral-600 mb-1" />
        <p className="font-bold m-0">Sezione riservata al personale</p>
        <p className="text-sm text-neutral-400 m-0">
          Il piano sala è visibile solo dal lato ristorante, non dai tablet dei tavoli.
        </p>
      </div>
    );
  }

  // 1. Caricamento iniziale tavoli
  useEffect(() => {
    let isMounted = true;
    async function loadTavoli() {
      try {
        const response = await fetch("http://localhost:8080/api/tavoli", {
          headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error("Errore nel recupero tavoli");
        const data = await response.json();
        if (isMounted) setTables(data);
      } catch (err) {
        console.error("Errore di caricamento:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadTavoli();
    return () => {
      isMounted = false;
    };
  }, []);

  // Calcolo dei contatori per stato
  const counts = tables.reduce((acc, t) => {
    acc[t.stato] = (acc[t.stato] || 0) + 1;
    return acc;
  }, {});

  const nextNumero = () => {
    const usati = tables.map((t) => t.numero).sort((a, b) => a - b);
    let n = 1;
    for (const u of usati) {
      if (u === n) n++;
      else break;
    }
    return n;
  };

  // 2. Cambio stato al tap
  const cicloStato = async (id) => {
    const tavoloCorrente = tables.find((t) => t.id === id);
    if (!tavoloCorrente) return;

    const idx = CICLO_TAP.indexOf(tavoloCorrente.stato);
    const nuovoStato = CICLO_TAP[(idx + 1) % CICLO_TAP.length];

    try {
      const res = await fetch(`http://localhost:8080/api/tavoli/${id}/stato`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify({ stato: nuovoStato }),
      });

      if (!res.ok) throw new Error("Errore durante l'aggiornamento dello stato");
      const tavoloAggiornato = await res.json();

      setTables((prev) =>
        prev.map((t) => (t.id === id ? tavoloAggiornato : t))
      );
    } catch (err) {
      console.error("Errore modifica stato:", err);
    }
  };

  const handleFloorPointerDown = (e) => {
    if (!editMode || e.target !== floorRef.current) return;
    const rect = floorRef.current.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;
    x = Math.max(6, Math.min(94, x));
    y = Math.max(8, Math.min(92, y));
    setModal({ type: "add", x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
  };

  const handleTablePointerDown = (e, table) => {
    e.stopPropagation();
    if (!editMode) return;
    dragInfo.current = { id: table.id, startX: e.clientX, startY: e.clientY, moved: false };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleTablePointerMove = (e, table) => {
    const info = dragInfo.current;
    if (!info || info.id !== table.id) return;
    const dx = e.clientX - info.startX;
    const dy = e.clientY - info.startY;
    if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
      info.moved = true;
      const rect = floorRef.current.getBoundingClientRect();
      let x = ((e.clientX - rect.left) / rect.width) * 100;
      let y = ((e.clientY - rect.top) / rect.height) * 100;
      x = Math.round(Math.max(6, Math.min(94, x)) * 10) / 10;
      y = Math.round(Math.max(8, Math.min(92, y)) * 10) / 10;
      setTables((prev) => prev.map((t) => (t.id === table.id ? { ...t, x, y } : t)));
    }
  };

  // 3. Salvataggio nuova posizione dopo Drag & Drop
  const handleTablePointerUp = async (e, table) => {
    const info = dragInfo.current;
    dragInfo.current = null;
    if (!info || info.id !== table.id) return;

    if (info.moved) {
      const tModificato = tables.find((t) => t.id === table.id);
      if (tModificato) {
        try {
          await fetch(`http://localhost:8080/api/tavoli/${table.id}/posizione`, {
            method: "PATCH",
            headers: getAuthHeaders(),
            body: JSON.stringify({ x: tModificato.x, y: tModificato.y }),
          });
        } catch (err) {
          console.error("Errore salvataggio posizione:", err);
        }
      }
    } else if (editMode) {
      setModal({ type: "edit", table });
    } else {
      cicloStato(table.id);
    }
  };

  // 4. Creazione nuovo tavolo
  const saveNewTable = async (form) => {
    const numero = parseInt(form.numero, 10);
    if (!numero) return;

    if (tables.some((t) => t.numero === numero)) {
      alert("Esiste già un tavolo con questo numero");
      return;
    }

    const nuovoTavoloDTO = {
      numero,
      sala: form.sala.trim(),
      posti: parseInt(form.posti, 10) || null,
      x: modal.x,
      y: modal.y,
      stato: "LIBERO",
    };

    try {
      const res = await fetch("http://localhost:8080/api/tavoli", {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(nuovoTavoloDTO),
      });

      if (!res.ok) throw new Error("Errore salvataggio tavolo");
      const salvato = await res.json();

      setTables((prev) => [...prev, salvato]);
      setModal(null);
    } catch (err) {
      console.error("Errore durante la creazione del tavolo:", err);
    }
  };

  // 5. Modifica dati tavolo esistente
  const saveEditTable = async (id, form) => {
    const numero = parseInt(form.numero, 10);
    if (!numero) return;
    if (tables.some((t) => t.numero === numero && t.id !== id)) {
      alert("Esiste già un tavolo con questo numero");
      return;
    }

    const tavoloModificatoDTO = {
      numero,
      sala: form.sala.trim(),
      posti: parseInt(form.posti, 10) || null,
      stato: form.stato,
    };

    try {
      const res = await fetch(`http://localhost:8080/api/tavoli/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(tavoloModificatoDTO),
      });

      if (!res.ok) throw new Error("Errore aggiornamento tavolo");
      const salvato = await res.json();

      setTables((prev) => prev.map((t) => (t.id === id ? salvato : t)));
      setModal(null);
    } catch (err) {
      console.error("Errore durante la modifica del tavolo:", err);
    }
  };

  // 6. Cancellazione tavolo
  const deleteTable = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/api/tavoli/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!res.ok) throw new Error("Errore eliminazione tavolo");

      setTables((prev) => prev.filter((t) => t.id !== id));
      setModal(null);
    } catch (err) {
      console.error("Errore eliminazione:", err);
    }
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
            <LayoutGrid className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight m-0">Piano sala</h1>
            <p className="text-sm text-neutral-400 m-0">
              {editMode
                ? "Tocca la pianta per aggiungere un tavolo, trascina per spostarlo"
                : "Tocca un tavolo per cambiarne lo stato"}
            </p>
          </div>
        </div>
        <button
          onClick={() => setEditMode((v) => !v)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold border transition-colors cursor-pointer ${
            editMode
              ? "bg-amber-400 text-neutral-950 border-amber-400"
              : "bg-neutral-800 text-neutral-100 border-neutral-700 hover:bg-neutral-700"
          }`}
        >
          {editMode ? <Check size={16} /> : <Pencil size={16} />}
          {editMode ? "Fine modifica" : "Modifica pianta"}
        </button>
      </div>

      <div className="flex gap-4 flex-wrap text-xs text-neutral-400 mb-3">
        {Object.entries(STATO_LABEL).map(([key, label]) => (
          <span key={key} className="flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full inline-block ${STATO_DOT[key]}`} />
            {label}
          </span>
        ))}
      </div>

      {tables.length > 0 && (
        <div className="text-xs text-neutral-500 font-mono mb-3">
          {CICLO_TAP.concat("PRENOTATO").map((k, i) => (
            <span key={k}>
              {i > 0 && " · "}
              {counts[k] || 0} {STATO_LABEL[k].toLowerCase()}
            </span>
          ))}
        </div>
      )}

      <div
        ref={floorRef}
        onPointerDown={handleFloorPointerDown}
        className={`relative w-full rounded-2xl border border-neutral-800 bg-neutral-950/60 overflow-hidden ${
          editMode ? "cursor-crosshair" : ""
        }`}
        style={{
          height: "62vh",
          minHeight: 420,
          backgroundImage: "radial-gradient(#292929 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          touchAction: "none",
        }}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center text-neutral-500 text-sm">
            Caricamento pianta...
          </div>
        )}

        {!loading && tables.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-center text-neutral-500 text-sm px-6 pointer-events-none">
            {editMode
              ? "Nessun tavolo configurato. Tocca un punto della pianta per aggiungere il primo tavolo."
              : 'Nessun tavolo configurato. Attiva "Modifica pianta" per iniziare.'}
          </div>
        )}

        {tables.map((t) => (
          <div
            key={t.id}
            onPointerDown={(e) => handleTablePointerDown(e, t)}
            onPointerMove={(e) => handleTablePointerMove(e, t)}
            onPointerUp={(e) => handleTablePointerUp(e, t)}
            className={`absolute flex flex-col items-center justify-center rounded-xl bg-neutral-900 border-4 shadow-lg cursor-pointer select-none ${STATO_BORDER[t.stato]}`}
            style={{
              left: `${t.x}%`,
              top: `${t.y}%`,
              width: "clamp(76px, 10vw, 104px)",
              height: "clamp(56px, 7.5vw, 76px)",
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="text-lg font-bold leading-none text-neutral-50">{t.numero}</span>
            <span className="text-[10px] text-neutral-500 mt-1">{t.posti || "-"} posti</span>
          </div>
        ))}
      </div>

      {modal && (
        <TableModal
          modal={modal}
          nextNumero={nextNumero}
          onCancel={() => setModal(null)}
          onSaveNew={saveNewTable}
          onSaveEdit={saveEditTable}
          onDelete={deleteTable}
        />
      )}
    </div>
  );
}

function TableModal({ modal, nextNumero, onCancel, onSaveNew, onSaveEdit, onDelete }) {
  const isEdit = modal.type === "edit";
  const table = modal.table;
  const [form, setForm] = useState({
    numero: isEdit ? table.numero : nextNumero(),
    sala: isEdit ? table.sala || "" : "",
    posti: isEdit ? table.posti || "" : 4,
    stato: isEdit ? table.stato : "LIBERO",
  });

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onCancel();
      }}
    >
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 w-full max-w-xs shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold m-0">
            {isEdit ? `Modifica tavolo ${table.numero}` : "Nuovo tavolo"}
          </h2>
          <button
            onClick={onCancel}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mb-3">
          <label className="block text-xs text-neutral-400 mb-1.5">Numero tavolo</label>
          <input
            type="number"
            min="1"
            value={form.numero}
            onChange={set("numero")}
            className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors"
          />
        </div>

        <div className="mb-3">
          <label className="block text-xs text-neutral-400 mb-1.5">Sala (opzionale)</label>
          <input
            type="text"
            placeholder="Es. Terrazza"
            value={form.sala}
            onChange={set("sala")}
            className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors"
          />
        </div>

        <div className="mb-3">
          <label className="block text-xs text-neutral-400 mb-1.5">Posti a sedere</label>
          <input
            type="number"
            min="1"
            value={form.posti}
            onChange={set("posti")}
            className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors"
          />
        </div>

        {isEdit && (
          <div className="mb-4">
            <label className="block text-xs text-neutral-400 mb-1.5">Stato</label>
            <select
              value={form.stato}
              onChange={set("stato")}
              className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors"
            >
              {Object.entries(STATO_LABEL).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="flex gap-2 mt-2">
          <button
            onClick={onCancel}
            className="flex-1 bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-xl py-2.5 text-sm font-medium cursor-pointer hover:bg-neutral-700 transition-colors"
          >
            Annulla
          </button>
          <button
            onClick={() => (isEdit ? onSaveEdit(table.id, form) : onSaveNew(form))}
            className="flex-1 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-xl py-2.5 text-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
          >
            {isEdit ? (
              <>
                <Check size={15} /> Salva
              </>
            ) : (
              <>
                <Plus size={15} /> Aggiungi
              </>
            )}
          </button>
        </div>

        {isEdit && (
          <button
            onClick={() => onDelete(table.id)}
            className="w-full mt-2 border border-red-500/60 text-red-400 rounded-xl py-2 text-sm flex items-center justify-center gap-1.5 cursor-pointer hover:bg-red-500/10 transition-colors"
          >
            <Trash2 size={14} /> Elimina tavolo
          </button>
        )}
      </div>
    </div>
  );
}