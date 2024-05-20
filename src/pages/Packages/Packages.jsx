import React from 'react'
import "./Packages.scss"
import AppointmentBooking from '../../Compents/Booking/AppointmentBooking'

export default function Packages() {
  return (
    <section className='bookSession col-12 '>
 <h2 className='H2'>Book a session</h2>
      <div className=' col-10 mainL'>

    
     
        <AppointmentBooking />
      </div>
  

    </section>

  )
}
