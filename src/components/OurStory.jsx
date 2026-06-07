import FadeIn from './FadeIn.jsx';
import SectionTitle from './SectionTitle.jsx';
import storyPhoto from '../assets/wedding-photos/_DSC2765.jpg';

export default function OurStory({ story }) {
  return (
    <section className="section section-dark">
      <div className="section-inner">
        <SectionTitle eyebrow="Nuestra historia" title="Como una carta" />
        <FadeIn className="story-shell">
          <figure className="story-figure">
            <img src={storyPhoto} alt="Diego y Yarixa" />
          </figure>
          <article className="letter-panel">
            <p>{story}</p>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
