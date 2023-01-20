import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Contact() {
  const navigate=useNavigate()
const [formValues,setFormValues]=useState({
  fname:"",
  email:"",
  message:""
})

const [formErrors,setFormErrors]=useState({
  fname:null,
  email:null,
  message:null
})



  let submitForm=(e)=>{
    e.preventDefault()
    if (
      !Object.values(formValues).some(formValue => formValue.length === 0)&&
      !Object.values(formErrors).some(errorMessage => errorMessage)) {
      // submit
      // navigate
      navigate("/")
    }
    else{
      let currentFormErrors={
        ...formErrors
      }
      if(formValues.fname.length ===0){
        currentFormErrors.fname=`You must enter your full name`
      }

      if(formValues.email.length ===0){
        currentFormErrors.email=`You must enter your email`
      }

      if(formValues.message.length ===0){
        currentFormErrors.message=`You must enter your message`
      }

      setFormErrors({...formErrors,...currentFormErrors})
    }
  }


  let inputChange=(e)=>{
    const currentFormValues = {
      ...formValues,
      [e.target.name]: e.target.value
    };

    const currentFormErrors = {
      ...formErrors
    };
    
    if (e.target.name === 'fname') {
      const myRe = /^\w{3,} \w{3,}$/;
      if (!myRe.test(e.target.value)) {
        currentFormErrors[e.target.name] = "Full name must contain words"
      } else {
        currentFormErrors[e.target.name] = null
      }
    }

    if (e.target.name === 'email') {
      const myRe = /^.+@.+$/;
      if (!myRe.test(e.target.value)) {
        currentFormErrors[e.target.name] = "email must be valid"
      } else {
        currentFormErrors[e.target.name] = null
      }
    }

    if (e.target.name === 'message') {
      if (e.target.value === '') {
        currentFormErrors[e.target.name] = "Message must not be empty"
      } else {
        currentFormErrors[e.target.name] = null
      }
    }

    setFormValues({
        ...formValues,
        ...currentFormValues
    })

    setFormErrors({
      ...formErrors,
      ...currentFormErrors
  })



  }

  useEffect(() => console.log(formValues), [formValues]);





  return (
    <div className='text-prim'>
      <div className="container my-2">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Questions?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src="/assets/images/contact/contact3.png" alt="Contact Us" style={{ height: "55vh" , width:"30vw" }} />
          </div>
          <div className="col-md-6">
            <form onSubmit={submitForm}  onChange={inputChange}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label fw-bold">Full Name</label>
                <input name="fname" type="text" className="form-control" id="fullname" placeholder="Enter Your Full Name" />
                {formErrors.fname ? <p className='text-danger'>{formErrors.fname}</p>: null}
              </div>
              <div className="mb-3">
                <label htmlFor="emailAddress" className="form-label fw-bold">Email address</label>
                <input name="email" type="email" className="form-control" id="emailAddress" placeholder="name@example.com" />
                {formErrors.email ? <p className='text-danger'>{formErrors.email}</p>: null}
              </div>
              <div className="mb-3">
                <label htmlFor="Textarea1" className="form-label fw-bold">Example textarea</label>
                <textarea name="message" className="form-control" id="Textarea1" rows="4"></textarea>
                {formErrors.message ? <p className='text-danger'>{formErrors.message}</p>: null}
              </div>
              <button type="submit" className="btn btn-success mb-4">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
