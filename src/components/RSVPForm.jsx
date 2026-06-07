import { useEffect, useState } from 'react';
import FadeIn from './FadeIn.jsx';
import DigitalTicket from './DigitalTicket.jsx';
import SectionTitle from './SectionTitle.jsx';

const storageKey = 'dy-rsvp-confirmation';

export default function RSVPForm({ config }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    attendance: 'si',
    passes: String(config.defaultPasses),
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

  function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      ...form,
      name: form.name.trim() || 'Invitado especial',
      passes: Number(form.passes) || 1,
      confirmedAt: new Date().toISOString(),
    };

    // Replace localStorage with a POST request to your backend/API when available.
    window.localStorage.setItem(storageKey, JSON.stringify(payload));
    setConfirmation(payload);
  }

  return (
    <section className="scene-section">
      <SectionTitle eyebrow="RSVP" title="Confirma tu asistencia">
        Tu respuesta nos ayuda a preparar cada detalle con cariño.
      </SectionTitle>
      <FadeIn className="relative mx-auto max-w-[430px] px-4">
        <form className="rsvp-card" onSubmit={handleSubmit}>
          <label>
            Nombre completo
            <input name="name" value={form.name} onChange={updateField} />
          </label>
          <label>
            Teléfono
            <input name="phone" value={form.phone} onChange={updateField} />
          </label>
          <label>
            Asistirás
            <select
              name="attendance"
              value={form.attendance}
              onChange={updateField}
            >
              <option value="si">Sí, asistiré</option>
              <option value="no">No podré asistir</option>
            </select>
          </label>
          <label>
            Número de acompañantes
            <input
              min="1"
              name="passes"
              type="number"
              value={form.passes}
              onChange={updateField}
            />
          </label>
          <label>
            Comentario opcional
            <textarea
              name="comment"
              rows="3"
              value={form.comment}
              onChange={updateField}
            />
          </label>
          <button className="luxury-button w-full" type="submit">
            Confirmar asistencia
          </button>
        </form>
      </FadeIn>
      {confirmation && (
        <FadeIn className="relative mx-auto mt-8 max-w-[430px] px-4">
          <p className="mb-5 text-center font-serif text-2xl italic text-ivory">
            Gracias por confirmar. Te esperamos con mucho cariño.
          </p>
          <DigitalTicket guest={confirmation} config={config} />
        </FadeIn>
      )}
    </section>
  );
}
