import React from 'react';

export default function NotFound() {
  return (
    <div className='contanier'>
        <div className="row justify-content-center">
            <img src="/assets/images/notfound/notfound.png" alt="Not Found" style={{height:"30vh",width:"30vw"}} />
        </div>
        <div className="row w-75 mx-auto">
            <h1 className='alert alert-warning text-danger text-center fw-bold'>Page Not Found</h1>
        </div>
    </div>
  );
}
