// Servizio per leggere i piatti dal backend Spring Boot.
// L'URL del backend si può cambiare creando un file .env con:
//   VITE_API_URL=http://localhost:8080
const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

const ENDPOINTS = {
  'all-you-can-eat': '/api/piatti/all-you-can-eat',
  'alla-carta': '/api/piatti', // tutto il menu disponibile (bevande incluse)
};

// Immagine di riserva se il piatto non ha immagineUrl nel database
const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">' +
    '<rect width="100%" height="100%" fill="#171717"/>' +
    '<text x="50%" y="50%" fill="#737373" font-family="sans-serif" font-size="22" ' +
    'text-anchor="middle" dominant-baseline="middle">Immagine non disponibile</text>' +
    '</svg>'
  );

/**
 * Converte un Piatto del backend (campi in italiano) nel formato usato
 * dai componenti Card / Carrello / Menu (id, name, description, price, image, category).
 */
export const mapPiatto = (p) => ({
  id: p.codicePiatto && p.codicePiatto.trim() ? p.codicePiatto : String(p.id),
  dbId: p.id,
  name: p.nome,
  description: p.descrizione ?? '',
  price: Number(p.prezzo ?? 0),
  image: p.immagineUrl || FALLBACK_IMAGE,
  category: (p.categoria ?? '').trim().toLowerCase(),
  categoryLabel: (p.categoria ?? '').trim(), // testo originale, per la sidebar
  isNew: false, // non esiste ancora nel database
  isAllYouCanEat: p.isAllYouCanEat ?? p.allYouCanEat ?? null,
});

/**
 * @param {'all-you-can-eat' | 'alla-carta'} orderType
 * @param {AbortSignal} [signal]
 */
export const fetchPiatti = async (orderType, signal) =>
{
  const path = ENDPOINTS[orderType] ?? '/api/piatti';
  const response = await fetch(`${API_URL}${path}`, { signal });

  if (!response.ok)
  {
    throw new Error(`Errore del server (${response.status}) nel caricamento dei piatti`);
  }

  const data = await response.json();
  return data.map(mapPiatto);
};