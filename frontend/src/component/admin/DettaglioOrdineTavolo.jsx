import { useState, useEffect, useCallback } from "react";
import { Receipt, Wallet, CheckCircle2 } from "lucide-react";

const ORDINI_KEY = "admin:ordini";
const TAVOLI_KEY = "floor-plan:tables";

export default function DettaglioOrdineTavolo()
{
  const [ordini, setOrdini] = useState([]);
  const [tavoli, setTavoli] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tavoloSel, setTavoloSel] = useState(null);
  const [confermato, setConfermato] = useState(false);

  useEffect(() =>
  {
    let mounted = true;
    (async () =>
    {
      try
      {
        const [rOrdini, rTavoli] = await Promise.all([
          window.storage.get(ORDINI_KEY, true).catch(() => null),
          window.storage.get(TAVOLI_KEY, true).catch(() => null),
        ]);
        if (!mounted) return;
        setOrdini(rOrdini && rOrdini.value ? JSON.parse(rOrdini.value) : []);
        setTavoli(rTavoli && rTavoli.value ? JSON.parse(rTavoli.value) : []);
      } finally
      {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const persistOrdini = useCallback(async (next) =>
  {
    try { await window.storage.set(ORDINI_KEY, JSON.stringify(next), true); }
    catch (e) { console.error("Errore salvataggio ordini", e); }
  }, []);

  const persistTavoli = useCallback(async (next) =>
  {
    try { await window.storage.set(TAVOLI_KEY, JSON.stringify(next), true); }
    catch (e) { console.error("Errore salvataggio tavoli", e); }
  }, []);

  // Numeri tavolo che hanno almeno un ordine non pagato
  const numeriConOrdini = [...new Set(
    ordini.filter((o) => o.stato !== "PAGATO").map((o) => o.tavoloNumero)
  )].sort((a, b) => a - b);

  const ordiniTavolo = tavoloSel
    ? ordini.filter((o) => o.tavoloNumero === tavoloSel && o.stato !== "PAGATO")
    : [];

  const totaleTavolo = ordiniTavolo.reduce((sum, o) =>
    sum + o.dettagli.reduce((s, d) => s + (Number(d.prezzoUnitario) || 0) * d.quantita, 0), 0);

  const segnaComePagato = () =>
  {
    const next = ordini.map((o) => o.tavoloNumero === tavoloSel && o.stato !== "PAGATO" ? { ...o, stato: "PAGATO" } : o);
    setOrdini(next);
    persistOrdini(next);

    const nextTavoli = tavoli.map((t) => t.numero === tavoloSel ? { ...t, stato: "LIBERO" } : t);
    setTavoli(nextTavoli);
    persistTavoli(nextTavoli);

    setConfermato(true);
    setTimeout(() => { setConfermato(false); setTavoloSel(null); }, 1800);
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
          <Receipt className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight m-0">Conto per tavolo</h1>
          <p className="text-sm text-neutral-400 m-0">Consulta gli ordini e chiudi il conto</p>
        </div>
      </div>

      {loading && <p className="text-sm text-neutral-500 text-center py-16">Caricamento...</p>}

      {!loading && numeriConOrdini.length === 0 && (
        <p className="text-sm text-neutral-500 text-center py-20">
          Nessun tavolo ha ordini in sospeso al momento.
        </p>
      )}

      {!loading && numeriConOrdini.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5">
          {/* Selezione tavolo */}
          <div className="flex md:flex-col gap-2 flex-wrap">
            {numeriConOrdini.map((n) => (
              <button
                key={n}
                onClick={() => setTavoloSel(n)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold border transition-colors cursor-pointer text-left ${tavoloSel === n
                    ? "bg-amber-400 text-neutral-950 border-amber-400"
                    : "bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                  }`}
              >
                Tavolo {n}
              </button>
            ))}
          </div>

          {/* Dettaglio */}
          <div className="bg-neutral-950/50 border border-neutral-800 rounded-2xl p-5 min-h-[300px]">
            {!tavoloSel && (
              <p className="text-sm text-neutral-500 text-center py-16">Seleziona un tavolo per vedere il conto.</p>
            )}

            {tavoloSel && confermato && (
              <div className="flex flex-col items-center justify-center text-center gap-3 py-16">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
                <p className="text-sm font-bold text-neutral-100">Tavolo {tavoloSel} saldato</p>
              </div>
            )}

            {tavoloSel && !confermato && (
              <>
                <h2 className="text-sm font-bold text-neutral-200 mb-4">Ordini — Tavolo {tavoloSel}</h2>
                <div className="space-y-4 mb-5">
                  {ordiniTavolo.map((o) => (
                    <div key={o.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-neutral-500">
                          {new Date(o.dataOra).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400">
                          {o.stato.replaceAll("_", " ")}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {o.dettagli.map((d, i) => (
                          <li key={i} className="text-xs text-neutral-300 flex justify-between">
                            <span>{d.quantita}x {d.nome}</span>
                            {d.prezzoUnitario != null && (
                              <span className="font-mono text-neutral-400">
                                €{((Number(d.prezzoUnitario) || 0) * d.quantita).toFixed(2)}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
                  <span className="text-sm text-neutral-400">Totale conto</span>
                  <span className="text-xl font-mono font-bold text-amber-400">€{totaleTavolo.toFixed(2)}</span>
                </div>

                <button
                  onClick={segnaComePagato}
                  className="w-full mt-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold py-3 rounded-2xl text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Wallet className="w-4 h-4" /> Segna come pagato
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
