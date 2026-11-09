import { useState, useEffect } from 'react';
import { 
  Globe, 
  Mail, 
  Phone, 
  ExternalLink,
  FileDown,
  FileText,
  Copy,
  Check,
  Cpu,
  GraduationCap,
  Briefcase,
  ChevronRight,
  FolderGit2,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { PROJECTS, SKILL_GROUPS, TECH_MAP } from './data/projects';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    <div className={`min-h-screen bg-[#0d0d0d] text-[#e5e5e5] relative selection:bg-white selection:text-black font-sans transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Interactive Cursor Spotlight Glow (Sáng sủa, hiện đại theo chuột) */}
      <div 
        className="pointer-events-none fixed -inset-px z-30 transition-opacity duration-300 opacity-70 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 80%)`
        }}
      />

      {/* Subtle Background Lighting Mesh */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-b from-white/[0.05] via-transparent to-transparent blur-[140px]" />
        <div className="absolute top-[40%] -left-[100px] w-[500px] h-[500px] bg-indigo-500/[0.04] blur-[160px] rounded-full" />
        <div className="absolute top-[70%] -right-[100px] w-[600px] h-[600px] bg-sky-500/[0.04] blur-[160px] rounded-full" />
      </div>

      {/* Header Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0d0d0d]/85 border-b border-[#222222] transition-all">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-18 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-8 h-8 rounded-lg bg-white text-black font-extrabold text-xs flex items-center justify-center tracking-tighter group-hover:scale-110 transition-transform shadow-md">
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

          <nav className="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-widest uppercase text-[#888888]">
            <a href="#about" className="hover:text-white transition-colors">Overview</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Stack</a>
            <a href="#experience" className="hover:text-white transition-colors">History</a>
          </nav>

          <div className="flex items-center gap-2.5">
            <a 
              href="https://www.linkedin.com/in/thanh-n-345518369/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0077b5]/15 hover:bg-[#0077b5]/25 border border-[#0077b5]/40 text-[#38bdf8] hover:text-white font-medium text-xs transition-all tracking-wide"
              title="Connect on LinkedIn"
            >
              <FaLinkedinIn className="w-3.5 h-3.5 text-[#0077b5]" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <a 
              href="/Thanh_Nguy_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#333333] hover:border-white text-white font-medium text-xs transition-all hover:bg-white hover:text-black"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black font-bold text-xs hover:bg-[#e5e5e5] transition-all tracking-wide shadow-md hover:scale-105"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
        <div className="space-y-8 max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-[#2a2a2a] bg-[#141414] text-[11px] font-medium tracking-widest uppercase text-[#a3a3a3] animate-intro">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Frontend Engineer &bull; 5 YOE &bull; Vietnam &bull; EU Remote</span>
          </div>

          {/* Headline */}
          <div className="space-y-4 animate-intro-delay-1">
            <h1 className="text-4xl sm:text-7xl font-extrabold tracking-[-0.04em] leading-[1.05] text-white">
              NGUY VAN THANH. <br />
              <span className="text-[#666666]">FRONTEND ARCHITECTURE.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#a3a3a3] leading-relaxed max-w-2xl font-light">
              Crafting production web applications with <span className="text-white font-medium">Angular 19 Signals</span>, <span className="text-white font-medium">Next.js</span>, and scalable component systems. Experienced in asynchronous remote delivery with European clients.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 animate-intro-delay-2">
            {[
              { val: '5 YOE', label: 'Commercial Experience' },
              { val: 'Angular 19', label: 'Signals & Standalone' },
              { val: 'EU Remote', label: 'Direct Client Alignment' },
              { val: 'STU Engineer', label: "Information Technology" }
            ].map((metric, i) => (
              <div 
                key={i} 
                className="p-5 rounded-xl bg-[#141414] border border-[#222222] hover:border-[#383838] transition-all group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:translate-x-1 transition-transform">
                  {metric.val}
                </div>
                <div className="text-[10px] text-[#737373] font-semibold mt-1 tracking-widest uppercase">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2 animate-intro-delay-3">
            <a
              href="https://www.linkedin.com/in/thanh-n-345518369/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0077b5] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#006396] transition-all hover:scale-105 shadow-lg shadow-[#0077b5]/25"
            >
              <FaLinkedinIn className="w-4 h-4 text-white" />
              <span>Connect on LinkedIn</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#d4d4d4] transition-all hover:scale-105"
            >
              <span>Explore Projects</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="/Thanh_Nguy_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#171717] hover:bg-[#222222] border border-[#2e2e2e] text-white font-medium text-xs tracking-wider uppercase transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#a3a3a3]" />
              <span>Resume PDF</span>
            </a>

            <a
              href="/Thanh_Nguy_CV.docx"
              download="Thanh_Nguy_CV.docx"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#171717] hover:bg-[#222222] border border-[#2e2e2e] text-[#a3a3a3] hover:text-white font-medium text-xs tracking-wider uppercase transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>.DOCX</span>
            </a>

            <button
              onClick={() => copyToClipboard('vanthanhnguy2907@gmail.com', 'email')}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-transparent hover:bg-[#1a1a1a] text-[#888888] hover:text-white text-xs tracking-wider uppercase transition-all border border-transparent hover:border-[#2e2e2e]"
            >
              {copiedText === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText === 'email' ? 'Copied' : 'Copy Email'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects Archive */}
      <section id="projects" className="py-24 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[#1f1f1f]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-5">
          <div>
            <div className="text-[11px] font-bold tracking-widest uppercase text-[#737373] mb-2 flex items-center gap-2">
              <FolderGit2 className="w-3.5 h-3.5" /> Commercial Index
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em]">
              Selected Works
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-black'
                    : 'text-[#737373] hover:text-white bg-[#141414] border border-[#222222]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id}
              className="group p-7 sm:p-8 rounded-2xl bg-[#121212] border border-[#222222] hover:border-white transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-white/[0.04]"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#737373] uppercase">
                      0{idx + 1} / {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors mt-1.5 tracking-tight">
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
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#1c1c1c] group-hover:bg-white text-[#a3a3a3] group-hover:text-black text-[11px] font-bold tracking-wider uppercase transition-all shrink-0 border border-[#2a2a2a] group-hover:border-white"
                      title={`Visit ${project.urlLabel || 'Live Site'}`}
                    >
                      <span>{project.urlLabel || 'Live'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <p className="text-[#a3a3a3] text-sm leading-relaxed mb-6 font-light">
                  {project.summary}
                </p>

                <div className="space-y-2.5 mb-7">
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-xs text-[#b0b0b0] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#525252] group-hover:bg-white transition-colors shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-[#1f1f1f] flex flex-wrap gap-2">
                {project.techStack.map((tech, tIdx) => {
                  const techMeta = TECH_MAP[tech];
                  const Icon = techMeta?.icon;
                  return (
                    <span 
                      key={tIdx} 
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#181818] border border-[#262626] text-[11px] font-mono tracking-wide text-[#b5b5b5] hover:text-white hover:border-[#404040] transition-colors"
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
          ))}
        </div>
      </section>

      {/* Capabilities Section with Real Brand Logos */}
      <section id="skills" className="py-24 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[#1f1f1f]">
        <div className="mb-12">
          <div className="text-[11px] font-bold tracking-widest uppercase text-[#737373] mb-2 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" /> Technical Taxonomy
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em]">
            Stack & Tooling
          </h2>
          <p className="text-[#888888] text-sm mt-2 font-light">
            Technologies and frameworks utilized across production enterprise engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#383838] transition-all flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-white mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  {group.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => {
                    const IconComponent = skill.icon;
                    return (
                      <span 
                        key={sIdx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#171717] hover:bg-[#202020] border border-[#262626] hover:border-[#404040] text-xs font-medium text-[#d4d4d4] hover:text-white transition-all group/item shadow-sm hover:scale-[1.02]"
                      >
                        {IconComponent && (
                          <IconComponent 
                            className="w-4 h-4 transition-transform group-hover/item:scale-110" 
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
      <section id="experience" className="py-24 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[#1f1f1f]">
        <div className="mb-14">
          <div className="text-[11px] font-bold tracking-widest uppercase text-[#737373] mb-2 flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5" /> Career History
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em]">
            5 Years of Delivery
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-[#262626] space-y-12">
          {/* EZTEK */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#0d0d0d]" />
            <div className="p-7 rounded-2xl bg-[#121212] border border-[#222222]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  EZTEK &bull; Frontend Engineer
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#2c2c2c] text-[#a3a3a3] text-xs font-mono w-fit">
                  Jan 2021 - Dec 2026 (5 Years)
                </span>
              </div>
              <p className="text-xs text-[#737373] font-medium tracking-wide uppercase mb-3">Ho Chi Minh City, Vietnam &bull; Software Technology Consultancy</p>
              <p className="text-[#a3a3a3] text-sm leading-relaxed mb-4 font-light">
                Delivered enterprise web applications across client engagements. Led frontend modernization to Angular 19 Signals, built shared component libraries documented in Storybook, and maintained production Next.js apps.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#888888]">
                <span className="px-2.5 py-1 rounded bg-[#171717] border border-[#282828]">Accountia (Angular 19)</span>
                <span className="px-2.5 py-1 rounded bg-[#171717] border border-[#282828]">Layer Platform (Next.js)</span>
                <span className="px-2.5 py-1 rounded bg-[#171717] border border-[#282828]">Tech2B (SSR)</span>
                <span className="px-2.5 py-1 rounded bg-[#171717] border border-[#282828]">Design System Owner</span>
              </div>
            </div>
          </div>

          {/* Independent Contracts */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#737373] border-4 border-[#0d0d0d]" />
            <div className="p-7 rounded-2xl bg-[#121212] border border-[#222222]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  National & Higher Education Contracts
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#2c2c2c] text-[#a3a3a3] text-xs font-mono w-fit">
                  2025 - 2026
                </span>
              </div>
              <p className="text-xs text-[#737373] font-medium tracking-wide uppercase mb-3">National Scale & International University</p>
              <p className="text-[#a3a3a3] text-sm leading-relaxed font-light">
                Developed admin CMS interfaces for Vietnam's <strong>National Educational Resource Hub (Trục Học Liệu Quốc Gia)</strong>, and turned Figma designs into pixel-perfect pages for <strong>British University Vietnam (BUV)</strong>.
              </p>
            </div>
          </div>

          {/* HighscoresAI */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-400 border-4 border-[#0d0d0d] animate-pulse" />
            <div className="p-7 rounded-2xl bg-[#121212] border border-[#222222]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  HighscoresAI &bull; Test Prep Platform
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#2c2c2c] text-emerald-400 text-xs font-mono w-fit">
                  Current
                </span>
              </div>
              <p className="text-[#a3a3a3] text-sm leading-relaxed font-light">
                Building in-browser IDE (CodeMirror 6), adaptive SAT/ACT mock exams conforming to CollegeBoard BlueBook specs, and predictive score analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Language */}
      <section className="py-20 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[#1f1f1f]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-7 rounded-2xl bg-[#121212] border border-[#222222]">
            <div className="text-[10px] font-mono tracking-widest text-[#737373] uppercase mb-2">
              Academic Background
            </div>
            <h3 className="text-lg font-bold text-white">Engineer's Degree in Information Technology</h3>
            <p className="text-[#888888] text-xs font-medium mt-1">Saigon Technology University (STU)</p>
            <p className="text-[#666666] text-xs mt-3 leading-relaxed">
              Formal 4.5-year engineering program covering software engineering, algorithms, and system architecture.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#121212] border border-[#222222]">
            <div className="text-[10px] font-mono tracking-widest text-[#737373] uppercase mb-2">
              Global Communication
            </div>
            <h3 className="text-lg font-bold text-white">English Working Proficiency</h3>
            <p className="text-[#888888] text-xs font-medium mt-1">TOEIC Equivalent ~700 &bull; Daily International Remote Syncs</p>
            <p className="text-[#666666] text-xs mt-3 leading-relaxed">
              Experienced in asynchronous PR reviews, architecture alignment, and sprint meetings with European clients.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[#222222]">
        <div className="p-10 sm:p-14 rounded-3xl bg-[#121212] border border-[#2a2a2a] text-center max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Get in Touch
          </h2>
          <p className="text-[#888888] text-sm leading-relaxed mb-8 max-w-md mx-auto font-light">
            Available for Frontend Engineer & Full-stack roles. Reach out via email or phone.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3">
            <a
              href="https://www.linkedin.com/in/thanh-n-345518369/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0077b5] hover:bg-[#006396] text-white font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-[#0077b5]/30"
            >
              <FaLinkedinIn className="w-4 h-4 text-white" />
              <span>Connect on LinkedIn</span>
            </a>

            <a
              href="mailto:vanthanhnguy2907@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#d4d4d4] transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span>vanthanhnguy2907@gmail.com</span>
            </a>

            <a
              href="tel:0702388772"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1a1a1a] hover:bg-[#262626] border border-[#333333] text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              <Phone className="w-4 h-4 text-[#888888]" />
              <span>(+84) 702 388 772</span>
            </a>
          </div>

          <div className="mt-8 flex justify-center items-center gap-4 text-xs text-[#525252] font-mono">
            <span>Ho Chi Minh City, Vietnam</span>
            <span>&bull;</span>
            <span>Remote / Hybrid</span>
          </div>
        </div>

        <div className="mt-14 text-center text-xs text-[#4a4a4a] tracking-wider uppercase font-mono">
          &copy; {new Date().getFullYear()} Thanh Nguy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
