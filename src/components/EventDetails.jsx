import { Clock, Gem, MapPin, Shirt, Sparkles } from 'lucide-react';
import FadeIn from './FadeIn.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function EventDetails({ config }) {
  const details = [
    {
      icon: Sparkles,
      title: 'Ceremonia',
      text: `Inicio ${config.ceremonyTime}`,
    },
    {
      icon: Gem,
      title: 'Recepcion',
      text: `Celebracion ${config.receptionTime}`,
    },
    {
      icon: Clock,
      title: 'Hora',
      text: `${config.ceremonyTime} ceremonia / ${config.receptionTime} recepcion`,
    },
    {
      icon: MapPin,
      title: 'Lugar',
      text: `${config.venueName}. ${config.address}`,
      action: true,
    },
    {
      icon: Shirt,
      title: 'Dress code',
      text: config.dressCode,
    },
    {
      icon: Sparkles,
      title: 'Recomendaciones',
      text: config.recommendations,
    },
  ];

  return (
    <section className="section section-ivory">
      <div className="section-inner">
        <SectionTitle eyebrow="Detalles" title="La celebracion" />
        <div className="detail-grid">
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.05}>
                <article className="detail-card">
                  <Icon className="mt-1 shrink-0 text-champagne" size={19} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    {item.action && (
                      <a
                        className="inline-link"
                        href={config.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {'Ver ubicacion'}
                      </a>
                    )}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
