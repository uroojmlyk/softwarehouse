


// // src/components/home/ServicesShowcase.js
// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import Link from 'next/link';
// import { useRef } from 'react';

// const services = [
//   {
//     id: 1,
//     title: 'Custom Web Development',
//     tagline: 'Scalable. Secure. Modern.',
//     description: 'We architect enterprise-grade web applications that handle millions of users without breaking a sweat.',
//     features: [
//       { name: 'React/Next.js', description: 'Modern frontend' },
//       { name: 'Node.js/Python', description: 'Robust backend' },
//       { name: 'PostgreSQL/MongoDB', description: 'Smart databases' },
//       { name: 'AWS/Azure', description: 'Cloud native' }
//     ],
//     metrics: {
//       speed: '98%',
//       uptime: '99.9%',
//       satisfaction: '100%'
//     },
//     gradient: 'from-[#C9A959] to-[#FFD700]',
//     icon: '⚡',
//     color: '#C9A959'
//   },
//   {
//     id: 2,
//     title: 'Mobile Applications',
//     tagline: 'Native feel. Cross-platform reach.',
//     description: 'We build mobile experiences that users love, from fintech to e-commerce, on both iOS and Android.',
//     features: [
//       { name: 'React Native', description: 'Cross-platform' },
//       { name: 'Flutter', description: 'Beautiful UI' },
//       { name: 'Swift/Kotlin', description: 'Native power' },
//       { name: 'Firebase', description: 'Real-time sync' }
//     ],
//     metrics: {
//       speed: '95%',
//       uptime: '99.8%',
//       satisfaction: '97%'
//     },
//     gradient: 'from-[#C9A959] to-[#DAA520]',
//     icon: '📱',
//     color: '#C9A959'
//   },
//   {
//     id: 3,
//     title: 'Cloud & DevOps',
//     tagline: 'Scale without limits.',
//     description: 'We design and implement cloud infrastructure that grows with your business, automatically.',
//     features: [
//       { name: 'Kubernetes', description: 'Container orchestration' },
//       { name: 'CI/CD', description: 'Automated deployments' },
//       { name: 'Terraform', description: 'Infrastructure as code' },
//       { name: 'Monitoring', description: '24/7 observability' }
//     ],
//     metrics: {
//       speed: '92%',
//       uptime: '99.99%',
//       satisfaction: '96%'
//     },
//     gradient: 'from-[#C9A959] to-[#B8860B]',
//     icon: '☁️',
//     color: '#C9A959'
//   },
//   {
//     id: 4,
//     title: 'AI & Machine Learning',
//     tagline: 'Intelligent solutions. Real results.',
//     description: 'We integrate AI into your business processes to automate decisions and uncover insights.',
//     features: [
//       { name: 'TensorFlow', description: 'Deep learning' },
//       { name: 'LangChain', description: 'LLM integration' },
//       { name: 'Computer Vision', description: 'Image recognition' },
//       { name: 'NLP', description: 'Text understanding' }
//     ],
//     metrics: {
//       speed: '94%',
//       uptime: '99.7%',
//       satisfaction: '98%'
//     },
//     gradient: 'from-[#C9A959] to-[#CDA434]',
//     icon: '🤖',
//     color: '#C9A959'
//   }
// ];

// const industrySolutions = [
//   { name: 'Fintech', icon: '💰' },
//   { name: 'Healthcare', icon: '🏥' },
//   { name: 'E-commerce', icon: '🛍️' },
//   { name: 'Logistics', icon: '🚚' },
//   { name: 'Education', icon: '📚' },
//   { name: 'Real Estate', icon: '🏢' }
// ];

// export default function ServicesShowcase() {
//   const sectionRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.8,
//         ease: [0.215, 0.61, 0.355, 1]
//       }
//     }
//   };

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative section-padding overflow-hidden bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]"
//     >
//       {/* Background Pattern - Diagonal Lines */}
//       <div className="absolute inset-0 opacity-5">
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `repeating-linear-gradient(45deg, #C9A959 0px, #C9A959 2px, transparent 2px, transparent 20px)`,
//           }}
//         />
//       </div>

//       {/* Floating Gradients */}
//       <motion.div 
//         style={{ y }}
//         className="absolute top-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"
//         animate={{
//           scale: [1, 1.3, 1],
//           opacity: [0.2, 0.3, 0.2]
//         }}
//         transition={{ duration: 8, repeat: Infinity }}
//       />
      
