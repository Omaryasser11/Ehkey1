import React, { useState, useEffect } from "react";
import "./MessagePage.scss";
import useContactMessages from "../../../hooks/admin/contact/useContactMessages";
import Pagination from "../../CompentsAdmin/Pagination/Pagination";

const MessagePage = () => {
  const [contactRequests, setContactRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { getContactMessages, data, totalPages } = useContactMessages();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    getContactMessages(token, currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (data) {
      setContactRequests(data);
    }
  }, [data]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="message-page mainPage col-12">
      <h1>Contact Requests</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contactRequests.length > 0 &&
            contactRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{request.phone}</td>
                <td>{request.message}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MessagePage;
