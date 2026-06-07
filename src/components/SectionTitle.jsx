import { motion, useReducedMotion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, children }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="section-heading"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.55 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <p className="section-description">{children}</p>}
    </motion.div>
  );
}
