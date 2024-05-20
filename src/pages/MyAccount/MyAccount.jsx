import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import axios from 'axios';
import "./MyAccount.scss";

export default function MyAccount() {
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        country: '',
        role: '',
        status: '',
        totalSessions: '',
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            // Replace with your API call
            const userData = {
                id: 5,
                name: 'Omar Yasser',
                email: 'omaryassertaha1@gmail.com',
                firstName: 'Omar',
                lastName: 'Yasser',
                phone: '01012237282',
                country: 'Egypt',
                role: 'Client',
                status: 'Active',
                totalSessions: 10,
            };
            setUser(userData);
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('authToken'); // Get token from local storage
            if (!token) {
                console.error('Token not found');
                return;
            }

            const requestBody = {
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                country: user.country,
            };

            console.log('Request Body:', requestBody); // Log the request body to verify its contents

            const response = await axios.put(
                'https://www.ehkey.com/api/account',
                requestBody,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                const updatedUserData = response.data; // Get response data
                setUser(updatedUserData);
                setIsEditing(false);
            } else {
                console.error('Failed to save user data:', response.statusText);
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.error('Bad Request:', error.response.data);
            } else {
                console.error('Error saving user data:', error.message);
            }
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const [isClicked, setIsClicked] = useState(true);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);

    const handleClick = () => {
        if (!isClicked) {
            setIsClicked(true);
            setIsClicked2(false);
            setIsClicked3(false);
        } else {
            setIsClicked(false);
        }
    };

    const handleClick2 = () => {
        if (!isClicked2) {
            setIsClicked2(true);
            setIsClicked(false);
            setIsClicked3(false);
        } else {
            setIsClicked2(false);
        }
    };

    const handleClick3 = () => {
        if (!isClicked3) {
            setIsClicked3(true);
            setIsClicked2(false);
            setIsClicked(false);
        } else {
            setIsClicked3(false);
        }
    };

    const containerClass = isClicked ? 'clicked' : 'Mbtn';
    const containerClass2 = isClicked2 ? 'clicked' : 'Mbtn';
    const containerClass3 = isClicked3 ? 'clicked3' : 'MbtnR';

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate("/");
    };

    return (
        <>
            <div className='MyAccount col-12 flex'>
                <h2 className='col-10'>MyAccount</h2>
                <div className="col-10 MainInfo3">
                    <div className='col-3 Lefto'>
                        <button onClick={handleClick} className={`Information ${containerClass} col-9`}> My Information</button>
                        <button onClick={handleClick2} className={`Information ${containerClass2} col-9`}> Payment Info</button>
                        <button onClick={handleClick3} className={`Information ${containerClass3} col-9`}>Remove My Account</button>
                    </div>
                    <div className='col-8 mainAcc'>
                        {isClicked && (
                            <div className="user-profile col-12">
                                <table className='col-10'>
                                    <tbody>
                                        <tr>
                                            <td>ID:</td>
                                            <td>{user.id}</td>
                                        </tr>
                          
                                        <tr>
                                            <td>Email:</td>
                                            <td>{user.email}</td>
                                        </tr>
                                        <tr>
                                            <td>First Name:</td>
                                            <td>
                                                {isEditing ? (
                                                    <input
                                                        type="text"
                                                        name="firstName"
                                                        value={user.firstName}
                                                        onChange={handleChange}
                                                    />
                                                ) : (
                                                    <span>{user.firstName}</span>
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Last Name:</td>
                                            <td>
                                                {isEditing ? (
                                                    <input
                                                        type="text"
                                                        name="lastName"
                                                        value={user.lastName}
                                                        onChange={handleChange}
                                                    />
                                                ) : (
                                                    <span>{user.lastName}</span>
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Phone:</td>
                                            <td>
                                                {isEditing ? (
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        value={user.phone}
                                                        onChange={handleChange}
                                                    />
                                                ) : (
                                                    <span>{user.phone}</span>
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Country:</td>
                                            <td>
                                                {isEditing ? (
                                                    <input
                                                        type="text"
                                                        name="country"
                                                        value={user.country}
                                                        onChange={handleChange}
                                                    />
                                                ) : (
                                                    <span>{user.country}</span>
                                                )}
                                            </td>
                                        </tr>
                          
                               
                                        <tr>
                                            <td>Total Sessions:</td>
                                            <td>{user.totalSessions}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                {isEditing ? (
                                    <div className='col-10 flex'>
                                        <button onClick={handleSave}>Save</button>
                                    </div>
                                ) : (
                                    <div className='col-10 flex'>
                                        <button onClick={handleEdit}>Edit</button>
                                    </div>
                                )}
                            </div>
                        )}
                        {isClicked2 && <p>Credit Info</p>}
                        {isClicked3 && <p>Delete my Account</p>}
                    </div>
                </div>
                <div>Welcome {auth.user}</div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    );
}
