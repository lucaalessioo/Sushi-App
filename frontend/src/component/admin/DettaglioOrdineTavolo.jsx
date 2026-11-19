import { useState, useEffect, useCallback } from "react";
import { Receipt, Wallet, CheckCircle2, RefreshCw } from "lucide-react";
import { connettiWebSocket } from "../../services/websocket";
import { confermaPagamentoConto, loadContiAttivi } from "../../services/adminApi";

function nomePiatto(d) {
  return d.piatto?.nome || d.nome || `Piatto #${d.piattoId ?? d.id}`;
}

/** Rosso = in sala, blu = chiedi conto, verde = paga in cassa */
function faseContoTavolo(conto) {
  if (conto?.richiestaPagamento === "RICHIESTA_CASSA") return "cassa";
  if (conto?.richiestaPagamento === "RICHIESTA_CONTO") return "conto";
  return "mangiando";
}

const STILE_FASE = {
  mangiando: {
    label: "Sta mangiando",
    idle: "bg-red-950/80 border-red-500/45 text-red-100 hover:border-red-400/60",
    dot: "bg-red-400",
  },
  conto: {
    label: "Ha chiesto il conto",
    idle: "bg-blue-950/80 border-blue-500/45 text-blue-100 hover:border-blue-400/60",
    dot: "bg-blue-400",
  },
  cassa: {
    label: "Paga in cassa",
    idle: "bg-green-950/80 border-green-500/45 text-green-100 hover:border-green-400/60",
    dot: "bg-green-400",
  },
};

