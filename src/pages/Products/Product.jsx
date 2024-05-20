// Product.js
import React, { useState } from 'react';
import "./product.scss";
import Swal from 'sweetalert2';
import { useRecoilState } from 'recoil';
import { cartState } from '../../store/index';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const Product = ({ product }) => {
    const { id, name, description, price, feeRate ,sessions} = product;
    const [cart, setCart] = useRecoilState(cartState);

    const productInCart = cart.find(item => item.id === id);
    const quantity = productInCart ? productInCart.quantity : 0;

    const incrementQuantity = () => {
        const newCart = cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(newCart);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            const newCart = cart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            );
            setCart(newCart);
        } else {
            Swal.fire({
                title: "Do you remove from cart?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Yes",
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    const newCart = cart.filter(item => item.id !== id);
                    setCart(newCart);
                }
            });
        }
    };

    const addToCart = () => {
        setCart([...cart, { ...product, quantity: 1 }]);
    };

    return (

        <div className="product col-5">
            <h3 className='col-10 PN'>{name}</h3>

            <p className='col-10'>{description}</p>
            <p className='col-10'>{`Total Session : ${sessions}`}</p>
            <div className='col-10 mid'>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={feeRate} precision={.25} readOnly />
                </Stack>
            </div>
            <p className='col-10'> ${price}</p>
            <div className='col-10'>
                {quantity > 0 ? (
                    <div className='col-12 Counter1'>
                        <button className='Decrement' onClick={decrementQuantity}>-</button>
                        <span>{quantity}</span>
                        <button className='Decrement' onClick={incrementQuantity}>+</button>
                    </div>
                ) : (
                    <div className='col-12 flex'>   <button onClick={addToCart} className='col-10 Add' >Add to Cart</button></div>

                )}
            </div>
        </div>


    );
};

export default Product;
;


