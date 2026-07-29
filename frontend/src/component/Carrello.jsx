import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingCart, CheckCircle2, Receipt, Wallet, Users, ChevronLeft, ClipboardList, ChevronRight } from 'lucide-react';

/**
 * Pannello/Modale del carrello.
 *
 * Props:
 * - isOpen: boolean -> se true, il carrello è visibile
 * - onClose: () => void -> chiamato per chiudere il carrello
 * - cart: { [dishId]: quantità }
 * - dishes: array di tutti i piatti (per recuperare nome/prezzo dal dishId)
 * - onIncrement: (dishId) => void
 * - onDecrement: (dishId) => void
 * - onConfirmOrder: (type: 'conto' | 'cassa') => void -> chiamato quando l'utente
 *   conferma la richiesta ("conto" oppure "cassa")
 * - onSendToKitchen: () => void -> chiamato quando l'utente preme "Invia Ordine" nel carrello
 * - orderType: 'all-you-can-eat' | 'alla-carta' -> determina come viene calcolato/mostrato il prezzo
 * - fixedPrice: number -> prezzo fisso totale del tavolo, usato solo se orderType === 'all-you-can-eat'
 * - peopleCount: number -> numero di persone al tavolo, usato solo se orderType === 'all-you-can-eat'
 * - orderHistory: Array<{ id, sentAt, items: [{ id, name, image, price, qty }] }> -> storico degli
 *   ordini già inviati in cucina in questa sessione al tavolo
 */