export default function DettaglioOrdineTavolo() {
  const [conti, setConti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tavoloSel, setTavoloSel] = useState(null);
  const [confermato, setConfermato] = useState(false);
  const [errore, setErrore] = useState("");
  const [pagamentoInCorso, setPagamentoInCorso] = useState(false);

  const caricaConti = useCallback(async () => {
    try {
      const data = await loadContiAttivi();
      setConti(data);
      setErrore("");
    } catch (e) {
      console.error(e);
      setErrore("Impossibile caricare i conti dal server. Verifica di essere loggato come admin e riavvia il backend.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    caricaConti();
    const disconnetti = connettiWebSocket(() => {
      caricaConti();
    });
    return () => disconnetti();
  }, [caricaConti]);

  const numeriConConti = [...new Set(
    conti.map((c) => c.numeroTavolo).filter((n) => n != null)
  )].sort((a, b) => a - b);

  const contoSelezionato = tavoloSel
    ? conti.find((c) => c.numeroTavolo === tavoloSel)
    : null;

  const ordiniTavolo = contoSelezionato?.ordini?.filter((o) => o.stato !== "PAGATO") ?? [];

  const isAllYouCanEat =
    contoSelezionato?.tipoMenu === "ALL_YOU_CAN_EAT"
    || Number(contoSelezionato?.totaleFisso) > 0;

  const totaleAllaCarta = ordiniTavolo.reduce((sum, o) => sum + (Number(o.totale) || 0), 0);

  const totaleTavolo = isAllYouCanEat
    ? Number(contoSelezionato?.totaleFisso ?? contoSelezionato?.totale ?? 0)
    : contoSelezionato?.totale != null
      ? Number(contoSelezionato.totale)
      : totaleAllaCarta;

  const faseSelezionato = faseContoTavolo(contoSelezionato);
  const puoIncassare =
    contoSelezionato?.richiestaPagamento === "RICHIESTA_CONTO"
    || contoSelezionato?.richiestaPagamento === "RICHIESTA_CASSA";

  const segnaComePagato = async () => {
    if (!contoSelezionato || pagamentoInCorso || !puoIncassare) return;
    try {
      setPagamentoInCorso(true);
      await confermaPagamentoConto(contoSelezionato.id);
      await caricaConti();
      setConfermato(true);
      setTimeout(() => {
        setConfermato(false);
        setTavoloSel(null);
      }, 1800);
    } catch (e) {
      alert(e.message || "Errore durante la conferma del pagamento");
    } finally {
      setPagamentoInCorso(false);
    }
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-3xl p-5 sm:p-6 min-h-[640px]">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
            <Receipt className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight m-0">Conto per tavolo</h1>
            <p className="text-sm text-neutral-400 m-0">
              Rosso = in sala · Blu = chiedi conto · Verde = paga in cassa
            </p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-green-400 font-mono">
          <RefreshCw className="w-3.5 h-3.5 animate-spin" /> WebSocket attivo
        </span>
      </div>

      {errore && <p className="text-sm text-red-400 mb-4">{errore}</p>}

      {loading && <p className="text-sm text-neutral-500 text-center py-16">Caricamento...</p>}

      {!loading && numeriConConti.length === 0 && (
        <p className="text-sm text-neutral-500 text-center py-20">
          Nessun tavolo ha ordini in sospeso al momento.
        </p>
      )}

      {!loading && numeriConConti.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5">
          <div className="flex md:flex-col gap-2 flex-wrap">
            {numeriConConti.map((n) => {
              const conto = conti.find((c) => c.numeroTavolo === n);
              const ayce = conto?.tipoMenu === "ALL_YOU_CAN_EAT" || Number(conto?.totaleFisso) > 0;
              const fase = faseContoTavolo(conto);
              const stile = STILE_FASE[fase];
              const selezionato = tavoloSel === n;
              return (
              <button
                key={n}
                type="button"
                onClick={() => setTavoloSel(n)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold border transition-colors cursor-pointer text-left ${
                  selezionato
                    ? "ring-2 ring-amber-400 ring-offset-2 ring-offset-neutral-900 " + stile.idle
                    : stile.idle
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${stile.dot}`} aria-hidden />
                  <span>Tavolo {n}</span>
                </span>
                <span className="block text-[10px] font-semibold mt-0.5 opacity-90">
                  {stile.label}
                  {" · "}
                  {ayce ? "AYCE" : "Alla carta"}
                </span>
              </button>
              );
            })}
          </div>

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
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h2 className="text-sm font-bold text-neutral-200 m-0">Ordini — Tavolo {tavoloSel}</h2>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full border ${
                      faseSelezionato === "mangiando"
                        ? "border-red-500/40 text-red-300 bg-red-500/10"
                        : faseSelezionato === "conto"
                          ? "border-blue-500/40 text-blue-300 bg-blue-500/10"
                          : "border-green-500/40 text-green-300 bg-green-500/10"
                    }`}
                  >
                    {STILE_FASE[faseSelezionato].label}
                  </span>
                </div>

                {isAllYouCanEat ? (
                  <div className="mb-4 p-3 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-200">
                    <span className="font-bold uppercase tracking-wide">All You Can Eat</span>
                    <span className="text-neutral-300">
                      {" "}
                      — {contoSelezionato?.numeroPersone ?? "?"} persone
                      {contoSelezionato?.prezzoPerPersona != null && (
                        <> × €{Number(contoSelezionato.prezzoPerPersona).toFixed(2)}</>
                      )}
                      {contoSelezionato?.tipoPasto && (
                        <> ({contoSelezionato.tipoPasto === "CENA" ? "Cena" : "Pranzo"})</>
                      )}
                    </span>
                    <p className="text-[11px] text-neutral-400 mt-1 m-0">
                      I piatti elencati sono inclusi nel prezzo fisso del tavolo.
                    </p>
                  </div>
                ) : (
                  <p className="text-[11px] text-neutral-500 mb-4">Menu alla carta — totale da somma piatti</p>
                )}

                <div className="space-y-4 mb-5">
                  {ordiniTavolo.map((o) => (
                    <div key={o.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-neutral-500">
                          {new Date(o.dataOra).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400">
                          {(o.stato || "").replaceAll("_", " ")}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {(o.dettagli || [])
                          .filter((d) => d.stato !== "CANCELLATO")
                          .map((d) => (
                            <li key={d.id ?? `${o.id}-${d.piattoId}`} className="text-xs text-neutral-300 flex justify-between">
                              <span>
                                {d.quantita}x {nomePiatto(d)}
                                {d.stato === "INVIATO" && (
                                  <span className="text-green-500/80 ml-1">(servito)</span>
                                )}
                              </span>
                              {!isAllYouCanEat && d.prezzoUnitario != null && (
                                <span className="font-mono text-neutral-400">
                                  €{(Number(d.prezzoUnitario) * d.quantita).toFixed(2)}
                                </span>
                              )}
                              {isAllYouCanEat && (
                                <span className="font-mono text-neutral-500 text-[10px]">incluso</span>
                              )}
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
                  <span className="text-sm text-neutral-400">
                    {isAllYouCanEat ? "Totale fisso (AYCE)" : "Totale conto"}
                  </span>
                  <span className="text-xl font-mono font-bold text-amber-400">€{totaleTavolo.toFixed(2)}</span>
                </div>

                {!puoIncassare && (
                  <p className="text-xs text-red-300/90 mt-4 mb-0 text-center">
                    In attesa che il tavolo scelga «Richiedi il conto» o «Paga in cassa» dal tablet.
                  </p>
                )}

                <button
                  type="button"
                  onClick={segnaComePagato}
                  disabled={pagamentoInCorso || !puoIncassare}
                  className={`w-full mt-4 font-bold py-3 rounded-2xl text-sm flex items-center justify-center gap-2 transition-colors ${
                    puoIncassare
                      ? "bg-amber-400 hover:bg-amber-300 text-neutral-950 cursor-pointer"
                      : "bg-neutral-800 text-neutral-500 cursor-not-allowed border border-neutral-700"
                  } disabled:opacity-60`}
                >
                  <Wallet className="w-4 h-4" /> {pagamentoInCorso ? "Conferma..." : "Segna come pagato"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}