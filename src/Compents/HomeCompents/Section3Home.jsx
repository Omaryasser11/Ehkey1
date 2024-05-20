import React from 'react'
import "./Section3Home.scss"

import Home3 from "../../assets/home3.png"
export default function Section3Home() {
    return (
        <section className='section3 col-12'>
            <div className='Main3 col-10'>
                <div className='col-6 Left'>
                    <h1 className='hh'>Provide Better Life</h1>
                    <p className='pp'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquid ipsa sunt doloribus eum officiis ullam alias,
                        quae elige
                        recusandae!</p>
                    <button className='btn'>Read More</button>
                </div>
                <div className='col-6 Right'>
                    <img src={Home3} alt="" />

                </div>
            </div>
        </section>
    )
}
