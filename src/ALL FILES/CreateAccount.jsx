import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

const CreateAccount = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        // Add your signup logic here (e.g., API call)
        setIsSubmitted(true); // Set submitted state to true
    };

    const handleBack = () => {
        navigate('/'); // Navigate back to the home page or previous page
    };

    return (
        <div className="form-container">
            <h1>Hello <span style={{ color: "#4a90e2" }}>there</span></h1>
            {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <input type="tel" placeholder="Phone Number" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            ) : (
                <div>
                    <p>Account created successfully!</p>
                    <button onClick={handleBack}>Back</button>
                </div>
            )}
        </div>
    );
};

export default CreateAccount;
