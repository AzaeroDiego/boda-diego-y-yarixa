import FadeIn from './FadeIn.jsx';
import designerVideo from '../assets/video/video-y-d-web.mp4';

export default function CinematicMoment() {
  return (
    <section className="section section-dark cinematic-section">
      <div className="section-inner">
        <FadeIn>
          <div className="cinematic-card">
            <div className="cinematic-video-viewport">
              <video
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
                className="cinematic-video"
              >
                <source src={designerVideo} type="video/mp4" />
              </video>
            </div>
            <div className="cinematic-overlay" />
            <div className="cinematic-copy">
              <p className="eyebrow">{'Momentos Especiales'}</p>
              <h2>{'Un video para recordarlos'}</h2>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
