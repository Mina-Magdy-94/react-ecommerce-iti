import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getProducts,deleteProduct } from '../store/reducers/productSlice';
import { NavLink, useNavigate } from 'react-router-dom';


export default function ProductDashboard() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {products}=useSelector((state)=>state.productsList)

    const deleteHandler=(prodId)=>{
        dispatch(deleteProduct(prodId))
    }

    const viewHandler=(prodId)=>{
        
    }

    const updateHandler=(prodId)=>{
        navigate(`/edit/${prodId}`)
    }



useEffect(() => {
    dispatch(getProducts())
}, []);


const productDashboard=products.map((product)=>{
    return(
        <div className="bg-secondary text-light my-3 p-2" key={product.id}>
            <h3>{product.title}</h3>
            <button className='btn btn-danger m-2'onClick={()=>deleteHandler(product.id)}>Delete</button>
            <button className='btn btn-success m-2'onClick={()=>viewHandler(product.id)}>View</button>
            <button className='btn btn-warning m-2'onClick={()=>updateHandler(product.id)}>Update</button>
        </div>
    )
})



  return (
    <div className='container-fluid bg-prim p-3'>
        <div className="row">
            <h1 className='text-light text-center fw-bold'>Products Dashboard</h1>
        </div>
        <div className="row w-25">
            <NavLink to="/add" className='btn btn-sec'>Add New Product</NavLink>
        </div>
        <div>
            {productDashboard}
        </div>
    </div>
  );
}
