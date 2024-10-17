import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ cart }) => {
    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            {cart.length > 0 ? (
                <ul>
                    {cart.map(item => (
                        <li key={item.name}>
                            {item.name} - {item.quantity} x ${item.price} = ${(item.quantity * item.price).toFixed(2)}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
            <div className="total">
                Total: ${cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}
            </div>
        </div>
    );
};

export default OrderSummary;
