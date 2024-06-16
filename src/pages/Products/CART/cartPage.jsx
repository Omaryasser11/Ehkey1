// CartPage.js
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../../../store/index";
import Swal from "sweetalert2";
import { Link, redirect } from "react-router-dom";
import "./Cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import EmptyCart from "../../../assets/Empty.png";
import useGetCart from "../../../hooks/cart/useGetCart";
import useUpdateCartQtn from "../../../hooks/cart/useUpdateCartQtn";
import useRemoveFromCart from "../../../hooks/cart/useRemoveFromCart";
import useCheckout from "../../../hooks/payments/useCheckout";
const CartPage = () => {
  const { getCartItems, cartItems } = useGetCart();
  const { updateCartQtn, success, isLoading } = useUpdateCartQtn();
  const { removeFromCart, removeStatus } = useRemoveFromCart();
  const { makeCheckout, payment_url } = useCheckout();
  const [paymentClick, setPaymentClick] = useState(false);
  const token = localStorage.getItem("authToken");
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [TotalFee, setTotalFee] = useState(0);
  useEffect(() => {
    getCartItems(token);
  }, []);

  useEffect(() => {
    getCartItems(token);
    removeStatus && getCartItems(token);
  }, [isLoading, removeStatus]);

  useEffect(() => {
    if (cartItems) {
      cartItems.length > 0 &&
        setTotalQuantity(
          cartItems.reduce((sum, item) => sum + item.quantity, 0)
        );
      setTotalProducts(cartItems.length);
      setTotalAmount(
        cartItems
          .reduce((sum, item) => sum + item.quantity * item.package.price, 0)
          .toFixed(2)
      );

      setTotalFee(
        cartItems
          .reduce((sum, item) => sum + item.quantity * (item.package.price / item.package.feeRate), 0)
          .toFixed(2)
      );

    }
  }, [cartItems]);
  useEffect(() => {
    if (payment_url) window.open(payment_url, "_blank");
  }, [payment_url]);

  const handleChangeQuantity = (qtn, id) => {
    if (!isLoading) updateCartQtn(id, token, qtn);
  };
  const handleRemoveFromCart = (id) => {
    removeFromCart(id, token);
    getCartItems(token);
  };
  const handleCheckout = () => {
    makeCheckout(token);
    setPaymentClick(true);
  };
  if (!cartItems || !cartItems.length) {
    return (
      <section className="cart col-12">
        <div className="isEmpty col-10">
          <img className="imgEmpty" alt="" src={EmptyCart} />
          <h1 className="tito">Your cart is empty.</h1>
          <Link to="/Services"> Add Items To Cart </Link>
        </div>
      </section>
    );
  }

  const totalPFee = (Number(TotalFee) + Number(totalAmount)).toFixed(2);

  return (
    <>
      <section className="cart col-12">
        {cartItems && cartItems.length > 0 && (
          <>
            <div className="Mycart col-8">
              <div className="TitleCart">
                <h2>My Cart</h2>
                <h2>({totalProducts}) Items </h2>
              </div>
              <div className="lineo col-9"></div>

              <table className="cart-table col-11">
                <thead className="col-12">
                  <tr className="col-12">
                    <th className="  Font">Name</th>
                    {/* <th className=' iDetails'>Details</th> */}
                    <th className="iPrice Font">Price</th>
                    <th className="iQuantity Font">Quantity</th>
     
                    <th className=" iTotal Font">Total</th>
                    <th className="iRemove Font">Remove</th>
                  </tr>
                </thead>
                <tbody className="col-12">
                  {cartItems &&
                    cartItems.map((item) => (
                      <tr key={item.id} className="col-12">
                        <td className="iName">{item.package.name}</td>
                        {/* <td className='iDetails'>{item.package.details}</td> */}
                        <td className="iPrice">
                          ${item.package.price.toFixed(2)}
                        </td>
                        <td className="iQuantity">
                          <div className="Action">
                            <button
                              className="btnPlus"
                              onClick={() =>
                                !isLoading &&
                                handleChangeQuantity(item.quantity - 1, item.id)
                              }
                            >
                              -
                            </button>
                            <div className="counter">{item.quantity}</div>
                            <button
                              className="btnPlus"
                              onClick={() =>
                                !isLoading &&
                                handleChangeQuantity(item.quantity + 1, item.id)
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                
                        <td className="iTotal">
                          ${((item.quantity) * ((item.package.price) + ((item.package.price) / (item.package.feeRate)))).toFixed(2)}
                        </td>
                        <td className=" iRemove">
                          <FontAwesomeIcon
                            className="Icon122"
                            onClick={() => handleRemoveFromCart(item.id)}
                            icon={faTrashCan}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              <Link to="/Services"> Add Items To Cart </Link>
            </div>
            <div className="OrderSummary col-4">
              <h4 className="titlee">Order Summary</h4>
              <div className="lineo"></div>

              <div className="Details col-12">
                <table className=".cart-table col-12">
                  <tr className="Summary col-6">
                    <th className="Summaryborder col-6">
                      Total Items Quantity
                    </th>
                    <td className="TD col-12">{totalQuantity}</td>
                  </tr>
                  <tr className="col-10 Summary">
                    <th className="Summaryborder">Total Items Type</th>
                    <td className="TD">{totalProducts}</td>
                  </tr>
    

                  <tr className="col-10 Summary">
                    <th className="Summaryborder">Total Amount</th>
                    <td className="TD">${totalPFee}</td>
                  </tr>

                  {/* <tr className="col-10 Summary">
                    <th className="Summaryborder">Total Amount </th>
                    <td className="TD">{totalAmount}</td>
                  </tr> */}
                </table>
              </div>
              <div className="Checkout">
                {/* <span className="A">Total </span>
                <span className="A">${totalAmount}</span>
                <span className="A">Total fee</span>
                <span className="A">${TotalFee}</span> */}
                <span className="A">Total Amount</span>
                <span className="A">${totalPFee}</span>

              </div>
              <button className="col-12   checkout-btn " onClick={handleCheckout}>
                CheckOut
              </button>
              <p>
                {paymentClick
                  ? "You will be redirected to payment page shortly..."
                  : ""}
              </p>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default CartPage;
