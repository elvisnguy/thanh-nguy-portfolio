import { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  FileDown, 
  FileText, 
  Copy, 
  Check, 
  Cpu, 
  Briefcase, 
  ChevronRight, 
  FolderGit2, 
  ArrowUpRight, 
  Menu, 
  X
} from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { PROJECTS, SKILL_GROUPS, TECH_MAP } from './data/projects';

// Interactive iOS-style Spotlight Specular Card
function ProjectCard({ project, idx }: { project: typeof PROJECTS[0]; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos(null);
      }}
      className="group relative p-5 sm:p-7 md:p-8 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-[#222222] hover:border-neutral-500/80 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-white/[0.03] overflow-hidden ios-press-sm"
    >
      {/* iOS Spotlight Specular Radial Highlight */}
      {isHovered && mousePos && (
        <div 
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.08), transparent 70%)`
          }}
        />
      )}

      <div className="relative z-10">
        {/* Responsive Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
          <div className="min-w-0 flex-1">
            <span className="text-[10px] font-mono tracking-widest text-[#737373] uppercase">
              0{idx + 1} / {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors mt-1 tracking-tight break-normal">
              {project.title}
            </h3>
            <p className="text-xs text-[#888888] font-medium mt-1">
              {project.role} &bull; <span className="text-[#b5b5b5]">{project.timeline}</span>
            </p>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] hover:bg-white text-[#a3a3a3] hover:text-black text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all shrink-0 border border-[#2a2a2a] hover:border-white shadow-sm ios-press"
              title={`Visit ${project.urlLabel || 'Live Site'}`}
            >
              <span>{project.urlLabel || 'Live'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <p className="text-[#a3a3a3] text-xs sm:text-sm leading-relaxed mb-5 font-light">
          {project.summary}
        </p>

        {/* Bullets */}
        <div className="space-y-2 mb-6">
          {project.highlights.map((item, hIdx) => (
            <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#b0b0b0] leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#525252] group-hover:bg-white transition-colors shrink-0 mt-1.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tech Pills with Icons */}
      <div className="relative z-10 pt-4 border-t border-[#1f1f1f] flex flex-wrap gap-1.5 sm:gap-2">
        {project.techStack.map((tech, tIdx) => {
          const techMeta = TECH_MAP[tech];
          const Icon = techMeta?.icon;
          return (
            <span 
              key={tIdx} 
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181818]/90 border border-[#262626] text-[10px] sm:text-[11px] font-mono tracking-wide text-[#b5b5b5] hover:text-white hover:border-[#404040] hover:scale-105 transition-all cursor-default shadow-sm"
            >
              {Icon && (
                <Icon 
                  className="w-3.5 h-3.5 shrink-0" 
                  style={{ color: techMeta.color || '#ffffff' }}
                />
              )}
              <span>{tech}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['All', 'Enterprise Angular', 'React & Next.js', 'Full-stack & CMS', 'Design Systems'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className={`min-h-screen bg-[#0d0d0d] text-[#e5e5e5] relative selection:bg-neutral-800 selection:text-white font-sans transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Lighting Mesh - Fully responsive boundaries */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100vw,1200px)] h-[500px] bg-gradient-to-b from-white/[0.05] via-transparent to-transparent blur-[140px]" />
        <div className="absolute top-[40%] -left-[100px] w-[min(80vw,500px)] h-[500px] bg-indigo-500/[0.04] blur-[160px] rounded-full" />
        <div className="absolute top-[70%] -right-[100px] w-[min(80vw,600px)] h-[600px] bg-sky-500/[0.04] blur-[160px] rounded-full" />
      </div>

      {/* iOS Floating Island Header Bar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'pt-2.5 pb-2 px-3 sm:px-6' : 'pt-0 px-0'}`}>
        <div className={`mx-auto transition-all duration-300 ${
          scrolled 
            ? 'max-w-5xl rounded-full bg-[#121212]/80 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/80 px-4 sm:px-6 py-2.5' 
            : 'max-w-6xl px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 bg-[#0d0d0d]/85 backdrop-blur-xl border-b border-[#222222]'
        } flex items-center justify-between`}>
          
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group ios-press">
            <span className="w-8 h-8 rounded-xl bg-white text-black font-extrabold text-xs flex items-center justify-center tracking-tighter group-hover:scale-105 group-hover:rotate-1 transition-all shadow-md shrink-0">
              TN
            </span>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-tight text-sm uppercase">
                Thanh Nguy
              </span>
              <span className="text-[10px] text-[#737373] tracking-wider uppercase font-medium">
                Portfolio / Archive
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] font-semibold tracking-widest uppercase text-[#888888]">
            <a href="#about" className="hover:text-white transition-colors ios-press">Overview</a>
            <a href="#projects" className="hover:text-white transition-colors ios-press">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors ios-press">Stack</a>
            <a href="#experience" className="hover:text-white transition-colors ios-press">History</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <a 
              href="https://www.linkedin.com/in/thanh-n-345518369/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0077b5]/15 hover:bg-[#0077b5]/25 border border-[#0077b5]/40 text-[#38bdf8] hover:text-white font-medium text-xs transition-all ios-press"
              title="Connect on LinkedIn"
            >
              <FaLinkedinIn className="w-3.5 h-3.5 text-[#0077b5]" />
              <span className="hidden sm:inline text-xs font-semibold">LinkedIn</span>
            </a>

            <a 
              href="/Thanh_Nguy_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#333333] hover:border-white text-white font-medium text-xs transition-all hover:bg-white hover:text-black whitespace-nowrap ios-press shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a 
              href="#contact" 
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black font-bold text-xs hover:bg-[#e5e5e5] transition-all tracking-wide shadow-md whitespace-nowrap ios-press"
            >
              <span>Get in Touch</span>
            </a>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors ios-press"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with iOS glass styling */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#121212]/95 backdrop-blur-2xl border-b border-[#222222] px-5 py-4 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-3 text-xs font-bold tracking-widest uppercase text-[#a3a3a3]">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white py-1 transition-colors"
              >
                Overview
              </a>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white py-1 transition-colors"
              >
                Projects
              </a>
              <a 
                href="#skills" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white py-1 transition-colors"
              >
                Stack & Tooling
              </a>
              <a 
                href="#experience" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white py-1 transition-colors"
              >
                Experience History
              </a>
            </div>
            <div className="pt-3 border-t border-[#222222] flex gap-2">
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider ios-press"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-12 sm:pt-20 md:pt-28 pb-14 sm:pb-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-6 sm:space-y-8">
          
          {/* Top Editorial Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs text-[#a3a3a3] font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wider uppercase text-[10px] sm:text-[11px] font-semibold text-[#b5b5b5]">
              Frontend Engineer &bull; 5 YOE &bull; Vietnam &bull; EU Remote
            </span>
          </div>

          {/* Big Editorial Headline */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[1.08] text-white">
              NGUY VAN THANH. <br />
              <span className="text-[#666666]">FRONTEND ARCHITECTURE.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-[#a3a3a3] leading-relaxed max-w-2xl font-light">
              Building and scaling production web applications with <span className="text-white font-medium">Angular 19 Signals</span>, <span className="text-white font-medium">Next.js</span>, and shared component systems. 5 years of commercial experience with direct European client collaboration.
            </p>
          </div>

          {/* iOS Specular Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 pt-2">
            {[
              { val: '5 YOE', label: 'Commercial Exp' },
              { val: 'Angular 19', label: 'Signals & Standalone' },
              { val: 'EU Remote', label: 'Direct Client Alignment' },
              { val: 'STU Engineer', label: "Information Technology" }
            ].map((metric, i) => (
              <div 
                key={i} 
                className="p-3.5 sm:p-5 rounded-2xl bg-[#141414]/90 backdrop-blur-md border border-[#222222] hover:border-white/40 transition-all duration-300 ios-press-sm hover:shadow-xl hover:shadow-white/[0.02]"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                  {metric.val}
                </div>
                <div className="text-[9px] sm:text-[10px] text-[#737373] font-semibold mt-1 tracking-wider uppercase">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* iOS Fluid Tactile CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
            <a
              href="https://www.linkedin.com/in/thanh-n-345518369/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#0077b5] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#006396] transition-all shadow-lg shadow-[#0077b5]/25 ios-press"
            >
              <FaLinkedinIn className="w-3.5 h-3.5 text-white" />
              <span>Connect on LinkedIn</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#e2e2e2] transition-all shadow-md ios-press"
            >
              <span>Explore Projects</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="/Thanh_Nguy_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#171717] hover:bg-[#222222] border border-[#2e2e2e] hover:border-neutral-500 text-white font-medium text-xs tracking-wider uppercase transition-all ios-press"
            >
              <FileText className="w-3.5 h-3.5 text-[#a3a3a3]" />
              <span>Resume PDF</span>
            </a>

            <a
              href="/Thanh_Nguy_CV.docx"
              download="Thanh_Nguy_CV.docx"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#171717] hover:bg-[#222222] border border-[#2e2e2e] hover:border-neutral-500 text-[#a3a3a3] hover:text-white font-medium text-xs tracking-wider uppercase transition-all ios-press"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>.DOCX</span>
            </a>

            <button
              onClick={() => copyToClipboard('vanthanhnguy2907@gmail.com', 'email')}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-transparent hover:bg-[#1a1a1a] text-[#888888] hover:text-white text-xs tracking-wider uppercase transition-all border border-transparent hover:border-[#2e2e2e] ios-press"
            >
              {copiedText === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText === 'email' ? 'Copied' : 'Email'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects Archive */}
      <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-[#1f1f1f]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-5">
          <div>
            <div className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#737373] mb-1.5 sm:mb-2 flex items-center gap-2">
              <FolderGit2 className="w-3.5 h-3.5" /> Commercial Index
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-[-0.03em]">
              Selected Works
            </h2>
          </div>

          {/* iOS Segmented Control Category Pill Bar */}
          <div className="p-1 rounded-full bg-[#141414] border border-[#222222] flex items-center gap-1 overflow-x-auto scrollbar-none w-full md:w-auto -mx-4 px-4 md:mx-0 md:px-1 shadow-inner">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 shrink-0 whitespace-nowrap ios-press ${
                    isSelected
                      ? 'bg-white text-black shadow-lg shadow-white/10'
                      : 'text-[#737373] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid - 1 col on mobile & tablet, 2 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </section>

      {/* Capabilities Section with Real Brand Logos */}
      <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-[#1f1f1f]">
        <div className="mb-8 sm:mb-12">
          <div className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#737373] mb-1.5 sm:mb-2 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" /> Technical Taxonomy
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-[-0.03em]">
            Stack & Tooling
          </h2>
          <p className="text-[#888888] text-xs sm:text-sm mt-1.5 sm:mt-2 font-light">
            Technologies and frameworks utilized across production enterprise engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SKILL_GROUPS.map((group, idx) => (
            <div 
              key={idx}
              className="p-5 sm:p-7 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-[#222222] hover:border-white/30 transition-all duration-300 flex flex-col justify-between ios-press-sm hover:shadow-xl hover:shadow-white/[0.02]"
            >
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  {group.name}
                </h3>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.skills.map((skill, sIdx) => {
                    const IconComponent = skill.icon;
                    return (
                      <span 
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#171717] hover:bg-[#202020] border border-[#262626] hover:border-neutral-500 text-xs font-medium text-[#d4d4d4] hover:text-white transition-all shadow-sm hover:scale-105 cursor-default"
                      >
                        {IconComponent && (
                          <IconComponent 
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" 
                            style={{ color: skill.color || '#ffffff' }}
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

      {/* Experience History Timeline */}
      <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-[#1f1f1f]">
        <div className="mb-10 sm:mb-14">
          <div className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#737373] mb-1.5 sm:mb-2 flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5" /> Career History
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-[-0.03em]">
            5 Years of Delivery
          </h2>
        </div>

        <div className="relative pl-5 sm:pl-8 border-l border-[#262626] space-y-8 sm:space-y-12">
          {/* EZTEK */}
          <div className="relative">
            <span className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white border-4 border-[#0d0d0d]" />
            <div className="p-5 sm:p-7 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-[#222222] hover:border-white/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  EZTEK &bull; Frontend Engineer
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#2c2c2c] text-[#a3a3a3] text-[11px] sm:text-xs font-mono w-fit">
                  Jan 2021 - Dec 2026 (5 Years)
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#737373] font-medium tracking-wide uppercase mb-3">Ho Chi Minh City, Vietnam &bull; Software Technology Consultancy</p>
              <p className="text-[#a3a3a3] text-xs sm:text-sm leading-relaxed mb-4 font-light">
                Delivered enterprise web applications across client engagements. Led frontend modernization to Angular 19 Signals, built shared component libraries documented in Storybook, and maintained production Next.js apps.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#888888]">
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#171717] border border-[#282828] hover:border-neutral-500 hover:text-white transition-colors">Accountia (Angular 19)</span>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#171717] border border-[#282828] hover:border-neutral-500 hover:text-white transition-colors">Layer Platform (Next.js)</span>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#171717] border border-[#282828] hover:border-neutral-500 hover:text-white transition-colors">Tech2B (SSR)</span>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#171717] border border-[#282828] hover:border-neutral-500 hover:text-white transition-colors">Design System Owner</span>
              </div>
            </div>
          </div>

          {/* Independent Contracts */}
          <div className="relative">
            <span className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#737373] border-4 border-[#0d0d0d]" />
            <div className="p-5 sm:p-7 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-[#222222] hover:border-white/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  National & Higher Education Contracts
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#2c2c2c] text-[#a3a3a3] text-[11px] sm:text-xs font-mono w-fit">
                  2025 - 2026
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#737373] font-medium tracking-wide uppercase mb-3">National Scale & International University</p>
              <p className="text-[#a3a3a3] text-xs sm:text-sm leading-relaxed font-light">
                Developed admin CMS interfaces for Vietnam's <strong>National Educational Resource Hub (Trục Học Liệu Quốc Gia)</strong>, and turned Figma designs into pixel-perfect pages for <strong>British University Vietnam (BUV)</strong>.
              </p>
            </div>
          </div>

          {/* HighscoresAI */}
          <div className="relative">
            <span className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-400 border-4 border-[#0d0d0d] animate-pulse" />
            <div className="p-5 sm:p-7 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-[#222222] hover:border-white/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  HighscoresAI &bull; Test Prep Platform
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#2c2c2c] text-emerald-400 text-[11px] sm:text-xs font-mono w-fit">
                  Current
                </span>
              </div>
              <p className="text-[#a3a3a3] text-xs sm:text-sm leading-relaxed font-light">
                Building in-browser IDE (CodeMirror 6), adaptive SAT/ACT mock exams conforming to CollegeBoard BlueBook specs, and predictive score analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Language */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-[#1f1f1f]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <div className="p-5 sm:p-7 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-[#222222] hover:border-white/30 transition-all duration-300 ios-press-sm">
            <div className="text-[10px] font-mono tracking-widest text-[#737373] uppercase mb-1.5">
              Academic Background
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">Engineer's Degree in Information Technology</h3>
            <p className="text-[#888888] text-xs font-medium mt-1">Saigon Technology University (STU)</p>
            <p className="text-[#666666] text-xs mt-2.5 leading-relaxed">
              Formal 4.5-year engineering program covering software engineering, algorithms, and system architecture.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-[#222222] hover:border-white/30 transition-all duration-300 ios-press-sm">
            <div className="text-[10px] font-mono tracking-widest text-[#737373] uppercase mb-1.5">
              Global Communication
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">English Working Proficiency</h3>
            <p className="text-[#888888] text-xs font-medium mt-1">TOEIC Equivalent ~700 &bull; Daily International Remote Syncs</p>
            <p className="text-[#666666] text-xs mt-2.5 leading-relaxed">
              Experienced in asynchronous PR reviews, architecture alignment, and sprint meetings with European clients.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-[#222222]">
        <div className="p-6 sm:p-10 md:p-14 rounded-3xl bg-[#121212]/95 backdrop-blur-xl border border-white/10 text-center max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 sm:mb-3">
            Get in Touch
          </h2>
          <p className="text-[#888888] text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto font-light">
            Available for Frontend Engineer & Full-stack roles. Reach out via email, phone, or LinkedIn.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-2.5 sm:gap-3">
            <a
              href="https://www.linkedin.com/in/thanh-n-345518369/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0077b5] hover:bg-[#006396] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#0077b5]/30 ios-press"
            >
              <FaLinkedinIn className="w-3.5 h-3.5 text-white" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:vanthanhnguy2907@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#d4d4d4] transition-all ios-press shadow-md"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span className="truncate">vanthanhnguy2907@gmail.com</span>
            </a>

            <a
              href="tel:0702388772"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1a1a1a] hover:bg-[#262626] border border-[#333333] hover:border-neutral-500 text-white font-bold text-xs uppercase tracking-wider transition-all ios-press"
            >
              <Phone className="w-4 h-4 text-[#888888] shrink-0" />
              <span>(+84) 702 388 772</span>
            </a>
          </div>

          <div className="mt-6 sm:mt-8 flex justify-center items-center gap-3 sm:gap-4 text-xs text-[#525252] font-mono">
            <span>Ho Chi Minh City</span>
            <span>&bull;</span>
            <span>Remote / Hybrid</span>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 text-center text-xs text-[#4a4a4a] tracking-wider uppercase font-mono">
          &copy; {new Date().getFullYear()} Thanh Nguy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
