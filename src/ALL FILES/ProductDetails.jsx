import React from 'react';
import './ProductDetails.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  return (
    <div>
      <div className="navbar">
        <h1>Product Details</h1>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#specifications">Specifications</a></li>
          <li><a href="#reviews">Reviews</a></li>
        </ul>
        <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
      </div>
    </div>
  );
};

export default ProductDetails;