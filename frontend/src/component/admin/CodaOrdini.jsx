import { useState, useEffect, useCallback, useMemo } from "react";
import { ChefHat, Clock, ArrowRight, Sparkles, RefreshCw } from "lucide-react";
import { connettiWebSocket } from "../../services/websocket";
import { aggiornaStatoOrdine, loadOrdiniAttivi } from "../../services/adminApi";
import { ordineInCodaGenerale } from "../../utils/ordineCoda";

const COLONNE = [
  { stato: "INVIATO", label: "Nuovi ordini", accent: "border-amber-400/60", badge: "bg-amber-400/10 text-amber-400 border-amber-400/30" },
  { stato: "IN_PREPARAZIONE", label: "In preparazione", accent: "border-blue-500/50", badge: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
  { stato: "SERVITO", label: "Serviti", accent: "border-green-500/50", badge: "bg-green-500/10 text-green-400 border-green-500/30" },
];

const PROSSIMO_STATO = { INVIATO: "IN_PREPARAZIONE", IN_PREPARAZIONE: "SERVITO" };
const AZIONE_LABEL = { INVIATO: "Inizia preparazione", IN_PREPARAZIONE: "Segna come servito" };

function minutiFa(dataOra, now) {
  const diff = Math.max(0, Math.floor((now - new Date(dataOra).getTime()) / 60000));
  if (diff < 1) return "adesso";
  return `${diff} min fa`;
}

function nomePiatto(d) {
  return d.piatto?.nome || `Piatto #${d.piattoId ?? d.id}`;
}

export default function CodaOrdini() {
  const [ordini, setOrdini] = useState([]);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const tick = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(tick);
  }, []);

  const upsertOrdine = useCallback((ordine) => {
    setOrdini((prev) => {
      const esiste = prev.some((o) => o.id === ordine.id);
      if (esiste) return prev.map((o) => (o.id === ordine.id ? ordine : o));
      return [ordine, ...prev];
    });
  }, []);

  const caricaOrdini = useCallback(async () => {
    try {
      const data = await loadOrdiniAttivi();
      setOrdini(data);
    } catch (e) {
      console.error("Errore caricamento ordini admin", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    caricaOrdini();
    const disconnetti = connettiWebSocket((ordine) => upsertOrdine(ordine));
    return () => disconnetti();
  }, [caricaOrdini, upsertOrdine]);

  const avanzaStato = async (ordine) => {
    const nuovo = PROSSIMO_STATO[ordine.stato];
    if (!nuovo) return;
    try {
      const aggiornato = await aggiornaStatoOrdine(ordine.id, nuovo);
      upsertOrdine(aggiornato);
    } catch (e) {
      console.error(e);
      alert("Impossibile aggiornare lo stato dell'ordine");
    }
  };

  const attivi = useMemo(
    () => ordini.filter((o) => ordineInCodaGenerale(o)),
    [ordini]
  );

  const nessunOrdine = !loading && attivi.length === 0;

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
            <ChefHat className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight m-0">Coda ordini</h1>
            <p className="text-sm text-neutral-400 m-0">Sincronizzata con la cucina in tempo reale</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="font-mono text-neutral-500">{attivi.length} ordini attivi</span>
          <span className="flex items-center gap-1.5 text-green-400 font-mono">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Live
          </span>
        </div>
      </div>

      {loading && (
        <p className="text-sm text-neutral-500 text-center py-16">Caricamento ordini...</p>
      )}

      {nessunOrdine && (
        <div className="flex flex-col items-center justify-center text-center gap-3 py-20">
          <Sparkles className="w-8 h-8 text-neutral-700" />
          <p className="text-neutral-400 text-sm">Nessun ordine in coda al momento.</p>
        </div>
      )}

      {!nessunOrdine && !loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {COLONNE.map((col) => {
            const ordiniColonna = attivi
              .filter((o) => o.stato === col.stato)
              .sort((a, b) => new Date(a.dataOra) - new Date(b.dataOra));

            return (
              <div key={col.stato} className="bg-neutral-950/50 border border-neutral-800 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-neutral-200">{col.label}</h2>
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full border ${col.badge}`}>
                    {ordiniColonna.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {ordiniColonna.length === 0 && (
                    <p className="text-xs text-neutral-600 text-center py-6">Nessun ordine qui</p>
                  )}

                  {ordiniColonna.map((o) => (
                    <div key={o.id} className={`bg-neutral-900 border-l-4 ${col.accent} border border-neutral-800 rounded-2xl p-4`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-neutral-100">
                          Tavolo {o.numeroTavolo || o.tavoloId}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-neutral-500 font-mono">
                          <Clock className="w-3 h-3" /> {minutiFa(o.dataOra, now)}
                        </span>
                      </div>

                      <ul className="space-y-1 mb-3">
                        {(o.dettagli || [])
                          .filter((d) => d.stato !== "CANCELLATO")
                          .map((d) => (
                            <li key={d.id} className={`text-xs flex justify-between ${d.stato === "INVIATO" ? "text-neutral-500" : "text-neutral-300"}`}>
                              <span>{nomePiatto(d)}</span>
                              <span className="font-mono font-bold text-amber-400">x{d.quantita}</span>
                            </li>
                          ))}
                      </ul>

                      {PROSSIMO_STATO[o.stato] && (
                        <button
                          type="button"
                          onClick={() => avanzaStato(o)}
                          className="w-full flex items-center justify-center gap-1.5 bg-neutral-800 hover:bg-amber-400 hover:text-neutral-950 text-neutral-200 text-xs font-bold py-2 rounded-xl transition-colors cursor-pointer"
                        >
                          {AZIONE_LABEL[o.stato]} <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}