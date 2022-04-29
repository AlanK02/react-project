import React from 'react';
import { NavLink } from 'react-router-dom';
function Header() {
    return (<header>

        <a href="/#" className="logo"><i className="fas fa-utensils"></i>baursak</a>
    
        <div id="menu-bar" className="fas fa-bars"></div>
    
        <nav className="navbar">
            <a href="#home">home</a>
            <a href="#speciality">speciality</a>
            <a href="#popular">popular</a>
            <a href="#review">review</a>
            <a href="#order">order</a>
            <NavLink to="/login" activeStyle>log out</NavLink>
        </nav>
    </header>
    );
}

export default Header;
