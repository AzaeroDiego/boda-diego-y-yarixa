import { Download } from 'lucide-react';
import QRPlaceholder from './QRPlaceholder.jsx';

export default function DigitalTicket({ guest, config }) {
  if (!guest || guest.attendance !== 'si') return null;

  const codeName = guest.name
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, '')
    .slice(0, 6);
  const code = `${config.invitationCodePrefix}-${codeName || 'INV'}-${guest.passes}`;

  function savePass() {
    window.print();
  }

  return (
    <article className="ticket-card">
      <div>
        <p className="eyebrow">{'Entrada digital'}</p>
        <h3>{guest.name}</h3>
      </div>
      <QRPlaceholder />
      <dl>
        <div>
          <dt>{'Codigo'}</dt>
          <dd>{code}</dd>
        </div>
        <div>
          <dt>{'Pases'}</dt>
          <dd>{guest.passes}</dd>
        </div>
        <div>
          <dt>{'Estado'}</dt>
          <dd>{'Confirmado'}</dd>
        </div>
      </dl>
      <button className="inline-link-button ticket-save-button" type="button" onClick={savePass}>
        <Download size={15} />
        {'Guardar pase'}
      </button>
    </article>
  );
}
