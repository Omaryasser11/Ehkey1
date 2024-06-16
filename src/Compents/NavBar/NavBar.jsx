import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
import "./NavBar.scss"
import { useAuth } from "../../store/auth";
import Icon from "../../assets/icon.png"
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRecoilState } from 'recoil';
import { cartState } from '../../store/index';
import { colors } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const [cart, setCart] = useRecoilState(cartState);
    const menuRef = useRef(null);
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -4,
            top: 16,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
            backgroundColor: "#062d1f",
            color: "white",
        },
    }));
    const auth = useAuth();


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };


    useEffect(() => {
        if (showMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMenu]);
    return (
        <div className="NavBar111 col-12">
            <div className='Lift'>
                <div className='Icon'>
                    <Link to={'/'}>
                        <img src={Icon} />
                    </Link>
                </div>

                {
                    showMenu === true && (
                        <div className={`Menu ${showMenu ? 'active' : ''}`} ref={menuRef}>
                            <Link className="m-3" to="/">Home</Link>
                            <Link className="m-3" to="/Services">Packages</Link>
                            <Link className="m-3" to="/AboutUs">About Us </Link>
                            <Link className="m-3" to="/ContactUs">Contact Us </Link>
                            <Link className="m-3" to="/PolicyAndPrivacy">Policy And Privacy</Link>
                            <Link className="m-3" to="/Packages">Booking </Link>
                        </div>
                    )

                }

                {showMenu === false &&

                    (
                        <div className='Links'>
                            <Link className="m-3" to="/">Home</Link>
                            <Link className="m-3" to="/Services">Packages</Link>
                            <Link className="m-3" to="/AboutUs">About Us </Link>
                            <Link className="m-3" to="/ContactUs">Contact Us </Link>
                            <Link className="m-3" to="/PolicyAndPrivacy">Policy And Privacy</Link>
                            <Link className="m-3" to="/Packages">Booking </Link>
                        </div>
                    )
                }
            </div>
            <div className='right'>


                <div className='Links flexR'>


                    {auth.isAuthenticated === false && (
                        <>
                            <div className='Auth flexRSB'>
                                <div className="D flex"><Link className='Flat' to="/login">Login</Link></div>
                                <div className=' Cline'></div>
                                <div className="D flex"><Link className=" Flat " to="/SignUp">Sign Up </Link></div>
                            </div>

                        </>
                    )}

                    {auth.isAuthenticated === true && (
                        <>
                            <span className='welcome'>Hi,{auth.user}</span>
                            <Link className='Profile' to="/MyAccount">
                                <FontAwesomeIcon icon={faUser} className='profileIcon' />
                            </Link>


                        </>
                    )}

                    <Link to="/Cart2">
                        <IconButton aria-label="cart" className='cart1'>
                            <StyledBadge className='CartIcon' badgeContent={totalQuantity}  >
                                <ShoppingCartIcon color='white' />
                            </StyledBadge>
                        </IconButton>
                    </Link>

                </div>
            </div>
            <div className="navbar-toggle">

                <button onClick={toggleMenu} className="toggle-button">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
            </div>
        </div>
    )
}





