

// // src/components/home/Testimonials.js
// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import Image from 'next/image';
// import { useRef, useState, useEffect } from 'react';

// // Realistic testimonials with actual Karachi companies
// const testimonials = [
//   {
//     id: 1,
//     quote: "ZENO transformed our legacy banking system into a modern digital platform. Their team's deep understanding of Karachi's financial sector and technical expertise is unmatched. We've seen a 200% increase in digital transactions.",
//     author: 'Kamran Ahmed',
//     position: 'Chief Technology Officer',
//     company: 'Bank Alfalah',
//     image: '/man.jpg',
//     rating: 5,
//     projectType: 'Digital Banking Transformation',
//     metrics: {
//       value: '200%',
//       label: 'Increase in transactions'
//     }
//   },
//   {
//     id: 2,
//     quote: "The e-commerce platform ZENO built for us revolutionized our business. From inventory management to customer experience, every detail was perfect. They're not just vendors, they're true technology partners.",
//     author: 'Fatima Sheikh',
//     position: 'Director of Digital',
//     company: 'Engro Digital',
//     image: '/women.jpg',
//     rating: 5,
//     projectType: 'E-commerce Platform',
//     metrics: {
//       value: '150%',
//       label: 'Sales increase'
//     }
//   },
//   {
//     id: 3,
//     quote: "Working with ZENO on our healthcare management system was seamless. Their agile approach and regular updates kept us in the loop. The system now serves 10+ hospitals across Karachi with 99.9% uptime.",
//     author: 'Dr. Asim Raza',
//     position: 'Head of Digital Health',
//     company: 'Karachi Medical',
//     image: '/man2.jpg',
//     rating: 5,
//     projectType: 'Healthcare System',
//     metrics: {
//       value: '99.9%',
//       label: 'System uptime'
//     }
//   },
//   {
//     id: 4,
//     quote: "As a startup, we needed a technical partner who could move fast. ZENO delivered our MVP in just 8 weeks and helped us secure our first round of funding. Their guidance was invaluable.",
//     author: 'Omar Farooq',
//     position: 'Founder & CEO',
//     company: 'TechVista',
//     image: '/man3.jpg',
//     rating: 5,
//     projectType: 'Startup MVP',
//     metrics: {
//       value: '8 weeks',
//       label: 'Time to market'
//     }
//   }
// ];

// // Company logos (for trust badges)
// const companyLogos = [
//   { name: 'Bank Alfalah', logo: '/bank.jpg' },
//   { name: 'Engro', logo: '/engro.jpg' },
//   { name: 'Systems Limited', logo: '/office3.jpg' },
//   { name: 'Netsol', logo: '/office6.jpg' }
// ];

// export default function Testimonials() {
//   const sectionRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [mounted, setMounted] = useState(false);
  
//   // ✅ FIXED: Scroll hooks ko states mein store karo
//   const [scrollYProgress, setScrollYProgress] = useState(null);
//   const [y, setY] = useState(0);
//   const [opacity, setOpacity] = useState(1);
//   const [floatingY1, setFloatingY1] = useState(0);
//   const [floatingY2, setFloatingY2] = useState(0);
//   const [orbY, setOrbY] = useState(0);

//   useEffect(() => {
//     setMounted(true);
    
//     // ✅ Client-side par hi useScroll initialize karo
//     if (sectionRef.current) {
//       const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start end", "end start"]
//       });
      
//       setScrollYProgress(scrollYProgress);
      
//       // Transforms bhi client-side par
//       const unsubscribeY = scrollYProgress.onChange(v => {
//         setY(v * 100);
//         setOrbY(v * -50);
//         setFloatingY1(v * -100);
//         setFloatingY2(v * 100);
        
//         // Opacity calculation
//         if (v < 0.2) setOpacity(v / 0.2);
//         else if (v > 0.8) setOpacity(1 - ((v - 0.8) / 0.2));
//         else setOpacity(1);
//       });
      
