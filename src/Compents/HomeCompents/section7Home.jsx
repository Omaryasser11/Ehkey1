import React from 'react'
import "./section7Home.scss"
import { Link } from 'react-router-dom'
import Home3 from "../../assets/H66.png"

export default function section7Home() {
    return (
        <section className='section7 col-12'>
            <div className='Main34 col-10'>
                <div className='col-6 Left2'>
                    <img src={Home3} alt="" />

                </div>
                <div className='col-6 right1'>
                    <h1 className='hh'>Provide Better Life</h1>
                    <p className='pp'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquid ipsa sunt doloribus eum officiis ullam alias,
                        quae elige
                        recusandae!</p>
                        <Link className='btn' to="AboutUs">Read More</Link>

                </div>
            </div>
        </section>
    )
}
