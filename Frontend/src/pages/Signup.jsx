import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { signup } from '../services/api';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      await signup(formData);
      navigate('/login');
    } catch (err) {
      console.error("Signup failed", err.response ? err.response.data : err.message);
    }
  };

  return <AuthForm onSubmit={handleSignup} buttonText="Signup" />;
}

export default Signup;
