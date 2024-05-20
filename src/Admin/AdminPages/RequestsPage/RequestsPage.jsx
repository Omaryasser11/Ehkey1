import React, { useState, useEffect } from 'react';
import './RequestsPage.scss'; // Import SCSS file for styling

const RequestsPage = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        // Fetch requests from the backend when the component mounts
        fetchRequests();
    }, []);

    const fetchRequests = () => {
        // Simulated requests data
        const dummyRequests = [
            {
                id: 1,
                userName: 'John Doe',
                email: 'john@example.com',
                status: 'Pending'
            },
            {
                id: 2,
                userName: 'Jane Smith',
                email: 'jane@example.com',
                status: 'Pending'
            },
            {
                id: 3,
                userName: 'Alice Johnson',
                email: 'alice@example.com',
                status: 'Pending'
            }
        ];

        setRequests(dummyRequests);
    };

    const handleApprove = id => {
        // Logic to approve user with given ID
        console.log(`User with ID ${id} approved`);
    };

    return (
        <div className="requests-page mainPage col-12">
            <h1>Requests</h1>
            <table className="requests-table">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map(request => (
                        <tr key={request.id}>
                            <td>{request.userName}</td>
                            <td>{request.email}</td>
                            <td>{request.status}</td>
                            <td>
                                {request.status === 'Pending' && (
                                    <button onClick={() => handleApprove(request.id)}>Approve</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RequestsPage;
