

// // src/components/home/WorkProcess.js
// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';

// const processSteps = [
//   {
//     id: 1,
//     phase: '01',
//     title: 'Discovery & Strategy',
//     shortDesc: 'Understanding your vision',
//     description: 'We dive deep into your business goals, user needs, and technical requirements. Our team conducts stakeholder interviews, market research, and competitive analysis to ensure we build the right solution.',
//     outcomes: [
//       'Business requirements documented',
//       'User personas created',
//       'Technical feasibility analysis',
//       'Project roadmap defined'
//     ],
//     duration: '1-2 weeks',
//     icon: '🔍',
//     gradient: 'from-[#C9A959] to-[#FFD700]',
//     color: '#C9A959'
//   },
//   {
//     id: 2,
//     phase: '02',
//     title: 'Architecture & Design',
//     shortDesc: 'Planning for scale',
//     description: 'Our architects design scalable, secure solutions tailored to your needs. We create system architecture, database design, and UI/UX wireframes that set the foundation for success.',
//     outcomes: [
//       'System architecture designed',
//       'Database schema created',
//       'UI/UX wireframes approved',
//       'Technology stack finalized'
//     ],
//     duration: '2-3 weeks',
//     icon: '🏗️',
//     gradient: 'from-[#C9A959] to-[#DAA520]',
//     color: '#C9A959'
//   },
//   {
//     id: 3,
//     phase: '03',
//     title: 'Agile Development',
//     shortDesc: 'Building with precision',
//     description: 'We follow agile methodology with 2-week sprints, delivering working software incrementally. Regular demos and transparent communication keep you involved throughout.',
//     outcomes: [
//       'Sprint planning & execution',
//       'Daily standups & updates',
//       'Continuous integration',
//       'Regular client demos'
//     ],
//     duration: '4-12 weeks',
//     icon: '⚡',
//     gradient: 'from-[#C9A959] to-[#B8860B]',
//     color: '#C9A959'
//   },
//   {
//     id: 4,
//     phase: '04',
//     title: 'Testing & QA',
//     shortDesc: 'Ensuring perfection',
//     description: 'Rigorous testing at every level - unit tests, integration tests, and user acceptance testing. We ensure your product is bug-free and performs flawlessly.',
//     outcomes: [
//       'Automated testing suite',
//       'Performance optimization',
//       'Security audit completed',
//       'UAT sign-off obtained'
//     ],
//     duration: '2-3 weeks',
//     icon: '✅',
//     gradient: 'from-[#C9A959] to-[#CDA434]',
//     color: '#C9A959'
//   },
//   {
//     id: 5,
//     phase: '05',
//     title: 'Launch & Scale',
//     shortDesc: 'Going live successfully',
//     description: 'We ensure smooth deployment with zero downtime. Post-launch, we provide ongoing support, monitoring, and scaling as your user base grows.',
//     outcomes: [
//       'Production deployment',
//       'Performance monitoring',
//       '24/7 support setup',
//       'Scale planning ready'
//     ],
//     duration: '1-2 weeks',
//     icon: '🚀',
//     gradient: 'from-[#C9A959] to-[#FFD700]',
//     color: '#C9A959'
//   }
// ];

// const methodologyHighlights = [
//   { label: 'Agile', value: '100%', icon: '🔄' },
//   { label: 'On-time Delivery', value: '95%', icon: '⏱️' },
//   { label: 'Client Satisfaction', value: '98%', icon: '⭐' },
//   { label: 'Projects Completed', value: '50+', icon: '✅' }
// ];

// export default function WorkProcess() {
//   const sectionRef = useRef(null);
//   const [mounted, setMounted] = useState(false);
  
//   useEffect(() => {
//     setMounted(true);
//   }, []);
  
//   // ✅ FIXED: mounted condition ke saath
//   const { scrollYProgress } = useScroll({
//     target: mounted ? sectionRef : undefined,
//     offset: ["start end", "end start"]
//   });

//   const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
//   const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

