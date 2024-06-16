// useSignup.js

import { useState } from "react";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.ehkey.com/api/account", // Adjust baseURL to match your API endpoint
});

const useSignup = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const signup = async (formData) => {
    try {
      const response = await apiClient.post("/register", formData);

      // Handle response data if needed
      console.log("Registration successful:", response.data);

      setSuccess(true);
      setError("");
      return { success: true, data: response.data }; // Optionally return data if needed
    } catch (error) {
      console.error("Registration error:", error);
      setSuccess(false);
      setError(error.response?.data?.message || "An error occurred");
      return { success: false, error: error.message };
    }
  };

  return { signup, success, error };
};

export default useSignup;
