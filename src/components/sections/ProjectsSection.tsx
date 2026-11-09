import React, { useState } from 'react';
import { FolderGit2 } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../types';
import { ProjectCard } from '../ui/ProjectCard';

interface ProjectsSectionProps {
  onOpenDetails: (project: Project) => void;
  playClick?: (type?: 'tick' | 'pop') => void;
}

export function ProjectsSection({ onOpenDetails, playClick }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Enterprise Angular', 'React & Next.js', 'Full-stack & CMS', 'Design Systems'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const handleSelectCategory = (cat: string) => {
    playClick?.('tick');
    setActiveCategory(cat);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-neutral-200 dark:border-[#1f1f1f]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-5">
        <div>
          <div className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-neutral-600 dark:text-[#a3a3a3] mb-1.5 sm:mb-2 flex items-center gap-2">
            <FolderGit2 className="w-3.5 h-3.5" /> Commercial Index
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-[-0.03em]">
            Selected Works
          </h2>
        </div>

        {/* iOS Segmented Control Category Pill Bar */}
        <div className="p-1 rounded-full bg-neutral-100 dark:bg-[#141414] border border-neutral-200 dark:border-[#222222] flex items-center gap-1 overflow-x-auto scrollbar-none w-full md:w-auto -mx-4 px-4 md:mx-0 md:px-1 shadow-inner">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleSelectCategory(cat)}
                className={`relative px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 shrink-0 whitespace-nowrap ios-press ${
                  isSelected
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black shadow-lg shadow-black/10 dark:shadow-white/10'
                    : 'text-neutral-600 hover:text-black dark:text-[#a3a3a3] dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {filteredProjects.map((project, idx) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            idx={idx} 
            onOpenDetails={onOpenDetails}
            playClick={playClick}
          />
        ))}
      </div>
    </section>
  );
}
