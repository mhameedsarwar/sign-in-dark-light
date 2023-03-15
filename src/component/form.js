import React from 'react'
import { useState } from "react";
/*-----------------------------------------------*/

const Form = () => {

 //State object
 const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmit] = useState(false);

  const [valid, setValid] = useState(false);

  //Handle Event with spread objects - ChangeValue
  const handleFirstNameInputChange =(event) =>{
    setValues({...values, firstName:event.target.value})
  }

  //Handle Event with spread objects - ChangeValue
  const handlelastNameInputChange =(event) =>{
    setValues({...values, lastName:event.target.value})
  }

  //Handle Event with spread objects - ChangeValue
  const handleEmailInputChange =(event) =>{
    setValues({...values, email:event.target.value})
  }

  //Handle submit Event
  const handleSubmit = (event) =>{
    event.preventDefault();
    //If valid show Success
    if((values.firstName && values.lastName && values.email)){
      setValid(true);
    }
    setSubmit(true);
  }
    
  return (
    <form className="register-form" onSubmit={handleSubmit}>
    {/* Ternary operator - (if-else) */}
    {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null }
    
    <input
      onChange={handleFirstNameInputChange}
      value={values.firstName}
      id="first-name"
      className="form-field"
      type="text"
      placeholder="First Name"
      name="firstName"
    />
    {/* Ternary operator - (if-else), and , not*/}
    {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}

    <input
      onChange={handlelastNameInputChange}
      value={values.lastName}
      id="last-name"
      className="form-field"
      type="text"
      placeholder="Last Name"
      name="lastName"
    />
    {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
    <input
      onChange={handleEmailInputChange}
      value={values.email}
      id="email"
      className="form-field"
      type="text"
      placeholder="Email"
      name="email"
    />
    {submitted && !values.email ? <span id="email-error">Please enter an email address</span> :null }
    <button className="form-field" type="submit">
      Sign in
    </button>
  </form>
  )
}

export default Form;



