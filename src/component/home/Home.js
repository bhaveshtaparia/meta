import React, { useEffect, useRef } from 'react';
import './Home.css'; // Import your CSS file for styling

function Home() {
  const videoId = 'vC80KSQFCgU'; // Extract the video ID from the URL
  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&controls=0&showinfo=0&mute=1&start=1&modestbranding=1`;

  const iframeRef = useRef(null);
  let player;

  useEffect(() => {
    const iframe = iframeRef.current;

    const onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player(iframe, {
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
        playerVars: {
          modestbranding: 1,
          controls: 0,
        },
      });
    };

    const onPlayerReady = (event) => {
      event.target.playVideo();
      setRepeatInterval();
    };

    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.ENDED) {
        player.seekTo(0);
      }
    };

    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  const setRepeatInterval = () => {
    setInterval(() => {
      if (player.getPlayerState() === window.YT.PlayerState.ENDED) {
        player.seekTo(0);
        player.playVideo();
      }
    }, 60000); // Repeat every 1 minute (adjust as needed)
  };

  return (
    <div className="home-container">
      <div className="video-background">
        <iframe
          ref={iframeRef}
          title="YouTube Video"
          width="100%"
          height="100%"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="content-overlay">
        <h1>Welcome to Our Anti-Drugs Campaign</h1>
        <p>Join us in creating a drug-free community for a brighter future.</p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
}

export default Home;
