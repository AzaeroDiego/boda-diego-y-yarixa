import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';
import heroCoverReference from '../assets/layers/hero-cover-reference.png';

export default function HeroCinematicScene({ config, onOpen }) {
  const ref = useRef(null);
  const [opening, setOpening] = useState(false);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageX = useTransform(pointerX, [-1, 1], reduceMotion ? [0, 0] : [7, -7]);
  const imageY = useTransform(pointerY, [-1, 1], reduceMotion ? [0, 0] : [5, -5]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1.015, 1.07],
  );
  const controlsY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -18],
  );

  function handlePointerMove(event) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  function openInvitation() {
    setOpening(true);
    window.setTimeout(onOpen, reduceMotion ? 0 : 520);
  }

  return (
    <section
      className="wedding-poster-hero"
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      <motion.img
        className="poster-hero-image"
        src={heroCoverReference}
        alt={`Invitaci\u00f3n de boda de ${config.groomName} y ${config.brideName}`}
        draggable="false"
        style={{ x: imageX, y: imageY, scale: imageScale }}
        initial={reduceMotion ? false : { opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
        animate={reduceMotion ? {} : { opacity: 1, scale: 1.015, filter: 'blur(0px)' }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="poster-vignette" aria-hidden="true" />
      <div className="poster-fog" aria-hidden="true" />
      <div className="poster-grain" aria-hidden="true" />

      <motion.div
        className="poster-actions"
        style={{ y: controlsY }}
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <button type="button" onClick={openInvitation}>
          {'Abrir invitaci\u00f3n'}
        </button>
      </motion.div>

      <motion.div
        className="poster-transition"
        aria-hidden="true"
        animate={{ opacity: opening ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </section>
  );
}
