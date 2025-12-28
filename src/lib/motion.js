/**
 * Centralized Motion Design System
 * 
 * This file contains all animation variants, easing configurations,
 * and timing constants for consistent motion design across the portfolio.
 * 
 * Design Principles:
 * - Slow & Fluid: Premium feel, not rushed
 * - Natural Easing: Spring physics for interactions, easeOut for reveals
 * - Purposeful: Every animation serves the storytelling
 */

// ============================================
// EASING PRESETS
// ============================================

export const easings = {
    // Smooth ease-out for reveals and transitions
    smooth: [0.33, 1, 0.68, 1],

    // Natural spring for interactive elements
    spring: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
    },

    // Gentle spring for subtle movements
    gentleSpring: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        mass: 0.8,
    },

    // Bouncy spring for playful elements
    bouncySpring: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.5,
    },
};

// ============================================
// TIMING CONSTANTS
// ============================================

export const durations = {
    fast: 0.3,      // Micro-interactions (button hover)
    normal: 0.6,    // Standard element animations
    slow: 0.8,      // Section reveals, important elements
    verySlow: 1.0,  // Large transitions
};

export const staggerDelays = {
    tight: 0.05,    // Very close timing
    normal: 0.1,    // Standard stagger
    loose: 0.15,    // More pronounced cascade
};

// ============================================
// REUSABLE ANIMATION VARIANTS
// ============================================

/**
 * Fade in with upward movement and blur
 * Classic reveal animation for text and content blocks
 */
export const fadeInUp = {
    initial: {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
    },
    animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
    },
    exit: {
        opacity: 0,
        y: -20,
        filter: "blur(5px)",
    },
    transition: {
        duration: durations.slow,
        ease: easings.smooth,
    },
};

/**
 * Fade in from below (more subtle than fadeInUp)
 */
export const fadeIn = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    transition: {
        duration: durations.normal,
        ease: easings.smooth,
    },
};

/**
 * Scale in with fade (for images and cards)
 */
export const scaleIn = {
    initial: {
        opacity: 0,
        scale: 0.95,
    },
    animate: {
        opacity: 1,
        scale: 1,
    },
    transition: {
        duration: durations.normal,
        ease: easings.smooth,
    },
};

/**
 * Slide in from right (for side panels, cards)
 */
export const slideInRight = {
    initial: {
        opacity: 0,
        x: 60,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    transition: {
        duration: durations.slow,
        ease: easings.smooth,
    },
};

/**
 * Slide in from left
 */
export const slideInLeft = {
    initial: {
        opacity: 0,
        x: -60,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    transition: {
        duration: durations.slow,
        ease: easings.smooth,
    },
};

/**
 * Container for staggered children animations
 * Use this on parent elements to orchestrate child reveals
 */
export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: staggerDelays.normal,
            delayChildren: 0.1,
        },
    },
};

/**
 * Tight stagger for closer timing
 */
export const staggerContainerTight = {
    animate: {
        transition: {
            staggerChildren: staggerDelays.tight,
        },
    },
};

/**
 * Loose stagger for more pronounced cascade
 */
export const staggerContainerLoose = {
    animate: {
        transition: {
            staggerChildren: staggerDelays.loose,
            delayChildren: 0.2,
        },
    },
};

// ============================================
// HOVER & INTERACTION VARIANTS
// ============================================

/**
 * Button hover effect with lift and glow
 */
export const buttonHover = {
    rest: {
        scale: 1,
        y: 0,
    },
    hover: {
        scale: 1.02,
        y: -2,
        transition: {
            duration: durations.fast,
            ease: easings.smooth,
        },
    },
    tap: {
        scale: 0.98,
        y: 0,
    },
};

/**
 * Card hover with depth effect
 */
export const cardHover = {
    rest: {
        y: 0,
        scale: 1,
    },
    hover: {
        y: -8,
        scale: 1.01,
        transition: easings.gentleSpring,
    },
};

/**
 * Icon hover - subtle scale and rotate
 */
export const iconHover = {
    rest: {
        scale: 1,
        rotate: 0,
    },
    hover: {
        scale: 1.1,
        rotate: 5,
        transition: easings.bouncySpring,
    },
};

// ============================================
// SPECIALIZED VARIANTS
// ============================================

/**
 * Draw line animation (for timeline, progress bars)
 * Use with scaleX on a line element
 */
export const drawLine = {
    initial: {
        scaleX: 0,
        transformOrigin: "left",
    },
    animate: {
        scaleX: 1,
        transition: {
            duration: durations.verySlow,
            ease: easings.smooth,
        },
    },
};

/**
 * Parallax effect (slower movement for background elements)
 * To be used with scroll-based transforms
 */
export const parallaxSlow = (offset = 0.5) => ({
    transform: `translateY(${offset * 100}%)`,
});

/**
 * Word-by-word reveal for headlines
 * Apply to individual words wrapped in motion.span
 */
export const wordReveal = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
};

/**
 * Headline container for word reveals
 */
export const headlineContainer = {
    animate: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Creates a custom delay for sequential animations
 */
export const createDelay = (index, baseDelay = 0.1) => ({
    transition: {
        delay: index * baseDelay,
    },
});

/**
 * Checks if user prefers reduced motion
 */
export const shouldReduceMotion = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Returns simplified variant if user prefers reduced motion
 */
export const getVariantSafe = (variant, reducedVariant = null) => {
    if (shouldReduceMotion()) {
        return reducedVariant || {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.2 },
        };
    }
    return variant;
};

/**
 * Get viewport-aware animation config
 * Reduces animation complexity on mobile
 */
export const getResponsiveVariant = (variant, isMobile = false) => {
    if (isMobile) {
        // Simplify animations on mobile
        return {
            ...variant,
            transition: {
                ...variant.transition,
                duration: (variant.transition?.duration || durations.normal) * 0.8,
            },
        };
    }
    return variant;
};
