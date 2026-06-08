import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from './SectionTitle.jsx';
import photoOne from '../assets/wedding-photos/_DSC3225.jpg';
import photoTwo from '../assets/wedding-photos/_DSC2786.jpg';
import photoThree from '../assets/wedding-photos/_DSC2765.jpg';
import photoFour from '../assets/wedding-photos/_DSC3064.jpg';
import photoFive from '../assets/wedding-photos/_DSC2753.jpg';
import photoSix from '../assets/wedding-photos/_DSC2791.jpg';

const PHOTOS = [
  { src: photoOne, caption: 'Puente', className: 'shot-a' },
  { src: photoTwo, caption: 'Promesa', className: 'shot-b' },
  { src: photoThree, caption: 'Jardin', className: 'shot-c' },
  { src: photoFour, caption: 'Encuentro', className: 'shot-d' },
  { src: photoFive, caption: 'Camino', className: 'shot-e' },
  { src: photoSix, caption: 'Complicidad', className: 'shot-f' },
];

export default function PolaroidGallery() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const wordY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [30, -30]);
  const collageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [18, -18]);

  return (
    <section className="section section-ivory editorial-gallery" ref={ref}>
      <div className="section-inner">
        <SectionTitle eyebrow="Galeria" title="Nuestros recuerdos">
          {'Una composicion de fotografias para recorrer este comienzo con calma.'}
        </SectionTitle>
        <motion.div className="gallery-word gallery-word-top" style={{ y: wordY }}>
          {'FOREVER'}
        </motion.div>
        <motion.div className="gallery-word gallery-word-bottom" style={{ y: wordY }}>
          {'DIEGO & YARIXA'}
        </motion.div>
        <motion.div className="editorial-collage" style={{ y: collageY }}>
          {PHOTOS.map((photo, index) => (
            <motion.figure
              key={photo.caption}
              className={`editorial-shot ${photo.className}`}
              initial={reduceMotion ? false : { opacity: 0, y: 24, rotate: 0 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0, rotate: undefined }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
            >
              <img src={photo.src} alt={photo.caption} />
              <figcaption>{photo.caption}</figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
