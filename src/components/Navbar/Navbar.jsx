// Import React, useContext (for context), and useState (for local state)
import React, { useContext, useState } from 'react';

// Import CSS styling for Navbar
import './Navbar.css';

// Import images/icons from assets folder
import { assets } from '../../assets/assets';

// Import Link from react-router-dom for navigation without page reload
import { Link } from 'react-router-dom';

// Import StoreContext to access cart data and functions
import { StoreContext } from '../../context/StoreContext';

// Navbar component receives setShowLogin as a prop (to show login popup when "Sign in" is clicked)
const Navbar = ({ setShowLogin }) => {
  // Local state to track which menu item is active (default is "home")
  const [menu, setMenu] = useState('home');

  // Get getTotalCartAmount function from StoreContext
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      {/* Logo with a link to home page */}
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>

      {/* Navigation Menu */}
      <ul className="navbar-menu">
        {/* Home link */}
        <li>
          <Link 
            to="/" 
            onClick={() => setMenu('home')} 
            className={menu === 'home' ? 'active' : ''}
          >
            home
          </Link>
        </li>

        {/* Menu link (scrolls to "explore-menu" section) */}
        <li>
          <a 
            href="#explore-menu" 
            onClick={() => setMenu('menu')} 
            className={menu === 'menu' ? 'active' : ''}
          >
            menu
          </a>
        </li>

        {/* Mobile App link (scrolls to "app-download" section) */}
        <li>
          <a 
            href="#app-download" 
            onClick={() => setMenu('mobile-app')} 
            className={menu === 'mobile-app' ? 'active' : ''}
          >
            mobile-app
          </a>
        </li>

        {/* Contact Us link (scrolls to "footer" section) */}
        <li>
          <a 
            href="#footer" 
            onClick={() => setMenu('contact-us')} 
            className={menu === 'contact-us' ? 'active' : ''}
          >
            contact us
          </a>
        </li>
      </ul>

      {/* Right-side section of Navbar */}
      <div className="navbar-right">
        {/* Search icon */}
        <img src={assets.search_icon} alt="search" />

        {/* Cart (basket) icon with notification dot */}
        <div className="navbar-search-icon">
          {/* Clicking basket goes to /cart page */}
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket" />
          </Link>

          {/* Show dot if cart has items (getTotalCartAmount > 0) */}
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {/* Sign in button → opens login modal */}
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

// Export Navbar so it can be used in App
export default Navbar;
