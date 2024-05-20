import React, { useState } from 'react';
import './UsersPage.scss'; // Import SCSS file for styling

const UsersPage = () => {
    const [users, setUsers] = useState([
        { id: 1, username: 'user1', email: 'user1@example.com' },
        { id: 2, username: 'user2', email: 'user2@example.com' },
        { id: 3, username: 'user3', email: 'user3@example.com' },
        { id: 4, username: 'user4', email: 'user4@example.com' },
    ]);
    const [searchEmail, setSearchEmail] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleRemoveUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    const handleSearch = () => {
        const results = users.filter(user => user.email.toLowerCase().includes(searchEmail.toLowerCase()));
        setSearchResults(results);
    };

    return (
        <div className="users-page mainPage">
            <h1>Users</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by Email"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {(searchResults.length > 0 ? searchResults : users).map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersPage;
