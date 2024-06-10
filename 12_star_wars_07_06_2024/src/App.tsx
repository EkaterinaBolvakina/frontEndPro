
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { navItems } from './utils/constants'
import { createContext, useState } from 'react'

// Props-Ansatz: (als Kommentare) Einfach und klar, geeignet für kleinere Anwendungen oder wenn nur wenige Komponenten den Zustand benötigen.
// Kontext-Ansatz: Besser für größere Anwendungen oder wenn viele Komponenten denselben Zustand benötigen.

// 1. Kontext erstellen: 
// Hier wird der Kontext mit einem Objekt konfiguriert, das sowohl den aktuellen page-Zustand als auch die setPage-Funktion enthält. Durch das Verwenden eines Objekts im Kontext kannst du verwandte Zustände und Funktionen effizienter weitergeben und konsumieren. Es verbessert die Lesbarkeit und Wartbarkeit des Codes, besonders wenn du mehrere Werte und Funktionen über den Kontext teilen musst.

export const PageContext = createContext<{
  page: string;
  setPage: (newValue: string) => void;
} | null>(null)

function App() {
  const [page, setPage] = useState(navItems[0]); //Zustandsverwaltung: Der Zustand der aktuellen Seite (page) wird in der App-Komponente verwaltet und kann durch setPage geändert werden.

  console.log(page)
  return (
    <>
      {/* 2. Kontext weitergeben: 
      PageContext wird verwendet, um die setPage-Funktion an untergeordnete Komponenten weiterzugeben, wodurch diese den Zustand der aktuellen Seite ändern können. */}

      <PageContext.Provider value={{ page, setPage }}>
        {/* <Header setPage={setPage} /> */}
        <Header />
        {/* <Main page={page} /> */}
        <Main />
      </PageContext.Provider>
      <Footer />
    </>
  )
}

export default App
