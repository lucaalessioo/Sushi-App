import { useState, useEffect, useRef, useMemo } from "react";
import
  {
    Soup, Plus, Pencil, Trash2, X, Check, Search, EyeOff, Eye,
    Camera, Image as ImageIcon, Loader2,
  } from "lucide-react";

// Con Vite: crea .env con VITE_API_URL=http://localhost:8080
const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:8080";
const API = `${API_BASE}/api/piatti`;

const CATEGORIE = ["Nigiri", "Maki", "Uramaki", "Sashimi", "Fritti", "Zuppe", "Dessert", "Bevande"];

/* ---------- helper API ---------- */

// ADATTA: qui va letto il JWT salvato al login (es. localStorage.getItem("token"))
const getToken = () => localStorage.getItem("token");

async function api(path = "", options = {})
{
  const isForm = options.body instanceof FormData;
  const token = getToken();
  const headers = {
    // con FormData il Content-Type lo imposta il browser (serve il boundary)
    ...(isForm ? {} : { "Content-Type": "application/json" }),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };
  const res = await fetch(API + path, { ...options, headers });

  if (!res.ok)
  {
    if (res.status === 401 || res.status === 403)
    {
      throw new Error("Sessione scaduta o permessi insufficienti. Esegui di nuovo l'accesso.");
    }
    let msg = res.statusText;
    try
    {
      const data = await res.json();
      msg = data.message || data.error || msg;
    } catch { /* risposta non JSON */ }
    throw new Error(msg || `Errore ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json().catch(() => null);
}

// Le immagini caricate hanno URL relativo (/uploads/...): vanno prefissate col dominio del backend.
// Gli URL esterni (https://...) restano invariati.
const imgSrc = (url) => (url && url.startsWith("/") ? API_BASE + url : url);

// Ridimensiona la foto prima dell'upload (le foto dei telefoni pesano diversi MB)
async function comprimiImmagine(file, maxSide = 1200, quality = 0.8)
{
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Compressione fallita"))), "image/jpeg", quality)
  );
}

/* ---------- componente principale ---------- */

export default function GestioneMenu()
{
  const [piatti, setPiatti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [search, setSearch] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("tutte");
  const [modal, setModal] = useState(null); // { type: 'add' | 'edit', piatto? }

  const carica = () =>
  {
    setLoading(true);
    setLoadError("");
    // /admin restituisce anche i piatti non disponibili
    api("/admin")
      .then(setPiatti)
      .catch((e) => setLoadError(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(carica, []);

  const toggleDisponibile = async (id) =>
  {
    const p = piatti.find((x) => x.id === id);
    const nuovo = !p.disponibile;
    setPiatti((prev) => prev.map((x) => (x.id === id ? { ...x, disponibile: nuovo } : x)));
    try
    {
      await api(`/${id}/disponibilita?disponibile=${nuovo}`, { method: "PATCH" });
    } catch (e)
    {
      setPiatti((prev) => prev.map((x) => (x.id === id ? { ...x, disponibile: p.disponibile } : x)));
      alert("Impossibile aggiornare la disponibilità: " + e.message);
    }
  };

  // Lancia un errore se qualcosa va storto: il modal lo mostra senza chiudersi
  const salvaPiatto = async (form, id, fotoBlob) =>
  {
    let immagineUrl = form.immagineUrl.trim() || null;

    // 1) se c'è una nuova foto, la carico e ottengo l'URL
    if (fotoBlob)
    {
      const fd = new FormData();
      fd.append("file", fotoBlob, "piatto.jpg");
      const { url } = await api("/immagine", { method: "POST", body: fd });
      immagineUrl = url;
    }

    // 2) salvo il piatto con l'URL dell'immagine
    const body = JSON.stringify({
      codicePiatto: form.codicePiatto.trim() || null, // "" violerebbe il vincolo unique
      nome: form.nome.trim(),
      descrizione: form.descrizione.trim() || null,
      prezzo: parseFloat(form.prezzo),
      immagineUrl,
      disponibile: id ? piatti.find((p) => p.id === id).disponibile : true,
      isAllYouCanEat: form.isAllYouCanEat,
      categoria: form.categoria,
    });

    if (id)
    {
      const updated = await api(`/${id}`, { method: "PUT", body });
      setPiatti((prev) => prev.map((p) => (p.id === id ? updated : p)));
    } else
    {
      const created = await api("", { method: "POST", body });
      setPiatti((prev) => [...prev, created]);
    }
    setModal(null);
  };

  const eliminaPiatto = async (id) =>
  {
    const p = piatti.find((x) => x.id === id);
    if (!window.confirm(`Eliminare "${p?.nome}"?`)) return;
    try
    {
      await api(`/${id}`, { method: "DELETE" });
      setPiatti((prev) => prev.filter((x) => x.id !== id));
      setModal(null);
    } catch (e)
    {
      alert("Impossibile eliminare il piatto: " + e.message);
    }
  };

  const filtrati = piatti.filter((p) =>
  {
    const matchCategoria = categoriaFiltro === "tutte" || p.categoria === categoriaFiltro;
    const matchSearch = p.nome.toLowerCase().includes(search.toLowerCase());
    return matchCategoria && matchSearch;
  });

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
            <Soup className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight m-0">Gestione menu</h1>
            <p className="text-sm text-neutral-400 m-0">{piatti.length} piatti nel menu</p>
          </div>
        </div>
        <button
          onClick={() => setModal({ type: "add" })}
          className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold px-4 py-2.5 rounded-2xl text-sm transition-colors cursor-pointer"
        >
          <Plus size={16} /> Nuovo piatto
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Cerca piatto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-full pl-10 pr-4 py-2.5 text-sm placeholder-neutral-600 outline-none focus:border-amber-400/60 transition-colors"
          />
        </div>
        <select
          value={categoriaFiltro}
          onChange={(e) => setCategoriaFiltro(e.target.value)}
          className="bg-neutral-950 border border-neutral-800 rounded-full px-4 py-2.5 text-sm outline-none focus:border-amber-400/60 transition-colors"
        >
          <option value="tutte">Tutte le categorie</option>
          {CATEGORIE.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {loading && <p className="text-sm text-neutral-500 text-center py-16">Caricamento menu...</p>}

      {!loading && loadError && (
        <div className="text-center py-16 text-sm">
          <p className="text-red-400 mb-3">Impossibile caricare il menu: {loadError}</p>
          <button
            onClick={carica}
            className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2 text-sm cursor-pointer hover:bg-neutral-700 transition-colors"
          >
            Riprova
          </button>
        </div>
      )}

      {!loading && !loadError && filtrati.length === 0 && (
        <div className="text-center py-20 text-neutral-500 text-sm">
          {piatti.length === 0
            ? 'Nessun piatto configurato. Premi "Nuovo piatto" per iniziare.'
            : "Nessun piatto corrisponde alla ricerca."}
        </div>
      )}

      {filtrati.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtrati.map((p) => (
            <div
              key={p.id}
              className={`bg-neutral-950/50 border rounded-2xl overflow-hidden flex flex-col ${p.disponibile ? "border-neutral-800" : "border-neutral-800 opacity-50"}`}
            >
              <div className="h-32 w-full bg-neutral-900 overflow-hidden relative">
                {p.immagineUrl ? (
                  <img src={imgSrc(p.immagineUrl)} alt={p.nome} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-700">
                    <Soup className="w-8 h-8" />
                  </div>
                )}
                <span className="absolute top-2 left-2 bg-neutral-950/80 backdrop-blur text-amber-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                  {p.categoria}
                </span>
                {p.codicePiatto && (
                  <span className="absolute top-2 right-2 bg-neutral-950/80 backdrop-blur text-neutral-300 text-[10px] font-mono px-2 py-0.5 rounded-full border border-neutral-700">
                    {p.codicePiatto}
                  </span>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-neutral-100 leading-tight">{p.nome}</h3>
                  <span className="text-sm font-mono font-bold text-amber-400 shrink-0">
                    €{Number(p.prezzo).toFixed(2)}
                  </span>
                </div>
                {p.descrizione && (
                  <p className="text-xs text-neutral-500 mt-1.5 line-clamp-2">{p.descrizione}</p>
                )}

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-800">
                  <button
                    onClick={() => toggleDisponibile(p.id)}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-full border transition-colors cursor-pointer ${p.disponibile
                      ? "text-green-400 border-green-500/30 bg-green-500/10"
                      : "text-neutral-500 border-neutral-700 bg-neutral-900"
                      }`}
                  >
                    {p.disponibile ? <Eye size={13} /> : <EyeOff size={13} />}
                    {p.disponibile ? "Disponibile" : "Non disponibile"}
                  </button>
                  <button
                    onClick={() => setModal({ type: "edit", piatto: p })}
                    className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-400 hover:border-amber-400/30 transition-colors cursor-pointer"
                    aria-label={`Modifica ${p.nome}`}
                  >
                    <Pencil size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && (
        <PiattoModal
          modal={modal}
          onCancel={() => setModal(null)}
          onSave={salvaPiatto}
          onDelete={eliminaPiatto}
        />
      )}
    </div>
  );
}

