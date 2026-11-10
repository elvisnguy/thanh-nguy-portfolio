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
  'Next.js 15': { icon: SiNextdotjs, color: '#ffffff' },
  'React 19': { icon: SiReact, color: '#61dafb' },
  'Turborepo': { icon: TbTopologyStar3, color: '#ef4444' },
  'Design System (SOT)': { icon: SiStorybook, color: '#ff4785' },
  'Playwright Pixelmatch': { icon: TbCpu, color: '#22c55e' },
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
  'Modern Web': { icon: SiHtml5, color: '#e34f26' },
  'Accessibility (a11y)': { icon: TbCpu, color: '#10b981' },
  'PHP (Laravel)': { icon: SiLaravel, color: '#ff2d20' },
  'Blade Templates': { icon: SiPhp, color: '#777bb4' },
  'AI Grading API (VTC AI)': { icon: TbRobot, color: '#10a37f' },
  'Server-side DataTables': { icon: TbTopologyStar3, color: '#06b6d4' },
  'RESTful APIs': { icon: TbTopologyStar3, color: '#06b6d4' }
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
    summaryVi: 'Hệ thống ERP kế toán và quản lý hóa đơn đám mây phục vụ nghiệp vụ hạch toán tài chính đa tiền tệ và sổ cái tài khoản doanh nghiệp.',
    highlights: [
      'Published and maintained the enterprise UI Component Library (@genieits/component-library) with Storybook, reducing UI bugs by over 30%.',
      'Engineered complex dynamic FormBlocks and nested FormArrays for multi-step invoice flows: draft sales, credit notes, installment payments, multi-currency fee lines, and tax calculations.',
      'Architected General Ledger (Chart of Accounts) nested data grid with recursive multi-level sub-accounts: solved zero-pagination accounting constraints via CDK Virtual Scrolling (1,500+ lines of custom table architecture), dynamic grid-template-columns column ordering/hiding, and lag-free chevron expansion across massive financial ledger trees.',
      'Architected state management combining NgRx with Angular 19 Signals for fine-grained reactivity and predictable financial data flow.',
      'Implemented i18n multilingual localization with dynamic Right-to-Left (RTL) layout switching for Arabic, Kurdish, and English locales.',
      'Integrated client-side PDF document generation engines (pdf-lib, jsPDF) for instant invoice previews and credit note exports.',
      'Collaborated directly with European product leads and developers in daily English standups and PR reviews.'
    ],
    highlightsVi: [
      'Xây dựng và làm chủ thư viện giao diện dùng chung (@genieits/component-library) trên nền Storybook, giảm hơn 30% lỗi giao diện giữa các nhóm.',
      'Phát triển engine FormBlock và FormArray lồng nhiều cấp cho toàn bộ luồng hóa đơn: hóa đơn nháp, phiếu ghi có (credit note), trả góp theo kỳ, chi phí đa ngoại tệ và tính thuế tự động.',
      'Xử lý bảng Sổ Cái Kế Toán (General Ledger / Chart of Accounts) theo yêu cầu nghiệp vụ bắt buộc không phân trang: dùng CDK Virtual Scrolling (1.500+ dòng code riêng), cho phép ẩn/hiện và sắp xếp cột động bằng CSS Grid, giữ nguyên 60fps khi mở chevron qua hàng ngàn tài khoản đệ quy.',
      'Kết hợp NgRx Store và Angular 19 Signals để tối ưu state, giảm triệt để các chu kỳ Change Detection thừa.',
      'Hỗ trợ đa ngôn ngữ i18n và đảo toàn bộ giao diện từ phải sang trái (RTL) cho tiếng Ả Rập, tiếng Kurd và tiếng Anh.',
      'Tích hợp thư viện PDF client-side (pdf-lib, jsPDF) để xem trước và xuất hóa đơn điện tử tức thì không cần chờ backend.',
      'Làm việc trực tiếp với Tech Lead và Product Owner châu Âu qua daily standup và review PR bằng tiếng Anh.'
    ],
    architectureDetails: {
      problem: 'Accounting domain strictly forbade pagination on General Ledger / Chart of Accounts tables, demanding all accounts and recursive sub-ledgers render in a single view. Expanding parent chevrons on massive hierarchical datasets while supporting dynamic column reordering/hiding caused DOM freeze, layout shifts, and heavy memory overhead.',
      problemVi: 'Nghiệp vụ kế toán cấm phân trang trên bảng Sổ Cái (General Ledger), bắt buộc toàn bộ tài khoản mẹ và tài khoản con đệ quy phải hiển thị chung một view. Thao tác mở chevron trên tập dữ liệu lớn kèm căn chỉnh ẩn/hiện cột gây treo DOM và tràn bộ nhớ.',
      solution: 'Architected a custom virtualized hierarchical grid engine using Angular CDK Virtual Scrolling combined with ChangeDetectionStrategy.OnPush, custom trackBy iterators, and memoized CSS Grid template recalculations. Sub-account recursion and expand/collapse states are immutable and handled off-DOM.',
      solutionVi: 'Tự xây dựng engine bảng ảo phân cấp bằng Angular CDK Virtual Scrolling, ChangeDetectionStrategy.OnPush, trackBy tối ưu và tính toán lại CSS Grid động. Logic đệ quy tài khoản con và trạng thái đóng/mở được xử lý immutable ngoài DOM.',
      engineeringWin: 'Achieved butter-smooth 60fps scrolling and instantaneous chevron expand/collapse across thousands of unpaginated General Ledger account trees with full dynamic column reorder/visibility support.',
      engineeringWinVi: 'Cuộn mượt 60fps và mở/đóng chevron tức thì trên hàng ngàn tài khoản đệ quy không phân trang; hỗ trợ đầy đủ đổi thứ tự và ẩn/hiện cột số liệu.'
    }
  },
  {
    id: 'tech2b',
    title: 'Tech2B Platform',
    role: 'Core Frontend Engineer',
    timeline: 'Jan 2021 - Sep 2023 (2 Yrs 9 Mos • Core Focus)',
    category: 'Enterprise Angular',
    liveUrl: 'https://aps.autodesk.com/customer-stories/tech2b',
    urlLabel: 'Autodesk Customer Story',
    techStack: ['Angular', 'Angular Universal (SSR)', 'Autodesk APS (Forge)', '3D CAD Viewer', 'NgRx', 'CometChat', 'TypeScript', 'SCSS', 'RxJS', 'RESTful APIs'],
    summary: 'Dutch B2B cloud manufacturing ecosystem connecting machinery makers and suppliers with embedded 3D CAD visualization and complex eSourcing workflows.',
    summaryVi: 'Hệ sinh thái sản xuất và gia công cơ khí B2B của Hà Lan, kết nối nhà chế tạo máy móc với các xưởng gia công qua công cụ xem 3D CAD nhúng và quy trình eSourcing.',
    highlights: [
      'Core frontend engineer on the Dutch manufacturing platform officially recognized as an Autodesk Global Customer Story.',
      'Integrated Autodesk Platform Services (APS / Forge Viewer) with custom Three.js extensions for interactive 3D CAD parts viewing, front/back ViewCube controls, and component thematic coloring.',
      'Built multi-tier FormBlock and nested FormArray engines for eSourcing requests, RFQ quotes, order creation, and deep category trees (categories-popover).',
      'Integrated CometChat realtime B2B messaging with context-linked conversation rooms bound to specific quotation and invoice documents.',
      'Architected domain-driven NgRx store partitioning (analytics, company, document, order, message) with LocalStorage sync and freeze protection.',
      'Set up Angular Universal SSR with domino DOM mocking, boosting SEO indexability and cutting initial page load by over 35%.'
    ],
    highlightsVi: [
      'Kỹ sư frontend nòng cốt phát triển nền tảng sản xuất cơ khí số được Autodesk vinh danh làm Global Customer Story.',
      'Tích hợp Autodesk Platform Services (APS Forge Viewer) cùng extension Three.js để xem bản vẽ 3D CAD, điều khiển ViewCube xoay góc nhìn và đổi màu linh kiện tương tác.',
      'Xây dựng các FormBlock đa tầng và FormArray lồng ghép cho luồng eSourcing: gửi yêu cầu báo giá (RFQ), thiết lập thông số kỹ thuật, chọn danh mục nhiều cấp và tạo đơn hàng.',
      'Tích hợp nhắn tin realtime CometChat, gắn phòng chat trực tiếp với ngữ cảnh mã báo giá và tài liệu kỹ thuật liên quan.',
      'Tổ chức NgRx Store phân tách theo từng domain (analytics, company, document, order, message), đồng bộ an toàn với LocalStorage.',
      'Thiết lập Angular Universal SSR với domino để giả lập DOM, cải thiện SEO và giảm hơn 35% thời gian tải trang đầu tiên.'
    ],
    architectureDetails: {
      problem: 'Sharing heavy proprietary 3D CAD blueprints created massive friction for smaller EU manufacturing suppliers lacking expensive software, while complex multi-item quotation requests and real-time negotiations caused severe state synchronization overhead.',
      problemVi: 'Bản vẽ 3D CAD dung lượng lớn đòi hỏi các xưởng gia công vừa và nhỏ tại châu Âu phải cài phần mềm bản quyền đắt tiền, đồng thời việc trao đổi báo giá đa hạng mục kèm chat realtime gây quá tải luồng đồng bộ state.',
      solution: 'Engineered an in-browser 3D CAD viewer via Autodesk Forge APIs and custom Three.js event listeners. Partitioned client state into dedicated NgRx modules with memoized selectors, and connected real-time CometChat rooms with embedded document contexts.',
      solutionVi: 'Tích hợp trình xem bản vẽ 3D CAD trực tiếp trên trình duyệt qua Autodesk Forge API và custom Three.js extension. Phân tách state thành các module NgRx độc lập và liên kết phòng chat CometChat với ngữ cảnh tài liệu.',
      engineeringWin: 'Empowered thousands of European fabricators to view and quote 3D CAD parts directly in-browser with zero software licenses, achieving official recognition as an Autodesk Global Customer Story.',
      engineeringWinVi: 'Giúp hàng ngàn xưởng sản xuất châu Âu xem và báo giá linh kiện 3D CAD ngay trên trình duyệt mà không cần mua license phần mềm, được Autodesk chọn làm Global Customer Story.'
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
    summaryVi: 'Nền tảng luyện thi chuẩn hóa (SAT, ACT, AP Computer Science) tích hợp phân tích điểm và trình chạy code trực tiếp trên trình duyệt.',
    highlights: [
      'Developed mock exam modules for SAT/ACT practice with section timers, question navigation, and flagging based on CollegeBoard BlueBook specs.',
      'Integrated CodeMirror 6 with syntax highlighting for Python, Java, C++, and JS, connected to a Python backend engine for sub-second test execution.',
      'Maintained clean code structure across 30+ domain modules, using Git Worktrees to handle multiple tickets in parallel.',
      'Built score progress dashboards and scheduling features using FullCalendar and dnd-kit.'
    ],
    highlightsVi: [
      'Xây dựng các module thi thử bám sát quy cách phần mềm BlueBook của CollegeBoard: đồng hồ bấm giờ theo phần thi, điều hướng câu hỏi và gắn cờ xem lại.',
      'Tích hợp trình soạn thảo CodeMirror 6 hỗ trợ highlight cú pháp Python, Java, C++, JS, kết nối engine backend trả kết quả chạy code dưới 1 giây.',
      'Tổ chức cấu trúc code rõ ràng trên 30+ module nghiệp vụ, ứng dụng Git Worktrees để xử lý đồng thời nhiều task trên các nhánh riêng.',
      'Phát triển bảng theo dõi tiến độ điểm số và lịch học bằng FullCalendar và dnd-kit.'
    ],
    architectureDetails: {
      problem: 'Building an interactive in-browser IDE for AP Computer Science that must handle real-time code evaluation without freezing the UI thread, alongside strict CollegeBoard BlueBook timed session persistence.',
      problemVi: 'Trình soạn thảo code trên trình duyệt cho môn AP Computer Science cần kiểm tra cú pháp và chấm code realtime mà không làm đơ giao diện, đồng thời phải lưu trữ phiên thi có giới hạn thời gian nghiêm ngặt.',
      solution: 'Integrated CodeMirror 6 with custom Web Worker syntax linting, connected to an asynchronous Python execution engine with sub-second feedback. Stored active exam states with resilient local fallback to prevent data loss during network drops.',
      solutionVi: 'Tích hợp CodeMirror 6 chạy linting cú pháp qua Web Worker riêng, kết nối engine Python bất đồng bộ và lưu bài thi vào bộ nhớ cục bộ dự phòng tránh mất dữ liệu khi mất kết nối.',
      engineeringWin: 'Maintained 60fps editor fluidity, scaled cleanly across 30+ domain modules using Git Worktrees, and delivered sub-second code test feedback.',
      engineeringWinVi: 'Trình soạn thảo giữ vững độ phản hồi 60fps, mở rộng ổn định trên 30+ module và trả kết quả chấm thuật toán tức thì.'
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
    summaryVi: 'Hợp đồng ngắn hạn phát triển màn hình quản lý đàm phán hợp đồng, danh sách đề xuất tài trợ game và bảng dữ liệu với Next.js và Redux Toolkit.',
    highlights: [
      'Built proposal listings and deal management screens using Next.js and Redux Toolkit.',
      'Used MUI X DataGrid Pro for multi-column sorting, filtering, and export on game sponsorship listings.',
      'Integrated Auth0 for session handling and role-based access control.'
    ],
    highlightsVi: [
      'Xây dựng các màn hình danh sách chào giá và quản lý quy trình deal sử dụng Next.js và Redux Toolkit.',
      'Sử dụng MUI X DataGrid Pro để lọc đa cột, sắp xếp và trích xuất dữ liệu danh sách tài trợ game.',
      'Tích hợp Auth0 quản lý phiên đăng nhập và phân quyền người dùng (RBAC).'
    ],
    architectureDetails: {
      problem: 'Rapid 4-month parallel sprint requiring modular marketplace proposal screens and sponsorship listings with role-based routing.',
      problemVi: 'Sprint 4 tháng song song đòi hỏi hoàn thiện nhanh các màn hình giao dịch bản quyền và bảng dữ liệu lớn kèm phân quyền vai trò người dùng.',
      solution: 'Implemented Next.js pages with Redux Toolkit state slices and MUI X DataGrid Pro for efficient list rendering.',
      solutionVi: 'Triển khai các trang Next.js với state slice Redux Toolkit và tận dụng khả năng render bảng của MUI X DataGrid Pro.',
      engineeringWin: 'Delivered production deal management features on time alongside ongoing consultancy responsibilities.',
      engineeringWinVi: 'Bàn giao các tính năng quản lý deal đúng hạn, đảm bảo chất lượng song song với dự án chính.'
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
    summaryVi: 'Cổng thông tin Đại học Anh Quốc Việt Nam (BUV) xây dựng trên kiến trúc Turborepo monorepo, có trang Source of Truth (/sot) chuẩn hóa component tái sử dụng.',
    highlights: [
      'Built and maintained the dedicated Source of Truth (/sot) component gallery, ensuring real production UI components never drift from official British university brand standards.',
      'Developed 20+ atomic and composite SOT presentation components (accordion, hero, course highlights, campus gallery, admissions process, contact block).',
      'Configured automated visual regression and design-parity workflows using Playwright, Pixelmatch, and Sharp to enforce pixel-perfect fidelity against Figma.',
      'Delivered frontend modules inside a modern Turborepo monorepo setup on Next.js 15 and React 19.'
    ],
    highlightsVi: [
      'Xây dựng trang Source of Truth (/sot) tập hợp các component mẫu, đảm bảo UI trên production luôn khớp chuẩn nhận diện của trường đại học Anh Quốc.',
      'Phát triển 20+ component tái sử dụng (accordion, banner hero, điểm nổi bật khóa học, thư viện ảnh khuôn viên, quy trình tuyển sinh, khối liên hệ).',
      'Cấu hình kiểm thử hồi quy thị giác tự động bằng Playwright, Pixelmatch và Sharp để so sánh độ chuẩn xác từng pixel với Figma trên CI.',
      'Bàn giao các module frontend trong cấu trúc monorepo Turborepo chạy trên Next.js 15 và React 19.'
    ],
    architectureDetails: {
      problem: 'Strict British higher-education visual guidelines required 100% design parity without regressions across hundreds of course offerings and marketing variants, while preventing component drift between design mockups and production releases.',
      problemVi: 'Quy chuẩn nhận diện thương hiệu giáo dục đòi hỏi độ khớp thiết kế 100% qua hàng trăm trang ngành học, tránh tình trạng component ngoài thực tế bị lệch so với Figma.',
      solution: 'Constructed an in-app Source of Truth gallery (/sot) that imports real production components wrapped in design token inspectors, coupled with automated Playwright pixelmatch tests on CI.',
      solutionVi: 'Tạo trang Source of Truth (/sot) trực tiếp trong app để hiển thị các component thật cùng bộ kiểm tra design token, kết hợp chạy test so ảnh tự động bằng Playwright Pixelmatch trên CI.',
      engineeringWin: 'Zero visual regressions across all viewport breakpoints and a single source of truth component showcase accessible to designers and university stakeholders.',
      engineeringWinVi: 'Không phát sinh lỗi lệch giao diện trên các kích thước màn hình, bàn giao thư viện component chuẩn cho designer và các bên liên quan kiểm tra.'
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
    summaryVi: 'Hệ thống Trục học liệu số quốc gia (NXB Giáo dục Việt Nam do VTC xây dựng), gồm CMS quản trị học liệu và Cổng giáo viên kết nối microservice AI của VTC để quét OCR và chấm thi tự động.',
    highlights: [
      'Built admin dashboard interfaces and content moderation screens using Laravel Blade templates and SCSS.',
      'Integrated server-side DataTables with search, multi-filter, and bulk actions for managing tens of thousands of resources.',
      'Connected Teacher Portal (webgiaovien) with VTC AI backend microservices for automated OCR text extraction and AI quiz/essay grading (VtcAiService).',
      'Engineered structured hierarchical curriculum trees using nested sets for nationwide textbook and question set taxonomies.'
    ],
    highlightsVi: [
      'Xây dựng giao diện trang quản trị CMS kiểm duyệt học liệu số bằng Laravel Blade và SCSS.',
      'Tích hợp server-side DataTables hỗ trợ tìm kiếm, lọc nhiều tiêu chí và thao tác hàng loạt trên hàng chục ngàn tài nguyên.',
      'Kết nối Cổng giáo viên (webgiaovien) với microservice VTC AI (VtcAiService) để nhận dạng văn bản qua OCR và chấm bài trắc nghiệm/tự luận tự động.',
      'Tổ chức cây danh mục chương trình học theo mô hình nested sets cho toàn bộ sách giáo khoa và ngân hàng câu hỏi trên cả nước.'
    ],
    architectureDetails: {
      problem: 'Handling nationwide curriculum resources while orchestrating multi-part asynchronous AI exam scoring (OCR document scanning + automated grading) without blocking web workers or timing out teacher sessions.',
      problemVi: 'Cần quản lý lượng học liệu lớn toàn quốc và xử lý luồng chấm thi AI nhiều bước (scan OCR tài liệu + chấm điểm) mà không làm gián đoạn hay treo kết nối của giáo viên.',
      solution: 'Integrated server-side DataTables with query-indexed pagination, built dedicated teacher portal assessment modules, and connected asynchronous multipart payloads to VTC AI grading endpoints with timeout resilience.',
      solutionVi: 'Tối ưu DataTables server-side theo index phân trang, xây dựng module khảo thí trên Cổng giáo viên và gửi payload multipart bất đồng bộ đến API VTC AI với cơ chế chịu lỗi timeout.',
      engineeringWin: 'Sub-second response times across 700k+ learning assets and automated AI grading workflows serving thousands of teachers on the webgiaovien portal.',
      engineeringWinVi: 'Thời gian phản hồi dưới 1 giây trên 700.000+ học liệu và vận hành luồng chấm thi AI tự động cho hàng ngàn giáo viên trên Cổng webgiaovien.'
    }
  }
];
