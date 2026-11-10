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
    summaryVi: 'Hệ thống ERP kế toán và quản lý hóa đơn đám mây phục vụ các luồng hạch toán tài chính đa tiền tệ và nghiệp vụ sổ cái tài khoản doanh nghiệp phức tạp.',
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
      'Đóng gói, xuất bản và làm chủ thư viện giao diện chuẩn doanh nghiệp (@genieits/component-library) trên nền Storybook, triệt tiêu hơn 30% lỗi giao diện phát sinh chéo giữa các nhóm phát triển.',
      'Thiết kế engine FormBlock động và FormArray lồng nhiều tầng cho toàn bộ luồng nghiệp vụ hóa đơn: hóa đơn bán hàng nháp, phiếu ghi có (credit note), thanh toán trả góp theo kỳ, dòng chi phí đa ngoại tệ và công thức khấu trừ thuế tự động.',
      'Giải quyết triệt để bài toán hóc búa của Bảng Sổ Cái Kế Toán (General Ledger / Chart of Accounts): theo đặc thù nghiệp vụ kế toán bắt buộc không được phân trang (zero-pagination) mà phải hiển thị toàn bộ cây tài khoản đệ quy nhiều cấp. Đã kiến tạo giải pháp bảng ảo tùy biến bằng CDK Virtual Scrolling (hơn 1.500 dòng kiến trúc riêng), cho phép sắp xếp và ẩn/hiện cột động qua CSS Grid mà không hề giật lag hay tụt khung hình khi người dùng mở rộng chevron hàng loạt nhánh dữ liệu lớn.',
      'Kiến trúc tầng quản lý trạng thái kết hợp hài hòa giữa NgRx Store và Angular 19 Signals, đạt khả năng phản ứng hạt nhân cực nhạy và triệt tiêu hoàn toàn các chu kỳ Change Detection thừa thãi.',
      'Triển khai hoàn chỉnh hệ thống đa ngôn ngữ i18n kèm cơ chế đảo toàn bộ bố cục từ phải sang trái (RTL layout) hỗ trợ chuẩn mực cho các đối tác dùng tiếng Ả Rập, tiếng Kurd và tiếng Anh.',
      'Tích hợp trực tiếp engine kết xuất tệp PDF client-side (pdf-lib, jsPDF) giúp xem trước tức thời và tải xuống chứng từ hóa đơn điện tử không cần chờ backend kết xuất.',
      'Làm việc độc lập và trực tiếp với Tech Lead, Product Owner tại châu Âu bằng tiếng Anh trong mọi buổi daily sync, thống nhất kiến trúc và review pull request.'
    ],
    architectureDetails: {
      problem: 'Accounting domain strictly forbade pagination on General Ledger / Chart of Accounts tables, demanding all accounts and recursive sub-ledgers render in a single view. Expanding parent chevrons on massive hierarchical datasets while supporting dynamic column reordering/hiding caused DOM freeze, layout shifts, and heavy memory overhead.',
      problemVi: 'Nghiệp vụ kế toán đặt ra yêu cầu bất biến: Bảng Kế Toán Sổ Cái (General Ledger) tuyệt đối không được phân trang nhằm phục vụ đối soát liền mạch, buộc toàn bộ tài khoản mẹ lẫn các cấp tài khoản con đệ quy phải cùng hiện diện trên giao diện. Khi người dùng bấm chevron để bung các nhánh dữ liệu tài chính khổng lồ kết hợp với thao tác kéo thả đổi thứ tự hoặc ẩn/hiện cột tùy biến, trình duyệt bị quá tải số lượng DOM node, gây đơ giao diện và tràn bộ nhớ.',
      solution: 'Architected a custom virtualized hierarchical grid engine using Angular CDK Virtual Scrolling combined with ChangeDetectionStrategy.OnPush, custom trackBy iterators, and memoized CSS Grid template recalculations. Sub-account recursion and expand/collapse states are immutable and handled off-DOM.',
      solutionVi: 'Thiết kế riêng một engine bảng ảo phân cấp kết hợp sức mạnh của Angular CDK Virtual Scrolling, chiến lược ChangeDetectionStrategy.OnPush, cơ chế nhận diện trackBy định danh và tính toán trước mẫu cột CSS Grid (memoized template). Mọi logic đệ quy cây tài khoản và trạng thái đóng/mở đều được xử lý bất biến (immutable) ngoài DOM trước khi đưa vào viewport.',
      engineeringWin: 'Achieved butter-smooth 60fps scrolling and instantaneous chevron expand/collapse across thousands of unpaginated General Ledger account trees with full dynamic column reorder/visibility support.',
      engineeringWinVi: 'Đạt độ mượt mà 60fps chuẩn mực khi cuộn qua hàng ngàn tài khoản đệ quy không phân trang; phản hồi thao tác bung/gập chevron gần như tức thời; hỗ trợ toàn diện việc bật/tắt và căn chỉnh lại các cột số liệu mà không gây bất kỳ hiện tượng giật lag nào.'
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
    summaryVi: 'Hệ sinh thái sản xuất và gia công cơ khí B2B trên đám mây của Hà Lan, kết nối nhà chế tạo máy móc với các xưởng gia công qua công nghệ dựng hình 3D CAD tương tác trên web và luồng eSourcing chuyên sâu.',
    highlights: [
      'Authored 3,940+ commits as primary frontend contributor on the Dutch manufacturing platform featured as an Autodesk Customer Story.',
      'Integrated Autodesk Platform Services (APS / Forge Viewer) with custom Three.js extensions for interactive 3D CAD parts viewing, front/back ViewCube controls, and component thematic coloring.',
      'Built multi-tier FormBlock and nested FormArray engines for eSourcing requests, RFQ quotes, order creation, and deep category trees (categories-popover).',
      'Integrated CometChat realtime B2B messaging with context-linked conversation rooms bound to specific quotation and invoice documents.',
      'Architected domain-driven NgRx store partitioning (analytics, company, document, order, message) with LocalStorage sync and freeze protection.',
      'Set up Angular Universal SSR with domino DOM mocking, boosting SEO indexability and cutting initial page load by over 35%.'
    ],
    highlightsVi: [
      'Tác giả của hơn 3.940+ commits với định danh kenho, giữ vai trò kỹ sư frontend nòng cốt kiến tạo nên nền tảng sản xuất cơ khí số được Autodesk vinh danh làm Global Customer Story tiêu biểu.',
      'Tích hợp chuyên sâu bộ công cụ Autodesk Platform Services (APS Forge Viewer) kết hợp viết thêm các extension Three.js tùy biến, mang đến trải nghiệm xoay ViewCube 3D chân thực, tương tác bóc tách chi tiết máy và đổi màu linh kiện theo trạng thái sản xuất trực tiếp trên trình duyệt.',
      'Xây dựng các khối FormBlock đa tầng và FormArray lồng ghép phức tạp cho toàn bộ chu trình eSourcing: tạo yêu cầu báo giá (RFQ), thiết lập định mức kỹ thuật, xử lý cây danh mục sản phẩm nhiều cấp và xác nhận đơn hàng cơ khí.',
      'Tích hợp nền tảng tin nhắn doanh nghiệp CometChat thời gian thực, gắn kết từng phòng hội thoại trực tiếp với mã báo giá và tài liệu kỹ thuật tương ứng, giúp các xưởng trao đổi chính xác không nhầm lẫn.',
      'Quy hoạch cấu trúc NgRx Store phân tán theo từng domain nghiệp vụ (analytics, company, document, order, message), đồng bộ an toàn với bộ nhớ LocalStorage và có cơ chế bảo vệ đóng băng trạng thái.',
      'Thiết lập giải pháp dựng trang phía server (Angular Universal SSR) cùng thư viện domino giả lập môi trường DOM, vừa cải thiện vượt bậc chỉ số SEO vừa rút ngắn hơn 35% thời gian hiển thị trang đầu tiên.'
    ],
    architectureDetails: {
      problem: 'Sharing heavy proprietary 3D CAD blueprints created massive friction for smaller EU manufacturing suppliers lacking expensive software, while complex multi-item quotation requests and real-time negotiations caused severe state synchronization overhead.',
      problemVi: 'Việc chia sẻ và xem các bản vẽ kỹ thuật cơ khí 3D CAD độc quyền là rào cản rất lớn đối với các xưởng gia công vừa và nhỏ tại châu Âu do chi phí bản quyền phần mềm thiết kế chuyên dụng vô cùng đắt đỏ. Đồng thời, việc đồng bộ dữ liệu báo giá đa hạng mục kèm chat trao đổi thời gian thực giữa các bên liên tục gây nghẽn luồng xử lý trạng thái.',
      solution: 'Engineered an in-browser 3D CAD viewer via Autodesk Forge APIs and custom Three.js event listeners. Partitioned client state into dedicated NgRx modules with memoized selectors, and connected real-time CometChat rooms with embedded document contexts.',
      solutionVi: 'Hiện thực hóa trình xem và tương tác bản vẽ 3D CAD trực tiếp ngay trên trình duyệt thông qua Autodesk APS API và custom Three.js extension. Tách bạch kiến trúc quản lý trạng thái thành các module NgRx độc lập sử dụng memoized selector, đồng thời nhúng ngữ cảnh tài liệu vào các kênh chat CometChat thời gian thực.',
      engineeringWin: 'Empowered thousands of European fabricators to view and quote 3D CAD parts directly in-browser with zero software licenses, achieving official recognition as an Autodesk Global Customer Story.',
      engineeringWinVi: 'Mở đường cho hàng ngàn xưởng chế tạo tại Hà Lan và châu Âu xem, kiểm tra quy cách và báo giá bản vẽ 3D CAD tức thời chỉ bằng trình duyệt mà không tốn một đồng mua license phần mềm ngoại vi, đưa Tech2B trở thành câu chuyện thành công mẫu mực được Autodesk vinh danh toàn cầu.'
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
    summaryVi: 'Nền tảng luyện thi chuẩn hóa quốc tế (SAT, ACT, AP Computer Science) tích hợp công cụ phân tích điểm thông minh và trình thực thi code trực tiếp trong trình duyệt.',
    highlights: [
      'Developed mock exam modules for SAT/ACT practice with section timers, question navigation, and flagging based on CollegeBoard BlueBook specs.',
      'Integrated CodeMirror 6 with syntax highlighting for Python, Java, C++, and JS, connected to a Python backend engine for sub-second test execution.',
      'Maintained clean code structure across 30+ domain modules, using Git Worktrees to handle multiple tickets in parallel.',
      'Built score progress dashboards and scheduling features using FullCalendar and dnd-kit.'
    ],
    highlightsVi: [
      'Phát triển các module thi thử chuẩn quốc tế bám sát quy cách phần mềm BlueBook của CollegeBoard với đồng hồ đếm ngược, phân đoạn đề thi, gắn cờ xem lại và chuyển câu hỏi mượt mà.',
      'Tích hợp trình soạn thảo code CodeMirror 6 hỗ trợ highlight cú pháp Python, Java, C++, JS, kết nối engine backend thực thi và trả kết quả kiểm thử thuật toán dưới một giây.',
      'Duy trì kiến trúc mã nguồn sạch sẽ trên hơn 30 module nghiệp vụ, ứng dụng Git Worktrees để phát triển song song nhiều tính năng độc lập mà không bị gián đoạn nhánh làm việc.',
      'Xây dựng bảng theo dõi tiến độ luyện thi và giao diện lên lịch học tương tác bằng FullCalendar và dnd-kit.'
    ],
    architectureDetails: {
      problem: 'Building an interactive in-browser IDE for AP Computer Science that must handle real-time code evaluation without freezing the UI thread, alongside strict CollegeBoard BlueBook timed session persistence.',
      problemVi: 'Xây dựng môi trường IDE ngay trong trình duyệt cho môn AP Computer Science đòi hỏi khả năng phân tích cú pháp và chấm code thời gian thực mà không làm nghẽn luồng xử lý UI chính, đồng thời phải đảm bảo tính toàn vẹn phiên làm bài thi có giới hạn thời gian nghiêm ngặt.',
      solution: 'Integrated CodeMirror 6 with custom Web Worker syntax linting, connected to an asynchronous Python execution engine with sub-second feedback. Stored active exam states with resilient local fallback to prevent data loss during network drops.',
      solutionVi: 'Tích hợp CodeMirror 6 với luồng Web Worker riêng để kiểm tra cú pháp nền, liên kết với engine chạy code Python bất đồng bộ cho phản hồi cực nhanh. Lưu trữ trạng thái bài thi với cơ chế fallback cục bộ bền vững giúp thí sinh không bao giờ bị mất bài làm khi rớt mạng.',
      engineeringWin: 'Maintained 60fps editor fluidity, scaled cleanly across 30+ domain modules using Git Worktrees, and delivered sub-second code test feedback.',
      engineeringWinVi: 'Đảm bảo trình soạn thảo giữ vững độ phản hồi 60fps, vận hành trơn tru trên 30+ domain chức năng và mang lại phản hồi chấm điểm thuật toán tức thì.'
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
    summaryVi: 'Dự án hợp đồng song song bàn giao các màn hình quản lý thương vụ bản quyền, danh sách chào giá tài trợ game và bảng dữ liệu chuyên sâu với Next.js và Redux Toolkit.',
    highlights: [
      'Built proposal listings and deal management screens using Next.js and Redux Toolkit.',
      'Used MUI X DataGrid Pro for multi-column sorting, filtering, and export on game sponsorship listings.',
      'Integrated Auth0 for session handling and role-based access control.'
    ],
    highlightsVi: [
      'Hiện thực hóa các giao diện hiển thị hồ sơ tài trợ và quản lý tiến trình đàm phán hợp đồng sử dụng Next.js kết hợp Redux Toolkit.',
      'Ứng dụng bộ bảng dữ liệu nâng cao MUI X DataGrid Pro nhằm xử lý lọc đa cột, sắp xếp theo tiêu chí và xuất file báo cáo cho hàng loạt dữ liệu tài trợ game.',
      'Tích hợp Auth0 quản lý phiên đăng nhập và phân quyền truy cập theo vai trò người dùng (RBAC).'
    ],
    architectureDetails: {
      problem: 'Rapid 4-month parallel sprint requiring modular marketplace proposal screens and sponsorship listings with role-based routing.',
      problemVi: 'Tiến độ bàn giao gấp rút trong 4 tháng chạy song song, đòi hỏi hoàn thiện nhanh các màn hình giao dịch bản quyền phức tạp và hệ thống bảng biểu lớn với cơ chế phân quyền bảo mật.',
      solution: 'Implemented Next.js pages with Redux Toolkit state slices and MUI X DataGrid Pro for efficient list rendering.',
      solutionVi: 'Triển khai cấu trúc Next.js với các state slice tối ưu của Redux Toolkit và tận dụng khả năng render danh sách ảo mạnh mẽ của MUI X DataGrid Pro.',
      engineeringWin: 'Delivered production deal management features on time alongside ongoing consultancy responsibilities.',
      engineeringWinVi: 'Bàn giao các tính năng quản lý thương vụ đạt chuẩn sản xuất đúng hạn mà vẫn song hành đảm bảo chất lượng các dự án tư vấn chính.'
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
    summaryVi: 'Cổng thông tin đại học tiêu chuẩn Anh Quốc BUV xây dựng trên kiến trúc Turborepo monorepo hiện đại, nổi bật với phòng trưng bày Design System Source of Truth (/sot) quy chuẩn.',
    highlights: [
      'Built and maintained the dedicated Source of Truth (/sot) component gallery, ensuring real production UI components never drift from official British university brand standards.',
      'Developed 20+ atomic and composite SOT presentation components (accordion, hero, course highlights, campus gallery, admissions process, contact block).',
      'Configured automated visual regression and design-parity workflows using Playwright, Pixelmatch, and Sharp to enforce pixel-perfect fidelity against Figma.',
      'Delivered frontend modules inside a modern Turborepo monorepo setup on Next.js 15 and React 19.'
    ],
    highlightsVi: [
      'Trực tiếp xây dựng và duy trì phòng trưng bày linh kiện mẫu Source of Truth (/sot), đảm bảo các component chạy thật trên production luôn bám sát 100% quy chuẩn nhận diện thương hiệu học thuật khắt khe của trường đại học Anh Quốc.',
      'Hiện thực hóa hơn 20+ khối component tái sử dụng chuẩn SOT (accordion thông tin, banner hero, tiêu điểm chương trình đào tạo, thư viện khuôn viên trường, quy trình xét tuyển, khối liên hệ tuyển sinh).',
      'Thiết lập quy trình kiểm thử hồi quy thị giác tự động (automated visual regression) bằng Playwright, Pixelmatch và Sharp, phát hiện lập tức mọi sai lệch pixel-perfect so với bản vẽ Figma gốc ngay trên luồng CI.',
      'Bàn giao các gói module frontend hoạt động trơn tru trong kiến trúc monorepo Turborepo tiên tiến vận hành trên Next.js 15 và React 19.'
    ],
    architectureDetails: {
      problem: 'Strict British higher-education visual guidelines required 100% design parity without regressions across hundreds of course offerings and marketing variants, while preventing component drift between design mockups and production releases.',
      problemVi: 'Bộ quy chuẩn nhận diện thương hiệu giáo dục đại học Anh Quốc đòi hỏi tính đồng nhất tuyệt đối không tì vết qua hàng trăm trang ngành học và chiến dịch tuyển sinh, đặt ra thách thức lớn là làm sao ngăn chặn triệt để sự sai lệch giữa bản vẽ thiết kế với mã nguồn release ngoài thực tế.',
      solution: 'Constructed an in-app Source of Truth gallery (/sot) that imports real production components wrapped in design token inspectors, coupled with automated Playwright pixelmatch tests on CI.',
      solutionVi: 'Thiết kế trang Source of Truth (/sot) chuyên biệt nhúng thẳng trong ứng dụng, gọi trực tiếp các component thật kèm bộ thanh tra token màu sắc, typography và khoảng cách; đồng thời tích hợp bài kiểm tra so khớp ảnh tự động bằng Playwright Pixelmatch trên pipeline CI.',
      engineeringWin: 'Zero visual regressions across all viewport breakpoints and a single source of truth component showcase accessible to designers and university stakeholders.',
      engineeringWinVi: 'Đạt tỉ lệ 0% sai lệch giao diện trên mọi kích thước màn hình và bàn giao một thư viện thành phần chuẩn hóa độc nhất giúp đội ngũ thiết kế lẫn ban giám hiệu trường dễ dàng đối chiếu trực quan.'
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
    summaryVi: 'Hệ thống Trục học liệu số quốc gia thuộc Nhà xuất bản Giáo dục Việt Nam do VTC phát triển, bao gồm cổng quản trị CMS kiểm duyệt học liệu và Cổng giáo viên kết nối trực tiếp với microservice AI của VTC để quét OCR và tự động chấm bài thi.',
    highlights: [
      'Built admin dashboard interfaces and content moderation screens using Laravel Blade templates and SCSS.',
      'Integrated server-side DataTables with search, multi-filter, and bulk actions for managing tens of thousands of resources.',
      'Connected Teacher Portal (webgiaovien) with VTC AI backend microservices for automated OCR text extraction and AI quiz/essay grading (VtcAiService).',
      'Engineered structured hierarchical curriculum trees using nested sets for nationwide textbook and question set taxonomies.'
    ],
    highlightsVi: [
      'Xây dựng hệ thống giao diện trang quản trị CMS kiểm duyệt và phân loại nội dung học liệu số sử dụng Laravel Blade và SCSS tối ưu trải nghiệm người dùng.',
      'Tích hợp bảng dữ liệu server-side DataTables với các bộ lọc thông minh, tìm kiếm phân trang theo chỉ mục và thao tác xử lý hàng loạt trên kho học liệu hàng chục ngàn tài nguyên.',
      'Đấu nối Cổng Giáo Viên (webgiaovien) với cụm microservice AI của VTC (VtcAiService), hỗ trợ trích xuất văn bản qua nhận dạng quang học OCR và tự động chấm bài kiểm tra trắc nghiệm lẫn tự luận cho giáo viên.',
      'Thiết kế và cấu trúc hóa cây danh mục chương trình học theo mô hình nested sets, đáp ứng nhu cầu phân cấp chặt chẽ cho toàn bộ bộ sách giáo khoa và ngân hàng câu hỏi trên toàn quốc.'
    ],
    architectureDetails: {
      problem: 'Handling nationwide curriculum resources while orchestrating multi-part asynchronous AI exam scoring (OCR document scanning + automated grading) without blocking web workers or timing out teacher sessions.',
      problemVi: 'Cần quản lý khối lượng học liệu khổng lồ trên phạm vi toàn quốc đồng thời phải điều phối luồng chấm thi tự động bằng AI qua nhiều bước phức tạp (tải bài thi, quét OCR nhận dạng chữ viết tay và gửi mô hình AI chấm điểm) mà không làm gián đoạn phiên làm việc hay gây treo kết nối của giáo viên.',
      solution: 'Integrated server-side DataTables with query-indexed pagination, built dedicated teacher portal assessment modules, and connected asynchronous multipart payloads to VTC AI grading endpoints with timeout resilience.',
      solutionVi: 'Tối ưu hóa DataTables phía server với phân trang dựa trên index dữ liệu, tách biệt module khảo thí trên Cổng giáo viên và chuyển giao payload multipart bất đồng bộ sang API AI của VTC với cơ chế chịu lỗi, tự động kiểm tra trạng thái tiến trình.',
      engineeringWin: 'Sub-second response times across 700k+ learning assets and automated AI grading workflows serving thousands of teachers on the webgiaovien portal.',
      engineeringWinVi: 'Đạt tốc độ truy vấn phản hồi dưới 1 giây trên kho dữ liệu hơn 700.000 học liệu số và vận hành luồng chấm thi AI tự động phục vụ đắc lực cho hàng ngàn giáo viên trên Cổng webgiaovien.'
    }
  }
];
