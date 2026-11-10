import React, { useState } from 'react';
import { FolderGit2 } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../types';
import { ProjectCard } from '../ui/ProjectCard';
import { TRANSLATIONS } from '../../data/translations';
import { Language } from '../../hooks/useLanguage';

interface ProjectsSectionProps {
  lang: Language;
  onOpenDetails: (project: Project) => void;
}

export function ProjectsSection({ lang, onOpenDetails }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const t = TRANSLATIONS[lang].projects;

  const categoryLabels: Record<string, { en: string; vi: string }> = {
    'All': { en: 'All Works', vi: 'Tất cả' },
    'Enterprise Angular': { en: 'Enterprise Angular', vi: 'Angular Doanh Nghiệp' },
    'React & Next.js': { en: 'React & Next.js', vi: 'React & Next.js' },
    'Full-stack & CMS': { en: 'Full-stack & CMS', vi: 'Full-stack & CMS' },
    'Design Systems': { en: 'Design Systems', vi: 'Design Systems' },
  };

  const categories = ['All', 'Enterprise Angular', 'React & Next.js', 'Full-stack & CMS', 'Design Systems'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-neutral-200 dark:border-[#1f1f1f]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-5">
        <div>
          <div className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-neutral-600 dark:text-[#a3a3a3] mb-1.5 sm:mb-2 flex items-center gap-2">
            <FolderGit2 className="w-3.5 h-3.5" /> {t.label}
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-[-0.03em]">
            {t.heading}
          </h2>
          <p className="text-neutral-600 dark:text-[#888888] text-xs sm:text-sm mt-1.5 sm:mt-2 font-light max-w-xl">
            {t.subheading}
          </p>
        </div>

        {/* Category Pill Bar - Responsive with hidden scrollbars & clean edge bounds */}
        <div className="w-full md:w-auto overflow-hidden">
          <div className="p-1 rounded-full bg-neutral-100 dark:bg-[#141414] border border-neutral-200 dark:border-[#222222] flex items-center gap-1 overflow-x-auto no-scrollbar scrollbar-none shadow-inner max-w-full">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              const displayLabel = categoryLabels[cat] ? categoryLabels[cat][lang] : cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 shrink-0 whitespace-nowrap ios-press ${
                    isSelected
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-black shadow-lg shadow-black/10 dark:shadow-white/10'
                      : 'text-neutral-600 hover:text-black dark:text-[#a3a3a3] dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-white/[0.04]'
                  }`}
                >
                  {displayLabel}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {filteredProjects.map((project, idx) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            idx={idx} 
            lang={lang}
            onOpenDetails={onOpenDetails}
          />
        ))}
      </div>
    </section>
  );
}
