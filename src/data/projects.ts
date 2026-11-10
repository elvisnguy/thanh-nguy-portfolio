import { 
  SiAngular, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiSass, 
  SiRedux, 
  SiNgrx,
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
  SiChartdotjs,
  SiAutodesk
} from 'react-icons/si';
import { TbTopologyStar3, TbCpu, TbRobot, TbCalendar, TbCode, TbCloud, TbLanguage, TbCube } from 'react-icons/tb';
import { Project, SkillGroup } from '../types';

export const TECH_MAP: Record<string, { icon: any; color: string }> = {
  'Angular 19': { icon: SiAngular, color: '#dd0031' },
  'Angular': { icon: SiAngular, color: '#dd0031' },
  'Angular Universal (SSR)': { icon: SiAngular, color: '#f43f5e' },
  'Signals': { icon: TbTopologyStar3, color: '#ec4899' },
  'Standalone Components': { icon: SiAngular, color: '#dd0031' },
  'NgRx': { icon: SiNgrx, color: '#ba2bd3' },
  'i18n & RTL': { icon: TbLanguage, color: '#0ea5e9' },
  'Autodesk APS (Forge)': { icon: SiAutodesk, color: '#0696d7' },
  '3D CAD Viewer': { icon: TbCube, color: '#0284c7' },
  'CometChat': { icon: TbTopologyStar3, color: '#7c3aed' },
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
      { name: 'NgRx (Store, Effects, Selectors)', icon: SiNgrx, color: '#ba2bd3' },
      { name: 'Redux Toolkit', icon: SiRedux, color: '#764abc' },
      { name: 'React Context & Custom Hooks', icon: SiReact, color: '#61dafb' }
    ]
  },
  {
    name: 'UI Libraries & Architecture',
    skills: [
      { name: 'Enterprise UI Library Owner', icon: SiStorybook, color: '#ff4785' },
      { name: 'Storybook Component Docs', icon: SiStorybook, color: '#ff4785' },
      { name: 'i18n & Multilingual (RTL Support)', icon: TbLanguage, color: '#0ea5e9' },
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
    secondaryUrl: {
      url: 'https://www.jurenites.com/portfolio/accountia',
      label: 'Design Case Study'
    },
    techStack: ['Angular 19', 'Signals', 'NgRx', 'RxJS', 'i18n & RTL', 'TypeScript', 'SCSS', 'Storybook', 'Cypress'],
    summary: 'Cloud ERP invoicing and accounting platform designed for multi-currency operations and complex general ledger bookkeeping workflows.',
    highlights: [
      'Published and maintained the enterprise UI Component Library (@genieits/component-library) with Storybook, reducing UI bugs by over 30%.',
      'Engineered complex dynamic FormBlocks and nested FormArrays for multi-step invoice flows: draft sales, credit notes, installment payments, multi-currency fee lines, and tax calculations.',
      'Architected General Ledger (Chart of Accounts) nested data grid with recursive multi-level sub-accounts: solved zero-pagination accounting constraints via CDK Virtual Scrolling (1,500+ lines of custom table architecture), dynamic grid-template-columns column ordering/hiding, and lag-free chevron expansion across massive financial ledger trees.',
      'Architected state management combining NgRx with Angular 19 Signals for fine-grained reactivity and predictable financial data flow.',
      'Implemented i18n multilingual localization with dynamic Right-to-Left (RTL) layout switching for Arabic, Kurdish, and English locales.',
      'Integrated client-side PDF document generation engines (pdf-lib, jsPDF) for instant invoice previews and credit note exports.',
      'Collaborated directly with European product leads and developers in daily English standups and PR reviews.'
    ],
    architectureDetails: {
      problem: 'Accounting domain strictly forbade pagination on General Ledger / Chart of Accounts tables, demanding all accounts and recursive sub-ledgers render in a single view. Expanding parent chevrons on massive hierarchical datasets while supporting dynamic column reordering/hiding caused DOM freeze, layout shifts, and heavy memory overhead.',
      solution: 'Architected a custom virtualized hierarchical grid engine using Angular CDK Virtual Scrolling combined with ChangeDetectionStrategy.OnPush, custom trackBy iterators, and memoized CSS Grid template recalculations. Sub-account recursion and expand/collapse states are immutable and handled off-DOM.',
      engineeringWin: 'Achieved butter-smooth 60fps scrolling and instantaneous chevron expand/collapse across thousands of unpaginated General Ledger account trees with full dynamic column reorder/visibility support.'
    }
  },
  {
    id: 'tech2b',
    title: 'Tech2B Platform',
    role: 'Core Frontend Engineer (3,940+ Commits • kenho)',
    timeline: 'Jan 2021 - Sep 2023 (2 Yrs 9 Mos • Core Focus)',
    category: 'Enterprise Angular',
    liveUrl: 'https://aps.autodesk.com/customer-stories/tech2b',
    urlLabel: 'Autodesk Customer Story',
    techStack: ['Angular', 'Angular Universal (SSR)', 'Autodesk APS (Forge)', '3D CAD Viewer', 'NgRx', 'CometChat', 'TypeScript', 'SCSS', 'RxJS', 'RESTful APIs'],
    summary: 'Dutch B2B cloud manufacturing ecosystem connecting machinery makers and suppliers with embedded 3D CAD visualization and complex eSourcing workflows.',
    highlights: [
      'Authored 3,940+ commits as primary frontend contributor on the Dutch manufacturing platform featured as an Autodesk Customer Story.',
      'Integrated Autodesk Platform Services (APS / Forge Viewer) with custom Three.js extensions for interactive 3D CAD parts viewing, front/back ViewCube controls, and component thematic coloring.',
      'Built multi-tier FormBlock and nested FormArray engines for eSourcing requests, RFQ quotes, order creation, and deep category trees (categories-popover).',
      'Integrated CometChat realtime B2B messaging with context-linked conversation rooms bound to specific quotation and invoice documents.',
      'Architected domain-driven NgRx store partitioning (analytics, company, document, order, message) with LocalStorage sync and freeze protection.',
      'Set up Angular Universal SSR with domino DOM mocking, boosting SEO indexability and cutting initial page load by over 35%.'
    ],
    architectureDetails: {
      problem: 'Sharing heavy proprietary 3D CAD blueprints created massive friction for smaller EU manufacturing suppliers lacking expensive software, while complex multi-item quotation requests and real-time negotiations caused severe state synchronization overhead.',
      solution: 'Engineered an in-browser 3D CAD viewer via Autodesk Forge APIs and custom Three.js event listeners. Partitioned client state into dedicated NgRx modules with memoized selectors, and connected real-time CometChat rooms with embedded document contexts.',
      engineeringWin: 'Empowered thousands of European fabricators to view and quote 3D CAD parts directly in-browser with zero software licenses, achieving official recognition as an Autodesk Global Customer Story.'
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
    role: 'Frontend Engineer (SOT Design Systems & Monorepo)',
    timeline: 'Jul 2026 - Aug 2026',
    category: 'Design Systems & Next.js',
    liveUrl: 'https://www.buv.edu.vn',
    urlLabel: 'buv.edu.vn',
    techStack: ['Next.js 15', 'React 19', 'Turborepo', 'Design System (SOT)', 'Playwright Pixelmatch', 'SCSS', 'TypeScript'],
    summary: 'Flagship digital portal for British University Vietnam built with a Turborepo monorepo architecture and an isolated Source of Truth (/sot) design system gallery.',
    highlights: [
      'Built and maintained the dedicated Source of Truth (/sot) component gallery, ensuring real production UI components never drift from official British university brand standards.',
      'Developed 20+ atomic and composite SOT presentation components (accordion, hero, course highlights, campus gallery, admissions process, contact block).',
      'Configured automated visual regression and design-parity workflows using Playwright, Pixelmatch, and Sharp to enforce pixel-perfect fidelity against Figma.',
      'Delivered frontend modules inside a modern Turborepo monorepo setup on Next.js 15 and React 19.'
    ],
    architectureDetails: {
      problem: 'Strict British higher-education visual guidelines required 100% design parity without regressions across hundreds of course offerings and marketing variants, while preventing component drift between design mockups and production releases.',
      solution: 'Constructed an in-app Source of Truth gallery (/sot) that imports real production components wrapped in design token inspectors, coupled with automated Playwright pixelmatch tests on CI.',
      engineeringWin: 'Zero visual regressions across all viewport breakpoints and a single source of truth component showcase accessible to designers and university stakeholders.'
    }
  },
  {
    id: 'truc-hoc-lieu',
    title: 'Trục học liệu số - NXB Giáo dục Việt Nam',
    role: 'Freelance CMS & Frontend Developer',
    timeline: 'Dec 2025 - May 2026',
    category: 'Full-stack & CMS',
    liveUrl: 'https://giaoducso.nxbgd.vn/',
    urlLabel: 'giaoducso.nxbgd.vn',
    techStack: ['PHP (Laravel)', 'Blade Templates', 'AI Grading API (VTC AI)', 'SCSS', 'Server-side DataTables', 'RESTful APIs'],
    summary: 'National learning-materials hub of Nhà xuất bản Giáo dục Việt Nam, built by VTC. Features admin CMS moderation and teacher portal integration with VTC AI automatic scoring engines.',
    highlights: [
      'Built admin dashboard interfaces and content moderation screens using Laravel Blade templates and SCSS.',
      'Integrated server-side DataTables with search, multi-filter, and bulk actions for managing tens of thousands of resources.',
      'Connected Teacher Portal (webgiaovien) with VTC AI backend microservices for automated OCR text extraction and AI quiz/essay grading (VtcAiService).',
      'Engineered structured hierarchical curriculum trees using nested sets for nationwide textbook and question set taxonomies.'
    ],
    architectureDetails: {
      problem: 'Handling nationwide curriculum resources while orchestrating multi-part asynchronous AI exam scoring (OCR document scanning + automated grading) without blocking web workers or timing out teacher sessions.',
      solution: 'Integrated server-side DataTables with query-indexed pagination, built dedicated teacher portal assessment modules, and connected asynchronous multipart payloads to VTC AI grading endpoints with timeout resilience.',
      engineeringWin: 'Sub-second response times across 700k+ learning assets and automated AI grading workflows serving thousands of teachers on the webgiaovien portal.'
    }
  }
];
