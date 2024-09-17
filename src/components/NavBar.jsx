import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='h-20 w-auto mx-10 items-center 
    flex justify-between'>
        <div>
        <NavLink to="/" href="#" className='mr-10 text-2xl font-bold'>Carrito</NavLink>
        <NavLink to="/" href="#">Compras</NavLink>
        </div>
        <NavLink to="/carrito" href="#">
        🛒
        </NavLink>
    </nav>
  )
}
