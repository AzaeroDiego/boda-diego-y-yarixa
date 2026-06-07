import FadeIn from './FadeIn.jsx';

export default function MainInvitation({ config }) {
  return (
    <section className="section section-ivory">
      <FadeIn className="section-inner">
        <div className="invitation-panel">
          <p className="eyebrow">{'Invitacion'}</p>
          <p className="invitation-copy">{config.invitationText}</p>
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
