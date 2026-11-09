import React from 'react';
import { Briefcase } from 'lucide-react';

export function ExperienceSection() {
  return (
    <>
      {/* Experience History Timeline */}
      <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-neutral-200 dark:border-[#1f1f1f]">
        <div className="mb-10 sm:mb-14">
          <div className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-neutral-500 dark:text-[#737373] mb-1.5 sm:mb-2 flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5" /> Career History
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-[-0.03em]">
            5 Years of Delivery
          </h2>
        </div>

        <div className="relative pl-5 sm:pl-8 border-l border-neutral-300 dark:border-[#262626] space-y-8 sm:space-y-12">
          {/* EZTEK */}
          <div className="relative">
            <span className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-neutral-900 dark:bg-white border-4 border-white dark:border-[#0d0d0d]" />
            <div className="p-5 sm:p-7 rounded-2xl bg-white/80 dark:bg-[#121212]/90 backdrop-blur-md border border-neutral-200 dark:border-[#222222] hover:border-neutral-400 dark:hover:border-white/30 transition-all duration-300 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
                  EZTEK &bull; Frontend Engineer
                </h3>
                <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-[#1c1c1c] border border-neutral-200 dark:border-[#2c2c2c] text-neutral-600 dark:text-[#a3a3a3] text-[11px] sm:text-xs font-mono w-fit">
                  Jan 2021 - Dec 2026 (5 Years)
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-[#737373] font-medium tracking-wide uppercase mb-3">
                Ho Chi Minh City, Vietnam &bull; Software Technology Consultancy
              </p>
              <p className="text-neutral-600 dark:text-[#a3a3a3] text-xs sm:text-sm leading-relaxed mb-4 font-light">
                Delivered enterprise web applications across client engagements. Led frontend modernization to Angular 19 Signals, built shared component libraries documented in Storybook, and maintained production Next.js apps.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-neutral-600 dark:text-[#888888]">
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-neutral-100 dark:bg-[#171717] border border-neutral-200 dark:border-[#282828] text-neutral-900 dark:text-neutral-200 font-medium">Accountia & UI Library (Oct 2023 - Sep 2026 &bull; 3 yrs)</span>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-neutral-100 dark:bg-[#171717] border border-neutral-200 dark:border-[#282828] text-neutral-900 dark:text-neutral-200 font-medium">Tech2B Platform (Jan 2021 - Sep 2023 &bull; 2 yrs 9 mos)</span>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-neutral-100 dark:bg-[#171717] border border-neutral-200 dark:border-[#282828] text-neutral-500">Layer Marketplace (Jun 2023 - Sep 2023 &bull; 4 mos)</span>
              </div>
            </div>
          </div>

          {/* Independent Contracts */}
          <div className="relative">
            <span className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-neutral-400 dark:bg-[#737373] border-4 border-white dark:border-[#0d0d0d]" />
            <div className="p-5 sm:p-7 rounded-2xl bg-white/80 dark:bg-[#121212]/90 backdrop-blur-md border border-neutral-200 dark:border-[#222222] hover:border-neutral-400 dark:hover:border-white/30 transition-all duration-300 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
                  National & Higher Education Contracts
                </h3>
                <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-[#1c1c1c] border border-neutral-200 dark:border-[#2c2c2c] text-neutral-600 dark:text-[#a3a3a3] text-[11px] sm:text-xs font-mono w-fit">
                  2025 - 2026
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-[#737373] font-medium tracking-wide uppercase mb-3">
                National Scale & International University
              </p>
              <p className="text-neutral-600 dark:text-[#a3a3a3] text-xs sm:text-sm leading-relaxed font-light">
                Developed admin CMS interfaces for Vietnam's <strong>National Educational Resource Hub (Trục Học Liệu Quốc Gia)</strong>, and turned Figma designs into pixel-perfect pages for <strong>British University Vietnam (BUV)</strong>.
              </p>
            </div>
          </div>

          {/* HighscoresAI */}
          <div className="relative">
            <span className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-[#0d0d0d] animate-pulse" />
            <div className="p-5 sm:p-7 rounded-2xl bg-white/80 dark:bg-[#121212]/90 backdrop-blur-md border border-neutral-200 dark:border-[#222222] hover:border-neutral-400 dark:hover:border-white/30 transition-all duration-300 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
                  HighscoresAI &bull; Test Prep Platform
                </h3>
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-[#1c1c1c] border border-emerald-200 dark:border-[#2c2c2c] text-emerald-600 dark:text-emerald-400 text-[11px] sm:text-xs font-mono w-fit">
                  Current
                </span>
              </div>
              <p className="text-neutral-600 dark:text-[#a3a3a3] text-xs sm:text-sm leading-relaxed font-light">
                Building in-browser IDE (CodeMirror 6), adaptive SAT/ACT mock exams conforming to CollegeBoard BlueBook specs, and predictive score analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Language */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-neutral-200 dark:border-[#1f1f1f]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <div className="p-5 sm:p-7 rounded-2xl bg-white/80 dark:bg-[#121212]/90 backdrop-blur-md border border-neutral-200 dark:border-[#222222] hover:border-neutral-400 dark:hover:border-white/30 transition-all duration-300 ios-press-sm shadow-sm">
            <div className="text-[10px] font-mono tracking-widest text-neutral-500 dark:text-[#737373] uppercase mb-1.5">
              Academic Background
            </div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">Engineer's Degree in Information Technology</h3>
            <p className="text-neutral-600 dark:text-[#888888] text-xs font-medium mt-1">Saigon Technology University (STU)</p>
            <p className="text-neutral-500 dark:text-[#666666] text-xs mt-2.5 leading-relaxed">
              Formal 4.5-year engineering program covering software engineering, algorithms, and system architecture.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl bg-white/80 dark:bg-[#121212]/90 backdrop-blur-md border border-neutral-200 dark:border-[#222222] hover:border-neutral-400 dark:hover:border-white/30 transition-all duration-300 ios-press-sm shadow-sm">
            <div className="text-[10px] font-mono tracking-widest text-neutral-500 dark:text-[#737373] uppercase mb-1.5">
              Global Communication
            </div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">English Working Proficiency</h3>
            <p className="text-neutral-600 dark:text-[#888888] text-xs font-medium mt-1">TOEIC Equivalent ~700 &bull; Daily International Remote Syncs</p>
            <p className="text-neutral-500 dark:text-[#666666] text-xs mt-2.5 leading-relaxed">
              Experienced in asynchronous PR reviews, architecture alignment, and sprint meetings with European clients.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