//       return () => {
//         unsubscribeY();
//       };
//     }
//   }, []);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.6,
//         ease: [0.25, 0.1, 0.25, 1]
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { 
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     },
//     hover: {
//       y: -8,
//       transition: { duration: 0.2 }
//     }
//   };

//   // ✅ Server-side render
//   if (!mounted) {
//     return (
//       <section className="relative section-padding overflow-hidden bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
//         <div className="container-custom">
//           <div className="mb-16 text-center">
//             <div className="inline-block mb-6">
//               <span className="px-6 py-3 text-sm border rounded-full border-accent/30 bg-accent/5 text-accent">
//                 ⭐ CLIENT SUCCESS STORIES ⭐
//               </span>
//             </div>
//             <h2 className="mb-4 text-white heading-lg">
//               Trusted by <span className="text-accent">Karachi's</span> Finest
//             </h2>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative section-padding overflow-hidden bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]"
//     >
//       {/* Background Pattern - Subtle Grid */}
//       <div className="absolute inset-0 opacity-5">
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `linear-gradient(90deg, #C9A959 1px, transparent 1px), linear-gradient(0deg, #C9A959 1px, transparent 1px)`,
//             backgroundSize: '60px 60px'
//           }}
//         />
//       </div>

//       {/* Gradient Orbs */}
//       <motion.div 
//         style={{ y: y }}
//         className="absolute top-0 left-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.2, 0.3, 0.2]
//         }}
//         transition={{ duration: 8, repeat: Infinity }}
//       />
      
//       <motion.div 
//         style={{ y: orbY }}
//         className="absolute bottom-0 right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"
//         animate={{
//           scale: [1, 1.3, 1],
//           opacity: [0.1, 0.2, 0.1]
//         }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />

//       <div className="relative z-10 container-custom">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.5 }}
//           className="mb-16 text-center"
//         >
//           {/* Premium Badge */}
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             className="inline-block mb-6"
//           >
//             <span className="relative inline-block px-6 py-3 text-sm tracking-widest border rounded-full border-accent/30 bg-accent/5 backdrop-blur-sm text-accent">
//               ⭐ CLIENT SUCCESS STORIES ⭐
//             </span>
//           </motion.div>

//           <h2 className="mb-4 text-white heading-lg">
//             Trusted by <span className="gradient-text">Karachi's</span> Finest
//           </h2>
          
//           <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-400">
//             Don't just take our word for it. Here's what industry leaders say about working with us.
//           </p>
//         </motion.div>

//         {/* Trust Badges - Company Logos */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="flex flex-wrap items-center justify-center gap-8 mb-16"
//         >
//           {companyLogos.map((company, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -3 }}
//               className="transition-opacity opacity-50 hover:opacity-100"
//             >
//               <div className="relative w-24 h-8 transition-all grayscale hover:grayscale-0">
//                 <Image
//                   src={company.logo}
//                   alt={company.name}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Testimonials Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="grid grid-cols-1 gap-6 md:grid-cols-2"
//         >
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               variants={cardVariants}
//               whileHover="hover"
//               onHoverStart={() => setActiveIndex(index)}
//               className="relative p-8 transition-all duration-500 border group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 hover:border-accent/30"
//             >
//               {/* Quote Icon */}
//               <div className="absolute font-serif text-6xl top-6 right-6 text-accent/10">
//                 "
//               </div>

//               {/* Rating Stars */}
//               <div className="flex gap-1 mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <motion.svg
//                     key={i}
//                     initial={{ opacity: 0, scale: 0 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 + i * 0.05 }}
//                     className="w-5 h-5 fill-current text-accent"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </motion.svg>
//                 ))}
//               </div>

//               {/* Quote */}
//               <p className="relative z-10 mb-6 leading-relaxed text-gray-300">
//                 "{testimonial.quote}"
//               </p>

//               {/* Metrics Badge */}
//               <motion.div 
//                 className="inline-block px-3 py-1 mb-6 border rounded-full bg-accent/10 border-accent/20"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <span className="text-xs font-medium text-accent">
//                   {testimonial.metrics.value} {testimonial.metrics.label}
//                 </span>
//               </motion.div>

