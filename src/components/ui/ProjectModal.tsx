import React, { useEffect, useState } from 'react';
import { 
  X, 
  CheckCircle, 
  AlertCircle, 
  ArrowUpRight, 
  ShieldCheck, 
  Trophy, 
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react';
import { Project } from '../../types';
import { TechBadge } from './TechBadge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  playClick?: (type?: 'tick' | 'pop' | 'success') => void;
}

export function ProjectModal({ project, onClose, playClick }: ProjectModalProps) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (project) {
      setClosing(false);
      // Play crisp pop sound on popup reveal
      playClick?.('pop');

      // Lock body scroll and prevent background scroll bouncing
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalStyle;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, playClick]);

  if (!project) return null;

  const handleClose = () => {
    playClick?.('tick');
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 250);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-hidden overscroll-contain">
      {/* iOS Frosted Backdrop with dynamic blur */}
      <div 
        onClick={handleClose}
        className={`fixed inset-0 bg-black/75 backdrop-blur-xl sm:backdrop-blur-2xl transition-opacity duration-300 ${
          closing ? 'opacity-0' : 'animate-ios-backdrop'
        }`} 
      />

      {/* iOS Sheet Content with Spring Pop & Specular Sheen */}
      <div className={`relative w-full max-w-2xl max-h-[92vh] sm:max-h-[88vh] flex flex-col bg-white/95 dark:bg-[#121212]/95 backdrop-blur-3xl border border-neutral-200/90 dark:border-white/15 rounded-2xl sm:rounded-3xl shadow-[0_32px_96px_rgba(0,0,0,0.6)] z-10 overflow-hidden ios-spring ${
        closing 
          ? 'opacity-0 scale-95 translate-y-4 duration-200 ease-in' 
          : 'animate-jelly-pop'
      }`}>
        
        {/* Specular Ambient Glow inside modal */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-400/[0.08] blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-sky-500/10 dark:bg-sky-400/[0.08] blur-[80px] rounded-full pointer-events-none" />

        {/* Top Header Row - Fixed Sticky at Top */}
        <div className="relative z-10 flex items-start justify-between gap-3 p-4 sm:p-6 pb-3 sm:pb-4 border-b border-neutral-200/80 dark:border-white/10 shrink-0 bg-white/40 dark:bg-[#121212]/40 backdrop-blur-md animate-stagger-1">
          <div className="min-w-0 pr-2">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase font-semibold border border-indigo-500/20">
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Architecture Deep-Dive
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-neutral-600 dark:text-[#a3a3a3] tracking-wider uppercase truncate">
                &bull; {project.category}
              </span>
            </div>

            <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-snug break-words">
              {project.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-neutral-600 dark:text-[#a3a3a3] mt-0.5 font-medium">
              {project.role} &bull; <span className="text-neutral-800 dark:text-[#b5b5b5] font-semibold">{project.timeline}</span>
            </p>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 sm:p-2.5 rounded-full text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white bg-neutral-100 hover:bg-neutral-200 dark:bg-[#1c1c1c] dark:hover:bg-[#282828] border border-neutral-200 dark:border-[#333333] transition-all ios-press shrink-0 shadow-sm"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
          </button>
        </div>

        {/* Deep Dive Content Blocks - Scrollable Container inside modal */}
        <div className="relative z-10 overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-3.5 sm:space-y-4.5 text-xs sm:text-sm">
          
          {/* Executive Overview */}
          <div className="animate-stagger-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-200 mb-1 flex items-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Executive Overview
            </h4>
            <p className="text-neutral-600 dark:text-[#a3a3a3] leading-relaxed font-light text-xs sm:text-sm">
              {project.summary}
            </p>
          </div>

          {/* Hard Technical Problem */}
          <div className="animate-stagger-3 p-3.5 sm:p-4.5 rounded-xl sm:rounded-2xl bg-rose-500/[0.04] dark:bg-rose-500/[0.06] border border-rose-500/20 dark:border-rose-500/25 transition-all">
            <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-1 flex items-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> Core Technical Challenge
            </h4>
            <p className="text-neutral-700 dark:text-[#cccccc] leading-relaxed font-light text-[11px] sm:text-[13px]">
              {project.architectureDetails?.problem || "Handling heavy state reactivity and high-density data tables without triggering frame drops or memory leaks across multi-page workflows."}
            </p>
          </div>

          {/* Solution & Implementation */}
          <div className="animate-stagger-4 p-3.5 sm:p-4.5 rounded-xl sm:rounded-2xl bg-emerald-500/[0.04] dark:bg-emerald-500/[0.06] border border-emerald-500/20 dark:border-emerald-500/25 transition-all">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-1 flex items-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-wider">
              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> Solution & Architecture Pattern
            </h4>
            <p className="text-neutral-700 dark:text-[#cccccc] leading-relaxed font-light text-[11px] sm:text-[13px]">
              {project.architectureDetails?.solution || "Re-architected view layer with fine-grained reactivity, decoupled UI components via Storybook, and optimized state lifecycle management."}
            </p>
          </div>

          {/* Engineering Win / Commercial Impact */}
          {project.architectureDetails?.engineeringWin && (
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-indigo-500/[0.04] dark:bg-indigo-500/[0.06] border border-indigo-500/20 dark:border-indigo-500/25">
              <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-1 flex items-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> Architectural Win & Impact
              </h4>
              <p className="text-neutral-700 dark:text-[#cccccc] leading-relaxed font-light text-[11px] sm:text-[13px]">
                {project.architectureDetails.engineeringWin}
              </p>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="pt-1">
            <div className="text-[10px] font-mono tracking-widest text-neutral-600 dark:text-[#a3a3a3] uppercase mb-1.5 font-semibold">
              Verified Production Tech Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <TechBadge key={idx} name={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions - Fixed Sticky at Bottom */}
        <div className="relative z-10 p-3.5 sm:p-5 border-t border-neutral-200/80 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 shrink-0 bg-white/40 dark:bg-[#121212]/40 backdrop-blur-md">
          <span className="text-[10px] sm:text-[11px] text-neutral-600 dark:text-[#888888] font-mono hidden sm:inline">
            ESC or Click outside to dismiss
          </span>

          <div className="flex flex-wrap items-center gap-2">
            {project.secondaryUrl && (
              <a
                href={project.secondaryUrl.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick?.('tick')}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 sm:px-4.5 sm:py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-[#1f1f1f] dark:hover:bg-[#2a2a2a] text-neutral-800 dark:text-neutral-200 font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all border border-neutral-300 dark:border-[#333333] ios-press flex-1 sm:flex-initial text-center"
              >
                <span>{project.secondaryUrl.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick?.('tick')}
                className="sheen-glow inline-flex items-center justify-center gap-1.5 px-4 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-black font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all ios-press shadow-xl hover:shadow-2xl flex-1 sm:flex-initial text-center"
              >
                <span>{project.id === 'tech2b' ? 'View Case Study' : 'View Live Showcase'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
