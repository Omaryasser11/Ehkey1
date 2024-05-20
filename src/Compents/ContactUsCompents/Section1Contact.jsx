import React from 'react'
import "./Section1Contact.scss"
export default function Section1Contact() {
    return (
        <section className='col-12 section1Contact '>
            <div className="container">
                <div className="row">
                    <h1 className='H1'>Contact us</h1>
                </div>
                <div className="row">
                    <h4 className='H4' style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
                </div>
                <div className="row">
                    <div className='col-6 left'>
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <input type="text" required />
                                <label>Name</label>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="styled-input">
                                <input type="text" required />
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="styled-input" style={{ float: 'right' }}>
                                <input type="text" required />
                                <label>Phone Number</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 left'>
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <textarea required></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="col-xs-12 btn-C">
                    <div className="btn-lrg submit-btn col-2">Send Message</div>
                </div>
            </div>
        </section>
    )
}
