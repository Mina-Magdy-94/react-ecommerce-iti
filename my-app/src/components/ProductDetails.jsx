import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getProducts} from "../store/reducers/productSlice"
import { useDispatch,useSelector } from 'react-redux'
import {cartActions} from '../store/reducers/cartSlice';
import Loading from './Loading';

export default function ProductDetails() {

    const {products}=useSelector((state)=>state.productsList)
    const dispatch=useDispatch()
    console.log(`This is products array from ProductDetails`,products)

    useEffect(() => {
        dispatch(getProducts())
    }, []);

    const [AddToCartBtn,setAddToCartBtn]=useState("Add to cart")

    const {id}=useParams()
    console.log(`This is prouct id coming from useParams`,id)

    // const p2 =useSelector((state)=>state.productsList).products
    // console.log(`This is products array from ProductDetails2`,p2)

    const {cart}=useSelector((state)=>state.cartList)
    console.log(`This is cart array from ProductDetails`,cart)

    const {addProductToCart,removeProductFromCart}=cartActions
    console.log("car actionnnnnnnnnnnnnnnnnn", addProductToCart)


    
    const ProductsToShow=products.filter((prod)=>prod.id===Number(id))
    const requiredProductToShow=ProductsToShow[0]
    console.log(`This is required Product to show is ProductDetails`,requiredProductToShow)

        

    const handleCart=(product)=>{
        if(AddToCartBtn==="Add to cart"){
            // console.log("sssssssss", addProductToCart(product))
            // console.log("========================", dispatch(addProductToCart(product)))
            // dispatch(addProductToCart(product))
            setAddToCartBtn("Remove from cart")
            return dispatch(addProductToCart(product));
        }
        else{
            setAddToCartBtn("Add to cart")
            return dispatch(removeProductFromCart(product))
        }
    }






  return (!requiredProductToShow ? <Loading/>:
    <>
    <div className="container my-5 py-3">
        <div className="row my-5">
            <div className="col-md-5 py-3  rounded-circle d-flex justify-content-center mx-auto">
                <img className='productImg rounded' src={requiredProductToShow.imgSrc} alt={requiredProductToShow.title} style={{width:"35vw",height:"60vh"}}/>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className='fw-bold text-prim'>{requiredProductToShow.title}</h1>
                <hr />
                <h2 className='my-4 text-success'>{requiredProductToShow.price}</h2>
                <p className='lead'>{requiredProductToShow.desc}</p>
                <button onClick={()=>handleCart(requiredProductToShow)} className='btn btn-success my-3'>{AddToCartBtn}</button>
            </div>
        </div>
    </div>

    </>
  );
}
