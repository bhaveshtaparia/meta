import React, { useEffect } from 'react';

function TarsWidget() {
  useEffect(() => {
    // Create Tars widget script element
    const script = document.createElement('script');
    script.id = 'tars-widget-script';
    script.type = 'text/javascript';
    script.src = 'https://tars-file-upload.s3.amazonaws.com/bulb/js/widget.js';

    // Append the script element to the document body
    document.body.appendChild(script);

    // Set the Tars widget settings
    window.tarsSettings = {
      convid: 'nJ6i07',
      href: 'https://chatbot.hellotars.com/conv/nJ6i07'
    };

    // Cleanup function to remove the script element when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {/* Place any content here */}
    </div>
  );
}

export default TarsWidget;
