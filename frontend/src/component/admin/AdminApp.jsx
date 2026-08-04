import { useState } from "react";
import LoginStaff from "./LoginStaff";
import AdminLayout from "./AdminLayout";
import PianoSala from "./PianoSala";
import CodaOrdini from "./CodaOrdini";
import GestioneMenu from "./GestioneMenu";
import DettaglioOrdineTavolo from "./DettaglioOrdineTavolo";

export default function AdminApp()
{
  const [utente, setUtente] = useState(null);
  const [pagina, setPagina] = useState("piano-sala");

  if (!utente)
  {
    return <LoginStaff onLogin={(u) => setUtente(u)} />;
  }

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
        return <PianoSala ruolo="ROLE_ADMIN" />;
    }
  };

  return (
    <AdminLayout
      pagina={pagina}
      onNavigate={setPagina}
      onLogout={() => setUtente(null)}
      utente={utente}
    >
      {renderPagina()}
    </AdminLayout>
  );
}
