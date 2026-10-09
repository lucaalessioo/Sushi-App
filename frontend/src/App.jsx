import { useState } from 'react';
import HomePage from './component/HomePage';
import MenuAll from './component/MenuAll';
import Recensione from './component/Recensione';
import AdminApp from './component/admin/AdminApp';
import MenuAlLaCarta from './component/MenuCarta';
import CucinaApp from './component/cucina/Cucinaapp';

function App()
{
  const [selectedMenuType, setSelectedMenuType] = useState('');
  const [orderConfig, setOrderConfig] = useState(null);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // Se l'URL inizia con /admin, mostriamo l'app dello staff (login + sidebar)
  // invece del flusso cliente. Il tablet al tavolo non ci arriva mai perché
  // non ha motivo di navigare a quell'indirizzo; tu invece lo apri/salvi
  // come preferito sul dispositivo che usi in sala.
  const path = window.location.pathname;
  const isAdminRoute = path === '/admin' || path.startsWith('/admin/');
  const isCucinaRoute = path === '/cucina' || path.startsWith('/cucina/');

  if (isAdminRoute)
  {
    return <AdminApp />;
  }

  // /cucina: app separata per la cucina, con login e schermata propri.
  // Qualsiasi altro URL (es. "/") mostra il flusso cliente (HomePage + menu).
  if (isCucinaRoute)
  {
    return <CucinaApp />;
  }

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
        //const MenuAlLaCarta = ({ onBack, onOpenReviews, tableNumber = 40 }
        <MenuAlLaCarta
          onBack={handleBack}
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