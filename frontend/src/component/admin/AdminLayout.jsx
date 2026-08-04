import { LayoutGrid, ChefHat, Soup, Receipt, LogOut } from "lucide-react";

const NAV_ITEMS = [
  { id: "piano-sala", label: "Piano sala", icon: LayoutGrid },
  { id: "coda-ordini", label: "Coda ordini", icon: ChefHat },
  { id: "gestione-menu", label: "Gestione menu", icon: Soup },
  { id: "conto-tavolo", label: "Conto tavolo", icon: Receipt },
];

export default function AdminLayout({ pagina, onNavigate, onLogout, utente, children })
{
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex">
      {/* Sidebar */}
      <aside className="w-20 lg:w-60 shrink-0 bg-neutral-900 border-r border-neutral-800 flex flex-col py-6 px-3">
        <div className="flex items-center gap-3 px-2 mb-8">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 8V12L15 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 8V12L5 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="7" y="16" width="10" height="4" rx="2" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="1.5" />
          </svg>
          <span className="hidden lg:block font-extrabold tracking-tighter text-white">
            Sushi <span className="text-amber-400">Zen</span>
          </span>
        </div>

        <nav className="flex-1 space-y-1.5">
          {NAV_ITEMS.map((item) =>
          {
            const Icon = item.icon;
            const isActive = pagina === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                title={item.label}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-2xl text-sm font-semibold transition-colors cursor-pointer ${isActive
                    ? "bg-amber-400 text-neutral-950"
                    : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100"
                  }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className="hidden lg:block">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="border-t border-neutral-800 pt-4 px-1">
          {utente?.nome && (
            <p className="hidden lg:block text-xs text-neutral-500 mb-2 truncate">
              {utente.nome}
            </p>
          )}
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm font-semibold text-neutral-400 hover:bg-neutral-800 hover:text-red-400 transition-colors cursor-pointer"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            <span className="hidden lg:block">Esci</span>
          </button>
        </div>
      </aside>

      {/* Contenuto */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
