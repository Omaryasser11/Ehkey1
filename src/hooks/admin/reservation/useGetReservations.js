import { useState } from "react";
import APIClient from "../../../services/api-service";

const apiClient = new APIClient("/sessions");

const useGetReservations = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [totalPages, setTotalPages] = useState();

  const getReservations = async (token, pageNumber = 1, pageSize = 10) => {
    try {
      const res = await apiClient.get({ pageNumber, pageSize }, token);

      setError("");
      setSuccess(true);
      setData(res.data);
      setTotalPages(res.totalPages);

      console.log("res", res);
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(false);
      console.log("error", error);
    }
  };
  return {
    data,
    getReservations,
    success,
    error,
    totalPages,
  };
};

export default useGetReservations;
