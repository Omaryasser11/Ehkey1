import { useState } from "react";
import APIClient from "../../services/api-service";

const apiClient = new APIClient("/sessions/upcoming");

const useGetUserSessions = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState();

  const getUserSessions = async (token) => {
    try {
      const res = await apiClient.get({}, token);
      setSuccess(true);
      setError("");
      setData(res);
      console.log("res", res);
    } catch (error) {
      console.log("error.response", error.response);
      setError(error.response.data.message);
      setSuccess(false);
    }
  };

  return {
    error,
    success,
    sessions: data,
    getUserSessions,
  };
};

export default useGetUserSessions;
