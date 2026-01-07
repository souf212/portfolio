import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css'; // Modular CSS

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    EL-OTMANI.
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    Je transforme des besoins métier en solutions web performantes.
                </motion.h2>


                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <a href="#projects" className="cta-button">Voir mes réalisations</a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
