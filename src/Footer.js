import React from "react";
import logo from "./icons_assets/Logo.svg"

const Footer = () => {
    return(
        <footer>
            <div className="footer-nav">
                <ul>
                    <h6>Navigation</h6>
                    <li><a href="/">Home</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/reservation">Reservation</a></li>
                    <li><a href="/order">Order To-Go</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
            <div className="social-media">
                <ul>
                    <h6>Social Media</h6>
                    <li><a href="https://facebook.com">FaceBook</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://x.com">Twitter / X</a></li>
                    <li><a href="https://linkedin.com">LinkedIn</a></li>
                </ul>
            </div>
            <div className="contact">
                <ul>
                    <h6>Contact</h6>
                    <li>Address: 69 O Block Street, Chicago, IL</li>
                    <li>Phone Number: +1 (696)-555-1234</li>
                    <li>Email: contact@littlelemon.com</li>
                </ul>
            </div>
            <div className="footer-logo">
                <a href="/"><img src={logo} alt="Little Lemon Logo"></img></a>
                <p>Copyright © 2024 Little Lemon</p>
            </div>
        </footer>
    );
};

export default Footer;