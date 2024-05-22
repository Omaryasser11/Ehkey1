import { useState } from "react";
import APIClient from "../../../services/api-service";

const useUpdateTimeSlotStatus = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const activateTimeSlot = async (token, id) => {
    try {
      const apiClient = new APIClient(`/time-slots/activate-slot/${id}`);
      await apiClient.update({}, token);
      setSuccess(true);
      setError("");
      setTimeout(() => setSuccess(false), 500); // Reset success state
    } catch (error) {
      console.log(error);
      setSuccess(false);
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  const deactivateTimeSlot = async (token, id) => {
    try {
      const apiClient = new APIClient(`/time-slots/deactivate-slot/${id}`);
      await apiClient.update({}, token);
      setSuccess(true);
      setError("");
      setTimeout(() => setSuccess(false), 500); // Reset success state
    } catch (error) {
      console.log(error);
      setSuccess(false);
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return {
    error,
    success,
    activateTimeSlot,
    deactivateTimeSlot,
  };
};

export default useUpdateTimeSlotStatus;
