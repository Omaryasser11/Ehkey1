
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import "./Table.scss"
import CustomerBill from '../CompentsAdmin/CustomerBill/CustomerBill';
const MyTableComponent = () => {
    const [showCustomerBill, setShowCustomerBill] = useState(false);
    const [selectedBillData, setSelectedBillData] = useState(null);

    const handleBillClick = (billData) => {
        setSelectedBillData(billData);
        setShowCustomerBill(true);
    };

    const handleExitCustomerBill = () => {
        setSelectedBillData(null);
        setShowCustomerBill(false);
    };

   
    // Sample data for demonstration
    const data = [
        { id: 1, name: 'John', email: 'John123@Gmail.com', billNo: 1, amount: 1500 },
        { id: 2, name: 'Jane', email: 'Jane145@Gmail.com', billNo: 2, amount: 800 },
        { id: 3, name: 'Sam', email: 'Sam85@Gmail.com', billNo: 7, amount: 1750 },
        { id: 4, name: 'John', email: 'John123@Gmail.com', billNo: 1, amount: 1500 },
        { id: 5, name: 'Jane', email: 'Jane145@Gmail.com', billNo: 2, amount: 800 },
        { id: 6, name: 'Sam', email: 'Sam85@Gmail.com', billNo: 7, amount: 1750 },
        { id: 7, name: 'John', email: 'John123@Gmail.com', billNo: 1, amount: 1500 },
        { id: 8, name: 'Jane', email: 'Jane145@Gmail.com', billNo: 2, amount: 800 },
        { id: 9, name: 'Sam', email: 'Sam85@Gmail.com', billNo: 7, amount: 1750 },
        { id: 10, name: 'John', email: 'John123@Gmail.com', billNo: 1, amount: 1500 },
        { id: 11, name: 'Jane', email: 'Jane145@Gmail.com', billNo: 2, amount: 800 },
        { id: 12, name: 'Sam', email: 'Sam85@Gmail.com', billNo: 7, amount: 1750 },
        { id: 13, name: 'John', email: 'John123@Gmail.com', billNo: 1, amount: 1500 },
    ];

    // Render CustomerBill component if showCustomerBill is true
    if (showCustomerBill && selectedBillData) {
        return (
            <div className='col-12'>
                <CustomerBill customer={selectedBillData.customer} items={selectedBillData.items} />
                <button onClick={handleExitCustomerBill}>Exit</button>
            </div>
        );
    }

    return (
        <div className='col-12'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Bill No</th>
                        <th>Total Amount</th>
                     
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.amount} Egp</td>
                            <td>
                                <button className='A' onClick={() => handleBillClick({ customer: item, items: { name: 'Item Name', price: item.amount } })}>{item.billNo}</button>
                            </td>
                           
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default MyTableComponent;