//               {/* Author Info */}
//               <div className="flex items-center gap-4">
//                 {/* Author Image */}
//                 <div className="relative w-16 h-16 overflow-hidden transition-colors border-2 rounded-full border-accent/20 group-hover:border-accent">
//                   <Image
//                     src={testimonial.image}
//                     alt={testimonial.author}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-medium text-white">
//                     {testimonial.author}
//                   </h4>
//                   <p className="text-sm text-accent">
//                     {testimonial.position}
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     {testimonial.company}
//                   </p>
//                   <p className="mt-1 text-xs text-gray-600">
//                     {testimonial.projectType}
//                   </p>
//                 </div>
//               </div>

//               {/* Bottom Accent Line */}
//               <motion.div 
//                 className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: '100%' }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//               />

//               {/* Hover Glow */}
//               <motion.div 
//                 className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100"
//                 style={{
//                   boxShadow: '0 0 30px rgba(201, 169, 89, 0.1)'
//                 }}
//               />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Stats Section */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-2 gap-4 mt-16 md:grid-cols-4"
//         >
//           {[
//             { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
//             { value: '50+', label: 'Projects Delivered', icon: '🚀' },
//             { value: '15+', label: 'Enterprise Clients', icon: '🏢' },
//             { value: '3+', label: 'Years in Karachi', icon: '📍' }
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -3 }}
//               className="p-6 text-center border bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10"
//             >
//               <div className="mb-2 text-3xl">{stat.icon}</div>
//               <div className="text-3xl font-display text-accent">{stat.value}</div>
//               <div className="text-sm text-gray-400">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="mt-16 text-center"
//         >
//           <div className="inline-flex items-center gap-2 mb-4 text-gray-400">
//             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//             <span className="text-sm">Join these satisfied clients</span>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="relative px-8 py-4 overflow-hidden bg-transparent border group border-accent text-accent"
//           >
//             <span className="relative z-10">Start Your Success Story</span>
//             <motion.div 
//               className="absolute inset-0 bg-accent"
//               initial={{ x: '-100%' }}
//               whileHover={{ x: 0 }}
//               transition={{ duration: 0.3 }}
//             />
//             <span className="relative z-10 ml-2 transition-colors group-hover:text-primary">→</span>
//           </motion.button>
//         </motion.div>

//         {/* Floating Elements */}
//         <motion.div
//           style={{ y: floatingY1 }}
//           className="absolute hidden top-40 right-10 xl:block"
//         >
//           <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
//             <div className="text-xs font-medium text-accent">4.9 ★</div>
//             <div className="text-[10px] text-gray-400">Average rating</div>
//           </div>
//         </motion.div>

//         <motion.div
//           style={{ y: floatingY2 }}
//           className="absolute hidden bottom-40 left-10 xl:block"
//         >
//           <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
//             <div className="text-xs font-medium text-accent">25+</div>
//             <div className="text-[10px] text-gray-400">Reviews on Clutch</div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }   








// // src/components/home/Testimonials.js
// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import Image from 'next/image';
// import { useRef, useState, useEffect } from 'react';

