import { useState } from "react";
import { LogOut } from "lucide-react";
import LoginStaff from "../admin/LoginStaff";
import { getUtente, clearSession } from "../admin/auth";
import Cucina from "./Cucina";

// App dedicata alla cucina, raggiungibile da /cucina.
// Ha login e schermata propri, senza la sidebar dell'area admin
// (cassa, gestione menu, piano sala).
export default function CucinaApp()
{
  const [utente, setUtente] = useState(() => getUtente());

  if (!utente)
  {
    return <LoginStaff onLogin={(u) => setUtente(u)} />;
  }

  const logout = () =>
  {
    clearSession();
    setUtente(null);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      {/* Barra superiore */}
      <header className="shrink-0 bg-neutral-900 border-b border-neutral-800 px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 8V12L15 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 8V12L5 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="7" y="16" width="10" height="4" rx="2" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="1.5" />
          </svg>
          <span className="font-extrabold tracking-tighter text-white">
            Sushi <span className="text-amber-400">Zen</span>
            <span className="ml-2 text-xs font-semibold text-neutral-500 tracking-normal">Cucina</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          {utente?.nome && <span className="hidden sm:block text-xs text-neutral-500">{utente.nome}</span>}
          <button
            onClick={logout}
            className="flex items-center gap-2 px-3 py-2 rounded-2xl text-sm font-semibold text-neutral-400 hover:bg-neutral-800 hover:text-red-400 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" /> Esci
          </button>
        </div>
      </header>

      {/* Contenuto a tutta larghezza */}
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        <div className="max-w-screen-2xl mx-auto">
          <Cucina />
        </div>
      </main>
    </div>
  );
}
