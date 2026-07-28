import React, { useState } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Plus, 
  Minus, 
  ArrowLeft, 
  CheckCircle2
} from 'lucide-react';

// Import dei dati esterni
import { CATEGORIES, DISHES } from '../data/mockMenu';

const MenuAll = ({ onBack, onOpenReviews }) => {
  const [activeCategory, setActiveCategory] = useState('nuovi');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState({});

  // Gestione aggiunta/rimozione piatti
  const updateQuantity = (dishId, delta) => {
    setCart((prev) => {
      const currentQty = prev[dishId] || 0;
      const newQty = Math.max(0, currentQty + delta);
      if (newQty === 0) {
        const { [dishId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [dishId]: newQty };
    });
  };

  const totalItemsCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  // Filtraggio piatti per categoria e ricerca
  const filteredDishes = DISHES.filter((dish) => {
    const matchesCategory = activeCategory === 'nuovi' ? true : dish.category === activeCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dish.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans">
      
      {/* TopBar  Freccia ritorna alla home page*/}
<header className="sticky top-0 z-30 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
  <div className="flex items-center gap-4">
    {onBack && (
      <button 
        onClick={onBack}
        className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
    )}
    <div>
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
          ALL YOU CAN EAT
        </span>
        <span className="text-xs text-neutral-400 font-mono">Tavolo 40</span>
      </div>

      <h1 className="text-xl font-bold tracking-tight mt-0.5">Menu Pranzo</h1>
    </div>
  </div>

  {/* Area controlli di destra: Pulsante Recensioni + Barra di Ricerca */}
  <div className="flex items-center gap-3">
    {onOpenReviews && (
      <button 
        onClick={onOpenReviews}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-amber-400/40 text-amber-400 hover:bg-amber-400/10 transition-colors text-xs font-semibold cursor-pointer shadow-lg shadow-amber-950/20"
        title="Lascia una recensione"
      >
        <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
        <span className="hidden sm:inline">Valuta</span>
      </button>
    )}

    <div className="relative w-60 md:w-72">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
      <input 
        type="text" 
        placeholder="Cerca piatto o codice..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-neutral-900 border border-neutral-800 rounded-full pl-10 pr-4 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-400/60 transition-colors"
      />
    </div>
  </div>
</header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Sidebar Categorie */}
        <aside className="w-64 border-r border-neutral-800 p-4 space-y-2 shrink-0 hidden md:block bg-neutral-950/50">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider px-3 mb-3">Categorie</p>
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all cursor-pointer font-medium text-sm
                  ${isActive 
                    ? 'bg-amber-400 text-neutral-950 font-bold shadow-lg shadow-amber-400/10' 
                    : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'}`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-neutral-950' : 'text-neutral-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </aside>

        {/* Griglia Piatti */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredDishes.map((dish) => {
              const qty = cart[dish.id] || 0;
              return (
                <div 
                  key={dish.id} 
                  className={`relative group bg-neutral-900/80 border rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300
                    ${qty > 0 ? 'border-amber-400/80 shadow-lg shadow-amber-950/20' : 'border-neutral-800 hover:border-neutral-700'}`}
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
                      <img 
                        src={dish.image} 
                        alt={dish.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
                      
                      <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-amber-400 border border-amber-400/30 text-xs font-mono font-bold px-2.5 py-1 rounded-full">
                        {dish.id}
                      </span>

                      {dish.isNew && (
                        <span className="absolute top-3 right-3 bg-amber-400 text-neutral-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider">
                          Nuovo
                        </span>
                      )}
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-neutral-50 tracking-tight">{dish.name}</h3>
                      <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                        {dish.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between border-t border-neutral-800/60 mt-4">
                    <span className="text-xs text-neutral-500 font-medium">Prezzo Extra: €0.00</span>

                    <div className="flex items-center gap-3">
                      {qty > 0 ? (
                        <div className="flex items-center gap-3 bg-neutral-950 border border-amber-400/40 rounded-full p-1">

                          {/* Rimozione di un prodotto nel carrello */}
                          <button 
                            onClick={() => updateQuantity(dish.id, -1)}
                            className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>

                          {/* Aggiunta di un prodotto nel carrello */}
                          <span className="font-mono font-bold text-amber-400 text-sm px-1">{qty}</span>
                          <button 
                            onClick={() => updateQuantity(dish.id, 1)}
                            className="p-1.5 rounded-full bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>

                        </div>
                      ) : (
                        <button 
                          onClick={() => updateQuantity(dish.id, 1)}
                          className="flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-neutral-700 text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer"
                        >
                          <Plus className="w-4 h-4 text-amber-400" /> Aggiungi
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>

      {/* Floating Bar Ordini */}
      {totalItemsCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-xl">
          <div className="bg-neutral-900/90 backdrop-blur-xl border border-amber-400/50 p-4 rounded-3xl shadow-2xl shadow-neutral-950 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 pl-2">
              <div className="relative p-3 bg-amber-400 text-neutral-950 rounded-2xl">
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-neutral-950 text-amber-400 border border-amber-400 text-xs font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItemsCount}
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-100">Invia In Cucina</p>
                <p className="text-xs text-neutral-400">{totalItemsCount} piatti selezionati</p>
              </div>
            </div>

            <button 
              onClick={() => alert(`Ordine inviato con ${totalItemsCount} piatti!`)}
              className="bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold px-6 py-3 rounded-2xl text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
            >
              <CheckCircle2 className="w-4 h-4" /> Conferma Ordine
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default MenuAll;