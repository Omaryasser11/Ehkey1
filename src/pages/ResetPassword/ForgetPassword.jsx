import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { emailState } from '../../store/index'; // Path to your Recoil atoms file
import { Link, useNavigate } from 'react-router-dom';
import "./ForgetPassword.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'

const ForgotPasswordForm = () => {
    console.log(emailState)
    const [email, setEmail] = useRecoilState(emailState);

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const navigate = useNavigate();
 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://www.ehkey.com/api/account/send-email-reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                // Handle success, maybe show a success message to the user
                console.log('Password reset email sent successfully');
                console.log(email);
                Swal.fire({
                    title: `Good job `,
                    text: "Password reset email sent successfully!",
                    icon: "success"
                });
                navigate('/EnterOTP');
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to send password reset email!",

                });
                // Handle error, maybe show an error message to the user
                console.error('Failed to send password reset email');
            }
        } catch (error) {
            console.error('Error occurred while sending password reset request:', error);
        }
    };

    return (

        <div className="containerForm col-12">


            <div className="text-center col-12">


                <FontAwesomeIcon className='icon' icon={faLock} />
                <h2 className="text-center">Forgot Password?</h2>
                <p className='pr'>You can reset your password here.</p>
                <div className="panel-body col-12">
                    <form id="register-form" role="form" autoComplete="off" className="formo col-6" onSubmit={handleSubmit}>
                        <div className="form-group col-12">
                            <div className='backInput col-12'>

                                <TextField id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    name="email"
                                    className=" col-12"
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />

                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn col-12" onClick={handleSubmit}>
                                Reset Password
                            </button>
                            {/* <input name="recover-submit" className="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit" /> */}
                        </div>

                    </form>
                </div>
            </div>

        </div>

    );
};

export default ForgotPasswordForm;
