// // src/components/home/FeaturedWork.js
// import Image from 'next/image';
// import Link from 'next/link';

// export default function FeaturedWork() {
//   const projects = [
//     {
//       title: 'Fintech App',
//       client: 'Karachi Bank',
//       description: 'Digital banking platform with real-time transactions.',
//       category: 'Web Application'
//     },
//     {
//       title: 'E-commerce Platform',
//       client: 'Local Retailer',
//       description: 'Online store with inventory management system.',
//       category: 'Mobile App'
//     }
//   ];

//   return (
//     <section>
//       <div className="container">
//         <h2 className="section-title">Featured Work</h2>
        
//         <div style={{ display: 'grid', gap: '80px' }}>
//           {projects.map((project, i) => (
//             <div key={i} style={{ 
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr',
//               gap: '48px',
//               alignItems: 'center'
//             }}>
//               <div>
//                 <div style={{ 
//                   height: '400px', 
//                   background: '#F5F5F5',
//                   border: '1px solid #E5E5E5'
//                 }}>
//                   {/* Project Image Placeholder */}
//                 </div>
//               </div>
//               <div>
//                 <div style={{ color: '#C9A959', marginBottom: '1rem' }}>
//                   {project.category}
//                 </div>
//                 <h3 style={{ 
//                   fontSize: '2.5rem',
//                   fontFamily: 'Times New Roman',
//                   marginBottom: '0.5rem'
//                 }}>
//                   {project.title}
//                 </h3>
//                 <div style={{ 
//                   fontSize: '1.25rem',
//                   color: '#4A4A4A',
//                   marginBottom: '1.5rem'
//                 }}>
//                   {project.client}
//                 </div>
//                 <p style={{ 
//                   marginBottom: '2rem',
//                   color: '#4A4A4A'
//                 }}>
//                   {project.description}
//                 </p>
//                 <Link 
//                   href="/work"
//                   style={{
//                     color: '#1A1A1A',
//                     textDecoration: 'none',
//                     borderBottom: '1px solid #1A1A1A',
//                     paddingBottom: '4px'
//                   }}
//                 >
//                   View Project →
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }   





// src/components/home/FeaturedWork.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: 'FinTech Platform',
    client: 'Karachi Bank',
    category: 'Web Application',
    image: '/office6.jpg',
    description: 'Digital banking platform processing 50,000+ daily transactions',
    results: [
      '50K+ daily transactions',
      '99.9% uptime',
      '40% faster processing'
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    gradient: 'from-[#C9A959] to-[#FFD700]',
    icon: '💰'
  },
  {
    id: 2,
    title: 'Retail E-commerce',
    client: 'Local Retailer',
    category: 'Mobile App',
    image: '/office7.jpg',
    description: 'Multi-vendor marketplace with 200+ active sellers',
    results: [
      '200+ active sellers',
      '150% sales increase',
      '50K+ monthly users'
    ],
    tags: ['Flutter', 'Firebase', 'Stripe', 'Analytics'],
    gradient: 'from-[#C9A959] to-[#DAA520]',
    icon: '🛍️'
  },
  {
    id: 3,
    title: 'Healthcare System',
    client: 'Karachi Medical',
    category: 'Custom Software',
    image: '/office8.jpg',
    description: 'Patient management system for 10+ hospitals',
    results: [
      '10+ hospitals',
      '100K+ patients',
      '60% faster records'
    ],
    tags: ['Python', 'Django', 'React', 'Docker'],
    gradient: 'from-[#C9A959] to-[#B8860B]',
    icon: '🏥'
  },
  {
    id: 4,
    title: 'Logistics Platform',
    client: 'Karachi Port Trust',
    category: 'Web Application',
    image: '/office9.jpg',
    description: 'Real-time cargo tracking and management system',
    results: [
      '10K+ daily shipments',
      'Real-time tracking',
      '30% cost reduction'
    ],
    tags: ['Next.js', 'GraphQL', 'MongoDB', 'Docker'],
    gradient: 'from-[#C9A959] to-[#CDA434]',
    icon: '🚚'
  }
];

