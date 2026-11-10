export type Language = 'en' | 'vi';

export const TRANSLATIONS = {
  en: {
    nav: {
      overview: 'Overview',
      projects: 'Projects',
      stack: 'Stack',
      history: 'History'
    },
    hero: {
      statusPill: 'Frontend Engineer • 5 YOE • Vietnam • EU Remote',
      headlinePrefix: 'NGUY VAN THANH.',
      headlineSuffix: 'FRONTEND ARCHITECTURE.',
      bio: 'Architecting and scaling production web applications with Angular 19 Signals, Next.js, and enterprise design systems. 5 years of commercial delivery with direct European client collaboration.',
      metrics: [
        { val: '5 YOE', label: 'Commercial Experience' },
        { val: 'Angular 19', label: 'Signals & Standalone' },
        { val: 'EU Remote', label: 'Direct Client Alignment' },
        { val: 'STU Engineer', label: 'Information Technology' }
      ],
      connectLinkedIn: 'Connect on LinkedIn',
      exploreProjects: 'Explore Projects',
      viewResume: 'Resume (PDF)',
      emailCopied: 'Copied email to clipboard!',
      copyEmail: 'Copy Email'
    },
    projects: {
      label: 'Commercial Index',
      heading: 'Selected Works',
      subheading: 'High-impact enterprise web platforms and architecture solutions delivered across 5 years of commercial production experience.',
      filterAll: 'All Works',
      deepDivePrompt: 'Click card for deep-dive architecture breakdown',
      deepDiveBtn: 'Deep-Dive',
      viewShowcase: 'Live Showcase',
      viewCaseStudy: 'Case Study',
      modalBadge: 'Architecture Deep-Dive',
      executiveOverview: 'Executive Overview',
      coreChallenge: 'Core Technical Challenge',
      solutionPattern: 'Solution & Architecture Pattern',
      winImpact: 'Architectural Win & Commercial Impact',
      verifiedStack: 'Verified Production Tech Stack',
      dismissNote: 'ESC or click backdrop to close'
    },
    skills: {
      label: 'Technical Taxonomy',
      heading: 'Stack & Tooling',
      subheading: 'Production-tested technologies with deep focus on modern Angular reactivity, UI design systems, and resilient web architectures.'
    },
    experience: {
      label: 'Career History',
      heading: '5 Years of Delivery',
      academic: 'Academic Background',
      degree: "Engineer's Degree in Information Technology",
      university: 'Saigon Technology University (STU)',
      degreeDesc: 'Formal 4.5-year engineering program covering software engineering, algorithms, and system architecture.',
      globalComm: 'Global Communication',
      englishProficiency: 'English Working Proficiency',
      englishSub: 'TOEIC Equivalent ~700 • Daily International Remote Syncs',
      englishDesc: 'Experienced in asynchronous PR reviews, architecture alignment, and sprint meetings with European clients.'
    },
    footer: {
      copyright: 'Nguy Van Thanh. All rights reserved.',
      tagline: 'Built with React, TypeScript & TailwindCSS. Deployed on Vercel Edge Network.'
    },
    command: {
      placeholder: 'Type a command or search (e.g. Angular, Signals, Next.js, PDF)...',
      quickActions: 'Quick Actions',
      projectsHeader: 'Projects & Architecture',
      noProjects: 'No projects matching',
      footerTip: 'Use ESC to dismiss • Click to open'
    }
  },
  vi: {
    nav: {
      overview: 'Tổng quan',
      projects: 'Dự án',
      stack: 'Kỹ năng',
      history: 'Kinh nghiệm'
    },
    hero: {
      statusPill: 'Kỹ sư Frontend • 5 Năm KN • Việt Nam • EU Remote',
      headlinePrefix: 'NGỤY VẠN THÀNH.',
      headlineSuffix: 'KIẾN TRÚC FRONTEND.',
      bio: 'Chuyên thiết kế kiến trúc và mở rộng các ứng dụng web phức tạp với Angular 19 Signals, Next.js và hệ thống UI Design System quy chuẩn doanh nghiệp. 5 năm thực chiến, đồng hành trực tiếp cùng đối tác và khách hàng châu Âu.',
      metrics: [
        { val: '5 Năm KN', label: 'Kinh Nghiệm Thực Chiến' },
        { val: 'Angular 19', label: 'Signals & Standalone' },
        { val: 'EU Remote', label: 'Làm Việc Trực Tiếp EU' },
        { val: 'Kỹ sư STU', label: 'Công Nghệ Thông Tin' }
      ],
      connectLinkedIn: 'Kết nối LinkedIn',
      exploreProjects: 'Xem Dự Án',
      viewResume: 'Hồ sơ CV (PDF)',
      emailCopied: 'Đã sao chép email!',
      copyEmail: 'Sao chép Email'
    },
    projects: {
      label: 'Danh Mục Thực Chiến',
      heading: 'Dự Án Tiêu Biểu',
      subheading: 'Các nền tảng doanh nghiệp quy mô lớn và giải pháp kiến trúc được bàn giao qua 5 năm thực chiến.',
      filterAll: 'Tất cả dự án',
      deepDivePrompt: 'Bấm vào thẻ để xem phân tích kiến trúc chi tiết',
      deepDiveBtn: 'Chi tiết',
      viewShowcase: 'Xem Trực Tuyến',
      viewCaseStudy: 'Case Study',
      modalBadge: 'Phân Tích Kiến Trúc',
      executiveOverview: 'Tổng Quan Dự Án',
      coreChallenge: 'Thách Thức Kỹ Thuật Trọng Tâm',
      solutionPattern: 'Giải Pháp & Pattern Kiến Trúc',
      winImpact: 'Dấu Ấn Kỹ Thuật & Hiệu Quả Nghiệp Vụ',
      verifiedStack: 'Bộ Công Nghệ Production Đã Dùng',
      dismissNote: 'Nhấn ESC hoặc bấm ra ngoài để đóng'
    },
    skills: {
      label: 'Phân Loại Năng Lực',
      heading: 'Kỹ Năng & Công Cụ',
      subheading: 'Bộ công nghệ thực chiến với trọng tâm chuyên sâu vào Angular reactivity, Design System doanh nghiệp và kiến trúc web hiệu năng cao.'
    },
    experience: {
      label: 'Lộ Trình Nghề Nghiệp',
      heading: '5 Năm Thực Chiến',
      academic: 'Học Vấn & Bằng Cấp',
      degree: 'Bằng Kỹ Sư Công Nghệ Thông Tin',
      university: 'Đại học Công nghệ Sài Gòn (STU)',
      degreeDesc: 'Chương trình kỹ sư chính quy 4.5 năm chuyên sâu về kỹ thuật phần mềm, cấu trúc dữ liệu và kiến trúc hệ thống.',
      globalComm: 'Giao Tiếp Quốc Tế',
      englishProficiency: 'Tiếng Anh Làm Việc Chuyên Nghiệp',
      englishSub: 'Tương đương TOEIC ~700 • Họp Daily Sync Quốc Tế Hàng Ngày',
      englishDesc: 'Thành thạo review PR bất đồng bộ, trao đổi giải pháp kiến trúc và họp sprint trực tiếp với đối tác khách hàng châu Âu.'
    },
    footer: {
      copyright: 'Ngụy Vạn Thành. Đã đăng ký bản quyền.',
      tagline: 'Phát triển với React, TypeScript & TailwindCSS. Triển khai trên Mạng lưới Edge Vercel.'
    },
    command: {
      placeholder: 'Gõ lệnh hoặc tìm kiếm (ví dụ: Angular, Signals, Next.js, PDF)...',
      quickActions: 'Tác vụ nhanh',
      projectsHeader: 'Dự Án & Kiến Trúc',
      noProjects: 'Không tìm thấy kết quả phù hợp với',
      footerTip: 'Nhấn ESC để đóng • Bấm vào để chọn'
    }
  }
};
