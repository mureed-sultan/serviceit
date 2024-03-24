import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../styles/loading.css';

function Loading({ loaded }: { loaded: boolean }) {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    // If loaded prop becomes true, animate progress to 100%
    if (loaded && progressWidth < 100) {
      const timer = setTimeout(() => {
        setProgressWidth(100);
      }, 1000); // Change the duration of the animation as needed
      return () => clearTimeout(timer);
    }
  }, [loaded, progressWidth]);

  useEffect(() => {
    // Set progress to 50% initially
    if (!loaded && progressWidth < 50) {
      const timer = setTimeout(() => {
        setProgressWidth(50);
      }, 0); // No delay for initial progress
      return () => clearTimeout(timer);
    }
  }, [loaded, progressWidth]);

  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="logo-container">
          <Image
            width={500}
            height={500}
            src="/assets/img/logofooter.png"
            className="Image-fluid loading-logo"
            alt="Logo"
          />
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progressWidth}%` }} />
        </div>
      </div>
    </div>
  );
}

export default Loading;
