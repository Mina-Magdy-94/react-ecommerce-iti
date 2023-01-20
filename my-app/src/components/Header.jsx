import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'

export default function Header() {

  const navlinkStyles=({isActive})=>{
    return {
      fontWeight: isActive?"bold":"normal",
      backgroundColor: isActive? "green":"#182747",
    }
  }


  return (
    <>
    <nav className="navbar navbar-expand-lg bg-prim text-info">
  <div className="container-fluid py-2">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className="nav-link fw-bold text-light rounded" style={navlinkStyles} aria-current="page" to="/">Home</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link fw-bold text-light rounded" style={navlinkStyles} to="/products">Product</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link fw-bold text-light rounded" style={navlinkStyles} to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold text-light rounded"style={navlinkStyles} to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold text-light rounded" style={navlinkStyles} to="/add">Add Product</NavLink>
        </li>
        
        
      </ul>
      <p className="lead m-auto fw-bold text-warning" to="#">E-Commerce</p>
      {/* <Login/> */}
      {/* <Signup/> */}
      <CartBtn/>
    </div>
  </div>
</nav>
    </>
  )
}
