import React from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  scrolled: boolean;
}

export function BackToTop({ scrolled }: BackToTopProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className={`fixed bottom-6 right-6 z-40 p-3 sm:p-3.5 rounded-full bg-white/90 dark:bg-[#181818]/90 backdrop-blur-xl border border-neutral-300 dark:border-white/10 hover:border-neutral-500 dark:hover:border-white/30 text-neutral-600 dark:text-[#888888] hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#252525] shadow-2xl shadow-black/20 dark:shadow-black/80 transition-all duration-300 ios-press hover:scale-110 active:scale-95 ${
        scrolled ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 pointer-events-none translate-y-4 scale-90'
      }`}
      title="Scroll to Top"
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
    </button>
  );
}
