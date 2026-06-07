import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useMemo, useRef, useState } from 'react';
import heroCoverReference from '../assets/layers/hero-cover-reference.png';

const cinematicEase = [0.22, 1, 0.36, 1];

export default function HeroCinematicScene({ config, onOpen }) {
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

  const backgroundX = useTransform(smoothX, [-1, 1], reduceMotion ? [0, 0] : [10, -10]);
  const backgroundY = useTransform(smoothY, [-1, 1], reduceMotion ? [0, 0] : [7, -7]);
  const midX = useTransform(smoothX, [-1, 1], reduceMotion ? [0, 0] : [18, -18]);
  const midY = useTransform(smoothY, [-1, 1], reduceMotion ? [0, 0] : [12, -12]);
  const frontX = useTransform(smoothX, [-1, 1], reduceMotion ? [0, 0] : [30, -30]);
  const frontY = useTransform(smoothY, [-1, 1], reduceMotion ? [0, 0] : [18, -18]);
  const frameX = useTransform(smoothX, [-1, 1], reduceMotion ? [0, 0] : [-6, 6]);
  const frameY = useTransform(smoothY, [-1, 1], reduceMotion ? [0, 0] : [-4, 4]);

  const heroScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.04, 1.13]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.82, 1], [1, 0.82, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -42]);
  const contentScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 0.94]);

  const particles = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => ({
        id: index,
        x: 5 + ((index * 29) % 90),
        y: 6 + ((index * 47) % 86),
        size: 2 + (index % 5),
        delay: (index % 12) * 0.42,
        duration: 8 + (index % 7),
      })),
    [],
  );

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
    window.setTimeout(onOpen, reduceMotion ? 0 : 820);
  }

  return (
    <section
      className="hero-cinematic-v2"
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onTouchEnd={resetPointer}
    >
      <motion.div className="hero-depth-stage" style={{ opacity: heroOpacity }}>
        <motion.img
          className="hero-layer hero-layer-bg"
          src={heroCoverReference}
          alt=""
          draggable="false"
          aria-hidden="true"
          style={{ x: backgroundX, y: backgroundY, scale: heroScale }}
          initial={reduceMotion ? false : { opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
          animate={reduceMotion ? {} : { opacity: 1, scale: 1.04, filter: 'blur(0px)' }}
          transition={{ duration: 1.55, ease: cinematicEase }}
        />

        <div className="hero-layer hero-layer-tonal-wash" aria-hidden="true" />
        <div className="hero-layer hero-layer-vignette" aria-hidden="true" />
        <div className="hero-layer hero-layer-fog hero-layer-fog-a" aria-hidden="true" />
        <div className="hero-layer hero-layer-fog hero-layer-fog-b" aria-hidden="true" />

        <motion.div className="hero-layer hero-layer-portal" style={{ x: midX, y: midY }} aria-hidden="true">
          <img src={heroCoverReference} alt="" draggable="false" />
        </motion.div>

        <motion.div className="hero-layer hero-botanical-left" style={{ x: frontX, y: frontY }} aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </motion.div>

        <motion.div className="hero-layer hero-botanical-right" style={{ x: frontX, y: frontY }} aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </motion.div>

        <motion.div className="hero-layer hero-botanical-bottom" style={{ x: frontX, y: frontY }} aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </motion.div>

        <motion.div className="hero-layer hero-gold-frame" style={{ x: frameX, y: frameY }} aria-hidden="true">
          <span className="hero-frame-corner corner-tl" />
          <span className="hero-frame-corner corner-tr" />
          <span className="hero-frame-corner corner-bl" />
          <span className="hero-frame-corner corner-br" />
        </motion.div>

        <motion.div className="hero-layer hero-particles" style={{ x: frameX, y: frameY }} aria-hidden="true">
          {particles.map((particle) => (
            <span
              key={particle.id}
              style={{
                '--x': `${particle.x}%`,
                '--y': `${particle.y}%`,
                '--s': `${particle.size}px`,
                '--d': `${particle.delay}s`,
                '--t': `${particle.duration}s`,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          className="hero-content-cinematic"
          style={{ y: contentY, scale: contentScale }}
          initial={reduceMotion ? false : { opacity: 0, y: 28, filter: 'blur(10px)' }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.45, duration: 1.25, ease: cinematicEase }}
        >
          <motion.p
            className="hero-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.85, ease: cinematicEase }}
          >
            Nuestra boda
          </motion.p>

          <motion.div
            className="hero-monogram-cinematic"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.82, rotate: -2 }}
            animate={reduceMotion ? {} : { opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.72, duration: 1.1, ease: cinematicEase }}
          >
            {config.monogram || 'D & Y'}
          </motion.div>

          <motion.h1
            className="hero-names-cinematic"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 1.08, ease: cinematicEase }}
          >
            <span>{config.groomName}</span>
            <em>&</em>
            <span>{config.brideName}</span>
          </motion.h1>

          <motion.p
            className="hero-date-cinematic"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 1.28, duration: 0.9, ease: cinematicEase }}
          >
            {config.dateLabel}
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-actions-cinematic"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: 1.65, duration: 0.75, ease: cinematicEase }}
        >
          <button type="button" onClick={openInvitation} aria-label="Abrir invitación de boda">
            <span>Abrir invitación</span>
          </button>
          <div className="hero-scroll-cue" aria-hidden="true">
            <span />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-opening-curtain"
        aria-hidden="true"
        animate={{ opacity: opening ? 1 : 0, scale: opening ? 1 : 1.12 }}
        transition={{ duration: reduceMotion ? 0 : 0.78, ease: cinematicEase }}
      />
    </section>
  );
}
