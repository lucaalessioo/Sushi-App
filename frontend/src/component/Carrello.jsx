import React from 'react';
import { X, Plus, Minus, ShoppingCart, CheckCircle2 } from 'lucide-react';

/**
 * Modale del carrello al centro dello schermo.
 */
const Carrello = ({
  isOpen,
  onClose,
  cart,
  dishes,
  onIncrement,
  onDecrement,
  onConfirmOrder,
}) => {
  if (!isOpen) return null;

  // Ricostruisco la lista dei piatti nel carrello con i dettagli completi
  const cartEntries = Object.entries(cart)
    .map(([dishId, qty]) => {
      const dish = dishes.find((d) => d.id === dishId);
      return dish ? { ...dish, qty } : null;
    })
    .filter(Boolean);

  const totalItemsCount = cartEntries.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      
      {/* Overlay di sfondo sfocato e scuro */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Riquadro del Modale centrato */}
      <div className="relative w-full max-w-lg bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl z-[70] flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800 bg-neutral-950/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-400/10 rounded-xl border border-amber-400/20">
              <ShoppingCart className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-neutral-100">Il tuo carrello</h2>
              <p className="text-xs text-neutral-400">{totalItemsCount} elementi selezionati</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Lista piatti scrollabile */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {cartEntries.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <ShoppingCart className="w-12 h-12 text-neutral-700 mx-auto" />
              <p className="text-sm text-neutral-400">
                Il carrello è vuoto. Aggiungi qualche piatto dal menu!
              </p>
            </div>
          ) : (
            cartEntries.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-xl object-cover shrink-0 border border-neutral-800"
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

        {/* Footer con totale e bottone di conferma */}
        {cartEntries.length > 0 && (
          <div className="px-6 py-5 border-t border-neutral-800 bg-neutral-950/80 space-y-3">
            <div className="flex items-center justify-between text-sm text-neutral-400">
              <span>Piatti totali nel carrello</span>
              <span className="font-mono font-bold text-amber-400 text-base">{totalItemsCount}</span>
            </div>
            <button
              onClick={onConfirmOrder}
              className="w-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold py-3.5 rounded-2xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
            >
              <CheckCircle2 className="w-4 h-4" /> Conferma Ordine
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrello;