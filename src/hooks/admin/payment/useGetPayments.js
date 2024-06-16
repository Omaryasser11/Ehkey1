import { useState } from "react";
import APIClient from "../../../services/api-service";

const apiClient = new APIClient("/admin/payments");

const useGetPayments = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [totalPages, setTotalPages] = useState();

  const getPayments = async (token, pageNumber = 1, pageSize = 100, fromDate = null, toDate = null) => {
    try {
      // Construct the query parameters object
      const queryParams = { pageNumber, pageSize };
      if (fromDate) queryParams.fromDate = fromDate;
      if (toDate) queryParams.toDate = toDate;

      const res = await apiClient.get(queryParams, token);

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
    getPayments,
    success,
    error,
    totalPages,
  };
};

export default useGetPayments;
