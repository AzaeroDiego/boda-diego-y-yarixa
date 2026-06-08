import {
  Building2,
  Church,
  Clock3,
  Gem,
  MapPin,
  Shirt,
  Sparkles,
} from 'lucide-react';
import FadeIn from './FadeIn.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function EventDetails({ config }) {
  const details = [
    {
      icon: Sparkles,
      title: 'Ceremonia',
      text: `${config.ceremony.name} \u00b7 ${config.ceremony.time}`,
      url: config.ceremony.mapsUrl,
    },
    {
      icon: Gem,
      title: 'Recepcion',
      text: `${config.reception.name} \u00b7 ${config.reception.time}`,
      url: config.reception.mapsUrl,
    },
    {
      icon: Clock3,
      title: 'Horario',
      text: `${config.ceremony.time} ceremonia / ${config.reception.time} recepcion`,
    },
    {
      icon: Shirt,
      title: 'Dress code',
      text: config.dressCode,
    },
    {
      icon: MapPin,
      title: 'Ubicaciones',
      text: 'Accede a la ruta de cada momento desde tu celular.',
      dualLinks: true,
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
                    {item.url && (
                      <a className="inline-link" href={item.url} target="_blank" rel="noreferrer">
                        {'Ver ubicacion'}
                      </a>
                    )}
                    {item.dualLinks && (
                      <div className="detail-link-stack">
                        <a
                          className="inline-link with-icon"
                          href={config.ceremony.mapsUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Church size={15} />
                          {'Iglesia'}
                        </a>
                        <a
                          className="inline-link with-icon"
                          href={config.reception.mapsUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Building2 size={15} />
                          {'Recepcion'}
                        </a>
                      </div>
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
