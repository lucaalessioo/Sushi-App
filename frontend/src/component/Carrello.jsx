import React from 'react';
import { X, Plus, Minus, ShoppingCart, CheckCircle2 } from 'lucide-react';

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
 * - onConfirmOrder: () => void
 */
const Carrello = ({
    isOpen,
    onClose,
    cart,
    dishes,
    onIncrement,
    onDecrement,
    onConfirmOrder,
}) =>
{
    if (!isOpen) return null;

    // Ricostruisco la lista dei piatti nel carrello con i dettagli completi
    const cartEntries = Object.entries(cart)
        .map(([dishId, qty]) =>
        {
            const dish = dishes.find((d) => d.id === dishId);
            return dish ? { ...dish, qty } : null;
        })
        .filter(Boolean);

    const totalItemsCount = cartEntries.reduce((sum, item) => sum + item.qty, 0);

    return (
        <>
            {/* Overlay di sfondo, cliccabile per chiudere */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                onClick={onClose}
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
                        onClick={onClose}
                        className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Lista piatti */}
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                    {cartEntries.length === 0 ? (
                        <p className="text-sm text-neutral-500 text-center mt-10">
                            Il carrello è vuoto. Aggiungi qualche piatto dal menu!
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
                                    <p className="text-xs text-neutral-500 font-mono">{item.id}</p>
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

                {/* Footer con totale e conferma */}
                {cartEntries.length > 0 && (
                    <div className="px-6 py-5 border-t border-neutral-800 space-y-3">
                        <div className="flex items-center justify-between text-sm text-neutral-400">
                            <span>Piatti totali</span>
                            <span className="font-mono font-bold text-neutral-100">{totalItemsCount}</span>
                        </div>
                        <button
                            onClick={onConfirmOrder}
                            className="w-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold py-3 rounded-2xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
                        >
                            <CheckCircle2 className="w-4 h-4" /> Conferma Ordine
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Carrello;