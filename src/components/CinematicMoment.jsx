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
              loop
              muted
              playsInline
              className="cinematic-video"
              poster=""
            >
              <source src={videoLoopWeb} type="video/mp4" />
            </video>
            <div className="cinematic-overlay" />
            <div className="cinematic-copy">
              <p className="eyebrow">{'Video del dise\u00f1ador'}</p>
              <h2>{'Una escena para volver a sentir este momento'}</h2>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
