import React, { useState, useEffect } from "react";
import "./RequestsPage.scss"; // Import SCSS file for styling
import Pagination from "../../CompentsAdmin/Pagination/Pagination";
import useUpdateAccountStatus from "../../../hooks/admin/user/useUpdateAccountStatus";
import useUsers from "../../../hooks/admin/user/useUsers";

const RequestsPage = () => {
  const { getUsers, data, totalPages } = useUsers();
  const { updateAccountStatus, success } = useUpdateAccountStatus();

  const [currentPage, setCurrentPage] = useState(1);
  const token = localStorage.getItem("authToken");

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getUsers({ status: "Pending" }, token, currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (data) setRequests(data);
  }, [data]);

  const handleChangePage = (page) => setCurrentPage(page);
  const handleApproveRequest = (id) => {
    updateAccountStatus({ status: "Active" }, token, id);
    setRequests(requests.filter((request) => request.id !== id));
  };
  return (
    <div className="requests-page mainPage col-12">
      <h1>Requests</h1>
      <table className="requests-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests &&
            requests.map((request) => (
              <tr key={request.id}>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{request.phone}</td>
                <td>{request.status}</td>
                <td>
                  {
                    <button onClick={() => handleApproveRequest(request.id)}>
                      Approve
                    </button>
                  }
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handleChangePage}
      />
    </div>
  );
};

export default RequestsPage;
