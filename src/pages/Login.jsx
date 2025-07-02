import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Mock authentication - accept any credentials
    if (formData.email && formData.password) {
      localStorage.setItem('token', 'mock-token');
      onLogin();
      navigate('/dashboard');
    } else {
      setError('Please enter both email and password');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h1>AI Recruiting Dashboard</h1>
        
        {error && <div className="error">{error}</div>}
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;