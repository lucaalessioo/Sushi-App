// src/services/ordiniApi.js

import { getToken } from "../component/admin/auth";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

export const inviaOrdineBackend = async (tavoloId, carrelloItems) => {
  const payload = {
    tavoloId: Number(tavoloId),
    dettagli: carrelloItems.map((item) => {
      const piattoIdNum = Number(item.dbId ?? item.id);
      if (isNaN(piattoIdNum)) {
        throw new Error(`ID non valido per il piatto: ${item.name}`);
      }
      return {
        piattoId: piattoIdNum,
        quantita: Number(item.qty),
      };
    }),
  };

  const token = getToken();
  if (!token) {
    throw new Error("Sessione scaduta: effettua di nuovo il login del tablet.");
  }

  const response = await fetch(`${API_URL}/api/v1/ordini`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    if (response.status === 403 || response.status === 401) {
      throw new Error(
        errorData.message ||
          "Accesso negato: riloggia il tablet e riprova a inviare l'ordine."
      );
    }
    throw new Error(errorData.message || `Errore HTTP ${response.status}`);
  }

  const text = await response.text();
  return text ? JSON.parse(text) : {};
};
