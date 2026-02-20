



<<<<<<< HEAD


=======
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
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

//   // ✅ ALL HOOKS AT TOP LEVEL
//   useEffect(() => {
//     setMounted(true);
//     setWindowWidth(window.innerWidth);
<<<<<<< HEAD
//     return () => setMousePosition({ x: 0, y: 0 });
=======
    
//     return () => {
//       setMousePosition({ x: 0, y: 0 });
//     };
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: mounted ? containerRef : undefined,
//     offset: ["start start", "end start"]
//   });
  
//   const y = useTransform(scrollYProgress, [0, 1], [0, windowWidth < 768 ? 30 : 100]);
//   const scale = useTransform(scrollYProgress, [0, 1], [1, windowWidth < 768 ? 1.02 : 1.05]);

<<<<<<< HEAD
//   // Mouse move effect (only desktop)
=======
//   // Mouse move effect - subtle
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//   useEffect(() => {
//     if (!mounted || windowWidth < 1024) return;
    
//     let ticking = false;
//     const handleMouseMove = (e) => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           const { clientX, clientY } = e;
//           const { innerWidth, innerHeight } = window;
<<<<<<< HEAD
//           const x = (clientX / innerWidth - 0.5) * 1.5;
//           const y = (clientY / innerHeight - 0.5) * 1.5;
=======
          
//           const x = (clientX / innerWidth - 0.5) * 1.5;
//           const y = (clientY / innerHeight - 0.5) * 1.5;
          
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//           setMousePosition({ x, y });
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };
//     window.addEventListener('mousemove', handleMouseMove, { passive: true });
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [mounted, windowWidth]);

//   // Text animation variants
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.7,
//         ease: [0.22, 1, 0.36, 1]
//       }
//     })
//   };

<<<<<<< HEAD
=======
//   // Premium color palette - sophisticated, not cheap yellow
//   const colors = {
//     primary: '#0A0A0A',      // Rich black
//     secondary: '#1A1A1A',     // Dark gray
//     accent: {
//       light: '#E5D5B3',       // Champagne
//       medium: '#C9A87C',      // Warm gold
//       dark: '#B68B5C',        // Antique gold
//       gradient: 'from-[#E5D5B3] via-[#C9A87C] to-[#B68B5C]'
//     },
//     text: {
//       primary: '#FFFFFF',      // White
//       secondary: '#E5E5E5',    // Off-white
//       muted: '#A0A0A0'         // Gray
//     }
//   };

>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//   // Premium font classes
//   const fontClasses = {
//     display: 'font-display tracking-[-0.03em]',
//     heading: 'font-sans tracking-[-0.02em] font-light',
<<<<<<< HEAD
//     body: 'font-sans leading-relaxed font-light'
=======
//     body: 'font-sans leading-relaxed font-light text-[#E5E5E5]'
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//   };

//   if (!mounted) {
//     return (
<<<<<<< HEAD
//       <section className="relative flex items-center min-h-screen bg-[#0A0A0A]">
//         <div className="px-4 container-custom sm:px-6 lg:px-8">
//           <div className="text-[#C9A87C]">Loading...</div>
=======
//       <section className="relative min-h-screen flex items-center bg-[#0A0A0A]">
//         <div className="px-4 container-custom sm:px-6 lg:px-8">
//           <div className="text-[#E5D5B3]">Loading...</div>
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section 
//       ref={containerRef}
<<<<<<< HEAD
//       className="relative flex items-center min-h-screen overflow-hidden bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white section-padding"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#1A1A1A] dark:from-[#0A0A0A] dark:via-[#121212] dark:to-[#1A1A1A] light:from-gray-50 light:via-gray-100 light:to-gray-50" />
      
//       {/* Subtle Texture */}
//       <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] light:opacity-[0.02]">
=======
//       className="relative flex items-center min-h-screen overflow-hidden bg-[#0A0A0A] section-padding"
//     >
//       {/* Sophisticated Background Layers */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#1A1A1A]" />
      
//       {/* Subtle Texture Overlay */}
//       <div className="absolute inset-0 opacity-[0.03]">
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L60 30 L30 60 L0 30 L30 0 L60 30' stroke='%23C9A87C' stroke-width='0.5' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
//             backgroundSize: '60px 60px'
//           }}
//         />
//       </div>

