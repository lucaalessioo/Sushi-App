import { useState } from 'react';
import HomePage from './component/HomePage';
import MenuAll from './component/MenuAll';
import Recensione from './component/Recensione';

function App()
{
  const [selectedMenuType, setSelectedMenuType] = useState('');
  const [orderConfig, setOrderConfig] = useState(null);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // HomePage chiama onSelection('all-you-can-eat', config) oppure onSelection('alla-carta')
  const handleSelection = (type, config) =>
  {
    setSelectedMenuType(type);
    setOrderConfig(config || null);
  };

  const handleBack = () =>
  {
    setSelectedMenuType('');
    setOrderConfig(null);
  };

  return (
    <>
      {/* HomePage: Nessun tasto recensioni */}
      {selectedMenuType === '' && (
        <HomePage
          onSelection={handleSelection}
        />
      )}

      {/* Menu All You Can Eat: Tasto recensioni attivo */}
      {selectedMenuType === 'all-you-can-eat' && (
        <MenuAll
          onBack={handleBack}
          onOpenReviews={() => setIsReviewOpen(true)}
          orderType="all-you-can-eat"
          orderConfig={orderConfig}
        />
      )}

      {/* Menu Alla Carta: Tasto recensioni attivo */}
      {selectedMenuType === 'alla-carta' && (
        <MenuAll
          onBack={handleBack}
          onOpenReviews={() => setIsReviewOpen(true)}
          orderType="alla-carta"
          orderConfig={null}
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
