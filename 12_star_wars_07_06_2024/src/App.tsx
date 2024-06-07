import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/users' element={<Main />} />
        {/* <Route path='/photos' element={<Footer />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
