import { useState } from "react";
import APIClient from "../../../services/api-service";

const apiClient = new APIClient("/dashboard");
const useDashboard = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState();

  const getDashboardData = async (token) => {
    try {
      const res = await apiClient.get({}, token);

      setSuccess(true);
      setError("");
      setData(res);
      console.log("res", res);
    } catch (error) {
      console.log(error);
      setSuccess(false);
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return {
    data,
    getDashboardData,
    success,
    error,
  };
};
export default useDashboard;
