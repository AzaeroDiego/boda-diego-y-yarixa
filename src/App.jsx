import { useRef } from 'react';
import Countdown from './components/Countdown.jsx';
import EventDetails from './components/EventDetails.jsx';
import IntroScene from './components/IntroScene.jsx';
import MainInvitation from './components/MainInvitation.jsx';
import MusicToggle from './components/MusicToggle.jsx';
import OurStory from './components/OurStory.jsx';
import RomanticQuote from './components/RomanticQuote.jsx';
import RSVPForm from './components/RSVPForm.jsx';
import ClosingScene from './components/ClosingScene.jsx';
import { weddingConfig } from './data/weddingConfig.js';

export default function App() {
  const contentRef = useRef(null);

  function openInvitation() {
    contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <main className="min-h-screen bg-night text-ivory">
      <MusicToggle />
      <IntroScene config={weddingConfig} onOpen={openInvitation} />
      <div ref={contentRef}>
        <RomanticQuote quote={weddingConfig.quote} />
        <MainInvitation config={weddingConfig} />
        <Countdown
          weddingDate={weddingConfig.weddingDate}
          dateLabel={weddingConfig.dateLabel}
        />
        <EventDetails config={weddingConfig} />
        <OurStory story={weddingConfig.story} />
        <RSVPForm config={weddingConfig} />
        <ClosingScene config={weddingConfig} />
      </div>
    </main>
  );
}
