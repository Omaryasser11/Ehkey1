import React, { useState } from 'react';
import './ItemCardPage.scss'; // Import SCSS file for styling

const ItemCardPage = () => {
    // State to manage items
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Item 1',
            details: 'Details about item 1',
            price: '$10',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            name: 'Item 2',
            details: 'Details about item 2',
            price: '$20',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            name: 'Item 3',
            details: 'Details about item 3',
            price: '$30',
            image: 'https://via.placeholder.com/150'
        }
    ]);

    // State to manage visibility of items
    const [showItems, setShowItems] = useState(true);

    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        details: '',
        price: '',
        image: ''
    });

    // Function to toggle visibility of items
    const toggleItemsVisibility = () => {
        setShowItems(!showItems);
    };

    // Function to handle form input change
    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission (adding new item)
    const handleSubmit = e => {
        e.preventDefault();
        const newItem = {
            id: items.length + 1, // Generate unique ID
            ...formData
        };
        setItems([...items, newItem]);
        setFormData({
            name: '',
            details: '',
            price: '',
            image: ''
        });
    };

    // Function to handle item removal
    const handleRemoveItem = id => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    };

    return (
        <div className="item-card-page mainPage col-12">
            <h1>Item Available</h1>
            <div className="toggle-button">
                {showItems ? (
                    <button onClick={toggleItemsVisibility}>Hide Items</button>
                ) : (
                    <button onClick={toggleItemsVisibility}>Show Items</button>
                )}
            </div>
            {showItems ? (
                <div className="item-list">
                    {items.map(item => (
                        <div className="item-card" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>{item.details}</p>
                                <p>{item.price}</p>
                            </div>
                            <div className="item-actions">
                                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                {/* Add update functionality here */}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="item-form">
                    <h2>Add New Item</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Item Name" value={formData.name} onChange={handleInputChange} required />
                        <input type="text" name="details" placeholder="Item Details" value={formData.details} onChange={handleInputChange} required />
                        <input type="text" name="price" placeholder="Item Price" value={formData.price} onChange={handleInputChange} required />
                        <input type="url" name="image" placeholder="Image URL" value={formData.image} onChange={handleInputChange} required />
                        <button type="submit">Add Item</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ItemCardPage;
