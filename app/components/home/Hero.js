// src/components/home/Hero.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // ✅ ALL HOOKS AT TOP LEVEL
  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      setMousePosition({ x: 0, y: 0 });
    };
  }, []);

  // ✅ useScroll - unconditional, but target can be conditional
  const { scrollYProgress } = useScroll({
    target: mounted ? containerRef : undefined,
    offset: ["start start", "end start"]
  });
  
  // ✅ useTransform - ALWAYS call them, regardless of mounted state
  const y = useTransform(scrollYProgress, [0, 1], [0, windowWidth < 768 ? 30 : 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  // Mouse move effect (only desktop)
  useEffect(() => {
    if (!mounted || windowWidth < 1024) return;
    
    let ticking = false;
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          const x = (clientX / innerWidth - 0.5) * 1.5;
          const y = (clientY / innerHeight - 0.5) * 1.5;
          setMousePosition({ x, y });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mounted, windowWidth]);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1, 
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Professional font classes
  const fontClasses = {
    display: 'font-serif tracking-[-0.02em]',
    heading: 'font-sans tracking-[-0.01em] font-light',
    body: 'font-sans leading-relaxed font-light'
  };

  // Loading state
  if (!mounted) {
    return (
      <section className="relative flex items-center min-h-screen bg-[#0C0C0C]">
        <div className="px-4 container-custom sm:px-6 lg:px-8">
          <div className="text-[#D4AF37]">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef}
      className="relative flex items-center min-h-screen overflow-hidden bg-gradient-to-b from-[#0C0C0C] via-[#141414] to-[#0C0C0C] dark:from-[#0C0C0C] dark:via-[#141414] dark:to-[#0C0C0C] light:from-gray-50 light:via-gray-100 light:to-gray-50 section-padding"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C0C0C] via-[#141414] to-[#1A1A1A] dark:from-[#0C0C0C] dark:via-[#141414] dark:to-[#1A1A1A] light:from-gray-50 light:via-gray-100 light:to-gray-50" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.02] light:opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Soft Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[#D4AF37]/3 dark:bg-[#D4AF37]/3 light:bg-[#D4AF37]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-[#B68B40]/3 dark:bg-[#B68B40]/3 light:bg-[#B68B40]/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2"
        >
          {/* Left Column */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-block mb-6 md:mb-8">
              <span className="inline-block px-5 py-2.5 text-xs tracking-[0.25em] text-[#D4AF37] dark:text-[#D4AF37] light:text-[#B68B40] border border-[#D4AF37]/20 dark:border-[#D4AF37]/20 light:border-[#B68B40]/30 bg-[#D4AF37]/5 dark:bg-[#D4AF37]/5 light:bg-[#B68B40]/10 rounded-full font-light backdrop-blur-sm">
                EST. 2021 · KARACHI
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={fadeInUp} className="mb-4">
              <span className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${fontClasses.display} text-white dark:text-white light:text-gray-900 leading-[0.9] mb-2`}>
                Crafting
              </span>
              <span className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${fontClasses.display} mb-2`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#B68B40] dark:from-[#D4AF37] dark:via-[#C5A028] dark:to-[#B68B40] light:from-[#B68B40] light:via-[#9A7B4C] light:to-[#7D5E3A]">
                  Digital
                </span>
              </span>
              <span className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${fontClasses.display} mb-2`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A028] via-[#B68B40] to-[#9A7B4C] dark:from-[#C5A028] dark:via-[#B68B40] dark:to-[#9A7B4C] light:from-[#9A7B4C] light:via-[#7D5E3A] light:to-[#5E3F2A]">
                  Excellence
                </span>
              </span>
              <span className={`block text-2xl sm:text-3xl md:text-4xl ${fontClasses.heading} text-gray-300 dark:text-[#E0E0E0] light:text-gray-600 mt-4`}>
                for Modern Enterprises
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className={`max-w-lg mx-auto mb-8 text-base text-gray-300 dark:text-gray-300 light:text-gray-600 sm:text-lg lg:mx-0 ${fontClasses.body}`}
            >
              We're ZENO, a premium software development house based in{' '}
              <span className="text-[#D4AF37] dark:text-[#D4AF37] light:text-[#B68B40] font-normal">
                DHA, Karachi
              </span>. 
              We build enterprise-grade solutions that drive growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Link 
                href="/work"
                className="group relative px-8 py-4 overflow-hidden rounded-md bg-gradient-to-r from-[#D4AF37] to-[#B68B40] dark:from-[#D4AF37] dark:to-[#B68B40] light:from-[#B68B40] light:to-[#9A7B4C] text-[#0C0C0C] dark:text-[#0C0C0C] light:text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20"
              >
                <span className="relative z-10">View Our Work</span>
                <motion.span 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
              
              <Link 
                href="/contact"
                className="group relative px-8 py-4 overflow-hidden rounded-md border border-[#D4AF37]/30 dark:border-[#D4AF37]/30 light:border-[#B68B40]/30 text-[#D4AF37] dark:text-[#D4AF37] light:text-[#B68B40] hover:text-[#0C0C0C] dark:hover:text-[#0C0C0C] light:hover:text-white transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Let's Talk
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B68B40] dark:from-[#D4AF37] dark:to-[#B68B40] light:from-[#B68B40] light:to-[#9A7B4C]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-8 pt-8 mt-8 border-t border-white/10 dark:border-white/10 light:border-gray-200 lg:justify-start"
            >
              {[
                { value: '50+', label: 'Projects' },
                { value: '98%', label: 'Success' },
                { value: '5+', label: 'Years' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -2 }}
                  className="text-center"
                >
                  <div className={`text-3xl md:text-4xl ${fontClasses.display} text-[#D4AF37] dark:text-[#D4AF37] light:text-[#B68B40]`}>
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs tracking-wider text-gray-400 dark:text-[#A0A0A0] light:text-gray-500 uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div 
            variants={scaleIn}
            style={{ 
              y: mounted ? y : 0,
              opacity: mounted ? opacity : 1 
            }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Image Container */}
              <div className="relative overflow-hidden shadow-2xl aspect-[4/5] rounded-lg">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 dark:from-black/50 light:from-black/30 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-transparent mix-blend-overlay z-10" />
                
                {/* Image */}
                <Image
                  src="/man2.jpg"
                  alt="ZENO Office Karachi"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover"
                  priority
                />

                {/* Border */}
                <div className="absolute inset-0 border border-[#D4AF37]/20 dark:border-[#D4AF37]/20 light:border-[#B68B40]/30 rounded-lg z-20" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#D4AF37]/10 dark:border-[#D4AF37]/10 light:border-[#B68B40]/20 rounded-full" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#D4AF37]/10 dark:border-[#D4AF37]/10 light:border-[#B68B40]/20 rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {windowWidth >= 1024 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute -translate-x-1/2 left-1/2 bottom-8"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs tracking-[0.3em] text-gray-400 dark:text-[#A0A0A0] light:text-gray-500">SCROLL</span>
              <div className="w-px h-10 bg-gradient-to-b from-[#D4AF37] to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}