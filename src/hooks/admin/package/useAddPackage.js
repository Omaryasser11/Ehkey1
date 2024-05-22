import { useState } from "react";
import APIClient from "../../../services/api-service";

const apiClient = new APIClient("/packages");
const useAddPackage = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const addPackage = async (data, token) => {
    try {
      const res = await apiClient.post(data, token);

      setSuccess(true);
      setError("");
      console.log("res", res);
    } catch (error) {
      setSuccess(false);
      setError(error.response.data.message);
      console.log("error", error);
    }
  };

  return {
    success,
    error,
    addPackage,
  };
};

export default useAddPackage;
