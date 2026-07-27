import { Utensils, Wine, Sparkles, Flame } from 'lucide-react';

export const CATEGORIES = [
  { id: 'nuovi', label: 'Nuovi Piatti', icon: Sparkles },
  { id: 'antipasti', label: 'Antipasti', icon: Utensils },
  { id: 'nigiri', label: 'Nigiri & Onigiri', icon: Utensils },
  { id: 'tartare', label: 'Tartare & Carpacci', icon: Flame },
  { id: 'bevande', label: 'Bollicine & Vini', icon: Wine },
];

export const DISHES = [
  {
    id: 'NB6',
    name: 'Dayamondo Tartare',
    category: 'tartare',
    description: 'Tartare di spigola e avocado con salsa leggermente piccante e ponzu',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 'NB5',
    name: 'Iro Puding',
    category: 'antipasti',
    description: 'Puding a base purè di patate, polpa di granchio, avocado e maionese giapponese',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop',
    isNew: false,
  },
  {
    id: 'NB4',
    name: 'Rubiniku',
    category: 'tartare',
    description: 'Limone, wakame, tartare di tonno, salsa leggermente piccante e pepe rosa',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600&auto=format&fit=crop',
    isNew: false,
  },
  {
    id: 'NB2',
    name: 'Black Onigiri Sake',
    category: 'nigiri',
    description: 'Riso nero, salmone fritto e salsa yogurt',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=600&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 'NB1',
    name: 'Black Onigiri Ebiten',
    category: 'nigiri',
    description: 'Riso nero, gambero in tempura e salsa yogurt',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=600&auto=format&fit=crop',
    isNew: false,
  },
  {
    id: 'NP1',
    name: 'Sumoku Mango',
    category: 'tartare',
    description: 'Salmone affumicato con fette di mango e salsa al mango',
    price: 7.50,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=600&auto=format&fit=crop',
    isNew: false,
  },
];