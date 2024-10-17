import React from 'react';
import './Header.css';

const Header = ({ title = "Order Now", description = "Choose your favorite dish." }) => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>{title}</h2>
        <p>{description}</p>
        <button aria-label="View Menu">View Menu</button>
      </div>
    </div>
  );
}

export default Header;
