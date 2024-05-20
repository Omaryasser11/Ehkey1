import React from 'react';
import './CustomerBill.scss';

const CustomerBill = ({ customer, items }) => {
    return (
        <div className="customer-bill col-12 ">
            <h2>Customer Bill</h2>
            <div className="customer-info">
                <p><strong>Name:</strong> {customer.name}</p>
                <p><strong>Email:</strong> {customer.email}</p>
                {/* Add more customer details as needed */}
            </div>
            <div className="bill-items">
                <h3>Items:</h3>
                <ul>
                    <li>
                        <span>{items.name}</span>
                        <span>${items.price}</span> {/* Assuming price is in dollars */}
                    </li>
                </ul>
            </div>
            <div className="total">
                <h3>Total:</h3>
                <p>${items.price}</p> {/* Assuming price is in dollars */}
            </div>
        </div>
    );
};

export default CustomerBill;