const Carrello = ({
    isOpen,
    onClose,
    cart,
    dishes,
    onIncrement,
    onDecrement,
    onConfirmOrder,
    onSendToKitchen,
    orderType = 'alla-carta',
    fixedPrice = 0,
    peopleCount,
    orderHistory = [],
}) =>
{
    const [requestType, setRequestType] = useState(null); // null | 'conto' | 'cassa'
    const [activeTab, setActiveTab] = useState('current'); // 'current' | 'history'
    const [selectedOrderId, setSelectedOrderId] = useState(null); // id dell'ordine aperto nel dettaglio
    const [isFinishedPopupOpen, setIsFinishedPopupOpen] = useState(false); // popup "hai finito di mangiare?"

    if (!isOpen) return null;

    const isAllYouCanEat = orderType === 'all-you-can-eat';
    const hasHistory = orderHistory.length > 0;

    // Ricostruisco la lista dei piatti nel carrello con i dettagli completi
    const cartEntries = Object.entries(cart)
        .map(([dishId, qty]) =>
        {
            const dish = dishes.find((d) => d.id === dishId);
            return dish ? { ...dish, qty } : null;
        })
        .filter(Boolean);

    const totalItemsCount = cartEntries.reduce((sum, item) => sum + item.qty, 0);

    // Numero i vari invii (Ordine 1, Ordine 2, ...) e li ordino dal più recente al più vecchio
    const numberedHistory = orderHistory.map((order, i) => ({ ...order, orderNumber: i + 1 }));
    const reversedHistory = [...numberedHistory].reverse();
    const selectedOrder = numberedHistory.find((o) => o.id === selectedOrderId) || null;

    // Totali dello storico ordini già inviati in cucina
    const historyItemsCount = orderHistory.reduce(
        (sum, order) => sum + order.items.reduce((s, item) => s + item.qty, 0),
        0
    );
    const historyPrice = orderHistory.reduce(
        (sum, order) => sum + order.items.reduce((s, item) => s + (Number(item.price) || 0) * item.qty, 0),
        0
    );

    // Prezzo: fisso per il tavolo (All You Can Eat) oppure somma di tutto ciò che
    // è stato ordinato finora, storico incluso (Alla Carta)
    const draftPrice = cartEntries.reduce((sum, item) => sum + (Number(item.price) || 0) * item.qty, 0);
    const totalPrice = isAllYouCanEat ? (Number(fixedPrice) || 0) : historyPrice + draftPrice;

    const handleRequest = (type) =>
    {
        setRequestType(type);
        if (onConfirmOrder) onConfirmOrder(type);
    };

    const handleSendOrder = () =>
    {
        if (cartEntries.length === 0) return;
        if (onSendToKitchen) onSendToKitchen();
    };

    const handleClose = () =>
    {
        setRequestType(null);
        setSelectedOrderId(null);
        setActiveTab('current');
        setIsFinishedPopupOpen(false);
        onClose();
    };

    const handleSelectTab = (tab) =>
    {
        setActiveTab(tab);
        setSelectedOrderId(null);
    };

    const confirmationMessages = {
        conto: 'Un cameriere verrà presto al suo tavolo.',
        cassa: 'Perfetto! Può recarsi in cassa quando vuole per completare il pagamento.',
    };

    // Il footer con prezzo e bottoni di pagamento va mostrato se c'è qualcosa da
    // pagare: bozza corrente, storico ordini già inviati, oppure prezzo fisso (AYCE)
    const showFooter = isAllYouCanEat || cartEntries.length > 0 || hasHistory;

    return (
        <>
            {/* Overlay di sfondo, cliccabile per chiudere */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                onClick={handleClose}
            />

            {/* Pannello carrello */}
            <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-neutral-950 border-l border-neutral-800 z-[70] flex flex-col shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800">
                    <div className="flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-amber-400" />
                        <h2 className="text-lg font-bold text-neutral-100">Il tuo carrello</h2>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Banner informativo per il menu All You Can Eat */}
                {isAllYouCanEat && (
                    <div className="mx-6 mt-4 flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-medium px-4 py-2.5 rounded-2xl">
                        <Users className="w-3.5 h-3.5 shrink-0" />
                        <span>
                            Prezzo fisso per {peopleCount} {peopleCount === 1 ? 'persona' : 'persone'} — ordina
                            quanto vuoi, il totale non cambia.
                        </span>
                    </div>
                )}

                {/* Tab switcher: Stai ordinando / Ordini inviati (solo se esiste già uno storico) */}
                {hasHistory && (
                    <div className="mx-6 mt-4 grid grid-cols-2 gap-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-1">
                        <button
                            onClick={() => handleSelectTab('current')}
                            className={`py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${activeTab === 'current'
                                ? 'bg-amber-400 text-neutral-950'
                                : 'text-neutral-400 hover:text-neutral-200'
                                }`}
                        >
                            Stai ordinando {totalItemsCount > 0 ? `(${totalItemsCount})` : ''}
                        </button>
                        <button
                            onClick={() => handleSelectTab('history')}
                            className={`py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${activeTab === 'history'
                                ? 'bg-amber-400 text-neutral-950'
                                : 'text-neutral-400 hover:text-neutral-200'
                                }`}
                        >
                            Ordini inviati ({historyItemsCount})
                        </button>
                    </div>
                )}

                {/* ===================== TAB: STAI ORDINANDO (bozza corrente, editabile) ===================== */}
                {(!hasHistory || activeTab === 'current') && (
                    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                        {cartEntries.length === 0 ? (
                            <p className="text-sm text-neutral-500 text-center mt-10">
                                {hasHistory
                                    ? 'Nessun nuovo piatto in ordine. Aggiungine altri dal menu!'
                                    : 'Il carrello è vuoto. Aggiungi qualche piatto dal menu!'}
                            </p>
                        ) : (
                            cartEntries.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-3 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-3"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-neutral-100 truncate">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-neutral-500 font-mono">
                                            {isAllYouCanEat ? item.id : `${item.id} · €${(Number(item.price) || 0).toFixed(2)}`}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-neutral-950 border border-amber-400/40 rounded-full p-1 shrink-0">
                                        <button
                                            onClick={() => onDecrement(item.id)}
                                            className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                                        >
                                            <Minus className="w-3.5 h-3.5" />
                                        </button>
                                        <span className="font-mono font-bold text-amber-400 text-sm px-1">
                                            {item.qty}
                                        </span>
                                        <button
                                            onClick={() => onIncrement(item.id)}
                                            className="p-1.5 rounded-full bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-colors cursor-pointer"
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* ===================== TAB: ORDINI INVIATI (storico, sola lettura) ===================== */}
                {hasHistory && activeTab === 'history' && (
                    <div className="flex-1 overflow-y-auto px-6 py-4">
                        {!selectedOrder ? (
                            /* Elenco degli invii, dal più recente al più vecchio */
                            <div className="space-y-3">
                                {reversedHistory.map((order) =>
                                {
                                    const orderItemsCount = order.items.reduce((s, item) => s + item.qty, 0);
                                    return (
                                        <button
                                            key={order.id}
                                            onClick={() => setSelectedOrderId(order.id)}
                                            className="w-full flex items-center justify-between gap-3 bg-neutral-900/60 border border-amber-400/40 rounded-2xl p-4 text-left hover:bg-neutral-900 hover:border-amber-400 transition-colors cursor-pointer"
                                        >
                                            <div>
                                                <p className="text-sm font-bold text-amber-400">
                                                    Ordine {order.orderNumber}
                                                </p>
                                                <p className="text-xs text-neutral-500 mt-0.5">
                                                    {orderItemsCount} {orderItemsCount === 1 ? 'piatto' : 'piatti'}
                                                    {order.sentAt instanceof Date && (
                                                        <>
                                                            {' · '}
                                                            {order.sentAt.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}
                                                        </>
                                                    )}
                                                </p>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-neutral-500 shrink-0" />
                                        </button>
                                    );
                                })}
                            </div>
                        ) : (
                            /* Dettaglio del singolo ordine selezionato */
                            <div className="space-y-4">
                                <button
                                    onClick={() => setSelectedOrderId(null)}
                                    className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
                                >
                                    <ChevronLeft className="w-4 h-4" /> Tutti gli ordini
                                </button>

                                <div className="flex items-center gap-2">
                                    <ClipboardList className="w-4 h-4 text-amber-400" />
                                    <h3 className="text-base font-bold text-neutral-100">
                                        Ordine {selectedOrder.orderNumber}
                                    </h3>
                                    {selectedOrder.sentAt instanceof Date && (
                                        <span className="text-xs text-neutral-500 font-mono ml-auto">
                                            {selectedOrder.sentAt.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    {selectedOrder.items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-3 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-3"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-14 h-14 rounded-xl object-cover shrink-0"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-semibold text-neutral-100 truncate">
                                                    {item.name}
                                                </p>
                                                {!isAllYouCanEat && (
                                                    <p className="text-xs text-neutral-500 font-mono">
                                                        €{(Number(item.price) || 0).toFixed(2)} cad.
                                                    </p>
                                                )}
                                            </div>
                                            <span className="font-mono font-bold text-amber-400 text-sm bg-neutral-950 border border-amber-400/40 rounded-full px-3 py-1 shrink-0">
                                                x{item.qty}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Footer con totale e azioni */}
                {showFooter && (
                    <div className="px-6 py-5 border-t border-neutral-800 space-y-4">
                        {cartEntries.length > 0 && (
                            <div className="flex items-center justify-between text-sm text-neutral-400">
                                <span>Piatti da inviare</span>
                                <span className="font-mono font-bold text-neutral-100">{totalItemsCount}</span>
                            </div>
                        )}

                        {hasHistory && (
                            <div className="flex items-center justify-between text-sm text-neutral-400">
                                <span>Piatti totali ordinati</span>
                                <span className="font-mono font-bold text-neutral-100">
                                    {historyItemsCount + totalItemsCount}
                                </span>
                            </div>
                        )}

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-neutral-400">
                                {isAllYouCanEat ? 'Prezzo fisso tavolo' : 'Prezzo'}
                            </span>
                            <span className="font-mono font-bold text-amber-400 text-lg">
                                {totalPrice.toFixed(2)} €
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setIsFinishedPopupOpen(true)}
                                className="w-full bg-neutral-900 border border-amber-400/40 hover:bg-neutral-800 text-neutral-100 font-bold py-3 rounded-2xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Finito di mangiare
                            </button>
                            <button
                                onClick={handleSendOrder}
                                disabled={cartEntries.length === 0}
                                className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed text-neutral-950 font-bold py-3 rounded-2xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20 disabled:shadow-none"
                            >
                                <ShoppingCart className="w-4 h-4" /> Invia Ordine
                            </button>
                        </div>
                    </div>
                )}

                {/* Popup centrale: "Hai finito di mangiare?" -> Richiedi il conto / Paga in Cassa */}
                {isFinishedPopupOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[80] flex items-center justify-center p-6"
                            onClick={() => !requestType && setIsFinishedPopupOpen(false)}
                        >
                            <div
                                className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 w-full max-w-sm shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {requestType ? (
                                    /* Messaggio di conferma dopo la richiesta */
                                    <div className="flex flex-col items-center text-center gap-3 py-2">
                                        <CheckCircle2 className="w-10 h-10 text-amber-400" />
                                        <p className="text-sm text-neutral-100 font-medium">
                                            {confirmationMessages[requestType]}
                                        </p>
                                        <button
                                            onClick={() => { setRequestType(null); setIsFinishedPopupOpen(false); }}
                                            className="mt-2 text-xs font-semibold text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
                                        >
                                            Chiudi
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="text-center">
                                            <h3 className="text-lg font-bold text-neutral-100">Hai finito di mangiare?</h3>
                                            <p className="text-xs text-neutral-400 mt-1">Scegli come vuoi concludere il tuo ordine</p>
                                        </div>

                                        <div className="grid grid-cols-1 gap-3">
                                            <button
                                                onClick={() => handleRequest('conto')}
                                                className="w-full bg-neutral-950 border border-amber-400/40 hover:bg-neutral-800 text-neutral-100 font-bold py-3 rounded-2xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                            >
                                                <Receipt className="w-4 h-4 text-amber-400" /> Richiedi il conto
                                            </button>
                                            <button
                                                onClick={() => handleRequest('cassa')}
                                                className="w-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold py-3 rounded-2xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
                                            >
                                                <Wallet className="w-4 h-4" /> Paga in Cassa
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => setIsFinishedPopupOpen(false)}
                                            className="w-full text-center text-xs font-semibold text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
                                        >
                                            Annulla, sto ancora mangiando
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Carrello;
