import { ArrowUpRight, Github, Target, Lightbulb, TrendingUp } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  fadeIn,
  cardHover,
} from "@/lib/motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Application Chat & Notifications Temps Réel",
    tagline: "Real-time messaging & notification system",
    problem: "Delayed internal communication and lack of real-time notifications caused missed messages and low team responsiveness.",
    solution: "Built a real-time chat and notification system using WebSockets with Spring Boot, enabling instant message delivery and live status updates. Implemented event-driven communication and optimized message broadcasting for scalability.",
    image: "/projects/project1.png",
    technologies: ["Spring Boot", "WebSocket", "React", "REST API", "JWT"],
    results: [
      "Message delivery latency <200ms",
      "Improved team responsiveness",
      "Stable handling of concurrent users",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "SmartHR Manager",
    tagline: "Enterprise Human Resources Management Platform",
    problem: "Manual and fragmented HR processes caused inefficiencies in employee management, attendance tracking, payroll, and leave handling.",
    solution: "Designed SmartHR Manager with ASP.NET Core, integrating advanced automation features. Consolidated employee management, scheduling, payroll, and attendance into a single secure application. Integrated facial recognition with Python for accurate attendance tracking and automated PDF generation for contracts.",
    image: "/projects/project2.png",
    technologies: ["ASP.NET Core", "C#", "SQL Server", "Python", "OpenCV", "Bootstrap"],
    results: [
      "Centralized all HR operations",
      "Reduced admin workload via automation",
      "Improved attendance accuracy with facial recognition",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "CRM Gestion Clients",
    tagline: "Customer relationship management system",
    problem: "Customer data was scattered across multiple tools, making follow-ups inefficient and limiting visibility on client interactions.",
    solution: "Designed and implemented a CRM system to centralize customer data, track interactions, and manage sales pipelines. Added dashboards for better decision-making and reporting using Jakarta EE with JPA/Hibernate.",
    image: "/projects/project3.png",
    technologies: ["Jakarta EE", "JPA", "Hibernate", "MySQL", "PrimeFaces"],
    results: [
      "Centralized customer information",
      "Improved client follow-up and tracking",
      "Better visibility on sales lifecycle",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Système Hôtelier",
    tagline: "Hotel management system",
    problem: "Hotel operations (reservations, room availability, billing) were handled manually, increasing errors and operational overhead.",
    solution: "Built a hotel management system to automate reservations, room management, and billing. Ensured data consistency and transactional reliability for bookings and payments using Jakarta EE with MVC architecture.",
    image: "/projects/project4.png",
    technologies: ["Jakarta EE", "Servlets", "JSP", "JPA", "MySQL"],
    results: [
      "Reduced booking errors",
      "Improved operational efficiency",
      "Faster check-in/check-out process",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Site Web Gym",
    tagline: "Fitness club website & management system",
    problem: "The gym lacked an online presence and a structured way to present services, schedules, and membership information.",
    solution: "Created a responsive website to showcase gym services, class schedules, and contact information. Added a simple backend to manage content and member inquiries using PHP and MySQL.",
    image: "/projects/project5.png",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    results: [
      "Improved online visibility",
      "Increased member inquiries",
      "Mobile-friendly user experience",
    ],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  const [ref, isInView] = useScrollAnimation({ amount: 0.2 });

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="py-32 relative overflow-hidden"
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mx-auto max-w-3xl mb-16"
          variants={staggerContainer}
        >
          <motion.span
            className="text-secondary-foreground text-sm font-medium tracking-wider uppercase"
            variants={fadeIn}
          >
            Case Studies
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground"
            variants={fadeInUp}
          >
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              solve real problems.
            </span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground"
            variants={fadeIn}
          >
            From concept to deployment—here's how I've tackled complex challenges
            and delivered measurable results for users and businesses.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group glass rounded-2xl overflow-hidden"
              variants={fadeIn}
              initial="rest"
              whileHover="hover"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.1 },
                  }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center gap-4"
                  initial={{ opacity: 0 }}
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                className="p-6 space-y-4"
                variants={cardHover}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.tagline}
                    </p>
                  </div>
                  <motion.div
                    variants={{
                      rest: { x: 0, y: 0 },
                      hover: { x: 4, y: -4 },
                    }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </motion.div>
                </div>

                {/* Case Study Details */}
                <div className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <Target className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground">Problem:</strong>{" "}
                      <span className="text-muted-foreground">{project.problem}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Lightbulb className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground">Solution:</strong>{" "}
                      <span className="text-muted-foreground">{project.solution}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground">Results:</strong>
                      <ul className="mt-1 space-y-1 text-muted-foreground">
                        {project.results.map((result, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-12"
          variants={fadeIn}
        >
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </motion.div>
      </div>
    </motion.section>
  );
};
