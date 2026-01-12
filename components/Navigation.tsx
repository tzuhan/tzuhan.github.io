'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

const localeEmojis: Record<string, string> = {
  en: '🇺🇸',
  zh: '🇹🇼',
  ja: '🇯🇵',
};

export default function Navigation() {
  const t = useTranslations('nav');
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['about', 'experience', 'education', 'skills', 'interests', 'certifications'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 lg:top-0 lg:left-0 lg:bottom-0 lg:w-[17rem] bg-primary z-50 w-full">
      <div className="flex lg:flex-col items-center lg:items-start lg:h-full px-4 lg:px-0">
        <a
          href="#page-top"
          className="block lg:hidden text-white text-xl font-bold py-4"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Tzuhan Hsu
        </a>

        <button
          className="ml-auto lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 16h16" />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:block w-full lg:w-auto absolute lg:relative top-full left-0 lg:top-auto lg:left-auto bg-primary lg:bg-transparent lg:flex lg:flex-col lg:flex-1 lg:justify-center`}
        >
          <ul className="flex flex-col p-4 lg:p-0 space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className="block text-white hover:text-gray-300 transition-colors py-2 px-4 lg:px-6 text-sm lg:text-base"
                >
                  {t(item as any)}
                </a>
              </li>
            ))}
            <li className="flex gap-3 py-2 px-4 lg:px-6">
              {['en', 'zh', 'ja'].map((locale) => (
                <a
                  key={locale}
                  href={`/${locale}`}
                  className={`text-2xl hover:scale-110 transition-transform ${
                    currentLocale === locale ? 'opacity-100' : 'opacity-60'
                  }`}
                >
                  {localeEmojis[locale]}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
