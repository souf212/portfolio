import React, { useState } from 'react';
import './Header.css'; // Modular CSS
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            className="header"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="logo">Soufiane</div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#about" onClick={() => setIsOpen(false)}>À propos</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projets</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </nav>
        </motion.header>
    );
};

export default Header;