//   // Fast animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
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
//         duration: 0.5, // Fast but smooth
//         ease: [0.25, 0.1, 0.25, 1] // Custom easing for snappy feel
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { 
//         duration: 0.4,
//         ease: "easeOut"
//       }
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
//                 ⚡ PROVEN METHODOLOGY ⚡
//               </span>
//             </div>
//             <h2 className="mb-4 text-white heading-lg">
//               From <span className="text-accent">Concept</span> to Launch
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
//       {/* Background Pattern - Modern Dots */}
//       <div className="absolute inset-0 opacity-5">
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
//             backgroundSize: '40px 40px'
//           }}
//         />
//       </div>

//       {/* Animated Background Lines */}
//       <motion.div 
//         style={{ y: y1 }}
//         className="absolute left-0 w-full h-px top-20 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
//       />
//       <motion.div 
//         style={{ y: y2 }}
//         className="absolute left-0 w-full h-px bottom-20 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
//       />

//       {/* Gradient Orbs */}
//       <motion.div 
//         style={{ y: y1 }}
//         className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.2, 0.3, 0.2]
//         }}
//         transition={{ duration: 7, repeat: Infinity }}
//       />
      
//       <motion.div 
//         style={{ y: y2 }}
//         className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"
//         animate={{
//           scale: [1, 1.3, 1],
//           opacity: [0.1, 0.2, 0.1]
//         }}
//         transition={{ duration: 8, repeat: Infinity }}
//       />

//       <div className="relative z-10 container-custom">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="mb-16 text-center"
//         >
//           {/* Premium Badge with Fast Scale */}
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             className="inline-block mb-6"
//           >
//             <span className="relative inline-block px-6 py-3 text-sm tracking-widest border rounded-full border-accent/30 bg-accent/5 backdrop-blur-sm text-accent">
//               ⚡ PROVEN METHODOLOGY ⚡
//             </span>
//           </motion.div>

//           <h2 className="mb-4 text-white heading-lg">
//             From <span className="gradient-text">Concept</span> to Launch
//           </h2>
          
//           <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-400">
//             A battle-tested process that has delivered <span className="text-accent">50+ successful projects</span> for enterprises across Karachi.
//           </p>
//         </motion.div>

//         {/* Methodology Stats - Fast Counters */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-2 gap-4 mb-16 md:grid-cols-4"
//         >
//           {methodologyHighlights.map((item, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{ scale: 1.02, y: -2 }}
//               className="p-4 text-center border bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 group"
//             >
//               <div className="mb-2 text-3xl transition-transform duration-200 group-hover:scale-110">
//                 {item.icon}
//               </div>
//               <motion.div
//                 initial={{ scale: 0.5 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
//                 className="text-2xl font-display text-accent"
//               >
//                 {item.value}
//               </motion.div>
//               <div className="mt-1 text-xs text-gray-400">
//                 {item.label}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Process Timeline - Modern Horizontal Design */}
//         <div className="relative">
//           {/* Progress Line */}
//           <motion.div 
//             className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20"
//             initial={{ scaleX: 0, originX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 0.3 }}
//           />

//           {/* Steps Grid */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-50px" }}
//             className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5"
//           >
//             {processSteps.map((step, index) => (
//               <motion.div
//                 key={step.id}
//                 variants={itemVariants}
//                 whileHover={{ y: -5 }}
//                 className="relative group"
//               >
//                 <div className="relative pt-16">
//                   {/* Step Number - Floating Above */}
//                   <motion.div 
//                     className="absolute top-0 z-20 transform -translate-x-1/2 left-1/2"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     <div className="relative">
//                       <div className="flex items-center justify-center w-12 h-12 border-2 rounded-full bg-primary border-accent">
//                         <span className="text-lg text-accent font-display">{step.phase}</span>
//                       </div>
//                       {/* Pulsing Ring */}
//                       <motion.div 
//                         className="absolute inset-0 border-2 rounded-full border-accent"
//                         animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                       />
//                     </div>
//                   </motion.div>

//                   {/* Content Card */}
//                   <div className="p-6 pt-8 transition-all duration-300 border bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 group-hover:border-accent/30">
//                     {/* Icon */}
//                     <div className="mb-3 text-3xl transition-transform duration-200 group-hover:scale-110">
//                       {step.icon}
//                     </div>

//                     {/* Title */}
//                     <h3 className="mb-1 text-lg text-white font-display">
//                       {step.title}
//                     </h3>
                    
//                     <p className="mb-3 text-xs text-accent">
//                       {step.shortDesc}
//                     </p>

//                     {/* Duration Badge */}
//                     <div className="inline-block px-2 py-1 mb-3 text-xs border rounded bg-accent/10 border-accent/20 text-accent">
//                       {step.duration}
//                     </div>

//                     {/* Description - Hidden by default, shows on hover */}
//                     <motion.div 
//                       initial={{ opacity: 0, height: 0 }}
//                       whileHover={{ opacity: 1, height: 'auto' }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="mb-3 text-xs leading-relaxed text-gray-400">
//                         {step.description}
//                       </p>

//                       {/* Outcomes */}
//                       <div className="space-y-1">
//                         {step.outcomes.map((outcome, idx) => (
//                           <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, x: -10 }}
//                             whileHover={{ opacity: 1, x: 0 }}
//                             transition={{ delay: idx * 0.03 }}
//                             className="flex items-center gap-1 text-xs"
//                           >
//                             <span className="text-accent">✦</span>
//                             <span className="text-gray-500">{outcome}</span>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </motion.div>

//                     {/* Progress Indicator */}
//                     <motion.div 
//                       className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-transparent"
//                       initial={{ width: 0 }}
//                       whileInView={{ width: '100%' }}
//                       viewport={{ once: true }}
//                       transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
//                     />
//                   </div>
//                 </div>

//                 {/* Connector Line (except last) */}
//                 {index < processSteps.length - 1 && (
//                   <motion.div 
//                     className="absolute top-12 -right-2 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent hidden lg:block"
//                     initial={{ scaleX: 0, originX: 0 }}
//                     whileInView={{ scaleX: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1, duration: 0.4 }}
//                   />
//                 )}
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Process Benefits */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-3"
//         >
//           {[
//             {
//               icon: '🎯',
//               title: 'Zero Surprises',
//               desc: 'Transparent communication at every step'
//             },
//             {
//               icon: '⚡',
//               title: 'Fast Delivery',
//               desc: 'Agile sprints with regular demos'
//             },
//             {
//               icon: '🛡️',
//               title: 'Quality Assured',
//               desc: 'Rigorous testing at each phase'
//             }
//           ].map((benefit, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{ y: -3 }}
//               className="p-6 text-center border bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 group"
//             >
//               <motion.div
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
//                 className="mb-3 text-4xl"
//               >
//                 {benefit.icon}
//               </motion.div>
//               <h4 className="mb-2 font-medium text-white">{benefit.title}</h4>
//               <p className="text-xs text-gray-400">{benefit.desc}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA Mini */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4, delay: 0.3 }}
//           className="mt-16 text-center"
//         >
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="relative px-8 py-3 overflow-hidden bg-transparent border group border-accent text-accent"
//           >
//             <span className="relative z-10 text-sm tracking-wider">DISCUSS YOUR PROJECT</span>
//             <motion.div 
//               className="absolute inset-0 bg-accent"
//               initial={{ x: '-100%' }}
//               whileHover={{ x: 0 }}
//               transition={{ duration: 0.3 }}
//             />
//             <span className="relative z-10 ml-2 transition-colors group-hover:text-primary">→</span>
//           </motion.button>
          
//           <p className="mt-4 text-xs text-gray-500">
//             Average project delivery: <span className="text-accent">8-12 weeks</span>
//           </p>
//         </motion.div>

//         {/* Floating Stats */}
//         <motion.div
//           style={{ y: y1, opacity }}
//           className="absolute hidden top-40 right-10 xl:block"
//         >
//           <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
//             <div className="text-xs font-medium text-accent">50+ Projects</div>
//             <div className="text-[10px] text-gray-500">Successfully delivered</div>
//           </div>
//         </motion.div>

//         <motion.div
//           style={{ y: y2, opacity }}
//           className="absolute hidden bottom-40 left-10 xl:block"
//         >
//           <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
//             <div className="text-xs font-medium text-accent">98% Satisfaction</div>
//             <div className="text-[10px] text-gray-500">Client retention rate</div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }  








// src/components/home/WorkProcess.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const processSteps = [
  {
    id: 1,
    phase: '01',
    title: 'Discovery & Strategy',
    shortDesc: 'Understanding your vision',
    description: 'We dive deep into your business goals, user needs, and technical requirements. Our team conducts stakeholder interviews, market research, and competitive analysis to ensure we build the right solution.',
    outcomes: [
      'Business requirements documented',
      'User personas created',
      'Technical feasibility analysis',
      'Project roadmap defined'
    ],
    duration: '1-2 weeks',
    icon: '🔍',
    gradient: 'from-[#C9A959] to-[#FFD700]',
    color: '#C9A959'
  },
  {
    id: 2,
    phase: '02',
    title: 'Architecture & Design',
    shortDesc: 'Planning for scale',
    description: 'Our architects design scalable, secure solutions tailored to your needs. We create system architecture, database design, and UI/UX wireframes that set the foundation for success.',
    outcomes: [
      'System architecture designed',
      'Database schema created',
      'UI/UX wireframes approved',
      'Technology stack finalized'
    ],
    duration: '2-3 weeks',
    icon: '🏗️',
    gradient: 'from-[#C9A959] to-[#DAA520]',
    color: '#C9A959'
  },
  {
    id: 3,
    phase: '03',
    title: 'Agile Development',
    shortDesc: 'Building with precision',
    description: 'We follow agile methodology with 2-week sprints, delivering working software incrementally. Regular demos and transparent communication keep you involved throughout.',
    outcomes: [
      'Sprint planning & execution',
      'Daily standups & updates',
      'Continuous integration',
      'Regular client demos'
    ],
    duration: '4-12 weeks',
    icon: '⚡',
    gradient: 'from-[#C9A959] to-[#B8860B]',
    color: '#C9A959'
  },
  {
    id: 4,
    phase: '04',
    title: 'Testing & QA',
    shortDesc: 'Ensuring perfection',
    description: 'Rigorous testing at every level - unit tests, integration tests, and user acceptance testing. We ensure your product is bug-free and performs flawlessly.',
    outcomes: [
      'Automated testing suite',
      'Performance optimization',
      'Security audit completed',
      'UAT sign-off obtained'
    ],
    duration: '2-3 weeks',
    icon: '✅',
    gradient: 'from-[#C9A959] to-[#CDA434]',
    color: '#C9A959'
  },
  {
    id: 5,
    phase: '05',
    title: 'Launch & Scale',
    shortDesc: 'Going live successfully',
    description: 'We ensure smooth deployment with zero downtime. Post-launch, we provide ongoing support, monitoring, and scaling as your user base grows.',
    outcomes: [
      'Production deployment',
      'Performance monitoring',
      '24/7 support setup',
      'Scale planning ready'
    ],
    duration: '1-2 weeks',
    icon: '🚀',
    gradient: 'from-[#C9A959] to-[#FFD700]',
    color: '#C9A959'
  }
];

