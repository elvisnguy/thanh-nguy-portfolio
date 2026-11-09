import React from 'react';
import { Cpu } from 'lucide-react';
import { SKILL_GROUPS } from '../../data/projects';

interface SkillsSectionProps {
  playClick?: (type?: 'tick' | 'pop') => void;
}

export function SkillsSection({ playClick }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-neutral-200 dark:border-[#1f1f1f]">
      <div className="mb-8 sm:mb-12">
        <div className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-neutral-600 dark:text-[#a3a3a3] mb-1.5 sm:mb-2 flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5" /> Technical Taxonomy
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-[-0.03em]">
          Stack & Tooling
        </h2>
        <p className="text-neutral-600 dark:text-[#888888] text-xs sm:text-sm mt-1.5 sm:mt-2 font-light">
          Technologies and frameworks utilized across production enterprise engagements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {SKILL_GROUPS.map((group, idx) => (
          <div 
            key={idx}
            className="p-5 sm:p-7 rounded-2xl bg-white/70 dark:bg-[#121212]/90 backdrop-blur-md border border-neutral-200 dark:border-[#222222] hover:border-neutral-400 dark:hover:border-white/30 transition-all duration-300 flex flex-col justify-between ios-press-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/[0.02]"
          >
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
                {group.name}
              </h3>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {group.skills.map((skill, sIdx) => {
                  const IconComponent = skill.icon;
                  return (
                    <span 
                      key={sIdx}
                      onClick={() => playClick?.('pop')}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-[#171717] dark:hover:bg-[#202020] border border-neutral-200 dark:border-[#262626] hover:border-neutral-400 dark:hover:border-neutral-500 text-xs font-medium text-neutral-700 dark:text-[#d4d4d4] hover:text-black dark:hover:text-white transition-all shadow-sm hover:scale-105 cursor-default"
                    >
                      {IconComponent && (
                        <IconComponent 
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" 
                          style={{ color: skill.color || '#ffffff' }}
                          role="presentation"
                          aria-hidden="true"
                        />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
