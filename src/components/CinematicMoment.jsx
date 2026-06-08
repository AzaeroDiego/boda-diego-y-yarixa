import FadeIn from './FadeIn.jsx';
import videoLoop from '../assets/video/engagement-loop.mp4';

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
              <source src={videoLoop} type="video/mp4" />
            </video>
            <div className="cinematic-overlay" />
            <div className="cinematic-copy">
              <p className="eyebrow">{'Un instante'}</p>
              <h2>{'Una pausa para mirarnos antes del gran dia'}</h2>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
