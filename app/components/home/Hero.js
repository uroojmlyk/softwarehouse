






// // src/components/home/Hero.js
// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRef, useEffect, useState } from 'react';

// export default function Hero() {
//   const containerRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [mounted, setMounted] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(0);

//   useEffect(() => {
//     setMounted(true);
//     setWindowWidth(window.innerWidth);
    
//     // Cleanup function for performance
//     return () => {
//       setMousePosition({ x: 0, y: 0 });
//     };
//   }, []);

//   // ✅ OPTIMIZED: useScroll with cleanup
//   const { scrollYProgress } = useScroll({
//     target: mounted ? containerRef : undefined,
//     offset: ["start start", "end start"]
//   });
  
//   // ✅ OPTIMIZED: Responsive transform values
//   const y = useTransform(scrollYProgress, [0, 1], [0, windowWidth < 768 ? 50 : 150]);
//   const scale = useTransform(scrollYProgress, [0, 1], [1, windowWidth < 768 ? 1.05 : 1.1]);

//   // ✅ OPTIMIZED: Throttled mouse move for performance
//   useEffect(() => {
//     if (!mounted) return;
    
//     let ticking = false;
//     const handleMouseMove = (e) => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           const { clientX, clientY } = e;
//           const { innerWidth, innerHeight } = window;
          
//           const x = (clientX / innerWidth - 0.5) * 2;
//           const y = (clientY / innerHeight - 0.5) * 2;
          
//           setMousePosition({ x, y });
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove, { passive: true });
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [mounted]);

//   // ✅ OPTIMIZED: Text animation variants - mobile optimized
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * (windowWidth < 768 ? 0.08 : 0.12),
//         duration: windowWidth < 768 ? 0.5 : 0.8,
//         ease: [0.16, 1, 0.3, 1]
//       }
//     })
//   };

//   // ✅ OPTIMIZED: Floating animation - reduced on mobile
//   const floatingAnimation = {
//     y: windowWidth < 768 ? [0, -4, 0] : [0, -8, 0],
//     transition: {
//       duration: windowWidth < 768 ? 4 : 5,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   };

//   // Premium gold gradients
//   const goldGradients = {
//     light: 'from-[#C9A959] via-[#D4AF37] to-[#FFD700]',
//     medium: 'from-[#B8860B] via-[#C9A959] to-[#DAA520]',
//     dark: 'from-[#8B6914] via-[#B8860B] to-[#C9A959]'
//   };

//   // ✅ OPTIMIZED: Responsive font classes
//   const fontClasses = {
//     display: 'font-display tracking-[-0.02em]',
//     heading: 'font-sans tracking-[-0.01em]',
//     body: 'font-sans leading-relaxed'
//   };

//   // ✅ OPTIMIZED: Server-side simple render
//   if (!mounted) {
//     return (
//       <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0B0B0B] to-[#1E1E1E]">
//         <div className="px-4 container-custom sm:px-6 lg:px-8">
//           <div className="text-center text-white/50 sm:text-left">Loading...</div>
//         </div>
//       </section>
//     );
//   }

//   // ✅ OPTIMIZED: Reduce floating particles on mobile
//   const particleCount = windowWidth < 768 ? 8 : 20;

//   return (
//     <section 
//       ref={containerRef}
//       className="relative flex items-center min-h-screen overflow-hidden section-padding"
//     >
//       {/* Background - optimized */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#151515] to-[#1E1E1E]" />
      
//       {/* ✅ OPTIMIZED: Mesh Gradient - simplified on mobile */}
//       <div className="absolute inset-0 opacity-20 md:opacity-30">
//         <div 
//           className="absolute inset-0"
//           style={{
//             background: windowWidth < 768 
//               ? `radial-gradient(circle at 30% 50%, rgba(201, 169, 89, 0.1) 0%, transparent 70%)`
//               : `radial-gradient(circle at 30% 50%, rgba(201, 169, 89, 0.15) 0%, transparent 50%),
//                  radial-gradient(circle at 70% 50%, rgba(201, 169, 89, 0.1) 0%, transparent 50%)`,
//           }}
//         />
//       </div>

//       {/* ✅ OPTIMIZED: Grid Pattern - disabled on mobile for performance */}
//       {windowWidth >= 768 && (
//         <div className="absolute inset-0 opacity-[0.15]">
//           <div 
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(201, 169, 89, 0.1) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(201, 169, 89, 0.1) 1px, transparent 1px)
//               `,
//               backgroundSize: '60px 60px',
//               transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
//               transition: 'transform 0.1s ease-out'
//             }}
//           />
//         </div>
//       )}

