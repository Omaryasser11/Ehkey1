import { useState } from "react";
import APIClient from "../../services/api-service";

const apiClient = new APIClient("/account");

const useAccountData = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState();
  const getAccountData = async (token) => {
    try {
      const res = await apiClient.get({}, token);
      setSuccess(true);
      setError("");

      setData(res);
    } catch (error) {
      console.log(error);
      setSuccess(false);
      setError(error.response?.data?.message || "An error occurred");
    }
  };
  return {
    data,
    error,
    success,
    getAccountData,
  };
};

export default useAccountData;
