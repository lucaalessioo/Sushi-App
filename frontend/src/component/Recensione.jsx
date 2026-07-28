import React, { useState } from 'react';
import { 
  Star, 
  X, 
  MessageSquarePlus, 
  ThumbsUp, 
  Send, 
  Check, 
  Sparkles,
  UtensilsCrossed
} from 'lucide-react';

// Tag rapidi per feedback sintetico sul ristorante
const QUICK_TAGS = [
  "Cibo eccezionale",
  "Servizio veloce",
  "Atmosfera rilassante",
  "Pesce freschissimo",
  "Presentazione curata",
  "Ottimo rapporto qualità/prezzo"
];

// Lista di piatti ordinati di esempio da valutare singolarmente (in futuro la passerai come prop)
const DEFAULT_ORDERED_DISHES = [
  { id: 'N01', name: 'Nigiri Salmone', image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&q=80&w=200' },
  { id: 'U04', name: 'Uramaki Ebi Tempura', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=200' },
  { id: 'S02', name: 'Sashimi Misto', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=200' }
];

const Recensioni = ({ isOpen = true, onClose, orderedDishes = DEFAULT_ORDERED_DISHES }) => {
  const [activeTab, setActiveTab] = useState('scrivi'); // 'scrivi' | 'leggi'
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [dishRatings, setDishRatings] = useState({});
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // Toggle tag veloci, aggiunge o rimuove il tag selezionato
  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // Imposta valutazione per un singolo piatto
  const handleDishRating = (dishId, score) => {
    setDishRatings(prev => ({ ...prev, [dishId]: score }));
  };

  // Invio recensione (pronto per integrazione API Spring Boot)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const reviewData = {
      overallRating: rating,
      tags: selectedTags,
      dishRatings: dishRatings,
      comment: comment,
      tableNumber: 40, // Numero tavolo dinamico
      timestamp: new Date().toISOString()
    };

    console.log("Dati Recensione da inviare al Backend Spring Boot:", reviewData);
    
    // In un'applicazione reale qui faresti una chiamata POST:
    // fetch('/api/v1/reviews', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(reviewData) })

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      if (onClose) onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Modale */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-100">Valuta Esperienza</h2>
              <p className="text-xs text-neutral-400">La tua opinione aiuta Sushi Zen a migliorare</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Navigazione Tab interni */}
            <div className="bg-neutral-950 p-1 rounded-full border border-neutral-800 flex gap-1">
              <button
                onClick={() => setActiveTab('scrivi')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'scrivi' 
                    ? 'bg-amber-400 text-neutral-950' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Valuta
              </button>
              <button
                onClick={() => setActiveTab('leggi')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'leggi' 
                    ? 'bg-amber-400 text-neutral-950' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Recensioni
              </button>
            </div>

            {/* Tasto Chiusura */}
            {onClose && (
              <button 
                onClick={onClose}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>

        {/* Corpo Modale */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {isSubmitted ? (
            /* Messaggio di Conferma Invio */
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-amber-400/20 text-amber-400 border border-amber-400/40 rounded-full flex items-center justify-center animate-bounce">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-100">Grazie per la tua recensione!</h3>
              <p className="text-neutral-400 max-w-md text-sm">
                Il tuo feedback è stato registrato ed è prezioso per tutto lo staff di Sushi Zen.
              </p>
            </div>
          ) : activeTab === 'scrivi' ? (
            /* Form Scrivi Recensione */
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Valutazione con Stelle Principale */}
              <div className="text-center bg-neutral-950/60 p-6 rounded-2xl border border-neutral-800/80">
                <p className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                  Come valuti l'esperienza globale?
                </p>
                <div className="flex justify-center items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 focus:outline-none transition-transform hover:scale-110 cursor-pointer"
                    >
                      <Star 
                        className={`w-9 h-9 ${
                          (hoverRating || rating) >= star 
                            ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]' 
                            : 'text-neutral-700'
                        }`} 
                      />
                    </button>
                  ))}
                </div>
                <p className="text-xs font-mono text-amber-400 h-4 mt-2 font-medium">
                  {rating === 5 && "Eccellente! 🍣"}
                  {rating === 4 && "Molto Buono! 👍"}
                  {rating === 3 && "Nella Media 😐"}
                  {rating === 2 && "Sotto le aspettative 🙁"}
                  {rating === 1 && "Pessimo 😞"}
                </p>
              </div>

              {/* Tag Rapidi */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Cosa ti è piaciuto in particolare?
                </label>
                <div className="flex flex-wrap gap-2">
                  {QUICK_TAGS.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`text-xs px-3.5 py-2 rounded-full border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-400/15 border-amber-400 text-amber-400 font-semibold'
                            : 'bg-neutral-950/40 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Valutazione Piatti Singoli (Se Ordinati) */}
              {orderedDishes.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                      <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
                      Valuta i piatti ordinati
                    </label>
                  </div>

                  <div className="space-y-3">
                    {orderedDishes.map((dish) => (
                      <div 
                        key={dish.id} 
                        className="flex items-center justify-between bg-neutral-950/40 border border-neutral-800 p-3 rounded-2xl"
                      >
                        <div className="flex items-center gap-3">
                          <img src={dish.image} alt={dish.name} className="w-10 h-10 rounded-xl object-cover" />
                          <div>
                            <p className="text-sm font-bold text-neutral-200">{dish.name}</p>
                            <span className="text-[10px] font-mono text-neutral-500">{dish.id}</span>
                          </div>
                        </div>

                        {/* Stelle per piatto */}
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => handleDishRating(dish.id, s)}
                              className="p-1 text-neutral-700 hover:text-amber-400 transition-colors cursor-pointer"
                            >
                              <Star className={`w-4 h-4 ${ (dishRatings[dish.id] || 0) >= s ? 'fill-amber-400 text-amber-400' : '' }`} />
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Commento Libero */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Commento (Opzionale)
                </label>
                <textarea
                  rows="3"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Scrivi qui i tuoi consigli o impressioni per lo chef..."
                  className="w-full bg-neutral-950/60 border border-neutral-800 rounded-2xl p-4 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-400/60 transition-colors resize-none"
                />
              </div>

              {/* Pulsante Invio */}
              <button
                type="submit"
                disabled={rating === 0}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  rating > 0 
                    ? 'bg-amber-400 text-neutral-950 hover:bg-amber-300 shadow-lg shadow-amber-400/10' 
                    : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" /> Invia Valutazione
              </button>
            </form>
          ) : (
            /* Tab: Recensioni degli altri Clienti (Vista Statistiche/Social) */
            <div className="space-y-6">
              
              {/* Media Generale */}
              <div className="bg-neutral-950/60 border border-neutral-800 p-5 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="text-3xl font-extrabold text-neutral-100">4.8 <span className="text-sm font-normal text-neutral-400">/ 5</span></h4>
                  <p className="text-xs text-neutral-400 mt-1">Basato su oltre 340 valutazioni</p>
                </div>
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Esempi di Recensioni Esistenti */}
              <div className="space-y-4">
                {[
                  { name: "Marco R.", table: "Tavolo 12", rating: 5, date: "Oggi", text: "Sashimi di una freschezza unica. Il servizio è velocissimo nonostante il locale pieno!" },
                  { name: "Giulia M.", table: "Tavolo 08", rating: 5, date: "Ieri", text: "Uramaki fantastici! Il menu All You Can Eat ha una qualità paragonabile alla carta." }
                ].map((rev, idx) => (
                  <div key={idx} className="bg-neutral-950/40 border border-neutral-800/80 p-4 rounded-2xl space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-neutral-200">{rev.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">{rev.table}</span>
                      </div>
                      <span className="text-xs text-neutral-500">{rev.date}</span>
                    </div>
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">{rev.text}</p>
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Recensioni;