/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports touch to avoid displaying annoying cursors on mobile
    const checkTouch = () => {
      const mobileStatus = 
        window.matchMedia('(pointer: coarse)').matches || 
        'ontouchstart' in window;
      setIsMobile(mobileStatus);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    if (isMobile) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsHidden(false);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseLeave = () => {
      setIsHidden(true);
    };

    // Smooth lerping animation for the trailing ring
    let animationFrameId: number;
    const animateRing = () => {
      const easing = 0.15; // smoothness factor
      ringX += (mouseX - ringX) * easing;
      ringY += (mouseY - ringY) * easing;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animateRing);
    };

    animateRing();

    // Hover detection for interactive components
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = 
        target.closest('a') !== null || 
        target.closest('button') !== null || 
        target.closest('input') !== null || 
        target.closest('textarea') !== null || 
        target.closest('[role="button"]') !== null ||
        target.closest('.interactive-hover') !== null;

      setIsHovered(isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  if (isMobile || isHidden) return null;

  return (
    <>
      {/* Central Micro-Dot */}
      <div
        id="cursor-dot"
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-cyan rounded-full pointer-events-none z-50 transition-transform duration-75 mix-blend-screen"
        style={{ transform: 'translate3d(-20px, -20px, 0)' }}
      />
      {/* Outer Floating Ring with lerp movement */}
      <div
        id="cursor-ring"
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out mix-blend-screen ${
          isHovered 
            ? 'w-10 h-10 border border-brand-gold bg-brand-gold/15 glow-gold' 
            : 'w-6 h-6 border-2 border-brand-cyan/70 bg-transparent shadow-[0_0_8px_rgba(128,229,250,0.2)]'
        }`}
        style={{ transform: 'translate3d(-50px, -50px, 0) translate(-50%, -50%)' }}
      />
    </>
  );
}
