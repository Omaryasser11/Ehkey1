import { useState } from "react";
import APIClient from "../../../services/api-service";

const apiClient = new APIClient("recommended-emails");

const useAddRecommendedEmail = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const addRecommendedEmail = async (email, token) => {
    try {
      const res = await apiClient.post({ email }, token);
      setSuccess(true);
      setError("");
      console.log("res", res);
    } catch (error) {
      console.log("error", error);
      setError(error.response.data.message);
      setSuccess(false);
    }
  };
  return {
    error,
    success,
    addRecommendedEmail,
  };
};
export default useAddRecommendedEmail;
