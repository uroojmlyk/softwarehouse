
// // src/components/home/WorkProcess.js
// 'use client';

// import { motion } from 'framer-motion';

// const steps = [
//   {
//     number: '01',
//     title: 'Discovery',
//     description: 'We dive deep into your business goals, user needs, and technical requirements.',
//     icon: '🔍',
//   },
//   {
//     number: '02',
//     title: 'Architecture',
//     description: 'Our architects design scalable, secure solutions tailored to your needs.',
//     icon: '🏗️',
//   },
//   {
//     number: '03',
//     title: 'Development',
//     description: 'Agile development with clean code, regular updates, and transparent communication.',
//     icon: '⚡',
//   },
//   {
//     number: '04',
//     title: 'Launch & Scale',
//     description: 'We ensure smooth deployment and provide ongoing support as you grow.',
//     icon: '🚀',
//   },
// ];

// export default function WorkProcess() {
//   return (
//     <section className="section-padding bg-gray-50/50">
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-16 text-center"
//         >
//           <span className="block mb-4 text-sm tracking-widest uppercase text-accent">
//             Our Process
//           </span>
//           <h2 className="mb-4 heading-md">
//             From Concept to Launch
//           </h2>
//           <p className="max-w-2xl mx-auto text-secondary">
//             A proven methodology that ensures your project's success
//           </p>
//         </motion.div>

//         <div className="relative">
//           {/* Timeline Line */}
//           <div className="absolute hidden w-px h-full transform -translate-x-1/2 left-1/2 bg-gradient-to-b from-accent/20 via-accent to-accent/20 lg:block" />

//           <div className="space-y-16">
//             {steps.map((step, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: i * 0.1 }}
//                 className={`flex flex-col lg:flex-row items-center gap-8 ${
//                   i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
//                 }`}
//               >
//                 <div className="flex-1 text-center lg:text-left">
//                   <div className="inline-block mb-4 text-4xl lg:hidden">{step.icon}</div>
//                   <div className="mb-2 text-sm text-accent">Step {step.number}</div>
//                   <h3 className="mb-4 font-serif text-2xl">{step.title}</h3>
//                   <p className="text-secondary">{step.description}</p>
//                 </div>

//                 <div className="relative flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24">
//                   <div className="absolute inset-0 rounded-full bg-accent/10 animate-ping" />
//                   <div className="relative flex items-center justify-center w-12 h-12 bg-white border-2 rounded-full border-accent lg:w-16 lg:h-16">
//                     <span className="hidden text-2xl lg:block">{step.icon}</span>
//                   </div>
//                 </div>

//                 <div className="flex-1" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
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
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // ✅ FIXED: mounted condition ke saath
  const { scrollYProgress } = useScroll({
    target: mounted ? sectionRef : undefined,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Fast animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, // Fast but smooth
        ease: [0.25, 0.1, 0.25, 1] // Custom easing for snappy feel
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // ✅ Server-side render
  if (!mounted) {
    return (
      <section className="relative section-padding overflow-hidden bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 text-sm border rounded-full border-accent/30 bg-accent/5 text-accent">
                ⚡ PROVEN METHODOLOGY ⚡
              </span>
            </div>
            <h2 className="mb-4 text-white heading-lg">
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
      {/* Background Pattern - Modern Dots */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Animated Background Lines */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute left-0 w-full h-px top-20 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute left-0 w-full h-px bottom-20 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
      />

      {/* Gradient Orbs */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      
      <motion.div 
        style={{ y: y2 }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          {/* Premium Badge with Fast Scale */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-block mb-6"
          >
            <span className="relative inline-block px-6 py-3 text-sm tracking-widest border rounded-full border-accent/30 bg-accent/5 backdrop-blur-sm text-accent">
              ⚡ PROVEN METHODOLOGY ⚡
            </span>
          </motion.div>

          <h2 className="mb-4 text-white heading-lg">
            From <span className="gradient-text">Concept</span> to Launch
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-400">
            A battle-tested process that has delivered <span className="text-accent">50+ successful projects</span> for enterprises across Karachi.
          </p>
        </motion.div>

        {/* Methodology Stats - Fast Counters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 mb-16 md:grid-cols-4"
        >
          {methodologyHighlights.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              className="p-4 text-center border bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 group"
            >
              <div className="mb-2 text-3xl transition-transform duration-200 group-hover:scale-110">
                {item.icon}
              </div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                className="text-2xl font-display text-accent"
              >
                {item.value}
              </motion.div>
              <div className="mt-1 text-xs text-gray-400">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Timeline - Modern Horizontal Design */}
        <div className="relative">
          {/* Progress Line */}
          <motion.div 
            className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {/* Steps Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="relative pt-16">
                  {/* Step Number - Floating Above */}
                  <motion.div 
                    className="absolute top-0 z-20 transform -translate-x-1/2 left-1/2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="relative">
                      <div className="flex items-center justify-center w-12 h-12 border-2 rounded-full bg-primary border-accent">
                        <span className="text-lg text-accent font-display">{step.phase}</span>
                      </div>
                      {/* Pulsing Ring */}
                      <motion.div 
                        className="absolute inset-0 border-2 rounded-full border-accent"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <div className="p-6 pt-8 transition-all duration-300 border bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 group-hover:border-accent/30">
                    {/* Icon */}
                    <div className="mb-3 text-3xl transition-transform duration-200 group-hover:scale-110">
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="mb-1 text-lg text-white font-display">
                      {step.title}
                    </h3>
                    
                    <p className="mb-3 text-xs text-accent">
                      {step.shortDesc}
                    </p>

                    {/* Duration Badge */}
                    <div className="inline-block px-2 py-1 mb-3 text-xs border rounded bg-accent/10 border-accent/20 text-accent">
                      {step.duration}
                    </div>

                    {/* Description - Hidden by default, shows on hover */}
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="mb-3 text-xs leading-relaxed text-gray-400">
                        {step.description}
                      </p>

                      {/* Outcomes */}
                      <div className="space-y-1">
                        {step.outcomes.map((outcome, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            className="flex items-center gap-1 text-xs"
                          >
                            <span className="text-accent">✦</span>
                            <span className="text-gray-500">{outcome}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Progress Indicator */}
                    <motion.div 
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Connector Line (except last) */}
                {index < processSteps.length - 1 && (
                  <motion.div 
                    className="absolute top-12 -right-2 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent hidden lg:block"
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

        {/* Process Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-3"
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
              whileHover={{ y: -3 }}
              className="p-6 text-center border bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 group"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                className="mb-3 text-4xl"
              >
                {benefit.icon}
              </motion.div>
              <h4 className="mb-2 font-medium text-white">{benefit.title}</h4>
              <p className="text-xs text-gray-400">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Mini */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-8 py-3 overflow-hidden bg-transparent border group border-accent text-accent"
          >
            <span className="relative z-10 text-sm tracking-wider">DISCUSS YOUR PROJECT</span>
            <motion.div 
              className="absolute inset-0 bg-accent"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 ml-2 transition-colors group-hover:text-primary">→</span>
          </motion.button>
          
          <p className="mt-4 text-xs text-gray-500">
            Average project delivery: <span className="text-accent">8-12 weeks</span>
          </p>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute hidden top-40 right-10 xl:block"
        >
          <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
            <div className="text-xs font-medium text-accent">50+ Projects</div>
            <div className="text-[10px] text-gray-500">Successfully delivered</div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: y2, opacity }}
          className="absolute hidden bottom-40 left-10 xl:block"
        >
          <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
            <div className="text-xs font-medium text-accent">98% Satisfaction</div>
            <div className="text-[10px] text-gray-500">Client retention rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}