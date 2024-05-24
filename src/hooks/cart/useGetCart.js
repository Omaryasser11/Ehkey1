import { useState } from "react";
import APIClient from "../../services/api-service";

const apiClient = new APIClient("/cart-items");
const useGetCart = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState();
  const getCartItems = async (token) => {
    try {
      const res = await apiClient.get({}, token);
      setSuccess(true);
      setError("");
      setData(res);
      console.log("res", res);
    } catch (error) {
      console.log("error", error);
      setError(error.response.data.message);
      setSuccess(false);
    }
  };

  return {
    getCartItems,
    success,
    cartItems: data,
    error,
  };
};

export default useGetCart;
