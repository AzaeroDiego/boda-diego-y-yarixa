import FadeIn from './FadeIn.jsx';

export default function RomanticQuote({ quote }) {
  return (
    <section className="scene-section overflow-hidden">
      <div className="absolute inset-0 botanical-drift" />
      <FadeIn className="relative mx-auto max-w-[390px] px-5 text-center">
        <div className="engraved-orb">
          <p className="section-eyebrow">Nuestro momento</p>
          <p className="font-serif text-[1.72rem] italic leading-tight text-ivory">
            "{quote}"
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
