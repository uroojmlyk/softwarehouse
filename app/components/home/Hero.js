


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

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // ✅ FIX: Sirf tab useScroll use karo jab mounted ho aur ref exist kare
//   const { scrollYProgress } = useScroll({
//     target: mounted ? containerRef : undefined,
//     offset: ["start start", "end start"]
//   });
  
//   // ✅ FIX: Transforms ko safely access karo
//   const y = scrollYProgress ? useTransform(scrollYProgress, [0, 1], [0, 150]) : 0;
//   const scale = scrollYProgress ? useTransform(scrollYProgress, [0, 1], [1, 1.1]) : 1;

//   // Mouse move effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       const { innerWidth, innerHeight } = window;
      
//       const x = (clientX / innerWidth - 0.5) * 2;
//       const y = (clientY / innerHeight - 0.5) * 2;
      
//       setMousePosition({ x, y });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Text animation variants
//   const textVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.12,
//         duration: 0.8,
//         ease: [0.16, 1, 0.3, 1]
//       }
//     })
//   };

//   // Floating animation
//   const floatingAnimation = {
//     y: [0, -8, 0],
//     transition: {
//       duration: 5,
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

//   // Modern font classes
//   const fontClasses = {
//     display: 'font-display tracking-[-0.02em]',
//     heading: 'font-sans tracking-[-0.01em]',
//     body: 'font-sans leading-relaxed'
//   };

//   // ✅ Server-side simple render
//   if (!mounted) {
//     return (
//       <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0B0B0B] to-[#1E1E1E]">
//         <div className="container-custom">
//           <div className="text-white/50">Loading...</div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section 
//       ref={containerRef}
//       className="relative flex items-center min-h-screen overflow-hidden section-padding"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#151515] to-[#1E1E1E]" />
      
//       {/* Animated Mesh Gradient */}
//       <div className="absolute inset-0 opacity-30">
//         <div 
//           className="absolute inset-0"
//           style={{
//             background: `radial-gradient(circle at 30% 50%, rgba(201, 169, 89, 0.15) 0%, transparent 50%),
//                         radial-gradient(circle at 70% 50%, rgba(201, 169, 89, 0.1) 0%, transparent 50%)`,
//           }}
//         />
//       </div>

