import Header from './Header';
import Todo from './Todo';
import Register from "./Register";
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <div className="main-container">
        <Routes>
          <Route 
            path="/" 
            element={isAuthenticated ? <Todo /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/login" 
            element={<LoginForm setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route 
            path="/register" 
            element={<Register />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
