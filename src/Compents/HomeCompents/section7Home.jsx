import React from 'react'
import "./section7Home.scss"
import { Link } from 'react-router-dom'
import Home3 from "../../assets/H66.png"

export default function section7Home() {
    return (
        <section className='section7 col-12'>
            <div className='Main34 col-10'>
                <div className='col-6 Left2'>
                    <div className='Img'></div>

                </div>
                <div className='col-6 right1'>
                    <h1 className='hh'>Provide Better Life</h1>
                    <p className='pp'>Join over 4,700,000 people who decided to get help and get happy with BetterHelp.</p>
                    <Link className='btn' to="AboutUs">Start Now</Link>

                </div>
            </div>
        </section>
    )
}
