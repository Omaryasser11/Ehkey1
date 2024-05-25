import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./Table.scss";
import CustomerBill from "../CompentsAdmin/CustomerBill/CustomerBill";
import useGetPayments from "../../hooks/admin/payment/useGetPayments";
import Pagination from "../CompentsAdmin/Pagination/Pagination";
const MyTableComponent = () => {
  const [selectedBillData, setSelectedBillData] = useState(null);
  const { data, getPayments, success, totalPages } = useGetPayments();
  const [currentPage, setCurrentPage] = useState(1);

  const token = localStorage.getItem("authToken");
  useEffect(() => {
    getPayments(token, currentPage);
  }, []);
  useEffect(() => {
    getPayments(token, currentPage);
  }, [currentPage]);

  const handleBillClick = (billData) => {
    setSelectedBillData(billData);
  };

  const handleExitCustomerBill = () => {
    setSelectedBillData(null);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("page", page);
  };

  if (selectedBillData) {
    return (
      <div className="col-12">
        <CustomerBill data={selectedBillData} />
        <button onClick={handleExitCustomerBill}>Exit</button>
      </div>
    );
  }

  return (
    <div className="col-12">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Bill No</th>
            <th>Total Amount</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.user.name}</td>
              <td>{item.user.email}</td>
              <td>{item.transactionId || "Unpaid"}</td>
              <td>{item.amount} EGP</td>
              <td>
                <button className="A" onClick={() => handleBillClick(item)}>
                  {item.amount}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        onPageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default MyTableComponent;
