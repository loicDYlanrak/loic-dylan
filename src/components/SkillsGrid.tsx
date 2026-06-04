/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { Database, Code, Layers, Wrench, ChevronRight } from 'lucide-react';
import { SKILL_GROUPS } from '../data';

export default function SkillsGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect(); // Animate only once for nice performance
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Map icon strings to Lucide components
  const getIcon = (name: string) => {
    switch (name) {
      case 'Database':
        return <Database className="w-5 h-5 text-brand-cyan" />;
      case 'Code':
        return <Code className="w-5 h-5 text-brand-cyan" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-brand-cyan" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-brand-cyan" />;
      default:
        return <Code className="w-5 h-5 text-brand-blue" />;
    }
  };

  return (
    <div
      id="skills-interaction-container"
      ref={containerRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      {SKILL_GROUPS.map((group, gIdx) => (
        <div
          key={group.category}
          id={`skill-card-${gIdx}`}
          className="relative bg-[#020612]/60 border border-brand-primary/10 rounded-xl p-6 hover:border-brand-cyan/25 transition-all duration-300 shadow-md backdrop-blur-sm group"
        >
          {/* Subtle upper background glow */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full filter blur-xl group-hover:bg-brand-cyan/10 transition-all duration-300" />
          
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-lg bg-brand-primary/10 border border-brand-cyan/10 group-hover:glow-cyan transition-all">
              {getIcon(group.iconName)}
            </div>
            <h3 className="font-display text-base font-bold text-white tracking-tight uppercase group-hover:text-brand-cyan transition-colors">
              {group.category}
            </h3>
          </div>

          <div className="space-y-4">
            {group.skills.map((skill) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-brand-cream/90 font-medium flex items-center">
                    <ChevronRight className="w-3.5 h-3.5 text-brand-cyan mr-1 opacity-60" />
                    {skill.name}
                  </span>
                  <span className="text-brand-cyan font-bold tracking-wider">{skill.level}%</span>
                </div>
                
                {/* Track background with active border */}
                <div className="h-2 w-full bg-[#050A1A] rounded-full overflow-hidden border border-brand-primary/5">
                  <div
                    className="h-full bg-gradient-to-r from-brand-primary via-brand-cyan to-brand-blue rounded-full transition-all duration-1200 cubic-bezier(0.25, 1, 0.5, 1)"
                    style={{
                      width: hasAnimated ? `${skill.level}%` : '0%',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
