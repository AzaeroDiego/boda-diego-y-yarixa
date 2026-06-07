import FadeIn from './FadeIn.jsx';

export default function ClosingScene({ config }) {
  return (
    <section className="closing-scene">
      <FadeIn className="closing-inner">
        <p className="eyebrow">{'Hasta pronto'}</p>
        <h2>{config.closingText}</h2>
        <p>
          {'Gracias por acompa\u00f1arnos en este comienzo. Nos har\u00e1 feliz compartir este d\u00eda contigo.'}
        </p>
        <div className="closing-signature">
          {`Con cari\u00f1o, ${config.groomName} & ${config.brideName}`}
        </div>
      </FadeIn>
    </section>
  );
}