/* ---------- modal ---------- */

function PiattoModal({ modal, onCancel, onSave, onDelete })
{
  const isEdit = modal.type === "edit";
  const p = modal.piatto;

  const [form, setForm] = useState({
    codicePiatto: isEdit ? (p.codicePiatto || "") : "",
    nome: isEdit ? p.nome : "",
    descrizione: isEdit ? (p.descrizione || "") : "",
    prezzo: isEdit ? p.prezzo : "",
    categoria: isEdit ? p.categoria : CATEGORIE[0],
    immagineUrl: isEdit ? (p.immagineUrl || "") : "",
    isAllYouCanEat: isEdit ? (p.isAllYouCanEat ?? true) : true,
  });

  // La foto scattata resta in locale e viene caricata solo al "Salva":
  // se l'admin annulla, sul server non resta nessun file orfano.
  const [fotoBlob, setFotoBlob] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const cameraRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => () => { if (fotoPreview) URL.revokeObjectURL(fotoPreview); }, [fotoPreview]);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  // Se il piatto ha una categoria non presente nell'elenco, la mostro comunque
  const categorie = useMemo(
    () => (form.categoria && !CATEGORIE.includes(form.categoria) ? [form.categoria, ...CATEGORIE] : CATEGORIE),
    [form.categoria]
  );

  const onFotoScelta = async (e) =>
  {
    const file = e.target.files?.[0];
    e.target.value = ""; // permette di scegliere di nuovo lo stesso file
    if (!file) return;
    setError("");
    try
    {
      const blob = await comprimiImmagine(file);
      setFotoBlob(blob);
      setFotoPreview(URL.createObjectURL(blob));
    } catch
    {
      setError("Non riesco a leggere questa foto. Prova con un'altra.");
    }
  };

  const rimuoviFoto = () =>
  {
    setFotoBlob(null);
    setFotoPreview(null);
    setForm((f) => ({ ...f, immagineUrl: "" }));
  };

  const anteprima = fotoPreview || imgSrc(form.immagineUrl);

  const salva = async () =>
  {
    if (!form.nome.trim()) return setError("Inserisci il nome del piatto");
    if (form.prezzo === "" || Number(form.prezzo) < 0) return setError("Inserisci un prezzo valido");
    setSaving(true);
    setError("");
    try
    {
      await onSave(form, isEdit ? p.id : null, fotoBlob);
    } catch (e)
    {
      setError(e.message);
      setSaving(false);
    }
  };

  const inputCls = "w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors";

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget && !saving) onCancel(); }}
    >
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 w-full max-w-md shadow-2xl my-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold m-0">{isEdit ? `Modifica ${p.nome}` : "Nuovo piatto"}</h2>
          <button
            onClick={onCancel}
            disabled={saving}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer disabled:opacity-50"
            aria-label="Chiudi"
          >
            <X size={18} />
          </button>
        </div>

        {/* Foto */}
        <div className="mb-4">
          <label className="block text-xs text-neutral-400 mb-1.5">Foto del piatto</label>
          <div className="relative h-36 w-full rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden flex items-center justify-center">
            {anteprima ? (
              <img src={anteprima} alt="Anteprima" className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs text-neutral-600">Nessuna foto</span>
            )}

            {anteprima && !saving && (
              <button
                type="button"
                onClick={rimuoviFoto}
                className="absolute bottom-2 left-2 p-2 rounded-full bg-neutral-900/80 text-red-400 border border-neutral-700 cursor-pointer"
                aria-label="Rimuovi foto"
              >
                <Trash2 size={15} />
              </button>
            )}

            <div className="absolute bottom-2 right-2 flex gap-2">
              <button
                type="button"
                onClick={() => galleryRef.current?.click()}
                disabled={saving}
                className="p-2.5 rounded-full bg-neutral-900/80 text-neutral-200 border border-neutral-700 hover:bg-neutral-800 disabled:opacity-50 cursor-pointer"
                aria-label="Scegli dalla galleria"
              >
                <ImageIcon size={18} />
              </button>
              <button
                type="button"
                onClick={() => cameraRef.current?.click()}
                disabled={saving}
                className="p-2.5 rounded-full bg-amber-400 text-neutral-950 shadow-lg hover:bg-amber-300 disabled:opacity-50 cursor-pointer"
                aria-label="Scatta foto"
              >
                <Camera size={18} />
              </button>
            </div>
          </div>

          {/* capture="environment" apre la fotocamera posteriore su telefono/tablet */}
          <input ref={cameraRef} type="file" accept="image/*" capture="environment" onChange={onFotoScelta} className="hidden" />
          <input ref={galleryRef} type="file" accept="image/*" onChange={onFotoScelta} className="hidden" />
        </div>

        <div className="grid grid-cols-3 gap-3 mb-3">
          <div className="col-span-1">
            <label className="block text-xs text-neutral-400 mb-1.5">Codice</label>
            <input
              type="text" maxLength={10} placeholder="Es. S01"
              value={form.codicePiatto} onChange={set("codicePiatto")}
              className={inputCls}
            />
          </div>
          <div className="col-span-2">
            <label className="block text-xs text-neutral-400 mb-1.5">Nome piatto</label>
            <input type="text" maxLength={100} value={form.nome} onChange={set("nome")} className={inputCls} />
          </div>
        </div>

        <div className="mb-3">
          <label className="block text-xs text-neutral-400 mb-1.5">Descrizione</label>
          <textarea rows="2" value={form.descrizione} onChange={set("descrizione")} className={`${inputCls} resize-none`} />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-xs text-neutral-400 mb-1.5">Prezzo (€)</label>
            <input type="number" step="0.01" min="0" value={form.prezzo} onChange={set("prezzo")} className={inputCls} />
          </div>
          <div>
            <label className="block text-xs text-neutral-400 mb-1.5">Categoria</label>
            <select value={form.categoria} onChange={set("categoria")} className={inputCls}>
              {categorie.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <label className="flex items-center gap-2 mb-4 cursor-pointer">
          <input
            type="checkbox"
            checked={form.isAllYouCanEat}
            onChange={(e) => setForm((f) => ({ ...f, isAllYouCanEat: e.target.checked }))}
            className="w-4 h-4 accent-amber-400"
          />
          <span className="text-xs text-neutral-300">Incluso nel menu All You Can Eat</span>
        </label>

        {error && (
          <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl px-3 py-2 mb-3">
            {error}
          </p>
        )}

        <div className="flex gap-2">
          <button
            onClick={onCancel}
            disabled={saving}
            className="flex-1 bg-neutral-800 border border-neutral-700 rounded-xl py-2.5 text-sm font-medium cursor-pointer hover:bg-neutral-700 transition-colors disabled:opacity-50"
          >
            Annulla
          </button>
          <button
            onClick={salva}
            disabled={saving}
            className="flex-1 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-xl py-2.5 text-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors disabled:opacity-60"
          >
            {saving ? (
              <><Loader2 size={15} className="animate-spin" /> Salvataggio...</>
            ) : isEdit ? (
              <><Check size={15} /> Salva</>
            ) : (
              <><Plus size={15} /> Aggiungi</>
            )}
          </button>
        </div>

        {isEdit && (
          <button
            onClick={() => onDelete(p.id)}
            disabled={saving}
            className="w-full mt-2 border border-red-500/60 text-red-400 rounded-xl py-2 text-sm flex items-center justify-center gap-1.5 cursor-pointer hover:bg-red-500/10 transition-colors disabled:opacity-50"
          >
            <Trash2 size={14} /> Elimina piatto
          </button>
        )}
      </div>
    </div>
  );
}