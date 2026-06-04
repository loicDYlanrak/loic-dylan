/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Database, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  currentTheme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ currentTheme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: 'Accueil', id: 'hero' },
    { label: 'À Propos', id: 'about' },
    { label: 'Mon CV / Parcours', id: 'timeline' },
    { label: 'Projets', id: 'projects' },
    { label: 'Me Contacter', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Frosted glass trigger
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Reading progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // 3. Highlight current active section based on scroll position
      const scrollPosition = window.scrollY + 180;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050A1A]/80 md:bg-[#012FE9]/10 backdrop-blur-md border-b border-[#80E5FA]/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-5'
      }`}
    >
      {/* 1. Global Reading Progress Indicator */}
      <div
        id="reading-progress-bar"
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-brand-primary via-brand-cyan to-brand-gold transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Personal Tag */}
          <button
            id="brand-logo"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center border border-brand-cyan/20 group-hover:border-brand-cyan group-hover:glow-cyan transition-all duration-300">
              <Database className="w-5 h-5 text-brand-cyan group-hover:text-brand-gold transition-colors" />
            </div>
            <div>
              <span className="block font-display text-base font-bold tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                {PERSONAL_INFO.fullName.split(' ')[0]} {PERSONAL_INFO.fullName.split(' ')[1]}
              </span>
              <span className="block text-[10px] font-mono font-medium text-brand-cyan tracking-wider uppercase">
                Concepteur SGBD & ERP
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-4 py-2 text-xs font-medium font-mono uppercase tracking-widest rounded-md transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-brand-gold bg-brand-primary/10 border-b-2 border-brand-gold'
                    : 'text-brand-cream/70 hover:text-brand-cyan hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action buttons (Theme and CV Download) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle option */}
            <button
              id="theme-toggle-desktop"
              onClick={toggleTheme}
              aria-label="Toggle visual theme"
              className="p-2.5 rounded-lg bg-brand-primary/10 border border-brand-cyan/2). border-brand-cyan/10 hover:border-brand-cyan text-brand-cyan hover:glow-cyan hover:text-brand-gold transition-all cursor-pointer"
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Micro Call to Action */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-4 py-2 border border-brand-cyan text-brand-cyan font-mono text-[11px] font-medium tracking-wider uppercase rounded hover:bg-brand-primary/10 hover:glow-cyan transition-all cursor-pointer"
            >
              Recruter
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="theme-toggle-mobile"
              onClick={toggleTheme}
              aria-label="Toggle theme mobile"
              className="p-2.5 rounded-lg bg-brand-primary/10 border border-[#80E5FA]/20 text-brand-cyan mr-2"
            >
              {currentTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brand-cream hover:text-brand-cyan transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-gold" />
              ) : (
                <Menu className="w-6 h-6 text-brand-cyan" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Glassmorphism Navigation Menu Drawer */}
      <div
        id="mobile-menu-drawer"
        className={`md:hidden fixed inset-x-0 top-[65px] bg-[#050A1A]/95 border-b border-brand-cyan/10 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`block w-full text-left px-5 py-3 rounded-lg text-xs font-mono font-medium uppercase tracking-widest transition-all ${
                activeSection === link.id
                  ? 'text-brand-gold bg-brand-primary/20 border-l-4 border-brand-gold pl-4'
                  : 'text-brand-cream/80 hover:bg-white/5 pl-5'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-brand-cyan/5 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleLinkClick('contact');
              }}
              className="w-full py-3 bg-brand-primary text-white hover:bg-brand-primary/80 font-mono text-center text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors"
            >
              Me Contacter
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
