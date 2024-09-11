import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Nav = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu open and close
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    // Function to close the menu when a link is clicked
    const closeMenu = () => {
        setIsOpen(false);
    }

    return(
        <nav className="header-nav">
            <div className="menu-icon" onClick={toggleMenu}>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
            </div>
            <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
                <li><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
                <li><Link to="/reservation" onClick={closeMenu}>Reservation</Link></li>
                <li><Link to="/order" onClick={closeMenu}>Order To-Go</Link></li>
                <li><Link to="/login" onClick={closeMenu}>Sign Up / Login</Link></li>
                <li className="close-btn"><button onClick={toggleMenu}>✕</button></li>
            </ul>
        </nav>
    );
};

export default Nav;
