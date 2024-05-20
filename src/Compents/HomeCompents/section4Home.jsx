import React, { useEffect } from 'react';
import "./section4Home.scss";
import one from "../../assets/premium (1).png";
import Two from "../../assets/premium (2).png";
import three from "../../assets/premium (3).png";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section10Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="col-12 section10">
            <div className="col-12 main2">
                <div className="col-10 one">
                    <h1 data-aos='fade-left'>Our Services</h1>
                    <p className="col-12 p1" data-aos="fade-right">
                        "Empowering growth, creating solutions, exceeding expectations."

                    </p>
                </div>
                <div className="col-9 two">
                    <div className="col-4 card" data-aos="fade-right" data-aos-duration='1500'>
                        <img src={one} alt="" />
                        <p>Golden Package</p>
                        <span>We Provide One Session <br /> .</span>
                        <button className='btn'>Add to Cart</button>
                    </div>
                    <div className="col-4 card" data-aos="fade-down" data-aos-duration='1500' >
                        <img src={Two} alt="" />
                        <p>Sliver Package</p>
                        <span>We Provide Five Session Plus Two Seesion Free</span>
                        <button className='btn'>Add to Cart</button>
                    </div>
                    <div className="col-4 card" data-aos='fade-left' data-aos-duration='1500'>
                        <img src={three} alt="" />
                        <p>perimum Package</p>
                        <span>We Provide Five Session Plus Two Seesion Free</span>
                        <button className='btn'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section10Home;
