import { useState, useEffect, useCallback } from "react";
import { Soup, Plus, Pencil, Trash2, X, Check, Search, EyeOff, Eye } from "lucide-react";

const STORAGE_KEY = "admin:piatti";
const CATEGORIE = ["Nigiri", "Maki", "Uramaki", "Sashimi", "Fritti", "Zuppe", "Dessert", "Bevande"];

export default function GestioneMenu()
{
  const [piatti, setPiatti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("tutte");
  const [modal, setModal] = useState(null); // { type: 'add' | 'edit', piatto? }

  useEffect(() =>
  {
    let mounted = true;
    (async () =>
    {
      try
      {
        const res = await window.storage.get(STORAGE_KEY, true);
        if (mounted) setPiatti(res && res.value ? JSON.parse(res.value) : []);
      } catch (e)
      {
        if (mounted) setPiatti([]);
      } finally
      {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const persist = useCallback(async (next) =>
  {
    try
    {
      await window.storage.set(STORAGE_KEY, JSON.stringify(next), true);
    } catch (e)
    {
      console.error("Errore salvataggio menu", e);
    }
  }, []);

  const commit = useCallback((updater) =>
  {
    setPiatti((prev) =>
    {
      const next = typeof updater === "function" ? updater(prev) : updater;
      persist(next);
      return next;
    });
  }, [persist]);

  const toggleDisponibile = (id) =>
  {
    commit((prev) => prev.map((p) => p.id === id ? { ...p, disponibile: !p.disponibile } : p));
  };

  const salvaPiatto = (form, id) =>
  {
    if (!form.nome.trim() || !form.prezzo) return;
    if (id)
    {
      commit((prev) => prev.map((p) => p.id === id ? { ...p, ...form, prezzo: parseFloat(form.prezzo) } : p));
    } else
    {
      commit((prev) => [...prev, {
        id: Date.now() + Math.random(),
        ...form,
        prezzo: parseFloat(form.prezzo),
        disponibile: true,
      }]);
    }
    setModal(null);
  };

  const eliminaPiatto = (id) =>
  {
    commit((prev) => prev.filter((p) => p.id !== id));
    setModal(null);
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

      {!loading && filtrati.length === 0 && (
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
              className={`bg-neutral-950/50 border rounded-2xl overflow-hidden flex flex-col ${p.disponibile ? "border-neutral-800" : "border-neutral-800 opacity-50"
                }`}
            >
              <div className="h-32 w-full bg-neutral-900 overflow-hidden relative">
                {p.immagineUrl ? (
                  <img src={p.immagineUrl} alt={p.nome} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-700">
                    <Soup className="w-8 h-8" />
                  </div>
                )}
                <span className="absolute top-2 left-2 bg-neutral-950/80 backdrop-blur text-amber-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                  {p.categoria}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-neutral-100 leading-tight">{p.nome}</h3>
                  <span className="text-sm font-mono font-bold text-amber-400 shrink-0">€{p.prezzo.toFixed(2)}</span>
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

function PiattoModal({ modal, onCancel, onSave, onDelete })
{
  const isEdit = modal.type === "edit";
  const p = modal.piatto;
  const [form, setForm] = useState({
    nome: isEdit ? p.nome : "",
    descrizione: isEdit ? (p.descrizione || "") : "",
    prezzo: isEdit ? p.prezzo : "",
    categoria: isEdit ? p.categoria : CATEGORIE[0],
    immagineUrl: isEdit ? (p.immagineUrl || "") : "",
    isAllYouCanEat: isEdit ? p.isAllYouCanEat : true,
  });

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}
    >
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 w-full max-w-md shadow-2xl my-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold m-0">{isEdit ? `Modifica ${p.nome}` : "Nuovo piatto"}</h2>
          <button onClick={onCancel} className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer">
            <X size={18} />
          </button>
        </div>

        <div className="mb-3">
          <label className="block text-xs text-neutral-400 mb-1.5">Nome piatto</label>
          <input type="text" value={form.nome} onChange={set("nome")}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors" />
        </div>

        <div className="mb-3">
          <label className="block text-xs text-neutral-400 mb-1.5">Descrizione</label>
          <textarea rows="2" value={form.descrizione} onChange={set("descrizione")}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors resize-none" />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-xs text-neutral-400 mb-1.5">Prezzo (€)</label>
            <input type="number" step="0.01" min="0" value={form.prezzo} onChange={set("prezzo")}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors" />
          </div>
          <div>
            <label className="block text-xs text-neutral-400 mb-1.5">Categoria</label>
            <select value={form.categoria} onChange={set("categoria")}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors">
              {CATEGORIE.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-xs text-neutral-400 mb-1.5">URL immagine (opzionale)</label>
          <input type="text" placeholder="https://..." value={form.immagineUrl} onChange={set("immagineUrl")}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400/60 transition-colors" />
        </div>

        <label className="flex items-center gap-2 mb-5 cursor-pointer">
          <input
            type="checkbox"
            checked={form.isAllYouCanEat}
            onChange={(e) => setForm((f) => ({ ...f, isAllYouCanEat: e.target.checked }))}
            className="w-4 h-4 accent-amber-400"
          />
          <span className="text-xs text-neutral-300">Incluso nel menu All You Can Eat</span>
        </label>

        <div className="flex gap-2">
          <button onClick={onCancel} className="flex-1 bg-neutral-800 border border-neutral-700 rounded-xl py-2.5 text-sm font-medium cursor-pointer hover:bg-neutral-700 transition-colors">
            Annulla
          </button>
          <button
            onClick={() => onSave(form, isEdit ? p.id : null)}
            className="flex-1 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-xl py-2.5 text-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
          >
            {isEdit ? <><Check size={15} /> Salva</> : <><Plus size={15} /> Aggiungi</>}
          </button>
        </div>

        {isEdit && (
          <button
            onClick={() => onDelete(p.id)}
            className="w-full mt-2 border border-red-500/60 text-red-400 rounded-xl py-2 text-sm flex items-center justify-center gap-1.5 cursor-pointer hover:bg-red-500/10 transition-colors"
          >
            <Trash2 size={14} /> Elimina piatto
          </button>
        )}
      </div>
    </div>
  );
}
