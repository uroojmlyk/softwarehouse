


// // src/components/home/TrustSignals.js
// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const clients = [
//   { name: 'Engro', logo: '/office2.jpg' },
//   { name: 'Bank Alfalah', logo: '/office3.jpg' },
//   { name: 'Netsol', logo: '/office4.jpg' },
//   { name: 'Systems Limited', logo: '/office5.jpg' },
//   { name: 'Arham Soft', logo: '/office.jpg' },
// ];

// export default function TrustSignals() {
//   return (
//     <section className="section-padding bg-gray-50/50">
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <span className="block mb-4 text-sm tracking-widest uppercase text-accent">
//             Trusted Partners
//           </span>
//           <h2 className="mb-4 heading-md">
//             Backed by Karachi's Finest
//           </h2>
//           <p className="max-w-2xl mx-auto text-secondary">
//             We've had the privilege of working with leading enterprises across Pakistan
//           </p>
//         </motion.div>

//         {/* Client Logos */}
//         <div className="grid items-center grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
//           {clients.map((client, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="group"
//             >
//               <div className="relative h-16 transition-all duration-300 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100">
//                 <Image
//                   src={client.logo}
//                   alt={client.name}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Testimonial Quote */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="max-w-3xl mx-auto mt-20 text-center"
//         >
//           <div className="font-serif text-6xl text-accent/20">"</div>
//           <p className="text-xl italic text-secondary">
//             ZENO transformed our digital infrastructure. Their attention to detail 
//             and understanding of local business needs sets them apart.
//           </p>
//           <div className="mt-6">
//             <div className="font-medium">— CEO, Leading Karachi Enterprise</div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }   







// src/components/home/TrustSignals.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Statistical data with real impact
const stats = [
  { 
    value: '50+', 
    label: 'Enterprise Projects',
    description: 'Delivered with excellence',
    icon: '🚀',
    gradient: 'from-[#C9A959] to-[#FFD700]'
  },
  { 
    value: '15+', 
    label: 'Industry Leaders',
    description: 'Trust our expertise',
    icon: '💼',
    gradient: 'from-[#C9A959] to-[#DAA520]'
  },
  { 
    value: '98%', 
    label: 'Client Retention',
    description: 'Long-term partnerships',
    icon: '⭐',
    gradient: 'from-[#C9A959] to-[#B8860B]'
  },
  { 
    value: '3+', 
    label: 'Years of Excellence',
    description: 'Serving Karachi since 2021',
    icon: '📈',
    gradient: 'from-[#C9A959] to-[#CDA434]'
  }
];

// Trust indicators with social proof
const trustIndicators = [
  {
    metric: 'ISO 27001',
    description: 'Information Security Certified',
    color: 'text-accent'
  },
  {
    metric: 'PCI DSS',
    description: 'Payment Security Compliant',
    color: 'text-accent'
  },
  {
    metric: 'GDPR',
    description: 'Data Protection Ready',
    color: 'text-accent'
  }
];

// Premium partners (text only - no images)
const partners = [
  { name: 'Engro', category: 'Energy Sector', since: '2022' },
  { name: 'Bank Alfalah', category: 'Financial Services', since: '2023' },
  { name: 'Netsol', category: 'Technology', since: '2021' },
  { name: 'Systems Limited', category: 'Enterprise', since: '2022' },
  { name: 'Arham Soft', category: 'Software', since: '2023' },
  { name: 'HBL', category: 'Banking', since: '2024' },
];