const methodologyHighlights = [
  { label: 'Agile', value: '100%', icon: '🔄' },
  { label: 'On-time Delivery', value: '95%', icon: '⏱️' },
  { label: 'Client Satisfaction', value: '98%', icon: '⭐' },
  { label: 'Projects Completed', value: '50+', icon: '✅' }
];

export default function WorkProcess() {
  const sectionRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  
  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // ✅ FIXED: mounted condition ke saath
  const { scrollYProgress } = useScroll({
    target: mounted ? sectionRef : undefined,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Responsive animation variants
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
        duration: windowWidth < 768 ? 0.4 : 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: windowWidth < 768 ? 0.3 : 0.4,
        ease: "easeOut"
      }
    }
  };

  // ✅ Server-side render
  if (!mounted) {
    return (
      <section className="relative section-padding overflow-hidden bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
        <div className="px-4 container-custom sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-14 lg:mb-16">
            <div className="inline-block mb-4 md:mb-5 lg:mb-6">
              <span className="px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 text-[10px] md:text-xs lg:text-sm border rounded-full border-accent/30 bg-accent/5 text-accent">
                ⚡ PROVEN METHODOLOGY ⚡
              </span>
            </div>
            <h2 className="mb-3 text-xl text-white md:mb-4 heading-lg md:text-2xl lg:text-3xl xl:text-4xl">
              From <span className="text-accent">Concept</span> to Launch
            </h2>
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
      {/* Background Pattern - responsive size */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
            backgroundSize: windowWidth < 768 ? '30px 30px' : '40px 40px'
          }}
        />
      </div>

      {/* Animated Background Lines */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute left-0 w-full h-px top-10 md:top-16 lg:top-20 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute left-0 w-full h-px bottom-10 md:bottom-16 lg:bottom-20 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
      />

      {/* Gradient Orbs - responsive sizes */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute -top-20 md:-top-30 lg:-top-40 -right-20 md:-right-30 lg:-right-40 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-accent/5 rounded-full blur-[60px] md:blur-[80px] lg:blur-[100px] xl:blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      
      <motion.div 
        style={{ y: y2 }}
        className="absolute -bottom-20 md:-bottom-30 lg:-bottom-40 -left-20 md:-left-30 lg:-left-40 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-accent/5 rounded-full blur-[60px] md:blur-[80px] lg:blur-[100px] xl:blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 px-4 container-custom sm:px-6 lg:px-8">
        {/* Section Header - Fully Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: windowWidth < 768 ? 0.4 : 0.5 }}
          className="mb-10 text-center md:mb-12 lg:mb-16"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-block mb-4 md:mb-5 lg:mb-6"
          >
            <span className="relative inline-block px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 text-[10px] md:text-xs lg:text-sm tracking-widest border rounded-full border-accent/30 bg-accent/5 backdrop-blur-sm text-accent">
              ⚡ PROVEN METHODOLOGY ⚡
            </span>
          </motion.div>

          <h2 className="mb-3 text-xl text-white md:mb-4 heading-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            From <span className="gradient-text">Concept</span> to Launch
          </h2>
          
          <p className="max-w-2xl px-4 mx-auto text-sm leading-relaxed text-gray-400 md:max-w-3xl md:text-base lg:text-lg xl:text-xl">
            A battle-tested process that has delivered <span className="text-accent">50+ successful projects</span> for enterprises across Karachi.
          </p>
        </motion.div>

        {/* Methodology Stats - Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4 md:gap-4 lg:gap-5 xl:gap-6 md:mb-12 lg:mb-16"
        >
          {methodologyHighlights.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: windowWidth < 768 ? 1.01 : 1.02, y: windowWidth < 768 ? -1 : -2 }}
              className="p-3 text-center transition-all duration-300 border rounded-lg md:p-4 lg:p-5 xl:p-6 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 hover:border-accent/30"
            >
              <div className="mb-1 text-xl transition-transform duration-200 md:mb-2 md:text-2xl lg:text-3xl xl:text-4xl group-hover:scale-110">
                {item.icon}
              </div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-display text-accent"
              >
                {item.value}
              </motion.div>
              <div className="mt-0.5 md:mt-1 text-[10px] md:text-xs lg:text-sm text-gray-400">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Timeline - Fully Responsive */}
        <div className="relative">
          {/* Progress Line - hidden on mobile */}
          {windowWidth >= 1024 && (
            <motion.div 
              className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          )}

          {/* Steps Grid - Responsive */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 md:gap-4 lg:gap-5 xl:gap-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                whileHover={{ y: windowWidth < 768 ? -2 : -5 }}
                className="relative group"
              >
                <div className="relative pt-12 md:pt-14 lg:pt-16">
                  {/* Step Number - Responsive */}
                  <motion.div 
                    className="absolute top-0 z-20 transform -translate-x-1/2 left-1/2"
                    whileHover={{ scale: windowWidth < 768 ? 1.05 : 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="relative">
                      <div className="flex items-center justify-center w-10 h-10 border-2 rounded-full md:w-11 md:h-11 lg:w-12 lg:h-12 bg-primary border-accent">
                        <span className="text-sm md:text-base lg:text-lg text-accent font-display">{step.phase}</span>
                      </div>
                      {/* Pulsing Ring - disabled on mobile */}
                      {windowWidth >= 768 && (
                        <motion.div 
                          className="absolute inset-0 border-2 rounded-full border-accent"
                          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* Content Card - Responsive */}
                  <div className="p-4 pt-8 transition-all duration-300 border rounded-lg md:p-5 lg:p-6 xl:p-8 md:pt-9 lg:pt-10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 hover:border-accent/30">
                    {/* Icon */}
                    <div className="mb-2 text-2xl transition-transform duration-200 md:mb-3 md:text-3xl lg:text-4xl group-hover:scale-110">
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="mb-1 text-sm text-white md:text-base lg:text-lg xl:text-xl font-display">
                      {step.title}
                    </h3>
                    
                    <p className="mb-2 md:mb-3 text-[10px] md:text-xs lg:text-sm text-accent">
                      {step.shortDesc}
                    </p>

                    {/* Duration Badge */}
                    <div className="inline-block px-1.5 md:px-2 py-0.5 md:py-1 mb-2 md:mb-3 text-[8px] md:text-[10px] lg:text-xs border rounded bg-accent/10 border-accent/20 text-accent">
                      {step.duration}
                    </div>

                    {/* Description - Responsive */}
                    <p className="text-[10px] md:text-xs lg:text-sm text-gray-400 mb-2 md:mb-3 line-clamp-2 md:line-clamp-3">
                      {step.description}
                    </p>

                    {/* Outcomes - Responsive */}
                    <div className="space-y-0.5 md:space-y-1">
                      {step.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-1 text-[8px] md:text-[10px] lg:text-xs">
                          <span className="flex-shrink-0 text-accent">✦</span>
                          <span className="text-gray-500 truncate">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector Line - hidden on mobile/tablet */}
                {index < processSteps.length - 1 && windowWidth >= 1024 && (
                  <motion.div 
                    className="absolute top-12 -right-2 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Process Benefits - Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-3 mt-10 sm:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-5 xl:gap-6 md:mt-12 lg:mt-16"
        >
          {[
            {
              icon: '🎯',
              title: 'Zero Surprises',
              desc: 'Transparent communication at every step'
            },
            {
              icon: '⚡',
              title: 'Fast Delivery',
              desc: 'Agile sprints with regular demos'
            },
            {
              icon: '🛡️',
              title: 'Quality Assured',
              desc: 'Rigorous testing at each phase'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: windowWidth < 768 ? -1 : -3 }}
              className="p-4 text-center transition-all duration-300 border rounded-lg md:p-5 lg:p-6 xl:p-8 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 hover:border-accent/30"
            >
              <motion.div
                animate={{ scale: windowWidth >= 768 ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 2, repeat: windowWidth >= 768 ? Infinity : 0, delay: index * 0.3 }}
                className="mb-2 text-2xl md:mb-3 md:text-3xl lg:text-4xl xl:text-5xl"
              >
                {benefit.icon}
              </motion.div>
              <h4 className="mb-1 text-sm font-medium text-white md:mb-2 md:text-base lg:text-lg xl:text-xl">{benefit.title}</h4>
              <p className="text-[10px] md:text-xs lg:text-sm text-gray-400">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: windowWidth < 768 ? 0.3 : 0.4, delay: 0.2 }}
          className="mt-10 text-center md:mt-12 lg:mt-16"
        >
          <motion.button
            whileHover={{ scale: windowWidth < 768 ? 1.01 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-5 md:px-6 lg:px-7 xl:px-8 py-2.5 md:py-3 lg:py-4 overflow-hidden bg-transparent border group border-accent text-accent text-xs md:text-sm lg:text-base rounded-lg"
          >
            <span className="relative z-10 tracking-wider">DISCUSS YOUR PROJECT</span>
            <motion.div 
              className="absolute inset-0 bg-accent"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 ml-1 transition-colors md:ml-2 group-hover:text-primary">→</span>
          </motion.button>
          
          <p className="mt-2 md:mt-3 lg:mt-4 text-[10px] md:text-xs lg:text-sm text-gray-500">
            Average project delivery: <span className="text-accent">8-12 weeks</span>
          </p>
        </motion.div>

        {/* Floating Stats - hidden on mobile/tablet */}
        {windowWidth >= 1280 && (
          <>
            <motion.div
              style={{ y: y1, opacity }}
              className="absolute hidden top-40 right-10 xl:block"
            >
              <div className="p-2 border rounded-lg md:p-3 bg-black/50 backdrop-blur-sm border-accent/20">
                <div className="text-[10px] md:text-xs font-medium text-accent">50+ Projects</div>
                <div className="text-[8px] md:text-[10px] text-gray-500">Successfully delivered</div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: y2, opacity }}
              className="absolute hidden bottom-40 left-10 xl:block"
            >
              <div className="p-2 border rounded-lg md:p-3 bg-black/50 backdrop-blur-sm border-accent/20">
                <div className="text-[10px] md:text-xs font-medium text-accent">98% Satisfaction</div>
                <div className="text-[8px] md:text-[10px] text-gray-500">Client retention rate</div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}