import { useState } from "react";
import APIClient from "../../services/api-service";

const apiClient = new APIClient("/account/deactivate");
const useRemoveAccount = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const removeAccount = async (token) => {
    try {
      await apiClient.update({}, token);
      localStorage.removeItem("authToken");
      window.location.href = "/";
    } catch (error) {
      console.log("error", error);
    }
  };
  return {
    removeAccount,
  };
};

export default useRemoveAccount;
