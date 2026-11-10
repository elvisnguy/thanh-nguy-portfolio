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
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'pt-2.5 pb-2 px-3 sm:px-6' : 'pt-0 px-0'}`}>
      {/* iOS Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-neutral-400 via-sky-500 to-indigo-500 transition-all duration-150 z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className={`mx-auto transition-all duration-300 ${
        scrolled 
          ? 'max-w-5xl rounded-full bg-white/90 dark:bg-[#121212]/80 backdrop-blur-2xl border border-neutral-200/90 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-black/80 px-4 sm:px-6 py-2' 
          : 'max-w-6xl px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 bg-[#f8f9fa]/90 dark:bg-[#0d0d0d]/85 backdrop-blur-xl border-b border-neutral-200/80 dark:border-[#222222]'
      } flex items-center justify-between`}>
        
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 sm:gap-3 group ios-press"
        >
          <span className="w-8 h-8 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black font-extrabold text-xs flex items-center justify-center tracking-tighter group-hover:scale-105 group-hover:rotate-1 transition-all shadow-md shrink-0">
            TN
          </span>
          <div className="flex flex-col">
            <span className="text-neutral-900 dark:text-white font-bold tracking-tight text-sm uppercase">
              Thanh Nguy
            </span>
            <span className="text-[10px] text-neutral-600 dark:text-[#a3a3a3] tracking-wider uppercase font-medium">
              Frontend Architecture
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-[11px] font-semibold tracking-widest uppercase text-neutral-600 dark:text-[#a3a3a3]">
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors ios-press">{t.nav.overview}</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors ios-press">{t.nav.projects}</a>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors ios-press">{t.nav.stack}</a>
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors ios-press">{t.nav.history}</a>
        </nav>

        {/* Header Action Controls (Theme, Language Switcher, Command, Resume) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Terminal / Command Palette trigger */}
          <button
            onClick={onOpenCommand}
            className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ios-press"
            title="Command Palette (Ctrl + K / ⌘K)"
            aria-label="Command Palette"
          >
            <Command className="w-4 h-4" />
          </button>

          {/* Language Switcher Flag Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border border-neutral-300 dark:border-[#333333] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all ios-press text-neutral-800 dark:text-neutral-200 shadow-sm"
            title={lang === 'en' ? "Chuyển sang Tiếng Việt" : "Switch to English"}
            aria-label="Switch Language"
          >
            {lang === 'en' ? (
              <>
                <span className="text-sm leading-none" role="img" aria-label="UK flag">🇬🇧</span>
                <span className="font-mono text-[10px] tracking-wider">EN</span>
              </>
            ) : (
              <>
                <span className="text-sm leading-none" role="img" aria-label="Vietnam flag">🇻🇳</span>
                <span className="font-mono text-[10px] tracking-wider">VI</span>
              </>
            )}
          </button>

          {/* Theme Toggle (Light / Dark) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ios-press"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          <a 
            href="https://www.linkedin.com/in/itsthanhnguy/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0077b5]/10 hover:bg-[#0077b5]/20 dark:bg-[#0077b5]/15 dark:hover:bg-[#0077b5]/25 border border-[#0077b5]/30 text-[#0077b5] dark:text-[#38bdf8] font-medium text-xs transition-all ios-press"
            title="Connect on LinkedIn"
          >
            <FaLinkedinIn className="w-3.5 h-3.5 text-[#0077b5]" role="presentation" aria-hidden="true" />
            <span className="hidden sm:inline text-xs font-semibold">LinkedIn</span>
          </a>

          <a 
            href="/Thanh_Nguy_CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-[#333333] hover:border-black dark:hover:border-white text-neutral-900 dark:text-white font-medium text-xs transition-all hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black whitespace-nowrap ios-press shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.hero.viewResume}</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-neutral-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors ios-press"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#121212]/95 backdrop-blur-2xl border-b border-neutral-200 dark:border-[#222222] px-5 py-4 space-y-3 animate-fadeIn mt-2 rounded-2xl shadow-xl max-w-5xl mx-3">
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
              href="/Thanh_Nguy_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 text-sky-600 dark:text-sky-400 flex items-center gap-2"
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
