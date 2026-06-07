import QRPlaceholder from './QRPlaceholder.jsx';

export default function DigitalTicket({ guest, config }) {
  if (!guest) return null;

  const codeName = guest.name
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, '')
    .slice(0, 6);
  const code = `${config.invitationCodePrefix}-${codeName || 'INV'}-${guest.passes}`;

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
    </article>
  );
}
