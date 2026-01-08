const SectionWrapper = ({ children, className, id }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={className}
            id={id}
        >
            {children}
        </motion.div>
    );
};

export default SectionWrapper;
