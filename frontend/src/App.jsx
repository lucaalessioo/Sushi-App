import { useState } from 'react'
import HomePage from './component/HomePage'
import MenuAll from './component/MenuAll'

function App() {
  const [selectedMenuType, setSelectedMenuType] = useState('');

  return (
    <>
      {/* Se non è stato ancora scelto alcun menu, mostra la HomePage */}
      {selectedMenuType === '' && (
        <HomePage onSelection={(type) => setSelectedMenuType(type)} />
      )}

      {/* Se sceglie All You Can Eat, mostra il nuovo menu */}
      {selectedMenuType === 'all-you-can-eat' && (
        <MenuAll onBack={() => setSelectedMenuType('')} />
      )}

      {/* Se sceglie Alla Carta (puoi poi creare MenuCarta.jsx) */}
      {selectedMenuType === 'alla-carta' && (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-20 font-sans">
          <h1 className="text-4xl font-bold">Menu Alla Carta</h1>
          <button 
            onClick={() => setSelectedMenuType('')} 
            className="mt-8 p-3 px-8 bg-neutral-800 rounded-full border border-neutral-700"
          >
            Torna Indietro
          </button>
        </div>
      )}
    </>
  )
}

export default App