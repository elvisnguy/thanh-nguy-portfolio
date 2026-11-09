import React, { useState } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  Command 
} from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';

interface HeaderProps {
  scrolled: boolean;
  scrollProgress: number;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  onOpenCommand: () => void;
  playClick?: (type?: 'tick' | 'pop') => void;
}

export function Header({
  scrolled,
  scrollProgress,
  theme,
  toggleTheme,
  soundEnabled,
  toggleSound,
  onOpenCommand,
  playClick
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          onClick={() => playClick?.('pop')}
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
              Portfolio / Archive
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-[11px] font-semibold tracking-widest uppercase text-neutral-600 dark:text-[#a3a3a3]">
          <a href="#about" onClick={() => playClick?.('tick')} className="hover:text-black dark:hover:text-white transition-colors ios-press">Overview</a>
          <a href="#projects" onClick={() => playClick?.('tick')} className="hover:text-black dark:hover:text-white transition-colors ios-press">Projects</a>
          <a href="#skills" onClick={() => playClick?.('tick')} className="hover:text-black dark:hover:text-white transition-colors ios-press">Stack</a>
          <a href="#experience" onClick={() => playClick?.('tick')} className="hover:text-black dark:hover:text-white transition-colors ios-press">History</a>
        </nav>

        {/* Header Action Controls (Theme, Sound, Command, Resume) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Terminal / Command Palette trigger */}
          <button
            onClick={() => {
              playClick?.('pop');
              onOpenCommand();
            }}
            className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ios-press"
            title="Command Palette (Ctrl + K / ⌘K)"
            aria-label="Command Palette"
          >
            <Command className="w-4 h-4" />
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              toggleSound();
              playClick?.('pop');
            }}
            className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ios-press"
            title={soundEnabled ? "Mute iOS Sound Effects" : "Enable iOS Sound Effects"}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-500" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Theme Toggle (Light / Dark) */}
          <button
            onClick={() => {
              toggleTheme();
              playClick?.('tick');
            }}
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
            onClick={() => playClick?.('tick')}
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
            onClick={() => playClick?.('tick')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-[#333333] hover:border-black dark:hover:border-white text-neutral-900 dark:text-white font-medium text-xs transition-all hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black whitespace-nowrap ios-press shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => {
              playClick?.('pop');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-xl text-neutral-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors ios-press"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#121212]/95 backdrop-blur-2xl border-b border-neutral-200 dark:border-[#222222] px-5 py-4 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-3 text-xs font-bold tracking-widest uppercase text-neutral-600 dark:text-[#a3a3a3]">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-black dark:hover:text-white py-1 transition-colors"
            >
              Overview
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-black dark:hover:text-white py-1 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-black dark:hover:text-white py-1 transition-colors"
            >
              Stack & Tooling
            </a>
            <a 
              href="#experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-black dark:hover:text-white py-1 transition-colors"
            >
              Experience History
            </a>
          </div>
          <div className="pt-3 border-t border-neutral-200 dark:border-[#222222] flex gap-2">
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black font-bold text-xs uppercase tracking-wider ios-press"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
