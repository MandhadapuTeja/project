import React, { useState } from 'react';
import './OrderManagement.css'; 

const OrderManagement = () => {
  // State to manage the list of orders
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', productName: 'Product 1', quantity: 2, status: 'Pending'},
    { id: 2, customerName: 'Jane Smith', productName: 'Product 2', quantity: 1, status: 'Processing' },
    { id: 3, customerName: 'Alice Johnson', productName: 'Product 3', quantity: 3, status: 'Shipped'}
  ]);


  const [selectedOrder, setSelectedOrder] = useState(null);

  const [newOrder, setNewOrder] = useState({
    customerName: '',
    productName: '',
    quantity: '',
    status: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = orders.length + 1;
    const order = { id, ...newOrder };
    setOrders([...orders, order]);
    setNewOrder({ customerName: '', productName: '', quantity: '', status: '' });
  };

  const viewOrderDetails = (orderId) => {
    const order = orders.find(order => order.id === orderId);
    setSelectedOrder(order);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    }));
  };

  const deleteOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  return (
    <div className="order-management">
      <h2>Order Management</h2>
      <div className="order-form">
        <h3>Add New Order</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="customerName" placeholder="Customer Name" value={newOrder.customerName} onChange={handleInputChange} />
          <input type="text" name="productName" placeholder="Product Name" value={newOrder.productName} onChange={handleInputChange} />
          <input type="number" name="quantity" placeholder="Quantity" value={newOrder.quantity} onChange={handleInputChange} />
          <input type="text" name="status" placeholder="Status" value={newOrder.status} onChange={handleInputChange} />
          <button type="submit">Add Order</button>
        </form>
      </div>
      <div className="order-list">
        {orders.map(order => (
          <div className="order-item" key={order.id}>
            
            <div>
              <h3>Customer: {order.customerName}</h3>
              <p>Product: {order.productName}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Status: {order.status}</p>
              <button onClick={() => viewOrderDetails(order.id)}>View Details</button>
              <button onClick={() => updateOrderStatus(order.id, 'Shipped')}>Update Status</button>
              <button onClick={() => deleteOrder(order.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {selectedOrder && (
        <div className="order-details-modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedOrder(null)}>&times;</span>
            <h2>Order Details</h2>
            <p><strong>Customer:</strong> {selectedOrder.customerName}</p>
            <p><strong>Product:</strong> {selectedOrder.productName}</p>
            <p><strong>Quantity:</strong> {selectedOrder.quantity}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>

          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
