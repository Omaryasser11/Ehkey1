import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import "./MyOrders.scss";

const MyOrders = () => {
    const [transactions, setTransactions] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    useEffect(() => {
        // Fetch transactions from the backend when the component mounts
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            // Make a GET request to fetch transactions
            // const response = await axios.get('/api/transactions'); // Adjust URL as per your backend
            setTransactions(dummyTransactions); // Assuming the response contains an array of transactions
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    const dummyTransactions = [
        {
            id: 1,
            status: 'unpaid',
            userName: 'John Doe',
            email: 'john@example.com',
            totalAmount: 100,
            date: '2024-05-01',
            items: [
                {
                    "id": 79,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
                {
                    "id": 80,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 5
                },
                {
                    "id": 81,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
            ]
        },
        {
            id: 2,
            status: 'unpaid',
            userName: 'Jane Smith',
            email: 'jane@example.com',
            totalAmount: 150,
            date: '2024-05-02',
            items: [
                {
                    "id": 79,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
                {
                    "id": 80,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 5
                },
                {
                    "id": 81,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
            ]
        },
        {
            id: 3,
            status: 'unpaid',
            userName: 'Alice Johnson',
            email: 'alice@example.com',
            totalAmount: 200,
            date: '2024-05-03',
            items: [
                {
                    "id": 79,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
                {
                    "id": 80,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 5
                },
                {
                    "id": 81,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
            ]
        },
        {
            id: 7,
            status: 'unpaid',
            userName: 'John Doe',
            email: 'john@example.com',
            totalAmount: 100,
            date: '2024-05-01',
            items: [
                {
                    "id": 79,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
                {
                    "id": 80,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 5
                },
                {
                    "id": 81,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
            ]
        },
        {
            id: 8,
            status: 'unpaid',
            userName: 'Jane Smith',
            email: 'jane@example.com',
            totalAmount: 150,
            date: '2024-05-02',
            items: [
                {
                    "id": 79,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
                {
                    "id": 80,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 5
                },
                {
                    "id": 81,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
            ]
        },
        {
            id: 9,
            status: 'unpaid',
            userName: 'Alice Johnson',
            email: 'alice@example.com',
            totalAmount: 200,
            date: '2024-05-03',
            items: [
                {
                    "id": 79,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
                {
                    "id": 80,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 5
                },
                {
                    "id": 81,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
            ]
        },
        {
            id: 4,
            status: 'unpaid',
            userName: 'John Doe',
            email: 'john@example.com',
            totalAmount: 100,
            date: '2024-05-01',
            items: [
                {
                    "id": 79,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
                {
                    "id": 80,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 5
                },
                {
                    "id": 81,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
            ]
        },
        {
            id: 5,
            status: 'unpaid',
            userName: 'Jane Smith',
            email: 'jane@example.com',
            totalAmount: 150,
            date: '2024-05-02',
            items: [
                {
                    "id": 79,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
                {
                    "id": 80,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 5
                },
                {
                    "id": 81,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
            ]
        },
        {
            id: 6,
            status: 'unpaid',
            userName: 'Alice Johnson',
            email: 'alice@example.com',
            totalAmount: 200,
            date: '2024-05-03',
            items: [
                {
                    "id": 79,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
                {
                    "id": 80,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 5
                },
                {
                    "id": 81,
                    "packageName": "Normal",
                    "price": 9.99,
                    "fee": 0.2,
                    "sessions": 1,
                    "quantity": 10
                },
            ]
        }
    ];

    const handleTransactionClick = (transaction) => {
        setSelectedTransaction(transaction);
    };

    const handleBackClick = () => {
        setSelectedTransaction(null);
    };

    return (
        <div className="Myorder col-12">
            <h2 className='M0'>My Orders</h2>
            {selectedTransaction ? (
                <div className=" col-12 flex Details">
                    {/* <h4>Order Details</h4> */}
                    <div className='col-12 flexRSB'>
                        <p><strong>ID:</strong> {selectedTransaction.id}</p>
                        <p><strong>status:</strong> {selectedTransaction.status}</p>
                        <p><strong>Date of Purchase:</strong> {selectedTransaction.date}</p>
                    </div>
                    <table className="myOrdes-table col-12">
                        <thead>
                            <tr>
                                <th>Item ID</th>
                                <th>packageName</th>
                                <th>price</th>
                                <th>fee</th>
                                <th>sessions</th>
                                <th>quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedTransaction.items.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.packageName}</td>
                                    <td>{item.price}</td>
                                    <td>{item.fee}</td>
                                    <td>{item.sessions}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className='Total'><strong>Total Amount:</strong> {selectedTransaction.totalAmount}</p>
                    <button onClick={handleBackClick} className='btn'>Back to Transactions</button>
                </div>
            ) : (
                <table className="myOrdes-table">
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Total Amount</th>
                            <th>Date of Purchase</th>

                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(transaction => (
                            <tr key={transaction.id} onClick={() => handleTransactionClick(transaction)}>
                                <td><a className='A11'>#{transaction.id}</a></td>
                                <td>{transaction.totalAmount}</td>
                                <td>{transaction.date}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            )
            }
        </div >
    );
};

export default MyOrders;
