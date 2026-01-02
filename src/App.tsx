import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/home'
import Pricing from './pages/pricing'
import Contact from './pages/contact'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default App
