import { Pause, Play, Volume2 } from 'lucide-react';

export default function MusicToggle({ enabled, ready, onToggle }) {
  const label = enabled ? 'Pausar musica' : ready ? 'Reproducir musica' : 'Cargando musica';

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-2">
      <span className="music-chip">{ready ? 'audio' : 'loading'}</span>
      <button
        className="icon-button"
        type="button"
        aria-label={label}
        title={label}
        onClick={onToggle}
      >
        {enabled ? <Pause size={18} /> : ready ? <Volume2 size={18} /> : <Play size={18} />}
      </button>
    </div>
  );
}
