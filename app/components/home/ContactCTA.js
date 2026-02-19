





// // src/components/home/ContactCTA.js
// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useRef, useState, useEffect } from 'react';

// export default function ContactCTA() {
//   const sectionRef = useRef(null);
//   const [email, setEmail] = useState('');
//   const [isHovered, setIsHovered] = useState(false);
//   const [mounted, setMounted] = useState(false);
  
//   // ✅ FIXED: Scroll hooks ko states mein store karo
//   const [scrollYProgress, setScrollYProgress] = useState(null);
//   const [y, setY] = useState(0);
//   const [opacity, setOpacity] = useState(1);
//   const [floatingY, setFloatingY] = useState(0);
//   const [floatingStat1, setFloatingStat1] = useState(0);
//   const [floatingStat2, setFloatingStat2] = useState(0);

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
//         setFloatingY(v * -50);
//         setFloatingStat1(v * -100);
//         setFloatingStat2(v * 100);
        
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

//   // ✅ FIXED: Agar mounted nahi toh simple return - hooks ke BAAD condition
//   if (!mounted) {
//     return null;
//   }

//   // Quick contact options
//   const quickContacts = [
//     { icon: '📞', label: 'Call Us', value: '+92 21 3587 6543', action: 'tel:+922135876543' },
//     { icon: '💬', label: 'WhatsApp', value: '+92 300 1234567', action: 'https://wa.me/923001234567' },
//     { icon: '📧', label: 'Email', value: 'hello@zeno.pk', action: 'mailto:hello@zeno.pk' },
//     { icon: '📍', label: 'Visit', value: 'DHA Phase 6, Karachi', action: 'https://maps.google.com/?q=DHA+Phase+6+Karachi' }
//   ];

//   // Business hours
//   const businessHours = [
//     { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
//     { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
//     { day: 'Sunday', hours: 'Closed' }
//   ];

