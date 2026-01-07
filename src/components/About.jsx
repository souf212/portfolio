import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import './About.css'; // Modular CSS

const About = () => {
    return (
        <SectionWrapper id="about" className="section about">
            <h2 className="section-title">À Propos & Compétences</h2>

            <div className="bento-grid">
                {/* Main Bio - Large Item */}
                <motion.div
                    className="bento-item large"
                    whileHover={{ scale: 1.01 }}
                >
                    <h3 style={{ color: '#64ffda', marginBottom: '1rem' }}>Mon Profil Ingénieur</h3>
                    <p style={{ color: '#8892b0', marginBottom: '1rem' }}>
                        Bonjour ! Je suis Ingénieur logiciel en dernière année du cycle ingénieur. Ma passion ? Transformer des problématiques métier complexes en solutions web robustes et élégantes.
                    </p>
                    <p style={{ color: '#8892b0' }}>
                        Au-delà du code, je m'intéresse à l'architecture logicielle, à la qualité du code et à l'automatisation. J'interviens aujourd'hui sur des projets full-stack ambitieux en alliant performance applicative et pratiques DevOps modernes (CI/CD, Docker).
                    </p>
                    <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(136, 146, 176, 0.2)', paddingTop: '1rem' }}>
                        <h4 style={{ fontSize: '0.9rem', color: '#e6f1ff' }}>Approche :</h4>
                        <p style={{ color: '#8892b0', fontSize: '0.9rem' }}>Architecture ( Hexagonale • Client–Serveur • MVC • N-Tiers • Microservices) • Clean Code • Scalabilité</p>
                    </div>
                </motion.div>

                {/* Backend Stack */}
                <motion.div
                    className="bento-item"
                    whileHover={{ scale: 1.02 }}
                >
                    <h4 style={{ color: '#ccd6f6', marginBottom: '1rem' }}>Backend Arsenal</h4>
                    <div className="tech-pill-container">
                        {['Java', 'Spring Boot', 'C#', '.NET Core', 'Jakarta EE'].map(tech => (
                            <span key={tech} className="tech-pill">{tech}</span>
                        ))}
                    </div>
                </motion.div>

                {/* Frontend Stack */}
                <motion.div
                    className="bento-item"
                    whileHover={{ scale: 1.02 }}
                >
                    <h4 style={{ color: '#ccd6f6', marginBottom: '1rem' }}>Frontend & UX</h4>
                    <div className="tech-pill-container">
                        {['React', 'JavaScript', 'Tailwind', 'Bootstrap', 'Framer Motion'].map(tech => (
                            <span key={tech} className="tech-pill">{tech}</span>
                        ))}
                    </div>
                </motion.div>

                {/* DevOps Stack */}
                <motion.div
                    className="bento-item"
                    whileHover={{ scale: 1.02 }}
                >
                    <h4 style={{ color: '#ccd6f6', marginBottom: '1rem' }}>DevOps & Cloud</h4>
                    <div className="tech-pill-container">
                        {['Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'Grafana'].map(tech => (
                            <span key={tech} className="tech-pill">{tech}</span>
                        ))}
                    </div>
                </motion.div>

                {/* Data & Tools */}
                <motion.div
                    className="bento-item"
                    whileHover={{ scale: 1.02 }}
                >
                    <h4 style={{ color: '#ccd6f6', marginBottom: '1rem' }}>Data & Outils</h4>
                    <div className="tech-pill-container">
                        {['MySQL', 'MongoDB', 'SQL Server', 'Git/GitHub', 'Linux'].map(tech => (
                            <span key={tech} className="tech-pill">{tech}</span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default About;
