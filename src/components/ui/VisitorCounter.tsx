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
    
    // Fetch unique hit from visitor-badge API
    const fetchViews = async () => {
      try {
        const response = await fetch('https://visitor-badge.laobi.icu/badge?page_id=thanhnguyportfolio.site');
        if (response.ok) {
          const svgText = await response.text();
          // Extract view count from the last text node in the SVG: e.g. <text ...>4</text>
          const matches = svgText.match(/<text[^>]*>(\d+)<\/text>/g);
          if (matches && matches.length > 0) {
            const lastMatch = matches[matches.length - 1];
            const countStr = lastMatch.replace(/<[^>]+>/g, '').trim();
            const count = parseInt(countStr, 10);
            if (!isNaN(count) && isMounted) {
              setViews(count);
            }
          }
        }
      } catch {
        // Fallback or silent fail if offline/blocked
      }
    };

    fetchViews();

    return () => {
      isMounted = false;
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
