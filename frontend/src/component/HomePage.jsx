import React from 'react';
// Usiamo Lucide React per icone moderne e pulite
import { Infinity, HandCoins, ArrowRight } from 'lucide-react';

const MenuOptionCard = ({ title, description, icon: Icon, price, onSelect, primary = false }) => {
  return (
    <button 
      onClick={onSelect}
      className={`relative group overflow-hidden rounded-3xl border ${primary ? 'border-amber-400 bg-neutral-900' : 'border-neutral-800 bg-neutral-950'} 
                 p-8 text-left transition-all duration-300 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-950/30
                 w-full flex flex-col justify-between`}
    >
      {/* Sfondo sfumato sferico per effetto premium al passaggio del mouse */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.1),transparent_70%)] 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

      <div>
        <div className="flex items-center gap-5 mb-8">
          <div className={`p-4 rounded-full ${primary ? 'bg-amber-400/10' : 'bg-neutral-800'}`}>
            <Icon className={`w-10 h-10 ${primary ? 'text-amber-400' : 'text-neutral-300'}`} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-neutral-50">{title}</h3>
            {price && <p className="text-sm font-medium text-amber-300 mt-1">{price}</p>}
          </div>
        </div>

        <p className="text-xl text-neutral-300 leading-relaxed max-w-lg">
          {description}
        </p>
      </div>

      <div className={`mt-12 flex items-center justify-between border-t pt-6 ${primary ? 'border-amber-400/20' : 'border-neutral-800'}`}>
        <span className={`font-semibold tracking-wide ${primary ? 'text-amber-400' : 'text-neutral-100'}`}>
          SELEZIONA MENU
        </span>
        <div className={`p-3 rounded-full ${primary ? 'bg-amber-400 text-neutral-950' : 'bg-neutral-800 text-neutral-200'} 
                        group-hover:translate-x-1 transition-transform`}>
          <ArrowRight className="w-6 h-6" />
        </div>
      </div>
    </button>
  );
};

const HomePage = ({ onSelection }) => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-6 md:p-12 font-sans">
      {/* Intestazione */}
      <header className="flex justify-between items-center mb-16 md:mb-24">
        <div className="flex gap-4 items-center">
            {/* Logo o Icona Sushi stilizzata */}
            <div className="p-3 bg-neutral-900 rounded-2xl border border-neutral-800">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
                    <path d="M12 8V12L15 14" stroke="#E5E7EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 8V12L5 14" stroke="#E5E7EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="7" y="16" width="10" height="4" rx="2" fill="#FBBF24" fill-opacity="0.1" stroke="#FBBF24" stroke-width="1.5"/>
                </svg>
            </div>
          <h1 className="text-4xl font-extrabold tracking-tighter">
            Sushi <span className="text-amber-400">Zen</span>
          </h1>
        </div>
        <div className="text-sm font-mono p-3 px-5 bg-neutral-900 rounded-full border border-neutral-800">
           Tavolo <span className="text-amber-400 font-bold">40</span>
        </div>
      </header>

      {/* Sezione Centrale */}
      <main className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight max-w-3xl">
            Benvenuto. Come desideri <span className="text-amber-400">ordinare</span> oggi?
          </h2>
          <p className="text-2xl text-neutral-300 mt-6 max-w-xl mx-auto">
            Scegli il tuo percorso gastronomico per iniziare l'esperienza Sushi Zen.
          </p>
        </div>

        {/* Griglia Scelte */}
        <div className="grid md:grid-cols-2 gap-10 w-full">
          <MenuOptionCard 
            title="Menu All You Can Eat"
            description="Ordina tutti i piatti che desideri, pagando un prezzo fisso. Esplora il nostro intero menu senza limiti. (Bevande escluse)"
            icon={Infinity}
            price="A Pranzo €21.90 | A Cena €31.90"
            onSelect={() => onSelection('all-you-can-eat')}
            primary={true} // Stile evidenziato (Oro)
          />
          <MenuOptionCard 
            title="Menu Alla Carta"
            description="Ordina i tuoi piatti preferiti singolarmente, pagando solo quello che consumi. Perfetto per un pranzo rapido o una scelta specifica."
            icon={HandCoins}
            // price="Prezzi al piatto" // Prezzo opzionale
            onSelect={() => onSelection('alla-carta')}
          />
        </div>
      </main>

      {/* Footer / Nota rapida */}
      <footer className="mt-24 md:mt-32 text-center text-neutral-500 text-sm">
        <p>Utilizzando questa app, accetti le Condizioni di Servizio e l'Informativa sulla Privacy di Sushi Zen SRL.</p>
        <p className="mt-1">© 2026 Sushi Zen. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
};

export default HomePage;
