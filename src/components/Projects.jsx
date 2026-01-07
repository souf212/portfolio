import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import './Projects.css'; // Modular CSS

const projects = [
    {
        id: 0, // Featured Project
        title: "IoT Climate Monitor",
        subtitle: "Surveillance Hybride Edge/Cloud",
        description: "Solution complète de monitoring environnemental critique (Température/Humidité) connectant des capteurs physiques à une infrastructure Cloud hybride. Intègre une gestion d'alertes intelligente multi-canaux (Twilio, Telegram) et un contrôle bidirectionnel.",
        problem: "Risque critique de perte d'équipements (Salles Serveurs) par manque de supervision 24/7.",
        solution: "Architecture résiliente Edge -> Cloud avec escalade d'alertes et pilotage à distance.",
        stack: ["Django DRF", "React", "MQTT", "ESP8266", "Twilio"],
        architecture: "Hybride Edge/Cloud",
        links: { github: "https://github.com/souf212/iot-monitoring", demo: "https://iot-monitoring-iota.vercel.app" }
    },
    {
        id: 1,
        title: "Projet Nexus",
        subtitle: "Gestion de Projets Microservices",
        description: "Une solution distribuée pour orchestrer des équipes agiles. L'objectif était de décomposer une application monolithique en services autonomes pour améliorer la maintenabilité.",
        problem: "Monolithe difficile à maintenir et à scaler.",
        solution: "Migration vers une architecture microservices avec communication asynchrone.",
        stack: ["Spring Boot", "React", "Docker", "JWT", "SQLite"],
        architecture: "Microservices",
        links: { github: "https://github.com/souf212/Project-Management-CRM", demo: "#" }
    },
    {
        id: 2,
        title: "SyncFlow",
        subtitle: "Chat & Notifications Temps Réel",
        description: "Plateforme de communication instantanée pour entreprises. Le défi technique principal était d'assurer une latence minimale pour les messages et notifications.",
        problem: "Besoin de communication instantanée sans rechargement.",
        solution: "Utilisation de WebSockets pour un flux bidirectionnel constant.",
        stack: ["Spring Boot", "React", "WebSockets", "MongoDB"],
        architecture: "Event-Driven",
        links: { github: "https://github.com/souf212/Web-Chat", demo: "#" }
    },
    {
        id: 3,
        title: "HR Master",
        subtitle: "Digitalisation RH Complète",
        description: "Système complet de gestion des ressources humaines. Automatisation du calcul de la paie et suivi des présences via reconnaissance faciale (prototype).",
        problem: "Processus RH manuels et sujets aux erreurs.",
        solution: "Automatisation des workflows et centralisation des données.",
        stack: ["ASP.NET Core", "Entity Framework", "SQL Server", "Python"],
        architecture: "MVC / N-Tier",
        links: { github: "https://github.com/souf212/SmartHR-Manager", demo: "#" }
    },
    {
        id: 4,
        title: "CRM Elite",
        subtitle: "Gestion Clients & DevOps",
        description: "CRM robuste intégrant un pipeline CI/CD complet. Ce projet sert de démonstrateur pour mes compétences en automatisation de déploiement.",
        problem: "Déploiements manuels lents et risqués.",
        solution: "Pipeline CI/CD complet avec tests automatisés.",
        stack: ["Symfony", "Docker", "GitHub Actions", "MySQL"],
        architecture: "Monolithe Modulaire",
        links: { github: "https://github.com/souf212/CRM-Solution", demo: "#" }
    },
    {
        id: 5,
        title: "Hotel Manager",
        subtitle: "Réservation & Administration",
        description: "Système de réservation hôtelière classique mais robuste, mettant l'accent sur la gestion des transactions et la disponibilité en temps réel.",
        problem: "Gestion des conflits de réservation.",
        solution: "Gestion transactionnelle stricte des réservations.",
        stack: ["Jakarta EE", "JSP", "Tomcat", "MySQL"],
        architecture: "Layered",
        links: { github: "https://github.com/souf212/Gestion-d-hotel", demo: "#" }
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

const Projects = () => {
    return (
        <SectionWrapper id="projects" className="section projects">
            <h2 className="section-title">Réalisations Techniques</h2>
            <motion.div
                className="projects-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        variants={item}
                        className={`project-card-spotlight ${index % 2 === 0 ? 'staggered-left' : 'staggered-right'}`}
                    >
                        {/* Spotlight Effect overlay handled in CSS */}
                        <div className="spotlight-overlay"></div>

                        <div className="card-content-spotlight">
                            <div className="card-top">
                                <span className="folder-icon">📂</span>
                                <div className="card-header-text">
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-subtitle">{project.subtitle}</p>
                                </div>
                            </div>

                            <div className="card-main">
                                <p className="card-description">{project.description}</p>

                                <div className="card-tech-grid">
                                    <div className="tech-item">
                                        <span className="tech-label">Problème</span>
                                        <span className="tech-value">{project.problem}</span>
                                    </div>
                                    <div className="tech-item">
                                        <span className="tech-label">Solution</span>
                                        <span className="tech-value">{project.solution}</span>
                                    </div>
                                    <div className="tech-item">
                                        <span className="tech-label">Architecture</span>
                                        <span className="tech-value">{project.architecture}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer-spotlight">
                                <div className="tech-pill-container">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="tech-pill">{tech}</span>
                                    ))}
                                </div>
                                <a href={project.links.github} target="_blank" className="github-link">
                                    Voir sur GitHub <span>→</span>
                                </a>
                                <a href={project.links.demo} target="_blank" className="github-link">
                                    Voir le demo <span>→</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
};

export default Projects;
