import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout'
import Home from './components/Home'
import Services from './components/Services'
import Tours from './components/Tours'
import About from './components/About'
import Registration from './components/Registration'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='tours' element={<Tours />} />
          <Route path='about' element={<About />} />
          <Route path='registration' element={<Registration />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App