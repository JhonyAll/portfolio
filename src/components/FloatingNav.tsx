'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiHomeAlt2, BiUser, BiCode, BiFolder, BiEnvelope } from 'react-icons/bi';
import { useLanguage } from '../contexts/LanguageContext';

interface NavItem {
  key: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { key: 'home', icon: <BiHomeAlt2 className="w-5 h-5" />, href: '#home' },
  { key: 'about', icon: <BiUser className="w-5 h-5" />, href: '#about' },
  { key: 'skills', icon: <BiCode className="w-5 h-5" />, href: '#skills' },
  { key: 'projects', icon: <BiFolder className="w-5 h-5" />, href: '#projects' },
  { key: 'contact', icon: <BiEnvelope className="w-5 h-5" />, href: '#contact' },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  const offset = 100; // ajuste este valor conforme necessário
  const elementPosition = element?.getBoundingClientRect().top ?? 0;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

export const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Mostra a navbar depois de 100px de scroll
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Detecta qual seção está visível
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`flex flex-col items-center gap-1 text-sm transition-colors duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    {item.icon}
                    <span className="text-xs font-medium">
                      {t(`navigation.${item.key}`)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 