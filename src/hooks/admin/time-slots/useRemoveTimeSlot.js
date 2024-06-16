import { useState } from "react";
import APIClient from "../../../services/api-service";

const useRemoveTimeSlot = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const removeTimeSlot = async (token, id, onSuccess) => {
    const apiClient = new APIClient(`/time-slots/${id}`);

    try {
      const res = await apiClient.delete(token);

      if (res.status === 200) {
        setSuccess(true);
        setError("");
        console.log("res", res);
        onSuccess(id); // Call the success callback with the deleted ID
      } else {
        throw new Error("Failed to delete time slot.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete time slot. Please try again later.");
      setSuccess(false);
      console.log("error", err);
    }
  };

  return {
    removeTimeSlot,
    success,
    error,
  };
};

export default useRemoveTimeSlot;
