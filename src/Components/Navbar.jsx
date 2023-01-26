import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <h2> <NavLink to="/">Home</NavLink> </h2>
        <h2> <NavLink to="/Students"> Studenst </NavLink> </h2>
        <h2> <NavLink to="/Contact"> Contact </NavLink> </h2>
    </nav>
    </>
  )
}

export default Navbar