//       {/* ✅ OPTIMIZED: Gradient Orbs - simplified on mobile */}
//       {windowWidth >= 1024 && (
//         <>
//           <motion.div 
//             className="absolute top-0 left-0 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] bg-gradient-to-r from-accent/5 via-transparent to-transparent rounded-full blur-[80px] md:blur-[100px] lg:blur-[120px]"
//             animate={{
//               x: mousePosition.x * (windowWidth < 768 ? 20 : 40),
//               y: mousePosition.y * (windowWidth < 768 ? 20 : 40),
//             }}
//             transition={{ type: "spring", stiffness: 30, damping: 20 }}
//           />
          
//           <motion.div 
//             className="absolute bottom-0 right-0 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] bg-gradient-to-l from-accent/5 via-transparent to-transparent rounded-full blur-[80px] md:blur-[100px] lg:blur-[120px]"
//             animate={{
//               x: mousePosition.x * -20,
//               y: mousePosition.y * -20,
//             }}
//             transition={{ type: "spring", stiffness: 30, damping: 20 }}
//           />
//         </>
//       )}

//       {/* ✅ OPTIMIZED: Floating Particles - reduced on mobile */}
//       {[...Array(particleCount)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-accent/20"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, windowWidth < 768 ? -15 : -30, 0],
//             opacity: [0.1, 0.3, 0.1],
//           }}
//           transition={{
//             duration: windowWidth < 768 ? 3 + Math.random() * 3 : 5 + Math.random() * 5,
//             repeat: Infinity,
//             delay: Math.random() * 5,
//           }}
//         />
//       ))}

//       {/* Main Content */}
//       <div className="relative z-10 px-4 container-custom sm:px-6 lg:px-8">
//         <div className="grid items-center gap-8 md:gap-12 lg:gap-16 lg:grid-cols-2">
//           {/* Left Content */}
//           <div className="relative text-center lg:text-left">
//             {/* Premium Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="inline-block mb-4 md:mb-6 lg:mb-8"
//             >
//               <div className="relative">
//                 <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/30 to-accent/10 blur-lg md:blur-xl" />
//                 <span className="relative px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 border border-accent/30 bg-black/40 backdrop-blur-md rounded-full text-transparent bg-gradient-to-r from-accent to-[#FFD700] bg-clip-text text-[10px] md:text-xs lg:text-sm tracking-[0.2em] font-medium inline-block">
//                   ✦ EST. 2021 · KARACHI ✦
//                 </span>
//               </div>
//             </motion.div>

//             {/* ✅ OPTIMIZED: Responsive Heading */}
//             <h1 className="mb-4 md:mb-5 lg:mb-6">
//               <motion.span
//                 custom={1}
//                 variants={textVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${fontClasses.display} text-white leading-[0.9] mb-1 md:mb-2`}
//               >
//                 Crafting
//               </motion.span>
              
//               <motion.span
//                 custom={2}
//                 variants={textVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${fontClasses.display}`}
//               >
//                 <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>
//                   Digital
//                 </span>
//               </motion.span>
              
//               <motion.span
//                 custom={3}
//                 variants={textVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${fontClasses.display}`}
//               >
//                 <span className={`bg-gradient-to-r ${goldGradients.medium} bg-clip-text text-transparent`}>
//                   Excellence
//                 </span>
//               </motion.span>
              
//               <motion.span
//                 custom={4}
//                 variants={textVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className={`block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${fontClasses.heading} text-white/80 mt-2 md:mt-3 lg:mt-4`}
//               >
//                 for Modern Enterprises
//               </motion.span>
//             </h1>

//             {/* ✅ OPTIMIZED: Responsive Description */}
//             <motion.p
//               custom={5}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-300/90 mb-6 md:mb-7 lg:mb-8 max-w-lg mx-auto lg:mx-0 ${fontClasses.body}`}
//             >
//               We're ZENO, a premium software development house based in{' '}
//               <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent font-medium`}>
//                 DHA, Karachi
//               </span>. 
//               We build enterprise-grade solutions that drive growth and innovation.
//             </motion.p>

