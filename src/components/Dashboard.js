import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="dashboard-heading">Welcome to the ERP System Dashboard</h2>
      <div className="overview">
        <div className="feature-box">
          <h3>Products Management</h3>
          <p>Manage product listings, add new products, update existing ones.</p>
          <Link to="/product" className="button">Go to Products Management</Link>
        </div>
        <div className="feature-box">
          <h3>Orders Management</h3>
          <p>View and handle orders, process new orders, manage order status.</p>
          <Link to="/orders" className="button">Go to Orders Management</Link>
        </div>
        <div className="feature-box">
          <h3>Orders Calendar View</h3>
          <p>View and handle orders, process new orders, manage order status.</p>
          <Link to="/calendar" className="button">Orders Calender View</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
