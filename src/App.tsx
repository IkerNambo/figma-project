
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Pricing from './pages/pricing'
import Contact from './pages/contact'
import Navbar from './components/navbar'

import './App.css'

function App() {


  return (
    <>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
   
  )
}

export default App
