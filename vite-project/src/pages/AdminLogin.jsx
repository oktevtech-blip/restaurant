import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('zziwa');
  const [password, setPassword] = useState('emma');
  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = () => {
    if (username === 'zziwa' && password === 'emma') {
      navigate('/admin-dashboard'); // Navigate to admin dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
