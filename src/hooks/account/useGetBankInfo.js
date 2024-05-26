import { useState } from "react";
import APIClient from "../../services/api-service";

const apiClient = new APIClient("/user-bank-infos");

const useGetBankInfo = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState();
  const [code, setCode] = useState(0);
  const getBankInfo = async (token) => {
    try {
      const res = await apiClient.get({}, token);
      setSuccess(true);
      setError("");
      setData(res);
    } catch (error) {
      console.log(error);
      setSuccess(false);
      setError(error.response?.data?.message || "An error occurred");
      if (error.response.status === 404) setCode(404);
    }
  };
  return {
    code,
    data,
    error,
    success,
    getBankInfo,
    setCode
  };
};

export default useGetBankInfo;
