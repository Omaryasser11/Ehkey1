import { useState } from "react";
import APIClient from "../../services/api-service";

const apiClient = new APIClient("/user-bank-infos");

const useUpdateBankInfo = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const updateBankInfo = async (data, token) => {
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
    updateBankInfo,
  };
};

export default useUpdateBankInfo;
