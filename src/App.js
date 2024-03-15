import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductManagement from './components/ProductManagement';
import OrdersManagement from './components/OrdersManagement';
import OrdersCalendarView from './components/OrdersCalendarView';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<ProductManagement />} />
          <Route path="/orders" element={<OrdersManagement />} />
          <Route path="/calendar" element={<OrdersCalendarView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
