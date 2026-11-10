import React, { useState, useEffect } from 'react';
import { Search, X, FileText, ArrowUpRight, Copy, Check, Terminal, Command } from 'lucide-react';
import { PROJECTS, TECH_MAP } from '../../data/projects';
import { Project } from '../../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  playClick?: (type?: 'tick' | 'pop' | 'success') => void;
}

export function CommandPalette({ isOpen, onClose, onSelectProject, playClick }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        playClick?.('pop');
        if (isOpen) onClose();
        else {
          // Open handled by parent or toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, playClick]);

  if (!isOpen) return null;

  const filteredProjects = PROJECTS.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.techStack.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const copyEmail = () => {
    navigator.clipboard.writeText('vanthanhnguy2907@gmail.com');
    setCopied('Email');
    playClick?.('success');
    setTimeout(() => setCopied(null), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('0702388772');
    setCopied('Phone');
    playClick?.('success');
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-md animate-fadeIn" 
      />

      <div className="relative w-full max-w-xl bg-white dark:bg-[#141414] border border-neutral-300 dark:border-[#2a2a2a] rounded-2xl shadow-2xl overflow-hidden z-10 animate-scaleUp">
        {/* Search input header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-neutral-200 dark:border-[#222222]">
          <Search className="w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search (e.g. Angular, Signals, Next.js, PDF)..."
            aria-label="Search portfolio and commands"
            autoFocus
            className="w-full bg-transparent text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-neutral-100 dark:bg-[#222222] border border-neutral-300 dark:border-[#333333] text-[10px] text-neutral-500 font-mono">
            ESC
          </kbd>
          <button 
            onClick={onClose} 
            className="p-1 rounded text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            aria-label="Close Command Palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {/* Quick Actions */}
          <div>
            <div className="text-[10px] font-mono tracking-widest text-neutral-400 dark:text-[#666666] uppercase px-2 mb-1.5">
              Instant Actions
            </div>
            <div className="space-y-1">
              <a
                href="/Thanh_Nguy_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  playClick?.('tick');
                  onClose();
                }}
                className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-[#202020] text-neutral-800 dark:text-[#d4d4d4] text-xs transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span className="font-medium">Open Resume (PDF)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>

              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-[#202020] text-neutral-800 dark:text-[#d4d4d4] text-xs transition-colors text-left"
              >
                <div className="flex items-center gap-2.5">
                  {copied === 'Email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-sky-500" />}
                  <span className="font-medium">Copy Email: <span className="text-neutral-500 dark:text-neutral-400">vanthanhnguy2907@gmail.com</span></span>
                </div>
                {copied === 'Email' && <span className="text-[10px] font-mono text-emerald-500">Copied!</span>}
              </button>

              <button
                onClick={copyPhone}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-[#202020] text-neutral-800 dark:text-[#d4d4d4] text-xs transition-colors text-left"
              >
                <div className="flex items-center gap-2.5">
                  {copied === 'Phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-amber-500" />}
                  <span className="font-medium">Copy Phone: <span className="text-neutral-500 dark:text-neutral-400">(+84) 702 388 772</span></span>
                </div>
                {copied === 'Phone' && <span className="text-[10px] font-mono text-emerald-500">Copied!</span>}
              </button>
            </div>
          </div>

          {/* Filtered Projects */}
          <div>
            <div className="text-[10px] font-mono tracking-widest text-neutral-400 dark:text-[#666666] uppercase px-2 mb-1.5">
              Projects & Architecture ({filteredProjects.length})
            </div>
            <div className="space-y-1">
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    playClick?.('pop');
                    onSelectProject(p);
                    onClose();
                  }}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-[#202020] cursor-pointer text-xs transition-colors"
                >
                  <div className="min-w-0 pr-3">
                    <div className="font-bold text-neutral-900 dark:text-white truncate">
                      {p.title}
                    </div>
                    <div className="text-[11px] text-neutral-500 dark:text-[#888888] truncate font-light">
                      {p.category} &bull; {p.role}
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-neutral-200 dark:bg-[#1a1a1a] text-[10px] font-mono text-neutral-600 dark:text-neutral-400 shrink-0">
                    Deep-Dive &rarr;
                  </span>
                </div>
              ))}
              {filteredProjects.length === 0 && (
                <div className="p-4 text-center text-xs text-neutral-500">
                  No projects matching "{query}"
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-2.5 bg-neutral-50 dark:bg-[#111111] border-t border-neutral-200 dark:border-[#222222] flex items-center justify-between text-[11px] text-neutral-500 dark:text-[#666666] px-4 font-mono">
          <div className="flex items-center gap-1.5">
            <Command className="w-3.5 h-3.5" />
            <span>Developer Quick Navigation</span>
          </div>
          <span>v2.0 Clean Modular</span>
        </div>
      </div>
    </div>
  );
}
