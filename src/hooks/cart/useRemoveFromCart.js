import { useState } from "react";
import APIClient from "../../services/api-service";

const useRemoveFromCart = () => {
  const [removeStatus, setRemoveStatus] = useState();
  const [error, setError] = useState("");

  const removeFromCart = async (id, token) => {
    const apiClient = new APIClient(`/cart-items/${id}`);

    try {
      const res = await apiClient.delete(token);
      setRemoveStatus(true);
      setError("");
      console.log("res", res);
    } catch (error) {
      setRemoveStatus(false);
      setError(error.response.data.message);
      console.log("error", error);
    }
  };

  return {
    removeStatus,
    error,
    removeFromCart,
  };
};

export default useRemoveFromCart;
