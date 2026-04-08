import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import { Car } from 'lucide-react'
import Card from './components/card'

export default function App() {
  return (
    <div>
      <Navbar />
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}
