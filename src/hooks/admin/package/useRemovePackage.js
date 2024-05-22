import { useState } from "react";
import APIClient from "../../../services/api-service";

const useRemovePackage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const removePackage = async (token, id) => {
    const apiClient = new APIClient(`/packages/${id}`);

    try {
      const res = await apiClient.delete(token);

      setSuccess(true);
      setError("");
      console.log("res", res);
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(false);
      console.log("error", error);
    }
  };
  return {
    removePackage,
    success,
    error,
  };
};

export default useRemovePackage;
