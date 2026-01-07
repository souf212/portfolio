import React from 'react';
import './Footer.css'; // Modular CSS

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Soufiane. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