<<<<<<< HEAD
//       {/* Gradient Orbs */}
//       <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#C9A87C]/5 dark:bg-[#C9A87C]/5 light:bg-[#C9A87C]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#B68B5C]/5 dark:bg-[#B68B5C]/5 light:bg-[#B68B5C]/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
=======
//       {/* Elegant Gradient Orbs */}
//       <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#C9A87C]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#B68B5C]/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0

//       {/* Main Content */}
//       <div className="relative z-10 px-4 container-custom sm:px-6 lg:px-8">
//         <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
//           {/* Left Content */}
//           <div className="relative text-center lg:text-left">
//             {/* Premium Badge - Refined */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="inline-block mb-6 md:mb-8"
//             >
<<<<<<< HEAD
//               <span className="relative px-5 py-2.5 text-xs tracking-[0.25em] text-[#C9A87C] dark:text-[#C9A87C] light:text-[#B68B5C] border border-[#C9A87C]/20 dark:border-[#C9A87C]/20 light:border-[#B68B5C]/30 bg-[#C9A87C]/5 dark:bg-[#C9A87C]/5 light:bg-[#B68B5C]/10 rounded-full inline-block backdrop-blur-sm">
=======
//               <span className="relative px-5 py-2.5 text-xs tracking-[0.25em] text-[#E5D5B3] border border-[#E5D5B3]/20 bg-[#E5D5B3]/5 rounded-full inline-block backdrop-blur-sm">
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//                 ✦ EST. 2021 · KARACHI ✦
//               </span>
//             </motion.div>

<<<<<<< HEAD
//             {/* Headings */}
=======
//             {/* Headings - Elegant Typography */}
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//             <h1 className="mb-6 md:mb-8">
//               <motion.span
//                 custom={1}
//                 variants={textVariants}
//                 initial="hidden"
//                 animate="visible"
<<<<<<< HEAD
//                 className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fontClasses.display} text-white dark:text-white light:text-gray-900 leading-[0.85] mb-2`}
=======
//                 className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fontClasses.display} text-white leading-[0.85] mb-2`}
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//               >
//                 Crafting
//               </motion.span>
              
