import React from 'react'
import "./Section3Home.scss"
import { Link } from 'react-router-dom'
// import Home3 from "../../assets/home3.png"
export default function Section3Home() {
    return (
        <section className='section3 col-12'>
            <div className='Main3 col-10'>
                <div className='col-6 Left'>
                    <h1 className='hh'>Provide Better Life</h1>
                    <p className='pp'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquid ipsa sunt doloribus eum officiis ullam alias,
                        quae elige
                        recusandae!</p>
                    <Link className='btn' to="AboutUs">Read More</Link>
                </div>
                <div className='col-6 Right'>
                    <div className='Img'></div>

                </div>
            </div>
        </section>
    )
}