//   // FAQ preview
//   const faqPreviews = [
//     { question: 'How quick can you start?', answer: 'Within 48 hours' },
//     { question: 'What\'s your pricing model?', answer: 'Fixed cost or dedicated team' },
//     { question: 'Do you offer support?', answer: '24/7 enterprise support' }
//   ];

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative overflow-hidden section-padding"
//     >
//       {/* Background Image with Premium Overlay */}
//       <div className="absolute inset-0">
//         <Image
//           src="/office7.jpg"
//           alt="ZENO Office"
//           fill
//           className="object-cover transition-transform scale-105 group-hover:scale-110 duration-10000"
//           priority
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/95 via-[#1A1A1A]/90 to-[#0F0F0F]/95" />
        
//         {/* Animated Pattern Overlay */}
//         <div className="absolute inset-0 opacity-10">
//           <div 
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
//               backgroundSize: '40px 40px'
//             }}
//           />
//         </div>
//       </div>

//       {/* Floating Orbs */}
//       <motion.div 
//         style={{ y }}
//         className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.2, 0.3, 0.2]
//         }}
//         transition={{ duration: 8, repeat: Infinity }}
//       />
      
//       <motion.div 
//         style={{ y: floatingY }}
//         className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"
//         animate={{
//           scale: [1, 1.3, 1],
//           opacity: [0.1, 0.2, 0.1]
//         }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />

//       <div className="relative z-10 container-custom">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           {/* Left Column - Main CTA */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             {/* Premium Badge */}
//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               className="inline-block mb-6"
//             >
//               <span className="relative inline-block px-6 py-3 text-sm tracking-widest border rounded-full border-accent/30 bg-black/30 backdrop-blur-sm text-accent">
//                 ⚡ LET'S CREATE TOGETHER ⚡
//               </span>
//             </motion.div>

//             <h2 className="mb-4 text-white heading-lg">
//               Ready to Build Something{' '}
//               <span className="gradient-text">Great?</span>
//             </h2>
            
//             <p className="mb-8 text-xl leading-relaxed text-gray-300">
//               Join <span className="font-medium text-accent">50+ businesses</span> in Karachi that have transformed their digital presence with ZENO.
//             </p>

//             {/* Trust Indicators */}
//             <div className="flex items-center gap-6 mb-8">
//               <div className="flex -space-x-2">
//                 {[1, 2, 3, 4].map((i) => (
//                   <div 
//                     key={i} 
//                     className="w-8 h-8 rounded-full border-2 border-[#0F0F0F] bg-accent/20 flex items-center justify-center text-xs text-accent"
//                   >
//                     {String.fromCharCode(64 + i)}
//                   </div>
//                 ))}
//               </div>
//               <div className="text-sm text-gray-400">
//                 <span className="font-medium text-accent">15+</span> team members ready
//               </div>
//             </div>

//             {/* Main CTA Buttons */}
//             <div className="flex flex-col gap-4 mb-8 sm:flex-row">
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="flex-1"
//               >
//                 <Link 
//                   href="/contact"
//                   className="relative block px-8 py-5 overflow-hidden font-medium group bg-accent text-primary"
//                   onMouseEnter={() => setIsHovered(true)}
//                   onMouseLeave={() => setIsHovered(false)}
//                 >
//                   <span className="relative z-10 text-lg">Start Your Project</span>
//                   <motion.div 
//                     className="absolute inset-0 bg-white"
//                     initial={{ x: '-100%' }}
//                     animate={{ x: isHovered ? 0 : '-100%' }}
//                     transition={{ duration: 0.3 }}
//                   />
//                   <motion.span 
//                     className="absolute z-10 -translate-y-1/2 right-8 top-1/2"
//                     animate={{ x: isHovered ? 5 : 0 }}
//                   >
//                     →
//                   </motion.span>
//                 </Link>
//               </motion.div>
              
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="flex-1"
//               >
//                 <Link 
//                   href="/about"
//                   className="block px-8 py-5 text-lg text-center transition-all duration-300 border-2 border-accent/50 text-accent hover:bg-accent hover:text-primary"
//                 >
//                   View Our Work
//                 </Link>
//               </motion.div>
//             </div>

//             {/* Quick Response Guarantee */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="flex items-center gap-3 text-sm"
//             >
//               <div className="relative">
//                 <div className="w-2 h-2 bg-green-500 rounded-full" />
//                 <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
//               </div>
//               <span className="text-gray-400">Average response time: </span>
//               <span className="font-medium text-accent">&lt; 2 hours</span>
//             </motion.div>
//           </motion.div>

//           {/* Right Column - Contact Info & Social Proof */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="p-8 border bg-black/40 backdrop-blur-md border-white/10 rounded-2xl"
//           >
//             {/* Quick Contact Options */}
//             <h3 className="mb-6 text-xl text-white font-display">
//               Quick <span className="text-accent">Contact</span>
//             </h3>

//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {quickContacts.map((contact, index) => (
//                 <motion.a
//                   key={index}
//                   href={contact.action}
//                   target={contact.icon === '📍' ? '_blank' : '_self'}
//                   rel="noopener noreferrer"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -3, backgroundColor: 'rgba(201, 169, 89, 0.1)' }}
//                   className="flex flex-col items-center p-4 transition-all border border-white/10 hover:border-accent/30 group"
//                 >
//                   <span className="mb-2 text-2xl transition-transform group-hover:scale-110">
//                     {contact.icon}
//                   </span>
//                   <span className="text-xs text-gray-400">{contact.label}</span>
//                   <span className="mt-1 text-sm text-center text-white">
//                     {contact.value}
//                   </span>
//                 </motion.a>
//               ))}
//             </div>

//             {/* Business Hours */}
//             <div className="mb-8">
//               <h4 className="flex items-center gap-2 mb-4 font-medium text-white">
//                 <span className="w-1 h-4 bg-accent" />
//                 Business Hours
//               </h4>
//               <div className="space-y-2">
//                 {businessHours.map((item, index) => (
//                   <div key={index} className="flex justify-between text-sm">
//                     <span className="text-gray-400">{item.day}</span>
//                     <span className="text-white">{item.hours}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* FAQ Preview */}
//             <div>
//               <h4 className="flex items-center gap-2 mb-4 font-medium text-white">
//                 <span className="w-1 h-4 bg-accent" />
//                 Common Questions
//               </h4>
//               <div className="space-y-3">
//                 {faqPreviews.map((faq, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                     className="cursor-pointer group"
//                   >
//                     <div className="flex items-center gap-2 text-sm">
//                       <span className="text-accent">✦</span>
//                       <span className="text-gray-300">{faq.question}</span>
//                     </div>
//                     <motion.div 
//                       initial={{ height: 0, opacity: 0 }}
//                       whileHover={{ height: 'auto', opacity: 1 }}
//                       className="pl-6 overflow-hidden"
//                     >
//                       <p className="mt-1 text-xs text-gray-500">{faq.answer}</p>
//                     </motion.div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Social Proof Badge */}
//             <motion.div 
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ type: "spring", delay: 0.5 }}
//               className="pt-6 mt-8 border-t border-white/10"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="flex">
//                     {[1,2,3,4,5].map((star) => (
//                       <span key={star} className="text-sm text-accent">★</span>
//                     ))}
//                   </div>
//                   <span className="text-xs text-gray-400">4.9 (25+ reviews)</span>
//                 </div>
//                 <span className="text-xs text-accent">Clutch.co</span>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Bottom Bar - Newsletter/Updates */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="pt-8 mt-16 border-t border-white/10"
//         >
//           <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
//             <div className="text-sm text-gray-400">
//               © 2024 ZENO Software House. All rights reserved.
//             </div>
            
