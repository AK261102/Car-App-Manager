import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import ProductCreation from './pages/ProductCreation';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
  return (
    <Router>
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-cars" element={<ProductList />} />
        <Route path="/car/:id" element={<ProductDetail />} />
        <Route path="/add-car" element={<ProductCreation />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
