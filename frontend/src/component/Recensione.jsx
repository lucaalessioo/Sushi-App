import React, { useState, useEffect, useMemo } from 'react';
import {
  Star,
  X,
  Send,
  Check,
  Sparkles,
  UtensilsCrossed,
  Loader2
} from 'lucide-react';
import { fetchRecensioni, inviaRecensione, fetchPiattiOrdinatiTavolo } from '../services/recensioniApi';

const QUICK_TAGS = [
  "Cibo eccezionale",
  "Servizio veloce",
  "Atmosfera rilassante",
  "Pesce freschissimo",
  "Presentazione curata",
  "Ottimo rapporto qualità/prezzo"
];

function formattaData(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  const oggi = new Date();
  const ieri = new Date();
  ieri.setDate(oggi.getDate() - 1);
  if (d.toDateString() === oggi.toDateString()) return "Oggi";
  if (d.toDateString() === ieri.toDateString()) return "Ieri";
  return d.toLocaleDateString("it-IT");
}

function mediaRecensioni(lista) {
  if (!lista.length) return 0;
  const somma = lista.reduce((s, r) => s + (r.overallRating || 0), 0);
  return Math.round((somma / lista.length) * 10) / 10;
}

const Recensioni = ({ isOpen = true, onClose, tavoloId, numeroTavolo, piattiSessione = [] }) => {
  const [activeTab, setActiveTab] = useState('scrivi');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [dishRatings, setDishRatings] = useState({});
  const [comment, setComment] = useState('');
  const [nomeCliente, setNomeCliente] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [invioErrore, setInvioErrore] = useState('');

  const [orderedDishes, setOrderedDishes] = useState([]);
  const [caricamentoPiatti, setCaricamentoPiatti] = useState(false);

  const [recensioni, setRecensioni] = useState([]);
  const [caricamentoRecensioni, setCaricamentoRecensioni] = useState(false);
  const [erroreRecensioni, setErroreRecensioni] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    let mounted = true;
    (async () => {
      setCaricamentoPiatti(true);
      try {
        const daApi = tavoloId ? await fetchPiattiOrdinatiTavolo(tavoloId) : [];
        if (!mounted) return;

        const mappa = new Map();
        [...daApi, ...piattiSessione].forEach((p) => {
          const key = String(p.piattoId ?? p.id);
          const prev = mappa.get(key);
          if (prev) {
            mappa.set(key, { ...prev, qty: (prev.qty || 0) + (p.qty || 1) });
          } else {
            mappa.set(key, {
              id: key,
              piattoId: p.piattoId != null ? Number(p.piattoId) : (p.id != null ? Number(p.id) : null),
              name: p.name,
              image: p.image,
              qty: p.qty || 1,
            });
          }
        });
        setOrderedDishes([...mappa.values()]);
      } catch {
        if (mounted) setOrderedDishes(piattiSessione);
      } finally {
        if (mounted) setCaricamentoPiatti(false);
      }
    })();

    return () => { mounted = false; };
  }, [isOpen, tavoloId, piattiSessione]);

  useEffect(() => {
    if (!isOpen || activeTab !== 'leggi') return;

    let mounted = true;
    (async () => {
      setCaricamentoRecensioni(true);
      setErroreRecensioni('');
      try {
        const data = await fetchRecensioni();
        if (mounted) setRecensioni(data);
      } catch (err) {
        if (mounted) setErroreRecensioni(err.message || 'Errore caricamento recensioni');
      } finally {
        if (mounted) setCaricamentoRecensioni(false);
      }
    })();

    return () => { mounted = false; };
  }, [isOpen, activeTab, isSubmitted]);

  const media = useMemo(() => mediaRecensioni(recensioni), [recensioni]);

  if (!isOpen) return null;

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleDishRating = (dishId, score) => {
    setDishRatings(prev => ({ ...prev, [dishId]: score }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInvioErrore('');

    const dishRatingsPayload = orderedDishes
      .filter((d) => dishRatings[d.id])
      .map((d) => ({
        piattoId: d.piattoId ? Number(d.piattoId) : null,
        nomePiatto: d.name,
        immagineUrl: d.image || null,
        rating: dishRatings[d.id],
      }));

    try {
      await inviaRecensione({
        overallRating: rating,
        tags: selectedTags,
        dishRatings: dishRatingsPayload,
        comment: comment.trim() || null,
        tavoloId: tavoloId ?? null,
        numeroTavolo: numeroTavolo ?? null,
        nomeCliente: nomeCliente.trim() || null,
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setRating(0);
        setSelectedTags([]);
        setDishRatings({});
        setComment('');
        if (onClose) onClose();
      }, 2500);
    } catch (err) {
      setInvioErrore(err.message || 'Invio non riuscito. Se persiste, esci e rientra con il login tablet.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

        <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-100">Valuta Esperienza</h2>
              <p className="text-xs text-neutral-400">
                {numeroTavolo != null ? `Tavolo ${numeroTavolo}` : "La tua opinione aiuta Sushi Zen a migliorare"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-neutral-950 p-1 rounded-full border border-neutral-800 flex gap-1">
              <button
                type="button"
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
                type="button"
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

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {isSubmitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-amber-400/20 text-amber-400 border border-amber-400/40 rounded-full flex items-center justify-center animate-bounce">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-100">Grazie per la tua recensione!</h3>
              <p className="text-neutral-400 max-w-md text-sm">
                Il tuo feedback è stato salvato ed è visibile nella sezione Recensioni.
              </p>
            </div>
          ) : activeTab === 'scrivi' ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="text-center bg-neutral-950/60 p-6 rounded-2xl border border-neutral-800/80">
                <p className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                  Come valuti l&apos;esperienza globale?
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
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Nome (opzionale)
                </label>
                <input
                  value={nomeCliente}
                  onChange={(e) => setNomeCliente(e.target.value)}
                  placeholder="Es. Marco"
                  className="w-full bg-neutral-950/60 border border-neutral-800 rounded-2xl p-3 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-400/60"
                />
              </div>

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

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2 mb-3">
                  <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
                  Valuta i piatti ordinati
                </label>

                {caricamentoPiatti && (
                  <p className="text-sm text-neutral-500 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Caricamento piatti...
                  </p>
                )}

                {!caricamentoPiatti && orderedDishes.length === 0 && (
                  <p className="text-sm text-neutral-500 bg-neutral-950/40 border border-neutral-800 rounded-2xl p-4">
                    Nessun piatto ordinato in questa sessione. Invia prima un ordine in cucina per valutare i singoli piatti.
                  </p>
                )}

                {!caricamentoPiatti && orderedDishes.length > 0 && (
                  <div className="space-y-3">
                    {orderedDishes.map((dish) => (
                      <div
                        key={dish.id}
                        className="flex items-center justify-between bg-neutral-950/40 border border-neutral-800 p-3 rounded-2xl"
                      >
                        <div className="flex items-center gap-3">
                          {dish.image ? (
                            <img src={dish.image} alt={dish.name} className="w-10 h-10 rounded-xl object-cover" />
                          ) : (
                            <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-500">🍣</div>
                          )}
                          <div>
                            <p className="text-sm font-bold text-neutral-200">{dish.name}</p>
                            {dish.qty > 1 && (
                              <span className="text-[10px] font-mono text-neutral-500">x{dish.qty}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => handleDishRating(dish.id, s)}
                              className="p-1 text-neutral-700 hover:text-amber-400 transition-colors cursor-pointer"
                            >
                              <Star className={`w-4 h-4 ${(dishRatings[dish.id] || 0) >= s ? 'fill-amber-400 text-amber-400' : ''}`} />
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

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

              {invioErrore && (
                <p className="text-sm text-red-400 bg-red-950/30 border border-red-800 rounded-xl px-4 py-2">{invioErrore}</p>
              )}

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
            <div className="space-y-6">
              <div className="bg-neutral-950/60 border border-neutral-800 p-5 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="text-3xl font-extrabold text-neutral-100">
                    {media || '—'} <span className="text-sm font-normal text-neutral-400">/ 5</span>
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    Basato su {recensioni.length} {recensioni.length === 1 ? 'valutazione' : 'valutazioni'}
                  </p>
                </div>
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.round(media) ? 'fill-amber-400' : ''}`} />
                  ))}
                </div>
              </div>

              {caricamentoRecensioni && (
                <p className="text-sm text-neutral-500 flex items-center gap-2 justify-center py-8">
                  <Loader2 className="w-4 h-4 animate-spin" /> Caricamento recensioni...
                </p>
              )}

              {erroreRecensioni && (
                <p className="text-sm text-red-400 text-center">{erroreRecensioni}</p>
              )}

              {!caricamentoRecensioni && !erroreRecensioni && recensioni.length === 0 && (
                <p className="text-sm text-neutral-500 text-center py-8">Nessuna recensione ancora. Sii il primo a valutare!</p>
              )}

              <div className="space-y-4">
                {recensioni.map((rev) => (
                  <div key={rev.id} className="bg-neutral-950/40 border border-neutral-800/80 p-4 rounded-2xl space-y-2">
                    <div className="flex justify-between items-center gap-2 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-bold text-neutral-200">{rev.nomeCliente || 'Cliente'}</span>
                        {rev.numeroTavolo != null && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">
                            Tavolo {rev.numeroTavolo}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-neutral-500">{formattaData(rev.dataCreazione)}</span>
                    </div>
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(rev.overallRating || 0)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    {rev.comment && (
                      <p className="text-xs text-neutral-300 leading-relaxed">{rev.comment}</p>
                    )}
                    {rev.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {rev.tags.map((t) => (
                          <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
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