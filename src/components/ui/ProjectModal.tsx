import React from 'react';
import { X, CheckCircle, AlertCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Project } from '../../types';
import { TechBadge } from './TechBadge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  playClick?: (type?: 'tick' | 'pop') => void;
}

export function ProjectModal({ project, onClose, playClick }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* iOS Frosted Backdrop */}
      <div 
        onClick={() => {
          playClick?.('tick');
          onClose();
        }}
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-fadeIn" 
      />

      {/* iOS Sheet Content */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-[#282828] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 animate-scaleUp overflow-hidden">
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-[#222222]">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 dark:text-[#737373] uppercase">
              Architecture Deep-Dive &bull; {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-white mt-1">
              {project.title}
            </h3>
            <p className="text-xs text-neutral-600 dark:text-[#888888] mt-0.5">
              {project.role} &bull; {project.timeline}
            </p>
          </div>

          <button
            onClick={() => {
              playClick?.('tick');
              onClose();
            }}
            className="p-2 rounded-full text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ios-press"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Deep Dive Engineering Breakdown */}
        <div className="py-6 space-y-5 text-xs sm:text-sm">
          {/* Summary */}
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-200 mb-1.5 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Executive Overview
            </h4>
            <p className="text-neutral-600 dark:text-[#a3a3a3] leading-relaxed font-light">
              {project.summary}
            </p>
          </div>

          {/* Hard Engineering Problem */}
          <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#1a1a1a] border border-neutral-200 dark:border-[#262626]">
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-1.5 flex items-center gap-2 text-xs uppercase tracking-wider text-rose-500 dark:text-rose-400">
              <AlertCircle className="w-4 h-4" /> Core Technical Problem
            </h4>
            <p className="text-neutral-600 dark:text-[#a3a3a3] leading-relaxed font-light text-xs sm:text-sm">
              {project.architectureDetails?.problem || "Handling heavy state reactivity and complex data grid rendering without causing CPU lag or memory leaks across multi-page workflows."}
            </p>
          </div>

          {/* Solution & Implementation */}
          <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#1a1a1a] border border-neutral-200 dark:border-[#262626]">
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-1.5 flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
              <CheckCircle className="w-4 h-4" /> Implementation & Solution
            </h4>
            <p className="text-neutral-600 dark:text-[#a3a3a3] leading-relaxed font-light text-xs sm:text-sm">
              {project.architectureDetails?.solution || "Implemented fine-grained reactive state models, decomposed complex UI into headless Storybook-isolated components, and standardized lifecycle cleanup."}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="text-[10px] font-mono tracking-widest text-neutral-500 dark:text-[#737373] uppercase mb-2">
              Technology Stack Used
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <TechBadge key={idx} name={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-neutral-200 dark:border-[#222222] flex items-center justify-between">
          <span className="text-[11px] text-neutral-400 dark:text-[#666666] font-mono">
            ESC or Click outside to close
          </span>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black font-bold text-xs uppercase tracking-wider transition-all ios-press shadow-md"
            >
              <span>Visit Production Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
