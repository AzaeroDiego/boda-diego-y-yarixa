import FadeIn from './FadeIn.jsx';
import videoLoopWeb from '../assets/video/video-y-d-web.mp4';

export default function CinematicMoment() {
  return (
    <section className="section section-dark cinematic-section">
      <div className="section-inner">
        <FadeIn>
          <div className="cinematic-card">
            <video
              autoPlay
              controls
              loop
              muted
              preload="metadata"
              playsInline
              className="cinematic-video"
              poster=""
            >
              <source src={videoLoopWeb} type="video/mp4" />
            </video>
            <div className="cinematic-overlay" />
            <div className="cinematic-copy">
              <p className="eyebrow">{'Momentos Especiales'}</p>
              <h2>{'Un video para recordarlos'}</h2>
              <a className="cinematic-link" href={videoLoopWeb} target="_blank" rel="noreferrer">
                {'Abrir video'}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
