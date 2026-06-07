import { Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function MusicToggle() {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef({ context: null, oscillators: [], gain: null });

  useEffect(() => {
    return () => {
      const audio = audioRef.current;
      audio.oscillators.forEach((oscillator) => oscillator.stop());
      audio.context?.close();
    };
  }, []);

  function toggleMusic() {
    if (enabled) {
      audioRef.current.gain?.gain.setTargetAtTime(
        0,
        audioRef.current.context.currentTime,
        0.8,
      );
      setEnabled(false);
      return;
    }

    if (!audioRef.current.context) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const context = new AudioContext();
      const gain = context.createGain();
      gain.gain.value = 0;
      gain.connect(context.destination);

      const oscillators = [196, 246.94, 329.63].map((frequency) => {
        const oscillator = context.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;
        oscillator.connect(gain);
        oscillator.start();
        return oscillator;
      });

      audioRef.current = { context, gain, oscillators };
    }

    audioRef.current.context.resume();
    audioRef.current.gain.gain.setTargetAtTime(
      0.025,
      audioRef.current.context.currentTime,
      0.9,
    );
    setEnabled(true);
  }

  return (
    <div className="fixed right-4 top-4 z-50">
      <button
        className="icon-button"
        type="button"
        aria-label={enabled ? 'Desactivar música' : 'Activar música'}
        title={enabled ? 'Desactivar música' : 'Activar música'}
        onClick={toggleMusic}
      >
        {enabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
      {/* Replace the synthesized ambient pad with a real licensed audio file here if desired. */}
    </div>
  );
}
