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
      title: 'Recepción',
      text: `Celebración ${config.receptionTime}`,
    },
    {
      icon: Clock,
      title: 'Hora',
      text: `${config.ceremonyTime} ceremonia / ${config.receptionTime} recepción`,
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
    <section className="scene-section">
      <SectionTitle eyebrow="Detalles" title="La celebracion" />
      <div className="relative mx-auto grid max-w-[460px] gap-3 px-4">
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
                      Ver ubicación
                    </a>
                  )}
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
