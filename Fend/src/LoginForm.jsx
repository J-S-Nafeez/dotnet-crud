
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5081/api/auth/login', credentials);
      
      // Save token (if sent from backend)
      localStorage.setItem('token', response.data.token || 'dummyToken');
      setIsAuthenticated(true);

      alert('Login successful!');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Login failed. Check credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label><br />
          <input type="email" name="email" onChange={handleChange} required /><br />

          <label>Password:</label><br />
          <input type="password" name="password" onChange={handleChange} required /><br /><br />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
