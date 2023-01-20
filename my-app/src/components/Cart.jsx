import React,{useState,useEffect} from 'react';
import{useSelector,useDispatch} from 'react-redux'
import { NavLink,useNavigate } from 'react-router-dom';
import { delItem } from '../store/actions/index';
import { cartActions } from '../store/reducers/cartSlice';



export default function Cart() {
    const dispatch=useDispatch()
    const {cart, orderedQuantities} =useSelector((state)=>state.cartList)
    const navigate=useNavigate()
    const {removeProductFromCart, changeProductQuantity}=cartActions

    const handleClose=(item)=>{
        dispatch(removeProductFromCart(item))
    }

    let increaseHandler=(prodToAdd)=>
        dispatch(changeProductQuantity({prodToAdd, quantityToAdd: 1}))

    let decreaseHandler=(prodToAdd)=>
        dispatch(changeProductQuantity({prodToAdd, quantityToAdd: -1}))
    
    const reachedMaxQuantity = (cartItem) => cart.some(prod => 
        prod.id === cartItem.id && prod.quantity === orderedQuantities[prod.id]
    )

    const cartItems=(cartItem)=>{
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button className="btn-close float-end" aria-label='Close' onClick={()=>handleClose(cartItem)}></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.imgSrc} style={{height:"80%",width:"95%"}} alt={cartItem.title} />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'>{cartItem.price}</p>
                            <p className='lead fw-bold'>Count : {orderedQuantities[cartItem.id]}</p>
                            {reachedMaxQuantity(cartItem) ? <p className='text-danger'>Reached maximum quantity</p> : null}
                            <button className='btn btn-success mx-2' onClick={()=>increaseHandler(cartItem)}>+</button>
                            <button className='btn btn-danger mx-2' onClick={()=>decreaseHandler(cartItem)}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCard=()=>{
        return(
            <div className="px-4 my-5 bg-light rounded-3 py-5 text-center text-danger">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <>
    {cart.length===0 && emptyCard() } 
    {cart.length !==0 && cart.map((cartItems))}
    </>
  );
}
