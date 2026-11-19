import { getBearerHeaderIfValid, getToken, tokenScadutoFromToken } from "../component/admin/auth";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

function messaggioAuthRecensione(status) {
  const token = getToken();
  if (!token || tokenScadutoFromToken(token)) {
    return "Sessione scaduta o assente: torna al menu e accedi di nuovo con il tablet del tavolo.";
  }
  if (status === 403) {
    return "Accesso negato. Usa il login tablet (non l’account admin) oppure effettua di nuovo l’accesso.";
  }
  return `Errore invio recensione (${status})`;
}

export async function fetchRecensioni() {
  const res = await fetch(`${API_BASE}/api/v1/recensioni`);
  if (!res.ok) {
    throw new Error(`Errore caricamento recensioni (${res.status})`);
  }
  return res.json();
}

export async function inviaRecensione(payload) {
  const res = await fetch(`${API_BASE}/api/v1/recensioni`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getBearerHeaderIfValid(),
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const testo = err.message || messaggioAuthRecensione(res.status);
    if (res.status === 401) {
      throw new Error(
        testo.includes("Autenticazione")
          ? "Sessione scaduta: esci dal menu e accedi di nuovo con il tablet del tavolo, poi reinvia la recensione."
          : testo
      );
    }
    throw new Error(testo);
  }
  return res.json();
}

export async function fetchPiattiOrdinatiTavolo(tavoloId) {
  const res = await fetch(`${API_BASE}/api/v1/ordini/tavolo/${tavoloId}`, {
    headers: getBearerHeaderIfValid(),
    credentials: "include",
  });
  if (!res.ok) {
    return [];
  }
  const ordini = await res.json();
  const mappa = new Map();

  ordini
    .filter((o) => o.stato !== "PAGATO" && o.stato !== "CANCELLATO")
    .forEach((ordine) => {
      (ordine.dettagli || []).forEach((d) => {
        if (d.stato === "CANCELLATO") return;
        const piatto = d.piatto || {};
        const piattoId = piatto.id ?? d.piattoId;
        const key = String(piattoId ?? d.id);
        const nome = piatto.nome || `Piatto #${key}`;
        const immagine = piatto.immagineUrl || piatto.image || null;
        const qty = Number(d.quantita) || 1;
        const prev = mappa.get(key);
        if (prev) {
          mappa.set(key, { ...prev, qty: prev.qty + qty });
        } else {
          mappa.set(key, {
            id: key,
            piattoId: piattoId,
            name: nome,
            image: immagine,
            qty,
          });
        }
      });
    });

  return [...mappa.values()];
}