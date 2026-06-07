import FadeIn from './FadeIn.jsx';

export default function RomanticQuote({ quote }) {
  return (
    <section className="section section-dark">
      <FadeIn className="section-inner">
        <div className="quote-panel">
          <p className="eyebrow">{'Nuestro momento'}</p>
          <blockquote>{`"${quote}"`}</blockquote>
        </div>
      </FadeIn>
    </section>
  );
}
