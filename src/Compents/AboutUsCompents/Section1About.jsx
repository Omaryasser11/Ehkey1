import React from 'react';
import "./Section1About.scss";
import A1 from "../../assets/A1.jpg"
export default function Section1About() {
  return (
    <section className='col-12 About1'>
      <div className='col-10 A1'>
        <div className='col-6 ImgCtr'></div>
        <div className='col-6 PrCtr'>
          <h1 className='H1'>About Us</h1>
          <p>Lorem ip
            sum dolor sit, amet consectetur adipisicing elit.
            olor pariatur quibusdam suscipit harum, excepturi odit
            animi itaque at accusantium! Deleniti, molestias veniam.
            Amet sequi odio sapiente, debitis officia doloremque totam.</p>
          <button className='btn'>Read more</button>
        </div>
      </div>
    </section>
  )
}