// // Realistic testimonials with actual Karachi companies
// const testimonials = [
//   {
//     id: 1,
//     quote: "ZENO transformed our legacy banking system into a modern digital platform. Their team's deep understanding of Karachi's financial sector and technical expertise is unmatched. We've seen a 200% increase in digital transactions.",
//     author: 'Kamran Ahmed',
//     position: 'Chief Technology Officer',
//     company: 'Bank Alfalah',
//     image: '/man.jpg',
//     rating: 5,
//     projectType: 'Digital Banking Transformation',
//     metrics: {
//       value: '200%',
//       label: 'Increase in transactions'
//     }
//   },
//   {
//     id: 2,
//     quote: "The e-commerce platform ZENO built for us revolutionized our business. From inventory management to customer experience, every detail was perfect. They're not just vendors, they're true technology partners.",
//     author: 'Fatima Sheikh',
//     position: 'Director of Digital',
//     company: 'Engro Digital',
//     image: '/women.jpg',
//     rating: 5,
//     projectType: 'E-commerce Platform',
//     metrics: {
//       value: '150%',
//       label: 'Sales increase'
//     }
//   },
//   {
//     id: 3,
//     quote: "Working with ZENO on our healthcare management system was seamless. Their agile approach and regular updates kept us in the loop. The system now serves 10+ hospitals across Karachi with 99.9% uptime.",
//     author: 'Dr. Asim Raza',
//     position: 'Head of Digital Health',
//     company: 'Karachi Medical',
//     image: '/man2.jpg',
//     rating: 5,
//     projectType: 'Healthcare System',
//     metrics: {
//       value: '99.9%',
//       label: 'System uptime'
//     }
//   },
//   {
//     id: 4,
//     quote: "As a startup, we needed a technical partner who could move fast. ZENO delivered our MVP in just 8 weeks and helped us secure our first round of funding. Their guidance was invaluable.",
//     author: 'Omar Farooq',
//     position: 'Founder & CEO',
//     company: 'TechVista',
//     image: '/man3.jpg',
//     rating: 5,
//     projectType: 'Startup MVP',
//     metrics: {
//       value: '8 weeks',
//       label: 'Time to market'
//     }
//   }
// ];

// // ✅ FIXED: Company logos as text badges instead of images
// const companyBadges = [
//   { name: 'Bank Alfalah', short: 'BA', color: 'from-[#C9A959] to-[#FFD700]' },
//   { name: 'Engro', short: 'EN', color: 'from-[#C9A959] to-[#DAA520]' },
//   { name: 'Systems Limited', short: 'SL', color: 'from-[#C9A959] to-[#B8860B]' },
//   { name: 'Netsol', short: 'NS', color: 'from-[#C9A959] to-[#CDA434]' }
// ];

// export default function Testimonials() {
//   const sectionRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [mounted, setMounted] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(0);
  
//   // ✅ FIXED: Scroll hooks ko states mein store karo
//   const [scrollYProgress, setScrollYProgress] = useState(null);
//   const [y, setY] = useState(0);
//   const [opacity, setOpacity] = useState(1);
//   const [floatingY1, setFloatingY1] = useState(0);
//   const [floatingY2, setFloatingY2] = useState(0);
//   const [orbY, setOrbY] = useState(0);

//   useEffect(() => {
//     setMounted(true);
//     setWindowWidth(window.innerWidth);
    
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
    
//     window.addEventListener('resize', handleResize, { passive: true });
    
//     // ✅ Client-side par hi useScroll initialize karo
//     if (sectionRef.current) {
//       const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start end", "end start"]
//       });
      
//       setScrollYProgress(scrollYProgress);
      
//       // Transforms bhi client-side par
//       const unsubscribeY = scrollYProgress.onChange(v => {
//         setY(v * 100);
//         setOrbY(v * -50);
//         setFloatingY1(v * -100);
//         setFloatingY2(v * 100);
        
//         // Opacity calculation
//         if (v < 0.2) setOpacity(v / 0.2);
//         else if (v > 0.8) setOpacity(1 - ((v - 0.8) / 0.2));
//         else setOpacity(1);
//       });
      
//       return () => {
//         unsubscribeY();
//         window.removeEventListener('resize', handleResize);
//       };
//     }
//   }, []);

