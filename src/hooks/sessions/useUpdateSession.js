import { useState } from "react";
import APIClient from "../../services/api-service";

const useUpdateSession = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const updateSession = (id, formData, token) => {
    const apiClient = new APIClient(`/sessions/${id}`);
    try {
      const res = apiClient.update(formData, token);
      setError("");
      setSuccess(true);
      console.log("res", res);
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(true);
      console.log("error", error);
    }
  };
  return {
    updateSession,
    error,
    success,
  };
};

export default useUpdateSession;
