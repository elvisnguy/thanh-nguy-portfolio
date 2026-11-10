import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { Language } from '../../hooks/useLanguage';
import { TRANSLATIONS } from '../../data/translations';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const t = TRANSLATIONS[lang].footer;

  return (
    <footer id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-neutral-200 dark:border-[#222222]">
      <div className="p-6 sm:p-10 md:p-14 rounded-3xl bg-white dark:bg-[#121212]/95 backdrop-blur-xl border border-neutral-200/90 dark:border-white/10 text-center max-w-2xl mx-auto shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-2xl relative overflow-hidden">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-2 sm:mb-3">
          {lang === 'vi' ? 'Liên Hệ & Kết Nối' : 'Get in Touch'}
        </h2>
        <p className="text-neutral-600 dark:text-[#a3a3a3] text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto font-light">
          {lang === 'vi' 
            ? 'Sẵn sàng thảo luận về các vị trí Frontend Engineer & Full-stack. Liên hệ qua email, số điện thoại hoặc LinkedIn.' 
            : 'Available for Frontend Engineer & Full-stack roles. Reach out via email, phone, or LinkedIn.'}
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-2.5 sm:gap-3">
          <a
            href="https://www.linkedin.com/in/itsthanhnguy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0077b5] hover:bg-[#006396] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#0077b5]/30 ios-press"
          >
            <FaLinkedinIn className="w-3.5 h-3.5 text-white" role="presentation" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:vanthanhnguy2907@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-900 hover:bg-black text-white dark:bg-white dark:text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all ios-press shadow-md"
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span className="truncate">vanthanhnguy2907@gmail.com</span>
          </a>

          <a
            href="tel:0702388772"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-[#1a1a1a] hover:bg-neutral-100 dark:hover:bg-[#262626] border border-neutral-300 dark:border-[#333333] hover:border-neutral-500 text-neutral-900 dark:text-white font-bold text-xs uppercase tracking-wider transition-all ios-press"
          >
            <Phone className="w-4 h-4 text-neutral-600 dark:text-[#a3a3a3] shrink-0" />
            <span>(+84) 702 388 772</span>
          </a>
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center items-center gap-3 sm:gap-4 text-xs text-neutral-600 dark:text-[#a3a3a3] font-mono">
          <span>{lang === 'vi' ? 'TP. Hồ Chí Minh' : 'Ho Chi Minh City'}</span>
          <span>&bull;</span>
          <span>Remote / Hybrid</span>
        </div>
      </div>

      <div className="mt-10 sm:mt-14 text-center text-xs text-neutral-600 dark:text-[#a3a3a3] tracking-wider uppercase font-mono">
        &copy; {new Date().getFullYear()} {t.copyright}
      </div>
    </footer>
  );
}
