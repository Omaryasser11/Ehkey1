import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import "./Transactionpage.scss"
const TransactionPage = () => {
    const [transactions, setTransactions] = useState([]);

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
            userName: 'John Doe',
            email: 'john@example.com',
            totalAmount: 100,
            date: '2024-05-01'
        },
        {
            id: 2,
            userName: 'Jane Smith',
            email: 'jane@example.com',
            totalAmount: 150,
            date: '2024-05-02'
        },
        {
            id: 3,
            userName: 'Alice Johnson',
            email: 'alice@example.com',
            totalAmount: 200,
            date: '2024-05-03'
        }
    ];


    return (

        <div className="transaction-page mainPage col-12">
            <h1>Transactions</h1>
            <table className="transaction-table">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Total Amount</th>
                        <th>Date of Purchase</th>
                        <th>Transaction ID</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.userName}</td>
                            <td>{transaction.email}</td>
                            <td>{transaction.totalAmount}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionPage;
