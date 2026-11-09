import { useState } from 'react';
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ExternalLink,
  FileDown,
  FileText,
  Copy,
  Check,
  Code2,
  Sparkles,
  ArrowUpRight,
  Terminal,
  Layers,
  Cpu,
  GraduationCap,
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { PROJECTS, SKILL_CATEGORIES } from './data/projects';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copiedText, setCopiedText] = useState<string | null>(null);

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
    <div className="min-h-screen bg-[#090d16] text-slate-100 relative selection:bg-indigo-500 selection:text-white font-sans">
      {/* Dynamic Background Mesh Grid & Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-indigo-600/20 via-sky-600/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-[40%] -left-[200px] w-[600px] h-[600px] bg-purple-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] -right-[200px] w-[700px] h-[700px] bg-indigo-500/10 blur-[150px] rounded-full" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating Modern Glass Navigation */}
      <nav className="sticky top-4 z-50 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="backdrop-blur-xl bg-slate-900/70 border border-slate-700/50 rounded-2xl shadow-2xl shadow-black/40 px-5 h-14 flex items-center justify-between transition-all">
          <a href="#" className="flex items-center gap-2.5 font-bold tracking-tight text-sm sm:text-base group">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-indigo-600 to-sky-400 p-[1px] shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform flex items-center justify-center">
              <span className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-extrabold text-white text-xs">
                TN
              </span>
            </span>
            <span className="text-slate-100 font-semibold group-hover:text-white transition-colors">
              Thanh Nguy<span className="text-indigo-400">.dev</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wide uppercase text-slate-400">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Stack</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Timeline</a>
          </div>

          <div className="flex items-center gap-2.5">
            <a 
              href="/Thanh_Nguy_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 text-slate-200 hover:text-white font-medium text-xs transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Resume</span>
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-xs shadow-lg shadow-indigo-500/30 transition-all hover:scale-[1.02]"
            >
              <span>Contact</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-start gap-7">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold backdrop-blur-md shadow-inner shadow-indigo-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Available for Frontend & Full-stack Roles</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-50">
              Building Web Systems with <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent">
                Precision & Reactivity
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              Hi, I'm <strong className="text-white font-semibold">Thanh Nguy</strong>, a Frontend Engineer with <span className="text-indigo-300 font-medium">5 years of commercial experience</span> specializing in modern <strong className="text-white">Angular (Signals, Standalone Architecture)</strong>, <strong className="text-white">Next.js</strong>, and production design systems. Experienced in direct remote collaboration with European clients.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full pt-2">
            {[
              { val: '5+ YOE', label: 'Commercial Experience', color: 'text-indigo-400' },
              { val: 'v19 Signals', label: 'Angular Reactive Core', color: 'text-sky-400' },
              { val: 'EU Remote', label: 'Direct Client Alignment', color: 'text-purple-400' },
              { val: 'STU Eng.', label: "Engineer's Degree in IT", color: 'text-emerald-400' }
            ].map((metric, i) => (
              <div 
                key={i} 
                className="p-4 rounded-2xl bg-gradient-to-b from-slate-800/40 to-slate-900/60 border border-slate-700/40 backdrop-blur-md hover:border-slate-600/60 transition-all group"
              >
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${metric.color} group-hover:scale-105 transition-transform`}>
                  {metric.val}
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-1 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Projects</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="/Thanh_Nguy_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-indigo-500/40 text-indigo-200 hover:text-white font-semibold text-sm transition-all shadow-md hover:border-indigo-400/60"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Resume PDF</span>
            </a>

            <a
              href="/Thanh_Nguy_CV.docx"
              download="Thanh_Nguy_CV.docx"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 text-slate-300 font-medium text-sm transition-all"
              title="Download Word version"
            >
              <FileDown className="w-4 h-4 text-slate-400" />
              <span>.DOCX</span>
            </a>

            <button
              onClick={() => copyToClipboard('vanthanhnguy2907@gmail.com', 'email')}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 text-slate-300 font-medium text-sm transition-all"
            >
              {copiedText === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copiedText === 'email' ? 'Copied Email!' : 'Copy Email'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section id="projects" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-slate-800/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-1.5">
              <FolderGit2 className="w-4 h-4" /> Verified Production Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-indigo-500/10 relative overflow-hidden"
            >
              {/* Subtle card top glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/0 to-transparent group-hover:via-indigo-500 transition-all duration-500" />

              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-800/40">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-50 group-hover:text-indigo-300 transition-colors mt-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-1">
                      {project.role} • <span className="text-slate-300">{project.timeline}</span>
                    </p>
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-700/50 text-indigo-300 hover:text-white text-xs font-semibold shrink-0 transition-all shadow-sm hover:scale-105"
                      title={`Visit ${project.urlLabel || 'Live Site'}`}
                    >
                      <span>{project.urlLabel || 'Live'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <p className="text-slate-300/90 text-sm leading-relaxed mb-5 font-normal">
                  {project.summary}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300/80 leading-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Pills */}
              <div className="pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                {project.techStack.map((tech, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 group-hover:text-slate-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-slate-800/60">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-1.5">
            <Cpu className="w-4 h-4" /> Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 tracking-tight">
            Skills & Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs font-medium text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-slate-800/60">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-1.5">
            <Briefcase className="w-4 h-4" /> Career Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-slate-800/80 space-y-10">
          {/* EZTEK */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#090d16]" />
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/50 to-slate-950/70 border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-slate-50">
                  EZTEK | Frontend Engineer
                </h3>
                <span className="px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs font-semibold w-fit">
                  Jan 2021 - Dec 2026 (5 Years)
                </span>
              </div>
              <p className="text-xs text-indigo-400 font-medium mb-3">Ho Chi Minh City, Vietnam • Software Consultancy</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Worked as core frontend engineer across multiple client projects. Built and maintained cloud accounting software (Accountia), gaming marketplace (Layer), and B2B platforms (Tech2B). Focused on Angular Signals migration, component libraries with Storybook, and clean UI architecture.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-400 font-mono">
                <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800">Accountia</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800">Layer Platform</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800">Tech2B</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800">UI Component Library Owner</span>
              </div>
            </div>
          </div>

          {/* Freelance & Contracts */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#090d16]" />
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/50 to-slate-950/70 border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-slate-50">
                  Freelance & Client Projects
                </h3>
                <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-300 text-xs font-semibold w-fit">
                  2025 - 2026
                </span>
              </div>
              <p className="text-xs text-purple-400 font-medium mb-3">Education & Public Sector</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Delivered admin CMS interfaces for Vietnam's <strong>National Educational Resource Hub (Trục Học Liệu Quốc Gia)</strong>, and turned Figma designs into pixel-perfect pages for <strong>British University Vietnam (BUV)</strong>.
              </p>
            </div>
          </div>

          {/* HighscoresAI */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#090d16] animate-pulse" />
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/50 to-slate-950/70 border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-slate-50">
                  HighscoresAI | Test Prep Platform
                </h3>
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs font-semibold w-fit">
                  Current
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Building browser-based IDE (CodeMirror 6), adaptive SAT/ACT mock assessments conforming to CollegeBoard BlueBook specs, and predictive score analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Language Cards */}
      <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto border-t border-slate-800/60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center shrink-0 text-indigo-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-50">Engineer's Degree in Information Technology</h3>
              <p className="text-indigo-400 text-xs font-medium mt-0.5">Saigon Technology University (STU)</p>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Formal 4.5-year engineering program focused on software engineering, system architecture, and algorithms.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-sky-950/80 border border-sky-800/60 flex items-center justify-center shrink-0 text-sky-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-50">Professional English Communication</h3>
              <p className="text-sky-400 text-xs font-medium mt-0.5">TOEIC Equivalent ~700 • Daily International Syncs</p>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Comfortable with technical documentation, PR reviews, and live video calls with European clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Pro Contact Box */}
      <footer id="contact" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-slate-800/80">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-[#0c1220] border border-slate-700/60 text-center max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3">
            Let's Connect
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Open for Frontend Engineer & Full-stack roles. Reach out directly via email or phone.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3">
            <a
              href="mailto:vanthanhnguy2907@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span>vanthanhnguy2907@gmail.com</span>
            </a>

            <a
              href="tel:0702388772"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-600/60 text-slate-200 font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-indigo-400" />
              <span>(+84) 702 388 772</span>
            </a>
          </div>

          <div className="mt-8 flex justify-center items-center gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" /> Ho Chi Minh City, Vietnam
            </span>
            <span>•</span>
            <span>Remote / Hybrid</span>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Thanh Nguy. Built with React & TailwindCSS.
        </div>
      </footer>
    </div>
  );
}
