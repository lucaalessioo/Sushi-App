import { useState, useEffect, useCallback, useMemo } from "react";
import { ChefHat, Clock, Sparkles, Send, Flame, CheckCircle2, XCircle, RefreshCw } from "lucide-react";
import { connettiWebSocket } from "../../services/websocket";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

const SOGLIA_GIALLO = 10;
const SOGLIA_ROSSO = 15;

const STATI = {
    INVIATO: { label: "Inviato", icon: Send, active: "bg-amber-400 text-neutral-950 border-amber-400", badge: "bg-amber-400/10 text-amber-400 border-amber-400/30" },
    IN_PREPARAZIONE: { label: "In preparazione", icon: Flame, active: "bg-blue-500 text-white border-blue-500", badge: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
    SERVITO: { label: "Servito", icon: CheckCircle2, active: "bg-green-500 text-neutral-950 border-green-500", badge: "bg-green-500/10 text-green-400 border-green-500/30" },
    PAGATO: { label: "Pagato", icon: XCircle, active: "bg-red-500 text-white border-red-500", badge: "bg-red-500/10 text-red-400 border-red-500/30" },
};

const ORDINE_BOTTONI = ["INVIATO", "IN_PREPARAZIONE", "SERVITO"];
const STATI_CHIUSI = ["SERVITO", "PAGATO"];

const FILTRI = [
    { id: "attivi", label: "Attivi", match: (o) => o.stato === "INVIATO" || o.stato === "IN_PREPARAZIONE" },
    { id: "serviti", label: "Serviti", match: (o) => o.stato === "SERVITO" || o.stato === "PAGATO" },
    { id: "tutti", label: "Tutti", match: () => true },
];

const URGENZA = {
    nuovo: { card: "border-t-blue-500", timer: "bg-blue-500/15 text-blue-300 border-blue-500/40", label: "Appena arrivato" },
    medio: { card: "border-t-yellow-400", timer: "bg-yellow-400/15 text-yellow-300 border-yellow-400/40", label: "In attesa" },
    urgente: { card: "border-t-red-500", timer: "bg-red-500/20 text-red-300 border-red-500/50 animate-pulse", label: "Fermo da troppo" },
    chiuso: { card: "border-t-neutral-700", timer: "bg-neutral-800 text-neutral-400 border-neutral-700", label: "Chiuso" },
};

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
    const fine = STATI_CHIUSI.includes(ordine.stato) ? new Date(ordine.dataOra).getTime() : now;
    const sec = Math.max(0, Math.floor((now - new Date(ordine.dataOra).getTime()) / 1000));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function Cucina()
{
    const [ordini, setOrdini] = useState([]);
    const [loading, setLoading] = useState(true);
    const [now, setNow] = useState(Date.now());
    const [filtro, setFiltro] = useState("attivi");

    // Timer per aggiornamento UI ogni secondo
    useEffect(() =>
    {
        const tick = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(tick);
    }, []);

    // 1. Caricamento iniziale ordini da Backend REST
    const caricaOrdiniIniziali = useCallback(async () =>
    {
        try
        {
            const token = localStorage.getItem("token");
            const res = await fetch(`${API_BASE}/api/v1/ordini/stato/INVIATO`, {
                headers: token ? { Authorization: `Bearer ${token}` } : {},
            });
            if (res.ok)
            {
                const datiInviati = await res.json();
                const resPrep = await fetch(`${API_BASE}/api/v1/ordini/stato/IN_PREPARAZIONE`, {
                    headers: token ? { Authorization: `Bearer ${token}` } : {},
                });
                const datiPrep = resPrep.ok ? await resPrep.json() : [];
                setOrdini([...datiInviati, ...datiPrep]);
            }
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

        // 2. Connessione WEBSOCKET in tempo reale!
        const disconnetti = connettiWebSocket((nuovoOAggiornatoOrdine) =>
        {
            setOrdini((prev) =>
            {
                const esiste = prev.some((o) => o.id === nuovoOAggiornatoOrdine.id);
                if (esiste)
                {
                    return prev.map((o) => (o.id === nuovoOAggiornatoOrdine.id ? nuovoOAggiornatoOrdine : o));
                } else
                {
                    return [nuovoOAggiornatoOrdine, ...prev]; // Nuovo ordine in cima
                }
            });
        });

        return () => disconnetti();
    }, [caricaOrdiniIniziali]);

    // Aggiorna lo stato dell'ordine al backend (che a sua volta re-invia via WS)
    const cambiaStato = async (ordine, nuovoStato) =>
    {
        if (ordine.stato === nuovoStato) return;

        try
        {
            const token = localStorage.getItem("token");
            await fetch(`${API_BASE}/api/v1/ordini/${ordine.id}/stato`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify({ stato: nuovoStato }),
            });
        } catch (e)
        {
            console.error("Errore aggiornamento stato ordine", e);
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
                        <h1 className="text-xl font-bold tracking-tight m-0">Cucina (Live WebSocket)</h1>
                        <p className="text-sm text-neutral-400 m-0">Comande in tempo reale dai tablet</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-xs text-green-400 font-mono">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" /> WebSocket attivo
                    </span>
                </div>
            </div>

            <div className="flex gap-2 flex-wrap mb-5">
                {FILTRI.map((f) => (
                    <button
                        key={f.id}
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
                    <p className="text-neutral-400 text-sm">Nessun ordine in questa vista. In attesa dai tablet...</p>
                </div>
            )}

            {!loading && visibili.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {visibili.map((o) =>
                    {
                        const urg = URGENZA[livelloUrgenza(o, now)];
                        const statoInfo = STATI[o.stato];
                        const chiuso = STATI_CHIUSI.includes(o.stato);

                        return (
                            <div
                                key={o.id}
                                className={`bg-neutral-950/60 border border-neutral-800 border-t-4 ${urg.card} rounded-2xl p-4 flex flex-col ${chiuso ? "opacity-70" : ""}`}
                            >
                                <div className="flex items-start justify-between gap-2 mb-1">
                                    <div>
                                        <h3 className="text-lg font-bold leading-tight m-0">Tavolo {o.numeroTavolo || o.tavoloId}</h3>
                                        <p className="text-[11px] text-neutral-500 font-mono m-0 mt-0.5">
                                            Ricevuto alle {new Date(o.dataOra).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })}
                                        </p>
                                    </div>
                                    <span className={`flex items-center gap-1.5 text-sm font-mono font-bold px-3 py-1.5 rounded-full border ${urg.timer}`}>
                                        <Clock className="w-3.5 h-3.5" /> {formattaTimer(o, now)}
                                    </span>
                                </div>

                                {statoInfo && (
                                    <span className={`self-start text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border mt-2 ${statoInfo.badge}`}>
                                        {statoInfo.label}
                                    </span>
                                )}

                                <ul className="space-y-1.5 my-4 flex-1">
                                    {o.dettagli?.map((d, i) => (
                                        <li key={i} className="flex items-center justify-between bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-sm">
                                            <span className="text-neutral-200">{d.piatto?.nome || `Piatto #${d.piattoId}`}</span>
                                            <span className="font-mono font-bold text-amber-400">x{d.quantita}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="grid grid-cols-3 gap-2">
                                    {ORDINE_BOTTONI.map((s) =>
                                    {
                                        const info = STATI[s];
                                        const Icon = info.icon;
                                        const attivo = o.stato === s;
                                        return (
                                            <button
                                                key={s}
                                                onClick={() => cambiaStato(o, s)}
                                                className={`flex items-center justify-center gap-1 text-[11px] font-bold py-2 rounded-xl border transition-colors cursor-pointer ${attivo
                                                        ? info.active
                                                        : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-100 hover:border-neutral-600"
                                                    }`}
                                            >
                                                <Icon className="w-3 h-3" /> {info.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}