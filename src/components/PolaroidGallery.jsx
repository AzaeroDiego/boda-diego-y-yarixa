import FadeIn from './FadeIn.jsx';
import SectionTitle from './SectionTitle.jsx';
import photoOne from '../assets/wedding-photos/_DSC3225.jpg';
import photoTwo from '../assets/wedding-photos/_DSC2786.jpg';
import photoThree from '../assets/wedding-photos/_DSC2765.jpg';
import photoFour from '../assets/wedding-photos/_DSC3064.jpg';
import photoFive from '../assets/wedding-photos/_DSC2753.jpg';
import photoSix from '../assets/wedding-photos/_DSC2791.jpg';

const PHOTOS = [
  { src: photoOne, caption: 'Puente' },
  { src: photoTwo, caption: 'Promesa' },
  { src: photoThree, caption: 'Jardin' },
  { src: photoFour, caption: 'Encuentro' },
  { src: photoFive, caption: 'Camino' },
  { src: photoSix, caption: 'Complicidad' },
];

export default function PolaroidGallery() {
  return (
    <section className="section section-ivory polaroid-section">
      <div className="section-inner">
        <SectionTitle eyebrow="Recuerdos" title="Nuestra galeria">
          {'Una pequena coleccion de instantes que nos trajeron hasta aqui.'}
        </SectionTitle>
        <div className="polaroid-grid">
          {PHOTOS.map((photo, index) => (
            <FadeIn key={photo.caption} delay={index * 0.06}>
              <figure
                className="polaroid-card"
                style={{ '--rotation': `${index % 2 === 0 ? -2.5 : 2.5}deg` }}
              >
                <img src={photo.src} alt={photo.caption} />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
