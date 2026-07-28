import React from 'react';
import { Plus, Minus } from 'lucide-react';

/**
 * Card di un singolo piatto del menu.
 *
 * Props:
 * - dish: { id, name, description, image, isNew }
 * - qty: quantità attualmente nel carrello per questo piatto
 * - onIncrement: () => void  -> chiamato per aggiungere 1 unità
 * - onDecrement: () => void  -> chiamato per togliere 1 unità
 */
const Card = ({ dish, qty = 0, onIncrement, onDecrement }) =>
{
    return (
        <div
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
                            <button
                                onClick={onDecrement}
                                className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                            >
                                <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-mono font-bold text-amber-400 text-sm px-1">{qty}</span>
                            <button
                                onClick={onIncrement}
                                className="p-1.5 rounded-full bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-colors cursor-pointer"
                            >
                                <Plus className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={onIncrement}
                            className="flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-neutral-700 text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer"
                        >
                            <Plus className="w-4 h-4 text-amber-400" /> Aggiungi
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;