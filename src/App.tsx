import { useState, useEffect, lazy, Suspense } from 'react';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/layout/BackToTop';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { AmbientGlow } from './components/ui/AmbientGlow';
import { Project } from './types';

// Lazy-load heavier interactive dialogs
const ProjectModal = lazy(() => import('./components/ui/ProjectModal').then(m => ({ default: m.ProjectModal })));
const CommandPalette = lazy(() => import('./components/ui/CommandPalette').then(m => ({ default: m.CommandPalette })));

export default function App() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false);

  const { scrolled, scrollProgress } = useScrollProgress();
  const { lang, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`min-h-screen bg-[#f8f9fa] dark:bg-[#0d0d0d] text-neutral-900 dark:text-[#e5e5e5] relative selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-800 dark:selection:text-white font-sans transition-colors duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Lighting Mesh */}
      <AmbientGlow />

      {/* iOS Floating Island Header */}
      <Header
        scrolled={scrolled}
        scrollProgress={scrollProgress}
        theme={theme}
        toggleTheme={toggleTheme}
        lang={lang}
        toggleLanguage={toggleLanguage}
        onOpenCommand={() => setIsCommandOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <HeroSection lang={lang} />
        <ProjectsSection 
          lang={lang}
          onOpenDetails={(p) => setActiveModalProject(p)} 
        />
        <SkillsSection lang={lang} />
        <ExperienceSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Back to Top */}
      <BackToTop scrolled={scrolled} />

      {/* Project Architecture Deep-Dive Modal (Code-split) */}
      {activeModalProject && (
        <Suspense fallback={null}>
          <ProjectModal 
            project={activeModalProject} 
            lang={lang}
            onClose={() => setActiveModalProject(null)} 
          />
        </Suspense>
      )}

      {/* Quick Terminal / Command Palette (Ctrl+K) (Code-split) */}
      {isCommandOpen && (
        <Suspense fallback={null}>
          <CommandPalette 
            isOpen={isCommandOpen} 
            lang={lang}
            onClose={() => setIsCommandOpen(false)}
            onSelectProject={(p) => setActiveModalProject(p)}
          />
        </Suspense>
      )}
    </div>
  );
}
