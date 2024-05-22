import { useState } from "react";
import APIClient from "../../../services/api-service";

const apiClient = new APIClient("/users");

const usePendingUsers = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [totalPages, setTotalPages] = useState();

  const getPendingUsers = async (token, pageNumber = 1, pageSize = 10) => {
    try {
      const res = await apiClient.get(
        { pageNumber, pageSize, status: "Pending" },
        token
      );

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
    getPendingUsers,
    success,
    error,
    totalPages,
  };
};

export default usePendingUsers;
