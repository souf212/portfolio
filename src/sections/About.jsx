import { Code2, Lightbulb, Rocket, Users, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  fadeIn,
  cardHover,
} from "@/lib/motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Building maintainable systems with SOLID principles, modular design, and comprehensive testing strategies.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Delivering sub-second load times through code-splitting, lazy loading, and strategic caching.",
  },
  {
    icon: Users,
    title: "Cross-Functional Collaboration",
    description: "Bridging design, product, and engineering to ship features that delight users and drive business value.",
  },
  {
    icon: Target,
    title: "Result-Oriented Approach",
    description:
      "Focusing on measurable impact—faster time to market, improved conversion rates, reduced technical debt.",
  },
];

export const About = () => {
  const [ref, isInView] = useScrollAnimation({ amount: 0.3 });

  return (
    <motion.section
      id="about"
      ref={ref}
      className="py-32 relative overflow-hidden"
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                What I Bring
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground"
              variants={fadeInUp}
            >
              Engineering solutions that{" "}
              <span className="font-serif italic font-normal text-white">
                scale, perform, and delight.
              </span>
            </motion.h2>

            <motion.div
              className="space-y-4 text-muted-foreground"
              variants={staggerContainer}
            >
              <motion.p variants={fadeIn}>
                With 5+ years building production systems, I've learned that great
                software isn't just about clean code—it's about <strong>solving real problems</strong> for
                real users. My approach combines technical rigor with a deep understanding
                of user needs and business objectives.
              </motion.p>
              <motion.p variants={fadeIn}>
                I specialize in the full spectrum: frontend architectures with React and Next.js,
                backend systems with Node.js and databases, cloud infrastructure, and everything in between.
                But what excites me most is the <strong>intersection of performance and user experience</strong>—building
                applications that are both blazingly fast and a joy to use.
              </motion.p>
              <motion.p variants={fadeIn}>
                Whether it's reducing bundle size by 50%, implementing server-side rendering for SEO,
                or architecting scalable microservices—I focus on <strong>measurable impact</strong> that moves
                the needle for teams and businesses.
              </motion.p>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-6 glow-border"
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to craft digital experiences that users love,
                systems that teams trust, and code that stands the test of time."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={staggerContainer}
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                className="glass p-6 rounded-2xl cursor-pointer"
                variants={fadeIn}
                initial="rest"
                whileHover="hover"
                custom={idx}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  variants={cardHover}
                  whileHover={{
                    backgroundColor: "rgba(32, 178, 166, 0.2)",
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
