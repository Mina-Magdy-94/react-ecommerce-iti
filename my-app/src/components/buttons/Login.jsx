import React from 'react';

export default function Login() {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-outline-primary mx-2" data-bs-toggle="modal" data-bs-target="#loginModal">
  <span className='fa fa-sign-in me-1'></span>Login
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <button className="btn btn-primary w-100 mb-3">
        <span className="fa fa-google me-2"></span>  Sign in with Google
        </button>
        <button className="btn btn-primary w-100 mb-3">
        <span className="fa fa-facebook me-2"></span>  Sign in with Facebook
        </button>
      <form>
  <div className="mb-3">
    <label htmlFor="Email1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="Password1" className="form-label">Password</label>
    <input type="password" className="form-control" id="Password1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="Check1"/>
    <label className="form-check-label" htmlFor="Check1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-outline-primary w-100 mt-3">Submit</button>
</form>
      </div>
      
    </div>
  </div>
</div>
    </>
  );
}