//   // ✅ OPTIMIZED: Animation variants with responsive values
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: windowWidth < 768 ? 0.05 : 0.1,
//         delayChildren: windowWidth < 768 ? 0.1 : 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: windowWidth < 768 ? 15 : 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: windowWidth < 768 ? 0.4 : 0.6,
//         ease: [0.25, 0.1, 0.25, 1]
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { 
//         duration: windowWidth < 768 ? 0.3 : 0.5,
//         ease: "easeOut"
//       }
//     },
//     hover: {
//       y: windowWidth < 768 ? -3 : -5,
//       transition: { duration: 0.2 }
//     }
//   };

//   const goldGradients = {
//     light: 'from-[#C9A959] via-[#D4AF37] to-[#FFD700]',
//     medium: 'from-[#B8860B] via-[#C9A959] to-[#DAA520]'
//   };

//   const fontClasses = {
//     display: 'font-display tracking-[-0.02em]',
//     body: 'font-sans leading-relaxed'
//   };

//   // ✅ Server-side render
//   if (!mounted) {
//     return (
//       <section className="relative section-padding overflow-hidden bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
//         <div className="px-4 container-custom sm:px-6 lg:px-8">
//           <div className="mb-12 text-center md:mb-14 lg:mb-16">
//             <div className="inline-block mb-4 md:mb-5 lg:mb-6">
//               <span className="px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 text-[10px] md:text-xs lg:text-sm border rounded-full border-accent/30 bg-accent/5 text-accent">
//                 ⭐ CLIENT SUCCESS STORIES ⭐
//               </span>
//             </div>
//             <h2 className="px-4 mb-3 text-xl text-white md:mb-4 heading-lg md:text-2xl lg:text-3xl xl:text-4xl">
//               Trusted by <span className="text-accent">Karachi's</span> Finest
//             </h2>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative section-padding overflow-hidden bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]"
//     >
//       {/* ✅ OPTIMIZED: Background Pattern - Subtle Grid */}
//       <div className="absolute inset-0 opacity-5">
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `linear-gradient(90deg, #C9A959 1px, transparent 1px), linear-gradient(0deg, #C9A959 1px, transparent 1px)`,
//             backgroundSize: windowWidth < 768 ? '40px 40px' : '60px 60px'
//           }}
//         />
//       </div>

//       {/* ✅ OPTIMIZED: Gradient Orbs - responsive */}
//       <motion.div 
//         style={{ y: y }}
//         className="absolute top-0 left-10 md:left-20 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-accent/5 rounded-full blur-[60px] md:blur-[80px] lg:blur-[100px] xl:blur-[120px]"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.2, 0.3, 0.2]
//         }}
//         transition={{ duration: 8, repeat: Infinity }}
//       />
      
//       <motion.div 
//         style={{ y: orbY }}
//         className="absolute bottom-0 right-10 md:right-20 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-accent/5 rounded-full blur-[60px] md:blur-[80px] lg:blur-[100px] xl:blur-[120px]"
//         animate={{
//           scale: [1, 1.3, 1],
//           opacity: [0.1, 0.2, 0.1]
//         }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />

//       <div className="relative z-10 px-4 container-custom sm:px-6 lg:px-8">
//         {/* ✅ OPTIMIZED: Section Header - Responsive */}
//         <motion.div
//           initial={{ opacity: 0, y: windowWidth < 768 ? 15 : 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: windowWidth < 768 ? 0.4 : 0.5 }}
//           className="mb-10 text-center md:mb-12 lg:mb-16"
//         >
//           {/* Premium Badge */}
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             className="inline-block mb-4 md:mb-5 lg:mb-6"
//           >
//             <span className="relative inline-block px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 text-[10px] md:text-xs lg:text-sm tracking-widest border rounded-full border-accent/30 bg-accent/5 backdrop-blur-sm text-accent">
//               ⭐ CLIENT SUCCESS STORIES ⭐
//             </span>
//           </motion.div>

//           <h2 className="px-4 mb-3 text-xl text-white md:mb-4 heading-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
//             Trusted by <span className="gradient-text">Karachi's</span> Finest
//           </h2>
          
//           <p className="max-w-2xl px-4 mx-auto text-sm leading-relaxed text-gray-400 md:max-w-3xl md:text-base lg:text-lg xl:text-xl">
//             Don't just take our word for it. Here's what industry leaders say about working with us.
//           </p>
//         </motion.div>

//         {/* ✅ FIXED: Trust Badges - As clean text badges instead of images */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="flex flex-wrap items-center justify-center gap-3 mb-10 md:gap-4 lg:gap-5 xl:gap-6 md:mb-12 lg:mb-16"
//         >
//           {companyBadges.map((company, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -2, scale: 1.02 }}
//               className="group"
//             >
//               <div className="relative">
//                 <div className={`px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 bg-gradient-to-r ${company.color} bg-opacity-10 rounded-lg border border-accent/20 backdrop-blur-sm`}>
//                   <span className={`text-xs md:text-sm lg:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r ${company.color}`}>
//                     {company.name}
//                   </span>
//                 </div>
//                 {/* Glow effect on hover */}
//                 <motion.div 
//                   className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 blur-md bg-gradient-to-r from-accent to-transparent"
//                   transition={{ duration: 0.2 }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* ✅ OPTIMIZED: Testimonials Grid - Responsive */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-30px" }}
//           className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6"
//         >
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               variants={cardVariants}
//               whileHover="hover"
//               onHoverStart={() => setActiveIndex(index)}
//               className="relative p-4 transition-all duration-500 border rounded-lg md:p-5 lg:p-6 xl:p-8 group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 hover:border-accent/30 md:rounded-xl"
//             >
//               {/* Quote Icon - responsive */}
//               <div className="absolute font-serif text-4xl md:text-5xl lg:text-6xl top-3 md:top-4 lg:top-6 right-3 md:right-4 lg:right-6 text-accent/10">
//                 "
//               </div>

//               {/* Rating Stars - responsive */}
//               <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <motion.svg
//                     key={i}
//                     initial={{ opacity: 0, scale: 0 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 + i * 0.03 }}
//                     className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 fill-current text-accent"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </motion.svg>
//                 ))}
//               </div>

//               {/* Quote - responsive */}
//               <p className="relative z-10 mb-4 text-xs leading-relaxed text-gray-300 md:mb-5 lg:mb-6 md:text-sm lg:text-base line-clamp-4 md:line-clamp-5">
//                 "{testimonial.quote}"
//               </p>

//               {/* Metrics Badge - responsive */}
//               <motion.div 
//                 className="inline-block px-2 md:px-2.5 lg:px-3 py-0.5 md:py-1 mb-4 md:mb-5 border rounded-full bg-accent/10 border-accent/20"
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <span className="text-[8px] md:text-[10px] lg:text-xs font-medium text-accent">
//                   {testimonial.metrics.value} {testimonial.metrics.label}
//                 </span>
//               </motion.div>

//               {/* Author Info - responsive */}
//               <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
//                 {/* Author Image */}
//                 <div className="relative flex-shrink-0 w-10 h-10 overflow-hidden transition-colors border-2 rounded-full md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 border-accent/20 group-hover:border-accent">
//                   <Image
//                     src={testimonial.image}
//                     alt={testimonial.author}
//                     fill
//                     sizes="(max-width: 768px) 40px, (max-width: 1200px) 48px, 64px"
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>

//                 <div className="min-w-0">
//                   <h4 className="text-sm font-medium text-white truncate md:text-base lg:text-lg">
//                     {testimonial.author}
//                   </h4>
//                   <p className="text-[10px] md:text-xs lg:text-sm text-accent truncate">
//                     {testimonial.position}
//                   </p>
//                   <p className="text-[8px] md:text-[10px] lg:text-xs text-gray-500 truncate">
//                     {testimonial.company}
//                   </p>
//                   <p className="mt-0.5 text-[8px] md:text-[10px] text-gray-600 truncate hidden sm:block">
//                     {testimonial.projectType}
//                   </p>
//                 </div>
//               </div>

//               {/* Bottom Accent Line */}
//               <motion.div 
//                 className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: '100%' }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//               />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* ✅ OPTIMIZED: Stats Section - Responsive */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-2 gap-3 mt-10 md:grid-cols-4 md:gap-4 md:mt-12 lg:mt-16"
//         >
//           {[
//             { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
//             { value: '50+', label: 'Projects Delivered', icon: '🚀' },
//             { value: '15+', label: 'Enterprise Clients', icon: '🏢' },
//             { value: '3+', label: 'Years in Karachi', icon: '📍' }
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -2 }}
//               className="p-3 text-center border rounded-lg md:p-4 lg:p-5 xl:p-6 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10"
//             >
//               <div className="mb-1 text-xl md:mb-2 md:text-2xl lg:text-3xl">{stat.icon}</div>
//               <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-display text-accent">{stat.value}</div>
//               <div className="text-[10px] md:text-xs lg:text-sm text-gray-400">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* ✅ OPTIMIZED: CTA Section - Responsive */}
//         <motion.div
//           initial={{ opacity: 0, y: windowWidth < 768 ? 15 : 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: windowWidth < 768 ? 0.4 : 0.5, delay: 0.2 }}
//           className="mt-10 text-center md:mt-12 lg:mt-16"
//         >
//           <div className="inline-flex items-center gap-1 mb-3 text-gray-400 md:gap-2 md:mb-4">
//             <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
//             <span className="text-[10px] md:text-xs lg:text-sm">Join these satisfied clients</span>
//           </div>

