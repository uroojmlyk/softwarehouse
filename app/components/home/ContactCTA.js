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
  
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // ✅ FIXED: mounted condition ke saath
//   const { scrollYProgress } = useScroll({
//     target: mounted ? sectionRef : undefined,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
//   const floatingY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

//   // ✅ FIXED: Agar mounted nahi toh null return
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
//           style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
//           className="absolute hidden top-40 right-10 xl:block"
//         >
//           <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
//             <div className="text-xs font-medium text-accent">50+ Projects</div>
//             <div className="text-[10px] text-gray-400">Delivered in Karachi</div>
//           </div>
//         </motion.div>

//         <motion.div
//           style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
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
  
  // ✅ FIXED: Scroll hooks ko states mein store karo
  const [scrollYProgress, setScrollYProgress] = useState(null);
  const [y, setY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [floatingY, setFloatingY] = useState(0);
  const [floatingStat1, setFloatingStat1] = useState(0);
  const [floatingStat2, setFloatingStat2] = useState(0);

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

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden section-padding"
    >
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/office7.jpg"
          alt="ZENO Office"
          fill
          className="object-cover transition-transform scale-105 group-hover:scale-110 duration-10000"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/95 via-[#1A1A1A]/90 to-[#0F0F0F]/95" />
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
      </div>

      {/* Floating Orbs */}
      <motion.div 
        style={{ y }}
        className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div 
        style={{ y: floatingY }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Main CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                ⚡ LET'S CREATE TOGETHER ⚡
              </span>
            </motion.div>

            <h2 className="mb-4 text-white heading-lg">
              Ready to Build Something{' '}
              <span className="gradient-text">Great?</span>
            </h2>
            
            <p className="mb-8 text-xl leading-relaxed text-gray-300">
              Join <span className="font-medium text-accent">50+ businesses</span> in Karachi that have transformed their digital presence with ZENO.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-[#0F0F0F] bg-accent/20 flex items-center justify-center text-xs text-accent"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-400">
                <span className="font-medium text-accent">15+</span> team members ready
              </div>
            </div>

            {/* Main CTA Buttons */}
            <div className="flex flex-col gap-4 mb-8 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Link 
                  href="/contact"
                  className="relative block px-8 py-5 overflow-hidden font-medium group bg-accent text-primary"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="relative z-10 text-lg">Start Your Project</span>
                  <motion.div 
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    animate={{ x: isHovered ? 0 : '-100%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span 
                    className="absolute z-10 -translate-y-1/2 right-8 top-1/2"
                    animate={{ x: isHovered ? 5 : 0 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Link 
                  href="/about"
                  className="block px-8 py-5 text-lg text-center transition-all duration-300 border-2 border-accent/50 text-accent hover:bg-accent hover:text-primary"
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
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 text-sm"
            >
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
              </div>
              <span className="text-gray-400">Average response time: </span>
              <span className="font-medium text-accent">&lt; 2 hours</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Info & Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 border bg-black/40 backdrop-blur-md border-white/10 rounded-2xl"
          >
            {/* Quick Contact Options */}
            <h3 className="mb-6 text-xl text-white font-display">
              Quick <span className="text-accent">Contact</span>
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {quickContacts.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.action}
                  target={contact.icon === '📍' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3, backgroundColor: 'rgba(201, 169, 89, 0.1)' }}
                  className="flex flex-col items-center p-4 transition-all border border-white/10 hover:border-accent/30 group"
                >
                  <span className="mb-2 text-2xl transition-transform group-hover:scale-110">
                    {contact.icon}
                  </span>
                  <span className="text-xs text-gray-400">{contact.label}</span>
                  <span className="mt-1 text-sm text-center text-white">
                    {contact.value}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mb-8">
              <h4 className="flex items-center gap-2 mb-4 font-medium text-white">
                <span className="w-1 h-4 bg-accent" />
                Business Hours
              </h4>
              <div className="space-y-2">
                {businessHours.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-400">{item.day}</span>
                    <span className="text-white">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Preview */}
            <div>
              <h4 className="flex items-center gap-2 mb-4 font-medium text-white">
                <span className="w-1 h-4 bg-accent" />
                Common Questions
              </h4>
              <div className="space-y-3">
                {faqPreviews.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-accent">✦</span>
                      <span className="text-gray-300">{faq.question}</span>
                    </div>
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      whileHover={{ height: 'auto', opacity: 1 }}
                      className="pl-6 overflow-hidden"
                    >
                      <p className="mt-1 text-xs text-gray-500">{faq.answer}</p>
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
              transition={{ type: "spring", delay: 0.5 }}
              className="pt-6 mt-8 border-t border-white/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-sm text-accent">★</span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">4.9 (25+ reviews)</span>
                </div>
                <span className="text-xs text-accent">Clutch.co</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar - Newsletter/Updates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 mt-16 border-t border-white/10"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-gray-400">
              © 2024 ZENO Software House. All rights reserved.
            </div>
            
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item, index) => (
                <Link 
                  key={index}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-xs text-gray-500 transition-colors hover:text-accent"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex gap-3">
              {['in', 'tw', 'ig'].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-center w-8 h-8 text-xs text-gray-400 transition-all border rounded-full border-white/10 hover:border-accent hover:text-accent"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          style={{ y: floatingStat1 }}
          className="absolute hidden top-40 right-10 xl:block"
        >
          <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
            <div className="text-xs font-medium text-accent">50+ Projects</div>
            <div className="text-[10px] text-gray-400">Delivered in Karachi</div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: floatingStat2 }}
          className="absolute hidden bottom-40 left-10 xl:block"
        >
          <div className="p-3 border rounded-lg bg-black/50 backdrop-blur-sm border-accent/20">
            <div className="text-xs font-medium text-accent">24/7 Support</div>
            <div className="text-[10px] text-gray-400">Enterprise grade</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}