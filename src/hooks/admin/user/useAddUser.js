import { useState } from "react";
import APIClient from "../../../services/api-service";

const apiClient = new APIClient("users");

const useAddUser = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const addUser = async (formData, token) => {
    try {
      const res = await apiClient.post(formData, token);
      setSuccess(true);
      setError("");
      console.log("res", res);
    } catch (error) {
      console.log("error", error);
      setError(error.response.data.message);
      setSuccess(false);
    }
  };
  return {
    error,
    success,
    addUser,
  };
};
export default useAddUser;