//           <motion.button
//             whileHover={{ scale: windowWidth < 768 ? 1.01 : 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="relative px-6 md:px-7 lg:px-8 py-3 md:py-3.5 lg:py-4 overflow-hidden bg-transparent border group border-accent text-accent text-sm md:text-base rounded-lg"
//           >
//             <span className="relative z-10">Start Your Success Story</span>
//             <motion.div 
//               className="absolute inset-0 bg-accent"
//               initial={{ x: '-100%' }}
//               whileHover={{ x: 0 }}
//               transition={{ duration: 0.3 }}
//             />
//             <span className="relative z-10 ml-1 transition-colors md:ml-2 group-hover:text-primary">→</span>
//           </motion.button>
//         </motion.div>

//         {/* ✅ OPTIMIZED: Floating Elements - hidden on mobile/tablet */}
//         {windowWidth >= 1280 && (
//           <>
//             <motion.div
//               style={{ y: floatingY1 }}
//               className="absolute hidden top-40 right-10 xl:block"
//             >
//               <div className="p-2 border rounded-lg md:p-3 bg-black/50 backdrop-blur-sm border-accent/20">
//                 <div className="text-[10px] md:text-xs font-medium text-accent">4.9 ★</div>
//                 <div className="text-[8px] md:text-[10px] text-gray-400">Average rating</div>
//               </div>
//             </motion.div>

