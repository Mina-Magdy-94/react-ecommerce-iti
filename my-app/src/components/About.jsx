import React from 'react'
import {NavLink} from 'react-router-dom'

export default function About() {
  return (
    <div className='bg-light text-prim'>
      <div className="container py-5 my-2">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-prim mb-4 fw-bold'>About Us</h1>
            <p className='lead fw-bold text-info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi tempora aspernatur neque consequuntur, rem nesciunt optio odit praesentium nostrum maiores debitis iure nihil sint rerum delectus quibusdam inventore consequatur aliquam?</p>
            <NavLink to="/contact" className='btn btn-success px-3'>Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/about/about.webp" alt="" style={{width:"40vw"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}
