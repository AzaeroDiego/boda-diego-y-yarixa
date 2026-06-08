import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

let youtubeApiPromise;

function loadYouTubeApi() {
  if (typeof window === 'undefined') return Promise.reject(new Error('No window'));
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve(window.YT);
    };

    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.head.appendChild(script);
  });

  return youtubeApiPromise;
}

const YouTubeAudioPlayer = forwardRef(function YouTubeAudioPlayer(
  { videoId, onReadyChange, onPlayingChange },
  ref,
) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const pendingActionRef = useRef(null);
  const [ready, setReady] = useState(false);

  useImperativeHandle(ref, () => ({
    play() {
      if (!playerRef.current || !ready) {
        pendingActionRef.current = 'play';
        return;
      }

      playerRef.current.playVideo();
    },
    pause() {
      pendingActionRef.current = null;
      playerRef.current?.pauseVideo();
    },
  }));

  useEffect(() => {
    let cancelled = false;

    loadYouTubeApi().then((YT) => {
      if (cancelled || playerRef.current || !containerRef.current) return;

      playerRef.current = new YT.Player(containerRef.current, {
        width: '1',
        height: '1',
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          loop: 1,
          playlist: videoId,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(45);
            setReady(true);
            onReadyChange?.(true);

            if (pendingActionRef.current === 'play') {
              event.target.playVideo();
              pendingActionRef.current = null;
            }
          },
          onStateChange: (event) => {
            const isPlaying = event.data === window.YT.PlayerState.PLAYING;
            onPlayingChange?.(isPlaying);
          },
        },
      });
    });

    return () => {
      cancelled = true;
      onReadyChange?.(false);
      onPlayingChange?.(false);
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [onPlayingChange, onReadyChange, videoId]);

  useEffect(() => {
    if (ready) onReadyChange?.(true);
  }, [onReadyChange, ready]);

  return <div className="youtube-audio-mount" ref={containerRef} aria-hidden="true" />;
});

export default YouTubeAudioPlayer;
