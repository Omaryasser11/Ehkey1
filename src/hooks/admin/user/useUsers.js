import { useState } from "react";
import APIClient from "../../../services/api-service";

const apiClient = new APIClient("/users");

const useUsers = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [totalPages, setTotalPages] = useState();

  const getUsers = async (params, token, pageNumber = 1, pageSize = 10) => {
    try {
      const res = await apiClient.get(
        { ...params, pageNumber, pageSize },
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
    getUsers,
    success,
    error,
    totalPages,
  };
};

export default useUsers;
