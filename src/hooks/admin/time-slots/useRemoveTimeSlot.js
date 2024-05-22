import { useState } from "react";
import APIClient from "../../../services/api-service";

const useRemoveTimeSlot = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const removeTimeSlot = async (token, id) => {
    const apiClient = new APIClient(`/time-slots/${id}`);

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
    removeTimeSlot,
    success,
    error,
  };
};

export default useRemoveTimeSlot;
