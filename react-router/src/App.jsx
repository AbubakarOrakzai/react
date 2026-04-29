import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/contact'  // ✅ Capital C
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Contact' element={<Contact/>}/>  {/* ✅ Capital C */}
      </Routes>
    </div>
  )
}