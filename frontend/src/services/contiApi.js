import { getToken } from "../component/admin/auth";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

/**
 * @param {number} tavoloId - id utente tablet (PK)
 * @param {'conto' | 'cassa'} tipo
 */
export async function richiediPagamentoTablet(tavoloId, tipo) {
  const modalita = tipo === "cassa" ? "RICHIESTA_CASSA" : "RICHIESTA_CONTO";
  const token = getToken();
  if (!token) {
    throw new Error("Sessione scaduta: effettua di nuovo il login del tablet.");
  }

  const res = await fetch(`${API_URL}/api/v1/conti/tavolo/${tavoloId}/richiedi-pagamento`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
    body: JSON.stringify({ modalita }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Errore richiesta pagamento (${res.status})`);
  }

  const text = await res.text();
  return text ? JSON.parse(text) : {};
}