export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  teamSize: string;
  category: 'Enterprise Angular' | 'React & Next.js' | 'Full-stack & CMS' | 'Design Systems';
  techStack: string[];
  summary: string;
  highlights: string[];
  metrics: string[];
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'accountia',
    title: 'Accountia & Enterprise UI Library',
    subtitle: 'Cloud Accounting Platform & Design System',
    role: 'Key Frontend Developer / UI Library Owner',
    timeline: '2023 – 2026',
    teamSize: '10–15',
    category: 'Enterprise Angular',
    featured: true,
    techStack: ['Angular 19', 'Signals', 'Standalone Components', 'RxJS', 'TypeScript', 'SCSS', 'Storybook', 'Cypress'],
    summary: 'A mission-critical SaaS accounting ecosystem handling complex high-frequency bookkeeping ledgers, multi-currency invoicing, and real-time ledger updates for European enterprise clients.',
    highlights: [
      'Architected and published the shared Enterprise UI Component Library with Storybook isolation, reducing UI regression bugs by over 30%.',
      'Pioneered Angular 19 migration with Fine-grained Signals reactivity, eliminating redundant change detection cycles across high-density financial data tables.',
      'Authored custom memory-leak lifecycle utilities (takeUntilDestroy) and reusable UI abstraction directives.',
      'Collaborated directly with European product leads and engineers in daily asynchronous remote sprints and architectural reviews.'
    ],
    metrics: ['Angular 19 Signals', 'Design System Owner', 'EU Remote Direct']
  },
  {
    id: 'highscoresai',
    title: 'HighscoresAI',
    subtitle: 'AI-Powered Standardized Test Prep & Interactive IDE (SAT, ACT, AP)',
    role: 'Frontend / Full-stack Developer',
    timeline: 'Current (Ongoing)',
    teamSize: '4',
    category: 'React & Next.js',
    featured: true,
    techStack: ['Next.js (App Router)', 'TypeScript', 'TailwindCSS', 'CodeMirror 6', 'FullCalendar', 'dnd-kit', 'Python Engine', 'AWS S3', 'Git Worktrees'],
    summary: 'An advanced digital test preparation and automated evaluation ecosystem conforming to CollegeBoard BlueBook specs, featuring predictive score diagnostics and live browser code execution.',
    highlights: [
      'Engineered digital test simulation modules for SAT/ACT practice with strict timing, multi-section branching, and question flagging workflows.',
      'Integrated CodeMirror 6 with multi-language execution (Python, Java, C++, JS) and sub-second feedback via the Python scoring engine for AP Computer Science.',
      'Applied strict Clean Code principles and Git Worktrees across 30+ domain modules for seamless parallel feature development.',
      'Built AI-driven Score Improvement Plan analytics and interactive mentor-student scheduling dashboards.'
    ],
    metrics: ['CollegeBoard BlueBook Spec', 'In-browser IDE', 'Next.js App Router']
  },
  {
    id: 'layer',
    title: 'Layer Marketplace Platform',
    subtitle: 'B2B Esports & Gaming Sponsorship Marketplace',
    role: 'Frontend Developer',
    timeline: '2022 – 2023',
    teamSize: '10–15',
    category: 'React & Next.js',
    featured: true,
    techStack: ['Next.js (React)', 'TypeScript', 'TailwindCSS', 'Redux Toolkit', 'MUI X DataGrid Pro', 'Auth0', 'Chart.js', 'Storybook', 'Cypress'],
    summary: 'A premier commercial matchmaking platform connecting esports organizations, game titles, and global sponsors to negotiate multi-tier sponsorship contracts.',
    highlights: [
      'Built high-density sponsorship listings and proposal management with MUI X DataGrid Pro (multi-sorting, filtering, customized toolbars).',
      'Developed interactive audience analytics dashboards utilizing Chart.js displaying live demographic and viewer engagement metrics.',
      'Implemented secure enterprise authentication and session management via Auth0 (@auth0/nextjs-auth0).',
      'Demonstrated multi-framework frontend versatility shipping high-performance Next.js production features.'
    ],
    metrics: ['MUI X DataGrid Pro', 'Auth0 Enterprise', 'Redux Toolkit']
  },
  {
    id: 'buv',
    title: 'British University Vietnam (BUV)',
    subtitle: 'Flagship Digital Portal & Source of Truth (SOT) System',
    role: 'Freelance Frontend Specialist',
    timeline: 'Jul 2026 – Aug 2026',
    teamSize: '~20 (Design Studio + 2-3 Devs)',
    category: 'Design Systems',
    featured: false,
    techStack: ['Modern Web', 'SCSS', 'Pixel-perfect Responsive', 'Figma-to-Code', 'Accessibility (a11y)'],
    summary: 'Official digital administrative portal for British University Vietnam, adhering to rigorous British higher education branding guidelines and high-fidelity Figma specifications.',
    highlights: [
      'Translated intricate Figma design system tokens into pixel-perfect semantic HTML/SCSS with zero layout regressions across browsers.',
      'Developed core Source of Truth (SOT) templates serving as the structural blueprint for academic documentation and student notices.',
      'Collaborated closely as one of 2–3 core developers in a 20-person cross-functional squad alongside international UI/UX designers.'
    ],
    metrics: ['100% Pixel-perfect', 'British University Standard', 'SOT Architecture']
  },
  {
    id: 'truc-hoc-lieu',
    title: 'Trục Học Liệu Quốc Gia (giaoducso)',
    subtitle: 'National Educational Digital Resource Hub',
    role: 'Freelance CMS & Frontend Developer',
    timeline: 'Dec 2025 – May 2026',
    teamSize: '20–30 (National Project Team)',
    category: 'Full-stack & CMS',
    featured: false,
    techStack: ['PHP (Laravel)', 'Blade Templates', 'SCSS', 'JavaScript', 'Server-side DataTables', 'RESTful APIs'],
    summary: 'National-scale digital educational repository connecting educators, schools, and administrators across Vietnam to index and distribute approved curriculum assets.',
    highlights: [
      'Developed modular administrative CMS dashboards utilizing Laravel Blade views and custom SCSS layouts.',
      'Implemented dynamic server-side DataTables with complex multi-criteria filters, search, and bulk operations for high-volume asset datasets.',
      'Consumed and mapped core backend RESTful endpoints into reactive form flows with strict validation before submission.'
    ],
    metrics: ['National Scale Project', 'Server-Side DataTables', 'Laravel CMS']
  },
  {
    id: 'tech2b',
    title: 'Tech2B Platform',
    subtitle: 'B2B Commerce & Workflow System with Server-Side Rendering',
    role: 'Frontend / Web Developer',
    timeline: '2021 – 2023',
    teamSize: '4',
    category: 'Enterprise Angular',
    featured: false,
    techStack: ['Angular', 'Angular Universal (SSR)', 'TypeScript', 'SCSS', 'RxJS', 'Node.js', 'RESTful APIs'],
    summary: 'Enterprise B2B commercial platform facilitating catalog exploration, bulk quotes, and automated supplier inventory coordination.',
    highlights: [
      'Implemented Angular Universal (Server-Side Rendering) for public product catalogs, slashing initial load latency by over 35% and boosting SEO discoverability.',
      'Constructed complex multi-step reactive checkout workflows and automated supplier inquiry submissions.',
      'Authored centralized HTTP interceptors for automatic JWT injection, caching, and unified error handling.'
    ],
    metrics: ['Angular Universal (SSR)', 'SEO Latency -35%', 'Enterprise Foundation']
  }
];

