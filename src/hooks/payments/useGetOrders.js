import { useState } from "react";
import APIClient from "../../services/api-service";

const apiClient = new APIClient("/payments");
const useGetOrders = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState();
  const [totalPages, setTotalPages] = useState(0);

  const getOrders = async (token, pageNumber = 1, pageSize = 5) => {
    try {
      const res = await apiClient.get({ pageNumber, pageSize }, token);
      setError("");
      setSuccess(true);
      setData(res.data);
      setTotalPages(res.totalPages);
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(false);
      console.log("error", error);
    }
  };

  return {
    error,
    success,
    getOrders,
    totalPages,
    orders: data,
  };
};

export default useGetOrders;
