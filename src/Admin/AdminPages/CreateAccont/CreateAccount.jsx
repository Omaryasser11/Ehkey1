// CreateAccount.js
import React, { useState } from 'react';
import axios from 'axios';
import './CreateAccount.scss';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        country: '',
        password: '',
        role: 'user' // default role can be 'user' or 'admin'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/create-user', formData);
            console.log('User created:', response.data);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <div className="create-account-form  mainPage">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit} className='col-12'>
                <div className='col-7'>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div  className='col-7'>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div >
                <div  className='col-7'>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div  className='col-7'>
                    <label>Phone:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div >
                <div  className='col-7'>
                    <label>Country:</label>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                </div>
                <div  className='col-7'>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div  className='col-7'>
                    <label>Role:</label>
                    <select name="role" value={formData.role} onChange={handleChange}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div   >
                <button  className='col-7'  type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default CreateAccount;
