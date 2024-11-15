import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-links">
        <Link to="/add-car" className="dashboard-link">Add Car</Link>
        <Link to="/my-cars" className="dashboard-link">My Cars</Link>
      </div>
      
    </div>
  );
}

export default Dashboard;
