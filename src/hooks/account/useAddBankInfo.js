import { useState } from "react";
import APIClient from "../../services/api-service";

const apiClient = new APIClient("/user-bank-infos");

const useAddBankInfo = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const addBankInfo = async (formData, token) => {
    try {
      await apiClient.post(formData, token);
      setSuccess(true);
      setError("");
    } catch (error) {
      setSuccess(false);
      setError(error.response?.data?.message);
    }
  };
  return {
    error,
    success,
    addBankInfo,
  };
};

export default useAddBankInfo;
