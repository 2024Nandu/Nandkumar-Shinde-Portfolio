import React, { useState, useEffect } from 'react';

export const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / documentHeight) * 100;
      setScrollPercentage(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-150 ease-out shadow-glow-cyan"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};
export default ScrollProgress;
