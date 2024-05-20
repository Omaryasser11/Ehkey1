// Cart.js
import React from 'react';
import { useRecoilValue } from 'recoil';
import { cartState, totalQuantityState, totalAmountState } from '../../../store/index';

const Cart = () => {
  const cart = useRecoilValue(cartState);
  const totalQuantity = useRecoilValue(totalQuantityState);
  const totalAmount = useRecoilValue(totalAmountState);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name} - ${item.price} - Quantity: {item.quantity}</p>
        </div>
      ))}
      <h3>Total Quantity: {totalQuantity}</h3>
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