//       <motion.div 
//         style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
//         className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.1, 0.2, 0.1]
//         }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />

//       <div className="relative z-10 container-custom">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
//           className="mb-20 text-center"
//         >
//           {/* Premium Badge */}
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ type: "spring", stiffness: 200, damping: 15 }}
//             className="inline-block mb-6"
//           >
//             <span className="relative inline-block px-6 py-3 text-sm tracking-widest border rounded-full border-accent/30 bg-accent/5 backdrop-blur-sm text-accent">
//               ⚡ CORE EXPERTISE ⚡
//             </span>
//           </motion.div>

//           <h2 className="mb-4 text-white heading-lg">
//             Engineering <span className="gradient-text">Excellence</span>
//           </h2>
          
//           <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-400">
//             We don't just write code — we architect solutions that drive business growth. 
//             <span className="block mt-2 text-accent">Karachi's choice for enterprise software.</span>
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="grid grid-cols-1 gap-8 md:grid-cols-2"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={service.id}
//               variants={itemVariants}
//               whileHover={{ y: -8 }}
//               className="relative overflow-hidden transition-all duration-500 border group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 hover:border-accent/30"
//             >
//               {/* Background Gradient on Hover */}
//               <motion.div
//                 className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-accent/5 to-transparent group-hover:opacity-100"
//                 initial={false}
//               />

//               {/* Top Accent Line */}
//               <motion.div 
//                 className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1, duration: 0.8 }}
//               />

//               <div className="p-8 md:p-10">
//                 {/* Header with Icon and Metrics */}
//                 <div className="flex items-start justify-between mb-6">
//                   <div className="flex items-center gap-4">
//                     <motion.div 
//                       whileHover={{ rotate: 360 }}
//                       transition={{ duration: 0.5 }}
//                       className="text-5xl transition-transform group-hover:scale-110"
//                     >
//                       {service.icon}
//                     </motion.div>
//                     <div>
//                       <h3 className="mb-1 text-2xl text-white font-display">
//                         {service.title}
//                       </h3>
//                       <p className="text-sm text-accent">
//                         {service.tagline}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Quick Stats */}
//                   <div className="text-right">
//                     <div className="text-2xl font-display text-accent">
//                       {service.metrics.satisfaction}
//                     </div>
//                     <div className="text-xs text-gray-500">
//                       satisfaction
//                     </div>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="mb-8 leading-relaxed text-gray-400">
//                   {service.description}
//                 </p>

//                 {/* Features Grid */}
//                 <div className="grid grid-cols-2 gap-4 mb-8">
//                   {service.features.map((feature, idx) => (
//                     <motion.div
//                       key={idx}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: index * 0.1 + idx * 0.05 }}
//                       className="group/feature"
//                     >
//                       <div className="flex items-center gap-2">
//                         <span className="text-lg text-accent">✦</span>
//                         <div>
//                           <div className="text-sm font-medium text-white">
//                             {feature.name}
//                           </div>
//                           <div className="text-xs text-gray-500">
//                             {feature.description}
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Metrics Row */}
//                 <div className="flex items-center justify-between pt-4 border-t border-white/10">
//                   <div className="flex gap-4">
//                     {Object.entries(service.metrics).map(([key, value], idx) => (
//                       <motion.div
//                         key={key}
//                         whileHover={{ y: -2 }}
//                         className="text-center"
//                       >
//                         <div className="text-sm font-display text-accent">
//                           {value}
//                         </div>
//                         <div className="text-xs text-gray-500 capitalize">
//                           {key}
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>

//                   <Link 
//                     href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
//                     className="inline-flex items-center gap-2 text-sm transition-colors text-white/60 hover:text-accent group/link"
//                   >
//                     <span>Learn More</span>
//                     <motion.span
//                       animate={{ x: [0, 5, 0] }}
//                       transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
//                       className="transition-transform group-hover/link:translate-x-1"
//                     >
//                       →
//                     </motion.span>
//                   </Link>
//                 </div>
//               </div>

//               {/* Corner Accent */}
//               <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden">
//                 <div className="absolute bottom-0 right-0 w-32 h-32 rotate-45 translate-x-16 translate-y-16 bg-gradient-to-tl from-accent/10 to-transparent" />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Industry Solutions */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="mt-20 text-center"
//         >
//           <h3 className="mb-12 text-2xl text-white font-display">
//             Trusted Across <span className="gradient-text">Industries</span>
//           </h3>