//             {/* ✅ OPTIMIZED: Responsive CTA Buttons */}
//             <motion.div
//               custom={6}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex flex-col justify-center gap-3 sm:flex-row md:gap-4 lg:justify-start"
//             >
//               <Link 
//                 href="/work"
//                 className="relative px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 overflow-hidden rounded-lg group"
//               >
//                 <span className={`absolute inset-0 bg-gradient-to-r ${goldGradients.light} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
//                 <span className="absolute inset-0 opacity-0 group-hover:opacity-100">
//                   <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
//                 </span>
//                 <span className="relative z-10 text-[#0B0B0B] font-medium text-sm md:text-base lg:text-lg px-2 md:px-3 lg:px-4">
//                   View Our Work
//                 </span>
//               </Link>
              
//               <Link 
//                 href="/contact"
//                 className="relative px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 overflow-hidden border rounded-lg group border-accent/30 bg-black/20 backdrop-blur-sm"
//               >
//                 <span className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-r from-accent/0 to-accent/10 group-hover:opacity-100" />
//                 <span className={`relative z-10 text-transparent bg-gradient-to-r ${goldGradients.light} bg-clip-text text-sm md:text-base lg:text-lg flex items-center gap-2`}>
//                   Let's Talk
//                   <motion.span
//                     animate={{ x: [0, 4, 0] }}
//                     transition={{ repeat: Infinity, duration: 1.8 }}
//                     className="text-accent"
//                   >
//                     →
//                   </motion.span>
//                 </span>
//               </Link>
//             </motion.div>

//             {/* ✅ OPTIMIZED: Responsive Stats */}
//             <motion.div
//               custom={7}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex flex-wrap justify-center gap-6 pt-8 mt-8 border-t lg:justify-start md:gap-8 lg:gap-10 xl:gap-12 md:pt-10 lg:pt-12 md:mt-10 lg:mt-12 border-white/10"
//             >
//               {[
//                 { number: '50+', label: 'Projects', suffix: 'Delivered' },
//                 { number: '98%', label: 'Success', suffix: 'Rate' },
//                 { number: '5+', label: 'Years', suffix: 'of Excellence' },
//               ].map((stat, i) => (
//                 <motion.div 
//                   key={i}
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 25 }}
//                   className="text-center group"
//                 >
//                   <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${fontClasses.display} bg-gradient-to-r ${goldGradients.medium} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
//                     {stat.number}
//                   </div>
//                   <div className="mt-1 text-xs text-gray-400 transition-colors md:text-sm group-hover:text-gray-300">
//                     {stat.label}
//                   </div>
//                   <div className={`text-[10px] md:text-xs bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent opacity-60 group-hover:opacity-100 transition-opacity`}>
//                     {stat.suffix}
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* ✅ OPTIMIZED: Responsive Trust Indicators */}
//             <motion.div
//               custom={8}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:justify-start md:gap-5 lg:gap-6 md:mt-7 lg:mt-8"
//             >
//               <div className="flex -space-x-2 md:-space-x-2.5 lg:-space-x-3">
//                 {[1, 2, 3, 4].map((i) => (
//                   <motion.div 
//                     key={i} 
//                     className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full border-2 border-[#0B0B0B] bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center text-[8px] md:text-[10px] lg:text-xs text-accent"
//                     whileHover={{ scale: 1.1, x: 3 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     {String.fromCharCode(64 + i)}
//                   </motion.div>
//                 ))}
//               </div>
//               <div className="text-xs text-gray-400 md:text-sm">
//                 <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent font-medium`}>50+</span> trusted by industry leaders
//               </div>
//             </motion.div>
//           </div>

//           {/* ✅ OPTIMIZED: Right Image - Responsive */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             style={{ 
//               y: mounted ? y : 0,
//               scale: mounted ? scale : 1 
//             }}
//             className="relative mt-8 lg:mt-0"
//           >
//             <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-xl md:rounded-2xl overflow-hidden group">
//               {/* Premium Overlays */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent z-10" />
//               <div className="absolute inset-0 z-10 bg-gradient-to-r from-accent/20 to-transparent mix-blend-overlay" />
              
//               {/* Image */}
//               <motion.div
//                 style={{
//                   scale: mounted ? scale : 1,
//                 }}
//                 className="relative w-full h-full"
//               >
//                 <Image
//                   src="/man2.jpg"
//                   alt="ZENO Premium Office Karachi"
//                   fill
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   className="object-cover transition-transform duration-1000 group-hover:scale-110"
//                   priority
//                   loading="eager"
//                 />
//               </motion.div>

