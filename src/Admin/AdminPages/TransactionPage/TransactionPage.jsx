// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Assuming you're using Axios for HTTP requests
// import "./Transactionpage.scss";

// const TransactionPage = () => {
//     const [transactions, setTransactions] = useState([]);
//     const [selectedTransaction, setSelectedTransaction] = useState(null);

//     useEffect(() => {
//         // Fetch transactions from the backend when the component mounts
//         fetchTransactions();
//     }, []);

//     const fetchTransactions = async () => {
//         try {
//             // Make a GET request to fetch transactions
//             // const response = await axios.get('/api/transactions'); // Adjust URL as per your backend
//             setTransactions(dummyTransactions); // Assuming the response contains an array of transactions
//         } catch (error) {
//             console.error('Error fetching transactions:', error);
//         }
//     };

//     const dummyTransactions = [
//         {
//             id: 1,
//             userName: 'John Doe',
//             email: 'john@example.com',
//             totalAmount: 100,
//             date: '2024-05-01'
//         },
//         {
//             id: 2,
//             userName: 'Jane Smith',
//             email: 'jane@example.com',
//             totalAmount: 150,
//             date: '2024-05-02'
//         },
//         {
//             id: 3,
//             userName: 'Alice Johnson',
//             email: 'alice@example.com',
//             totalAmount: 200,
//             date: '2024-05-03'
//         }
//     ];

//     const handleTransactionClick = (transaction) => {
//         setSelectedTransaction(transaction);
//     };

//     const handleBackClick = () => {
//         setSelectedTransaction(null);
//     };

//     return (
//         <div className="transaction-page mainPage col-12">
//             <h1>Transactions</h1>
//             {selectedTransaction ? (
//                 <div className="transaction-details">
//                     <h2>Transaction Details</h2>
//                     <p><strong>User Name:</strong> {selectedTransaction.userName}</p>
//                     <p><strong>Email:</strong> {selectedTransaction.email}</p>
//                     <p><strong>Total Amount:</strong> {selectedTransaction.totalAmount}</p>
//                     <p><strong>Date of Purchase:</strong> {selectedTransaction.date}</p>
//                     <p><strong>Transaction ID:</strong> {selectedTransaction.id}</p>
//                     <button onClick={handleBackClick}>Back to Transactions</button>
//                 </div>
//             ) : (
//                 <table className="transaction-table">
//                     <thead>
//                         <tr>
//                             <th>User Name</th>
//                             <th>Email</th>
//                             <th>Total Amount</th>
//                             <th>Date of Purchase</th>
//                             <th>Transaction ID</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {transactions.map(transaction => (
//                             <tr key={transaction.id} onClick={() => handleTransactionClick(transaction)}>
//                                 <td>{transaction.userName}</td>
//                                 <td>{transaction.email}</td>
//                                 <td>{transaction.totalAmount}</td>
//                                 <td>{transaction.date}</td>
//                                 <td>{transaction.id}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default TransactionPage;

import React from 'react'
import Table from '../../Tables/Table'
export default function TransactionPage() {
    return (
        <div className='mainPage col-12'>
            <h1>TransactionPage</h1>
            <Table />
        </div>
    )
}
