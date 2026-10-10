// src/services/ordiniApi.js

const API_URL = "http://localhost:8080";

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

  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/api/v1/ordini`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Errore HTTP ${response.status}`);
  }

  const text = await response.text();
  return text ? JSON.parse(text) : {};
};