//               {/* ✅ OPTIMIZED: Floating Cards - hidden on mobile */}
//               {windowWidth >= 768 && (
//                 <>
//                   <motion.div 
//                     animate={floatingAnimation}
//                     className="absolute z-30 p-3 border rounded-lg md:p-4 lg:p-5 top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 bg-black/60 backdrop-blur-xl md:rounded-xl border-accent/20"
//                     whileHover={{ scale: 1.05, y: -5 }}
//                   >
//                     <div className="flex items-center gap-2 md:gap-3">
//                       <div className="flex items-center justify-center w-6 h-6 rounded-lg md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-accent/30 to-accent/10">
//                         <span className="text-sm md:text-base lg:text-xl text-accent">🏆</span>
//                       </div>
//                       <div>
//                         <div className="text-xs font-medium text-white md:text-sm">Award Winning</div>
//                         <div className={`text-[8px] md:text-[10px] lg:text-xs bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>
//                           Best Software House 2024
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>

//                   <motion.div 
//                     animate={{
//                       ...floatingAnimation,
//                       transition: { ...floatingAnimation.transition, delay: 0.8 }
//                     }}
//                     className="absolute z-30 p-3 border rounded-lg md:p-4 lg:p-5 bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 bg-black/60 backdrop-blur-xl md:rounded-xl border-accent/20"
//                     whileHover={{ scale: 1.05, y: -5 }}
//                   >
//                     <div className="flex items-center gap-2 md:gap-3">
//                       <div className="flex items-center justify-center w-6 h-6 rounded-lg md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-accent/30 to-accent/10">
//                         <span className="text-sm md:text-base lg:text-xl text-accent">✓</span>
//                       </div>
//                       <div>
//                         <div className="text-xs font-medium text-white md:text-sm">ISO 27001</div>
//                         <div className={`text-[8px] md:text-[10px] lg:text-xs bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>
//                           Certified Security
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </>
//               )}

