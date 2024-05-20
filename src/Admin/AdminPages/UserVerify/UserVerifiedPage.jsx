import React, { useState } from 'react';
import * as XLSX from 'xlsx'; // Import all modules from xlsx library
import './UserVerifiedPage.scss'; // Import SCSS file for styling

const UserVerifiedPage = ({ onBack }) => {
    // State to manage uploaded users
    const [verifiedUsers, setVerifiedUsers] = useState([]);
    const [manualEntry, setManualEntry] = useState({ username: '', email: '' });

    // Function to handle file upload
    const handleFileUpload = e => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = async (e) => {
                const data = e.target.result;
                const workbook = XLSX.read(data, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

                // Assuming each row contains [username, email]
                const users = rows.map(row => ({
                    username: row[0],
                    email: row[1]
                }));

                setVerifiedUsers(users);
            };

            reader.readAsBinaryString(file);
        }
    };

    // Function to handle manual entry
    const handleManualEntry = () => {
        if (manualEntry.username && manualEntry.email) {
            setVerifiedUsers([...verifiedUsers, manualEntry]);
            setManualEntry({ username: '', email: '' });
        } else {
            alert('Please enter both username and email');
        }
    };

    return (
        <div className="user-verified-page mainPage col-12">
            <h1>User Verification</h1>
            <div className="input-section">
                <div className="file-upload">
                    <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
                </div>
                <div className="manual-entry">
                    <input
                        type="text"
                        placeholder="Username"
                        value={manualEntry.username}
                        onChange={e => setManualEntry({ ...manualEntry, username: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={manualEntry.email}
                        onChange={e => setManualEntry({ ...manualEntry, email: e.target.value })}
                    />
                    <button onClick={handleManualEntry}>Add User</button>
                </div>
            </div>
            {verifiedUsers.length > 0 && (
                <div className="verified-users">
                    <h2>Verified Users</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {verifiedUsers.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <div className="button-group">
                <button onClick={onBack}>Back</button>
            </div>
        </div>
    );
};

export default UserVerifiedPage;
