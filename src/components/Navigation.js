// Navigation.js
import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/product">Product Management</Link></li>
        <li><Link to="/orders">Order Management</Link></li>
        <li><Link to="/calendar">Calendar View</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
