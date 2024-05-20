import React, { useState } from 'react';
import "./Navcol.scss"
import Icon from "../../assets/icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo, faPersonCircleCheck, faCalendarPlus, faBookmark, faUserTie, faFile, faMagnifyingGlassChart, faInbox, faUsers, faMoneyBillTransfer, faHandPointUp, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

export default function Navcol() {

    const [isMini, setIsMini] = useState(false);
    const [original, setOriginal] = useState(true); // State to track if dropdown is in original state

    const toggleMiniStyle = () => {
        // Set original to false when mini style is activated
        setIsMini(false);
        setOriginal(true);
    };

    const resetDropdown = () => {

        setIsMini(true);
        setOriginal(false); // Reset dropdown to original state
    };

    return (
        <>
            {isMini && (
                <div id="NavBar" className={isMini ? 'mini' : ''}>


                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <h1>Eh</h1>
                        </div>
                    </a>


                    <hr class="sidebar-divider my-0" />
                    <ul className='companentUl'>
                        <span class="sidebar-heading">
                            Dashboard
                        </span>

                        <Link class="nav-item-mini" to="/Admin">

                            <FontAwesomeIcon className='FontAwsame-mini' icon={faGaugeHigh} />

                        </Link>

                        <Link class="nav-item-mini" to="/Admin">

                            <FontAwesomeIcon className='FontAwsame-mini' icon={faInbox} />

                        </Link>
                        <Link class="nav-item-mini" to="/Admin">

                            <FontAwesomeIcon className='FontAwsame-mini' icon={faMoneyBillTransfer} />

                        </Link>
                        <Link class="nav-item-mini" to="/Admin">

                            <FontAwesomeIcon className='FontAwsame-mini' icon={faBookmark} />

                        </Link>
                        <Link class="nav-item-mini" to="/Admin">

                            <FontAwesomeIcon className='FontAwsame-mini' icon={faHandPointUp} />

                        </Link>
                    </ul>

                    <hr class="sidebar-divider" />

                    <ul className='companentUl'>
                        <span class="sidebar-heading">
                            Add
                        </span>

                        <Link class="nav-item-mini" to="/Admin/H1">
                            <FontAwesomeIcon className='FontAwsame-mini' icon={faCircleInfo} />
                        </Link>

                        <Link class="nav-item-mini" to="/Admin/H2">

                            <FontAwesomeIcon className='FontAwsame-mini' icon={faCalendarPlus} />
                        </Link>

                        <Link class="nav-item-mini" to="/Admin/H2">

                            <FontAwesomeIcon className='FontAwsame-mini' icon={faPersonCircleCheck} />
                        </Link>


                    </ul>




                    <hr class="sidebar-divider" />
                    <ul className='companentUl'>


                        <span class="sidebar-heading">
                            Create Account
                        </span>
                        <Link class="nav-item-mini" to="/Admin/H1">
                            <FontAwesomeIcon className='FontAwsame-mini' icon={faUserTie} />
                        </Link>
                        <Link class="nav-item-mini" to="/Admin/H1">
                            <FontAwesomeIcon className='FontAwsame-mini' icon={faUserTie} />
                        </Link>

                        <Link class="nav-item-mini" to="/Admin/H1">
                            <FontAwesomeIcon className='FontAwsame-mini' icon={faUserPlus} />
                        </Link>



                    </ul>


                    <hr class="sidebar-divider" />
                    <ul className='companentUl'>


                        <span class="sidebar-heading">
                            List
                        </span>
                        <Link class="nav-item-mini" to="/Admin/H1">
                            <FontAwesomeIcon className='FontAwsame-mini' icon={faUsers} />
                        </Link>
                        <Link class="nav-item-mini" to="/Admin/H1">
                            <FontAwesomeIcon className='FontAwsame-mini' icon={faUsers} />
                        </Link>

                        <Link class="nav-item-mini" to="/Admin/H1">
                            <FontAwesomeIcon className='FontAwsame-mini' icon={faUsers} />
                        </Link>



                    </ul>

                    <hr class="sidebar-divider d-none d-md-block" />


                    <div class="text-center d-none d-md-inline">
                        <button class="btn-mini" onClick={toggleMiniStyle}>Drob</button>
                    </div>



                </div>
            )}



            {!isMini && original &&
                (
                    <div id="NavBar" className={isMini ? 'mini' : ''}>


                        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                            <div class="sidebar-brand-icon rotate-n-15">
                                <img className='NavIcon' src={Icon} />
                            </div>
                        </a>

                        <hr class="sidebar-divider my-0" />

                        <ul className='companentUl'>
                            <span class="sidebar-heading">
                                Dashboard
                            </span>

                            <Link class="nav-item" to="/Admin">

                                <FontAwesomeIcon className='FontAwsame' icon={faGaugeHigh} />
                                <span>Dashboard</span>
                            </Link>
                            <Link class="nav-item" to="/SA/Message">

                                <FontAwesomeIcon className='FontAwsame' icon={faInbox} />

                                <span>Messages</span>
                                <span className='Counter'>7</span>


                            </Link>

                            <Link class="nav-item" to="/SA/Transaction">

                                <FontAwesomeIcon className='FontAwsame' icon={faMoneyBillTransfer} />
                                <span>Transactions</span>
                            </Link>
                            <Link class="nav-item" to="/SA/Reservations">

                                <FontAwesomeIcon className='FontAwsame' icon={faBookmark} />
                                <span>Reservations</span>
                            </Link>

                            <Link class="nav-item" to="/SA/Requests">

                                <FontAwesomeIcon className='FontAwsame' icon={faHandPointUp} />
                                <span>requests</span>
                                <span className='Counter'>7</span>
                            </Link>
                        </ul>

                        <hr class="sidebar-divider" />

                        <ul className='companentUl'>


                            <span class="sidebar-heading">
                                Add
                            </span>

                            <Link class="nav-item" to="/SA/PakageDetails">

                                <FontAwesomeIcon className='FontAwsame' icon={faCircleInfo} />
                                <span>package Details</span>
                            </Link>

                            <Link class="nav-item" to="/SA/Slots">

                                <FontAwesomeIcon className='FontAwsame' icon={faCalendarPlus} />

                                <span>Time Slots</span>
                            </Link>


                            <Link class="nav-item" to="/SA/UserVerified">

                                <FontAwesomeIcon className='FontAwsame' icon={faPersonCircleCheck} />
                                <span>Users Verified</span>
                            </Link>

                        </ul>

                        <hr class="sidebar-divider" />

                        <ul className='companentUl'>
                            <span class="sidebar-heading">
                                Create Accounts
                            </span>
                            <Link class="nav-item" to="/Admin/H1">

                                <FontAwesomeIcon className='FontAwsame' icon={faUserTie} />
                                <span>Operation </span>
                            </Link>
                            <Link class="nav-item" to="/Admin/H1">


                                <FontAwesomeIcon className='FontAwsame' icon={faUserTie} />
                                <span>Fienece </span>
                            </Link>


                            <Link class="nav-item" to="/Admin/H1">

                                <FontAwesomeIcon className='FontAwsame' icon={faUserPlus} />
                                <span>User</span>
                            </Link>



                        </ul>

                        <hr class="sidebar-divider" />

                        <ul className='companentUl'>
                            <span class="sidebar-heading">
                                List
                            </span>
                            <Link class="nav-item" to="/SA/UsersPage">

                                <FontAwesomeIcon className='FontAwsame' icon={faUsers} />
                                <span>Users List</span>
                            </Link>
                            <Link class="nav-item" to="/Admin">

                                <FontAwesomeIcon className='FontAwsame' icon={faUsers} />
                                <span>Fienece List</span>
                            </Link>
                            <Link class="nav-item" to="/Admin">

                                <FontAwesomeIcon className='FontAwsame' icon={faUsers} />
                                <span>Opreation List</span>
                            </Link>




                        </ul>

                        <hr class="sidebar-divider d-none d-md-block" />

                        <div class="text-center d-none d-md-inline">
                            <button class="Btn_Nav" onClick={resetDropdown}>Drop</button>
                        </div>



                    </div>
                )}
        </>
    )
}

