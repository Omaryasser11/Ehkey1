import React, { useState } from 'react';
import './index.scss';
import appLogo from '../../assets/icon.png';
import axios from 'axios';
import ReactFlagsSelect from 'react-flags-select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';
import useSignup from '../../hooks/account/useSignup'; // Import the custom hook for API interaction

export default function LoginPage() {
  const { signup, success, error } = useSignup(); // Using custom hook for API signup
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    country: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const { success: signupSuccess, error: signupError } = await signup(formData);

      if (signupSuccess) {
        Swal.fire({
          title: `Welcome, ${formData.firstName}!`,
          text: 'You have successfully signed up.',
          icon: 'success'
        });
        setFormData(initialFormData); // Reset form after successful signup
      } else {
        Swal.fire({
          title: 'Sign Up Failed',
          text: signupError || 'Unknown error occurred.',
          icon: 'error'
        });
      }
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
    if (!data.lastName.trim()) {
      errors.lastName = 'Last Name is required';
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
      errors.country = 'Country is required';
    }
    if (!data.phone.trim()) {
      errors.phone = 'Phone is required';
    }

    return errors;
  };

  return (
    <div className="col-12" id="LoginPage">
      <div className="content">
        <div className="col-12 col-md-7" id="imageSection">
          <div className="filter">
            <div className="col-12">
              <img className="LogoLogin" src={appLogo} alt="App Logo" />
            </div>
            <div className="col-12" id="mainContent">
              <h1 className="col-12">Welcome back!</h1>
              <p className="col-12">
                Get access to your Orders, Wishlist and Recommendations.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5" id="formSection">
          <form onSubmit={handleSubmit} className="col-10 SignUpForm">
            <h2 className="H2">Sign Up</h2>
            <div className="col-10">
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                className="input3 col-12"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span className="error_Msg">{errors.firstName}</span>}
            </div>
            <div className="col-10">
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                className="input3 col-12"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <span className="error_Msg">{errors.lastName}</span>}
            </div>
            <div className="col-10">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="input3 col-12"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error_Msg">{errors.email}</span>}
            </div>
            <div className="col-10">
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                className="input3 col-12"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error_Msg">{errors.phone}</span>}
            </div>
            <div className="col-10">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className="input3 col-12"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="error_Msg">{errors.password}</span>}
            </div>
            <div className="col-10">
              <ReactFlagsSelect
                className="col-12"
                selected={formData.country}
                onSelect={(country) => setFormData({ ...formData, country: country })}
                placeholder="Country"
                name="country"
                searchable
                searchPlaceholder="Search countries"
              />
              {errors.country && <span className="error_Msg">{errors.country}</span>}
            </div>
            <div className="col-10">
              <button type="submit" className="btn col-12">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
