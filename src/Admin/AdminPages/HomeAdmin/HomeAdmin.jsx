import React from 'react'
import "./HomeAdmin.scss"
import RoundedChart from '../../Charts/RoundedChart/RoundedChart'
import ColumnChart from '../../Charts/ColummChart/ColumnChart'
export default function HomeAdmin() {
    return (
        <div className='mainPage col-12'>
            <div className='TopMain col-12'>
                <div className='DashCard col-3'>
                    <div className='HeaderCard'>
                        <h4>Balance</h4>
                    </div>
                    <div className="ContentCard">
                        <p>500 EGP</p>

                    </div>
                    <div className='BottomCard'>
                        <p>Total Amount</p>
                    </div>
                </div>
                <div className='DashCard col-3'>
                    <div className='HeaderCard '>
                        <h4>Balance</h4>
                    </div>
                    <div className="ContentCard">
                        <p>500 EGP</p>

                    </div>
                    <div className='BottomCard'>
                        <p>Total Amount</p>
                    </div>
                </div>
                <div className='DashCard col-3'>
                    <div className='HeaderCard'>
                        <h4>Balance</h4>
                    </div>
                    <div className="ContentCard">
                        <p>500 EGP</p>

                    </div>
                    <div className='BottomCard'>
                        <p>Total Amount</p>
                    </div>
                </div>
            </div>
            <div className='MiddleMain col-12'>
                <ColumnChart />
                <RoundedChart />

            </div>


        </div>
    )
}
