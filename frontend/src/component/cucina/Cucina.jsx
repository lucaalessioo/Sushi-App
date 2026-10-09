import { useState, useEffect, useCallback, useMemo } from "react";
import { ChefHat, Clock, Sparkles, Send, Flame, CheckCircle2, XCircle, RefreshCw, Printer } from "lucide-react";

// Stessa chiave usata da CodaOrdini e DettaglioOrdineTavolo: gli ordini restano condivisi.
const STORAGE_KEY = "admin:ordini";

// Ogni quanti ms si controllano i nuovi ordini.
// Per un vero real-time sostituisci leggiOrdini() con SSE / WebSocket dal backend Spring Boot.
const POLL_MS = 3000;

// Soglie timer (in minuti)
const SOGLIA_GIALLO = 5;  // da 0 a 5 min  -> blu (appena arrivata)
const SOGLIA_ROSSO = 10;  // da 5 a 10 min -> giallo (media attesa), oltre -> rosso (ferma da tanto)

const STATI = {
  IN_INVIATO: { label: "Ricevuto", icon: Send, active: "bg-amber-400 text-neutral-950 border-amber-400", badge: "bg-amber-400/10 text-amber-400 border-amber-400/30" },
  IN_PREPARAZIONE: { label: "In preparazione", icon: Flame, active: "bg-blue-500 text-white border-blue-500", badge: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
  COMPLETATO: { label: "Inviato", icon: CheckCircle2, active: "bg-green-500 text-neutral-950 border-green-500", badge: "bg-green-500/10 text-green-400 border-green-500/30" },
  CANCELLATO: { label: "Cancellato", icon: XCircle, active: "bg-red-500 text-white border-red-500", badge: "bg-red-500/10 text-red-400 border-red-500/30" },
};
const ORDINE_BOTTONI_PIATTO = ["COMPLETATO", "CANCELLATO"];
const STATI_CHIUSI = ["COMPLETATO", "CANCELLATO", "PAGATO"];

// Un piatto è "da servire" finché non è stato inviato al tavolo o cancellato.
// Solo questi piatti compaiono nella vista "Attivi".
const STATI_PIATTO_APERTI = ["IN_INVIATO", "IN_PREPARAZIONE"];

const FILTRI = [
  { id: "attivi", label: "Attivi", match: (o) => o.stato === "IN_INVIATO" || o.stato === "IN_PREPARAZIONE" },
  { id: "completati", label: "Inviati", match: (o) => o.stato === "COMPLETATO" || o.stato === "PAGATO" },
  { id: "cancellati", label: "Cancellati", match: (o) => o.stato === "CANCELLATO" },
  { id: "tutti", label: "Tutti", match: () => true },
];

// Colori del timer in base all'attesa
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

// Il timer si blocca quando l'ordine viene completato o cancellato
function formattaTimer(ordine, now)
{
  const fine = STATI_CHIUSI.includes(ordine.stato) && ordine.chiusoAt ? new Date(ordine.chiusoAt).getTime() : now;
  const sec = Math.max(0, Math.floor((fine - new Date(ordine.dataOra).getTime()) / 1000));
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// Gli ordini vecchi non hanno lo stato sui piatti: si eredita quello dell'ordine.
function statoPiatto(ordine, piatto)
{
  if (piatto.stato) return piatto.stato;
  return ordine.stato === "PAGATO" ? "COMPLETATO" : ordine.stato;
}

const piattoDaServire = (ordine, piatto) => STATI_PIATTO_APERTI.includes(statoPiatto(ordine, piatto));

function contaPiattiDaServire(ordine)
{
  return ordine.dettagli.filter((d) => piattoDaServire(ordine, d)).length;
}

// Stato dell'ordine ricavato dai suoi piatti
function derivaStatoOrdine(dettagli)
{
  const stati = dettagli.map((d) => d.stato);
  if (stati.every((s) => s === "CANCELLATO")) return "CANCELLATO";
  const validi = stati.filter((s) => s !== "CANCELLATO");
  if (validi.every((s) => s === "COMPLETATO")) return "COMPLETATO";
  if (validi.some((s) => s === "IN_PREPARAZIONE" || s === "COMPLETATO")) return "IN_PREPARAZIONE";
  return "IN_INVIATO";
}

// Ricostruisce l'ordine a partire dai piatti: stato e timer restano coerenti.
function ricostruisciOrdine(ordine, dettagli)
{
  const stato = ordine.stato === "PAGATO" ? "PAGATO" : derivaStatoOrdine(dettagli);
  return {
    ...ordine,
    dettagli,
    stato,
    chiusoAt: STATI_CHIUSI.includes(stato) ? (ordine.chiusoAt || new Date().toISOString()) : null,
  };
}

// Fissa lo stato esplicito su ogni piatto (serve per gli ordini salvati prima di questa funzione)
const normalizzaDettagli = (ordine) => ordine.dettagli.map((d) => ({ ...d, stato: statoPiatto(ordine, d) }));

async function leggiOrdini()
{
  try
  {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch
  {
    return [];
  }
}

async function scriviOrdini(ordini)
{
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ordini));
}

export default function Cucina()
{
  const [ordini, setOrdini] = useState([]);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(Date.now());
  const [filtro, setFiltro] = useState("attivi");
  const [piattoAperto, setPiattoAperto] = useState(null); // "idOrdine-indice"

  // Tick del timer ogni secondo
  useEffect(() =>
  {
    const tick = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(tick);
  }, []);

  // Ricezione ordini: lettura iniziale + polling
  useEffect(() =>
  {
    let mounted = true;
    const carica = async () =>
    {
      try
      {
        const dati = await leggiOrdini();
        // Ogni nuova comanda viene presa in carico automaticamente dalla cucina.
        const normalizzati = dati.map((o) =>
        {
          if (o.stato !== "IN_INVIATO") return o;
          const dettagli = normalizzaDettagli(o).map((d) =>
            d.stato === "IN_INVIATO" ? { ...d, stato: "IN_PREPARAZIONE" } : d
          );
          return ricostruisciOrdine(o, dettagli);
        });
        if (JSON.stringify(normalizzati) !== JSON.stringify(dati)) await scriviOrdini(normalizzati);
        if (mounted) setOrdini(normalizzati);
      } catch
      {
        /* nessun ordine ancora salvato */
      } finally
      {
        if (mounted) setLoading(false);
      }
    };
    carica();
    const poll = setInterval(carica, POLL_MS);
    return () => { mounted = false; clearInterval(poll); };
  }, []);

  // Rilegge sempre l'ultima versione prima di scrivere, così non si perdono
  // ordini arrivati dai menu nel frattempo.
  const aggiornaOrdine = useCallback(async (id, modifica) =>
  {
    try
    {
      const ultimi = await leggiOrdini();
      const next = ultimi.map((o) => (o.id === id ? modifica(o) : o));
      setOrdini(next);
      await scriviOrdini(next);
    } catch (e)
    {
      console.error("Errore aggiornamento ordine", e);
    }
  }, []);

  // Azione sull'intero ordine: si applica solo ai piatti ancora da servire.
  // I piatti già inviati o cancellati restano come sono.
  const cambiaStato = (ordine, nuovoStato) =>
  {
    if (contaPiattiDaServire(ordine) === 0) return;
    if (nuovoStato === "CANCELLATO" && !window.confirm(`Cancellare i piatti ancora da servire del tavolo ${ordine.tavoloNumero}?`)) return;

    aggiornaOrdine(ordine.id, (o) =>
    {
      const dettagli = normalizzaDettagli(o).map((d) =>
        STATI_PIATTO_APERTI.includes(d.stato) ? { ...d, stato: nuovoStato } : d
      );
      return ricostruisciOrdine(o, dettagli);
    });
  };

  const cambiaStatoPiatto = (ordine, indice, nuovoStato) =>
  {
    const piatto = ordine.dettagli[indice];
    if (statoPiatto(ordine, piatto) === nuovoStato) return;
    if (nuovoStato === "CANCELLATO" && !window.confirm(`Cancellare "${piatto.nome}" (tavolo ${ordine.tavoloNumero})?`)) return;

    aggiornaOrdine(ordine.id, (o) =>
    {
      const dettagli = normalizzaDettagli(o).map((d, i) => (i === indice ? { ...d, stato: nuovoStato } : d));
      return ricostruisciOrdine(o, dettagli);
    });
  };

  // Rimuove definitivamente l'ordine. Possibile solo quando non ci sono più piatti da servire.
  const eliminaOrdine = async (ordine) =>
  {
    if (contaPiattiDaServire(ordine) > 0) return;
    const avviso = ordine.stato === "PAGATO"
      ? `Eliminare l'ordine del tavolo ${ordine.tavoloNumero}?`
      : `Eliminare l'ordine del tavolo ${ordine.tavoloNumero}? Verrà rimosso definitivamente anche dagli altri schermi (es. cassa).`;
    if (!window.confirm(avviso)) return;

    try
    {
      const ultimi = await leggiOrdini();
      const next = ultimi.filter((o) => o.id !== ordine.id);
      setOrdini(next);
      await scriviOrdini(next);
    } catch (e)
    {
      console.error("Errore eliminazione ordine", e);
    }
  };

  // Stampa la comanda tramite la finestra di stampa del browser/PC collegato alla stampante.
  const stampaOrdine = (ordine) =>
  {
    const righe = ordine.dettagli.map((d) =>
      `<li><span>${String(d.quantita ?? 1)} × ${escapeHtml(d.nome ?? "Piatto")}</span><small>${escapeHtml(statoPiatto(ordine, d))}</small></li>`
    ).join("");
    const finestra = window.open("", "_blank", "width=420,height=650");
    if (!finestra)
    {
      window.alert("La stampa è stata bloccata dal browser. Consenti i popup per stampare la comanda.");
      return;
    }
    finestra.document.write(`<!doctype html><html lang="it"><head><meta charset="utf-8"><title>Comanda tavolo ${escapeHtml(ordine.tavoloNumero)}</title><style>
      body{font-family:Arial,sans-serif;color:#000;padding:16px;max-width:340px;margin:0 auto}h1{font-size:22px;margin:0 0 6px}p{font-size:12px;margin:4px 0 14px}ul{list-style:none;padding:0;margin:0}li{display:flex;justify-content:space-between;gap:12px;border-bottom:1px dashed #999;padding:10px 0;font-size:15px}small{font-size:9px;max-width:90px;overflow-wrap:anywhere}@media print{body{padding:0;width:100%}}
      </style></head><body><h1>COMANDA — TAVOLO ${escapeHtml(ordine.tavoloNumero)}</h1><p>${new Date(ordine.dataOra).toLocaleString("it-IT")}</p><ul>${righe}</ul><script>window.onload=()=>{window.print();window.onafterprint=()=>window.close();};<\/script></body></html>`);
    finestra.document.close();
  };

  const escapeHtml = (val) => String(val).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const generaOrdineDiProva = async () =>
  {
    const esempi = [
      [{ nome: "Nigiri Salmone", quantita: 4 }, { nome: "Uramaki Ebi Tempura", quantita: 2 }],
      [{ nome: "Sashimi Misto", quantita: 1 }, { nome: "Gyoza", quantita: 3 }],
      [{ nome: "Ramen Miso", quantita: 1 }],
      [{ nome: "Hosomaki Tonno", quantita: 6 }, { nome: "Edamame", quantita: 2 }, { nome: "Tempura Mista", quantita: 1 }],
    ];
    const nuovo = {
      id: Date.now() + Math.random(),
      tavoloNumero: Math.floor(Math.random() * 20) + 1,
      stato: "IN_PREPARAZIONE",
      dataOra: new Date().toISOString(),
      dettagli: esempi[Math.floor(Math.random() * esempi.length)].map((d) => ({ ...d, stato: "IN_PREPARAZIONE" })),
    };
    try
    {
      const next = [...(await leggiOrdini()), nuovo];
      setOrdini(next);
      await scriviOrdini(next);
    } catch (e)
    {
      console.error("Errore creazione ordine di prova", e);
    }
  };

  const conteggi = useMemo(
    () => Object.fromEntries(FILTRI.map((f) => [f.id, ordini.filter(f.match).length])),
    [ordini]
  );

  // Il più recente per primo (in alto a sinistra), il più vecchio in fondo
  const visibili = useMemo(() =>
  {
    const f = FILTRI.find((x) => x.id === filtro);
    return ordini
      .filter(f.match)
      .sort((a, b) => new Date(b.dataOra) - new Date(a.dataOra));
  }, [ordini, filtro]);

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      {/* Intestazione */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
            <ChefHat className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight m-0">Cucina</h1>
            <p className="text-sm text-neutral-400 m-0">Comande in arrivo — le più recenti compaiono per prime</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Legenda timer */}
          <div className="hidden md:flex items-center gap-3 text-[11px] text-neutral-400">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" />&lt; {SOGLIA_GIALLO} min</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />{SOGLIA_GIALLO}–{SOGLIA_ROSSO} min</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" />&gt; {SOGLIA_ROSSO} min</span>
          </div>
          <span className="flex items-center gap-1.5 text-[11px] text-neutral-500 font-mono">
            <RefreshCw className="w-3 h-3" /> live
          </span>
        </div>
      </div>

      {/* Filtri */}
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
          <p className="text-neutral-400 text-sm">Nessun ordine in questa vista.</p>
          <button
            onClick={generaOrdineDiProva}
            className="text-xs font-semibold text-amber-400 border border-amber-400/30 bg-amber-400/10 px-4 py-2 rounded-full hover:bg-amber-400/20 transition-colors cursor-pointer"
          >
            Genera ordine di prova
          </button>
        </div>
      )}

      {/* Griglia comande: da sinistra a destra, poi a capo */}
      {!loading && visibili.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {visibili.map((o) =>
          {
            const urg = URGENZA[livelloUrgenza(o, now)];
            const statoInfo = STATI[o.stato];
            const chiuso = STATI_CHIUSI.includes(o.stato);
            const daServire = contaPiattiDaServire(o);
            // Nella vista "Attivi" i piatti già inviati o cancellati spariscono dalla lista.
            const piattiVisibili = o.dettagli
              .map((d, i) => ({ d, i }))
              .filter(({ d }) => filtro !== "attivi" || piattoDaServire(o, d));

            return (
              <div
                key={o.id}
                className={`bg-neutral-950/60 border border-neutral-800 border-t-4 ${urg.card} rounded-2xl p-4 flex flex-col ${chiuso ? "opacity-70" : ""}`}
              >
                {/* Testata card: tavolo + timer */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="text-lg font-bold leading-tight m-0">Tavolo {o.tavoloNumero}</h3>
                    <p className="text-[11px] text-neutral-500 font-mono m-0 mt-0.5">
                      Ricevuto alle {new Date(o.dataOra).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                  <span
                    title={urg.label}
                    className={`flex items-center gap-1.5 text-sm font-mono font-bold px-3 py-1.5 rounded-full border ${urg.timer}`}
                  >
                    <Clock className="w-3.5 h-3.5" /> {formattaTimer(o, now)}
                  </span>
                </div>

                {/* Stato corrente + piatti ancora da servire */}
                <div className="flex items-center gap-2 mt-2">
                  {statoInfo && (
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${statoInfo.badge}`}>
                      {statoInfo.label}
                    </span>
                  )}
                  <span className="text-[11px] text-neutral-500">
                    {daServire === 0 ? "Nessun piatto da servire" : `${daServire} ${daServire === 1 ? "piatto" : "piatti"} da servire`}
                  </span>
                </div>

                {/* Piatti: cliccando si apre il pannello per cambiare lo stato del singolo piatto */}
                <ul className="space-y-1.5 my-4 flex-1">
                  {piattiVisibili.length === 0 && (
                    <li className="text-xs text-neutral-500 text-center py-3">Nessun piatto da servire.</li>
                  )}
                  {piattiVisibili.map(({ d, i }) =>
                  {
                    const sp = statoPiatto(o, d);
                    const info = STATI[sp];
                    const key = `${o.id}-${i}`;
                    const aperto = piattoAperto === key;
                    const annullato = sp === "CANCELLATO";

                    return (
                      <li key={i} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setPiattoAperto(aperto ? null : key)}
                          className="w-full flex items-center justify-between gap-2 px-3 py-2 text-sm text-left hover:bg-neutral-800/60 transition-colors cursor-pointer"
                        >
                          <span className="flex flex-col gap-1 min-w-0">
                            <span className={`truncate ${annullato ? "line-through text-neutral-500" : "text-neutral-200"}`}>
                              {d.nome}
                            </span>
                            {info && (
                              <span className={`self-start text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border ${info.badge}`}>
                                {info.label}
                              </span>
                            )}
                          </span>
                          <span className="font-mono font-bold text-amber-400 shrink-0">x{d.quantita}</span>
                        </button>

                        {aperto && (
                          <div className="grid grid-cols-2 gap-1.5 p-2 border-t border-neutral-800 bg-neutral-950/60">
                            {ORDINE_BOTTONI_PIATTO.map((s) =>
                            {
                              const si = STATI[s];
                              const Icon = si.icon;
                              return (
                                <button
                                  key={s}
                                  onClick={() => { cambiaStatoPiatto(o, i, s); setPiattoAperto(null); }}
                                  className={`flex items-center justify-center gap-1.5 text-[11px] font-bold py-2 rounded-lg border transition-colors cursor-pointer ${sp === s
                                    ? si.active
                                    : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-100 hover:border-neutral-600"
                                    }`}
                                >
                                  <Icon className="w-3 h-3" /> {si.label}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => stampaOrdine(o)}
                    className="flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 rounded-xl border bg-blue-500/10 border-blue-500/30 text-blue-300 hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" /> Stampa
                  </button>
                  <button
                    onClick={() => cambiaStato(o, "CANCELLATO")}
                    disabled={daServire === 0}
                    className="flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 rounded-xl border bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <XCircle className="w-3.5 h-3.5" /> Cancellato
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Utile per i test finché i menu non inviano ordini reali */}
      {!loading && visibili.length > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={generaOrdineDiProva}
            className="text-xs font-semibold text-neutral-500 hover:text-amber-400 transition-colors cursor-pointer"
          >
            + Genera ordine di prova
          </button>
        </div>
      )}
    </div>
  );
}
