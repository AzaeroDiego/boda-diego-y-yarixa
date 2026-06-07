import FadeIn from './FadeIn.jsx';

export default function ClosingScene({ config }) {
  return (
    <section className="closing-scene">
      <FadeIn className="closing-inner">
        <p className="eyebrow">{'Hasta pronto'}</p>
        <h2>{config.closingText}</h2>
        <p>
          {'Gracias por acompanarnos en este comienzo. Nos hara feliz compartir este dia contigo.'}
        </p>
        <div className="closing-signature">
          {`Con carino, ${config.groomName} & ${config.brideName}`}
        </div>
      </FadeIn>
    </section>
  );
}
