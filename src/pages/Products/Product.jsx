// Product.js
import React, { useState } from "react";
import "./product.scss";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import { cartState } from "../../store/index";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import useAddToCart from "../../hooks/cart/useAddToCart";
const Product = ({ product }) => {
  const { addToCart, status } = useAddToCart();
  const { id, name, description, price, feeRate, sessions } = product;

  const token = localStorage.getItem("authToken");
  const handleAddToCart = () => {
    addToCart({ packageId: id, quantity: 1 }, token);
  };

  return (
    <div className="product col-5">
      <h3 className="col-10 PN">{name}</h3>

      <p className="col-10">{description}</p>
      <p className="col-10">{`Total Session : ${sessions}`}</p>
      <div className="col-10 mid">
        <Stack spacing={1}>
          <Rating
            name="half-rating-read"
            defaultValue={feeRate}
            precision={0.25}
            readOnly
          />
        </Stack>
      </div>
      <p className="col-10"> ${price}</p>
      <div className="col-10">
        {
          <div className="col-12 flex">
            {status || (
              <button
                onClick={() => handleAddToCart(id)}
                className="col-10 Add"
              >
                Add To Cart
              </button>
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default Product;
