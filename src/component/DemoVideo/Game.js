import React from 'react';

function Game() {
  // Replace 'your-youtube-video-id' with the actual YouTube video ID you want to display

  const embedUrl = `https://www.youtube.com/embed/bx9sXdd42M4?si=Lvyd5afUGxzkC3Jh ?autoplay=1`;

  return (
    <div>
      <iframe
         title="YouTube Video"
         width="100%"  
         height="1000" 
         src={embedUrl}
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
      ></iframe>
    </div>
  );
}

export default Game;
