import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Custom hook for scroll-triggered animations
 * 
 * Uses Framer Motion's useInView to detect when elements enter the viewport
 * and automatically respects user's motion preferences.
 * 
 * @param {Object} options - Configuration options
 * @param {boolean} options.once - Only trigger animation once (default: true)
 * @param {number} options.amount - How much of element must be visible (0-1, default: 0.3)
 * @param {string} options.margin - Margin around viewport for triggering (default: "0px")
 * @returns {[React.RefObject, boolean]} - [ref to attach to element, isInView boolean]
 * 
 * @example
 * const [ref, isInView] = useScrollAnimation({ once: true, amount: 0.5 });
 * 
 * <motion.div
 *   ref={ref}
 *   initial={{ opacity: 0, y: 50 }}
 *   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
 * >
 *   Content
 * </motion.div>
 */
export const useScrollAnimation = (options = {}) => {
    const {
        once = true,
        amount = 0.3,
        margin = "0px 0px -100px 0px", // Start animation slightly before element fully visible
    } = options;

    const ref = useRef(null);
    const isInView = useInView(ref, {
        once,
        amount,
        margin,
    });

    return [ref, isInView];
};

/**
 * Hook to detect if user prefers reduced motion
 * Updates when system preference changes
 * 
 * @returns {boolean} - True if user prefers reduced motion
 */
export const usePrefersReducedMotion = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useRef(
        typeof window !== "undefined"
            ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
            : false
    ).current;

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        const handleChange = (event) => {
            setPrefersReducedMotion(event.matches);
        };

        // Modern browsers
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
        // Fallback for older browsers
        else {
            mediaQuery.addListener(handleChange);
            return () => mediaQuery.removeListener(handleChange);
        }
    }, []);

    return prefersReducedMotion;
};

/**
 * Hook to detect mobile/tablet devices
 * Useful for conditionally rendering or simplifying animations
 * 
 * @returns {boolean} - True if on mobile/tablet
 */
export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useRef(
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    ).current;

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
};
