import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onRemoveFromCart, cart }) => {
    const quantity = cart.find(item => item.name === product.name)?.quantity || 0;

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.display}</p>
            <div className="price">${product.price}</div>
            <div className="quantity-control">
                <button className="quantity-btn" onClick={() => onRemoveFromCart(product.name)}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>{quantity}</span>
                <button className="quantity-btn" onClick={() => onAddToCart(product)}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <button className="add-to-cart" onClick={() => onAddToCart(product)}>Add To Cart</button>
        </div>
    );
};

export default ProductCard;
