// Gestione centralizzata di token JWT e utente loggato.
// Il token sta in localStorage, così sopravvive al ricarico della pagina.

const TOKEN_KEY = "token";
const USER_KEY = "utente";

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export function salvaSessione(token, utente)
{
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(utente));
}

export function clearSession()
{
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

// Legge la scadenza ("exp") dal payload del JWT, senza verificare la firma (lo fa il backend)
function tokenScaduto(token)
{
  try
  {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(base64));
    return payload.exp ? payload.exp * 1000 < Date.now() : false;
  } catch
  {
    return true;
  }
}

// Ripristina la sessione al ricarico; se il token è scaduto la elimina
export function getUtente()
{
  const token = getToken();
  if (!token || tokenScaduto(token))
  {
    clearSession();
    return null;
  }
  try
  {
    return JSON.parse(localStorage.getItem(USER_KEY));
  } catch
  {
    return null;
  }
}
