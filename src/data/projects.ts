import { 
  SiAngular, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiSass, 
  SiRedux, 
  SiPhp, 
  SiLaravel, 
  SiStorybook, 
  SiCypress, 
  SiJest, 
  SiNodedotjs, 
  SiGit, 
  SiFigma,
  SiHtml5,
  SiAuth0,
  SiChartdotjs
} from 'react-icons/si';
import { TbTopologyStar3, TbCpu, TbRobot, TbCalendar, TbCode, TbCloud } from 'react-icons/tb';
import { Project, SkillGroup } from '../types';

export const TECH_MAP: Record<string, { icon: any; color: string }> = {
  'Angular 19': { icon: SiAngular, color: '#dd0031' },
  'Angular': { icon: SiAngular, color: '#dd0031' },
  'Angular Universal (SSR)': { icon: SiAngular, color: '#f43f5e' },
  'Signals': { icon: TbTopologyStar3, color: '#ec4899' },
  'Standalone Components': { icon: SiAngular, color: '#dd0031' },
  'RxJS': { icon: TbTopologyStar3, color: '#d946ef' },
  'TypeScript': { icon: SiTypescript, color: '#3178c6' },
  'JavaScript': { icon: SiJavascript, color: '#f7df1e' },
  'SCSS': { icon: SiSass, color: '#cf649a' },
  'Storybook': { icon: SiStorybook, color: '#ff4785' },
  'Cypress': { icon: SiCypress, color: '#00bf88' },
  'Next.js (App Router)': { icon: SiNextdotjs, color: '#ffffff' },
  'Next.js (React)': { icon: SiNextdotjs, color: '#ffffff' },
  'React': { icon: SiReact, color: '#61dafb' },
  'TailwindCSS': { icon: SiTailwindcss, color: '#38bdf8' },
  'CodeMirror 6': { icon: TbCode, color: '#ff7b72' },
  'FullCalendar': { icon: TbCalendar, color: '#3b82f6' },
  'dnd-kit': { icon: TbTopologyStar3, color: '#a855f7' },
  'Python Engine': { icon: TbCode, color: '#eab308' },
  'AWS S3': { icon: TbCloud, color: '#ff9900' },
  'Git Worktrees': { icon: SiGit, color: '#f05032' },
  'Redux Toolkit': { icon: SiRedux, color: '#764abc' },
  'MUI X DataGrid Pro': { icon: SiReact, color: '#007fff' },
  'Auth0': { icon: SiAuth0, color: '#eb5424' },
  'Chart.js': { icon: SiChartdotjs, color: '#ff6384' },
  'Figma-to-Code': { icon: SiFigma, color: '#a259ff' },
  'Pixel-perfect Responsive': { icon: SiFigma, color: '#a259ff' },
  'Modern Web': { icon: SiHtml5, color: '#e34f26' },
  'Semantic HTML5': { icon: SiHtml5, color: '#e34f26' },
  'Accessibility (a11y)': { icon: TbCpu, color: '#10b981' },
  'PHP (Laravel)': { icon: SiLaravel, color: '#ff2d20' },
  'Blade Templates': { icon: SiPhp, color: '#777bb4' },
  'Server-side DataTables': { icon: TbTopologyStar3, color: '#06b6d4' },
  'RESTful APIs': { icon: TbTopologyStar3, color: '#06b6d4' },
  'Node.js': { icon: SiNodedotjs, color: '#68a063' },
  'AI/LLM': { icon: TbRobot, color: '#10a37f' }
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Frontend Core & Frameworks',
    skills: [
      { name: 'Angular (v15 - v19)', icon: SiAngular, color: '#dd0031' },
      { name: 'Angular Signals', icon: SiAngular, color: '#f43f5e' },
      { name: 'Angular Universal (SSR)', icon: SiAngular, color: '#e11d48' },
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'Next.js (App Router)', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#f7df1e' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'HTML5 / SCSS', icon: SiSass, color: '#cf649a' },
    ]
  },
  {
    name: 'State & Reactivity',
    skills: [
      { name: 'Angular Signals', icon: TbTopologyStar3, color: '#ec4899' },
      { name: 'RxJS (Fine-tuned)', icon: TbTopologyStar3, color: '#d946ef' },
      { name: 'Redux Toolkit', icon: SiRedux, color: '#764abc' },
      { name: 'React Context & Custom Hooks', icon: SiReact, color: '#61dafb' }
    ]
  },
  {
    name: 'UI Libraries & Design Systems',
    skills: [
      { name: 'Enterprise UI Library Owner', icon: SiStorybook, color: '#ff4785' },
      { name: 'Storybook Component Docs', icon: SiStorybook, color: '#ff4785' },
      { name: 'Figma-to-Code Pixel-Perfect', icon: SiFigma, color: '#a259ff' },
      { name: 'MUI X DataGrid Pro', icon: SiReact, color: '#007fff' },
      { name: 'Angular Material', icon: SiAngular, color: '#e11d48' }
    ]
  },
  {
    name: 'Backend & CMS Integration',
    skills: [
      { name: 'PHP (Laravel CMS)', icon: SiLaravel, color: '#ff2d20' },
      { name: 'Blade Templates', icon: SiPhp, color: '#777bb4' },
      { name: 'RESTful API Integration', icon: TbTopologyStar3, color: '#06b6d4' },
      { name: 'Node.js basics', icon: SiNodedotjs, color: '#68a063' }
    ]
  },
  {
    name: 'Testing & Workflows',
    skills: [
      { name: 'Cypress (E2E Testing)', icon: SiCypress, color: '#00bf88' },
      { name: 'Jest / Karma', icon: SiJest, color: '#c21325' },
      { name: 'Git Worktrees', icon: SiGit, color: '#f05032' },
      { name: 'AI-Augmented Engineering', icon: TbRobot, color: '#10a37f' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'accountia',
    title: 'Accountia & Enterprise UI Library',
    role: 'Key Frontend Developer / UI Library Owner',
    timeline: 'Oct 2023 - Sep 2026 (3 Years • Core Focus)',
    category: 'Enterprise Angular',
    liveUrl: 'https://accountia.no',
    urlLabel: 'accountia.no',
    techStack: ['Angular 19', 'Signals', 'Standalone Components', 'RxJS', 'TypeScript', 'SCSS', 'Storybook', 'Cypress'],
    summary: 'Cloud accounting platform handling bookkeeping ledgers, multi-currency invoicing, and real-time ledger updates for European enterprise clients.',
    highlights: [
      'Built and maintained the shared UI Component Library with Storybook, reducing UI bugs by over 30%.',
      'Migrated core modules to Angular 19 Signals and Standalone components, improving reactivity and rendering speed on dense financial tables.',
      'Created custom unsubscription utilities (takeUntilDestroy) and directives to prevent RxJS memory leaks.',
      'Collaborated directly with European product leads and developers in daily English standups and PR reviews.'
    ],
    architectureDetails: {
      problem: 'Frequent global Change Detection triggered by high-frequency financial updates was causing UI frame drops and memory accumulation across large transaction grids.',
      solution: 'Re-architected the view layer using Angular 19 Signals for granular, cell-level reactivity. Enforced strict unsubscription patterns and encapsulated reusable design tokens inside an isolated Storybook UI Library.',
      engineeringWin: 'Eliminated unnecessary DOM re-renders, slashed memory leaks by 100%, and cut UI regression bugs by over 30% across multiple client squads.'
    }
  },
  {
    id: 'tech2b',
    title: 'Tech2B Platform',
    role: 'Frontend / Web Developer',
    timeline: 'Jan 2021 - Sep 2023 (2 Yrs 9 Mos • Core Focus)',
    category: 'Enterprise Angular',
    liveUrl: 'https://aps.autodesk.com/customer-stories/tech2b',
    urlLabel: 'Autodesk Customer Story',
    techStack: ['Angular', 'Angular Universal (SSR)', 'TypeScript', 'SCSS', 'RxJS', 'Node.js', 'RESTful APIs'],
    summary: 'B2B platform for manufacturing teams to share 3D CAD files, request quotes, and manage suppliers.',
    highlights: [
      'Featured as an Autodesk Customer Story for innovation in engineering workflow automation.',
      'Set up Angular Universal for public catalog pages, speeding up initial page load by over 35% and improving SEO ranking.',
      'Built multi-step quote request and order checkout flows with Angular Reactive Forms.',
      'Created HTTP interceptors for JWT token handling, caching, and unified API error handling.'
    ],
    architectureDetails: {
      problem: 'B2B engineering catalog pages suffered from slow First Contentful Paint (FCP) and poor SEO indexability due to client-side rendering bottlenecks.',
      solution: 'Configured Angular Universal Server-Side Rendering (SSR) with TransferState caching to eliminate duplicate API requests between Node.js server and client hydration.',
      engineeringWin: 'Accelerated initial page load speed by over 35%, dramatically boosted Google SEO rankings, and became an official Autodesk Customer Story.'
    }
  },
  {
    id: 'highscoresai',
    title: 'HighscoresAI',
    role: 'Frontend / Full-stack Developer',
    timeline: 'Current',
    category: 'React & Next.js',
    liveUrl: 'https://www.highscores.ai/',
    urlLabel: 'highscores.ai',
    techStack: ['Next.js (App Router)', 'TypeScript', 'TailwindCSS', 'CodeMirror 6', 'FullCalendar', 'dnd-kit', 'Python Engine', 'AWS S3', 'Git Worktrees'],
    summary: 'Online test prep platform supporting US exams (SAT, ACT, AP Computer Science) with score diagnostics and in-browser code execution.',
    highlights: [
      'Developed mock exam modules for SAT/ACT practice with section timers, question navigation, and flagging based on CollegeBoard BlueBook specs.',
      'Integrated CodeMirror 6 with syntax highlighting for Python, Java, C++, and JS, connected to a Python backend engine for sub-second test execution.',
      'Maintained clean code structure across 30+ domain modules, using Git Worktrees to handle multiple tickets in parallel.',
      'Built score progress dashboards and scheduling features using FullCalendar and dnd-kit.'
    ],
    architectureDetails: {
      problem: 'Building an interactive in-browser IDE for AP Computer Science that must handle real-time code evaluation without freezing the UI thread, alongside strict CollegeBoard BlueBook timed session persistence.',
      solution: 'Integrated CodeMirror 6 with custom Web Worker syntax linting, connected to an asynchronous Python execution engine with sub-second feedback. Stored active exam states with resilient local fallback to prevent data loss during network drops.',
      engineeringWin: 'Maintained 60fps editor fluidity, scaled cleanly across 30+ domain modules using Git Worktrees, and delivered sub-second code test feedback.'
    }
  },
  {
    id: 'layer',
    title: 'Layer Marketplace Platform',
    role: 'Frontend Developer',
    timeline: 'Jun 2023 - Sep 2023 (4 Mos • Parallel Contract)',
    category: 'React & Next.js',
    liveUrl: 'https://www.layerlicensing.com/',
    urlLabel: 'layerlicensing.com',
    techStack: ['Next.js (React)', 'TypeScript', 'TailwindCSS', 'Redux Toolkit', 'MUI X DataGrid Pro', 'Auth0'],
    summary: 'Parallel engagement delivering proposal listings, deal management, and data grid dashboards using Next.js and Redux Toolkit.',
    highlights: [
      'Built proposal listings and deal management screens using Next.js and Redux Toolkit.',
      'Used MUI X DataGrid Pro for multi-column sorting, filtering, and export on game sponsorship listings.',
      'Integrated Auth0 for session handling and role-based access control.'
    ],
    architectureDetails: {
      problem: 'Rapid 4-month parallel sprint requiring modular marketplace proposal screens and sponsorship listings with role-based routing.',
      solution: 'Implemented Next.js pages with Redux Toolkit state slices and MUI X DataGrid Pro for efficient list rendering.',
      engineeringWin: 'Delivered production deal management features on time alongside ongoing consultancy responsibilities.'
    }
  },
  {
    id: 'buv',
    title: 'British University Vietnam (BUV)',
    role: 'Freelance Frontend Developer',
    timeline: 'Jul 2026 - Aug 2026',
    category: 'Design Systems',
    liveUrl: 'https://www.buv.edu.vn',
    urlLabel: 'buv.edu.vn',
    techStack: ['Modern Web', 'SCSS', 'Pixel-perfect Responsive', 'Figma-to-Code', 'Semantic HTML5'],
    summary: 'Administrative web portal for British University Vietnam, following university brand guidelines and design specifications.',
    highlights: [
      'Converted detailed Figma mockups into responsive, clean HTML/SCSS with high accuracy across desktop and mobile screens.',
      'Built reusable page templates serving as the base layout for academic notices and student documentation.',
      'Worked as one of the core frontend developers alongside international designers to deliver on a tight schedule.'
    ],
    architectureDetails: {
      problem: 'Complex, typography-heavy design layouts adhering strictly to British higher education branding, requiring 100% pixel-perfect fidelity across mobile, tablet, and retina displays.',
      solution: 'Authored semantic, BEM-structured SCSS with fluid clamp() typography and modular layout partials. Collaborated in continuous Figma inspect syncs to ensure exact margin, color contrast, and accessibility compliance.',
      engineeringWin: 'Zero layout regressions during comprehensive UAT across all standard viewports and browsers, delivered ahead of academic publishing deadline.'
    }
  },
  {
    id: 'truc-hoc-lieu',
    title: 'Trục Học Liệu Quốc Gia',
    role: 'Freelance CMS & Frontend Developer',
    timeline: 'Dec 2025 - May 2026',
    category: 'Full-stack & CMS',
    liveUrl: 'https://giaoducso.nxbgd.vn/',
    urlLabel: 'giaoducso.nxbgd.vn',
    techStack: ['PHP (Laravel)', 'Blade Templates', 'SCSS', 'JavaScript', 'Server-side DataTables', 'RESTful APIs'],
    summary: 'National educational content repository used by schools, teachers, and administrators across Vietnam to manage and access verified textbooks and materials.',
    highlights: [
      'Built admin dashboard interfaces and content moderation screens using Laravel Blade templates and SCSS.',
      'Integrated server-side DataTables with search, multi-filter, and bulk actions for managing tens of thousands of resources.',
      'Connected frontend forms with backend REST APIs, adding client and server validation checks.'
    ],
    architectureDetails: {
      problem: 'Managing and moderating tens of thousands of nationwide curriculum resources without overloading database queries or causing admin browser crashes during bulk moderation.',
      solution: 'Integrated server-side DataTables with debounced AJAX requests, query-indexed pagination, and asynchronous batch approval handlers bound to Laravel REST endpoints.',
      engineeringWin: 'Snappy sub-second response times across 50,000+ national textbook assets and clean administrative workflows for civil service users.'
    }
  }
];
