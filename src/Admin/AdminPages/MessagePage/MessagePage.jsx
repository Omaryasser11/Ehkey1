import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import './MessagePage.scss'; // Import the SCSS file



const MessagePage = () => {
    const [contactRequests, setContactRequests] = useState([]);

    useEffect(() => {
        // Fetch contact requests from the backend when the component mounts
        fetchContactRequests();
    }, []);

    const fetchContactRequests = async () => {
        try {
            // Make a GET request to fetch contact requests
            // const response = await axios.get('/api/contact-requests'); // Adjust URL as per your backend
            setContactRequests(dummyData); // Assuming the response contains an array of contact requests
        } catch (error) {
            console.error('Error fetching contact requests:', error);
        }
    };
    const dummyData = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ];

    return (
        <div className="message-page mainPage col-12">
            <h1>Contact Requests</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {contactRequests.map(request => (
                        <tr key={request.id}>
                            <td>{request.name}</td>
                            <td>{request.email}</td>
                            <td>{request.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MessagePage;
