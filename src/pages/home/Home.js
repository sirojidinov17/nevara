import React from 'react'
import Header from './header/Header'
import Products from './products/Products'
import { useLocation } from 'react-router-dom'

function Home() {


  const position =useLocation()

  if ( position.pathname =="/") {
    document.title="Nevara-Furniture & Interior Ecommerce HTML Template"
  }

  return (
  <div className="Header">
    <Header/>
    <Products/>
  </div>
  )
}

export default Home
