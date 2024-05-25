import { useState } from "react";
import APIClient from "../../services/api-service";

const apiClient = new APIClient("/payments");
const useCheckout = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [payment_url, setPaymentUrl] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const makeCheckout = async (token) => {
    setLoading(true);
    try {
      const response = await apiClient.post({}, token);

      setSuccess(true);
      setError("");
      setPaymentUrl(response);
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
      setSuccess(false);
      setError(error.response.data.message);
    }
    setLoading(false);
  };

  return {
    makeCheckout,
    error,
    success,
    payment_url,
    isLoading
  };
};

export default useCheckout;
