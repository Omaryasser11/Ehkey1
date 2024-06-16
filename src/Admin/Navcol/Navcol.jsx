import React, { useState, useEffect } from 'react';
import "./Navcol.scss";
import Icon from "../../assets/icon.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from "sweetalert2";
import {
    faGaugeHigh, faCircleInfo, faPersonCircleCheck, faCalendarPlus,
    faBookmark, faUserPlus, faUsers, faMoneyBillTransfer, faHandPointUp, faInbox, faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navcol() {
    const [userRole, setUserRole] = useState(''); // Default role or state
    const [menuItems, setMenuItems] = useState([]); // State to hold menu items based on role

    useEffect(() => {
        // Retrieve user role from local storage
        const role = localStorage.getItem('role');
        setUserRole(role); // Set user role from local storage or default to 'admin'
    }, []);

    useEffect(() => {
        // Define menu items based on user role
        switch (userRole) {
            case 'SuperAdmin':
                setMenuItems([
                    { icon: faGaugeHigh, label: 'Dashboard', to: '/SA' },
                    { icon: faInbox, label: 'Messages', to: '/SA/Message' },
                    { icon: faMoneyBillTransfer, label: 'Transactions', to: '/SA/Transaction' },
                    { icon: faBookmark, label: 'Reservations', to: '/SA/Reservations' },
                    { icon: faHandPointUp, label: 'Requests', to: '/SA/Requests' },
                    { icon: faCircleInfo, label: 'Package Details', to: '/SA/PakageDetails' },
                    { icon: faCalendarPlus, label: 'Time Slots', to: '/SA/Slots' },
                    { icon: faPersonCircleCheck, label: 'Users Verified', to: '/SA/UserVerified' },
                    { icon: faUserPlus, label: 'Create User Account', to: '/SA/CreateAccount' },
                    { icon: faUsers, label: 'Users List', to: '/SA/UsersPage' },
                    { icon: faUsers, label: 'Finance List', to: '/SA/FienenceAdmin' },
                    { icon: faUsers, label: 'Operation List', to: '/SA/OpreationAdmin' },

                ]);
                break;
            case 'financeAdmin':
                setMenuItems([
                    { icon: faGaugeHigh, label: 'Dashboard', to: '/FinanceAdmin' },
                    { icon: faMoneyBillTransfer, label: 'Transactions', to: '/FinanceAdmin/Transactions' },


                ]);
                break;
            case 'operationAdmin':
                setMenuItems([
                    { icon: faGaugeHigh, label: 'Dashboard', to: '/OperationAdmin' },
                    { icon: faBookmark, label: 'Reservations', to: '/OperationAdmin/Reservations' },
                    { icon: faCalendarPlus, label: 'Time Slots', to: '/SA/Slots' },

                ]);
                break;
            case 'admin':
            default:
                setMenuItems([
                    { icon: faGaugeHigh, label: 'Dashboard', to: '/Admin' },
                    { icon: faInbox, label: 'Messages', to: '/SA/Message' },
                    { icon: faMoneyBillTransfer, label: 'Transactions', to: '/SA/Transaction' },
                    { icon: faBookmark, label: 'Reservations', to: '/SA/Reservations' },
                    { icon: faHandPointUp, label: 'Requests', to: '/SA/Requests' },
                    { icon: faCircleInfo, label: 'Package Details', to: '/SA/PakageDetails' },
                    { icon: faCalendarPlus, label: 'Time Slots', to: '/SA/Slots' },
                    { icon: faPersonCircleCheck, label: 'Users Verified', to: '/SA/UserVerified' },
                    { icon: faUserPlus, label: 'Create User Account', to: '/Admin/CreateAccount' },
                    { icon: faUsers, label: 'Users List', to: '/SA/UsersPage' },
                    { icon: faUsers, label: 'Finance List', to: '/Admin' },
                    { icon: faUsers, label: 'Operation List', to: '/Admin' },


                ]);
                break;
        }
    }, [userRole]);

    const resetDropdown = () => {
        // Functionality to reset dropdown if needed
        console.log('Dropdown reset');
    };

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Logged Out",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout !",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Logout",
                    text: "Your is Logged Out",
                    icon: "success",
                });
                auth.logout();
                navigate("/");
            }
        });
    };

    return (
        <div id="NavBar" className="fixed-content">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/SA">
                <div className="sidebar-brand-icon rotate-n-15">
                    <img className='NavIcon' src={Icon} alt="Logo" />
                </div>
            </Link>

            <hr className="sidebar-divider my-0" />
            <div className='flex companentUl'>            <span className='welcome'>Hi,{auth.user}</span></div>
            <hr className="sidebar-divider my-0" />
            {menuItems.map((item, index) => (
                <ul className='companentUl' key={index}>
                    {index === 0 && <span className="sidebar-heading">Dashboard</span>}
                    <Link className="nav-item" to={item.to}>
                        <FontAwesomeIcon className='FontAwsame' icon={item.icon} />
                        <span>{item.label}</span>
                    </Link>
                </ul>
            ))}

            <hr className="sidebar-divider d-none d-md-block" />
            <div className="text-center d-none d-md-inline">
                <button className="Btn_Nav" onClick={handleLogout}>
                    Logout
                    <FontAwesomeIcon icon={faRightFromBracket} className='FontAwsame' />
                </button>
            </div>
        </div>
    );
}
