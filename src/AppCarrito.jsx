import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ComprasPage } from './pages/ComprasPage'
import { CarritoPage } from './pages/CarritoPage'

export const AppCarrito = () => {
  return (
    <>
    <NavBar />
    <Routes>
         < Route path='/' element={<ComprasPage/>}></Route>
        <Route path='/carrito' element={<CarritoPage/>}></Route>
        <Route path='/*' element={<Navigate to={"/"}> </Navigate>}></Route> 
        
    </Routes>
    </>
  )
}
