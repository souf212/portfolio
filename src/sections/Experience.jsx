import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  fadeInUp,
  staggerContainer,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    period: "2023 — Présent",
    role: "Cycle d'Ingénieur - Génie Informatique",
    company: "École des Hautes Études d'Ingénierie, Oujda",
    description:
      "Formation d'ingénieur en génie informatique avec spécialisation en développement full-stack et DevOps. Développement de 5+ applications complètes couvrant Spring Boot, ASP.NET Core, Jakarta EE et React.",
    achievements: [
      "Développé Chat temps réel (Spring Boot/WebSocket), SmartHR Manager (ASP.NET/Python)",
      "Maîtrise architectures microservices: Docker, Kubernetes, Jenkins, Ansible",
      "Expertise backend multi-frameworks: Spring Boot, ASP.NET Core, Jakarta EE",
      "Compétences DevOps complètes: CI/CD, monitoring (Prometheus/Grafana)",
    ],
    technologies: ["Spring Boot", "ASP.NET Core", "React", "Docker", "Kubernetes", "Python"],
    current: true,
  },
  {
    period: "2021 — 2023",
    role: "Licence Professionnelle - Réseaux & Télécommunications",
    company: "Faculté des Sciences, Rabat",
    description:
      "Formation spécialisée en réseaux informatiques, télécommunications et développement d'applications d'entreprise. Projets Jakarta EE avec architectures MVC et intégration de bases de données.",
    achievements: [
      "Projets Jakarta EE: CRM gestion clients/factures, Système de gestion hôtelière",
      "Maîtrise architectures web d'entreprise: MVC, REST API, Servlets/JSP",
      "Expertise JPA/Hibernate pour persistance et gestion transactionnelle",
      "Formation systèmes distribués, protocoles réseau et sécurité",
    ],
    technologies: ["Jakarta EE", "JPA", "Hibernate", "MySQL", "PrimeFaces", "Servlets"],
    current: false,
  },
  {
    period: "2019 — 2021",
    role: "BTS - Systèmes & Réseaux Informatiques",
    company: "Lycée Tech Maghreb Arabi, Oujda",
    description:
      "Formation technique en systèmes et réseaux informatiques. Fondements de programmation web, administration système et premiers projets full-stack avec PHP et MySQL.",
    achievements: [
      "Développement Site Web Gym (PHP/MySQL) avec système de gestion responsive",
      "Apprentissage fondamentaux web: HTML5, CSS3, JavaScript, programmation orientée objet",
      "Administration serveurs web (Apache) et bases de données relationnelles",
      "Formation systèmes d'exploitation (Linux/Windows) et réseaux TCP/IP",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Linux"],
    current: false,
  },
  {
    period: "2017 — 2018",
    role: "Baccalauréat - Sciences Mathématiques",
    company: "Lycée Othman Ibn Affan, BeniAnsar",
    description:
      "Diplôme de baccalauréat en sciences mathématiques, établissant les fondations analytiques et logiques pour une carrière en ingénierie informatique.",
    achievements: [
      "Formation rigoureuse en mathématiques et sciences",
      "Développement de la pensée analytique et résolution de problèmes",
      "Bases solides pour études supérieures en informatique et ingénierie",
    ],
    technologies: ["Mathématiques", "Physique", "Sciences"],
    current: false,
  },
];

export const Experience = () => {
  const [ref, isInView] = useScrollAnimation({ amount: 0.2 });
  const timelineRef = useRef(null);

  // Scroll-based timeline draw effect
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="py-32 relative overflow-hidden"
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-16"
          variants={staggerContainer}
        >
          <motion.span
            className="text-secondary-foreground text-sm font-medium tracking-wider uppercase"
            variants={fadeIn}
          >
            Parcours Académique
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground"
            variants={fadeInUp}
          >
            Du lycée à l'{" "}
            <span className="font-serif italic font-normal text-white">
              école d'ingénieurs.
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground"
            variants={fadeIn}
          >
            A timeline of growth, impact, and continuous learning—from freelancing
            to leading teams building products at scale.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2 overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-primary/70 via-primary/30 to-transparent timeline-glow"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Experience Items */}
          <motion.div
            className="space-y-12"
            variants={staggerContainer}
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8"
                variants={idx % 2 === 0 ? slideInLeft : slideInRight}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  {exp.current && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"
                      animate={{ scale: [1, 2, 1], opacity: [0.75, 0, 0.75] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0
                    ? "md:pr-16 md:text-right"
                    : "md:col-start-2 md:pl-16"
                    }`}
                >
                  <motion.div
                    className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 cursor-pointer"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground mb-3">{exp.company}</p>

                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className={`space-y-2 mb-4 ${idx % 2 === 0 ? "md:text-right" : ""}`}>
                      <p className="text-xs uppercase tracking-wider text-primary font-medium">
                        Key Impact
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {exp.achievements.map((achievement, aIdx) => (
                          <li key={aIdx} className={`flex gap-2 ${idx % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}>
                            <span className="text-primary flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div
                      className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