//               {/* Live Indicator */}
//               <motion.div 
//                 animate={{ opacity: [1, 0.6, 1] }}
//                 transition={{ repeat: Infinity, duration: 2.5 }}
//                 className="absolute bottom-3 left-3 md:bottom-4 md:left-4 flex items-center gap-1 md:gap-2 text-white/80 text-[10px] md:text-xs z-30 bg-black/40 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full"
//               >
//                 <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
//                 <span>Available for projects</span>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* ✅ OPTIMIZED: Scroll Indicator - hidden on mobile */}
//         {windowWidth >= 1024 && (
//           <motion.div 
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 2, duration: 0.6 }}
//             className="absolute hidden transform -translate-x-1/2 bottom-8 left-1/2 lg:block"
//           >
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{ repeat: Infinity, duration: 2.2 }}
//               className="flex flex-col items-center gap-2"
//             >
//               <span className="text-[10px] tracking-[0.2em] text-white/30">SCROLL</span>
//               <div className="w-0.5 h-8 md:h-10 lg:h-12 bg-gradient-to-b from-accent to-transparent" />
//             </motion.div>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }  








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

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    
    return () => {
      setMousePosition({ x: 0, y: 0 });
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: mounted ? containerRef : undefined,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, windowWidth < 768 ? 30 : 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, windowWidth < 768 ? 1.02 : 1.05]);

  // Mouse move effect - subtle
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

  // Premium color palette - sophisticated, not cheap yellow
  const colors = {
    primary: '#0A0A0A',      // Rich black
    secondary: '#1A1A1A',     // Dark gray
    accent: {
      light: '#E5D5B3',       // Champagne
      medium: '#C9A87C',      // Warm gold
      dark: '#B68B5C',        // Antique gold
      gradient: 'from-[#E5D5B3] via-[#C9A87C] to-[#B68B5C]'
    },
    text: {
      primary: '#FFFFFF',      // White
      secondary: '#E5E5E5',    // Off-white
      muted: '#A0A0A0'         // Gray
    }
  };

  // Premium font classes
  const fontClasses = {
    display: 'font-display tracking-[-0.03em]',
    heading: 'font-sans tracking-[-0.02em] font-light',
    body: 'font-sans leading-relaxed font-light text-[#E5E5E5]'
  };

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center bg-[#0A0A0A]">
        <div className="px-4 container-custom sm:px-6 lg:px-8">
          <div className="text-[#E5D5B3]">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef}
      className="relative flex items-center min-h-screen overflow-hidden bg-[#0A0A0A] section-padding"
    >
      {/* Sophisticated Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#1A1A1A]" />
      
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L60 30 L30 60 L0 30 L30 0 L60 30' stroke='%23C9A87C' stroke-width='0.5' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Elegant Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#C9A87C]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#B68B5C]/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      {/* Main Content */}
      <div className="relative z-10 px-4 container-custom sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative text-center lg:text-left">
            {/* Premium Badge - Refined */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 md:mb-8"
            >
              <span className="relative px-5 py-2.5 text-xs tracking-[0.25em] text-[#E5D5B3] border border-[#E5D5B3]/20 bg-[#E5D5B3]/5 rounded-full inline-block backdrop-blur-sm">
                ✦ EST. 2021 · KARACHI ✦
              </span>
            </motion.div>

            {/* Headings - Elegant Typography */}
            <h1 className="mb-6 md:mb-8">
              <motion.span
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fontClasses.display} text-white leading-[0.85] mb-2`}
              >
                Crafting
              </motion.span>
              
              <motion.span
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fontClasses.display}`}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5D5B3] via-[#C9A87C] to-[#B68B5C]">
                  Digital
                </span>
              </motion.span>
              
              <motion.span
                custom={3}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fontClasses.display}`}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A87C] via-[#B68B5C] to-[#9A7B4C]">
                  Excellence
                </span>
              </motion.span>
              
              <motion.span
                custom={4}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className={`block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${fontClasses.heading} text-[#E5E5E5] mt-4`}
              >
                for Modern Enterprises
              </motion.span>
            </h1>

            {/* Description - Elegant and Readable */}
            <motion.p
              custom={5}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className={`text-base sm:text-lg md:text-xl text-[#E5E5E5]/80 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 ${fontClasses.body}`}
            >
              We're ZENO, a premium software development house based in{' '}
              <span className="text-[#E5D5B3] font-normal">
                DHA, Karachi
              </span>. 
              We build enterprise-grade solutions that drive growth and innovation.
            </motion.p>

            {/* CTA Buttons - Elegant Design */}
            <motion.div
              custom={6}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Link 
                href="/work"
                className="group relative px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-[#E5D5B3] to-[#B68B5C] text-[#0A0A0A] font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A87C]/25"
              >
                <span className="relative z-10 text-base">View Our Work</span>
                <motion.span 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
              
              <Link 
                href="/contact"
                className="group relative px-8 py-4 overflow-hidden rounded-lg border border-[#E5D5B3]/30 text-[#E5D5B3] hover:text-[#0A0A0A] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 text-base">
                  Let's Talk
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#E5D5B3] to-[#B68B5C]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>

            {/* Stats - Minimal and Elegant */}
            <motion.div
              custom={7}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-8 pt-8 mt-8 border-t lg:justify-start lg:gap-12 border-white/10"
            >
              {[
                { number: '50+', label: 'Projects' },
                { number: '98%', label: 'Success' },
                { number: '5+', label: 'Years' },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -2 }}
                  className="text-center"
                >
                  <div className={`text-3xl md:text-4xl lg:text-5xl ${fontClasses.display} text-[#E5D5B3]`}>
                    {stat.number}
                  </div>
                  <div className="mt-1 text-xs text-[#A0A0A0] tracking-wider uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image - Perfectly Adjusted */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ 
              y: mounted ? y : 0,
              scale: mounted ? scale : 1 
            }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Image Container with Elegant Frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#C9A87C]/20 to-transparent mix-blend-overlay z-10" />
                
                {/* Image */}
                <Image
                  src="/man2.jpg"
                  alt="ZENO Premium Office Karachi"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover"
                  priority
                />

                {/* Elegant Border */}
                <div className="absolute inset-0 border border-[#E5D5B3]/20 rounded-2xl z-20" />
              </div>

              {/* Minimal Floating Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#E5D5B3]/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#B68B5C]/10 to-transparent rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Minimal Scroll Indicator */}
        {windowWidth >= 1024 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute transform -translate-x-1/2 left-1/2 bottom-8"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs tracking-[0.3em] text-[#A0A0A0]">SCROLL</span>
              <div className="w-px h-12 bg-gradient-to-b from-[#E5D5B3] to-transparent" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}