import React,{ useState,useEffect } from 'react';
import { addProduct } from '../store/reducers/productSlice';
import { useDispatch } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom';
import { editProduct } from '../store/reducers/productSlice';


export default function ProductForm() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {id}=useParams()

    const [formValues,setformValues]=useState({
        title:"",
        price:"",
        desc:"",
        imgSrc:"",
        category: ""
    })

    const submitHandler=(e)=>{
        e.preventDefault()
        if(id){
          dispatch(editProduct({id,formValues}))
        }
        else{
          dispatch(addProduct(formValues))
        }
        

        navigate("/")
    }

useEffect(() => {
  console.log(formValues)
},[formValues] );

    const operationHandler=(e)=>{
        setformValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }

  return (
    <div className='container bg-dark my-5 p-5 rounded border border-success border-5'>
      <div className="row">
        <form onSubmit={submitHandler} onChange={operationHandler}>
            <input name="title" type="text" className="form-control my-3" placeholder="Enter product title"/>
            <input name="price" type="text" className="form-control my-3" placeholder="Enter product price"/>
            <textarea name="desc" className="form-control my-3" placeholder="Enter product description"/>
            <input name="imgSrc" type="text" className="form-control my-3" placeholder="Enter product image source"/>
            <div className='my-3'>
                <label htmlFor="category" className='text-light fs-4 fw-bold'>Choose Category</label><br/>
                <select name="category" id="category" className="form-select" size="1" >
                    <option value="mobile">Mobile</option>
                    <option value="lap">Lap</option>
                </select>
            </div>
            <button type='submit' className="btn btn-success">{id? `Edit`:`Add New Product`}</button>
        </form>
      </div>
    </div>
  );
}
