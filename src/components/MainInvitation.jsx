import FadeIn from './FadeIn.jsx';

export default function MainInvitation({ config }) {
  return (
    <section className="scene-section">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(217,184,178,0.10),transparent_34%)]" />
      <FadeIn className="relative mx-auto max-w-[430px] px-5 text-center">
        <div className="paper-plaque">
          <p className="mb-6 font-serif text-[1rem] italic leading-6 text-night/70">
            {config.invitationText}
          </p>
          <h2 className="font-display text-[3.15rem] uppercase leading-[1.02] text-night">
            {config.fullNames.groom}
            <span className="block py-4 font-serif text-3xl italic text-night/80">
              &
            </span>
            {config.fullNames.bride}
          </h2>
          <p className="mt-7 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-night/62">
            {config.dateLabel}
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
