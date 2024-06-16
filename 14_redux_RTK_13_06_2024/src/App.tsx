
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { navItems } from './utils/constants'
import { createContext, useState } from 'react'
import Main from './components/main/Main'

export const PageContext = createContext<{
  page: string;
  setPage: (newValue: string) => void;
} | null>(null)

function App() {
  const [page, setPage] = useState(navItems[0]); 

  console.log(page)
  return (
    <>
      <PageContext.Provider value={{ page, setPage }}>
        <Header />
        <Main />
      </PageContext.Provider>
      <Footer />
    </>
  )
}

export default App


