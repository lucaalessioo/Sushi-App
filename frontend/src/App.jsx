import { useState } from 'react';
import HomePage from './component/HomePage';
import MenuAll from './component/MenuAll';
import Recensione from './component/Recensione';
import AdminApp from './component/admin/AdminApp';
import MenuAlLaCarta from './component/MenuCarta';
import CucinaApp from './component/cucina/Cucinaapp';
import LoginTablet from './component/LoginTablet';
import { getUtente, clearSession } from './component/admin/auth';

function App()
{
  const [selectedMenuType, setSelectedMenuType] = useState('');
  const [orderConfig, setOrderConfig] = useState(null);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [piattiOrdinatiSessione, setPiattiOrdinatiSessione] = useState([]);

  const registraPiattiOrdinati = (items) =>
  {
    if (!items?.length) return;
    setPiattiOrdinatiSessione((prev) =>
    {
      const mappa = new Map(prev.map((p) => [String(p.id), { ...p }]));
      items.forEach((item) =>
      {
        const key = String(item.dbId ?? item.id);
        const prevItem = mappa.get(key);
        if (prevItem)
        {
          mappa.set(key, { ...prevItem, qty: (prevItem.qty || 0) + (item.qty || 1) });
        }
        else
        {
          mappa.set(key, {
            id: key,
            piattoId: item.dbId ?? item.id,
            name: item.name,
            image: item.image,
            qty: item.qty || 1,
          });
        }
      });
      return [...mappa.values()];
    });
  };
  const [tabletSession, setTabletSession] = useState(() =>
  {
    const u = getUtente();
    return u?.ruolo === 'ROLE_TABLET' && u?.tavoloId != null ? u : null;
  });

  const path = window.location.pathname;
  const isAdminRoute = path === '/admin' || path.startsWith('/admin/');
  const isCucinaRoute = path === '/cucina' || path.startsWith('/cucina/');

  if (isAdminRoute)
  {
    return <AdminApp />;
  }

  if (isCucinaRoute)
  {
    return <CucinaApp />;
  }

  // Flusso tavolo: serve login tablet (JWT) prima di ordinare
  if (!tabletSession)
  {
    return (
      <LoginTablet
        onLoginSuccess={(utente) => setTabletSession(utente)}
      />
    );
  }

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

  const handleLogoutTablet = () =>
  {
    clearSession();
    setTabletSession(null);
    setSelectedMenuType('');
    setOrderConfig(null);
  };

  const tavoloId = tabletSession.tavoloId;
  const numeroTavolo = tabletSession.numeroTavolo;

  return (
    <>
      {selectedMenuType === '' && (
        <HomePage
          onSelection={handleSelection}
          numeroTavolo={numeroTavolo}
          onLogout={handleLogoutTablet}
        />
      )}

      {selectedMenuType === 'all-you-can-eat' && (
        <MenuAll
          onBack={handleBack}
          onOpenReviews={() => setIsReviewOpen(true)}
          orderType="all-you-can-eat"
          orderConfig={orderConfig}
          tavoloId={tavoloId}
          numeroTavolo={numeroTavolo}
          onOrderSent={registraPiattiOrdinati}
        />
      )}

      {selectedMenuType === 'alla-carta' && (
        <MenuAlLaCarta
          onBack={handleBack}
          onOpenReviews={() => setIsReviewOpen(true)}
          tavoloId={tavoloId}
          tableNumber={numeroTavolo}
          onOrderSent={registraPiattiOrdinati}
        />
      )}

      <Recensione
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        tavoloId={tavoloId}
        numeroTavolo={numeroTavolo}
        piattiSessione={piattiOrdinatiSessione}
      />
    </>
  );
}

export default App;
