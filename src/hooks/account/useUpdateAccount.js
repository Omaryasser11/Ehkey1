import { useState } from "react";
import APIClient from "../../services/api-service";

const apiClient = new APIClient("/account");

const useUpdateAccount = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const updateAccount = async (data, token) => {
    try {
      await apiClient.update(data, token);
      setSuccess(true);
      setError("");
    } catch (error) {
      console.log(error);
      setSuccess(false);
      setError(error.response?.data?.message || "An error occurred");
    }
  };
  return {
    error,
    success,
    updateAccount,
  };
};

export default useUpdateAccount;
