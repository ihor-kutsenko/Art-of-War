import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const YoutubeTrailer = ({ videoId }) => {
  const [videoHeight, setVideoHeight] = useState('700');

  const updateVideoHeight = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setVideoHeight('300');
    } else if (screenWidth > 768 && screenWidth <= 1440) {
      setVideoHeight('500');
    } else {
      setVideoHeight('700');
    }
  };

  useEffect(() => {
    updateVideoHeight();
    window.addEventListener('resize', updateVideoHeight);
    return () => {
      window.removeEventListener('resize', updateVideoHeight);
    };
  }, []);

  const videoOptions = {
    height: videoHeight,
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={videoOptions} />;
};

export default YoutubeTrailer;
