
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5081/api/auth/register', user);
      alert('User registered successfully!');
      navigate('/login'); // Redirect to login after registration
    } catch (error) {
      console.error(error);
      alert('Registration failed!');
    }
  };

  return (
    <div className="register-container">
      <h2 className="form-title">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input type="text" name="name" className="form-input" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input type="email" name="email" className="form-input" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input type="password" name="password" className="form-input" onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
