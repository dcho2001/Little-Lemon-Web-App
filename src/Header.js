import React from "react";
import logo from "./icons_assets/Logo.svg";
import Nav from "./Nav";

const Header = () => {
    return(
        <header role="banner">
            <a href="/"><img src={logo} alt="Little Lemon Logo"></img></a>
            <Nav className="header-nav" aria-label="Main navigation"></Nav>
        </header>
    );
};

export default Header;