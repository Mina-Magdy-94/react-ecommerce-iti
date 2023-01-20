import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getProducts, productsActions } from '../store/reducers/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './Loading'

export default function Product() {
  const { filterProductsWithCategory } = productsActions
  const { products, filteredProds, isLoading, error } = useSelector((state) => state.productsList)
  const dispatch = useDispatch()
  console.log(`This is products array from Product`, products)
  const catBtnStyle=({isActive})=>{
    return {
      backgroundColor:isActive?"green":"yellow"
    }
  }

  useEffect(() => {
    dispatch(getProducts())
  }, []);

  let renderingFunction = (arr) =>
    arr.length === 0 ?
      (<p className='lead fs-3 alert alert-warning text-danger text-center'>No Products To Show</p>) :
      arr.map((product) => {
        return (
          <div className='prodCart' key={product.id}>
            <div className="my-3 pb-3 bg-prim text-light rounded border border-success border-3" >
              <img src={product.imgSrc} className="card-img-top" alt={product.title} style={{height:"250px",objectFit:"cover",borderRadius:"5px"}}/>
              <div className="card-body mt-2 text-center NavLink">
                <h5 className="card-title text-warning">{product.title}</h5>
                <p className="lead">Price : {product.price}</p>
                <NavLink to={`/products/${product.id}`} className="btn btn-success">Buy Now</NavLink>
              </div>
            </div>
          </div>

        )
      })

  const productList = filteredProds.length !== 0 ? renderingFunction(filteredProds) : renderingFunction(products)

  let categoriesArr = [...new Set(products.map((product) => product.category))]
  console.log(categoriesArr);

  let filterCategory = (cat) => dispatch(filterProductsWithCategory(cat))
  let showAll = () => dispatch(filterProductsWithCategory(null))

  let categoryButtons = categoriesArr.length === 0 ? null :
    categoriesArr.map((cat) => {
      return (
        <button className='btn btn-warning mx-2 my-2 fw-bold catBtn' key={cat} onClick={() => filterCategory(cat)}>{cat}</button>
      )
    })

  return (
    <div className=' my-2'>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className='text-prim'>Products</h1>
            <hr />
            <NavLink className='btn btn-warning mx-2 my-2 fw-bold catBtn'  onClick={showAll}>All</NavLink>
            {categoryButtons}
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {isLoading && <Loading />}
          {!error && productList}
          {error && <div className='alert alert-warning text-danger text-center fs-2 fw-bold'>{error}</div>}
        </div>
      </div>
    </div>
  )
}