const successMetrics = [
  { value: '50+', label: 'Projects Delivered', icon: '🚀' },
  { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
  { value: '15+', label: 'Enterprise Clients', icon: '🏢' },
  { value: '3+', label: 'Years in Karachi', icon: '📍' }
];

export default function FeaturedWork() {
  const sectionRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  
  // ✅ FIXED: Scroll hooks ko states mein store karo
  const [scrollYProgress, setScrollYProgress] = useState(null);
  const [y, setY] = useState(0);
  const [opacity, setOpacity] = useState(1);
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
        setFloatingY1(v * -100);
        setFloatingY2(v * 100);
        
        // Opacity calculation
        if (v < 0.2) setOpacity(v / 0.2);
        else if (v > 0.8) setOpacity(1 - ((v - 0.8) / 0.2));
        else setOpacity(1);
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
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // ✅ Server-side render
  if (!mounted) {
    return (
      <section className="relative overflow-hidden section-padding">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 text-sm border rounded-full border-accent/30 bg-accent/5 text-accent">
                ✦ SUCCESS STORIES ✦
              </span>
            </div>
            <h2 className="mb-4 text-white heading-lg">
              Featured <span className="text-accent">Projects</span>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden section-padding"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/karachi-bg.jpg"
          alt="Karachi Skyline"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/95 via-[#1A1A1A]/90 to-[#0F0F0F]/95" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #C9A959 0px, #C9A959 2px, transparent 2px, transparent 30px)`,
            }}
          />
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div 
        style={{ y }}
        className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] z-0"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div 
        style={{ y: floatingY1 }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-block mb-6"
          >
            <span className="relative inline-block px-6 py-3 text-sm tracking-widest border rounded-full border-accent/30 bg-black/30 backdrop-blur-sm text-accent">
              ✦ SUCCESS STORIES ✦
            </span>
          </motion.div>

          <h2 className="mb-4 text-white heading-lg">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-300">
            Real solutions that have transformed businesses across Karachi. 
            <span className="block mt-2 text-accent">Each project tells a story of innovation and excellence.</span>
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 mb-16 md:grid-cols-4"
        >
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.02 }}
              className="p-4 text-center border bg-black/40 backdrop-blur-sm border-white/10 group"
            >
              <div className="mb-2 text-3xl transition-transform duration-200 group-hover:scale-110">
                {metric.icon}
              </div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                className="text-2xl font-display text-accent"
              >
                {metric.value}
              </motion.div>
              <div className="mt-1 text-xs text-gray-400">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden transition-all duration-500 border group bg-black/40 backdrop-blur-sm border-white/10 hover:border-accent/30"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 overflow-hidden md:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs border rounded-full bg-black/60 backdrop-blur-sm border-accent/30 text-accent">
                      {project.category}
                    </span>
                  </div>

                  {/* Icon Overlay */}
                  <div className="absolute text-4xl transition-opacity bottom-4 right-4 opacity-30 group-hover:opacity-100">
                    {project.icon}
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6">
                  <h3 className="mb-2 text-2xl text-white transition-colors font-display group-hover:text-accent">
                    {project.title}
                  </h3>
                  
                  <p className="mb-3 text-sm text-accent">
                    {project.client}
                  </p>
                  
                  <p className="mb-4 text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="mb-4">
                    <div className="mb-2 text-xs text-gray-500">KEY RESULTS</div>
                    <div className="space-y-1">
                      {project.results.map((result, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="flex items-center gap-2 text-xs"
                        >
                          <span className="text-accent">✦</span>
                          <span className="text-gray-300">{result}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] px-2 py-1 bg-accent/10 border border-accent/20 text-accent rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <Link 
                    href={`/work/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm transition-colors text-white/60 hover:text-accent group/link"
                  >
                    <span>View Case Study</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="transition-transform group-hover/link:translate-x-1"
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <motion.div 
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link 
            href="/work"
            className="relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden bg-transparent border group border-accent text-accent"
          >
            <span className="relative z-10">View All Projects</span>
            <motion.span 
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
            <motion.div 
              className="absolute inset-0 bg-accent"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 text-primary group-hover:opacity-100">
              Explore Portfolio
            </span>
          </Link>

          {/* Trust Badge */}
          <motion.p 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-4 text-xs text-gray-500"
          >
            Trusted by <span className="text-accent">Karachi's leading enterprises</span>
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          style={{ y: floatingY1 }}
          className="absolute hidden top-40 right-10 xl:block"
        >
          <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
            <div className="text-xs text-accent">50+ Projects</div>
            <div className="text-[10px] text-gray-400">Successfully delivered</div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: floatingY2 }}
          className="absolute hidden bottom-40 left-10 xl:block"
        >
          <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
            <div className="text-xs text-accent">98% Satisfaction</div>
            <div className="text-[10px] text-gray-400">Client retention rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}