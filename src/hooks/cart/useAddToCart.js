import { useState } from "react";
import APIClient from "../../services/api-service";

const apiClient = new APIClient("/cart-items");
const useAddToCart = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [itemId, setItemId] = useState();
  const [status, setStatus] = useState("");
  const addToCart = async (data, token) => {
    try {
      const res = await apiClient.post(data, token);
      setSuccess(true);
      setError("");
      console.log("res", res);
      if (res === 0) {
        setStatus("Already Added");
      } else {
        setStatus("Added Successfully");
      }
      setItemId(res);
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(false);
      console.log("error", error);
    }
  };

  return {
    error,
    success,
    addToCart,
    itemId,
    status,
  };
};

export default useAddToCart;
