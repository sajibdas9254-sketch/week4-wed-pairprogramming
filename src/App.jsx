import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Tours from './components/Tours'
import About from './components/About'
import Registration from './components/Registration'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/about' element={<About />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App