import { motion, useReducedMotion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, children }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="mx-auto mb-9 max-w-sm text-center"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.55 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="font-display text-4xl leading-none text-ivory">{title}</h2>
      {children && (
        <p className="mt-4 text-sm leading-7 text-ivory/70">{children}</p>
      )}
    </motion.div>
  );
}
