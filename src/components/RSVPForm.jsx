import { MessageCircleHeart, Ticket } from 'lucide-react';
import FadeIn from './FadeIn.jsx';
import SectionTitle from './SectionTitle.jsx';

function ReservedSeats({ passes, maxPasses }) {
  if (passes < 1) {
    return (
      <div className="reserved-seats">
        <p className="reserved-title">{'Invitacion personalizada'}</p>
        <p className="reserved-copy reserved-copy-warning">
          {'Abre tu enlace con codigo para ver los pases reservados.'}
        </p>
      </div>
    );
  }

  return (
    <div className="reserved-seats">
      <p className="reserved-title">{'Hemos reservado'}</p>
      <div className="reserved-dots" aria-label={`${passes} pases reservados`}>
        {Array.from({ length: maxPasses }).map((_, index) => (
          <span
            key={index}
            className={`reserved-dot${index < passes ? ' is-filled' : ''}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="reserved-counts" aria-hidden="true">
        {Array.from({ length: maxPasses }).map((_, index) => (
          <span key={index}>{index + 1}</span>
        ))}
      </div>
      <p className="reserved-copy">
        {passes === 1 ? 'lugar reservado en tu honor' : 'lugares reservados en tu honor'}
      </p>
    </div>
  );
}

export default function RSVPForm({ config, guestInvitation }) {
  const invitation = guestInvitation || {
    code: 'SIN-CODIGO',
    label: 'Invitacion personalizada',
    passes: 0,
  };

  const activePasses = Math.min(invitation.passes, config.maxPasses);

  function handleWhatsapp(contact) {
    const phone = `${config.whatsappCountryCode}${contact.number}`;
    const message = encodeURIComponent(
      activePasses > 0
        ? [
            `Hola ${contact.label}, confirmo mi asistencia a la boda de ${config.fullNames.groom} & ${config.fullNames.bride}.`,
            `Codigo de invitacion: ${invitation.code}.`,
            `Esta invitacion corresponde a ${activePasses} pase(s).`,
          ].join('\n')
        : [
            `Hola ${contact.label}, necesito mi enlace personalizado para confirmar asistencia.`,
            `La web fue abierta sin un codigo de invitacion valido.`,
          ].join('\n'),
    );

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <section className="section section-ivory">
      <div className="section-inner">
        <SectionTitle eyebrow="RSVP" title="Confirma tu asistencia">
          {
            'Tu presencia es importante para nosotros. Por favor, confirmanos tu asistencia por WhatsApp.'
          }
        </SectionTitle>
        <FadeIn>
          <div className="rsvp-card rsvp-minimal">
            <div className="invitation-badge">
              <Ticket size={16} />
              <span>{`${invitation.label} · ${invitation.code}`}</span>
            </div>
            <div className="whatsapp-actions whatsapp-actions-double">
              {config.whatsappContacts.map((contact) => (
                <button
                  key={contact.number}
                  className="whatsapp-outline-button"
                  type="button"
                  onClick={() => handleWhatsapp(contact)}
                >
                  <MessageCircleHeart size={22} />
                  <span>{contact.label}</span>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn className="mt-8">
          <div className="reserved-panel">
            <ReservedSeats passes={activePasses} maxPasses={config.maxPasses} />
          </div>
        </FadeIn>
        <p className="rsvp-closing">{'Te esperamos con muchisimo cariño.'}</p>
      </div>
    </section>
  );
}
