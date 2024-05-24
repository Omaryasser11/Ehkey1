import React, { useEffect } from 'react';
import "./section6Home.scss";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield,faHandsHoldingCircle ,faPersonHarassing,faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';
function Section6Home() { // Changed function name to start with uppercase
    useEffect(() => {
        AOS.init({ 
     // Change offset to trigger animations sooner or later (px)
     duration:"1500",
     easing: 'ease-in-out', // Easing for animation
        });

    }, []);

    return (
        <section className='col-12 section9' >
            <div className='col-10 title'>
                <div className='line col-4'></div>
                <h1 className='col-4'>Try Us And See How Good <br />
                    Our Services Are.</h1>
                <div className='line col-4'></div>
            </div>
            <div className='col-10 main '>
                <div className='col-9 rtrt'>
                    <div className='card col-3 'data-aos='fade-down' data-aos-delay="350">

                    <FontAwesomeIcon className='icon' icon={faUserShield} />
                        <p>Swift Delivery</p>
                        <span>Efficient, Speedy, Punctual :<br />  Swift Delivery at Your Service!</span>
                    </div>

                    <div className='card col-3'data-aos='fade-down' data-aos-delay="700">

                    <FontAwesomeIcon  className='icon' icon={faHandsHoldingCircle} />
                        <p>Trusted Service</p>
                        <span>
                            Reliable service you can trust,, <br /> always delivering with care.</span>
                    </div>


                    <div className='card col-3'data-aos='fade-down' data-aos-delay="1050" >

                    <FontAwesomeIcon className='icon' icon={faPersonHarassing} />
                        <p>Vaccinated Courier</p>
                        <span>Safe and Swift: Your Vaccinated <br /> Courier for Secure Deliveries.</span>
                    </div>


                    <div className='card col-3'data-aos='fade-down' data-aos-delay="1400" >

                    <FontAwesomeIcon className='icon' icon={faHandHoldingMedical} />  
                        <p>Safety Protocol</p>
                        <span>Strict Safety:Our COVID-19 <br />Protocol Ensures Secure.</span>
                    </div>



                </div>
            </div>

        </section>
    )
}

export default Section6Home; // Changed export name to match function name
