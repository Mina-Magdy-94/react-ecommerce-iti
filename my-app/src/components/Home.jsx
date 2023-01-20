import React from 'react';
import Product from "./Product"

export default function Home() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/images/home/img1.png" className="d-block w-100 homeImg" alt="product" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/home/img2.jpg" className="d-block w-100 homeImg" alt="product" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/home/img3.jpg" className="d-block w-100 homeImg" alt="product" />
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container py-2 m3-5 mx-auto">
        <div className="row d-flex">

          <div className='text-center col-12 col-md-6 p-5'>
            <h3 className='text-prim fw-bold'>Welcome to Our Store</h3>
            <p className='h4 text-info'>You can find what you want and buy whatever you desire whenever you want with just a few click with our ecommerce</p>
          </div>

          <div className='col-12 col-md-6'>
            <img src="/assets/images/home/home3.jpg" alt="Shopping" style={{height:"90%" ,width:"80%"}} className="img-home"/>
          </div>

        </div>
      </div>
      <Product />
    </div>
  );
}