export const SKILL_CATEGORIES = [
  {
    name: 'Frontend Core & Frameworks',
    skills: ['Angular (v15 - v19)', 'Angular Signals', 'Angular Universal (SSR)', 'React', 'Next.js (App Router)', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / SCSS', 'TailwindCSS']
  },
  {
    name: 'State & Reactivity',
    skills: ['RxJS (Fine-tuned)', 'Angular Signals', 'Redux Toolkit', 'Context API', 'Event-driven Reactivity', 'Memory Lifecycle Optimization']
  },
  {
    name: 'Architecture & UI Tooling',
    skills: ['Enterprise UI Component Libraries', 'Atomic Design Systems', 'Storybook', 'Figma-to-Code Pixel-Perfect', 'MUI X DataGrid Pro', 'Angular Material']
  },
  {
    name: 'Backend & CMS Capabilities',
    skills: ['PHP (Laravel CMS)', 'Blade Templates', 'RESTful API Integration', 'Server-Side DataTables', 'Node.js / Express basics', 'Auth0 Security']
  },
  {
    name: 'Testing & Workflows',
    skills: ['Cypress (E2E Testing)', 'Jest / Karma', 'Git Worktrees', 'AI-Augmented Engineering (Cursor/Copilot)', 'EU Remote Async Collaboration']
  }
];