//               <motion.span
//                 custom={2}
//                 variants={textVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fontClasses.display}`}
//               >
<<<<<<< HEAD
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A87C] via-[#B68B5C] to-[#9A7B4C] dark:from-[#E5D5B3] dark:via-[#C9A87C] dark:to-[#B68B5C] light:from-[#B68B5C] light:via-[#9A7B4C] light:to-[#7D5E3A]">
=======
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5D5B3] via-[#C9A87C] to-[#B68B5C]">
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//                   Digital
//                 </span>
//               </motion.span>
              
//               <motion.span
//                 custom={3}
//                 variants={textVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fontClasses.display}`}
//               >
<<<<<<< HEAD
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B68B5C] via-[#9A7B4C] to-[#7D5E3A] dark:from-[#C9A87C] dark:via-[#B68B5C] dark:to-[#9A7B4C] light:from-[#9A7B4C] light:via-[#7D5E3A] light:to-[#5E3F2A]">
=======
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A87C] via-[#B68B5C] to-[#9A7B4C]">
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//                   Excellence
//                 </span>
//               </motion.span>
              
//               <motion.span
//                 custom={4}
//                 variants={textVariants}
//                 initial="hidden"
//                 animate="visible"
<<<<<<< HEAD
//                 className={`block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${fontClasses.heading} text-gray-300 dark:text-[#E5E5E5] light:text-gray-600 mt-4`}
=======
//                 className={`block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${fontClasses.heading} text-[#E5E5E5] mt-4`}
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//               >
//                 for Modern Enterprises
//               </motion.span>
//             </h1>

<<<<<<< HEAD
//             {/* Description */}
=======
//             {/* Description - Elegant and Readable */}
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//             <motion.p
//               custom={5}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
<<<<<<< HEAD
//               className={`text-base sm:text-lg md:text-xl text-gray-300 dark:text-[#E5E5E5]/80 light:text-gray-600 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 ${fontClasses.body}`}
//             >
//               We're ZENO, a premium software development house based in{' '}
//               <span className="text-[#C9A87C] dark:text-[#C9A87C] light:text-[#B68B5C] font-normal">
=======
//               className={`text-base sm:text-lg md:text-xl text-[#E5E5E5]/80 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 ${fontClasses.body}`}
//             >
//               We're ZENO, a premium software development house based in{' '}
//               <span className="text-[#E5D5B3] font-normal">
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//                 DHA, Karachi
//               </span>. 
//               We build enterprise-grade solutions that drive growth and innovation.
//             </motion.p>

<<<<<<< HEAD
//             {/* CTA Buttons */}
=======
//             {/* CTA Buttons - Elegant Design */}
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//             <motion.div
//               custom={6}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
//             >
//               <Link 
//                 href="/work"
<<<<<<< HEAD
//                 className="group relative px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-[#C9A87C] to-[#B68B5C] dark:from-[#E5D5B3] dark:to-[#B68B5C] light:from-[#B68B5C] light:to-[#9A7B4C] text-white dark:text-[#0A0A0A] light:text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A87C]/25"
=======
//                 className="group relative px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-[#E5D5B3] to-[#B68B5C] text-[#0A0A0A] font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A87C]/25"
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//               >
//                 <span className="relative z-10 text-base">View Our Work</span>
//                 <motion.span 
//                   className="absolute inset-0 bg-white/20"
//                   initial={{ x: '-100%' }}
//                   whileHover={{ x: 0 }}
//                   transition={{ duration: 0.4 }}
//                 />
//               </Link>
              
//               <Link 
//                 href="/contact"
<<<<<<< HEAD
//                 className="group relative px-8 py-4 overflow-hidden rounded-lg border border-[#C9A87C]/30 dark:border-[#E5D5B3]/30 light:border-[#B68B5C]/30 text-[#C9A87C] dark:text-[#E5D5B3] light:text-[#B68B5C] hover:text-white dark:hover:text-[#0A0A0A] light:hover:text-white transition-all duration-300"
=======
//                 className="group relative px-8 py-4 overflow-hidden rounded-lg border border-[#E5D5B3]/30 text-[#E5D5B3] hover:text-[#0A0A0A] transition-all duration-300"
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//               >
//                 <span className="relative z-10 flex items-center gap-2 text-base">
//                   Let's Talk
//                   <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
//                 </span>
//                 <motion.div 
<<<<<<< HEAD
//                   className="absolute inset-0 bg-gradient-to-r from-[#C9A87C] to-[#B68B5C] dark:from-[#E5D5B3] dark:to-[#B68B5C] light:from-[#B68B5C] light:to-[#9A7B4C]"
=======
//                   className="absolute inset-0 bg-gradient-to-r from-[#E5D5B3] to-[#B68B5C]"
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//                   initial={{ x: '-100%' }}
//                   whileHover={{ x: 0 }}
//                   transition={{ duration: 0.4 }}
//                 />
//               </Link>
//             </motion.div>

<<<<<<< HEAD
//             {/* Stats */}
=======
//             {/* Stats - Minimal and Elegant */}
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//             <motion.div
//               custom={7}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
<<<<<<< HEAD
//               className="flex flex-wrap justify-center gap-8 pt-8 mt-8 border-t border-white/10 dark:border-white/10 light:border-gray-200 lg:justify-start lg:gap-12"
=======
//               className="flex flex-wrap justify-center gap-8 pt-8 mt-8 border-t lg:justify-start lg:gap-12 border-white/10"
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//             >
//               {[
//                 { number: '50+', label: 'Projects' },
//                 { number: '98%', label: 'Success' },
//                 { number: '5+', label: 'Years' },
//               ].map((stat, i) => (
//                 <motion.div 
//                   key={i}
//                   whileHover={{ y: -2 }}
//                   className="text-center"
//                 >
<<<<<<< HEAD
//                   <div className={`text-3xl md:text-4xl lg:text-5xl ${fontClasses.display} text-[#C9A87C] dark:text-[#E5D5B3] light:text-[#B68B5C]`}>
//                     {stat.number}
//                   </div>
//                   <div className="mt-1 text-xs tracking-wider text-gray-400 dark:text-[#A0A0A0] light:text-gray-500 uppercase">
=======
//                   <div className={`text-3xl md:text-4xl lg:text-5xl ${fontClasses.display} text-[#E5D5B3]`}>
//                     {stat.number}
//                   </div>
//                   <div className="mt-1 text-xs text-[#A0A0A0] tracking-wider uppercase">
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

<<<<<<< HEAD
//           {/* Right Image */}
=======
//           {/* Right Image - Perfectly Adjusted */}
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             style={{ 
//               y: mounted ? y : 0,
//               scale: mounted ? scale : 1 
//             }}
//             className="relative mt-8 lg:mt-0"
//           >
//             <div className="relative max-w-md mx-auto lg:max-w-none">
<<<<<<< HEAD
//               {/* Image Container */}
//               <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 dark:from-black/50 light:from-black/30 via-transparent to-transparent" />
=======
//               {/* Image Container with Elegant Frame */}
//               <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#C9A87C]/20 to-transparent mix-blend-overlay z-10" />
                
//                 {/* Image */}
//                 <Image
//                   src="/man2.jpg"
//                   alt="ZENO Premium Office Karachi"
//                   fill
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
//                   className="object-cover"
//                   priority
//                 />

<<<<<<< HEAD
//                 {/* Border */}
//                 <div className="absolute inset-0 border border-[#C9A87C]/20 dark:border-[#E5D5B3]/20 light:border-[#B68B5C]/30 rounded-2xl z-20" />
//               </div>

//               {/* Floating Elements */}
//               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#C9A87C]/10 to-transparent rounded-full blur-2xl" />
=======
//                 {/* Elegant Border */}
//                 <div className="absolute inset-0 border border-[#E5D5B3]/20 rounded-2xl z-20" />
//               </div>

//               {/* Minimal Floating Elements */}
//               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#E5D5B3]/10 to-transparent rounded-full blur-2xl" />
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//               <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#B68B5C]/10 to-transparent rounded-full blur-2xl" />
//             </div>
//           </motion.div>
//         </div>

<<<<<<< HEAD
//         {/* Scroll Indicator */}
=======
//         {/* Minimal Scroll Indicator */}
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//         {windowWidth >= 1024 && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 2 }}
//             className="absolute transform -translate-x-1/2 left-1/2 bottom-8"
<<<<<<< HEAD
//           >
//             <div className="flex flex-col items-center gap-2">
//               <span className="text-xs tracking-[0.3em] text-gray-400 dark:text-[#A0A0A0] light:text-gray-500">SCROLL</span>
//               <div className="w-px h-12 bg-gradient-to-b from-[#C9A87C] to-transparent" />
//             </div>
=======
//           >
//             <div className="flex flex-col items-center gap-2">
//               <span className="text-xs tracking-[0.3em] text-[#A0A0A0]">SCROLL</span>
//               <div className="w-px h-12 bg-gradient-to-b from-[#E5D5B3] to-transparent" />
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }











// // src/components/home/Hero.js
// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRef, useEffect, useState } from 'react';

// export default function Hero() {
//   const containerRef = useRef(null);
//   const [mounted, setMounted] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(0);

//   // ✅ ALL HOOKS AT TOP LEVEL - Fixed order
//   useEffect(() => {
//     setMounted(true);
//     setWindowWidth(window.innerWidth);
    
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   // ✅ useScroll with proper mounting check
//   const { scrollYProgress } = useScroll({
//     target: mounted ? containerRef : undefined,
//     offset: ["start start", "end start"]
//   });
  
//   // ✅ useTransform with safe access
//   const y = mounted && scrollYProgress 
//     ? useTransform(scrollYProgress, [0, 1], [0, windowWidth < 768 ? 30 : 80]) 
//     : { get: () => 0 };
    
//   const opacity = mounted && scrollYProgress 
//     ? useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]) 
//     : { get: () => 1 };

//   // ✅ Professional color palette - Deep charcoal, not pure black
//   const colors = {
//     bg: {
//       primary: '#0C0C0C',      // Rich charcoal (not pure black)
//       secondary: '#141414',     // Slightly lighter
//       accent: '#1C1C1C'         // For depth
//     },
//     gold: {
//       light: '#D4AF37',         // Classic gold
//       medium: '#C5A028',        // Warm gold
//       dark: '#B68B40',          // Antique gold
//       gradient: 'from-[#D4AF37] via-[#C5A028] to-[#B68B40]'
//     },
//     text: {
//       primary: '#FFFFFF',
//       secondary: '#E0E0E0',
//       muted: '#A0A0A0'
//     }
//   };

//   // ✅ Professional font classes
//   const fontClasses = {
//     display: 'font-serif tracking-[-0.02em]',  // Changed to serif for classic look
//     heading: 'font-sans tracking-[-0.01em] font-light',
//     body: 'font-sans leading-relaxed text-[#E0E0E0] font-light'
//   };

//   // ✅ Smooth animation variants - Classy and subtle
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.8, 
//         ease: [0.25, 0.1, 0.25, 1] // Cubic-bezier for smoothness
//       }
//     }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const scaleIn = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { 
//         duration: 1, 
//         ease: [0.25, 0.1, 0.25, 1]
//       }
//     }
//   };

//   // Loading state
//   if (!mounted) {
//     return (
//       <section className="relative flex items-center min-h-screen bg-[#0C0C0C]">
//         <div className="container-custom">
//           <div className="text-[#D4AF37]">Loading...</div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section 
//       ref={containerRef}
//       className="relative flex items-center min-h-screen overflow-hidden bg-gradient-to-b from-[#0C0C0C] via-[#141414] to-[#0C0C0C]"
//     >
//       {/* ✅ Classic Background - Subtle gradient, not flat black */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0C0C0C] via-[#141414] to-[#1A1A1A]" />
      
//       {/* ✅ Subtle Pattern - Very light, professional */}
//       <div className="absolute inset-0 opacity-[0.02]">
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
//             backgroundSize: '80px 80px'
//           }}
//         />
//       </div>

//       {/* ✅ Soft Gradient Orbs - Very subtle */}
//       <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[#D4AF37]/3 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-[#B68B40]/3 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />

//       {/* Main Content */}
//       <div className="relative z-10 w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <motion.div 
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//           className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2"
//         >
//           {/* Left Column - Text Content */}
//           <div className="text-center lg:text-left">
//             {/* ✅ Classic Badge */}
//             <motion.div variants={fadeInUp} className="inline-block mb-6 md:mb-8">
//               <span className="inline-block px-5 py-2.5 text-xs tracking-[0.25em] text-[#D4AF37] border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full font-light">
//                 EST. 2021 · KARACHI
//               </span>
//             </motion.div>

//             {/* ✅ Main Heading - Classic Serif */}
//             <motion.h1 variants={fadeInUp} className="mb-4">
//               <span className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${fontClasses.display} text-white leading-[0.9] mb-2`}>
//                 Crafting
//               </span>
//               <span className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${fontClasses.display} mb-2`}>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#B68B40]">
//                   Digital
//                 </span>
//               </span>
//               <span className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${fontClasses.display} mb-2`}>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A028] via-[#B68B40] to-[#9A7B4C]">
//                   Excellence
//                 </span>
//               </span>
//               <span className={`block text-2xl sm:text-3xl md:text-4xl ${fontClasses.heading} text-[#E0E0E0] mt-4`}>
//                 for Modern Enterprises
//               </span>
//             </motion.h1>

//             {/* ✅ Description - Clean and readable */}
//             <motion.p 
//               variants={fadeInUp}
//               className={`max-w-lg mx-auto mb-8 text-base sm:text-lg lg:mx-0 ${fontClasses.body}`}
//             >
//               We're ZENO, a premium software development house based in{' '}
//               <span className="text-[#D4AF37] font-normal">DHA, Karachi</span>. 
//               We build enterprise-grade solutions that drive growth.
//             </motion.p>

//             {/* ✅ CTA Buttons - Classic design */}
//             <motion.div 
//               variants={fadeInUp}
//               className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
//             >
//               <Link 
//                 href="/work"
//                 className="group relative px-8 py-4 overflow-hidden rounded-md bg-gradient-to-r from-[#D4AF37] to-[#B68B40] text-[#0C0C0C] font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20"
//               >
//                 <span className="relative z-10">View Our Work</span>
//                 <motion.span 
//                   className="absolute inset-0 bg-white/20"
//                   initial={{ x: '-100%' }}
//                   whileHover={{ x: 0 }}
//                   transition={{ duration: 0.4 }}
//                 />
//               </Link>
              
//               <Link 
//                 href="/contact"
//                 className="group relative px-8 py-4 overflow-hidden rounded-md border border-[#D4AF37]/30 text-[#D4AF37] hover:text-[#0C0C0C] transition-all duration-300"
//               >
//                 <span className="relative z-10 flex items-center justify-center gap-2">
//                   Let's Talk
//                   <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
//                 </span>
//                 <motion.div 
//                   className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B68B40]"
//                   initial={{ x: '-100%' }}
//                   whileHover={{ x: 0 }}
//                   transition={{ duration: 0.4 }}
//                 />
//               </Link>
//             </motion.div>

//             {/* ✅ Stats - Minimal and elegant */}
//             <motion.div 
//               variants={fadeInUp}
//               className="flex flex-wrap justify-center gap-8 pt-8 mt-8 border-t lg:justify-start border-white/10"
//             >
//               {[
//                 { value: '50+', label: 'Projects' },
//                 { value: '98%', label: 'Success' },
//                 { value: '5+', label: 'Years' }
//               ].map((stat, i) => (
//                 <motion.div 
//                   key={i}
//                   whileHover={{ y: -2 }}
//                   className="text-center"
//                 >
//                   <div className={`text-3xl md:text-4xl ${fontClasses.display} text-[#D4AF37]`}>
//                     {stat.value}
//                   </div>
//                   <div className="mt-1 text-xs tracking-wider text-[#A0A0A0] uppercase">
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Right Column - Image */}
//           <motion.div 
//             variants={scaleIn}
//             style={{ 
//               y: mounted ? y : 0,
//               opacity: mounted ? opacity : 1 
//             }}
//             className="relative mt-8 lg:mt-0"
//           >
//             <div className="relative max-w-md mx-auto lg:max-w-none">
//               {/* ✅ Image Container - Classic frame */}
//               <div className="relative overflow-hidden shadow-2xl aspect-[4/5] rounded-lg">
//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent z-10" />
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent mix-blend-overlay z-10" />
                
//                 {/* Image */}
//                 <Image
//                   src="/man2.jpg"
//                   alt="ZENO Office Karachi"
//                   fill
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
//                   className="object-cover"
//                   priority
//                 />

//                 {/* ✅ Classic Border */}
//                 <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-lg z-20" />
//               </div>

//               {/* ✅ Subtle decorative elements */}
//               <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#D4AF37]/10 rounded-full" />
//               <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#D4AF37]/10 rounded-full" />
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* ✅ Scroll Indicator - Minimal */}
//         {windowWidth >= 1024 && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 2 }}
//             className="absolute left-1/2 -translate-x-1/2 bottom-8"
//           >
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="flex flex-col items-center gap-2"
//             >
//               <span className="text-xs tracking-[0.3em] text-[#A0A0A0]">SCROLL</span>
//               <div className="w-px h-10 bg-gradient-to-b from-[#D4AF37] to-transparent" />
//             </motion.div>
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
<<<<<<< HEAD
// }   
=======
// }
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0






