import React, { useState } from 'react';
import './LoginPage.scss'; // Import SCSS file for styling

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      // Check if username or password is empty
      if (!username.trim() || !password.trim()) {
          setError('Please enter both username and password');
          return;
      }
  
      // Check credentials here (e.g., send a request to the server)
      if (username === 'admin' && password === 'password') {
          // Successful login
          setError('');
          console.log('Login successful');
          window.alert('Login successful');
          // Clear input fields
          setUsername('');
          setPassword('');
      } else {
          setError('Invalid username or password');
          console.error('Invalid username or password');
      }
  };
  
    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <div className="error">{error}</div>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;

