import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './Header'
import  './App.css'
import Product from './Product'
import { useDispatch } from 'react-redux'
import { clearallItem } from './redux/slice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartList from './CartList.jsx'


function App() {
  const disptach = useDispatch();
   return (
    <>
    <BrowserRouter>
    <Header/>
    
    <Routes>
      <Route path="/" element={ <Product />} ></Route>
      <Route path="/cart" element={ <CartList/>} ></Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
