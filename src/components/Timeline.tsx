/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Calendar, GraduationCap, Briefcase, Award, ArrowUpRight } from 'lucide-react';
import { TIMELINE_DATA } from '../data';
import { TimelineItem } from '../types';

interface ScrollRevealItemProps {
  key?: React.Key;
  item: TimelineItem;
  idx: number;
}

function ScrollRevealItem({ item, idx }: ScrollRevealItemProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isAcademic = item.type === 'academic';
  const isLeft = idx % 2 === 0;

  return (
    <div
      ref={elementRef}
      className={`relative flex flex-col md:flex-row items-stretch mb-12 md:mb-16 transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${isLeft ? 'md:flex-row-reverse' : ''}`}
    >
      {/* 1. Spacing helper columns for Desktop mirroring */}
      <div className="hidden md:block w-1/2" />

      {/* 2. central marker icon */}
      <div className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 z-10 flex items-center justify-center">
        <div
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 bg-[#050A1A] ${
            isVisible 
              ? isAcademic 
                ? 'border-brand-cyan text-brand-cyan shadow-[0_0_15px_rgba(128,229,250,0.4)]'
                : 'border-brand-gold text-brand-gold shadow-[0_0_15px_rgba(246,207,90,0.4)]'
              : 'border-brand-primary/20 text-brand-cream/40'
          }`}
        >
          {isAcademic ? <GraduationCap className="w-5 h-5" /> : <Briefcase className="w-4 h-4" />}
        </div>
      </div>

      {/* 3. Outer timeline card container */}
      <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
        <div
          className={`relative bg-[#020612]/70 border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
            isAcademic 
              ? 'border-brand-primary/10 hover:border-brand-cyan/30 hover:shadow-[0_4px_25px_rgba(1,47,233,0.15)]' 
              : 'border-brand-primary/10 hover:border-brand-gold/30 hover:shadow-[0_4px_25px_rgba(246,207,90,0.15)]'
          }`}
        >
          {/* Calendar timeline indicator badge */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 bg-brand-primary/10 font-mono text-[10px] uppercase tracking-wider rounded-full border ${
                isAcademic ? 'text-brand-cyan border-brand-cyan/20' : 'text-brand-gold border-brand-gold/20'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              {item.period}
            </span>
          </div>

          <h3 className="font-display text-lg font-bold text-white tracking-tight">
            {item.title}
          </h3>

          <p
            className={`font-mono text-xs font-semibold uppercase tracking-wide mb-3 ${
              isAcademic ? 'text-brand-blue' : 'text-brand-cyan'
            }`}
          >
            {item.subtitle}
          </p>

          <p className="text-brand-cream/80 text-xs leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Sublevel details as scannable bullet indicators */}
          <ul className="space-y-1.5 mb-5">
            {item.details.map((detail, dIdx) => (
              <li key={dIdx} className="flex items-start text-xs text-brand-cream/70 leading-relaxed">
                <span className={`mr-2 mt-1.5 w-1 h-1 rounded-full ${isAcademic ? 'bg-brand-cyan' : 'bg-brand-gold'}`} />
                {detail}
              </li>
            ))}
          </ul>

          {/* Item tags */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-brand-primary/5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase bg-[#050A1A] text-brand-blue border border-brand-primary/10 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  const lineRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative max-w-5xl mx-auto py-8">
      {/* 1. Center Track Line Indicator (glowing blue) */}
      <div
        id="timeline-center-line"
        ref={lineRef}
        className="absolute left-9 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-primary via-brand-cyan to-brand-gold opacity-15"
      />

      {/* 2. Mapped Timeline Rows */}
      <div id="timeline-scroll-items" className="relative space-y-4">
        {TIMELINE_DATA.map((item, idx) => (
          <ScrollRevealItem key={item.id} item={item} idx={idx} />
        ))}
      </div>
    </div>
  );
}
