import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CartBtn() {
  // const state=useSelector((state)=>state.cartList)
  const {cart}=useSelector((state)=>state.cartList)
  console.log(`This is cart array from Header`,cart);
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-warning mx-2">
<span className='fa fa-shopping-cart me-1'></span> Cart ({cart.length})
      </NavLink>
    </>
  );
}
