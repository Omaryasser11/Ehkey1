import React, { useState, useEffect } from 'react';
import './ReservationsPage.scss'; // Import SCSS file for styling

const ReservationsPage = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        // Fetch reservations from the backend when the component mounts
        fetchReservations();
    }, []);

    const fetchReservations = () => {
        // Simulated reservations data
        const dummyReservations = [
            {
                id: 1,
                userName: 'John Doe',
                email: 'john@example.com',
                reservedTime: new Date('2024-05-05T10:00:00') // Example reservation time
            },
            {
                id: 2,
                userName: 'Jane Smith',
                email: 'jane@example.com',
                reservedTime: new Date('2024-05-05T11:00:00') // Example reservation time
            },
            {
                id: 3,
                userName: 'Alice Johnson',
                email: 'alice@example.com',
                reservedTime: new Date('2024-05-05T12:00:00') // Example reservation time
            }
        ];

        setReservations(dummyReservations);
    };

    return (
        <div className="reservations-page mainPage">
            <h1>Reservations</h1>
            <table className="reservation-table">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Reserved Time</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map(reservation => (
                        <tr key={reservation.id}>
                            <td>{reservation.userName}</td>
                            <td>{reservation.email}</td>
                            <td>{reservation.reservedTime.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReservationsPage;
