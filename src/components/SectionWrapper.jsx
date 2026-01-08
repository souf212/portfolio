import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SectionWrapper = ({ children, className, id }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={className}
            id={id}
        >
            {children}
        </motion.div>
    );
};

export default SectionWrapper;
