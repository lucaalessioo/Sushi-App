import React, { useState } from 'react';
import
{
  Search,
  ShoppingBag,
  ShoppingCart,
  ArrowLeft,
  ChevronLeft,
  Star,
  CheckCircle2
} from 'lucide-react';

// Import dei dati esterni
import { CATEGORIES, DISHES } from '../data/mockMenu';

// Import dei componenti
import Card from './Card';
import Carrello from './Carrello';

/**
 * Props aggiuntive:
 * - orderType: 'all-you-can-eat' | 'alla-carta' -> proveniente dalla scelta in HomePage
 * - orderConfig: { peopleCount, mealType, pricePerPerson, tableTotal } -> presente solo
 *   se orderType === 'all-you-can-eat' (viene generato da HomePage.handleConfirmAllYouCanEat)
 */
const MenuAll = ({ onBack, onOpenReviews, orderType = 'alla-carta', orderConfig = null }) =>
{
  const [activeCategory, setActiveCategory] = useState('nuovi');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState({});
  const [sentOrders, setSentOrders] = useState([]); // storico degli ordini già inviati in cucina
  const [isCartPanelOpen, setIsCartPanelOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const isAllYouCanEat = orderType === 'all-you-can-eat';

  // Gestione aggiunta/rimozione piatti nel carrello
  const updateQuantity = (dishId, delta) =>
  {
    setCart((prev) =>
    {
      const currentQty = prev[dishId] || 0;
      const newQty = Math.max(0, currentQty + delta);
      if (newQty === 0)
      {
        const { [dishId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [dishId]: newQty };
    });
  };

  const totalItemsCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  // Filtraggio piatti per categoria e ricerca
  const filteredDishes = DISHES.filter((dish) =>
  {
    const matchesCategory = activeCategory === 'nuovi' ? true : dish.category === activeCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Invia i piatti selezionati in cucina (barra in basso). Azione indipendente
  // dalla richiesta di pagamento: in All You Can Eat può essere ripetuta più
  // volte durante il pasto. Ogni invio viene salvato nello storico ordini.
  const handleSendToKitchen = () =>
  {
    if (totalItemsCount === 0) return;

    const itemsSent = Object.entries(cart)
      .map(([dishId, qty]) =>
      {
        const dish = DISHES.find((d) => d.id === dishId);
        return dish ? { id: dish.id, name: dish.name, image: dish.image, price: dish.price, qty } : null;
      })
      .filter(Boolean);

    setSentOrders((prev) => [
      ...prev,
      { id: `order-${Date.now()}`, sentAt: new Date(), items: itemsSent },
    ]);
    setCart({});
    setIsCartModalOpen(false);
  };

  // Richiesta di pagamento ("Richiedi il conto" / "Paga in Cassa") dal Carrello.
  // Non tocca il carrello né manda nulla in cucina: il messaggio di conferma
  // viene già mostrato internamente dal componente Carrello.
  const handlePaymentRequest = (type) =>
  {
    console.log(`Richiesta pagamento ricevuta per il tavolo: ${type === 'conto' ? 'conto' : 'paga in cassa'}`);
  };

  // Etichette dinamiche di intestazione in base al tipo di menu selezionato in Home
  const headerBadgeLabel = isAllYouCanEat ? 'ALL YOU CAN EAT' : 'ALLA CARTA';
  const headerTitle = isAllYouCanEat
    ? `Menu ${orderConfig?.mealType === 'cena' ? 'Cena' : 'Pranzo'}`
    : 'Menu Alla Carta';

  return (
    <div className="h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans overflow-hidden">

      {/* TopBar Header */}
      <header className="shrink-0 z-30 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
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
                {headerBadgeLabel}
              </span>
              <span className="text-xs text-neutral-400 font-mono">Tavolo 40</span>
              {isAllYouCanEat && orderConfig?.tableTotal != null && (
                <span className="text-xs text-neutral-400 font-mono">
                  · €{Number(orderConfig.tableTotal).toFixed(2)} fisso
                </span>
              )}
            </div>

            <h1 className="text-xl font-bold tracking-tight mt-0.5">{headerTitle}</h1>
          </div>
        </div>

        {/* Ricerca e Valutazione */}
        <div className="flex items-center gap-3">
          {onOpenReviews && (
            <button
              onClick={onOpenReviews}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-amber-400/40 text-amber-400 hover:bg-amber-400/10 transition-colors text-xs font-semibold cursor-pointer shadow-lg shadow-amber-950/20"
              title="Lascia una recensione"
            >
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
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

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden min-h-0">

        {/* Sidebar Categorie */}
        <aside className="w-64 border-r border-neutral-800 p-4 space-y-2 shrink-0 hidden md:block bg-neutral-950/50 overflow-y-auto">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider px-3 mb-3">Categorie</p>
          {CATEGORIES.map((cat) =>
          {
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

        {/* Area Principale Scrollabile */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 relative">
          <div className="max-w-7xl mx-auto space-y-8">

            {/* Griglia Piatti */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDishes.map((dish) => (
                <Card
                  key={dish.id}
                  dish={dish}
                  qty={cart[dish.id] || 0}
                  onIncrement={() => updateQuantity(dish.id, 1)}
                  onDecrement={() => updateQuantity(dish.id, -1)}
                />
              ))}
            </div>

            {/* BARRA DI CONFERMA: Centrata rispetto alla sola griglia max-w-7xl */}
            {totalItemsCount > 0 && (
              <div className="sticky bottom-4 z-40 w-full pt-4">
                <div className="max-w-xl mx-auto bg-neutral-900/95 backdrop-blur-xl border border-amber-400/50 p-3 sm:p-4 rounded-3xl shadow-2xl shadow-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">

                  {/* Indicatore Conteggio */}
                  <div
                    className="flex items-center gap-3 pl-1 cursor-pointer w-full sm:w-auto justify-between sm:justify-start"
                    onClick={() => setIsCartModalOpen(true)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative p-2.5 bg-amber-400 text-neutral-950 rounded-2xl shrink-0">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 bg-neutral-950 text-amber-400 border border-amber-400 text-xs font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center">
                          {totalItemsCount}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-neutral-100">Pronto per la cucina</p>
                        <p className="text-xs text-neutral-400">{totalItemsCount} piatti selezionati</p>
                      </div>
                    </div>
                  </div>

                  {/* Tasti Azione */}
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => setIsCartModalOpen(true)}
                      className="flex-1 sm:flex-none bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 font-medium px-4 py-2 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer text-center"
                    >
                      Vedi Ordine
                    </button>

                    <button
                      onClick={handleSendToKitchen}
                      className="flex-1 sm:flex-none bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold px-4 py-2 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20 shrink-0"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Invia Ordine</span>
                    </button>
                  </div>

                </div>
              </div>
            )}

          </div>
        </main>
      </div>

      {/* Widget Ripiegabile Basso a Destra */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div
          className={`bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl shadow-neutral-950 p-3 flex flex-col items-center gap-3 transition-all duration-300 origin-right
            ${isCartPanelOpen ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-4 pointer-events-none w-0 p-0 overflow-hidden'}`}
        >
          <button
            onClick={() => setIsCartModalOpen(true)}
            className="relative p-2.5 bg-amber-400 text-neutral-950 rounded-xl hover:bg-amber-300 transition-colors cursor-pointer"
            title="Apri il carrello"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-neutral-950 text-amber-400 border border-amber-400 text-[10px] font-mono font-bold w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-full flex items-center justify-center">
                {totalItemsCount}
              </span>
            )}
          </button>

          {onOpenReviews && (
            <button
              onClick={onOpenReviews}
              className="p-2.5 bg-neutral-800 border border-neutral-700 text-amber-400 rounded-xl hover:bg-neutral-700 transition-colors cursor-pointer"
              aria-label="Lascia una recensione"
            >
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </button>
          )}
        </div>

        <button
          onClick={() => setIsCartPanelOpen((prev) => !prev)}
          className="flex items-center justify-center w-12 h-12 shrink-0 bg-neutral-900 border border-neutral-800 rounded-full text-amber-400 hover:bg-neutral-800 transition-colors cursor-pointer shadow-lg shadow-neutral-950"
          aria-label={isCartPanelOpen ? 'Chiudi pannello' : 'Apri pannello'}
        >
          <ChevronLeft
            className={`w-5 h-5 transition-transform duration-300 ${isCartPanelOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Modale Carrello Centrato */}
      <Carrello
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        cart={cart}
        dishes={DISHES}
        onIncrement={(id) => updateQuantity(id, 1)}
        onDecrement={(id) => updateQuantity(id, -1)}
        onConfirmOrder={handlePaymentRequest}
        onSendToKitchen={handleSendToKitchen}
        orderType={orderType}
        fixedPrice={orderConfig?.tableTotal}
        peopleCount={orderConfig?.peopleCount}
        orderHistory={sentOrders}
      />

    </div>
  );
};

export default MenuAll;
