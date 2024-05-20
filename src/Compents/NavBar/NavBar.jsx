import React from 'react'
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
export default function NavBar() {
    const [cart, setCart] = useRecoilState(cartState);
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    const auth = useAuth();
    return (
        <div className="NavBar1 col-12">
            <div className='Lift'>
                <div className='Icon'>
                    <img src={Icon} />
                </div>
                <div className='Links'>
                    <Link className="m-3" to="/">Home</Link>
                    <Link className="m-3" to="/Services">Services</Link>
                    <Link className="m-3" to="/AboutUs">About Us </Link>
                    <Link className="m-3" to="/ContactUs">Contact Us </Link>
                    <Link className="m-3" to="/PolicyAndPrivacy">Policy And Privacy</Link>
                    <Link className="m-3" to="/Packages">Packages </Link>
                </div>
            </div>
            <div className='right'>
                <div className='Links'>

                    {!auth.user && (
                        <Link className="m-3" to="/login">Login</Link>
                    )}
                    <Link className="m-3" to="/SignUp">Sign Up </Link>
                    <Link className="m-3" to="/MyAccount">My Account  </Link>
                    <Link  to="/Cart2">
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={totalQuantity} color="white">
                                <ShoppingCartIcon color='white' />
                            </StyledBadge>
                        </IconButton>
                    </Link>
               

                </div>
            </div>
        </div>
    )
}





