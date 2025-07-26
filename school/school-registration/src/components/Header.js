import React from 'react';
import logo from '../assets/logo.svg';
import './main.css';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="School Registration Logo" className="logo" />
            <nav className="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#registration">Register</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;