import React, { useState } from 'react';
import './index.scss';
import appLogo from '../../assets/logo-light.png';
import axios from 'axios';
import ReactFlagsSelect from "react-flags-select";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Swal from 'sweetalert2'

export default function LoginPage() {

  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    country: ''
  };


  const [selected, setSelected] = useState("");
  const [value, setValue] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    country: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here
    const errors = validateForm(formData);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      ///////////////////////////////////////////////////////////////////////////////
      // If there are no validation errors, submit the form data to the backend API//
      ///////////////////////////////////////////////////////////////////////////////
      submitForm(formData);
      Swal.fire({
        title: `Good job Mr ${formData.firstName}`,
        text: "You Sucessfully Signed Up!",
        icon: "success"
      });
      setFormData(
        initialFormData
      );
    };
  }
  const validateForm = (data) => {
    let errors = {};
    if (!data.firstName.trim()) {
      errors.firstName = 'FirstName is required';
    }
    if (!data.lastName.trim()) {
      errors.lastName = "Last Name is Required";

    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (!data.country.trim()) {
      errors.country = "countery is Required";
    }
    if (!data.phone.trim()) {
      errors.phone = "phone is Required";

    }

    return errors;
  };
  const submitForm = async (data) => {
    try {
      // Make a POST request to your .NET API
      const response = await axios.post('https://www.ehkey.com/api/account/register', data);
      console.log('Form submitted successfully', response.data);
      // Optionally, you can redirect the user to another page or show a success message
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };
  return (
    <div className="col-12" id="LoginPage">
      <div className="content">
        <div className="col-12 col-md-7" id="imageSection">
          <div className="filter">
            <div className="col-12">
              <img src={appLogo} alt="App Logo" />
            </div>
            <div className="col-12" id="mainContent">
              <h1 className="col-12">Welcome back!</h1>
              <p className="col-12">
                Get access to your Orders, Wishlist and Recommendations.
              </p>
              <div className="col-4">
                <p>Watch demo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5" id="formSection">

          <form onSubmit={handleSubmit} className='col-10 SignUpForm'>
            <h2 className='H2'>Sign Up</h2>
            <div className='col-10'>
              <TextField id="outlined-basic"
                label="First Name"
                variant="outlined"
                className='input3 col-12'
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span className='error_Msg'>{errors.firstName}</span>}
            </div>
            <div className='col-10'>
              <TextField id="outlined-basic"
                label="Last Name"
                variant="outlined"
                className='input3 col-12'
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />

              {errors.lastName && <span className='error_Msg'>{errors.lastName}</span>}
            </div>

            <div className='col-10'>
              <TextField id="outlined-basic"
                label="Email"
                variant="outlined"
                className='input3 col-12'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className='error_Msg'>{errors.email}</span>}
            </div>

            <div className='col-10'>
              <TextField id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                className='input3 col-12'
                name='phone'
                type="text"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className='error_Msg'>{errors.phone}</span>}

            </div>
            <div className='col-10'>
              <TextField id="outlined-basic"
                label="Password"
                variant="outlined"
                className='input3 col-12'
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

              {errors.password && <span className='error_Msg'>{errors.password}</span>}
            </div>
            <div className='col-10'>
              <ReactFlagsSelect
                className='col-12'
                selected={formData.country}
                onSelect={(country) => setFormData({ ...formData, country: country })}
                placeholder='Countery'
                name="country"
                // value={formData.country}
                // onChange={handleChange}
                searchable
                searchPlaceholder="Search countries"
              />
              {errors.country && <span className='error_Msg'>{errors.country}</span>}
            </div>
            <div className="col-10">
              <button type="submit" className="btn col-12">Sign Up</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}
