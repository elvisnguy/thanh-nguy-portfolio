import React from 'react';
import { TECH_MAP } from '../../data/projects';

interface TechBadgeProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

export function TechBadge({ name, className = '', onClick }: TechBadgeProps) {
  const meta = TECH_MAP[name];
  const Icon = meta?.icon;

  return (
    <span 
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-[#181818]/90 border border-neutral-200 dark:border-[#262626] text-[10px] sm:text-[11px] font-mono tracking-wide text-neutral-700 dark:text-[#b5b5b5] hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-[#404040] hover:scale-105 transition-all cursor-default shadow-sm ${className}`}
    >
      {Icon && (
        <Icon 
          className="w-3.5 h-3.5 shrink-0" 
          style={{ color: meta.color || '#ffffff' }}
        />
      )}
      <span>{name}</span>
    </span>
  );
}
