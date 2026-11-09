import { useState } from 'react';
import { 
  Cpu, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  FolderGit2, 
  GraduationCap, 
  Send, 
  Copy, 
  Check,
  ExternalLink
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
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-500/15 via-blue-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[800px] -left-[200px] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1600px] -right-[200px] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-bold tracking-tight text-lg group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              TN
            </span>
            <span>Thanh Nguy<span className="text-indigo-400">.dev</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-indigo-400 transition-colors">Overview</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-indigo-600/25 transition-all hover:shadow-indigo-600/40"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-6 max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-300 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Middle / Senior Frontend & Full-stack Roles</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-50">
            Crafting High-Performance <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">Angular & Next.js</span> Web Systems
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            Hi, I'm <strong className="text-white font-semibold">Nguy Van Thanh</strong> — Middle Full-stack Developer with <span className="text-indigo-300 font-medium">5 commercial years</span> mastering <strong className="text-white">Angular 19 Signals</strong>, <strong className="text-white">Enterprise UI Component Libraries</strong>, and high-load web architectures. Extensive track record in 100% remote collaboration with European (EU) stakeholders.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">5+ YOE</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Commercial Experience</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">v19 Signals</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Angular Modern Core</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">EU Remote</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Direct Client Delivery</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">STU Eng.</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Engineer's Degree (IT)</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02]"
            >
              <span>Explore Featured Projects</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => copyToClipboard('vanthanhnguy2907@gmail.com', 'email')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium text-sm transition-all"
            >
              {copiedText === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copiedText === 'email' ? 'Email Copied!' : 'Copy Email'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-900">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2">
            <Cpu className="w-4 h-4" /> Technical Competence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 tracking-tight">
            Specialized Tech Stack & Architectural Toolkit
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
            Structured around production reliability, reactive state flow precision, and modern UI engineering standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-slate-200 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-indigo-500/50 transition-colors"
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

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2">
              <FolderGit2 className="w-4 h-4" /> Selected Production Engagements
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 tracking-tight">
              Real-World Impact & Engineering
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all flex flex-col justify-between group hover:shadow-2xl hover:shadow-indigo-500/5 relative"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-50 group-hover:text-indigo-300 transition-colors mt-0.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-1">
                      {project.role} • <span className="text-slate-300">{project.timeline}</span> (Team of {project.teamSize})
                    </p>
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-700/60 text-indigo-300 hover:text-white text-xs font-semibold shrink-0 transition-all shadow-sm group/link"
                      title={`Visit ${project.urlLabel || 'Live Site'}`}
                    >
                      <span>{project.urlLabel || 'Live'}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Technical Highlights list */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tech badges */}
              <div className="pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                {project.techStack.map((tech, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Stability Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-900">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2">
            <ShieldCheck className="w-4 h-4" /> Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 tracking-tight">
            5 Years of Dedication & Adaptability
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
          {/* EZTEK Full-time block */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950" />
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-50">
                  EZTEK — Middle Full-stack Developer / Key Frontend Engineer
                </h3>
                <span className="px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs font-semibold w-fit">
                  Jan 2021 – Dec 2026 (5 Years Stable Tenure)
                </span>
              </div>
              <p className="text-xs text-indigo-400 font-medium mb-3">Ho Chi Minh City, Vietnam • Software Technology Consulting</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Served as key technical contributor driving frontend architectural evolution across enterprise clients. Delivered mission-critical financial platforms (Accountia), B2B gaming marketplaces (Layer), and commerce portals (Tech2B). Spearheaded modernization to Angular 19 Signals and Storybook Design Systems.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-400 font-mono">
                <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800">Accountia</span>
                <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800">Layer Platform</span>
                <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800">Tech2B</span>
                <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800">UI Component Library Owner</span>
              </div>
            </div>
          </div>

          {/* High-Impact Freelance Engagements */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-950" />
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-50">
                  National & International Independent Engagements
                </h3>
                <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-300 text-xs font-semibold w-fit">
                  2025 – 2026
                </span>
              </div>
              <p className="text-xs text-purple-400 font-medium mb-3">National Scale & International Higher Education</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Selected for specialized high-trust client implementations: developed administrative CMS dashboards for Vietnam's <strong>National Educational Resource Hub (Trục Học Liệu Quốc Gia)</strong>, and translated rigorous British design systems into pixel-perfect templates for <strong>British University Vietnam (BUV)</strong>.
              </p>
            </div>
          </div>

          {/* HighscoresAI Current */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950 animate-pulse" />
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-50">
                  HighscoresAI — AI Standardized Test Prep Ecosystem
                </h3>
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs font-semibold w-fit">
                  Current Engagement
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Building browser-based IDE (CodeMirror 6), adaptive SAT/ACT mock assessments conforming to CollegeBoard BlueBook specs, and predictive score analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Languages */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center shrink-0 text-indigo-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-50">Engineer's Degree in Information Technology</h3>
              <p className="text-indigo-400 text-xs font-medium mt-0.5">Saigon Technology University (STU)</p>
              <p className="text-slate-400 text-xs mt-2">
                Formal 4.5+ year engineering degree focused on software engineering principles, system architecture, and algorithmic design.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/60 flex items-center justify-center shrink-0 text-sky-400">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-50">Professional English Communication</h3>
              <p className="text-sky-400 text-xs font-medium mt-0.5">TOEIC Equivalent ~700 • Daily International Syncs</p>
              <p className="text-slate-400 text-xs mt-2">
                Comfortable with technical documentation, PR reviews, and live asynchronous cross-timezone discussions with European & global partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <footer id="contact" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-indigo-950/40 to-slate-950 border border-indigo-900/40 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-indigo-500/20 blur-3xl pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ready to Build Exceptional Web Products Together?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            I'm open for full-time Middle / Senior Frontend or Full-stack opportunities (Angular / Next.js). Feel free to reach out directly via email or phone!
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="mailto:vanthanhnguy2907@gmail.com"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span>vanthanhnguy2907@gmail.com</span>
            </a>

            <a
              href="tel:0702388772"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-indigo-400" />
              <span>(+84) 702 388 772</span>
            </a>
          </div>

          <div className="mt-8 flex justify-center items-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" /> Ho Chi Minh City, Vietnam
            </span>
            <span>•</span>
            <span className="text-slate-400">Remote / Hybrid Flexible</span>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Nguy Van Thanh (Thanh Nguy). Crafted with React, TailwindCSS & Vite. Ready for Vercel deployment.
        </div>
      </footer>
    </div>
  );
}
