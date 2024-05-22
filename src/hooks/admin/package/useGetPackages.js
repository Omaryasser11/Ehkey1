import { useState } from "react";
import APIClient from "../../../services/api-service";

const apiClient = new APIClient("/packages");

const useGetPackages = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState();

  const getPackages = async (token) => {
    try {
      const res = await apiClient.get({}, token);
      setSuccess(true);
      setError("");
      setData(res);
      console.log("res", res);
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(false);
      console.log("error", error);
    }
  };

  return {
    data,
    getPackages,
    error,
    success,
  };
};
export default useGetPackages;
