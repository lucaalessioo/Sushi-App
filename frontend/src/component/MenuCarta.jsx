import React, { useState, useMemo } from 'react';
import {
    Search,
    ShoppingBag,
    ShoppingCart,
    ArrowLeft,
    ChevronLeft,
    Star,
    CheckCircle2,
    Utensils,
    Wine,
    Sparkles,
    Flame,
    Fish,
    Soup
} from 'lucide-react';

import usePiatti from '../hooks/usePiatti';
import { inviaOrdineBackend } from '../services/ordiniApi'; // 👈 Import del servizio API aggiornato

const CATEGORY_ICONS = {
    antipasti: Utensils,
    sashimi: Fish,
    tartare: Flame,
    nigiri: Fish,
    hosomaki: Fish,
    uramaki: Fish,
    temaki: Fish,
    'primi e caldi': Soup,
    'tempura e fritti': Flame,
    bevande: Wine,
};

import Card from './Card';
import Carrello from './Carrello';

const MenuAlLaCarta = ({ onBack, onOpenReviews, tavoloId, tableNumber = 40 }) => {
    const { dishes, loading, error, reload } = usePiatti('alla-carta');

    const [activeCategory, setActiveCategory] = useState('nuovi');
    const [searchQuery, setSearchQuery] = useState('');
    const [cart, setCart] = useState({});
    const [sentOrders, setSentOrders] = useState([]);
    const [isCartPanelOpen, setIsCartPanelOpen] = useState(false);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const formatEuro = (value) => `€${Number(value).toFixed(2)}`;

    const categories = useMemo(() => {
        const seen = new Map();
        dishes.forEach((dish) => {
            if (dish.category && !seen.has(dish.category)) {
                seen.set(dish.category, {
                    id: dish.category,
                    label: dish.categoryLabel || dish.category,
                    icon: CATEGORY_ICONS[dish.category] ?? Utensils,
                });
            }
        });
        return [{ id: 'nuovi', label: 'Tutti i piatti', icon: Sparkles }, ...seen.values()];
    }, [dishes]);

    const updateQuantity = (dishKey, delta) => {
        setCart((prev) => {
            const currentQty = prev[dishKey] || 0;
            const newQty = Math.max(0, currentQty + delta);
            if (newQty === 0) {
                const { [dishKey]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [dishKey]: newQty };
        });
    };

    const totalItemsCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

    const cartTotal = useMemo(
        () =>
            Object.entries(cart).reduce((sum, [dishKey, qty]) => {
                const dish = dishes.find((d) => String(d.dbId ?? d.id) === String(dishKey));
                return sum + (dish ? Number(dish.price) * qty : 0);
            }, 0),
        [cart, dishes]
    );

    const sentTotal = useMemo(
        () =>
            sentOrders.reduce(
                (sum, order) => sum + order.items.reduce((s, item) => s + Number(item.price) * item.qty, 0),
                0
            ),
        [sentOrders]
    );

    const filteredDishes = dishes.filter((dish) => {
        const matchesCategory = activeCategory === 'nuovi' ? true : dish.category === activeCategory;
        const query = searchQuery.toLowerCase();
        const dishIdStr = String(dish.dbId ?? dish.id).toLowerCase();
        const matchesSearch = dish.name.toLowerCase().includes(query) || dishIdStr.includes(query);
        return matchesCategory && matchesSearch;
    });

    const handleSendToKitchen = async () => {
        if (totalItemsCount === 0 || submitting) return;

        try {
            setSubmitting(true);

            const carrelloItems = Object.entries(cart).map(([dishKey, qty]) => {
                const dish = dishes.find((d) => String(d.dbId ?? d.id) === String(dishKey));
                return {
                    dbId: dish?.dbId ?? dish?.id,
                    id: dish?.id,
                    name: dish?.name,
                    image: dish?.image,
                    price: dish?.price,
                    qty: qty
                };
            }).filter(Boolean);

            // tavoloId = id utente tablet (PK), non il numero visualizzato
            await inviaOrdineBackend(tavoloId ?? tableNumber, carrelloItems);

            setSentOrders((prev) => [
                ...prev,
                { id: `order-${Date.now()}`, sentAt: new Date(), items: carrelloItems },
            ]);
            setCart({});
            setIsCartModalOpen(false);
        } catch (err) {
            console.error("Errore nell'invio dell'ordine alla cucina:", err);
            alert(err.message || "Errore durante l'invio dell'ordine.");
        } finally {
            setSubmitting(false);
        }
    };

    const handlePaymentRequest = (type) => {
        console.log(`Richiesta pagamento ricevuta per il tavolo: ${type}`);
    };

    return (
        <div className="h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans overflow-hidden">
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
                                ALLA CARTA
                            </span>
                            <span className="text-xs text-neutral-400 font-mono">Tavolo {tableNumber}</span>
                            {sentTotal > 0 && (
                                <span className="text-xs text-neutral-400 font-mono">
                                    · {formatEuro(sentTotal)} già ordinati
                                </span>
                            )}
                        </div>
                        <h1 className="text-xl font-bold tracking-tight mt-0.5">Menu Alla Carta</h1>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {onOpenReviews && (
                        <button
                            onClick={onOpenReviews}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-amber-400/40 text-amber-400 hover:bg-amber-400/10 transition-colors text-xs font-semibold cursor-pointer shadow-lg shadow-amber-950/20"
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

            <div className="flex-1 flex overflow-hidden min-h-0">
                <aside className="w-64 border-r border-neutral-800 p-4 space-y-2 shrink-0 hidden md:block bg-neutral-950/50 overflow-y-auto">
                    <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider px-3 mb-3">Categorie</p>
                    {categories.map((cat) => {
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

                <main className="flex-1 overflow-y-auto p-6 md:p-8 relative">
                    <div className="max-w-7xl mx-auto space-y-8">
                        {loading ? (
                            <p className="text-center text-sm text-neutral-400 py-16">Caricamento del menu in corso...</p>
                        ) : error ? (
                            <div className="text-center py-16 space-y-4">
                                <p className="text-sm text-red-400">{error}</p>
                                <button
                                    onClick={reload}
                                    className="bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-neutral-700 text-sm font-semibold px-5 py-2 rounded-full transition-colors cursor-pointer"
                                >
                                    Riprova
                                </button>
                            </div>
                        ) : filteredDishes.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredDishes.map((dish) => {
                                    const dishKey = dish.dbId ?? dish.id;
                                    return (
                                        <Card
                                            key={dishKey}
                                            dish={dish}
                                            qty={cart[dishKey] || 0}
                                            onIncrement={() => updateQuantity(dishKey, 1)}
                                            onDecrement={() => updateQuantity(dishKey, -1)}
                                            orderType="alla-carta"
                                        />
                                    );
                                })}
                            </div>
                        ) : (
                            <p className="text-center text-sm text-neutral-500 py-16">
                                Nessun piatto trovato. Prova con un altro nome o un'altra categoria.
                            </p>
                        )}

                        {totalItemsCount > 0 && (
                            <div className="sticky bottom-4 z-40 w-full pt-4">
                                <div className="max-w-xl mx-auto bg-neutral-900/95 backdrop-blur-xl border border-amber-400/50 p-3 sm:p-4 rounded-3xl shadow-2xl shadow-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
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
                                                <p className="text-sm font-bold text-neutral-100">
                                                    Totale ordine: <span className="text-amber-400 font-mono">{formatEuro(cartTotal)}</span>
                                                </p>
                                                <p className="text-xs text-neutral-400">{totalItemsCount} piatti selezionati</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                                        <button
                                            onClick={() => setIsCartModalOpen(true)}
                                            className="flex-1 sm:flex-none bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 font-medium px-4 py-2 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer text-center"
                                        >
                                            Vedi Ordine
                                        </button>

                                        <button
                                            onClick={handleSendToKitchen}
                                            disabled={submitting}
                                            className="flex-1 sm:flex-none bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold px-4 py-2 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20 shrink-0 disabled:opacity-50"
                                        >
                                            <CheckCircle2 className="w-4 h-4" />
                                            <span>{submitting ? 'Invio...' : 'Invia Ordine'}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>

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
                            <span className="absolute -top-1.5 -right-1.5 bg-neutral-950 text-amber-400 border border-amber-400 text-[10px] font-mono font-bold min-w-[18px] min-h-[18px] rounded-full flex items-center justify-center">
                                {totalItemsCount}
                            </span>
                        )}
                    </button>

                    {onOpenReviews && (
                        <button
                            onClick={onOpenReviews}
                            className="p-2.5 bg-neutral-800 border border-neutral-700 text-amber-400 rounded-xl hover:bg-neutral-700 transition-colors cursor-pointer"
                        >
                            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                        </button>
                    )}
                </div>

                <button
                    onClick={() => setIsCartPanelOpen((prev) => !prev)}
                    className="flex items-center justify-center w-12 h-12 shrink-0 bg-neutral-900 border border-neutral-800 rounded-full text-amber-400 hover:bg-neutral-800 transition-colors cursor-pointer shadow-lg shadow-neutral-950"
                >
                    <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${isCartPanelOpen ? 'rotate-180' : ''}`} />
                </button>
            </div>

            <Carrello
                isOpen={isCartModalOpen}
                onClose={() => setIsCartModalOpen(false)}
                cart={cart}
                dishes={dishes}
                onIncrement={(id) => updateQuantity(id, 1)}
                onDecrement={(id) => updateQuantity(id, -1)}
                onConfirmOrder={handlePaymentRequest}
                onSendToKitchen={handleSendToKitchen}
                orderType="alla-carta"
                orderHistory={sentOrders}
            />
        </div>
    );
};

export default MenuAlLaCarta;