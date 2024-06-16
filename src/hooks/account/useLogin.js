// useLogin.js
import { useState } from "react";
import APIClient from "../../services/api-service"; // Adjust path as per your project structure

const apiClient = new APIClient("/account/login"); // Adjust endpoint as per your API

const useLogin = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const login = async (formData) => {
    try {
      const response = await apiClient.post(formData);

      const authToken = response.token;
      const userName = response.name;
      const userRole = response.role;

      localStorage.setItem("authToken", authToken);
      localStorage.setItem("user", userName);
      localStorage.setItem("role", userRole); // Store user role in localStorage

      setSuccess(true);
      setError("");
      return { success: true, data: response }; // Optionally return data if needed
    } catch (error) {
      console.error("Login error:", error);
      setSuccess(false);
      setError(error.response?.data?.message || "An error occurred");
      return { success: false, error: error.message };
    }
  };

  return { login, success, error };
};

export default useLogin;
