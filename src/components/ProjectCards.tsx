/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Code2, 
  Database, 
  X, 
  ShieldAlert, 
  CheckCircle2, 
  Cpu, 
  Network 
} from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function ProjectCards() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'Tous', 
    'Bases de Données (SQL/NoSQL)', 
    "Applications d'Entreprise", 
    'Web & SIG', 
    'Algorithmes & Jeux'
  ];

  const filteredProjects = selectedCategory === 'Tous'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.categories.includes(selectedCategory));

  // High performance hardware accelerated 3D mouse hover tilt logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;
    
    const rotateX = ((height / 2 - y) / (height / 2)) * 8; // Max 8 deg tilt
    const rotateY = ((x - width / 2) / (width / 2)) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.boxShadow = `0px 20px 40px rgba(1, 47, 233, 0.15), 0px 0px 20px rgba(128, 229, 250, 0.2)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.boxShadow = 'none';
  };

  return (
    <div id="projects-component-root" className="space-y-8">
      
      {/* Category filters Navigation Header */}
      <div 
        id="project-filters" 
        className="flex flex-wrap items-center justify-center gap-2 pb-4 scrollbar-none"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 font-mono text-xs tracking-wider uppercase rounded-full transition-all duration-300 border cursor-pointer ${
              selectedCategory === cat
                ? 'bg-brand-primary text-white border-brand-primary glow-cyan shadow-md'
                : 'bg-[#020612]/40 text-brand-cream/70 border-brand-primary/15 hover:border-brand-cyan hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <motion.div 
        layout
        id="projects-grid" 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              key={project.id}
              id={`project-card-${project.id}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActiveModalProject(project)}
              className="group relative bg-[#020612]/60 rounded-xl border border-brand-primary/10 hover:border-brand-cyan/40 p-6 flex flex-col justify-between transition-[border,box-shadow,background-color] duration-500 cursor-pointer backdrop-blur-md overflow-hidden active:scale-95"
            >
            {/* Upper Corner Premium Ribbon indicator */}
            {project.isPremium && (
              <div 
                className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none"
                title="Projet d'ingénierie phare"
              >
                <div className="absolute top-4 -right-10 w-32 rotate-45 bg-gradient-to-r from-brand-gold to-yellow-500 text-[#050A1A] text-[9px] font-mono font-bold tracking-widest text-center py-1 uppercase shadow-sm">
                  ★ Prestige
                </div>
              </div>
            )}

            <div>
              {/* Categories metadata */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.categories.slice(0, 1).map((cat) => (
                  <span
                    key={cat}
                    className="px-2.5 py-0.5 bg-brand-primary/10 text-brand-cyan border border-brand-cyan/15 rounded-full text-[10px] font-mono tracking-wider"
                  >
                    {cat}
                  </span>
                ))}
                <span className="ml-auto text-[10px] font-mono text-brand-cream/40 font-bold">
                  {project.year}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-lg font-bold text-white tracking-tight mb-2 group-hover:text-brand-cyan transition-colors">
                {project.title}
              </h3>
              
              <p className="text-brand-cream/70 text-xs leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Tags and Action footer links */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-brand-primary/5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-[#050A1A] text-brand-blue border border-brand-primary/10 rounded text-[9px] font-mono uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-0.5 bg-[#050A1A] text-brand-gold text-[9px] font-mono uppercase rounded">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-brand-cyan group-hover:text-brand-gold transition-colors pt-1">
                <span>Détails & Architecture</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Extreme High-End Modal Detail Panel (Full-screen Overlay) */}
      <AnimatePresence>
      {activeModalProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          id="project-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050A1A]/95 overflow-hidden backdrop-blur-lg"
          onClick={() => setActiveModalProject(null)}
        >
          {/* Main Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#020612] border-2 border-brand-cyan/20 glow-cyan rounded-2xl overflow-y-auto max-h-[90vh] md:max-h-[85vh] p-6 md:p-8 shadow-2xl "
            onClick={(e: React.MouseEvent) => e.stopPropagation()} // Stop bubble up dismiss
          >
            {/* Decorative Grid Mesh */}
            <div className="absolute inset-0 flow-grid opacity-10 pointer-events-none" />

            {/* Close Orb Button */}
            <button
              id="close-modal-button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-brand-primary/10 border border-brand-cyan/10 text-brand-cyan hover:text-brand-gold hover:border-brand-gold hover:glow-gold transition-all"
              aria-label="Fermer les détails"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Grid Header Info */}
            <div className="flex flex-col md:flex-row gap-6 items-start justify-between pb-6 border-b border-brand-primary/10">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.isPremium && (
                    <span className="px-3 py-0.5 text-[9px] font-mono uppercase font-bold tracking-widest bg-brand-gold/15 text-brand-gold border border-brand-gold/20 rounded">
                      ★ Projet Prestigieux Phare
                    </span>
                  )}
                  {activeModalProject.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-0.5 text-[9px] font-mono uppercase tracking-wider bg-brand-primary/10 text-brand-cyan border border-brand-cyan/15 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight uppercase">
                  {activeModalProject.title}
                </h2>
                
                <p className="text-brand-blue font-mono text-xs">
                  Année de réalisation : <strong className="text-brand-gold uppercase">{activeModalProject.year}</strong>
                </p>
              </div>

              {/* Metric indicators */}
              {activeModalProject.metrics && (
                <div className="flex gap-4 p-3 bg-brand-primary/10 border border-brand-cyan/20 rounded-xl">
                  {activeModalProject.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <span className="block text-[9px] font-mono uppercase tracking-wider text-brand-cream/60">
                        {metric.label}
                      </span>
                      <span className="block text-sm font-bold font-display text-brand-cyan">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Body contents */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              
              {/* Left description, stats & features */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#70D6F5] mb-2">
                    Résumé du projet
                  </h4>
                  <p className="text-brand-cream/90 text-[13px] leading-relaxed">
                    {activeModalProject.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#70D6F5] mb-3 flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan mr-2" />
                    Caractéristiques clés & Modules
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-brand-cream/80 bg-brand-primary/5 p-2 rounded-lg border border-brand-primary/5 hover:border-brand-cyan/10 transition-colors">
                        <span className="currentColor mr-2 font-bold font-mono text-brand-cyan">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right technical side: design-mock architecture schema, stack tags */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Simulated Interactive DB ER Diagram / Flow representation to fit Fehizoro's profile */}
                <div className="bg-[#050A1A]/80 border border-brand-cyan/15 rounded-xl p-4 space-y-3 relative overflow-hidden focus:outline-none">
                  <div className="absolute top-1 right-2 uppercase font-mono text-[8px] text-brand-cyan/35">
                    Modèle conceptuel
                  </div>
                  
                  <h5 className="font-mono text-[10px] font-bold text-brand-gold uppercase tracking-wider flex items-center gap-1.5 border-b border-brand-primary/5 pb-2">
                    <Network className="w-3.5 h-3.5 text-brand-cyan" />
                    Architecture du système d'information
                  </h5>

                  {/* Schema visual layout */}
                  <div className="py-2 space-y-2.5 text-left font-mono">
                    {activeModalProject.id === 'erp-enterprise' || activeModalProject.id === 'library-mgr' ? (
                      <>
                        <div className="px-2.5 py-1.5 bg-brand-primary/10 border border-brand-cyan/20 rounded text-[9.5px] text-white flex items-center justify-between shadow-sm">
                          <span>👤 ADHÉRENTS / USERS</span>
                          <span className="text-[8px] text-brand-cyan">[PK] id_user (INT)</span>
                        </div>
                        <div className="flex items-center justify-center py-0.5"><div className="w-0.5 h-3 bg-brand-cyan/40 border-dashed" /></div>
                        <div className="mx-4 px-2.5 py-1 bg-brand-gold/15 border border-brand-gold/20 rounded text-[9.5px] text-brand-gold flex items-center justify-between shadow-sm">
                          <span>🗂️ TRANSACTIONS / PRÊTS</span>
                          <span className="text-[8px] text-brand-cyan">[FK] id_user ➔ [1:N]</span>
                        </div>
                        <div className="flex items-center justify-center py-0.5"><div className="w-0.5 h-3 bg-brand-cyan/40 border-dashed" /></div>
                        <div className="px-2.5 py-1.5 bg-brand-primary/10 border border-brand-cyan/20 rounded text-[9.5px] text-white flex items-center justify-between shadow-sm">
                          <span>📚 CATALOGUE / STOCKS</span>
                          <span className="text-[8px] text-[#70D6F5]">Normalisation 3NF OK</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="px-2.5 py-1.5 bg-brand-primary/10 border border-brand-cyan/20 rounded text-[9.5px] text-white flex items-center justify-between shadow-sm">
                          <span>🖥️ CLIENT GRAPHISME / VIEW</span>
                          <span className="text-[8px] text-brand-cyan">TCP Socket Stream</span>
                        </div>
                        <div className="flex items-center justify-center py-0.5"><div className="w-0.5 h-3 bg-brand-cyan/40 border-dashed" /></div>
                        <div className="mx-4 px-2.5 py-1 bg-brand-gold/15 border border-brand-gold/20 rounded text-[9.5px] text-brand-gold flex items-center justify-between shadow-sm">
                          <span>📡 SGBD SERVEUR / CONTROLLER</span>
                          <span className="text-[8px] text-brand-cyan">RegEx Parser Moteur</span>
                        </div>
                        <div className="flex items-center justify-center py-0.5"><div className="w-0.5 h-3 bg-brand-cyan/40 border-dashed" /></div>
                        <div className="px-2.5 py-1.5 bg-brand-primary/10 border border-brand-cyan/20 rounded text-[9.5px] text-white flex items-center justify-between shadow-sm">
                          <span>🗄️ PERSISTENCE DATA / STORAGE</span>
                          <span className="text-[8px] text-[#70D6F5]">SQL Table Index</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* All detailed tags */}
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#70D6F5] mb-3">
                    Technologies associées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-brand-primary/10 text-brand-cyan border border-brand-primary/10 rounded font-mono text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Simulated links warning */}
                <div className="p-3 bg-yellow-500/10 border border-brand-gold/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-1.5 text-brand-gold text-xs font-bold uppercase tracking-wider">
                    <ShieldAlert className="w-4 h-4" />
                    Projet Académique & Confidentialité
                  </div>
                  <p className="text-[10px] text-brand-cream/75 leading-relaxed">
                    Ce projet émane des travaux d'excellence informatique de l'<strong>ITU University</strong>. Les codes sources complets sont hébergés sur des dépôts universitaires sécurisés privés ou disponibles sur demande directe pour évaluation.
                  </p>
                </div>

              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-5 border-t border-brand-primary/10 flex flex-wrap gap-3 justify-end font-mono text-xs">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 border border-brand-cyan/30 text-brand-cyan hover:border-brand-cyan uppercase tracking-wider rounded transition-all cursor-pointer"
              >
                Fermer
              </button>
              
              <a
                href="mailto:loicrakotoarivony07@gmail.com?subject=Demande d'information - Projet : "
                onClick={() => setActiveModalProject(null)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-primary hover:bg-brand-primary/80 hover:glow-cyan text-white uppercase tracking-wider rounded-lg shadow-md transition-all font-bold cursor-pointer"
              >
                Demander l'accès
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
