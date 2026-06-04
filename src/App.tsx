/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Terminal, 
  Sparkles, 
  MonitorPlay, 
  BookOpen, 
  Flame, 
  Code,
  ShieldCheck,
  Award,
  Globe2,
  Workflow
} from 'lucide-react';

/* Custom components import */
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import AboutVisual from './components/AboutVisual';
import SkillsGrid from './components/SkillsGrid';
import ProjectCards from './components/ProjectCards';
import Timeline from './components/Timeline';
import ContactForm from './components/ContactForm';
import CounterItem from './components/CounterItem';

/* Static data imports */
import { PERSONAL_INFO, COUNTER_STATS } from './data';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showToTop, setShowToTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  /* Taglines for high-performance typewriter loops */
  const taglines = [
    "Étudiant en 3ème année de Licence Informatique",
    "Expert en conception de bases de données MERISE / UML",
    "Développeur Full-Stack Java • Python • Laravel • React",
    "Créateur de SGBD Sockets TCP & modules ERP complexes"
  ];
  
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // 1. Initial Page Load and Theme Synchronization
  useEffect(() => {
    setIsLoaded(true);
    
    // Sync React theme state with document body class for seamless styles
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  // 2. Scroll Detection for Back-to-Top Button Visibility
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 450) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // 3. Dynamic Typewriter effect simulation
  useEffect(() => {
    const currentFullStr = taglines[taglineIdx];
    let speed = isDeleting ? 30 : 75; // Slower typing, faster erasing

    if (!isDeleting && typedText === currentFullStr) {
      // Pause on full word typed
      speed = 2200;
      setIsDeleting(true);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setTaglineIdx((prev) => (prev + 1) % taglines.length);
      speed = 400; // Breath before typing next word
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting 
          ? currentFullStr.substring(0, typedText.length - 1)
          : currentFullStr.substring(0, typedText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, taglineIdx]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="portfolio-app-root" className={`min-h-screen relative overflow-hidden transition-colors duration-500`}>
      
      {/* High-End Custom Cursor Trail */}
      <CustomCursor />

      {/* Primary Navigation bar */}
      <Navbar currentTheme={theme} toggleTheme={toggleTheme} />

      {/* Main content body flow rendering */}
      <main className="relative z-10">
        
        {/* ==================== 1. HERO SECTION ==================== */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:py-24 overflow-hidden border-b border-brand-primary/10"
        >
          {/* Real-time HTML5 Canvas particle star system */}
          <ParticleBackground theme={theme} />

          {/* Transparent bottom glow overlay */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050A1A] to-transparent pointer-events-none opacity-80" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center space-y-8">
            
            {/* Introductory Pill */}
            <div
              id="hero-badge"
              className={`inline-flex items-center gap-1.5 px-4 fly-badge py-1.5 rounded-full bg-brand-primary/15 border border-brand-cyan/20 backdrop-blur-sm shadow-[0_0_15px_rgba(1,47,233,0.15)] transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider text-brand-cyan">
                Concepteur Développeur Académique
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping ml-1" />
            </div>

            {/* Main Primary Name Title Display */}
            <div className="space-y-3">
              <h1
                id="hero-name"
                className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white transition-all duration-1000 delay-100 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ lineHeight: '1.1' }}
              >
                Fehizoro Loïc Dylan
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-cyan to-brand-gold font-black mt-2">
                  Rakotoarivony
                </span>
              </h1>
              
              {/* Animated Typed Tagline container */}
              <div
                id="hero-tagline-container"
                className={`h-12 flex items-center justify-center text-sm md:text-base font-mono font-bold text-brand-blue tracking-wide transition-all duration-1000 delay-200 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="text-center">
                  {typedText}
                  <span className="text-brand-gold font-black typewriter-cursor">|</span>
                </span>
              </div>
            </div>

            {/* Core Action CTAs Buttons */}
            <div
              id="hero-actions"
              className={`flex flex-wrap items-center justify-center gap-4 pt-4 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={() => handleScrollToSection('projects')}
                className="px-8 py-3.5 bg-brand-primary hover:bg-brand-primary/80 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 group border border-brand-cyan/20 hover:glow-cyan shadow-lg transition-all cursor-pointer"
              >
                Voir mes projets
                <span className="inline-block transform group-hover:translate-x-1.5 transition-transform">➔</span>
              </button>

              <button
                onClick={() => handleScrollToSection('contact')}
                className="px-8 py-3.5 bg-transparent hover:bg-brand-primary/10 text-brand-cyan hover:text-white border border-brand-cyan/30 hover:border-brand-cyan font-mono text-xs font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer"
              >
                Me contacter
              </button>
            </div>

            {/* Scroll Indicator Icon */}
            <button
              onClick={() => handleScrollToSection('about')}
              className={`absolute bottom-6 left-1/2 -translate-x-1/2 p-2 rounded-full border border-brand-cyan/15 hover:border-brand-cyan/50 text-brand-cyan hover:text-white hover:bg-brand-primary/10 transition-all duration-1000 delay-500 cursor-pointer animate-bounce ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              aria-label="Faire défiler vers le bas"
            >
              <div className="w-5 h-5 flex flex-col items-center justify-center text-xs font-bold">
                ↓
              </div>
            </button>

          </div>
        </section>

        {/* ==================== 2. STATS / COUNTER BENTO BAR ==================== */}
        <section id="stats-panel" className="relative py-12 bg-[#050A1A]/90 border-b border-brand-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {COUNTER_STATS.map((stat) => (
                <CounterItem key={stat.id} stat={stat} />
              ))}
            </div>
          </div>
        </section>


        {/* ==================== 3. À PROPOS (ABOUT) & SKILLS ==================== */}
        <section id="about" className="py-24 relative bg-[#050A1A] flow-grid">
          <div className="absolute inset-0 flow-radial pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
            
            {/* Split layout: Biography & Animated System Diagram Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Biography texts */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="space-y-2">
                  <span className="block font-mono text-xs uppercase tracking-widest text-[#70D6F5] font-bold">
                    • Qui suis-je ?
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
                    Un profil orienté <span className="text-brand-cyan font-black">Architecture & Rigueur</span>
                  </h2>
                </div>

                <p className="text-brand-cream/80 text-sm leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>

                <div className="p-4 rounded-xl bg-brand-primary/10 border border-brand-cyan/20 space-y-2">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand-gold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Objectif professionnel phare
                  </h4>
                  <p className="text-xs text-brand-cream/70 leading-relaxed">
                    {PERSONAL_INFO.targetStage}
                  </p>
                </div>

                {/* Micro-badges de compétences transverses */}
                <div className="pt-2">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-cream/40 mb-3 font-semibold">
                    Compétences transversales clés
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Analyse des besoins métiers",
                      "Compréhension MERISE & UML",
                      "Normalisation de bases de données (3NF)",
                      "Modulaires d'achats / ventes ERP",
                      "Résolution algoritmatique",
                      "Assurance Qualité & Tests",
                      "Rigueur et organisation"
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="px-2.5 py-1 text-[10px] font-mono tracking-wide uppercase bg-[#020612]/50 border border-brand-primary/10 rounded-md text-brand-blue"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Abstract Intercept Diagram Visualization avatar */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <AboutVisual />
              </div>

            </div>

            {/* Secondary Row: Skills Grid and dynamic Level Counters */}
            <div className="space-y-10 pt-10 border-t border-brand-primary/5">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="block font-mono text-xs uppercase tracking-widest text-brand-cyan font-bold">
                  Compétences académiques & de développement
                </span>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
                  Savoir-faire et Langages informatiques
                </h3>
                <p className="text-[11px] text-brand-cream/50">
                  Animations de barres de progression synchronisées sur l'entrée de la vue de l'utilisateur.
                </p>
              </div>

              <SkillsGrid />
            </div>

          </div>
        </section>


        {/* ==================== 4. TIMELINE / EXPÉRIENCES ==================== */}
        <section id="timeline" className="py-24 relative bg-[#02050e] border-t border-b border-brand-primary/10">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-16">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="block font-mono text-xs uppercase tracking-widest text-brand-gold font-bold">
                • Rétrospective
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
                Mon Parcours <span className="text-brand-gold font-black">Académique et Pro</span>
              </h2>
              <p className="text-brand-cream/70 text-xs">
                Découvrez ma progression, depuis mes études fondamentales universitaires jusqu'aux missions techniques réalisées en entreprise à Antananarivo.
              </p>
            </div>

            {/* Alternating Vertical Timeline nodes */}
            <Timeline />

          </div>
        </section>


        {/* ==================== 5. PROJECTS GRID ==================== */}
        <section id="projects" className="py-24 relative bg-[#050A1A]">
          <div className="absolute inset-0 flow-grid opacity-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="block font-mono text-xs uppercase tracking-widest text-brand-cyan font-bold">
                • Portfolio interactif
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
                Projets & <span className="text-brand-cyan font-black">Réalisations Clés</span>
              </h2>
              <p className="text-brand-cream/70 text-xs leading-relaxed">
                Cliquez sur n'importe quel projet d'ingénierie pour inspecter ses caractéristiques détaillées, ses mesures d'optimisation et ses schémas relationnels de base de données.
              </p>
            </div>

            {/* Filtered Grid and premium detail popups inside */}
            <ProjectCards />

          </div>
        </section>


        {/* ==================== 6. CONTACT SECTION ==================== */}
        <section id="contact" className="py-24 relative bg-[#02050e] border-t border-brand-primary/10">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="block font-mono text-xs uppercase tracking-widest text-brand-gold font-bold">
                • Entrer en contact
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
                Prêt à lancer un <span className="text-brand-gold font-black">Projet ou un Stage</span> ?
              </h2>
              <p className="text-brand-cream/70 text-xs leading-relaxed">
                Remplissez le formulaire sécurisé ci-dessous ou contactez-moi directement via mes canaux e-mail et téléphoniques.
              </p>
            </div>

            {/* Form & Social channels card listings */}
            <ContactForm />

          </div>
        </section>

      </main>

      {/* ==================== 7. FOOTER SECTION ==================== */}
      <footer id="main-footer" className="bg-[#050a1a] border-t border-brand-primary/10 py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          {/* Logo replica */}
          <div className="inline-flex items-center gap-2">
            <span className="block font-display text-lg font-black tracking-tight text-white">
              Fehizoro Loïc Dylan
              <span className="text-brand-cyan"> RAKOTOARIVONY</span>
            </span>
          </div>

          <p className="text-[11px] font-mono text-brand-cream/40 max-w-md mx-auto leading-relaxed">
            Pour l'honneur et l'excellence, certifié conforme à Antananarivo. Réalisé avec React, Tailwind CSS et amour de la logique algorithmique.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono uppercase tracking-wider text-brand-cream/60 pt-2">
            <button onClick={() => handleScrollToSection('hero')} className="hover:text-brand-cyan">Accueil</button>
            <span className="text-brand-primary/30">•</span>
            <button onClick={() => handleScrollToSection('about')} className="hover:text-brand-cyan">À Propos</button>
            <span className="text-brand-primary/30">•</span>
            <button onClick={() => handleScrollToSection('timeline')} className="hover:text-brand-cyan">Parcours</button>
            <span className="text-brand-primary/30">•</span>
            <button onClick={() => handleScrollToSection('projects')} className="hover:text-brand-cyan">Projets</button>
            <span className="text-brand-primary/30">•</span>
            <button onClick={() => handleScrollToSection('contact')} className="hover:text-brand-gold">Contact</button>
          </div>

          {/* Core copyright */}
          <p className="text-[10px] text-brand-cream/30 pt-4 border-t border-brand-primary/5">
            © {new Date().getFullYear()} Fehizoro Loïc Dylan RAKOTOARIVONY — Tous droits réservés. Tous les modèles et architectures d'entreprise sont protégés par le droit d'auteur universitaire.
          </p>

        </div>
      </footer>

      {/* Static Floating Back to Top Orb button button */}
      <button
        id="back-to-top-button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-30 p-3 rounded-full bg-brand-primary border border-brand-cyan hover:border-brand-gold text-white hover:text-brand-gold hover:glow-gold transition-all duration-300 transform active:scale-90 cursor-pointer ${
          showToTop ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
        aria-label="Remonter en haut de la page"
      >
        <ArrowUp className="w-5 h-5 animate-pulse" />
      </button>

    </div>
  );
}
