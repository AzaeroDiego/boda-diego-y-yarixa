import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function BotanicalCorner({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 220 260"
      fill="none"
    >
      <path
        d="M116 252C101 211 98 174 111 141C124 108 153 83 201 67"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M112 142C76 130 48 105 28 66" stroke="currentColor" />
      <path d="M133 118C106 87 95 52 100 13" stroke="currentColor" />
      {[
        ['M67 116C42 115 24 128 13 154C41 158 59 145 67 116Z'],
        ['M97 96C73 78 67 55 81 28C105 47 111 69 97 96Z'],
        ['M139 104C143 75 160 55 190 45C189 75 171 94 139 104Z'],
        ['M151 150C173 132 197 130 219 144C197 164 174 166 151 150Z'],
        ['M105 178C80 167 56 171 34 190C60 203 83 198 105 178Z'],
      ].map(([d]) => (
        <path key={d} d={d} stroke="currentColor" strokeWidth="0.9" />
      ))}
    </svg>
  );
}

function PalaceEngraving({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 900 270"
      fill="none"
    >
      <path
        d="M58 238h784M96 238V119h132v119M248 238V86h154v152M422 238V112h56V80h42v32h57v126M598 238V84h154v154M772 238V119h32v119"
        stroke="currentColor"
        strokeWidth="5"
      />
      <path
        d="M82 119h166l-83-52-83 52ZM228 86h194l-97-58-97 58ZM578 84h194l-97-58-97 58ZM752 119h78l-39-30-39 30Z"
        stroke="currentColor"
        strokeWidth="4"
      />
      {Array.from({ length: 15 }).map((_, index) => {
        const x = 120 + index * 46;
        const y = index > 8 ? 123 : index > 3 ? 127 : 153;
        return (
          <path
            key={x}
            d={`M${x} 229v-46c0-18 11-31 24-31s24 13 24 31v46`}
            stroke="currentColor"
            strokeWidth="3"
          />
        );
      })}
      {Array.from({ length: 32 }).map((_, index) => (
        <path
          key={index}
          d={`M${80 + index * 23} 249c12-12 24-12 36 0`}
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.55"
        />
      ))}
    </svg>
  );
}

function EngravedForest({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 900 560"
      preserveAspectRatio="none"
      fill="none"
    >
      {Array.from({ length: 26 }).map((_, index) => {
        const x = -20 + index * 38;
        const height = 260 + (index % 6) * 38;
        return (
          <g key={x} opacity={0.38 + (index % 5) * 0.08}>
            <path
              d={`M${x + 22} 560C${x + 14} 420 ${x + 35} 270 ${x + 22} ${560 - height}`}
              stroke="currentColor"
              strokeWidth={index % 3 === 0 ? 7 : 4}
            />
            <path
              d={`M${x + 22} ${430 - (index % 4) * 28}c-42-50-18-99 58-144`}
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d={`M${x + 24} ${392 - (index % 5) * 19}c50-45 56-95 16-151`}
              stroke="currentColor"
              strokeWidth="1.7"
            />
            {Array.from({ length: 7 }).map((_, leaf) => (
              <path
                key={leaf}
                d={`M${x + 1 + leaf * 8} ${205 + leaf * 24}c24-21 56-19 78 4c-27 15-54 14-78-4Z`}
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

function Peacock({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 260 280" fill="none">
      <path d="M101 249c-6-71 8-132 44-184" stroke="currentColor" strokeWidth="4" />
      <path d="M103 248c-48-39-72-91-72-156 46 20 72 73 72 156Z" fill="currentColor" opacity="0.52" />
      {Array.from({ length: 12 }).map((_, index) => (
        <path
          key={index}
          d={`M104 238C${40 + index * 13} ${185 - index * 7} ${31 + index * 7} ${102 - index * 3} ${78 + index * 11} ${41 + index * 2}`}
          stroke="currentColor"
          strokeWidth="1.4"
          opacity="0.9"
        />
      ))}
      <path d="M145 66c34-13 59 6 60 41-24 3-48-7-60-41Z" fill="currentColor" opacity="0.64" />
      <path d="M181 76c12-22 30-33 55-34-7 22-24 34-55 34Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function RiverBoat({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 360 220" fill="none">
      <path d="M84 166c65 18 131 18 198 0-22 28-69 43-126 39-36-2-62-15-72-39Z" stroke="currentColor" strokeWidth="3" />
      <path d="M169 158V34l73 116M170 40l-79 106" stroke="currentColor" strokeWidth="3" />
      <path d="M177 57c38 27 59 61 64 93-38-8-59-39-64-93ZM162 58c-41 27-65 58-72 92 42-7 65-38 72-92Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M34 195c72-15 128-14 190 1 35 8 67 7 102-4" stroke="currentColor" opacity="0.42" />
    </svg>
  );
}

function Particles() {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 26 }).map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            '--x': `${8 + ((index * 37) % 86)}%`,
            '--y': `${9 + ((index * 53) % 82)}%`,
            '--delay': `${(index % 9) * 0.55}s`,
            '--size': `${2 + (index % 4)}px`,
          }}
        />
      ))}
    </div>
  );
}

export default function LayeredScene({ variant = 'intro', children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const farY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const midY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const frontY = useTransform(scrollYProgress, [0, 1], ['0%', '42%']);

  const motionProps = (y) => (reduceMotion ? {} : { style: { y } });
  const isIntro = variant === 'intro';
  const isRiver = variant === 'river';

  return (
    <section ref={ref} className={`layered-scene ${isIntro ? 'min-h-screen' : 'min-h-[86vh]'}`}>
      <div className="absolute inset-0 bg-[#080b0a]" />
      <div className="absolute inset-0 scene-paper" />
      <motion.div {...motionProps(farY)} className="absolute inset-0">
        <div className="moon-glow" />
        <EngravedForest className="absolute inset-x-0 top-0 h-[78vh] w-full text-ivory/22" />
        <EngravedForest className="absolute -left-20 top-10 h-[82vh] w-[140%] text-black/55" />
      </motion.div>
      <motion.div {...motionProps(midY)} className="absolute inset-0">
        <div className="absolute inset-x-0 bottom-[18%] h-80 bg-[radial-gradient(ellipse_at_center,rgba(39,65,64,0.33),transparent_65%)]" />
        {isRiver ? (
          <RiverBoat className="absolute bottom-[18%] left-1/2 h-[24vh] min-h-40 w-[92vw] -translate-x-1/2 text-ivory/54" />
        ) : (
          <PalaceEngraving className="absolute bottom-[17%] left-1/2 h-[22vh] min-h-36 w-[128vw] max-w-[760px] -translate-x-1/2 text-ivory/52" />
        )}
        <div className="mist mist-one" />
        <div className="mist mist-two" />
      </motion.div>
      <motion.div {...motionProps(frontY)} className="absolute inset-0">
        <BotanicalCorner className="absolute -left-16 top-[9%] h-[38vh] text-ivory/34" />
        <BotanicalCorner className="absolute -right-16 top-[7%] h-[40vh] -scale-x-100 text-champagne/27" />
        <Peacock className="absolute -left-8 bottom-[4%] h-[28vh] min-h-44 text-champagne/55" />
        <div className="paper-ground" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080b0a] via-[#080b0a]/82 to-transparent" />
      </motion.div>
      <Particles />
      <div className="relative z-10 flex min-h-[inherit] items-center justify-center px-5 py-20">
        {children}
      </div>
      {/* Replace the SVG/CSS layers above with transparent PNG/SVG assets here when final artwork is ready. */}
    </section>
  );
}
