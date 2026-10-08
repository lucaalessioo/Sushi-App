import { useState } from "react";
import LoginStaff from "./LoginStaff";
import AdminLayout from "./AdminLayout";
import PianoSala from "./PianoSala";
import CodaOrdini from "./CodaOrdini";
import GestioneMenu from "./GestioneMenu";
import DettaglioOrdineTavolo from "./DettaglioOrdineTavolo";
import { getUtente, clearSession } from "./auth";

export default function AdminApp()
{
  // Ripristina la sessione dopo un ricarico (se il token non è scaduto)
  const [utente, setUtente] = useState(() => getUtente());
  const [pagina, setPagina] = useState("piano-sala");

  if (!utente)
  {
    return <LoginStaff onLogin={(u) => setUtente(u)} />;
  }

  const logout = () =>
  {
    clearSession();
    setUtente(null);
  };

  const renderPagina = () =>
  {
    switch (pagina)
    {
      case "coda-ordini":
        return <CodaOrdini />;
      case "gestione-menu":
        return <GestioneMenu />;
      case "conto-tavolo":
        return <DettaglioOrdineTavolo />;
      case "piano-sala":
      default:
        return <PianoSala ruolo={utente.ruolo} />;
    }
  };

  return (
    <AdminLayout
      pagina={pagina}
      onNavigate={setPagina}
      onLogout={logout}
      utente={utente}
    >
      {renderPagina()}
    </AdminLayout>
  );
}
