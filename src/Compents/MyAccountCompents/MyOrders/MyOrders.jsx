import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming you're using Axios for HTTP requests
import "./MyOrders.scss";
import useGetOrders from "../../../hooks/payments/useGetOrders";
import formatDate from "../../../services/formatDate";
import Pagination from "../../../Admin/CompentsAdmin/Pagination/Pagination";

const MyOrders = () => {
  const { getOrders, orders, totalPages } = useGetOrders();
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const token = localStorage.getItem("authToken");
  useEffect(() => {
    getOrders(token);
  }, []);
  useEffect(() => {
    getOrders(token, currentPage);
  }, [currentPage]);

  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleBackClick = () => {
    setSelectedTransaction(null);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="Myorder col-12">
      <h2 className="M0">My Orders</h2>
      {selectedTransaction ? (
        <div className=" col-12 flex Details">
          {/* <h4>Order Details</h4> */}
          <div className="col-12 flexRSB">
            <p>
              <strong>ID:</strong> {selectedTransaction.id}
            </p>
            <p>
              <strong>status:</strong> {selectedTransaction.status}
            </p>
            <p>
              <strong>Date of Purchase:</strong>{" "}
              {formatDate(selectedTransaction.dateTimeStamp)}
            </p>
          </div>
          <table className="myOrdes-table col-12">
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Package Name</th>
                <th>Price</th>
                <th>Fee</th>
                <th>Sessions</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {selectedTransaction &&
                selectedTransaction.paymentItems.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.packageName}</td>
                    <td>{item.price}$</td>
                    <td>{item.fee}</td>
                    <td>{item.sessions}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <p className="Total">
            <strong>Total Amount:</strong> {selectedTransaction.amount}$
          </p>
          <button onClick={handleBackClick} className="btn">
            Back to Transactions
          </button>
        </div>
      ) : (
        <>
          <table className="myOrdes-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Total Amount</th>
                <th>Payment Status</th>
                <th>Date of Purchase</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((transaction) => (
                  <tr
                    key={transaction.id}
                    onClick={() => handleTransactionClick(transaction)}
                  >
                    <td>
                      <span
                        className="A11"
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        #{transaction.id}
                      </span>
                    </td>
                    <td>{transaction.amount}$</td>
                    <td>{transaction.status}</td>
                    <td>{formatDate(transaction.dateTimeStamp)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Pagination
            onPageChange={handlePageChange}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default MyOrders;
