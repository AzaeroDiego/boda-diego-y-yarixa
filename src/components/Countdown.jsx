import { useEffect, useMemo, useState } from 'react';
import FadeIn from './FadeIn.jsx';
import SectionTitle from './SectionTitle.jsx';

function getRemaining(targetDate) {
  const diff = Math.max(new Date(targetDate).getTime() - Date.now(), 0);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Countdown({ weddingDate, dateLabel }) {
  const [remaining, setRemaining] = useState(() => getRemaining(weddingDate));
  const units = useMemo(
    () => [
      ['days', 'Días'],
      ['hours', 'Horas'],
      ['minutes', 'Min'],
      ['seconds', 'Seg'],
    ],
    [],
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining(getRemaining(weddingDate));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="scene-section">
      <SectionTitle eyebrow="La fecha" title={dateLabel}>
        Cada segundo nos acerca a celebrar con ustedes.
      </SectionTitle>
      <FadeIn className="relative mx-auto grid max-w-[420px] grid-cols-4 gap-2 px-4">
        {units.map(([key, label]) => (
          <div key={key} className="count-card">
            <strong>{String(remaining[key]).padStart(2, '0')}</strong>
            <span>{label}</span>
          </div>
        ))}
      </FadeIn>
    </section>
  );
}
