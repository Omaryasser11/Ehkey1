
// CartPage.js

import React, { useState } from 'react';
import './CartPage.scss';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Product 1',
            price: 10.99,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 19.99,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Product 3',
            price: 5.99,
            image: 'https://via.placeholder.com/150',
        },
    ]);

    const handleRemoveItem = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <>
         <h1>Your Cart</h1>
            <div className="cart-page col-12">

             
                <div className="cart-items col-6">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                </div>
                                <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </div>
                        ))
                    )}
                </div>
                <div className='col-6'>
                    <h6>setting</h6>
                </div>

            </div>
            <div className="cart-total col-">
                <h2>Total: ${calculateTotal()}</h2>
                <button className="checkout-btn">Checkout</button>
            </div>
        </>
    );
};

export default CartPage;
