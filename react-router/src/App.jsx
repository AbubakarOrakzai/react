import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
        </>
      )
    }
  ])
  
  return <RouterProvider router={router} />
}