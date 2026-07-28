import { useState } from 'react';
import HomePage from './component/HomePage';
import MenuAll from './component/MenuAll';
import MenuAllaCarta from './component/MenuAllaCarta'; // <- Importato il nuovo componente
import Recensione from './component/Recensione';

function App() {
  const [selectedMenuType, setSelectedMenuType] = useState('');
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  return (
    <>
      {/* HomePage: Selezione del tipo di menu */}
      {selectedMenuType === '' && (
        <HomePage 
          onSelection={(type) => setSelectedMenuType(type)} 
        />
      )}

      {/* Menu All You Can Eat */}
      {selectedMenuType === 'all-you-can-eat' && (
        <MenuAll 
          onBack={() => setSelectedMenuType('')} 
          onOpenReviews={() => setIsReviewOpen(true)}
        />
      )}

      {/* Menu Alla Carta */}
      {selectedMenuType === 'alla-carta' && (
        <MenuAllaCarta 
          onBack={() => setSelectedMenuType('')} 
          onOpenReviews={() => setIsReviewOpen(true)}
        />
      )}

      {/* Overlay Modale Recensioni */}
      <Recensione 
        isOpen={isReviewOpen} 
        onClose={() => setIsReviewOpen(false)} 
      />
    </>
  );
}

export default App;