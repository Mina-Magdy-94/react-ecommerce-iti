import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getProducts} from "../store/reducers/productSlice"
import { useDispatch,useSelector } from 'react-redux'
import {cartActions} from '../store/reducers/cartSlice';

export default function ProductDetails() {
    const {products}=useSelector((state)=>state.productsList)
    const dispatch=useDispatch()
    console.log(`This is products array from Product`,products)

useEffect(() => {
dispatch(getProducts())
}, []);

    const [cartBtn,setCartBtn]=useState("Add to cart")

    const {id}=useParams()
    console.log(`This is prouct id coming from useParams`,id)

    // const {products}=useSelector((state)=>state.productsList)
    // console.log(`This is products array from ProductDetails`,products)

    const {cart}=useSelector((state)=>state.cartList)
    console.log(`This is cart array from ProductDetails`,cart)

    const {addProductToCart,removeProductFromCart}=cartActions



    const ProductsToShow=products.filter((prod)=>prod.id===id)
    const requiredProductToShow=ProductsToShow[0]
        console.log(`This is required Product to show is ProductDetails`,requiredProductToShow)

        

    const handleCart=(product)=>{
        if(cartBtn==="Add to cart"){
            dispatch(addProductToCart(product))
            setCartBtn("Remove from cart")
        }
        else{
            dispatch(removeProductFromCart(product))
            setCartBtn("Add to cart")
        }
    }






  return (
    <>
    <div className="container my-5 py-3">
        <div className="row">
            <div className="col-md-5 d-flex justify-content-center mx-auto">
                <img className='productImg' src={requiredProductToShow.imgSrc} alt={requiredProductToShow.title} style={{width:"50vw",height:"50vh"}}/>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className='fw-bold'>{requiredProductToShow.title}</h1>
                <hr />
                <h2 className='my-4'>{requiredProductToShow.price}</h2>
                <p className='lead'>{requiredProductToShow.desc}</p>
                <button onClick={()=>handleCart(requiredProductToShow)} className='btn btn-outline-primary my-3'>{cartBtn}</button>
            </div>
        </div>
    </div>

    </>
  );
}
