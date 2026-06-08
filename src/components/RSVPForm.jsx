import { Check, MessageCircleHeart, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import FadeIn from './FadeIn.jsx';
import DigitalTicket from './DigitalTicket.jsx';
import SectionTitle from './SectionTitle.jsx';

const storageKey = 'dy-rsvp-confirmation';

export default function RSVPForm({ config }) {
  const [form, setForm] = useState({
    name: '',
    attendance: 'si',
    passes: config.defaultPasses,
    comment: '',
  });
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) setConfirmation(JSON.parse(saved));
  }, []);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function setAttendance(attendance) {
    setForm((current) => ({
      ...current,
      attendance,
      passes: attendance === 'si' ? current.passes : 0,
    }));
  }

  function setPasses(passes) {
    setForm((current) => ({ ...current, passes }));
  }

  function createPayload() {
    return {
      ...form,
      name: form.name.trim() || 'Invitado especial',
      passes: form.attendance === 'si' ? Number(form.passes) || 1 : 0,
      confirmedAt: new Date().toISOString(),
    };
  }

  function buildWhatsappMessage(contactLabel, payload) {
    const attendanceLine =
      payload.attendance === 'si'
        ? `Confirmo mi asistencia con ${payload.passes} pase(s).`
        : 'Lamentablemente no podr\u00e9 asistir.';

    return encodeURIComponent(
      [
        `Hola ${contactLabel}, soy ${payload.name}.`,
        attendanceLine,
        payload.comment ? `Comentario: ${payload.comment}` : null,
        `Invitacion: ${config.fullNames.groom} & ${config.fullNames.bride}`,
      ]
        .filter(Boolean)
        .join('\n'),
    );
  }

  function handleWhatsapp(contact) {
    const payload = createPayload();
    window.localStorage.setItem(storageKey, JSON.stringify(payload));
    setConfirmation(payload);

    const phone = `${config.whatsappCountryCode}${contact.number}`;
    const message = buildWhatsappMessage(contact.label, payload);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <section className="section section-ivory">
      <div className="section-inner">
        <SectionTitle eyebrow="RSVP" title="Confirma tu asistencia">
          {'Elige tus pases y envianos tu confirmacion directamente por WhatsApp.'}
        </SectionTitle>
        <FadeIn>
          <div className="rsvp-card rsvp-experience">
            <label>
              {'Nombre del invitado'}
              <input
                name="name"
                placeholder="Escribe tu nombre"
                value={form.name}
                onChange={updateField}
              />
            </label>

            <div className="choice-group">
              <p className="choice-label">{'Asistencia'}</p>
              <div className="choice-grid">
                {[
                  { value: 'si', label: 'Si asistire' },
                  { value: 'no', label: 'No podre asistir' },
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    className={`choice-card${form.attendance === item.value ? ' is-active' : ''}`}
                    onClick={() => setAttendance(item.value)}
                  >
                    <Check size={16} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="choice-group">
              <p className="choice-label">{'Pases'}</p>
              <div className="choice-grid choice-grid-passes">
                {[1, 2].map((passes) => (
                  <button
                    key={passes}
                    type="button"
                    className={`choice-card${Number(form.passes) === passes && form.attendance === 'si' ? ' is-active' : ''}`}
                    onClick={() => setPasses(passes)}
                    disabled={form.attendance !== 'si'}
                  >
                    <Users size={16} />
                    <span>{`${passes} pase${passes > 1 ? 's' : ''}`}</span>
                  </button>
                ))}
              </div>
            </div>

            <label>
              {'Mensaje opcional'}
              <textarea
                name="comment"
                rows="3"
                placeholder="Escribe un mensaje si deseas"
                value={form.comment}
                onChange={updateField}
              />
            </label>

            <div className="whatsapp-actions">
              {config.whatsappContacts.map((contact) => (
                <button
                  key={contact.number}
                  className="luxury-button whatsapp-button"
                  type="button"
                  onClick={() => handleWhatsapp(contact)}
                >
                  <MessageCircleHeart size={16} />
                  {`Confirmar con ${contact.label}`}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
        {confirmation && confirmation.attendance === 'si' && (
          <FadeIn className="mt-8">
            <p className="mb-5 text-center font-serif text-2xl italic text-ivory">
              {'Gracias por confirmar. Te esperamos con mucho cari\u00f1o.'}
            </p>
            <DigitalTicket guest={confirmation} config={config} />
          </FadeIn>
        )}
      </div>
    </section>
  );
}
