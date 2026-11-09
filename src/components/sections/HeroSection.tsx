import React, { useState } from 'react';
import { 
  FileDown, 
  FileText, 
  Copy, 
  Check, 
  ChevronRight 
} from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';

interface HeroSectionProps {
  playClick?: (type?: 'tick' | 'pop' | 'success') => void;
}

export function HeroSection({ playClick }: HeroSectionProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    playClick?.('success');
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="about" className="pt-12 sm:pt-20 md:pt-28 pb-14 sm:pb-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <div className="space-y-6 sm:space-y-8">
        
        {/* Top Editorial Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-[#141414] border border-neutral-300 dark:border-[#262626] text-xs font-mono shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="tracking-wider uppercase text-[10px] sm:text-[11px] font-semibold text-neutral-700 dark:text-[#b5b5b5]">
            Frontend Engineer &bull; 5 YOE &bull; Vietnam &bull; EU Remote
          </span>
        </div>

        {/* Big Editorial Headline */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[1.08] text-neutral-900 dark:text-white">
            NGUY VAN THANH. <br />
            <span className="text-neutral-400 dark:text-[#666666]">FRONTEND ARCHITECTURE.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-neutral-600 dark:text-[#a3a3a3] leading-relaxed max-w-2xl font-light">
            Building and scaling production web applications with <span className="text-neutral-900 dark:text-white font-medium">Angular 19 Signals</span>, <span className="text-neutral-900 dark:text-white font-medium">Next.js</span>, and shared component systems. 5 years of commercial experience with direct European client collaboration.
          </p>
        </div>

        {/* iOS Specular Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 pt-2">
          {[
            { val: '5 YOE', label: 'Commercial Exp' },
            { val: 'Angular 19', label: 'Signals & Standalone' },
            { val: 'EU Remote', label: 'Direct Client Alignment' },
            { val: 'STU Engineer', label: "Information Technology" }
          ].map((metric, i) => (
            <div 
              key={i} 
              className="p-3.5 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#141414]/90 backdrop-blur-md border border-neutral-200 dark:border-[#222222] hover:border-neutral-400 dark:hover:border-white/40 transition-all duration-300 ios-press-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/[0.02]"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                {metric.val}
              </div>
              <div className="text-[9px] sm:text-[10px] text-neutral-500 dark:text-[#737373] font-semibold mt-1 tracking-wider uppercase">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* iOS Fluid Tactile CTAs */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
          <a
            href="https://www.linkedin.com/in/itsthanhnguy/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClick?.('tick')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#0077b5] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#006396] transition-all shadow-lg shadow-[#0077b5]/25 ios-press"
          >
            <FaLinkedinIn className="w-3.5 h-3.5 text-white" />
            <span>Connect on LinkedIn</span>
          </a>

          <a
            href="#projects"
            onClick={() => playClick?.('tick')}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-[#e2e2e2] transition-all shadow-md ios-press"
          >
            <span>Explore Projects</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="/Thanh_Nguy_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClick?.('tick')}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-white dark:bg-[#171717] hover:bg-neutral-100 dark:hover:bg-[#222222] border border-neutral-300 dark:border-[#2e2e2e] hover:border-neutral-500 text-neutral-900 dark:text-white font-medium text-xs tracking-wider uppercase transition-all ios-press shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-500 dark:text-[#a3a3a3]" />
            <span>Resume PDF</span>
          </a>

          <a
            href="/Thanh_Nguy_CV.docx"
            download="Thanh_Nguy_CV.docx"
            onClick={() => playClick?.('tick')}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-white dark:bg-[#171717] hover:bg-neutral-100 dark:hover:bg-[#222222] border border-neutral-300 dark:border-[#2e2e2e] hover:border-neutral-500 text-neutral-600 dark:text-[#a3a3a3] hover:text-black dark:hover:text-white font-medium text-xs tracking-wider uppercase transition-all ios-press shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>.DOCX</span>
          </a>

          <button
            onClick={() => copyToClipboard('vanthanhnguy2907@gmail.com', 'email')}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-transparent hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] text-neutral-600 dark:text-[#888888] hover:text-black dark:hover:text-white text-xs tracking-wider uppercase transition-all border border-transparent hover:border-neutral-300 dark:hover:border-[#2e2e2e] ios-press"
          >
            {copiedText === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedText === 'email' ? 'Copied' : 'Email'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
