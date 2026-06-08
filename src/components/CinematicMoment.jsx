import { useEffect, useRef, useState } from 'react';
import FadeIn from './FadeIn.jsx';
import designerVideo from '../assets/video/video-y-d-web.mp4';
import fallbackVideo from '../assets/video/engagement-loop.mp4';

export default function CinematicMoment() {
  const videoRef = useRef(null);
  const [activeSource, setActiveSource] = useState(designerVideo);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const element = videoRef.current;
      if (!element) return;

      // If the browser still has not loaded enough data, switch to a safer fallback.
      if (activeSource === designerVideo && element.readyState < 2) {
        setActiveSource(fallbackVideo);
      }
    }, 2400);

    return () => window.clearTimeout(timer);
  }, [activeSource]);

  function handleVideoError() {
    if (activeSource !== fallbackVideo) {
      setActiveSource(fallbackVideo);
    }
  }

  return (
    <section className="section section-dark cinematic-section">
      <div className="section-inner">
        <FadeIn>
          <div className="cinematic-card">
            <video
              key={activeSource}
              ref={videoRef}
              autoPlay
              loop
              muted
              preload="metadata"
              playsInline
              className="cinematic-video"
              poster=""
              onError={handleVideoError}
            >
              <source src={activeSource} type="video/mp4" />
            </video>
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