//           <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
//             {industrySolutions.map((industry, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="cursor-default group"
//               >
//                 <div className="relative p-6 transition-all duration-300 border bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 hover:border-accent/30">
//                   <motion.div
//                     animate={{ 
//                       scale: [1, 1.1, 1],
//                       rotate: [0, 5, 0]
//                     }}
//                     transition={{ 
//                       duration: 3, 
//                       repeat: Infinity,
//                       delay: index * 0.2
//                     }}
//                     className="mb-3 text-4xl"
//                   >
//                     {industry.icon}
//                   </motion.div>
//                   <div className="text-sm font-medium text-white">
//                     {industry.name}
//                   </div>
                  
//                   {/* Hover Stats */}
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0 }}
//                     whileHover={{ opacity: 1, scale: 1 }}
//                     className="absolute px-2 py-1 text-xs rounded-full -top-2 -right-2 bg-accent text-primary"
//                   >
//                     {Math.floor(Math.random() * 10 + 10)}+
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* CTA Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="relative mt-20 group"
//         >
//           <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-r from-accent/20 to-transparent blur-2xl group-hover:blur-3xl" />
          
//           <div className="relative p-8 text-center border bg-gradient-to-r from-accent/10 via-accent/5 to-transparent backdrop-blur-sm border-accent/30 md:p-12">
//             <h4 className="mb-4 text-3xl text-white md:text-4xl font-display">
//               Ready to Build Something <span className="gradient-text">Amazing?</span>
//             </h4>
            
//             <p className="max-w-2xl mx-auto mb-8 text-gray-400">
//               Let's discuss how our expertise can transform your business. 
//               We're just a conversation away.
//             </p>

//             <div className="flex flex-col justify-center gap-4 sm:flex-row">
//               <Link
//                 href="/contact"
//                 className="relative px-8 py-4 overflow-hidden font-medium group/btn bg-accent text-primary"
//               >
//                 <span className="relative z-10">Start Your Project</span>
//                 <motion.div
//                   className="absolute inset-0 bg-white"
//                   initial={{ x: '-100%' }}
//                   whileHover={{ x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </Link>

//               <Link
//                 href="/services"
//                 className="px-8 py-4 text-white transition-all duration-300 border group/btn border-white/20 hover:bg-white/10"
//               >
//                 View All Services
//               </Link>
//             </div>

//             {/* Trust Badge */}
//             <motion.div
//               animate={{ opacity: [0.5, 1, 0.5] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="absolute px-4 py-2 text-xs transform -translate-x-1/2 border rounded-full -bottom-4 left-1/2 bg-accent/20 backdrop-blur-sm border-accent/30 text-accent"
//             >
//               ⚡ 50+ successful projects delivered ⚡
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Floating Elements */}
//         <motion.div
//           style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
//           className="absolute hidden top-40 right-10 xl:block"
//         >
//           <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
//             <div className="text-xs text-accent">Enterprise Ready</div>
//           </div>
//         </motion.div>

//         <motion.div
//           style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
//           className="absolute hidden bottom-40 left-10 xl:block"
//         >
//           <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
//             <div className="text-xs text-accent">ISO 27001 Certified</div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }    








// src/components/home/ServicesShowcase.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

