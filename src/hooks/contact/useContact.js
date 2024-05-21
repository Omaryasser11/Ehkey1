import { useState } from "react";
import APIClient from "../../services/api-service";

const apiClient = new APIClient("/contact-us");

const useContact = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const submitContactForm = async (formData) => {
    try {
      await apiClient.post(formData);
      setSuccess(true);
      setError("");
    } catch (error) {
      console.log(error);
      setSuccess(false);
      setError(error.response?.data?.message || "An error occurred");
    }
  };
  return {
    error,
    success,
    submitContactForm,
  };
};

export default useContact;
