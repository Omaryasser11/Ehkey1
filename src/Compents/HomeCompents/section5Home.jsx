import React, { useEffect } from 'react';
import "./section5Home.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Rename the function to start with an uppercase letter
function Section12Home() {
    useEffect(() => {
        AOS.init({
            duration: "1500",
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <section className='col-12 section12'>
            <div className='col-6 BigOver1' data-aos='flip-left'>
                <div className='leftBIG'></div>
                <div className='rightBIG'>
                    <h5>"Secure, tailored packaging ensuring safe delivery for valuable cargo."</h5>
                </div>
            </div>
            <div className='col-6 BigOver2' data-aos='flip-right'>
          
                <div className='rightBIG2'>
                    <h5>"Reliable 24/7 delivery and attentive care for your shipments."</h5>
                </div>
                <div className='leftBIG2'></div>
            </div>
        </section>
    );
}

export default Section12Home;
