import React from 'react';
import "./Section1Home.scss";
import vid from "../../Videos/vid2.mp4";

export default function Section1Home() {
    return (
        <section id="section1" className="col-12">

            <div className="col-5 landing" >
                <h1 className='H1' data-aos='fade-up'>EHKAY...</h1>

                <p>Fast Shipping with quality service</p>


            </div>
            <div className='videoPkg col-5'>
                <video className="col-5 VideoLand" loop muted autoPlay>
                    <source src={vid} type="video/mp4" />
                </video>

            </div>



        </section>
    )
}
