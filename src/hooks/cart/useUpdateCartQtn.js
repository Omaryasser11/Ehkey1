import { useState } from "react";
import APIClient from "../../services/api-service";
import useGetCart from "./useGetCart";

const useUpdateCartQtn = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const updateCartQtn = async (id, token, quantity) => {
    setIsLoading(true);
    const apiClient = new APIClient(`/cart-items/${id}`);
    try {
      const res = await apiClient.update({ quantity }, token);
      setSuccess(true);
      setError("");
      console.log("res", res);
      setIsLoading(false);
    } catch (error) {
      setSuccess(false);
      setError(error.response.data.message);
      console.log("error", error);
      setIsLoading(false);
    }
  };
  return {
    updateCartQtn,
    success,
    error,
    isLoading,
  };
};

export default useUpdateCartQtn;