//       {/* Animated Grid Pattern */}
//       <div className="absolute inset-0 opacity-[0.15]">
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(201, 169, 89, 0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(201, 169, 89, 0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: '60px 60px',
//             transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
//             transition: 'transform 0.1s ease-out'
//           }}
//         />
//       </div>

//       {/* Gradient Orbs with Mouse Follow */}
//       <motion.div 
//         className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-r from-accent/5 via-transparent to-transparent rounded-full blur-[120px]"
//         animate={{
//           x: mousePosition.x * 40,
//           y: mousePosition.y * 40,
//         }}
//         transition={{ type: "spring", stiffness: 30, damping: 20 }}
//       />
      
//       <motion.div 
//         className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-accent/5 via-transparent to-transparent rounded-full blur-[120px]"
//         animate={{
//           x: mousePosition.x * -40,
//           y: mousePosition.y * -40,
//         }}
//         transition={{ type: "spring", stiffness: 30, damping: 20 }}
//       />

//       {/* Floating Particles */}
//       {[...Array(20)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 rounded-full bg-accent/20"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, -30, 0],
//             opacity: [0.2, 0.5, 0.2],
//           }}
//           transition={{
//             duration: 5 + Math.random() * 5,
//             repeat: Infinity,
//             delay: Math.random() * 5,
//           }}
//         />
//       ))}

//       {/* Main Content */}
//       <div className="relative z-10 container-custom">
//         <div className="grid items-center gap-16 lg:grid-cols-2">
//           {/* Left Content */}
//           <div className="relative">
//             {/* Premium Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//               className="inline-block mb-8"
//             >
//               <div className="relative">
//                 <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/30 to-accent/10 blur-xl" />
//                 <span className="relative px-6 py-3 border border-accent/30 bg-black/40 backdrop-blur-md rounded-full text-transparent bg-gradient-to-r from-accent to-[#FFD700] bg-clip-text text-sm tracking-[0.2em] font-medium inline-block">
//                   ✦ EST. 2021 · KARACHI ✦
//                 </span>
//               </div>
//             </motion.div>

//             {/* Main Heading */}
//             <h1 className="mb-6">
//               <motion.span
//                 custom={1}
//                 variants={textVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className={`block text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fontClasses.display} text-white leading-[0.9] mb-2`}
//               >
//                 Crafting
//               </motion.span>
              
//               <motion.span
//                 custom={2}
//                 variants={textVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className={`block text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fontClasses.display}`}
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
//                 className={`block text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fontClasses.display}`}
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
//                 className={`block text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${fontClasses.heading} text-white/80 mt-4`}
//               >
//                 for Modern Enterprises
//               </motion.span>
//             </h1>

//             {/* Description */}
//             <motion.p
//               custom={5}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className={`text-lg md:text-xl text-gray-300/90 mb-8 max-w-lg ${fontClasses.body}`}
//             >
//               We're ZENO, a premium software development house based in{' '}
//               <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent font-medium`}>
//                 DHA, Karachi
//               </span>. 
//               We build enterprise-grade solutions that drive growth and innovation.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               custom={6}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex flex-wrap gap-4"
//             >
//               <Link 
//                 href="/work"
//                 className="relative px-8 py-4 overflow-hidden rounded-lg group"
//               >
//                 <span className={`absolute inset-0 bg-gradient-to-r ${goldGradients.light} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
//                 <span className="absolute inset-0 opacity-0 group-hover:opacity-100">
//                   <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
//                 </span>
//                 <span className="relative z-10 text-[#0B0B0B] font-medium text-lg px-4">
//                   View Our Work
//                 </span>
//               </Link>
              
//               <Link 
//                 href="/contact"
//                 className="relative px-8 py-4 overflow-hidden border rounded-lg group border-accent/30 bg-black/20 backdrop-blur-sm"
//               >
//                 <span className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-r from-accent/0 to-accent/10 group-hover:opacity-100" />
//                 <span className={`relative z-10 text-transparent bg-gradient-to-r ${goldGradients.light} bg-clip-text text-lg flex items-center gap-2`}>
//                   Let's Talk
//                   <motion.span
//                     animate={{ x: [0, 6, 0] }}
//                     transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
//                     className="text-accent"
//                   >
//                     →
//                   </motion.span>
//                 </span>
//               </Link>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               custom={7}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex gap-12 pt-12 mt-12 border-t border-white/10"
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
//                   className="group"
//                 >
//                   <div className={`text-4xl md:text-5xl ${fontClasses.display} bg-gradient-to-r ${goldGradients.medium} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
//                     {stat.number}
//                   </div>
//                   <div className="mt-1 text-sm text-gray-400 transition-colors group-hover:text-gray-300">
//                     {stat.label}
//                   </div>
//                   <div className={`text-xs bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent opacity-60 group-hover:opacity-100 transition-opacity`}>
//                     {stat.suffix}
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Trust Indicators */}
//             <motion.div
//               custom={8}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex items-center gap-6 mt-8"
//             >
//               <div className="flex -space-x-3">
//                 {[1, 2, 3, 4].map((i) => (
//                   <motion.div 
//                     key={i} 
//                     className="w-8 h-8 rounded-full border-2 border-[#0B0B0B] bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center text-xs text-accent"
//                     whileHover={{ scale: 1.1, x: 5 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     {String.fromCharCode(64 + i)}
//                   </motion.div>
//                 ))}
//               </div>
//               <div className="text-sm text-gray-400">
//                 <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent font-medium`}>50+</span> trusted by industry leaders
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
//             style={{ 
//               y: scrollYProgress ? y : 0,
//               scale: scrollYProgress ? scale : 1 
//             }}
//             className="relative"
//           >
//             <div className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden group">
//               {/* Premium Overlays */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent z-10" />
//               <div className="absolute inset-0 z-10 bg-gradient-to-r from-accent/20 to-transparent mix-blend-overlay" />
              
//               {/* Image with Parallax */}
//               <motion.div
//                 style={{
//                   scale: scrollYProgress ? scale : 1,
//                 }}
//                 className="relative w-full h-full"
//               >
//                 <Image
//                   src="/man2.jpg"
//                   alt="ZENO Premium Office Karachi"
//                   fill
//                   className="object-cover transition-transform duration-1000 group-hover:scale-110"
//                   priority
//                 />
//               </motion.div>

//               {/* Animated Border */}
//               <motion.div 
//                 className="absolute inset-0 z-20 transition-all duration-500 border border-accent/0 group-hover:border-accent/30 rounded-2xl"
//                 animate={{
//                   boxShadow: ['0 0 0 0 rgba(201, 169, 89, 0)', '0 0 0 20px rgba(201, 169, 89, 0)'],
//                 }}
//                 transition={{ repeat: Infinity, duration: 2.5 }}
//               />

//               {/* Floating Cards */}
//               <motion.div 
//                 animate={floatingAnimation}
//                 className="absolute z-30 p-5 border top-8 left-8 bg-black/60 backdrop-blur-xl rounded-xl border-accent/20"
//                 whileHover={{ scale: 1.05, y: -5 }}
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10">
//                     <span className="text-xl text-accent">🏆</span>
//                   </div>
//                   <div>
//                     <div className="font-medium text-white">Award Winning</div>
//                     <div className={`text-xs bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>
//                       Best Software House 2024
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div 
//                 animate={{
//                   ...floatingAnimation,
//                   transition: { ...floatingAnimation.transition, delay: 0.8 }
//                 }}
//                 className="absolute z-30 p-5 border bottom-8 right-8 bg-black/60 backdrop-blur-xl rounded-xl border-accent/20"
//                 whileHover={{ scale: 1.05, y: -5 }}
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10">
//                     <span className="text-xl text-accent">✓</span>
//                   </div>
//                   <div>
//                     <div className="font-medium text-white">ISO 27001</div>
//                     <div className={`text-xs bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>
//                       Certified Security
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Live Indicator */}
//               <motion.div 
//                 animate={{ opacity: [1, 0.6, 1] }}
//                 transition={{ repeat: Infinity, duration: 2.5 }}
//                 className="absolute bottom-4 left-4 flex items-center gap-2 text-white/80 text-sm z-30 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full"
//               >
//                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//                 <span>Available for projects</span>
//               </motion.div>
//             </div>

