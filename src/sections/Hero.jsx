import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
  Sparkles,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import {
  fadeInUp,
  staggerContainer,
  fadeIn,
  buttonHover,
  headlineContainer,
  wordReveal,
} from "@/lib/motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  "Java",
  "C#",
  "Spring Boot",
  "ASP.NET Core",
  "Jakarta EE",
  "React",
  "Docker",
  "Kubernetes",
  "MySQL",
  "MongoDB",
  "SQL Server",
  "Python",
  "Jenkins",
  "Ansible",
  "Prometheus",
  "Grafana",
  "Git",
  "Linux",
];

export const Hero = () => {
  const [contentRef, contentInView] = useScrollAnimation({ amount: 0.2 });

  // Split headline into words for animation
  const headlineWords = [
    "I", "build", "performant,", "scalable,", "and", "beautiful", "web", "experiences"
  ];

  return (
    <motion.section
      ref={contentRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      initial="initial"
      animate={contentInView ? "animate" : "initial"}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Animated Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 20, -15, 30, 0],
              y: [0, -30, -20, 10, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div variants={fadeIn}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Fullstack-Oriented
              </span>
            </motion.div>

            {/* Headline with word-by-word reveal */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                variants={headlineContainer}
              >
                {headlineWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordReveal}
                    className={
                      word === "beautiful"
                        ? "text-primary glow-text inline-block mr-3"
                        : "inline-block mr-3"
                    }
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground max-w-lg"
                variants={fadeInUp}
              >
                A Software Engineer specializing in modern web technologies,
                with a passion for building scalable systems and pixel-perfect
                user interfaces. I transform complex problems into elegant,
                production-ready solutions.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <motion.a
                  href="#projects"
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button size="lg">
                    View My Work <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.a>
              </motion.div>

              <motion.div variants={fadeIn}>
                <motion.a
                  href="#"
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <AnimatedBorderButton>
                    <Download className="w-5 h-5" />
                    Download CV
                  </AnimatedBorderButton>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              variants={staggerContainer}
            >
              <motion.span
                className="text-sm text-muted-foreground"
                variants={fadeIn}
              >
                Let's connect:
              </motion.span>
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  variants={fadeIn}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Value Props */}
            <motion.div
              className="flex flex-wrap gap-6 pt-4"
              variants={staggerContainer}
            >
              {[
                { icon: Sparkles, label: "Clean Architecture" },
                { icon: Sparkles, label: "Performance-First" },
                { icon: Sparkles, label: "User-Centric Design" },
              ].map((prop, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  variants={fadeIn}
                >
                  <prop.icon className="w-4 h-4 text-primary" />
                  <span>{prop.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="relative"
            variants={fadeInUp}
          >
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="relative glass rounded-3xl p-2 glow-border"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src="/profile-photo.jpg"
                  alt="Software Engineer Profile"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge - Available */}
                <motion.div
                  className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Open to opportunities
                    </span>
                  </div>
                </motion.div>

                {/* Stats Badge - Experience */}
                <motion.div
                  className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Experience
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Marquee */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          whileHover={{ y: 5 }}
        >
          <span className="text-xs uppercase tracking-wider">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};
