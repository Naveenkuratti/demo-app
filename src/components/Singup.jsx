import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Singup.css';

const Signup = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Add login logic here (e.g., validation, API call)
        // After successful login, navigate to the product details page
        navigate('/product-details');
    };

    const handleCreateAccount = () => {
        // Navigate to the create account page (you'll need to implement this page)
        navigate('/create-account');
    };

    return (
        <div className="container">
            <div className="logo">
                <img src="https://attic.sh/2bs0ppeprahubc9wi1o0altswq0v" alt="Liceria Logo" />
                <h1>DELIVERY APP</h1>
            </div>
            <input type="text" className="input-field" placeholder="Email or Phone" />
            <input type="password" className="input-field" placeholder="Password" />
            <div className="forgot-password">
                <a href="#">Forgot Password?</a>
            </div>
            <button className="login-button" onClick={handleLogin}>Login</button>
            <p>or</p>
            <button className="create-account" onClick={handleCreateAccount}>Create an Account</button>
        </div>
    );
};

export default Signup; 