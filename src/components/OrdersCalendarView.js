import React, { useState } from 'react';
import './OrderCalendarView.css'; 

const AddOrderModal = ({ isOpen, onClose, onAddOrder }) => {
  const [formData, setFormData] = useState({
    productName: '',
    customerName: '',
    deliveryDate: new Date().toISOString().split('T')[0],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddOrder(formData);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add New Order</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="productName" placeholder="Product Name" value={formData.productName} onChange={handleInputChange} /><br/>
          <input type="text" name="customerName" placeholder="Customer Name" value={formData.customerName} onChange={handleInputChange} />
          <input type="date" name="deliveryDate" value={formData.deliveryDate} onChange={handleInputChange} /><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

const OrderCalendarView = () => {
  const [addOrderModalOpen, setAddOrderModalOpen] = useState(false);
  const [orders, setOrders] = useState([
    { id: 1, productName: 'Product A', customerName: 'John Doe', deliveryDate: '2024-03-15' },
    { id: 2, productName: 'Product B', customerName: 'Jane Smith', deliveryDate: '2024-03-16' },
    { id: 3, productName: 'Product C', customerName: 'Alice Johnson', deliveryDate: '2024-03-16' }
  ]);

  const handleAddOrder = (formData) => {
    const newOrder = { id: orders.length + 1, ...formData };
    setOrders([...orders, newOrder]);
  };

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  return (
    <div className="container">
    <h1>Orders Calender View</h1>
      <button className="button" onClick={() => setAddOrderModalOpen(true)}>Add Order</button>
      <AddOrderModal isOpen={addOrderModalOpen} onClose={() => setAddOrderModalOpen(false)} onAddOrder={handleAddOrder} />
      <button className="button" onClick={() => setAddOrderModalOpen(true)}>View Orders</button>
      <div className="orders-list">

        {orders.map(order => (
          <div key={order.id} className="order-item">
            <p><strong>Product Name:</strong> {order.productName}</p>
            <p><strong>Customer Name:</strong> {order.customerName}</p>
            <p><strong>Delivery Date:</strong> {order.deliveryDate}</p>
            <button className="delete-button" onClick={() => handleDeleteOrder(order.id)}>Delete</button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default OrderCalendarView;
