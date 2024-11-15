import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { login } from '../services/api';

function Login() {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const { data } = await login(formData);
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error("Login failed", err.response ? err.response.data : err.message);
    }
  };

  return <AuthForm onSubmit={handleLogin} buttonText="Login" />;
}

export default Login;
