import React,{useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import { getProducts } from '../store/reducers/productSlice'
import { useDispatch,useSelector } from 'react-redux'
import Loading from './Loading'
import {productsActions} from "../store/reducers/productSlice"

export default function Product() {

  const {products, filteredProds, isLoading,error}=useSelector((state)=>state.productsList)
  const dispatch=useDispatch()
  console.log(`This is products array from Product`,products)

  useEffect(() => {
   dispatch(getProducts())
  }, []);

const productList=products.length==0?
(<p className='lead fs-3 alert alert-warning text-danger text-center'>No Products To Show</p>)
 :products.map((product)=>{
  return(
    <div className="my-3 py-3 bg-sec text-light rounded col-11 col-sm-5 col-md-3 mx-1" key={product.id}>
  <img src={product.imgSrc} className="card-img-top" alt={product.title}/>
  <div className="card-body text-center NavLink">
    <h5 className="card-title">{product.title}</h5>
    <p className="lead">{product.price}</p>
    <NavLink to={`/products/${product.id}`} className="btn btn-prim">Buy Now</NavLink>
  </div>
</div>
  )
})



let renderingFunction=(arr)=>{
  arr.length==0?(<p className='lead fs-3 alert alert-warning text-danger text-center'>No Products To Show</p>)
  :arr.map((product)=>{
   return(
     <div className="my-3 py-3 bg-sec text-light rounded col-11 col-sm-5 col-md-3 mx-1" key={product.id}>
   <img src={product.imgSrc} className="card-img-top" alt={product.title}/>
   <div className="card-body text-center NavLink">
     <h5 className="card-title">{product.title}</h5>
     <p className="lead">{product.price}</p>
     <NavLink to={`/products/${product.id}`} className="btn btn-prim">Buy Now</NavLink>
   </div>
 </div>
   )
 })
}

let categoriesArr=[]
for(let i=0 ;i<products.length ; i++ ){
  if(!categoriesArr.includes(products[i].category)){
    categoriesArr.push(products[i].category)
  }
}


let filterCategory=(categoryToFilter)=>{
  const filteredProds = products.filter((product)=> product.category===categoryToFilter)
  console.log(filteredProds)
  return renderingFunction(filteredProds)
}

let categoryButtons=categoriesArr.length===0? null :
categoriesArr.map((cat)=>{
  return (
    <button className='btn btn-outline-warning mx-2 my-2' key={cat} onClick={()=>filterCategory(cat)}>{cat}</button>
  )
})

let showAll=()=>products


  return (
    <div className='bg-prim text-light'>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr />
            <button className='btn btn-outline-warning mx-2 my-2' onClick={showAll}>All</button>
            {categoryButtons}
          </div>
        </div>
        <div className="row justify-content-around">
          {isLoading && <Loading/>}
          {!error && productList}
          {error && <div className='alert alert-warning text-danger text-center fs-2 fw-bold'>{error}</div>}
        </div>
      </div>
    </div>
  )
}