//             {/* Decorative Elements */}
//             <div className="absolute z-0 w-24 h-24 border-2 rounded-full -bottom-4 -right-4 border-accent/20" />
//             <div className="absolute z-0 w-24 h-24 border-2 rounded-full -top-4 -left-4 border-accent/20" />
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div 
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2.5, duration: 0.6 }}
//           className="absolute hidden transform -translate-x-1/2 bottom-8 left-1/2 lg:block"
//         >
//           <motion.div
//             animate={{ y: [0, 8, 0] }}
//             transition={{ repeat: Infinity, duration: 2.2 }}
//             className="flex flex-col items-center gap-2"
//           >
//             <span className="text-xs tracking-[0.2em] text-white/30">SCROLL</span>
//             <div className="w-0.5 h-12 bg-gradient-to-b from-accent to-transparent" />
//           </motion.div>
//         </motion.div>
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

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ FIXED: useScroll component top level par
  const { scrollYProgress } = useScroll({
    target: mounted ? containerRef : undefined,
    offset: ["start start", "end start"]
  });
  
  // ✅ FIXED: Transform hooks bhi top level par
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  // Floating animation
  const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Premium gold gradients
  const goldGradients = {
    light: 'from-[#C9A959] via-[#D4AF37] to-[#FFD700]',
    medium: 'from-[#B8860B] via-[#C9A959] to-[#DAA520]',
    dark: 'from-[#8B6914] via-[#B8860B] to-[#C9A959]'
  };

  // Modern font classes
  const fontClasses = {
    display: 'font-display tracking-[-0.02em]',
    heading: 'font-sans tracking-[-0.01em]',
    body: 'font-sans leading-relaxed'
  };

  // ✅ Server-side simple render
  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0B0B0B] to-[#1E1E1E]">
        <div className="container-custom">
          <div className="text-white/50">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef}
      className="relative flex items-center min-h-screen overflow-hidden section-padding"
    >
      {/* Background - same as before */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#151515] to-[#1E1E1E]" />
      
      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 50%, rgba(201, 169, 89, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 70% 50%, rgba(201, 169, 89, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201, 169, 89, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201, 169, 89, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      {/* Gradient Orbs with Mouse Follow */}
      <motion.div 
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-r from-accent/5 via-transparent to-transparent rounded-full blur-[120px]"
        animate={{
          x: mousePosition.x * 40,
          y: mousePosition.y * 40,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />
      
      <motion.div 
        className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-accent/5 via-transparent to-transparent rounded-full blur-[120px]"
        animate={{
          x: mousePosition.x * -40,
          y: mousePosition.y * -40,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 container-custom">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/30 to-accent/10 blur-xl" />
                <span className="relative px-6 py-3 border border-accent/30 bg-black/40 backdrop-blur-md rounded-full text-transparent bg-gradient-to-r from-accent to-[#FFD700] bg-clip-text text-sm tracking-[0.2em] font-medium inline-block">
                  ✦ EST. 2021 · KARACHI ✦
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <h1 className="mb-6">
              <motion.span
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className={`block text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fontClasses.display} text-white leading-[0.9] mb-2`}
              >
                Crafting
              </motion.span>
              
              <motion.span
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className={`block text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fontClasses.display}`}
              >
                <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>
                  Digital
                </span>
              </motion.span>
              
              <motion.span
                custom={3}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className={`block text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fontClasses.display}`}
              >
                <span className={`bg-gradient-to-r ${goldGradients.medium} bg-clip-text text-transparent`}>
                  Excellence
                </span>
              </motion.span>
              
              <motion.span
                custom={4}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className={`block text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${fontClasses.heading} text-white/80 mt-4`}
              >
                for Modern Enterprises
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              custom={5}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className={`text-lg md:text-xl text-gray-300/90 mb-8 max-w-lg ${fontClasses.body}`}
            >
              We're ZENO, a premium software development house based in{' '}
              <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent font-medium`}>
                DHA, Karachi
              </span>. 
              We build enterprise-grade solutions that drive growth and innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={6}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/work"
                className="relative px-8 py-4 overflow-hidden rounded-lg group"
              >
                <span className={`absolute inset-0 bg-gradient-to-r ${goldGradients.light} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100">
                  <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </span>
                <span className="relative z-10 text-[#0B0B0B] font-medium text-lg px-4">
                  View Our Work
                </span>
              </Link>
              
              <Link 
                href="/contact"
                className="relative px-8 py-4 overflow-hidden border rounded-lg group border-accent/30 bg-black/20 backdrop-blur-sm"
              >
                <span className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-r from-accent/0 to-accent/10 group-hover:opacity-100" />
                <span className={`relative z-10 text-transparent bg-gradient-to-r ${goldGradients.light} bg-clip-text text-lg flex items-center gap-2`}>
                  Let's Talk
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="text-accent"
                  >
                    →
                  </motion.span>
                </span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={7}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-12 pt-12 mt-12 border-t border-white/10"
            >
              {[
                { number: '50+', label: 'Projects', suffix: 'Delivered' },
                { number: '98%', label: 'Success', suffix: 'Rate' },
                { number: '5+', label: 'Years', suffix: 'of Excellence' },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group"
                >
                  <div className={`text-4xl md:text-5xl ${fontClasses.display} bg-gradient-to-r ${goldGradients.medium} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="mt-1 text-sm text-gray-400 transition-colors group-hover:text-gray-300">
                    {stat.label}
                  </div>
                  <div className={`text-xs bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent opacity-60 group-hover:opacity-100 transition-opacity`}>
                    {stat.suffix}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              custom={8}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-6 mt-8"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-[#0B0B0B] bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center text-xs text-accent"
                    whileHover={{ scale: 1.1, x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {String.fromCharCode(64 + i)}
                  </motion.div>
                ))}
              </div>
              <div className="text-sm text-gray-400">
                <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent font-medium`}>50+</span> trusted by industry leaders
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              y: mounted ? y : 0,
              scale: mounted ? scale : 1
            }}
            className="relative"
          >
            <div className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden group">
              {/* Premium Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent z-10" />
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-accent/20 to-transparent mix-blend-overlay" />
              
              {/* Image with Parallax */}
              <motion.div
                style={{
                  scale: mounted ? scale : 1,
                }}
                className="relative w-full h-full"
              >
                <Image
                  src="/man2.jpg"
                  alt="ZENO Premium Office Karachi"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
              </motion.div>

              {/* Animated Border */}
              <motion.div 
                className="absolute inset-0 z-20 transition-all duration-500 border border-accent/0 group-hover:border-accent/30 rounded-2xl"
                animate={{
                  boxShadow: ['0 0 0 0 rgba(201, 169, 89, 0)', '0 0 0 20px rgba(201, 169, 89, 0)'],
                }}
                transition={{ repeat: Infinity, duration: 2.5 }}
              />

              {/* Floating Cards */}
              <motion.div 
                animate={floatingAnimation}
                className="absolute z-30 p-5 border top-8 left-8 bg-black/60 backdrop-blur-xl rounded-xl border-accent/20"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10">
                    <span className="text-xl text-accent">🏆</span>
                  </div>
                  <div>
                    <div className="font-medium text-white">Award Winning</div>
                    <div className={`text-xs bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>
                      Best Software House 2024
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{
                  ...floatingAnimation,
                  transition: { ...floatingAnimation.transition, delay: 0.8 }
                }}
                className="absolute z-30 p-5 border bottom-8 right-8 bg-black/60 backdrop-blur-xl rounded-xl border-accent/20"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10">
                    <span className="text-xl text-accent">✓</span>
                  </div>
                  <div>
                    <div className="font-medium text-white">ISO 27001</div>
                    <div className={`text-xs bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>
                      Certified Security
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Live Indicator */}
              <motion.div 
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="absolute bottom-4 left-4 flex items-center gap-2 text-white/80 text-sm z-30 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Available for projects</span>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute z-0 w-24 h-24 border-2 rounded-full -bottom-4 -right-4 border-accent/20" />
            <div className="absolute z-0 w-24 h-24 border-2 rounded-full -top-4 -left-4 border-accent/20" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="absolute hidden transform -translate-x-1/2 bottom-8 left-1/2 lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-[0.2em] text-white/30">SCROLL</span>
            <div className="w-0.5 h-12 bg-gradient-to-b from-accent to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}