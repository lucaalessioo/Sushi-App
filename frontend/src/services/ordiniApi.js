// src/services/ordiniApi.js

// Definisci correttamente l'URL del tuo backend Spring Boot (modificalo se usi una porta o un dominio diverso)
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

  const response = await fetch(`${API_URL}/api/v1/ordini`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Fondamentale per far sì che il browser includa i cookie di autenticazione/sessione
    credentials: "include", 
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Errore HTTP ${response.status}`);
  }

  // Se la risposta ha un corpo JSON lo restituisce, altrimenti restituisce un oggetto vuoto
  const text = await response.text();
  return text ? JSON.parse(text) : {};
};