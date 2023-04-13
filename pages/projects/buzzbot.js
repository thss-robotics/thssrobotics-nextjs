import Head from 'next/head';
import { useEffect, useState } from 'react';

const VideoPage = () => {
  const [warningVisible, setWarningVisible] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    const warningInterval = setInterval(() => {
      setWarningVisible(prevVisible => !prevVisible);
    }, 500); // Adjust the duration (in milliseconds) for the flashing effect

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      clearInterval(warningInterval);
    };
  }, []);

  return (
    <>
      <Head>
        <title>BUZZBOT</title>
        <style>{`
          .warning {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 10rem;
            font-weight: bold;
            color: red;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            display: none;
          }
          .warning.visible {
            display: block;
          }
        `}</style>
      </Head>
      <div style={{ height: '100vh', width: '100%', overflow: 'hidden', position: 'relative' }}>
        <video
          src="/buzzbot.mov"
          controls
          autoPlay
          loop
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        ></video>
        <span className={`warning ${warningVisible ? 'visible' : ''}`}>IT BUZZ!</span>
      </div>
    </>
  );
};

export default VideoPage;
