import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../src/components/NavBar'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'

export default function App() {
  const [productSearch, setProductSearch] = useState('')
  return (
    <>
      <BrowserRouter>
        <NavBar setProductSearch={setProductSearch} />
        <Routes>
          <Route path='/' element={<Home productSearch={productSearch}/>}/>
          <Route path='/product/details/:id' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