const services = [
  {
    id: 1,
    title: 'Custom Web Development',
    tagline: 'Scalable. Secure. Modern.',
    description: 'We architect enterprise-grade web applications that handle millions of users without breaking a sweat.',
    features: [
      { name: 'React/Next.js', description: 'Modern frontend' },
      { name: 'Node.js/Python', description: 'Robust backend' },
      { name: 'PostgreSQL/MongoDB', description: 'Smart databases' },
      { name: 'AWS/Azure', description: 'Cloud native' }
    ],
    metrics: {
      speed: '98%',
      uptime: '99.9%',
      satisfaction: '100%'
    },
    gradient: 'from-[#C9A959] to-[#FFD700]',
    icon: '⚡',
    color: '#C9A959'
  },
  {
    id: 2,
    title: 'Mobile Applications',
    tagline: 'Native feel. Cross-platform reach.',
    description: 'We build mobile experiences that users love, from fintech to e-commerce, on both iOS and Android.',
    features: [
      { name: 'React Native', description: 'Cross-platform' },
      { name: 'Flutter', description: 'Beautiful UI' },
      { name: 'Swift/Kotlin', description: 'Native power' },
      { name: 'Firebase', description: 'Real-time sync' }
    ],
    metrics: {
      speed: '95%',
      uptime: '99.8%',
      satisfaction: '97%'
    },
    gradient: 'from-[#C9A959] to-[#DAA520]',
    icon: '📱',
    color: '#C9A959'
  },
  {
    id: 3,
    title: 'Cloud & DevOps',
    tagline: 'Scale without limits.',
    description: 'We design and implement cloud infrastructure that grows with your business, automatically.',
    features: [
      { name: 'Kubernetes', description: 'Container orchestration' },
      { name: 'CI/CD', description: 'Automated deployments' },
      { name: 'Terraform', description: 'Infrastructure as code' },
      { name: 'Monitoring', description: '24/7 observability' }
    ],
    metrics: {
      speed: '92%',
      uptime: '99.99%',
      satisfaction: '96%'
    },
    gradient: 'from-[#C9A959] to-[#B8860B]',
    icon: '☁️',
    color: '#C9A959'
  },
  {
    id: 4,
    title: 'AI & Machine Learning',
    tagline: 'Intelligent solutions. Real results.',
    description: 'We integrate AI into your business processes to automate decisions and uncover insights.',
    features: [
      { name: 'TensorFlow', description: 'Deep learning' },
      { name: 'LangChain', description: 'LLM integration' },
      { name: 'Computer Vision', description: 'Image recognition' },
      { name: 'NLP', description: 'Text understanding' }
    ],
    metrics: {
      speed: '94%',
      uptime: '99.7%',
      satisfaction: '98%'
    },
    gradient: 'from-[#C9A959] to-[#CDA434]',
    icon: '🤖',
    color: '#C9A959'
  }
];

// Static numbers - No Math.random()
const industrySolutions = [
  { name: 'Fintech', icon: '💰', count: 15 },
  { name: 'Healthcare', icon: '🏥', count: 12 },
  { name: 'E-commerce', icon: '🛍️', count: 18 },
  { name: 'Logistics', icon: '🚚', count: 10 },
  { name: 'Education', icon: '📚', count: 8 },
  { name: 'Real Estate', icon: '🏢', count: 7 }
];

