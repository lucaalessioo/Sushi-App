// src/services/ordiniApi.js

import { getToken } from "../component/admin/auth";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

function buildMenuPayload(opzioniMenu = {}) {
  if (opzioniMenu.orderType === "all-you-can-eat" || opzioniMenu.tipoMenu === "ALL_YOU_CAN_EAT") {
    const peopleCount = Number(opzioniMenu.peopleCount ?? opzioniMenu.numeroPersone ?? 0);
    const pricePerPerson = Number(opzioniMenu.pricePerPerson ?? opzioniMenu.prezzoPerPersona ?? 0);
    const tableTotal =
      opzioniMenu.tableTotal != null
        ? Number(opzioniMenu.tableTotal)
        : opzioniMenu.totaleFisso != null
          ? Number(opzioniMenu.totaleFisso)
          : peopleCount * pricePerPerson;

    const mealType = (opzioniMenu.mealType ?? opzioniMenu.tipoPasto ?? "pranzo").toString().toLowerCase();

    return {
      tipoMenu: "ALL_YOU_CAN_EAT",
      numeroPersone: peopleCount > 0 ? peopleCount : null,
      tipoPasto: mealType === "cena" ? "CENA" : "PRANZO",
      prezzoPerPersona: pricePerPerson > 0 ? pricePerPerson : null,
      totaleFisso: tableTotal > 0 ? tableTotal : null,
    };
  }

  return { tipoMenu: "ALLA_CARTA" };
}

/** Evita doppio POST se l’utente clicca due volte su Invia ordine (stesso carrello). */
const inviiInCorso = new Map();

function chiaveInvio(tavoloId, dettagli) {
  const righe = [...dettagli]
    .map((d) => `${d.piattoId}:${d.quantita}`)
    .sort()
    .join("|");
  return `${tavoloId}::${righe}`;
}

async function eseguiInvioOrdine(payload, token) {
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
}

export const inviaOrdineBackend = async (tavoloId, carrelloItems, opzioniMenu = {}) => {
  const payload = {
    tavoloId: Number(tavoloId),
    ...buildMenuPayload(opzioniMenu),
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

  const key = chiaveInvio(payload.tavoloId, payload.dettagli);
  const inCorso = inviiInCorso.get(key);
  if (inCorso) {
    return inCorso;
  }

  const promessa = eseguiInvioOrdine(payload, token).finally(() => {
    inviiInCorso.delete(key);
  });
  inviiInCorso.set(key, promessa);
  return promessa;
};