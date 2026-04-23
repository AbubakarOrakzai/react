import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

import Home from './pages/Home.jsx'
import Programs from './pages/Programs.jsx'
import Admission from './pages/Admission.jsx'
import Faculty from './pages/Faculty.jsx'
import Footer from './components/Footer.jsx'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Programs' element={<Programs/>}/>
        <Route path='/Admission' element={<Admission/>}/>
        <Route path='/Faculty' element={<Faculty/>}/> 
      </Routes>
        <Footer/>     
    </div>
  )
}