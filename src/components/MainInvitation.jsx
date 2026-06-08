import FadeIn from './FadeIn.jsx';

function ParentBlock({ title, names }) {
  return (
    <div className="family-block">
      <p>{title}</p>
      <strong>{names[0]}</strong>
      <strong>{names[1]}</strong>
    </div>
  );
}

export default function MainInvitation({ config }) {
  return (
    <section className="section section-ivory">
      <FadeIn className="section-inner">
        <div className="invitation-panel">
          <p className="eyebrow">{'Invitacion'}</p>
          <p className="invitation-copy">{config.invitationText}</p>
          <div className="family-grid">
            <ParentBlock title="Padres del novio" names={config.parents.groom} />
            <ParentBlock title="Padres de la novia" names={config.parents.bride} />
          </div>
          <h2 className="invitation-names">
            {config.fullNames.groom}
            <span>&</span>
            {config.fullNames.bride}
          </h2>
          <p className="invitation-date">{config.dateLabel}</p>
        </div>
      </FadeIn>
    </section>
  );
}
