import React from 'react';

export default function Footer() {
  return (
    <div className='container-fluid bg-prim text-light text-muted ourFooter'>
      <div className="row">
        {/* <div className="col-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta consequatur, quo facilis quas excepturi molestiae doloremque eaque. Neque aliquam, quo sapiente quibusdam est nostrum nemo. Blanditiis, nesciunt dolorem. Dolore, dolor.
        </div> */}
    
        <div className="col-6 mx-auto text-center">
        <p className='fw-bold fs-4'>Visit our social media accounts</p>
          <span className="fa fa-facebook me-2 primary"></span>Facebook/E-commerce <br/>
          <span className="fa fa-instagram me-2 primary"></span>instagram/E-commerce
          <p>&copy; 2022,Mina Magdy.All rights reserved</p>
        </div>
      </div>
      
    </div>
  );
}