//             <motion.div
//               style={{ y: floatingY2 }}
//               className="absolute hidden bottom-40 left-10 xl:block"
//             >
//               <div className="p-2 border rounded-lg md:p-3 bg-black/50 backdrop-blur-sm border-accent/20">
//                 <div className="text-[10px] md:text-xs font-medium text-accent">25+</div>
//                 <div className="text-[8px] md:text-[10px] text-gray-400">Reviews on Clutch</div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// }  







// src/components/home/Testimonials.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

// Realistic testimonials with actual Karachi companies
const testimonials = [
  {
    id: 1,
    quote: "ZENO transformed our legacy banking system into a modern digital platform. Their team's deep understanding of Karachi's financial sector and technical expertise is unmatched. We've seen a 200% increase in digital transactions.",
    author: 'Kamran Ahmed',
    position: 'Chief Technology Officer',
    company: 'Bank Alfalah',
    image: '/man.jpg',
    rating: 5,
    projectType: 'Digital Banking Transformation',
    metrics: {
      value: '200%',
      label: 'Increase in transactions'
    }
  },
  {
    id: 2,
    quote: "The e-commerce platform ZENO built for us revolutionized our business. From inventory management to customer experience, every detail was perfect. They're not just vendors, they're true technology partners.",
    author: 'Fatima Sheikh',
    position: 'Director of Digital',
    company: 'Engro Digital',
    image: '/women.jpg',
    rating: 5,
    projectType: 'E-commerce Platform',
    metrics: {
      value: '150%',
      label: 'Sales increase'
    }
  },
  {
    id: 3,
    quote: "Working with ZENO on our healthcare management system was seamless. Their agile approach and regular updates kept us in the loop. The system now serves 10+ hospitals across Karachi with 99.9% uptime.",
    author: 'Dr. Asim Raza',
    position: 'Head of Digital Health',
    company: 'Karachi Medical',
    image: '/man2.jpg',
    rating: 5,
    projectType: 'Healthcare System',
    metrics: {
      value: '99.9%',
      label: 'System uptime'
    }
  },
  {
    id: 4,
    quote: "As a startup, we needed a technical partner who could move fast. ZENO delivered our MVP in just 8 weeks and helped us secure our first round of funding. Their guidance was invaluable.",
    author: 'Omar Farooq',
    position: 'Founder & CEO',
    company: 'TechVista',
    image: '/man3.jpg',
    rating: 5,
    projectType: 'Startup MVP',
    metrics: {
      value: '8 weeks',
      label: 'Time to market'
    }
  }
];

