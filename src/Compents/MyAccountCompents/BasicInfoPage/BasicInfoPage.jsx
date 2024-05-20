// BasicInfoPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests

function BasicInfoPage() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        country: '',
        phone: '',
    });
    useEffect(() => {
        // Fetch user data from backend when component mounts
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJvbWFyIFlhc3NlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Im9tYXJ5YXNzZXJ0YWhhMUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDbGllbnQiLCJleHAiOjE3MTU1MzYzNjksImlzcyI6Imh0dHBzOi8vd3d3LmVoa2V5LmNvbSJ9.vWqGp8YoOnL_INZNKNM6HJ79Kmuy1-eGPmCmmL8ZeFI'// Assuming you store the token in localStorage after login
        axios.get('https://www.ehkey.com/api/account', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(response => {
            setUserInfo(response.data);
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
      }, []);
      

    // Function to handle changes in user data
    const handleUserInfoChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Function to handle submitting updated user data
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('https://www.ehkey.com/api/account', userInfo) // Assuming your backend API endpoint for updating user data is /api/user
            .then(response => {
                console.log('User data updated successfully:', response.data);
            })
            .catch(error => {
                console.error('Error updating user data:', error);
            });
    };

    return (
        <div>
            <h2>Basic Account Information</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={userInfo.name} onChange={handleUserInfoChange} />

                <label>Email:</label>
                <input type="email" name="email" value={userInfo.email} onChange={handleUserInfoChange} />

                <label>Password:</label>
                <input type="password" name="password" value={userInfo.password} onChange={handleUserInfoChange} />

                <label>Country:</label>
                <input type="text" name="country" value={userInfo.country} onChange={handleUserInfoChange} />

                <label>Phone:</label>
                <input type="text" name="phone" value={userInfo.phone} onChange={handleUserInfoChange} />

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default BasicInfoPage;
