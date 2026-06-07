import FadeIn from './FadeIn.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function OurStory({ story }) {
  return (
    <section className="scene-section overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,239,230,0.03),transparent_45%,rgba(200,174,125,0.05))]" />
      <div className="absolute -left-20 top-12 h-80 w-56 rotate-12 border border-champagne/10" />
      <div className="absolute -right-24 bottom-16 h-80 w-56 -rotate-12 border border-ivory/10" />
      <SectionTitle eyebrow="Nuestra historia" title="Como una carta" />
      <FadeIn className="relative mx-auto max-w-[410px] px-5">
        <article className="letter-card">
          <p>{story}</p>
        </article>
      </FadeIn>
    </section>
  );
}
