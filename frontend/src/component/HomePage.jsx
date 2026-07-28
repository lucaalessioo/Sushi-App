import React, { useState } from 'react';
import { Infinity, HandCoins, ArrowRight, Users, Sun, Moon, CheckCircle2, X } from 'lucide-react';

const MenuOptionCard = ({ title, description, icon: Icon, price, onSelect, primary = false }) => {
  return (
    <button 
      onClick={onSelect}
      className={`relative group overflow-hidden rounded-3xl border backdrop-blur-md transition-all duration-300
                 ${primary 
                   ? 'border-amber-400/80 bg-neutral-950/80 hover:border-amber-300 hover:bg-neutral-900/90' 
                   : 'border-neutral-700/60 bg-neutral-950/70 hover:border-neutral-500 hover:bg-neutral-900/85'} 
                 p-8 text-left hover:shadow-2xl hover:shadow-amber-950/40
                 w-full flex flex-col justify-between cursor-pointer`}
    >
      {/* Sfondo sfumato sferico al passaggio del mouse */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.12),transparent_70%)] 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"/>

      <div>
        <div className="flex items-center gap-5 mb-8">
          <div className={`p-4 rounded-full ${primary ? 'bg-amber-400/15' : 'bg-neutral-800/80'}`}>
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

      <div className={`mt-12 flex items-center justify-between border-t pt-6 ${primary ? 'border-amber-400/30' : 'border-neutral-800'}`}>
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
  const bgImageUrl = "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Prezzi standard
  const PRICE_PRANZO = 21.90;
  const PRICE_CENA = 31.90;

  // Stato della modale di configurazione All You Can Eat
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [peopleCount, setPeopleCount] = useState(2);
  const [mealType, setMealType] = useState('pranzo');

  const currentPricePerPerson = mealType === 'pranzo' ? PRICE_PRANZO : PRICE_CENA;
  const tableTotal = (currentPricePerPerson * peopleCount).toFixed(2);

  const handleConfirmAllYouCanEat = () => {
    onSelection('all-you-can-eat', {
      peopleCount,
      mealType,
      pricePerPerson: currentPricePerPerson,
      tableTotal: parseFloat(tableTotal)
    });
  };

  return (
    <div 
      className="relative min-h-screen text-neutral-100 p-6 md:p-12 font-sans bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-between"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      {/* OVERLAY SCURO RIMOSSO PER MOSTRARE LO SFONDO LUMINOSO */}

      {/* Contenuto Principale */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Intestazione */}
        <header className="flex justify-between items-center mb-12 md:mb-16">
          <div className="flex gap-4 items-center">
            <div className="p-3 bg-neutral-900/80 backdrop-blur-md rounded-2xl border border-neutral-700/60 shadow-lg">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 8V12L15 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 8V12L5 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="7" y="16" width="10" height="4" rx="2" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeWidth="1.5"/>
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tighter drop-shadow-xl text-white">
              Sushi <span className="text-amber-400">Zen</span>
            </h1>
          </div>
          <div className="text-sm font-mono p-3 px-5 bg-neutral-900/80 backdrop-blur-md rounded-full border border-neutral-700/60 shadow-lg">
            Tavolo <span className="text-amber-400 font-bold">40</span>
          </div>
        </header>

        {/* Sezione Centrale */}
        <main className="flex flex-col items-center">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-5xl md:text-5xl font-extrabold tracking-tighter leading-tight max-w-3xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] text-white">
              Benvenuto a Sushi Zen. Come desideri <span className="text-amber-400">ordinare</span>?
            </h2>
          </div>

          {/* Griglia Scelte */}
          <div className="grid md:grid-cols-2 gap-10 w-full">
            <MenuOptionCard 
              title="Menu All You Can Eat"
              description="Ordina tutti i piatti che desideri, pagando un prezzo fisso per persona. Esplora il nostro intero menu senza limiti. (Bevande escluse)"
              icon={Infinity}
              price={`A Pranzo €${PRICE_PRANZO.toFixed(2)} | A Cena €${PRICE_CENA.toFixed(2)}`}
              onSelect={() => setIsModalOpen(true)}
              primary={true}
            />
            <MenuOptionCard 
              title="Menu Alla Carta"
              description="Ordina i tuoi piatti preferiti singolarmente, pagando solo quello che consumi. Perfetto per un pranzo rapido o una scelta specifica."
              icon={HandCoins}
              onSelect={() => onSelection('alla-carta')}
            />
          </div>
        </main>
      </div>

      {/* MODALE DI CONFIGURAZIONE ALL YOU CAN EAT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-900 border border-neutral-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative text-neutral-100">
            
            {/* Tasto Chiudi */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-400/10 rounded-2xl text-amber-400 border border-amber-400/20">
                <Infinity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Configura Tavolo</h3>
                <p className="text-xs text-neutral-400">All You Can Eat</p>
              </div>
            </div>

            {/* SELEZIONE N. PERSONE */}
            <div className="mb-6 bg-neutral-950/60 p-4 rounded-2xl border border-neutral-800">
              <label className="text-sm font-semibold text-neutral-300 flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-amber-400" />
                Quante persone ci sono al tavolo?
              </label>
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={() => setPeopleCount((prev) => Math.max(1, prev - 1))}
                  className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 text-2xl font-bold hover:bg-neutral-700 transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="text-3xl font-extrabold text-amber-400 font-mono">
                  {peopleCount} {peopleCount === 1 ? 'Persona' : 'Persone'}
                </span>
                <button
                  onClick={() => setPeopleCount((prev) => prev + 1)}
                  className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 text-2xl font-bold hover:bg-neutral-700 transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* SELEZIONE FASCIA ORARIA */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-neutral-300 block mb-3">
                Seleziona il Menu:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setMealType('pranzo')}
                  className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all cursor-pointer ${
                    mealType === 'pranzo'
                      ? 'border-amber-400 bg-amber-400/10 text-amber-400 font-bold'
                      : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:bg-neutral-800/50'
                  }`}
                >
                  <Sun className="w-6 h-6" />
                  <span className="text-sm">Pranzo</span>
                  <span className="text-xs font-mono font-bold">€{PRICE_PRANZO.toFixed(2)} / pers.</span>
                </button>

                <button
                  onClick={() => setMealType('cena')}
                  className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all cursor-pointer ${
                    mealType === 'cena'
                      ? 'border-amber-400 bg-amber-400/10 text-amber-400 font-bold'
                      : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:bg-neutral-800/50'
                  }`}
                >
                  <Moon className="w-6 h-6" />
                  <span className="text-sm">Cena</span>
                  <span className="text-xs font-mono font-bold">€{PRICE_CENA.toFixed(2)} / pers.</span>
                </button>
              </div>
            </div>

            {/* RIEPILOGO PREZZO TAVOLO */}
            <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800 mb-6 flex justify-between items-center">
              <div>
                <p className="text-xs text-neutral-400">Totale Fisso Tavolo</p>
                <p className="text-xs text-neutral-500">
                  {peopleCount} x €{currentPricePerPerson.toFixed(2)} (Bevande escluse)
                </p>
              </div>
              <div className="text-2xl font-extrabold text-amber-400 font-mono">
                €{tableTotal}
              </div>
            </div>

            {/* TASTO CONFERMA */}
            <button
              onClick={handleConfirmAllYouCanEat}
              className="w-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold py-4 rounded-2xl text-base transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Conferma e Apri Menu</span>
            </button>

          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 mt-16 text-center text-neutral-200 text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
        <p>Utilizzando questa app, accetti le Condizioni di Servizio e l'Informativa sulla Privacy di Sushi Zen SRL.</p>
        <p className="mt-1 font-medium">© 2026 Sushi Zen. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
};

export default HomePage;