import React, { useEffect, useState } from 'react';


import "./section2Home.scss";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import one from "../../assets/premium (1).png";
import Two from "../../assets/premium (2).png";
import three from "../../assets/premium (3).png";
import { faScrewdriverWrench, faHouseChimney, faTrowelBricks } from '@fortawesome/free-solid-svg-icons';

// Within your JSX component



export default function Section2Home() {
  useEffect(
    () => {
      AOS.init({ duration: 1000 });
    }, []);
    
  const [isClicked, setIsClicked] = useState(true);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  const handleClick = () => {
    if (isClicked == false) {
      setIsClicked(true)
      setIsClicked2(false);
      setIsClicked3(false);
    }
    else {
      setIsClicked(false)
    }
  };
  const handleClick2 = () => {
    if (isClicked2 == false) {
      setIsClicked2(true)
      setIsClicked(false);
      setIsClicked3(false);
    }
    else {
      setIsClicked2(false)
    }
  };
  const handleClick3 = () => {
    if (isClicked3 == false) {
      setIsClicked3(true)
      setIsClicked2(false);
      setIsClicked(false);
    }
    else {
      setIsClicked3(false)
    }
  };
  const containerClass = isClicked ? 'clicked' : 'bowMiddle';
  const containerClass2 = isClicked2 ? 'clicked' : 'bowMiddle';
  const containerClass3 = isClicked3 ? 'clicked' : 'bowMiddle';

  return (

    <section className="section2 col-12">
      {/* <div className="col-6 trackContier">
        <img src={delivery} className="col-1 IMgDElivery" />
        <p>Track a shipment </p>
      </div> */}


      <div className='col-5 Boxes' data-aos='fade-down'>
        <div className={`box   ${containerClass}`} onClick={handleClick} >

          <FontAwesomeIcon className='BoxIcon' icon={faScrewdriverWrench} />
          <span>Repair</span>
        </div>
        <div className={`box  ${containerClass2}`} onClick={handleClick2}   >
          <FontAwesomeIcon className='BoxIcon' icon={faHouseChimney} />

          <span>Improve</span>

        </div>
        <div className={`box  ${containerClass3}`} onClick={handleClick3} >

          <FontAwesomeIcon className='BoxIcon' icon={faTrowelBricks} />
          <span>Maintain</span>
        </div>
      </div>




      {isClicked && (

        // <div className="col-4 card" data-aos="fade-right" data-aos-duration='1500'>
        //   <img src={one} alt="" />
        //   <p>Golden Package</p>
        //   <span>We Provide One Session <br /> .</span>
        //   <button className='b11'>Add to Cart</button>
        // </div>
        <div></div>
      )}
      {isClicked2 && (
        // <>
        //   <div className="col-4 card" data-aos="fade-down" data-aos-duration='1500' >
        //     <img src={Two} alt="" />
        //     <p>Sliver Package</p>
        //     <span>We Provide Five Session Plus Two Seesion Free</span>
        //     <button className='b11'>Add to Cart</button>
        //   </div>

        // </>
        <div></div>
      )}
      {isClicked3 && (
        // <>
        //   <div className="col-4 card" data-aos='fade-left' data-aos-duration='1500'>
        //     <img src={three} />
        //     <p>perimum Package</p>
        //     <span>We Provide Five Session Plus Two Seesion Free</span>
        //     <button className='b11'>Add to Cart</button>
        //   </div>
        // </>
        <div></div>
      )}


    </section>
  );
}

