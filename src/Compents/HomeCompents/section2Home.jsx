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
import H1 from "../../assets/H1 (1).png"
import H2 from "../../assets/H1 (2).png"
import H3 from "../../assets/H1 (3).png"
import C1 from "../../assets/E1 (2).jpg"
import C2 from "../../assets/E1 (1).jpg"
import C3 from "../../assets/E1 (3).jpg"
import Section15Home from './section15Home';
// Within your JSX component



export default function Section2Home() {
  useEffect(
    () => {
      AOS.init({ duration: 1000 });
    }, []);

  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(true);
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

          <img src={H2} className='BoxIcon' alt="" />

          <span>Convenient</span>
        </div>
        <div className={`box  ${containerClass2}`} onClick={handleClick2}   >
          <img src={H1} className='BoxIcon' alt="" />

          <span>
            Effective
          </span>

        </div>
        <div className={`box  ${containerClass3}`} onClick={handleClick3} >

          <img src={H3} className='BoxIcon' alt="" />
          <span>Professional</span>
        </div>
      </div>




      {isClicked && (

        <div className='col-10 Divi'>
          <div className='IMGEO col-6' > <img src={C1} alt="" /></div>
          <div className='Texto'>  <h3 className='titlo'>It’s
            Convenient.</h3>
            <p className='contento'>Do it at your own time and at your own pace. Communicate with your therapist as often as you want and whenever you feel it's needed.</p></div>
        </div>
      )}
      {isClicked2 && (
     <Section15Home />
      
      )}
      {isClicked3 && (
     <div className='Divi col-10'>
     <div className='IMGEO col-6' > <img src={C3} alt="" /></div>
     <div className='Texto'>
       <h3 className='titlo'>It’s
         Effective.</h3>
       <p className='contento'>Thousands of people have benefited from therapy (just check out their reviews!) With BetterHelp, you can switch therapists at any point if you don't feel you are getting enough benefit.

         Join over 4,700,000 people who decided to get help and get happy with BetterHelp.
         Get Started
       </p>
     </div>
   </div>

      )}


    </section>
  );
}

