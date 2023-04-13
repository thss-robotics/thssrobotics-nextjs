// pages/video.js
import Head from 'next/head';
import { useEffect } from 'react';

const VideoPage = () => {
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>BUZZBOT</title>
      </Head>
      <div style={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
        <video
          src="/buzzbot.mov"
          controls
          autoPlay
          loop
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        ></video>
      </div>
    </>
  );
};

export default VideoPage;
