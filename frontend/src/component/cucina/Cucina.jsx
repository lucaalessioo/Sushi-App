import { useState, useEffect, useCallback, useMemo } from "react";
import { ChefHat, Clock, Sparkles, Printer, Send, XCircle, RefreshCw } from "lucide-react";
import { connettiWebSocket } from "../../services/websocket";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

const SOGLIA_GIALLO = 10;
const SOGLIA_ROSSO = 15;

const FILTRI = [
  { id: "attivi", label: "Attivi", match: (o) => o.stato === "INVIATO" || o.stato === "IN_PREPARAZIONE" },
  { id: "completati", label: "Completati", match: (o) => o.stato === "SERVITO" },
  { id: "cancellati", label: "Cancellati", match: (o) => o.stato === "CANCELLATO" },
  { id: "tutti", label: "Tutti", match: () => true },
];

const URGENZA = {
  nuovo: { card: "border-t-blue-500", timer: "bg-blue-500/15 text-blue-300 border-blue-500/40" },
  medio: { card: "border-t-yellow-400", timer: "bg-yellow-400/15 text-yellow-300 border-yellow-400/40" },
  urgente: { card: "border-t-red-500", timer: "bg-red-500/20 text-red-300 border-red-500/50 animate-pulse" },
  chiuso: { card: "border-t-neutral-700", timer: "bg-neutral-800 text-neutral-400 border-neutral-700" },
};

const STATI_CHIUSI = ["SERVITO", "CANCELLATO", "PAGATO"];

