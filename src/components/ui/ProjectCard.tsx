import React, { useRef, useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { Project } from '../../types';
import { TechBadge } from './TechBadge';

interface ProjectCardProps {
  project: Project;
  idx: number;
  onOpenDetails: (project: Project) => void;
  playClick?: (type?: 'tick' | 'pop') => void;
}

export function ProjectCard({ project, idx, onOpenDetails, playClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative p-5 sm:p-7 md:p-8 rounded-2xl bg-white dark:bg-[#121212] border border-neutral-200/90 dark:border-[#222222] hover:border-neutral-400 dark:hover:border-neutral-500/80 transition-all duration-300 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/[0.03] overflow-hidden ios-press-sm"
    >
      {/* iOS Spotlight Specular Radial Highlight via CSS Custom Properties (Zero React re-renders) */}
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(450px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(255, 255, 255, 0.12), transparent 70%)`
        }}
      />

      <div className="relative z-10">
        {/* Top Category & Action Buttons Bar */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-[10px] font-mono tracking-widest text-neutral-600 dark:text-[#a3a3a3] uppercase">
            0{idx + 1} / {project.category}
          </span>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Quick Deep-Dive Button */}
            <button
              onClick={() => {
                playClick?.('pop');
                onOpenDetails(project);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-[#1c1c1c] dark:hover:bg-neutral-800 text-neutral-700 dark:text-[#a3a3a3] hover:text-black dark:hover:text-white text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all border border-neutral-300 dark:border-[#2a2a2a] ios-press"
              title="Architecture Deep-Dive"
            >
              <Layers className="w-3 h-3 text-neutral-500 dark:text-neutral-400" />
              <span>Deep Dive</span>
            </button>

            {project.secondaryUrl && (
              <a
                href={project.secondaryUrl.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick?.('tick')}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-[#1a1a1a] dark:hover:bg-[#252525] text-neutral-700 dark:text-[#a3a3a3] hover:text-black dark:hover:text-white text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all border border-neutral-300 dark:border-[#2a2a2a] ios-press"
                title={`Explore ${project.secondaryUrl.label}`}
              >
                <span>{project.secondaryUrl.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick?.('tick')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 hover:bg-black dark:bg-[#1c1c1c] dark:hover:bg-white text-white dark:text-[#a3a3a3] dark:hover:text-black text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all border border-neutral-800 dark:border-[#2a2a2a] dark:hover:border-white shadow-sm ios-press"
                title={`Visit ${project.urlLabel || 'Live Site'}`}
              >
                <span>{project.urlLabel || 'Live'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Full-width Title Header: Luôn thẳng tắp trên 1 hàng (trừ khi màn hình quá hẹp mới xuống) */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-neutral-600 dark:text-[#888888] font-medium mt-1">
            {project.role} &bull; <span className="text-neutral-800 dark:text-[#b5b5b5]">{project.timeline}</span>
          </p>
        </div>

        <p className="text-neutral-600 dark:text-[#a3a3a3] text-xs sm:text-sm leading-relaxed mb-5 font-light">
          {project.summary}
        </p>

        {/* Bullets */}
        <div className="space-y-2 mb-6">
          {project.highlights.map((item, hIdx) => (
            <div key={hIdx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-[#b0b0b0] leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-[#525252] group-hover:bg-black dark:group-hover:bg-white transition-colors shrink-0 mt-1.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tech Pills with Icons */}
      <div className="relative z-10 pt-4 border-t border-neutral-200 dark:border-[#1f1f1f] flex flex-wrap gap-1.5 sm:gap-2">
        {project.techStack.map((tech, tIdx) => (
          <TechBadge key={tIdx} name={tech} />
        ))}
      </div>
    </div>
  );
}
