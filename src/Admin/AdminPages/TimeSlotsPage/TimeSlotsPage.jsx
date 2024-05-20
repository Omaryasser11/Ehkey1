import React, { useState } from 'react';
import './TimeSlotPage.scss'; // Import SCSS file for styling

const TimeSlotPage = () => {
    // State to manage time slots
    const [timeSlots, setTimeSlots] = useState([
        {
            id: 1,
            date: '2024-05-10',
            time: '10:00 AM',
            available: true
        },
        {
            id: 2,
            date: '2024-05-10',
            time: '11:00 AM',
            available: false
        },
        {
            id: 3,
            date: '2024-05-10',
            time: '12:00 PM',
            available: true
        }
    ]);

    // State to manage form inputs
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        available: true
    });

    // Function to handle form input change
    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission (adding new time slot)
    const handleSubmit = e => {
        e.preventDefault();
        const newTimeSlot = {
            id: timeSlots.length + 1, // Generate unique ID
            ...formData
        };
        setTimeSlots([...timeSlots, newTimeSlot]);
        setFormData({
            date: '',
            time: '',
            available: true
        });
    };

    // Function to handle time slot removal
    const handleRemoveTimeSlot = id => {
        const updatedTimeSlots = timeSlots.filter(slot => slot.id !== id);
        setTimeSlots(updatedTimeSlots);
    };

    return (
        <div className="time-slot-page mainPage col-12">
            <h1>Time Slot Management</h1>
            <div className="time-slot-form">
                <h2>Add New Time Slot</h2>
                <form onSubmit={handleSubmit}>
                    <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
                    <input type="time" name="time" value={formData.time} onChange={handleInputChange} required />
                    <label>
                        Available:
                        <input type="checkbox" name="available" checked={formData.available} onChange={handleInputChange} />
                    </label>
                    <button type="submit">Add Time Slot</button>
                </form>
            </div>
            <div className="time-slot-list">
                {timeSlots.map(slot => (
                    <div className="time-slot" key={slot.id}>
                        <p>Date: {slot.date}</p>
                        <p>Time: {slot.time}</p>
                        <p>Available: {slot.available ? 'Yes' : 'No'}</p>
                        <div className="slot-actions">
                            <button onClick={() => handleRemoveTimeSlot(slot.id)}>Remove</button>
                            {/* Add update functionality here */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeSlotPage;