// Simple company names
const companies = ['Bank Alfalah', 'Engro', 'Systems Limited', 'Netsol'];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  
  const [scrollYProgress, setScrollYProgress] = useState(null);
  const [y, setY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [floatingY1, setFloatingY1] = useState(0);
  const [floatingY2, setFloatingY2] = useState(0);
  const [orbY, setOrbY] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    if (sectionRef.current) {
      const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
      });
      
      setScrollYProgress(scrollYProgress);
      
      const unsubscribeY = scrollYProgress.onChange(v => {
        setY(v * 100);
        setOrbY(v * -50);
        setFloatingY1(v * -100);
        setFloatingY2(v * 100);
        
        if (v < 0.2) setOpacity(v / 0.2);
        else if (v > 0.8) setOpacity(1 - ((v - 0.8) / 0.2));
        else setOpacity(1);
      });
      
      return () => {
        unsubscribeY();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: windowWidth < 768 ? 0.05 : 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: windowWidth < 768 ? 15 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: windowWidth < 768 ? 0.4 : 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const fontClasses = {
    display: 'font-display tracking-[-0.02em]',
    body: 'font-sans leading-relaxed'
  };

  if (!mounted) {
    return (
      <section className="relative section-padding overflow-hidden bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
        <div className="px-4 container-custom">
          <div className="mb-16 text-center">
            <h2 className="text-white heading-lg">Loading testimonials...</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      className="relative section-padding overflow-hidden bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]"
    >
      <div className="relative z-10 px-4 container-custom sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl text-white mb-3 ${fontClasses.display}`}>
            Trusted by <span className="text-accent">Karachi's</span> Finest
          </h2>
          
          <p className={`text-sm md:text-base text-gray-400 max-w-2xl mx-auto ${fontClasses.body}`}>
            What industry leaders say about working with us.
          </p>
        </motion.div>

        {/* Simple Company Names */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="px-4 py-2 text-sm text-gray-400 border rounded-full border-white/10"
            >
              {company}
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              onHoverStart={() => setActiveIndex(index)}
              className="p-5 transition-colors border rounded-lg border-white/10 bg-white/5 hover:border-accent/30"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-sm text-accent">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className={`text-sm text-gray-300 mb-4 line-clamp-4 ${fontClasses.body}`}>
                "{testimonial.quote}"
              </p>

              {/* Metrics Badge */}
              <div className="mb-3">
                <span className="text-xs text-accent">
                  {testimonial.metrics.value} {testimonial.metrics.label}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0 w-10 h-10 overflow-hidden border rounded-full border-accent/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-accent">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mt-12 md:grid-cols-4">
          {[
            { value: '98%', label: 'Satisfaction', icon: '⭐' },
            { value: '50+', label: 'Projects', icon: '🚀' },
            { value: '15+', label: 'Clients', icon: '🏢' },
            { value: '3+', label: 'Years', icon: '📍' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-3 text-center border rounded-lg border-white/10 bg-white/5"
            >
              <div className="mb-1 text-xl">{stat.icon}</div>
              <div className="text-lg font-display text-accent">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}