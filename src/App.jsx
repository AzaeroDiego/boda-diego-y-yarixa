import { useCallback, useRef, useState } from 'react';
import Countdown from './components/Countdown.jsx';
import EventDetails from './components/EventDetails.jsx';
import GiftRegistry from './components/GiftRegistry.jsx';
import IntroScene from './components/IntroScene.jsx';
import MainInvitation from './components/MainInvitation.jsx';
import MusicToggle from './components/MusicToggle.jsx';
import OurStory from './components/OurStory.jsx';
import PolaroidGallery from './components/PolaroidGallery.jsx';
import RomanticQuote from './components/RomanticQuote.jsx';
import RSVPForm from './components/RSVPForm.jsx';
import ClosingScene from './components/ClosingScene.jsx';
import CinematicMoment from './components/CinematicMoment.jsx';
import YouTubeAudioPlayer from './components/YouTubeAudioPlayer.jsx';
import { weddingConfig } from './data/weddingConfig.js';

export default function App() {
  const contentRef = useRef(null);
  const playerRef = useRef(null);
  const [musicReady, setMusicReady] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);

  const handleToggleMusic = useCallback(() => {
    if (musicEnabled) {
      playerRef.current?.pause();
      setMusicEnabled(false);
      return;
    }

    playerRef.current?.play();
    setMusicEnabled(true);
  }, [musicEnabled]);

  const openInvitation = useCallback(() => {
    playerRef.current?.play();
    setMusicEnabled(true);
    contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <main className="min-h-screen bg-night text-ivory">
      <YouTubeAudioPlayer
        ref={playerRef}
        videoId={weddingConfig.music.youtubeId}
        onReadyChange={setMusicReady}
        onPlayingChange={setMusicEnabled}
      />
      <MusicToggle enabled={musicEnabled} ready={musicReady} onToggle={handleToggleMusic} />
      <IntroScene config={weddingConfig} onOpen={openInvitation} />
      <div className="invitation-flow" ref={contentRef}>
        <MainInvitation config={weddingConfig} />
        <RomanticQuote quote={weddingConfig.quote} />
        <OurStory story={weddingConfig.story} />
        <PolaroidGallery />
        <Countdown
          weddingDate={weddingConfig.weddingDate}
          dateLabel={weddingConfig.dateLabel}
        />
        <EventDetails config={weddingConfig} />
        <CinematicMoment />
        <GiftRegistry config={weddingConfig} />
        <RSVPForm config={weddingConfig} />
        <ClosingScene config={weddingConfig} />
      </div>
    </main>
  );
}
