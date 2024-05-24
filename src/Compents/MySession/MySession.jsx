import React, { useState } from 'react';
import AppointmentBooking from '../Booking/AppointmentBooking';
const dummyTransactions = [
    {
        id: 13,
        startDateTime: '2024-06-01T21:00:00Z',
        endDateTime: '2024-06-01T21:30:00Z',
        status: 'Scheduled'
    },
    {
        id: 14,
        startDateTime: '2024-06-01T21:00:00Z',
        endDateTime: '2024-06-01T21:30:00Z',
        status: 'completed'
    },
    {
        id: 15,
        startDateTime: '2024-06-01T21:00:00Z',
        endDateTime: '2024-06-01T21:30:00Z',
        status: 'Scheduled'
    }
];
const MySession = () => {
    const [showOrders, setShowOrders] = useState(false);

    const toggleShowOrders = () => {
        setShowOrders(!showOrders);
    };

    const renderContent = () => {
        if (showOrders) {
            return <AppointmentBooking onClose={toggleShowOrders} />;
        } else {
            return (
                <div className="my-session mainPage col-12">
                    <h1>My Session</h1>
                    <table className="transaction-table">
                        <thead>
                            <tr>
                                <th>Session ID</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Status</th>
                                <th>Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyTransactions.map(transaction => (
                                <tr key={transaction.id}>
                                    <td>{transaction.id}</td>
                                    <td>{new Date(transaction.startDateTime).toLocaleString()}</td>
                                    <td>{new Date(transaction.endDateTime).toLocaleString()}</td>
                                    <td>{transaction.status}</td>
                                    <td>
                                        {transaction.status == 'Scheduled' && (
                                            <button onClick={toggleShowOrders}>Change Time</button>
                                        )
                                        }
                                        {
                                            transaction.status != 'Scheduled' && (
                                                <p>Change Not Vaild </p>
                                            )

                                        }
                                   

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
    };

    return renderContent();
};

export default MySession;
