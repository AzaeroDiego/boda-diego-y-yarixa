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

    window.localStorage.setItem(storageKey, JSON.stringify(payload));
    setConfirmation(payload);
  }

  return (
    <section className="section section-ivory">
      <div className="section-inner">
        <SectionTitle eyebrow="RSVP" title="Confirma tu asistencia">
          {'Tu respuesta nos ayuda a preparar cada detalle con cari\u00f1o.'}
        </SectionTitle>
        <FadeIn>
          <form className="rsvp-card" onSubmit={handleSubmit}>
            <label>
              {'Nombre completo'}
              <input name="name" value={form.name} onChange={updateField} />
            </label>
            <label>
              {'Tel\u00e9fono'}
              <input name="phone" value={form.phone} onChange={updateField} />
            </label>
            <label>
              {'Asistir\u00e1s'}
              <select
                name="attendance"
                value={form.attendance}
                onChange={updateField}
              >
                <option value="si">{'S\u00ed, asistir\u00e9'}</option>
                <option value="no">{'No podr\u00e9 asistir'}</option>
              </select>
            </label>
            <label>
              {'N\u00famero de acompa\u00f1antes'}
              <input
                min="1"
                name="passes"
                type="number"
                value={form.passes}
                onChange={updateField}
              />
            </label>
            <label>
              {'Comentario opcional'}
              <textarea
                name="comment"
                rows="3"
                value={form.comment}
                onChange={updateField}
              />
            </label>
            <button className="luxury-button w-full" type="submit">
              {'Confirmar asistencia'}
            </button>
          </form>
        </FadeIn>
        {confirmation && (
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
