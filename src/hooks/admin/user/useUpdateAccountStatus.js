import { useState } from "react";
import APIClient from "../../../services/api-service";

const useUpdateAccountStatus = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const updateAccountStatus = async (data, token, id) => {
    try {
      const apiClient = new APIClient(`/users/status/${id}`);
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
    updateAccountStatus,
  };
};

export default useUpdateAccountStatus;