// src/components/home/Hero.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

<<<<<<< HEAD
  // ✅ ALL HOOKS AT TOP LEVEL
  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    return () => setMousePosition({ x: 0, y: 0 });
=======
  // ✅ ALL HOOKS AT TOP LEVEL - NO CONDITIONS
  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
  }, []);

  // ✅ useScroll - unconditional, but target can be conditional
  const { scrollYProgress } = useScroll({
    target: mounted ? containerRef : undefined,
    offset: ["start start", "end start"]
  });
  
  // ✅ useTransform - ALWAYS call them, regardless of mounted state
  const y = useTransform(scrollYProgress, [0, 1], [0, windowWidth < 768 ? 30 : 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

<<<<<<< HEAD
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

  // Premium font classes
  const fontClasses = {
    display: 'font-display tracking-[-0.03em]',
    heading: 'font-sans tracking-[-0.02em] font-light',
    body: 'font-sans leading-relaxed font-light'
=======
  // Professional color palette
  const colors = {
    bg: {
      primary: '#0C0C0C',
      secondary: '#141414',
      accent: '#1C1C1C'
    },
    gold: {
      light: '#D4AF37',
      medium: '#C5A028',
      dark: '#B68B40',
      gradient: 'from-[#D4AF37] via-[#C5A028] to-[#B68B40]'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0',
      muted: '#A0A0A0'
    }
  };

  // Professional font classes
  const fontClasses = {
    display: 'font-serif tracking-[-0.02em]',
    heading: 'font-sans tracking-[-0.01em] font-light',
    body: 'font-sans leading-relaxed text-[#E0E0E0] font-light'
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
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

  // Loading state - AFTER all hooks
  if (!mounted) {
    return (
<<<<<<< HEAD
      <section className="relative flex items-center min-h-screen bg-[#0A0A0A]">
        <div className="px-4 container-custom sm:px-6 lg:px-8">
          <div className="text-[var(--accent-gold)]">Loading...</div>
=======
      <section className="relative flex items-center min-h-screen bg-[#0C0C0C]">
        <div className="container-custom">
          <div className="text-[#D4AF37]">Loading...</div>
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef}
<<<<<<< HEAD
      className="relative flex items-center min-h-screen overflow-hidden bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white section-padding"
    >
      {/* Background - Using variables */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#1A1A1A] dark:from-[#0A0A0A] dark:via-[#121212] dark:to-[#1A1A1A] light:from-gray-50 light:via-gray-100 light:to-gray-50" />
      
      {/* Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] light:opacity-[0.02]">
=======
      className="relative flex items-center min-h-screen overflow-hidden bg-gradient-to-b from-[#0C0C0C] via-[#141414] to-[#0C0C0C]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C0C0C] via-[#141414] to-[#1A1A1A]" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

<<<<<<< HEAD
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[var(--accent-gold)]/5 dark:bg-[var(--accent-gold)]/5 light:bg-[var(--accent-gold)]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[var(--accent-gold-dark)]/5 dark:bg-[var(--accent-gold-dark)]/5 light:bg-[var(--accent-gold-dark)]/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      {/* Main Content */}
      <div className="relative z-10 px-4 container-custom sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative text-center lg:text-left">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 md:mb-8"
            >
              <span className="relative px-5 py-2.5 text-xs tracking-[0.25em] text-[var(--accent-gold)] dark:text-[var(--accent-gold)] light:text-[var(--accent-gold-dark)] border border-[var(--accent-gold)]/20 dark:border-[var(--accent-gold)]/20 light:border-[var(--accent-gold-dark)]/30 bg-[var(--accent-gold)]/5 dark:bg-[var(--accent-gold)]/5 light:bg-[var(--accent-gold-dark)]/10 rounded-full inline-block backdrop-blur-sm">
                ✦ EST. 2021 · KARACHI ✦
              </span>
            </motion.div>

            {/* Headings */}
            <h1 className="mb-6 md:mb-8">
              <motion.span
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fontClasses.display} text-[var(--text-primary)] leading-[0.85] mb-2`}
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-gold)] via-[var(--accent-gold-dark)] to-[#9A7B4C] dark:from-[var(--accent-gold-light)] dark:via-[var(--accent-gold)] dark:to-[var(--accent-gold-dark)] light:from-[var(--accent-gold-dark)] light:via-[#9A7B4C] light:to-[#7D5E3A]">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-gold-dark)] via-[#9A7B4C] to-[#7D5E3A] dark:from-[var(--accent-gold)] dark:via-[var(--accent-gold-dark)] dark:to-[#9A7B4C] light:from-[#9A7B4C] light:via-[#7D5E3A] light:to-[#5E3F2A]">
                  Excellence
                </span>
              </motion.span>
              
              <motion.span
                custom={4}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className={`block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${fontClasses.heading} text-[var(--text-secondary)] mt-4`}
              >
=======
      {/* Soft Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[#D4AF37]/3 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-[#B68B40]/3 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />

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
              <span className="inline-block px-5 py-2.5 text-xs tracking-[0.25em] text-[#D4AF37] border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full font-light">
                EST. 2021 · KARACHI
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={fadeInUp} className="mb-4">
              <span className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${fontClasses.display} text-white leading-[0.9] mb-2`}>
                Crafting
              </span>
              <span className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${fontClasses.display} mb-2`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#B68B40]">
                  Digital
                </span>
              </span>
              <span className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${fontClasses.display} mb-2`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A028] via-[#B68B40] to-[#9A7B4C]">
                  Excellence
                </span>
              </span>
              <span className={`block text-2xl sm:text-3xl md:text-4xl ${fontClasses.heading} text-[#E0E0E0] mt-4`}>
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
                for Modern Enterprises
              </span>
            </motion.h1>

            {/* Description */}
<<<<<<< HEAD
            <motion.p
              custom={5}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className={`text-base sm:text-lg md:text-xl text-[var(--text-secondary)] mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 ${fontClasses.body}`}
            >
              We're ZENO, a premium software development house based in{' '}
              <span className="text-[var(--accent-gold)] dark:text-[var(--accent-gold)] light:text-[var(--accent-gold-dark)] font-normal">
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
=======
            <motion.p 
              variants={fadeInUp}
              className={`max-w-lg mx-auto mb-8 text-base sm:text-lg lg:mx-0 ${fontClasses.body}`}
            >
              We're ZENO, a premium software development house based in{' '}
              <span className="text-[#D4AF37] font-normal">DHA, Karachi</span>. 
              We build enterprise-grade solutions that drive growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Link 
                href="/work"
<<<<<<< HEAD
                className="group relative px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-dark)] dark:from-[var(--accent-gold-light)] dark:to-[var(--accent-gold-dark)] light:from-[var(--accent-gold-dark)] light:to-[#9A7B4C] text-[var(--text-primary)] dark:text-[#0A0A0A] light:text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-gold)]/25"
=======
                className="group relative px-8 py-4 overflow-hidden rounded-md bg-gradient-to-r from-[#D4AF37] to-[#B68B40] text-[#0C0C0C] font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20"
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
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
<<<<<<< HEAD
                className="group relative px-8 py-4 overflow-hidden rounded-lg border border-[var(--accent-gold)]/30 dark:border-[var(--accent-gold-light)]/30 light:border-[var(--accent-gold-dark)]/30 text-[var(--accent-gold)] dark:text-[var(--accent-gold-light)] light:text-[var(--accent-gold-dark)] hover:text-[var(--text-primary)] dark:hover:text-[#0A0A0A] light:hover:text-white transition-all duration-300"
=======
                className="group relative px-8 py-4 overflow-hidden rounded-md border border-[#D4AF37]/30 text-[#D4AF37] hover:text-[#0C0C0C] transition-all duration-300"
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Let's Talk
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
                <motion.div 
<<<<<<< HEAD
                  className="absolute inset-0 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-dark)] dark:from-[var(--accent-gold-light)] dark:to-[var(--accent-gold-dark)] light:from-[var(--accent-gold-dark)] light:to-[#9A7B4C]"
=======
                  className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B68B40]"
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>

            {/* Stats */}
<<<<<<< HEAD
            <motion.div
              custom={7}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-8 pt-8 mt-8 border-t border-[var(--border)] lg:justify-start lg:gap-12"
=======
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-8 pt-8 mt-8 border-t lg:justify-start border-white/10"
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
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
<<<<<<< HEAD
                  <div className={`text-3xl md:text-4xl lg:text-5xl ${fontClasses.display} text-[var(--accent-gold)] dark:text-[var(--accent-gold-light)] light:text-[var(--accent-gold-dark)]`}>
                    {stat.number}
                  </div>
                  <div className="mt-1 text-xs tracking-wider text-[var(--text-muted)] uppercase">
=======
                  <div className={`text-3xl md:text-4xl ${fontClasses.display} text-[#D4AF37]`}>
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs tracking-wider text-[#A0A0A0] uppercase">
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

<<<<<<< HEAD
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
=======
          {/* Right Column - Image */}
          <motion.div 
            variants={scaleIn}
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
            style={{ 
              y: mounted ? y : 0,
              opacity: mounted ? opacity : 1 
            }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Image Container */}
<<<<<<< HEAD
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 dark:from-black/50 light:from-black/30 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-gold)]/20 to-transparent mix-blend-overlay z-10" />
=======
              <div className="relative overflow-hidden shadow-2xl aspect-[4/5] rounded-lg">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent mix-blend-overlay z-10" />
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
                
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
<<<<<<< HEAD
                <div className="absolute inset-0 border border-[var(--accent-gold)]/20 dark:border-[var(--accent-gold-light)]/20 light:border-[var(--accent-gold-dark)]/30 rounded-2xl z-20" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[var(--accent-gold)]/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[var(--accent-gold-dark)]/10 to-transparent rounded-full blur-2xl" />
=======
                <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-lg z-20" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#D4AF37]/10 rounded-full" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#D4AF37]/10 rounded-full" />
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {windowWidth >= 1024 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-8"
          >
<<<<<<< HEAD
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs tracking-[0.3em] text-[var(--text-muted)]">SCROLL</span>
              <div className="w-px h-12 bg-gradient-to-b from-[var(--accent-gold)] to-transparent" />
            </div>
=======
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs tracking-[0.3em] text-[#A0A0A0]">SCROLL</span>
              <div className="w-px h-10 bg-gradient-to-b from-[#D4AF37] to-transparent" />
            </motion.div>
>>>>>>> 8339c60019b1f47c7321ab3388d764d34f1d94d0
          </motion.div>
        )}
      </div>
    </section>
  );
}