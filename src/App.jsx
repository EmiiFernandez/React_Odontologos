/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './routers/Home'
import Favs from './routers/Favs'
import Detail from './routers/Detail'
import Contact from './routers/Contact'
import './App.css'

function App() {
  return (
    <>
      <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='favs' element={<Favs />} />
            <Route path='contacto' element={<Contact />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<div>Página no encontrada</div>} />
          </Routes>
          <Footer />
      </div>
    </>
  )
}

export default App