export default function ServicesShowcase() {
  const sectionRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  
  // ✅ FIXED: Scroll hooks ko states mein store karo
  const [scrollYProgress, setScrollYProgress] = useState(null);
  const [y, setY] = useState(0);
  const [floatingY1, setFloatingY1] = useState(0);
  const [floatingY2, setFloatingY2] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // ✅ Client-side par hi useScroll initialize karo
    if (sectionRef.current) {
      const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
      });
      
      setScrollYProgress(scrollYProgress);
      
      // Transforms bhi client-side par
      const unsubscribeY = scrollYProgress.onChange(v => {
        setY(v * 100);
        setFloatingY1(v * -150);
        setFloatingY2(v * 150);
      });
      
      return () => {
        unsubscribeY();
      };
    }
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  // ✅ Server-side render with static content
  if (!mounted) {
    return (
      <section className="relative section-padding overflow-hidden bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
        <div className="container-custom">
          {/* Static skeleton for SSR */}
          <div className="mb-20 text-center">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 text-sm border rounded-full border-accent/30 bg-accent/5 text-accent">
                ⚡ CORE EXPERTISE ⚡
              </span>
            </div>
            <h2 className="mb-4 text-white heading-lg">
              Engineering <span className="text-accent">Excellence</span>
            </h2>
          </div>

          {/* Static grid for SSR */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.id} className="p-8 border bg-gradient-to-br from-white/5 to-transparent border-white/10">
                <div className="mb-6 text-5xl">{service.icon}</div>
                <h3 className="mb-4 text-2xl text-white">{service.title}</h3>
                <p className="mb-6 text-gray-400">{service.description}</p>
              </div>
            ))}
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
      {/* Background Pattern - Diagonal Lines */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #C9A959 0px, #C9A959 2px, transparent 2px, transparent 20px)`,
          }}
        />
      </div>

      {/* Floating Gradients */}
      <motion.div 
        style={{ y }}
        className="absolute top-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div 
        style={{ y: floatingY1 }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="mb-20 text-center"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-block mb-6"
          >
            <span className="relative inline-block px-6 py-3 text-sm tracking-widest border rounded-full border-accent/30 bg-accent/5 backdrop-blur-sm text-accent">
              ⚡ CORE EXPERTISE ⚡
            </span>
          </motion.div>

          <h2 className="mb-4 text-white heading-lg">
            Engineering <span className="gradient-text">Excellence</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-400">
            We don't just write code — we architect solutions that drive business growth. 
            <span className="block mt-2 text-accent">Karachi's choice for enterprise software.</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden transition-all duration-500 border group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 hover:border-accent/30"
            >
              {/* Background Gradient on Hover */}
              <motion.div
                className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-accent/5 to-transparent group-hover:opacity-100"
                initial={false}
              />

              {/* Top Accent Line */}
              <motion.div 
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              />

              <div className="p-8 md:p-10">
                {/* Header with Icon and Metrics */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-5xl transition-transform group-hover:scale-110"
                    >
                      {service.icon}
                    </motion.div>
                    <div>
                      <h3 className="mb-1 text-2xl text-white font-display">
                        {service.title}
                      </h3>
                      <p className="text-sm text-accent">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="text-right">
                    <div className="text-2xl font-display text-accent">
                      {service.metrics.satisfaction}
                    </div>
                    <div className="text-xs text-gray-500">
                      satisfaction
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-8 leading-relaxed text-gray-400">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="group/feature"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg text-accent">✦</span>
                        <div>
                          <div className="text-sm font-medium text-white">
                            {feature.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Metrics Row */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex gap-4">
                    {Object.entries(service.metrics).map(([key, value], idx) => (
                      <motion.div
                        key={key}
                        whileHover={{ y: -2 }}
                        className="text-center"
                      >
                        <div className="text-sm font-display text-accent">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <Link 
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-sm transition-colors text-white/60 hover:text-accent group/link"
                  >
                    <span>Learn More</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                      className="transition-transform group-hover/link:translate-x-1"
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 rotate-45 translate-x-16 translate-y-16 bg-gradient-to-tl from-accent/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="mb-12 text-2xl text-white font-display">
            Trusted Across <span className="gradient-text">Industries</span>
          </h3>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="cursor-default group"
              >
                <div className="relative p-6 transition-all duration-300 border bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 hover:border-accent/30">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className="mb-3 text-4xl"
                  >
                    {industry.icon}
                  </motion.div>
                  <div className="text-sm font-medium text-white">
                    {industry.name}
                  </div>
                  
                  <div className="absolute px-2 py-1 text-xs rounded-full -top-2 -right-2 bg-accent text-primary">
                    {industry.count}+
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mt-20 group"
        >
          <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-r from-accent/20 to-transparent blur-2xl group-hover:blur-3xl" />
          
          <div className="relative p-8 text-center border bg-gradient-to-r from-accent/10 via-accent/5 to-transparent backdrop-blur-sm border-accent/30 md:p-12">
            <h4 className="mb-4 text-3xl text-white md:text-4xl font-display">
              Ready to Build Something <span className="gradient-text">Amazing?</span>
            </h4>
            
            <p className="max-w-2xl mx-auto mb-8 text-gray-400">
              Let's discuss how our expertise can transform your business. 
              We're just a conversation away.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="relative px-8 py-4 overflow-hidden font-medium group/btn bg-accent text-primary"
              >
                <span className="relative z-10">Start Your Project</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              <Link
                href="/services"
                className="px-8 py-4 text-white transition-all duration-300 border group/btn border-white/20 hover:bg-white/10"
              >
                View All Services
              </Link>
            </div>

            {/* Trust Badge */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute px-4 py-2 text-xs transform -translate-x-1/2 border rounded-full -bottom-4 left-1/2 bg-accent/20 backdrop-blur-sm border-accent/30 text-accent"
            >
              ⚡ 50+ successful projects delivered ⚡
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          style={{ y: floatingY1 }}
          className="absolute hidden top-40 right-10 xl:block"
        >
          <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
            <div className="text-xs text-accent">Enterprise Ready</div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: floatingY2 }}
          className="absolute hidden bottom-40 left-10 xl:block"
        >
          <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
            <div className="text-xs text-accent">ISO 27001 Certified</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
