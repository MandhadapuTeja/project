import React, { useState } from 'react';
import './ProductManagement.css';

const ProductManagement = () => {

  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10, count: 0 },
    { id: 2, name: 'Product 2', price: 20, count: 0 },
    { id: 3, name: 'Product 3', price: 30, count: 0 }
  ]);


  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');


  const handleAddProduct = () => {
    if (productName && productPrice) {
      const newProduct = {
        id: products.length + 1,
        name: productName,
        price: parseFloat(productPrice),
        count: 0
      };
      setProducts([...products, newProduct]);
      setProductName('');
      setProductPrice('');
    }
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const handleIncrementCount = (productId) => {
    setProducts(products.map(product =>
      product.id === productId ? { ...product, count: product.count + 1 } : product
    ));
  };

  const handleDecrementCount = (productId) => {
    setProducts(products.map(product =>
      product.id === productId ? { ...product, count: product.count > 0 ? product.count - 1 : 0 } : product
    ));
  };

  return (
    <div className="product-management">
      <h2>Product Management</h2>
      <div className="product-form">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div className="product-list">
        <h3>Product List ({products.length})</h3>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price} - Count: {product.count}
              <button onClick={() => handleIncrementCount(product.id)}>+</button>
              <button onClick={() => handleDecrementCount(product.id)}>-</button>
              <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductManagement;
