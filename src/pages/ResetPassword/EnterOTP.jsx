import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { emailState } from '../../store/index';  // Path to your Recoil atoms file
import Swal from 'sweetalert2'
export default function EnterOTP() {
    const navigate = useNavigate();
    const email = useRecoilValue(emailState);
    const [formData, setFormData] = useState({
        email: email,
        otp: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData.email);
        console.log(formData.otp);
        console.log(formData.password);
        try {
            const response = await axios.post('https://www.ehkey.com/api/account/reset-password', {
                email: formData.email,
                password: formData.password,
                otp: formData.otp
            });

            // Assuming the backend returns some form of authentication token upon successful login
            const authToken = response.data.token;

            // Store authToken in local storage or session storage for subsequent requests
            localStorage.setItem('authToken', authToken);

            // Set loggedIn to true
            // This can be managed in your global state management solution or component state
            // For example, if using React state:
            // setLoggedIn(true);

            // Set username state
            // setUsername(response.data.username);

            console.log('Password Changed successfully!');
            Swal.fire({
                title: `Good job `,
                text: "Password Changed successfully!",
                icon: "success"
            });
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error,

            });
            // Handle error, show an error message to the user
        }
    };

    return (
        <div className='BIg col-12'>
            <h1>Enter Verification Code</h1>
            <p>OTP sent on {formData.email}</p>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="otp"
                    placeholder="OTP"
                    value={formData.otp}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <button type="submit">Enter</button>
            </form>
        </div>
    );
}
