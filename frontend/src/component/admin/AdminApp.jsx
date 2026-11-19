import { useState } from "react";
import LoginStaff from "./LoginStaff";
import AdminLayout from "./AdminLayout";
import PianoSala from "./PianoSala";
import CodaOrdini from "./CodaOrdini";
import GestioneMenu from "./GestioneMenu";
import DettaglioOrdineTavolo from "./DettaglioOrdineTavolo";
import { getUtenteAdmin, clearSession } from "./auth";

export default function AdminApp()
{
  const [utente, setUtente] = useState(() => getUtenteAdmin());
  const [pagina, setPagina] = useState("piano-sala");

  if (!utente)
  {
    return (
      <LoginStaff
        titolo="Area amministrazione e cassa"
        ruoliConsentiti={["ROLE_ADMIN"]}
        onLogin={(u) =>
        {
          if (u?.ruolo !== "ROLE_ADMIN")
          {
            clearSession();
            return;
          }
          setUtente(u);
        }}
      />
    );
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
