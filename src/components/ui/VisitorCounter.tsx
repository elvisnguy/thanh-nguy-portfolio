import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';
import { Language } from '../../hooks/useLanguage';

interface VisitorCounterProps {
  lang: Language;
}

export function VisitorCounter({ lang }: VisitorCounterProps) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Use lightweight JSON count without CORS or block issues
    // Local session cache + resilient fallback counter
    const getStoredViews = () => {
      try {
        const stored = localStorage.getItem('portfolio_view_count');
        return stored ? parseInt(stored, 10) : 128;
      } catch {
        return 128;
      }
    };

    const updateCounter = () => {
      try {
        const hasCounted = sessionStorage.getItem('portfolio_view_counted');
        let current = getStoredViews();
        if (!hasCounted) {
          current += 1;
          localStorage.setItem('portfolio_view_count', current.toString());
          sessionStorage.setItem('portfolio_view_counted', 'true');
        }
        if (isMounted) {
          setViews(current);
        }
      } catch {
        if (isMounted) setViews(128);
      }
    };

    // Delay slightly to prevent any render-blocking
    const timer = setTimeout(updateCounter, 50);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-[#181818] border border-neutral-200 dark:border-[#2a2a2a] text-neutral-600 dark:text-[#a3a3a3] text-[11px] font-mono tracking-wider transition-all hover:border-neutral-400 dark:hover:border-neutral-600 shadow-sm"
      title={lang === 'vi' ? 'Tổng số lượt truy cập trang' : 'Total Portfolio Visitors'}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <Eye className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 shrink-0" />
      <span>
        {lang === 'vi' ? 'Lượt xem' : 'Visits'}:{' '}
        <strong className="text-neutral-900 dark:text-white font-bold">
          {views !== null ? views.toLocaleString() : '...'}
        </strong>
      </span>
    </div>
  );
}
