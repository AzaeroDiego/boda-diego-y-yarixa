import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';
import heroCoverLight from '../assets/layers/hero-cover-light.png';

function FloatingDust() {
  return (
    <>
      {Array.from({ length: 30 }).map((_, index) => (
        <span
          key={index}
          className="hero-dust"
          style={{
            '--x': `${5 + ((index * 27) % 90)}%`,
            '--y': `${6 + ((index * 39) % 82)}%`,
            '--delay': `${(index % 10) * 0.5}s`,
            '--size': `${2 + (index % 3)}px`,
          }}
        />
      ))}
    </>
  );
}

function LayerImage({ className }) {
  return <img className={className} src={heroCoverLight} alt="" aria-hidden="true" />;
}

export default function HeroCinematicScene({ onOpen }) {
  const ref = useRef(null);
  const [opening, setOpening] = useState(false);
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 22, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 22, mass: 0.6 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgX = useTransform(smoothX, [-1, 1], reduceMotion ? [0, 0] : [5, -5]);
  const bgY = useTransform(smoothY, [-1, 1], reduceMotion ? [0, 0] : [4, -4]);
  const farX = useTransform(smoothX, [-1, 1], reduceMotion ? [0, 0] : [8, -8]);
  const architectureY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 22]);
  const frontX = useTransform(smoothX, [-1, 1], reduceMotion ? [0, 0] : [18, -18]);
  const frontY = useTransform(smoothY, [-1, 1], reduceMotion ? [0, 0] : [-10, 10]);
  const actionY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -12]);

  function handlePointerMove(event) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  function openInvitation() {
    setOpening(true);
    window.setTimeout(onOpen, reduceMotion ? 0 : 460);
  }

  return (
    <section
      className="hero-cinematic"
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onTouchEnd={resetPointer}
    >
      <motion.div className="layer layer-bg" style={{ x: bgX, y: bgY }}>
        <LayerImage className="hero-layer-image hero-layer-base" />
      </motion.div>
      <div className="layer layer-fog" />
      <motion.div className="layer layer-far-trees" style={{ x: farX }}>
        <LayerImage className="hero-layer-image hero-layer-far" />
      </motion.div>
      <motion.div className="layer layer-architecture" style={{ y: architectureY }}>
        <LayerImage className="hero-layer-image hero-layer-architecture" />
      </motion.div>
      <motion.div className="layer layer-front-left" style={{ x: frontX, y: frontY }}>
        <LayerImage className="hero-layer-image hero-layer-front-left" />
      </motion.div>
      <motion.div className="layer layer-front-right" style={{ x: frontX, y: frontY }}>
        <LayerImage className="hero-layer-image hero-layer-front-right" />
      </motion.div>
      <motion.div className="layer layer-front-bottom" style={{ y: frontY }}>
        <LayerImage className="hero-layer-image hero-layer-front-bottom" />
      </motion.div>
      <div className="layer layer-frame" />
      <div className="layer layer-particles">
        <FloatingDust />
      </div>
      <motion.div
        className="hero-content"
        style={{ y: actionY }}
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="hero-open-button" type="button" onClick={openInvitation}>
          {'Abrir invitaci\u00f3n'}
        </button>
      </motion.div>
      <motion.div
        className="poster-transition"
        aria-hidden="true"
        animate={{ opacity: opening ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
      />
    </section>
  );
}
