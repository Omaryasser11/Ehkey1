import { useState } from "react";
import APIClient from "../../services/api-service";

const apiClient = new APIClient("/time-slots/available-slots");

const useAvailableTimeSlots = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [slots, setSlots] = useState([]);
  const getAvailableTimeSlots = async (
    data = { date: "", timezone: "" },
    _token
  ) => {
    try {
      const res = await apiClient.get(data, _token);
      setSuccess(true);
      setError("");
      setSlots(res);
      console.log("res", res);
    } catch (error) {
      console.log(error);
      setSuccess(false);
      setError(error.response?.data?.message || "An error occurred");
    }
  };
  return {
    slots,
    error,
    success,
    getAvailableTimeSlots,
  };
};

export default useAvailableTimeSlots;