//             <div className="flex gap-6">
//               {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item, index) => (
//                 <Link 
//                   key={index}
//                   href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                   className="text-xs text-gray-500 transition-colors hover:text-accent"
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>

//             <div className="flex gap-3">
//               {['in', 'tw', 'ig'].map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href="#"
//                   whileHover={{ y: -2 }}
//                   className="flex items-center justify-center w-8 h-8 text-xs text-gray-400 transition-all border rounded-full border-white/10 hover:border-accent hover:text-accent"
//                 >
//                   {social}
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Floating Stats */}
//         <motion.div
//           style={{ y: floatingStat1 }}
//           className="absolute hidden top-40 right-10 xl:block"
//         >
//           <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
//             <div className="text-xs font-medium text-accent">50+ Projects</div>
//             <div className="text-[10px] text-gray-400">Delivered in Karachi</div>
//           </div>
//         </motion.div>

//         <motion.div
//           style={{ y: floatingStat2 }}
//           className="absolute hidden bottom-40 left-10 xl:block"
//         >
//           <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
//             <div className="text-xs font-medium text-accent">24/7 Support</div>
//             <div className="text-[10px] text-gray-400">Enterprise grade</div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }   








// src/components/home/ContactCTA.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function ContactCTA() {
  const sectionRef = useRef(null);
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  
  // ✅ FIXED: Scroll hooks ko states mein store karo
  const [scrollYProgress, setScrollYProgress] = useState(null);
  const [y, setY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [floatingY, setFloatingY] = useState(0);
  const [floatingStat1, setFloatingStat1] = useState(0);
  const [floatingStat2, setFloatingStat2] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    
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
        setFloatingY(v * -50);
        setFloatingStat1(v * -100);
        setFloatingStat2(v * 100);
        
        // Opacity calculation
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

  // ✅ FIXED: Agar mounted nahi toh simple return - hooks ke BAAD condition
  if (!mounted) {
    return null;
  }

  // Quick contact options
  const quickContacts = [
    { icon: '📞', label: 'Call Us', value: '+92 21 3587 6543', action: 'tel:+922135876543' },
    { icon: '💬', label: 'WhatsApp', value: '+92 300 1234567', action: 'https://wa.me/923001234567' },
    { icon: '📧', label: 'Email', value: 'hello@zeno.pk', action: 'mailto:hello@zeno.pk' },
    { icon: '📍', label: 'Visit', value: 'DHA Phase 6, Karachi', action: 'https://maps.google.com/?q=DHA+Phase+6+Karachi' }
  ];

  // Business hours
  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  // FAQ preview
  const faqPreviews = [
    { question: 'How quick can you start?', answer: 'Within 48 hours' },
    { question: 'What\'s your pricing model?', answer: 'Fixed cost or dedicated team' },
    { question: 'Do you offer support?', answer: '24/7 enterprise support' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: windowWidth < 768 ? 0.05 : 0.1,
        delayChildren: windowWidth < 768 ? 0.1 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: windowWidth < 768 ? 15 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: windowWidth < 768 ? 0.4 : 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const goldGradients = {
    light: 'from-[#C9A959] via-[#D4AF37] to-[#FFD700]',
    medium: 'from-[#B8860B] via-[#C9A959] to-[#DAA520]'
  };

  const fontClasses = {
    display: 'font-display tracking-[-0.02em]',
    body: 'font-sans leading-relaxed'
  };

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden section-padding"
    >
      {/* ✅ OPTIMIZED: Background Image with Premium Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/office7.jpg"
          alt="ZENO Office"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover transition-transform scale-105 group-hover:scale-110 duration-10000"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/95 via-[#1A1A1A]/90 to-[#0F0F0F]/95" />
        
        {/* ✅ OPTIMIZED: Animated Pattern Overlay - responsive */}
        <div className="absolute inset-0 opacity-5 md:opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
              backgroundSize: windowWidth < 768 ? '30px 30px' : '40px 40px'
            }}
          />
        </div>
      </div>

      {/* ✅ OPTIMIZED: Floating Orbs - hidden on mobile */}
      {windowWidth >= 768 && (
        <>
          <motion.div 
            style={{ y }}
            className="absolute top-10 md:top-20 left-10 md:left-20 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-accent/10 rounded-full blur-[60px] md:blur-[80px] lg:blur-[100px] xl:blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <motion.div 
            style={{ y: floatingY }}
            className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-accent/10 rounded-full blur-[60px] md:blur-[80px] lg:blur-[100px] xl:blur-[120px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </>
      )}

      <div className="relative z-10 px-4 container-custom sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 lg:grid-cols-2">
          {/* Left Column - Main CTA */}
          <motion.div
            initial={{ opacity: 0, x: windowWidth < 768 ? -15 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: windowWidth < 768 ? 0.4 : 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-block mb-4 md:mb-5 lg:mb-6"
            >
              <span className="relative inline-block px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 text-[10px] md:text-xs lg:text-sm tracking-widest border rounded-full border-accent/30 bg-black/30 backdrop-blur-sm text-accent">
                ⚡ LET'S CREATE TOGETHER ⚡
              </span>
            </motion.div>

            <h2 className="px-4 mb-3 text-xl text-white md:mb-4 heading-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:px-0">
              Ready to Build Something{' '}
              <span className="block gradient-text sm:inline">Great?</span>
            </h2>
            
            <p className="px-4 mb-5 text-sm leading-relaxed text-gray-300 md:mb-6 lg:mb-8 md:text-base lg:text-lg xl:text-xl lg:px-0">
              Join <span className="font-medium text-accent">50+ businesses</span> in Karachi that have transformed their digital presence with ZENO.
            </p>

            {/* Trust Indicators - responsive */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-5 lg:justify-start md:gap-5 lg:gap-6 md:mb-6 lg:mb-8">
              <div className="flex -space-x-1.5 md:-space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full border-2 border-[#0F0F0F] bg-accent/20 flex items-center justify-center text-[8px] md:text-[10px] lg:text-xs text-accent"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-xs text-gray-400 md:text-sm">
                <span className="font-medium text-accent">15+</span> team members ready
              </div>
            </div>

            {/* ✅ OPTIMIZED: Main CTA Buttons - Responsive */}
            <div className="flex flex-col gap-3 px-4 mb-5 sm:flex-row md:gap-4 md:mb-6 lg:mb-8 lg:px-0">
              <motion.div
                whileHover={{ scale: windowWidth < 768 ? 1.01 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Link 
                  href="/contact"
                  className="relative block px-4 py-3 overflow-hidden text-sm font-medium rounded-lg md:px-5 lg:px-6 xl:px-8 md:py-4 group bg-accent text-primary md:text-base lg:text-lg"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="relative z-10">Start Your Project</span>
                  <motion.div 
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    animate={{ x: isHovered ? 0 : '-100%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span 
                    className="absolute z-10 text-sm -translate-y-1/2 right-4 md:right-6 lg:right-8 top-1/2 md:text-base"
                    animate={{ x: isHovered ? 3 : 0 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: windowWidth < 768 ? 1.01 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Link 
                  href="/about"
                  className="block px-4 py-3 text-sm text-center transition-all duration-300 border-2 rounded-lg md:px-5 lg:px-6 xl:px-8 md:py-4 md:text-base lg:text-lg border-accent/50 text-accent hover:bg-accent hover:text-primary"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>

            {/* Quick Response Guarantee */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-2 text-xs lg:justify-start md:gap-3 md:text-sm"
            >
              <div className="relative">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full" />
                <div className="absolute inset-0 w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-ping" />
              </div>
              <span className="text-gray-400">Average response time: </span>
              <span className="font-medium text-accent">&lt; 2 hours</span>
            </motion.div>
          </motion.div>

          {/* ✅ OPTIMIZED: Right Column - Contact Info & Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: windowWidth < 768 ? 15 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: windowWidth < 768 ? 0.4 : 0.6, delay: 0.1 }}
            className="p-4 border rounded-lg md:p-5 lg:p-6 xl:p-8 bg-black/40 backdrop-blur-md border-white/10 md:rounded-xl lg:rounded-2xl"
          >
            {/* Quick Contact Options */}
            <h3 className="mb-4 text-base text-center text-white md:mb-5 lg:mb-6 md:text-lg lg:text-xl xl:text-2xl font-display lg:text-left">
              Quick <span className="text-accent">Contact</span>
            </h3>

            <div className="grid grid-cols-2 gap-2 mb-5 md:gap-3 lg:gap-4 md:mb-6 lg:mb-8">
              {quickContacts.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.action}
                  target={contact.icon === '📍' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="flex flex-col items-center p-2 transition-all border rounded-lg md:p-3 border-white/10 hover:border-accent/30 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm group"
                >
                  <span className="mb-1 text-lg transition-transform md:mb-2 md:text-xl lg:text-2xl group-hover:scale-110">
                    {contact.icon}
                  </span>
                  <span className="text-[8px] md:text-[10px] lg:text-xs text-gray-400">{contact.label}</span>
                  <span className={`text-[8px] md:text-[10px] lg:text-xs text-white text-center mt-0.5 ${fontClasses.body}`}>
                    {contact.value}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mb-5 md:mb-6 lg:mb-8">
              <h4 className="flex items-center justify-center gap-1 mb-3 text-sm font-medium text-white lg:justify-start md:gap-2 md:mb-4 md:text-base">
                <span className="w-1 h-3 md:h-4 bg-accent" />
                Business Hours
              </h4>
              <div className="space-y-1.5 md:space-y-2">
                {businessHours.map((item, index) => (
                  <div key={index} className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-400">{item.day}</span>
                    <span className="text-white">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="mb-5 md:mb-6 lg:mb-8">
              <h4 className="flex items-center justify-center gap-1 mb-3 text-sm font-medium text-white lg:justify-start md:gap-2 md:mb-4 md:text-base">
                <span className="w-1 h-3 md:h-4 bg-accent" />
                Common Questions
              </h4>
              <div className="space-y-2 md:space-y-3">
                {faqPreviews.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="cursor-pointer group"
                  >
                    <div className="flex items-center justify-center gap-1 text-xs lg:justify-start md:gap-2 md:text-sm">
                      <span className="text-accent text-[10px] md:text-xs">✦</span>
                      <span className="text-gray-300">{faq.question}</span>
                    </div>
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      whileHover={{ height: 'auto', opacity: 1 }}
                      className="pl-4 overflow-hidden text-center md:pl-5 lg:pl-6 lg:text-left"
                    >
                      <p className="mt-1 text-[8px] md:text-[10px] lg:text-xs text-gray-500">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Proof Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3 }}
              className="pt-4 mt-4 border-t md:pt-5 lg:pt-6 md:mt-5 lg:mt-6 border-white/10"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-xs md:text-sm text-accent">★</span>
                    ))}
                  </div>
                  <span className="text-[8px] md:text-[10px] lg:text-xs text-gray-400">4.9 (25+ reviews)</span>
                </div>
                <span className="text-[8px] md:text-[10px] lg:text-xs text-accent">Clutch.co</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ✅ OPTIMIZED: Bottom Bar - Newsletter/Updates - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="pt-5 mt-8 border-t md:pt-6 lg:pt-8 md:mt-10 lg:mt-12 xl:mt-16 border-white/10"
        >
          <div className="flex flex-col items-center justify-between gap-3 lg:flex-row md:gap-4">
            <div className="text-[10px] md:text-xs lg:text-sm text-gray-400 text-center lg:text-left">
              © 2024 ZENO Software House. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5 xl:gap-6">
              {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item, index) => (
                <Link 
                  key={index}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-[8px] md:text-[10px] lg:text-xs text-gray-500 transition-colors hover:text-accent whitespace-nowrap"
                >
                  {windowWidth < 640 ? (index === 0 ? 'Privacy' : index === 1 ? 'Terms' : 'Sitemap') : item}
                </Link>
              ))}
            </div>

            <div className="flex gap-2 md:gap-3">
              {['in', 'tw', 'ig'].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[8px] md:text-[10px] lg:text-xs text-gray-400 transition-all border rounded-full border-white/10 hover:border-accent hover:text-accent"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ✅ OPTIMIZED: Floating Stats - hidden on mobile/tablet */}
        {windowWidth >= 1280 && (
          <>
            <motion.div
              style={{ y: floatingStat1 }}
              className="absolute hidden top-40 right-10 xl:block"
            >
              <div className="p-2 border rounded-lg md:p-3 bg-black/50 backdrop-blur-sm border-accent/20">
                <div className="text-[10px] md:text-xs font-medium text-accent">50+ Projects</div>
                <div className="text-[8px] md:text-[10px] text-gray-400">Delivered in Karachi</div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: floatingStat2 }}
              className="absolute hidden bottom-40 left-10 xl:block"
            >
              <div className="p-2 border rounded-lg md:p-3 bg-black/50 backdrop-blur-sm border-accent/20">
                <div className="text-[10px] md:text-xs font-medium text-accent">24/7 Support</div>
                <div className="text-[8px] md:text-[10px] text-gray-400">Enterprise grade</div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}