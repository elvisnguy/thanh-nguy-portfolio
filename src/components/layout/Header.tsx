import React, { useState } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Command 
} from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { Language } from '../../hooks/useLanguage';
import { TRANSLATIONS } from '../../data/translations';

interface HeaderProps {
  scrolled: boolean;
  scrollProgress: number;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  lang: Language;
  toggleLanguage: () => void;
  onOpenCommand: () => void;
}

// Crisp inline SVG flags for universal cross-platform rendering (Windows, macOS, Linux, iOS, Android)
function VietnamFlag() {
  return (
    <svg className="w-4 h-3 sm:w-5 sm:h-3.5 rounded-[2px] shadow-sm shrink-0 overflow-hidden" viewBox="0 0 30 20" aria-hidden="true">
      <rect width="30" height="20" fill="#da251d" />
      <polygon
        fill="#ff0"
        points="15,4 16.545,8.755 21.548,8.755 17.501,11.695 19.046,16.45 15,13.51 10.954,16.45 12.499,11.695 8.452,8.755 13.455,8.755"
      />
    </svg>
  );
}

function UkFlag() {
  return (
    <svg className="w-4 h-3 sm:w-5 sm:h-3.5 rounded-[2px] shadow-sm shrink-0 overflow-hidden" viewBox="0 0 60 30" aria-hidden="true">
      <clipPath id="uk-clip">
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#c8102e" strokeWidth="4" clipPath="url(#uk-clip)" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" strokeWidth="6" />
      </g>
    </svg>
  );
}

export function Header({
  scrolled,
  scrollProgress,
  theme,
  toggleTheme,
  lang,
  toggleLanguage,
  onOpenCommand
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'pt-2 pb-1.5 px-2.5 sm:px-6' : 'pt-0 px-0'}`}>
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-neutral-400 via-sky-500 to-indigo-500 transition-all duration-150 z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className={`mx-auto transition-all duration-300 ${
        scrolled 
          ? 'max-w-5xl rounded-full bg-white/95 dark:bg-[#121212]/90 backdrop-blur-2xl border border-neutral-200/90 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-black/80 px-3 sm:px-6 py-1.5 sm:py-2' 
          : 'max-w-6xl px-3 sm:px-6 md:px-8 py-2.5 sm:py-4 bg-[#f8f9fa]/95 dark:bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-neutral-200/80 dark:border-[#222222]'
      } flex items-center justify-between gap-2`}>
        
        {/* Brand Logo & Name */}
        <a 
          href="#" 
          className="flex items-center gap-2 sm:gap-3 group ios-press shrink-0 min-w-0"
        >
          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black font-extrabold text-[11px] sm:text-xs flex items-center justify-center tracking-tighter group-hover:scale-105 group-hover:rotate-1 transition-all shadow-md shrink-0">
            {lang === 'vi' ? 'NVT' : 'TN'}
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-neutral-900 dark:text-white font-bold tracking-tight text-xs sm:text-sm uppercase truncate">
              {lang === 'vi' ? 'Ngụy Vạn Thành' : 'Thanh Nguy'}
            </span>
            <span className="hidden sm:inline text-[10px] text-neutral-600 dark:text-[#a3a3a3] tracking-wider uppercase font-medium truncate">
              Frontend Architecture
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-[11px] font-semibold tracking-widest uppercase text-neutral-600 dark:text-[#a3a3a3]">
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors ios-press">{t.nav.overview}</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors ios-press">{t.nav.projects}</a>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors ios-press">{t.nav.stack}</a>
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors ios-press">{t.nav.history}</a>
        </nav>

        {/* Header Action Controls */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Bilingual SVG Flag Switcher Button - Optimized for compact screens */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full text-xs font-bold bg-neutral-100 hover:bg-neutral-200 dark:bg-[#1a1a1a] dark:hover:bg-[#252525] border border-neutral-300 dark:border-[#383838] transition-all ios-press text-neutral-900 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/5 cursor-pointer shrink-0"
            title={lang === 'en' ? "Chuyển sang Tiếng Việt" : "Switch to English"}
            aria-label="Switch Language"
          >
            {lang === 'en' ? (
              <>
                <UkFlag />
                <span className="font-mono text-[10px] sm:text-[11px] font-extrabold tracking-wider">EN</span>
              </>
            ) : (
              <>
                <VietnamFlag />
                <span className="font-mono text-[10px] sm:text-[11px] font-extrabold tracking-wider text-amber-600 dark:text-amber-400">VI</span>
              </>
            )}
          </button>

          {/* Quick Terminal / Command Palette trigger */}
          <button
            onClick={onOpenCommand}
            className="p-1.5 sm:p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ios-press"
            title="Command Palette (Ctrl + K / ⌘K)"
            aria-label="Command Palette"
          >
            <Command className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Theme Toggle (Light / Dark) */}
          <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ios-press"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" /> : <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600" />}
          </button>

          {/* LinkedIn (hidden on smaller mobile screens) */}
          <a 
            href="https://www.linkedin.com/in/itsthanhnguy/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0077b5]/10 hover:bg-[#0077b5]/20 dark:bg-[#0077b5]/15 dark:hover:bg-[#0077b5]/25 border border-[#0077b5]/30 text-[#0077b5] dark:text-[#38bdf8] font-medium text-xs transition-all ios-press"
            title="Connect on LinkedIn"
          >
            <FaLinkedinIn className="w-3.5 h-3.5 text-[#0077b5]" role="presentation" aria-hidden="true" />
            <span className="text-xs font-semibold">LinkedIn</span>
          </a>

          {/* Resume PDF (hidden on mobile, in drawer menu instead) */}
          <a 
            href="/Thanh_Nguy_CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-[#333333] hover:border-black dark:hover:border-white text-neutral-900 dark:text-white font-medium text-xs transition-all hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black whitespace-nowrap ios-press shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.hero.viewResume}</span>
          </a>

          {/* Mobile menu hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-xl text-neutral-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors ios-press"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#121212]/95 backdrop-blur-2xl border border-neutral-200 dark:border-[#222222] px-5 py-4 space-y-3 animate-fadeIn mt-2 rounded-2xl shadow-xl max-w-5xl mx-2.5 sm:mx-3">
          <div className="flex flex-col space-y-3 text-xs font-bold tracking-widest uppercase text-neutral-700 dark:text-[#a3a3a3]">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-black dark:hover:text-white transition-colors"
            >
              {t.nav.overview}
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-black dark:hover:text-white transition-colors"
            >
              {t.nav.projects}
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-black dark:hover:text-white transition-colors"
            >
              {t.nav.stack}
            </a>
            <a 
              href="#experience" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-black dark:hover:text-white transition-colors"
            >
              {t.nav.history}
            </a>
            <a 
              href="https://www.linkedin.com/in/itsthanhnguy/" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 text-[#0077b5] dark:text-[#38bdf8] flex items-center gap-2"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="/Thanh_Nguy_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 text-emerald-600 dark:text-emerald-400 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>{t.hero.viewResume}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
