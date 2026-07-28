import { useState } from 'react';
import HomePage from './component/HomePage';
import MenuAll from './component/MenuAll';
import Recensione from './component/Recensione';

function App() {
  const [selectedMenuType, setSelectedMenuType] = useState('');
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  return (
    <>
      {/* HomePage: Nessun tasto recensioni */}
      {selectedMenuType === '' && (
        <HomePage 
          onSelection={(type) => setSelectedMenuType(type)} 
        />
      )}

      {/* Menu All You Can Eat: Tasto recensioni attivo */}
      {selectedMenuType === 'all-you-can-eat' && (
        <MenuAll 
          onBack={() => setSelectedMenuType('')} 
          onOpenReviews={() => setIsReviewOpen(true)}
        />
      )}

      {/* Menu Alla Carta: Tasto recensioni attivo */}
      {selectedMenuType === 'alla-carta' && (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-20 font-sans relative">
          <button 
            onClick={() => setIsReviewOpen(true)}
            className="absolute top-6 right-6 px-4 py-2 bg-neutral-900 rounded-full border border-amber-400/40 text-amber-400 text-sm font-semibold hover:bg-amber-400/10 transition-colors"
          >
            ★ Valuta Menu
          </button>
          
          <h1 className="text-4xl font-bold">Menu Alla Carta</h1>
          <button 
            onClick={() => setSelectedMenuType('')} 
            className="mt-8 p-3 px-8 bg-neutral-800 rounded-full border border-neutral-700 hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            Torna Indietro
          </button>
        </div>
      )}

      {/* Overlay Modale Recensioni */}
      <Recensione 
        isOpen={isReviewOpen} 
        onClose={() => setIsReviewOpen(false)} 
      />
    </>
  );
}

export default App;