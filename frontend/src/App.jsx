import { useState } from 'react'
// Importa HomePage dalla cartella components
import HomePage from './component/HomePage'

function App() {
  // Stato per memorizzare il tipo di menu scelto ('', 'all-you-can-eat', o 'alla-carta')
  const [selectedMenuType, setSelectedMenuType] = useState('');

  // Funzione chiamata quando l'utente fa una scelta nella HomePage
  const handleMenuSelection = (type) => {
    setSelectedMenuType(type);
    console.log("Menu selezionato:", type);
  };

  return (
    <>
      {/* Mostra la HomePage se non è stato ancora selezionato un menu */}
      {selectedMenuType === '' && (
        <HomePage onSelection={handleMenuSelection} />
      )}

      {/* Mostra il menu quando la scelta è stata effettuata */}
      {selectedMenuType !== '' && (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-20 font-sans">
          <h1 className="text-5xl font-extrabold tracking-tighter">Hai selezionato il Menu:</h1>
          <p className="text-4xl text-amber-400 font-bold mt-6 uppercase tracking-widest">{selectedMenuType}</p>
          <p className="text-neutral-300 mt-10 text-xl max-w-xl text-center">
            Qui caricheresti la tua schermata dell'iPad esistente, passando informazioni diverse se è All You Can Eat.
          </p>
          <button 
            onClick={() => setSelectedMenuType('')} 
            className="mt-16 p-4 px-10 bg-neutral-800 rounded-full border border-neutral-700 hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            Cambia scelta menu
          </button>
        </div>
      )}
    </>
  )
}

export default App