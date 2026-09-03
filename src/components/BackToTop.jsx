import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="fixed bottom-8 right-8 z-40 p-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black shadow-glow-cyan transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
    >
      <ArrowUp className="w-5 h-5 font-bold" />
    </button>
  );
};
export default BackToTop;
