import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTruck, faBoxOpen, faStore } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheckDollar,faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import './section15Home.scss';
import { useInView } from 'react-intersection-observer';

export default function Section15Home() {
    const [isInView, setIsInView] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5 // Adjust as needed
    });

    useEffect(() => {
        if (inView) {
            setIsInView(true);
        }
    }, [inView]);

    return (
        <section ref={ref} className='section15 col-10'>
            <div className='filter col-12'>
                <div className='main15 col-10'>
                    <div className='s15card'>
                        <FontAwesomeIcon icon={faUsers} className='I15' />
                        <h3 className='H3'>
                            {isInView && <CountUp start={0} end={200000} duration={3} />}
                        </h3>
                        <span className='spano'>Ehkey Users</span>
                    </div>

                    <div className='s15card'>
                        <FontAwesomeIcon icon={faMoneyCheckDollar} className='I15' />

                        <h3 className='H3'>
                            {isInView && <CountUp start={0} end={847} duration={3} />}
                        </h3>
                        <span className='spano'>Sucess payment</span>
                    </div>

                    <div className='s15card'>
                        <FontAwesomeIcon icon={faCalendarCheck} className='I15' />

                        <h3 className='H3'>
                            {isInView && <CountUp start={0} end={225500} duration={3} />}
                        </h3>
                        <span className='spano'>Completed Session</span>
                    </div>

                    <div className='s15card'>
                        <FontAwesomeIcon icon={faStore} className='I15' />
                        <h3 className='H3'>
                            {isInView && <CountUp start={0} end={675} duration={3} />}
                        </h3>
                        <span className='spano'>Package </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