export default function TrustSignals() {
  const sectionRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  
  // ✅ FIXED: Scroll hooks ko mounted hone tak delay karo
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
        setY(v * 50);
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

  // Animation variants (not hooks, so safe anywhere)
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
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  const counterVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // ✅ Server-side render
  if (!mounted) {
    return (
      <section className="relative section-padding overflow-hidden bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
        <div className="container-custom">
          <div className="mb-20 text-center">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 text-sm border rounded-full border-accent/30 bg-accent/5 text-accent">
                ⚡ TRUSTED BY INDUSTRY LEADERS ⚡
              </span>
            </div>
            <h2 className="mb-4 text-white heading-lg">
              Pakistan's Most <span className="text-accent">Trusted</span> Software House
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
      {/* Background Pattern - Modern Grid */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${45}deg, #C9A959 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Gradient Orbs for Depth */}
      <motion.div 
        style={{ y }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div 
        style={{ y: floatingY1 }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
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
              ⚡ TRUSTED BY INDUSTRY LEADERS ⚡
            </span>
          </motion.div>

          <h2 className="mb-4 text-white heading-lg">
            Pakistan's Most <span className="gradient-text">Trusted</span> Software House
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-400">
            We don't just build software — we build lasting partnerships with enterprises 
            that shape Karachi's digital future.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 mb-20 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative p-8 transition-all duration-500 border group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 hover:border-accent/30"
            >
              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-accent/5 to-transparent group-hover:opacity-100"
                initial={false}
              />
              
              {/* Icon */}
              <motion.div 
                variants={counterVariants}
                className="mb-4 text-4xl transition-transform duration-300 transform group-hover:scale-110"
              >
                {stat.icon}
              </motion.div>
              
              {/* Value with Gradient */}
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className={`text-5xl md:text-6xl font-display bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
              >
                {stat.value}
              </motion.div>
              
              <h3 className="mb-2 text-xl font-medium text-white">
                {stat.label}
              </h3>
              
              <p className="text-sm text-gray-400">
                {stat.description}
              </p>

              {/* Decorative Line */}
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="p-8 border bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 backdrop-blur-sm md:p-12 rounded-2xl border-accent/20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="mb-3 text-3xl transition-transform text-accent group-hover:scale-110">
                    ✓
                  </div>
                  <div className="mb-2 text-xl font-medium text-white">
                    {item.metric}
                  </div>
                  <div className="text-sm text-gray-400">
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Premium Partners - Text Only */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-2xl text-white font-display"
          >
            <span className="gradient-text">Premium Partners</span> We've Served
          </motion.h3>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="cursor-default group"
              >
                <div className="relative p-4">
                  {/* Partner Name with Premium Typography */}
                  <div className="text-lg text-white transition-colors duration-300 font-display group-hover:text-accent">
                    {partner.name}
                  </div>
                  
                  {/* Category */}
                  <div className="mt-1 text-xs text-gray-500">
                    {partner.category}
                  </div>
                  
                  {/* Since Badge */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute px-2 py-1 text-xs rounded-full -top-2 -right-2 bg-accent text-primary"
                  >
                    since {partner.since}
                  </motion.div>

                  {/* Underline Animation */}
                  <motion.div 
                    className="h-0.5 bg-accent mt-2"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative max-w-4xl mx-auto mt-20 text-center"
        >
          {/* Decorative Quotes */}
          <div className="absolute left-0 font-serif -top-10 text-8xl text-accent/10">"</div>
          <div className="absolute right-0 font-serif -bottom-10 text-8xl text-accent/10">"</div>
          
          <motion.p 
            animate={{ 
              textShadow: ['0 0 20px rgba(201,169,89,0)', '0 0 30px rgba(201,169,89,0.3)', '0 0 20px rgba(201,169,89,0)']
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-2xl italic font-light leading-relaxed text-gray-300 md:text-3xl"
          >
            "ZENO didn't just deliver a product — they became our technology partners. 
            Their deep understanding of Karachi's business landscape is unparalleled."
          </motion.p>
          
          <div className="mt-8">
            <div className="text-xl font-medium text-white">
              Ali Raza
            </div>
            <div className="mt-1 text-sm text-accent">
              CTO · Leading Karachi Enterprise
            </div>
          </div>

          {/* Rating */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-2 mt-6"
          >
            <div className="flex gap-1">
              {[1,2,3,4,5].map((star) => (
                <motion.span
                  key={star}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ delay: star * 0.1, repeat: Infinity, duration: 2 }}
                  className="text-2xl text-accent"
                >
                  ★
                </motion.span>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-400">
              5.0 · 25+ reviews on Clutch
            </span>
          </motion.div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          style={{ y: floatingY1 }}
          className="absolute hidden top-20 right-10 lg:block"
        >
          <div className="p-4 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
            <div className="text-2xl text-accent font-display">98%</div>
            <div className="text-xs text-gray-400">Client Retention</div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: floatingY2 }}
          className="absolute hidden bottom-20 left-10 lg:block"
        >
          <div className="p-4 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
            <div className="text-2xl text-accent font-display">50+</div>
            <div className="text-xs text-gray-400">Projects</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}