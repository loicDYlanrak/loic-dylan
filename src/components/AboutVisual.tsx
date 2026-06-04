/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Database, Network, Cpu, Shield, KeyRound, Workflow } from 'lucide-react';

export default function AboutVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center p-4">
      {/* 1. Concentric ambient background gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 via-brand-cyan/5 to-transparent rounded-full filter blur-2xl animate-pulse-slow" />

      {/* 2. Outer Rotating network wire (CSS keyframed rotating rings) */}
      <div className="absolute w-11/12 h-11/12 border border-brand-cyan/20 rounded-full animate-[spin_40s_linear_infinite]" />
      <div className="absolute w-9/12 h-9/12 border border-brand-primary/15 border-dashed rounded-full animate-[spin_25s_linear_infinite]" style={{ animationDirection: 'reverse' }} />
      <div className="absolute w-7/12 h-7/12 border-2 border-brand-cyan/10 rounded-full animate-[spin_15s_linear_infinite]" />

      {/* 3. Orbiting node chips representation */}
      <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
        {/* Node 1: Schema indicator */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-[#020612] border border-brand-cyan rounded-lg glow-cyan hover:scale-110 hover:border-brand-gold hover:glow-gold transition-all"
          title="Modélisation MERISE / UML Structurelle"
        >
          <Workflow className="w-5 h-5 text-brand-cyan hover:text-brand-gold transition-colors" />
        </div>

        {/* Node 2: Network TCP Sockets indicator */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-2 bg-[#020612] border border-brand-cyan rounded-lg glow-cyan"
          title="Moteur de Sockets TCP Client/Serveur"
        >
          <Network className="w-5 h-5 text-brand-cyan" />
        </div>

        {/* Node 3: Safety Security keys */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-2 bg-[#020612] border border-brand-cyan rounded-lg glow-cyan"
          title="Contraintes d'intégrité & transactions"
        >
          <KeyRound className="w-5 h-5 text-brand-cyan" />
        </div>

        {/* Node 4: SGBD Engine performance */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-2 bg-[#020612] border border-brand-cyan rounded-lg glow-cyan"
          title="Optimisation & Indexation PostgreSQL"
        >
          <Cpu className="w-5 h-5 text-brand-cyan" />
        </div>
      </div>

      {/* 4. Glowing Relational Core Sphere */}
      <div className="relative w-1/2 h-1/2 rounded-full bg-[#020612] border-2 border-brand-cyan glow-cyan flex flex-col items-center justify-center p-4 hover:border-brand-gold hover:scale-105 transition-all group duration-500 shadow-2xl">
        <div className="absolute inset-2 border border-brand-cyan/25 rounded-full animate-ping group-hover:border-brand-gold/40" />
        
        {/* Central glowing icon */}
        <Database className="w-12 h-12 text-brand-blue group-hover:text-brand-gold animate-pulse duration-1000 transform group-hover:rotate-12 transition-all" />
        
        <span className="block font-mono text-[9px] font-extrabold tracking-widest text-brand-cyan group-hover:text-white transition-colors uppercase mt-3">
          SGBD Engine
        </span>
        <span className="block font-mono text-[7px] text-brand-cream/50 uppercase tracking-widest mt-0.5">
          Normalisé 3NF
        </span>
      </div>

      {/* Outer Floating Accents */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-brand-gold rounded-full animate-ping" />
      <div className="absolute bottom-12 left-10 w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
    </div>
  );
}
