import { useState } from "react";
import APIClient from "../../../services/api-service";

const apiClient = new APIClient("/contact-us");

const useContactMessages = () => {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const getContactMessages = async (token, pageNumber = 1, pageSize = 10) => {
    try {
      const res = await apiClient.get({ pageNumber, pageSize }, token);
      setError("");
      setSuccess(true);
      setData(res.data);
      setTotalPages(res.totalPages);
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(false);
    }
  };

  return {
    data,
    success,
    error,
    getContactMessages,
    totalPages,
  };
};

export default useContactMessages;