function authHeaders(extra = {})
{
  const token = localStorage.getItem("token");
  return {
    ...extra,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

function livelloUrgenza(ordine, now)
{
  if (STATI_CHIUSI.includes(ordine.stato)) return "chiuso";
  const minuti = (now - new Date(ordine.dataOra).getTime()) / 60000;
  if (minuti < SOGLIA_GIALLO) return "nuovo";
  if (minuti < SOGLIA_ROSSO) return "medio";
  return "urgente";
}

function formattaTimer(ordine, now)
{
  const sec = Math.max(0, Math.floor((now - new Date(ordine.dataOra).getTime()) / 1000));
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function nomePiatto(d)
{
  return d.piatto?.nome || `Piatto #${d.piattoId ?? d.id}`;
}

function stampaOrdine(ordine)
{
  const righe = (ordine.dettagli || [])
    .filter((d) => d.stato !== "INVIATO")
    .map((d) =>
    {
      const flag = d.stato === "CANCELLATO" ? " [CANCELLATO]" : "";
      return `${d.quantita}x ${nomePiatto(d)}${flag}`;
    })
    .join("<br/>");

  const html = `
    <html><head><title>Ordine Tavolo ${ordine.numeroTavolo || ordine.tavoloId}</title>
    <style>body{font-family:sans-serif;padding:24px} h1{margin:0 0 8px} .meta{color:#555;margin-bottom:16px}</style>
    </head><body>
    <h1>Tavolo ${ordine.numeroTavolo || ordine.tavoloId}</h1>
    <div class="meta">Ordine #${ordine.id} · ${new Date(ordine.dataOra).toLocaleString("it-IT")}</div>
    <div>${righe || "Nessun piatto"}</div>
    </body></html>`;

  const w = window.open("", "_blank", "width=480,height=640");
  if (!w) return;
  w.document.write(html);
  w.document.close();
  w.focus();
  w.print();
}

export default function Cucina()
{
  const [ordini, setOrdini] = useState([]);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(Date.now());
  const [filtro, setFiltro] = useState("attivi");
  const [dettaglioAperto, setDettaglioAperto] = useState(null); // `${ordineId}-${dettaglioId}`

  useEffect(() =>
  {
    const tick = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(tick);
  }, []);

  const upsertOrdine = useCallback((ordine) =>
  {
    setOrdini((prev) =>
    {
      const esiste = prev.some((o) => o.id === ordine.id);
      if (esiste) return prev.map((o) => (o.id === ordine.id ? ordine : o));
      return [ordine, ...prev];
    });
  }, []);

  const caricaOrdiniIniziali = useCallback(async () =>
  {
    try
    {
      const stati = ["INVIATO", "IN_PREPARAZIONE", "SERVITO", "CANCELLATO"];
      const risultati = await Promise.all(
        stati.map(async (stato) =>
        {
          const res = await fetch(`${API_BASE}/api/v1/ordini/stato/${stato}`, {
            headers: authHeaders(),
          });
          return res.ok ? res.json() : [];
        })
      );
      const mappa = new Map();
      risultati.flat().forEach((o) => mappa.set(o.id, o));
      setOrdini([...mappa.values()]);
    } catch (e)
    {
      console.error("Errore caricamento ordini iniziali", e);
    } finally
    {
      setLoading(false);
    }
  }, []);

  useEffect(() =>
  {
    caricaOrdiniIniziali();
    const disconnetti = connettiWebSocket((ordine) => upsertOrdine(ordine));
    return () => disconnetti();
  }, [caricaOrdiniIniziali, upsertOrdine]);

  const cambiaStatoOrdine = async (ordine, nuovoStato) =>
  {
    if (ordine.stato === nuovoStato) return;
    try
    {
      const res = await fetch(`${API_BASE}/api/v1/ordini/${ordine.id}/stato`, {
        method: "PATCH",
        headers: authHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify({ stato: nuovoStato }),
      });
      if (res.ok)
      {
        const aggiornato = await res.json();
        upsertOrdine(aggiornato);
      }
    } catch (e)
    {
      console.error("Errore aggiornamento stato ordine", e);
    }
  };

  const cambiaStatoDettaglio = async (ordine, dettaglio, nuovoStato) =>
  {
    try
    {
      const res = await fetch(
        `${API_BASE}/api/v1/ordini/${ordine.id}/dettagli/${dettaglio.id}/stato`,
        {
          method: "PATCH",
          headers: authHeaders({ "Content-Type": "application/json" }),
          body: JSON.stringify({ stato: nuovoStato }),
        }
      );
      if (res.ok)
      {
        const aggiornato = await res.json();
        upsertOrdine(aggiornato);
      }
    } catch (e)
    {
      console.error("Errore aggiornamento dettaglio", e);
    } finally
    {
      setDettaglioAperto(null);
    }
  };

  const conteggi = useMemo(
    () => Object.fromEntries(FILTRI.map((f) => [f.id, ordini.filter(f.match).length])),
    [ordini]
  );

  const visibili = useMemo(() =>
  {
    const f = FILTRI.find((x) => x.id === filtro);
    return ordini
      .filter(f.match)
      .sort((a, b) => new Date(b.dataOra) - new Date(a.dataOra));
  }, [ordini, filtro]);

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
            <ChefHat className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight m-0">Cucina</h1>
            <p className="text-sm text-neutral-400 m-0">Comande in tempo reale dai tablet</p>
          </div>
        </div>

        <span className="flex items-center gap-1.5 text-xs text-green-400 font-mono">
          <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Live
        </span>
      </div>

      <div className="flex gap-2 flex-wrap mb-5">
        {FILTRI.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFiltro(f.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold border transition-colors cursor-pointer ${filtro === f.id
              ? "bg-amber-400 text-neutral-950 border-amber-400"
              : "bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700"
              }`}
          >
            {f.label} <span className="font-mono opacity-70">({conteggi[f.id]})</span>
          </button>
        ))}
      </div>

      {loading && <p className="text-sm text-neutral-500 text-center py-16">Caricamento ordini...</p>}

      {!loading && visibili.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center gap-3 py-20">
          <Sparkles className="w-8 h-8 text-neutral-700" />
          <p className="text-neutral-400 text-sm">Nessun ordine in questa vista.</p>
        </div>
      )}

      {!loading && visibili.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {visibili.map((o) =>
          {
            const urg = URGENZA[livelloUrgenza(o, now)];
            const chiuso = STATI_CHIUSI.includes(o.stato);
            const piattiVisibili = (o.dettagli || []).filter((d) => d.stato !== "INVIATO");

            return (
              <div
                key={o.id}
                className={`bg-neutral-950/60 border border-neutral-800 border-t-4 ${urg.card} rounded-2xl p-4 flex flex-col ${chiuso ? "opacity-75" : ""}`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="text-lg font-bold leading-tight m-0">
                      Tavolo {o.numeroTavolo || o.tavoloId}
                    </h3>
                    <p className="text-[11px] text-neutral-500 font-mono m-0 mt-0.5">
                      Ricevuto alle{" "}
                      {new Date(o.dataOra).toLocaleTimeString("it-IT", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <span className={`flex items-center gap-1.5 text-sm font-mono font-bold px-3 py-1.5 rounded-full border ${urg.timer}`}>
                    <Clock className="w-3.5 h-3.5" /> {formattaTimer(o, now)}
                  </span>
                </div>

                <ul className="space-y-1.5 my-4 flex-1">
                  {piattiVisibili.length === 0 && (
                    <li className="text-xs text-neutral-500 text-center py-4">Nessun piatto in coda</li>
                  )}
                  {piattiVisibili.map((d) =>
                  {
                    const key = `${o.id}-${d.id}`;
                    const cancellato = d.stato === "CANCELLATO";
                    const aperto = dettaglioAperto === key;

                    return (
                      <li key={d.id} className="relative">
                        <button
                          type="button"
                          disabled={chiuso}
                          onClick={() => setDettaglioAperto(aperto ? null : key)}
                          className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-sm border transition-colors text-left cursor-pointer disabled:cursor-default ${cancellato
                            ? "bg-red-950/50 border-red-600/60 text-red-300"
                            : aperto
                              ? "bg-neutral-800 border-amber-400/50 text-neutral-100"
                              : "bg-neutral-900 border-neutral-800 text-neutral-200 hover:border-neutral-600"
                            }`}
                        >
                          <span className={cancellato ? "line-through decoration-red-400/80" : ""}>
                            {nomePiatto(d)}
                          </span>
                          <span className={`font-mono font-bold ${cancellato ? "text-red-400" : "text-amber-400"}`}>
                            x{d.quantita}
                          </span>
                        </button>

                        {aperto && !chiuso && (
                          <div className="absolute z-10 left-0 right-0 mt-1 flex gap-1.5 p-1.5 bg-neutral-900 border border-neutral-700 rounded-xl shadow-xl">
                            <button
                              type="button"
                              onClick={() => cambiaStatoDettaglio(o, d, "INVIATO")}
                              className="flex-1 flex items-center justify-center gap-1 text-[11px] font-bold py-2 rounded-lg bg-green-500/15 text-green-400 border border-green-500/40 hover:bg-green-500/25 cursor-pointer"
                            >
                              <Send className="w-3 h-3" /> Inviato
                            </button>
                            <button
                              type="button"
                              onClick={() => cambiaStatoDettaglio(o, d, "CANCELLATO")}
                              className="flex-1 flex items-center justify-center gap-1 text-[11px] font-bold py-2 rounded-lg bg-red-500/15 text-red-400 border border-red-500/40 hover:bg-red-500/25 cursor-pointer"
                            >
                              <XCircle className="w-3 h-3" /> Cancellato
                            </button>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => stampaOrdine(o)}
                    className="flex items-center justify-center gap-1 text-[11px] font-bold py-2 rounded-xl border bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-neutral-100 cursor-pointer"
                  >
                    <Printer className="w-3 h-3" /> Stampa
                  </button>
                  <button
                    type="button"
                    disabled={o.stato === "SERVITO"}
                    onClick={() => cambiaStatoOrdine(o, "SERVITO")}
                    className={`flex items-center justify-center gap-1 text-[11px] font-bold py-2 rounded-xl border cursor-pointer disabled:opacity-50 ${o.stato === "SERVITO"
                      ? "bg-green-500 text-neutral-950 border-green-500"
                      : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-green-500/50 hover:text-green-400"
                      }`}
                  >
                    <Send className="w-3 h-3" /> Inviato
                  </button>
                  <button
                    type="button"
                    disabled={o.stato === "CANCELLATO"}
                    onClick={() => cambiaStatoOrdine(o, "CANCELLATO")}
                    className={`flex items-center justify-center gap-1 text-[11px] font-bold py-2 rounded-xl border cursor-pointer disabled:opacity-50 ${o.stato === "CANCELLATO"
                      ? "bg-red-500 text-white border-red-500"
                      : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-red-500/50 hover:text-red-400"
                      }`}
                  >
                    <XCircle className="w-3 h-3" /> Cancellato
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
