/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { CounterStat } from '../types';

interface CounterItemProps {
  key?: React.Key;
  stat: CounterStat;
}

export default function CounterItem({ stat }: CounterItemProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasTriggered(true);
          observer.disconnect(); // Count only once
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasTriggered) return;

    let startTime: number | null = null;
    const duration = 1800; // 1.8 seconds counting duration

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Dynamic mathematical easing factor out
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      setCurrentNumber(Math.floor(easedProgress * stat.targetNumber));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrentNumber(stat.targetNumber);
      }
    };

    requestAnimationFrame(step);
  }, [hasTriggered, stat.targetNumber]);

  return (
    <div
      ref={containerRef}
      className="p-5 md:p-6 bg-[#020612]/50 border border-brand-primary/10 rounded-xl hover:border-brand-cyan/20 transition-colors shadow-sm backdrop-blur-sm"
    >
      <div className="flex items-baseline justify-center md:justify-start gap-1">
        <span className="font-display text-3xl md:text-4xl font-extrabold text-brand-gold tracking-tight select-none">
          {currentNumber}
        </span>
        <span className="font-display text-xl md:text-2xl font-bold text-brand-cyan select-none">
          {stat.suffix}
        </span>
      </div>
      <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-wider mt-2">
        {stat.label}
      </h4>
      <p className="text-[10px] text-brand-cream/60 leading-relaxed mt-1">
        {stat.subtitle}
      </p>
    </div>
  );
}
