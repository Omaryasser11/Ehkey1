import { useState } from "react";
import APIClient from "../../services/api-service";

const apiClient = new APIClient("/sessions");

const useBookASession = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const bookASession = async (formData, token) => {
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
    bookASession,
  };
};

export default useBookASession;
