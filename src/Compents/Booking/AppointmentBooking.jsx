import React, { useState } from 'react';
import './AppointmentBooking.scss';

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableAppointments, setAvailableAppointments] = useState([]);

  ///////////////Date
  // Get the current date
  const today = new Date();

  // Get day, month, and year
  let dd = today.getDate();
  let mm = today.getMonth() + 1; // January is 0!
  const yyyy = today.getFullYear();

  // Add leading zero to day if needed
  if (dd < 10) {
    dd = '0' + dd;
  }

  // Add leading zero to month if needed
  if (mm < 10) {
    mm = '0' + mm;
  }

  // Format the date as yyyy-mm-dd
  const formattedDate = `${yyyy}-${mm}-${dd}`;

  ////////////////////////////////////////////////////
  // Function to handle selecting a date
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    // Here you would typically fetch available appointments for the selected date
    // and update the availableAppointments state accordingly
    // For simplicity, I'll just set some dummy data here
    setAvailableAppointments([
      { time: '09:00 AM', id: 1 },
      { time: '10:00 AM', id: 2 },
      { time: '11:00 AM', id: 3 },
    ]);
    setSelectedTime(''); // Clear selected time when date changes
  };

  // Function to handle selecting a time
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <>
      <div className='maino flex col-9'>
        <div className="appointment-booking col-12 ">

          <div className="date-picker flex col-9">
            <label htmlFor="date" className='col-3'>Select Date</label>
            <input className='col-7' type="date" id="date" min={formattedDate} value={selectedDate} onChange={handleDateChange} />
          </div>
        </div>

        <div className="appointment-booking-M ">
          <div className="time-slots col-9">
            <label>Available Time Slots:</label>

            <ul>
              {availableAppointments.map(appointment => (
                <li
                  id='LI'
                  key={appointment.id}
                  onClick={() => handleTimeChange(appointment.time)}
                  className={selectedTime === appointment.time ? 'selected' : ''}
                >
                  {appointment.time}
                </li>
              ))}
            </ul>
          </div>

        </div>
        {selectedTime && (

          <div className='appointment-booking-L ' >
            <p className='P col-12 flex'>You have selected the following appointment:</p>
            <p className='p'>Date: {selectedDate}</p>
            <p className='p'>Time: {selectedTime}</p>
            {/* Add a button here to confirm the appointment */}
            <div className='col-12 flex'>
              <button className='Add col-3'>Confirm</button>
            </div>
          </div>
        )}
      </div>


    </>);
};

export default AppointmentBooking;
