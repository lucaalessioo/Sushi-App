/** Piatti ancora da gestire in cucina (ATTIVO o senza stato). */
export function ordineHaPiattiInCoda(ordine) {
  const dettagli = ordine?.dettagli || [];
  if (dettagli.length === 0) return true;
  return dettagli.some(
    (d) => d.stato !== "INVIATO" && d.stato !== "CANCELLATO"
  );
}

/** Ordine visibile nella coda generale (cucina / admin). */
export function ordineInCodaGenerale(ordine) {
  if (!ordine) return false;
  if (["SERVITO", "PAGATO", "CANCELLATO"].includes(ordine.stato)) return false;
  if (!ordineHaPiattiInCoda(ordine)) return false;
  return true;
}