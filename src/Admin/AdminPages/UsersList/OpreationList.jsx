import React, { useEffect, useState } from "react";
import "./UsersPage.scss";
import useUsers from "../../../hooks/admin/user/useUsers";
import Pagination from "../../CompentsAdmin/Pagination/Pagination";

const UsersPage = () => {
    const { getUsers, data, totalPages } = useUsers();
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const token = localStorage.getItem("authToken");

    useEffect(() => {
        getUsers({ role: "operationAdmin" }, token, currentPage);
    }, []);
    useEffect(() => {
        getUsers({}, token, currentPage);
    }, [currentPage]);

    useEffect(() => {
        if (data.length > 0) setUsers(data);
    }, [data]);

    const [searchEmail, setSearchEmail] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // const handleRemoveUser = (userId) => {
    //   setUsers(users.filter((user) => user.id !== userId));
    //   setSearchResults(searchResults.filter((user) => user.id !== userId));
    // };

    const handleChangePage = (page) => setCurrentPage(page);

    const handleSearch = (value) => {
        setSearchEmail(value);
        const results = users.filter((user) =>
            user.email.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(results);
        if (value === "") setSearchResults([]);
    };

    return (
        <div className="users-page mainPage">
            <h1>Users</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by Email"
                    value={searchEmail}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {(searchResults.length > 0 ? searchResults : users).map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.status}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handleChangePage}
            />
        </div>
    );
};

export default UsersPage;
