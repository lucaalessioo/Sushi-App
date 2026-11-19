import { getToken } from "../component/admin/auth";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

export function adminAuthHeaders(extra = {}) {
  const token = getToken();
  return {
    ...extra,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

function adminFetch(url, options = {}) {
  const { headers, ...rest } = options;
  return fetch(url, {
    ...rest,
    credentials: "include",
    headers: adminAuthHeaders(headers),
  });
}

export async function loadOrdiniAttivi() {
  const stati = ["INVIATO", "IN_PREPARAZIONE", "SERVITO", "CANCELLATO"];
  const risultati = await Promise.all(
    stati.map(async (stato) => {
      const res = await adminFetch(`${API_BASE}/api/v1/ordini/stato/${stato}`);
      return res.ok ? res.json() : [];
    })
  );
  const mappa = new Map();
  risultati.flat().forEach((o) => mappa.set(o.id, o));
  return [...mappa.values()];
}

export async function loadContiAttivi() {
  const res = await adminFetch(`${API_BASE}/api/v1/conti/attivi`);
  if (!res.ok) {
    throw new Error(`Errore caricamento conti (${res.status})`);
  }
  return res.json();
}

export async function confermaPagamentoConto(contoId) {
  const res = await adminFetch(`${API_BASE}/api/v1/conti/${contoId}/conferma-pagamento`, {
    method: "POST",
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Errore conferma pagamento (${res.status})`);
  }
  return res.json();
}

export async function aggiornaStatoOrdine(ordineId, stato) {
  const res = await adminFetch(`${API_BASE}/api/v1/ordini/${ordineId}/stato`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ stato }),
  });
  if (!res.ok) {
    throw new Error(`Errore aggiornamento ordine (${res.status})`);
  }
  return res.json();
}

export async function loadTavoli() {
  const res = await adminFetch(`${API_BASE}/api/tavoli`);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Errore caricamento tavoli (${res.status})`);
  }
  return res.json();
}