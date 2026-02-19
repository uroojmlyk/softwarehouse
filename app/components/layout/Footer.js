// // src/components/layout/Footer.js
// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useState } from 'react';

// export default function Footer() {
//   const [email, setEmail] = useState('');
//   const [subscriptionStatus, setSubscriptionStatus] = useState('idle'); // idle, loading, success, error

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     setSubscriptionStatus('loading');
//     // Simulate API call
//     setTimeout(() => {
//       setSubscriptionStatus('success');
//       setEmail('');
//       setTimeout(() => setSubscriptionStatus('idle'), 3000);
//     }, 1000);
//   };

//   // Company info
//   const companyInfo = {
//     name: 'ZENO',
//     tagline: 'Software Development House',
//     founded: '2021',
//     address: 'DHA Phase 6, Karachi',
//     phone: '+92 21 3587 6543',
//     email: 'hello@zeno.pk',
//     hours: 'Mon - Fri: 9:00 AM - 6:00 PM'
//   };

//   // Navigation links with icons
//   const navLinks = [
//     { name: 'About', href: '/about', icon: '🏢' },
//     { name: 'Services', href: '/services', icon: '⚡' },
//     { name: 'Work', href: '/work', icon: '💼' },
//     { name: 'Contact', href: '/contact', icon: '📞' }
//   ];

//   // Services with icons
//   const services = [
//     { name: 'Web Development', href: '/services/web-development', icon: '💻' },
//     { name: 'Mobile Apps', href: '/services/mobile-apps', icon: '📱' },
//     { name: 'Cloud Solutions', href: '/services/cloud', icon: '☁️' },
//     { name: 'DevOps', href: '/services/devops', icon: '⚙️' },
//     { name: 'AI/ML', href: '/services/ai-ml', icon: '🤖' },
//     { name: 'UI/UX Design', href: '/services/design', icon: '🎨' }
//   ];

//   // Social media links
//   const socialLinks = [
//     { name: 'LinkedIn', icon: 'in', href: 'https://linkedin.com/company/zeno', color: 'hover:bg-[#0077B5]' },
//     { name: 'Twitter', icon: '𝕏', href: 'https://twitter.com/zeno', color: 'hover:bg-[#1DA1F2]' },
//     { name: 'Instagram', icon: 'ig', href: 'https://instagram.com/zeno', color: 'hover:bg-[#E4405F]' },
//     { name: 'GitHub', icon: 'gh', href: 'https://github.com/zeno', color: 'hover:bg-[#333]' },
//     { name: 'Dribbble', icon: 'dr', href: 'https://dribbble.com/zeno', color: 'hover:bg-[#EA4C89]' }
//   ];

//   // Trust badges
//   const trustBadges = [
//     { name: 'ISO 27001', icon: '🛡️' },
//     { name: 'PCI DSS', icon: '💳' },
//     { name: 'GDPR', icon: '🔒' },
//     { name: 'Clutch Top', icon: '⭐' }
//   ];

//   // Animation variants
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
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.5 }
//     }
//   };

//   return (
//     <footer className="relative bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] text-white border-t border-white/10">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
//             backgroundSize: '40px 40px'
//           }}
//         />
//       </div>

//       {/* Decorative Gradient Line */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

//       <div className="relative z-10 container-custom">
//         {/* Main Footer Content */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="py-16"
//         >
//           {/* Top Section - Newsletter */}
//           <motion.div 
//             variants={itemVariants}
//             className="grid gap-8 p-8 mb-16 border lg:grid-cols-2 bg-gradient-to-r from-accent/10 to-transparent border-accent/20 rounded-2xl"
//           >
//             <div>
//               <h3 className="mb-2 text-2xl text-white font-display">
//                 Stay <span className="gradient-text">Updated</span>
//               </h3>
//               <p className="text-gray-400">
//                 Get insights on enterprise software trends and ZENO's latest projects.
//               </p>
//             </div>
            
//             <form onSubmit={handleSubscribe} className="flex gap-2">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-3 text-white placeholder-gray-500 transition-colors border bg-black/50 border-white/20 focus:border-accent focus:outline-none"
//                 required
//               />
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 disabled={subscriptionStatus === 'loading'}
//                 className="relative px-6 py-3 overflow-hidden font-medium bg-accent text-primary disabled:opacity-50 group"
//               >
//                 <span className="relative z-10">
//                   {subscriptionStatus === 'loading' ? '...' : 
//                    subscriptionStatus === 'success' ? '✓' : 'Subscribe'}
//                 </span>
//                 <motion.div 
//                   className="absolute inset-0 bg-white"
//                   initial={{ x: '-100%' }}
//                   whileHover={{ x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.button>
//             </form>
//           </motion.div>

//           {/* Main Footer Grid */}
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
//             {/* Company Info */}
//             <motion.div variants={itemVariants}>
//               <div className="mb-6">
//                 <h2 className="mb-2 text-3xl text-white font-display">
//                   {companyInfo.name}
//                   <span className="block mt-1 text-sm text-accent">{companyInfo.tagline}</span>
//                 </h2>
//               </div>
              
//               <p className="mb-6 leading-relaxed text-gray-400">
//                 Premium software development house based in DHA, Karachi. 
//                 Building enterprise solutions since {companyInfo.founded}.
//               </p>

//               {/* Trust Badges */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {trustBadges.map((badge, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ y: -2 }}
//                     className="flex items-center gap-1 px-3 py-1 text-xs border rounded-full bg-accent/10 border-accent/20 text-accent"
//                   >
//                     <span>{badge.icon}</span>
//                     <span>{badge.name}</span>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Social Links */}
//               <div className="flex gap-2">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ y: -3 }}
//                     className={`w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-accent transition-all ${social.color}`}
//                     aria-label={social.name}
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Quick Links */}
//             <motion.div variants={itemVariants}>
//               <h4 className="flex items-center gap-2 mb-6 text-lg text-white font-display">
//                 <span className="w-1 h-4 bg-accent" />
//                 Quick Links
//               </h4>
//               <ul className="space-y-3">
//                 {navLinks.map((link, index) => (
//                   <motion.li 
//                     key={index}
//                     whileHover={{ x: 5 }}
//                   >
//                     <Link 
//                       href={link.href}
//                       className="flex items-center gap-2 text-gray-400 transition-colors hover:text-accent group"
//                     >
//                       <span className="transition-opacity opacity-0 text-accent group-hover:opacity-100">
//                         {link.icon}
//                       </span>
//                       <span>{link.name}</span>
//                     </Link>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* Services */}
//             <motion.div variants={itemVariants}>
//               <h4 className="flex items-center gap-2 mb-6 text-lg text-white font-display">
//                 <span className="w-1 h-4 bg-accent" />
//                 Our Services
//               </h4>
//               <ul className="space-y-3">
//                 {services.map((service, index) => (
//                   <motion.li 
//                     key={index}
//                     whileHover={{ x: 5 }}
//                   >
//                     <Link 
//                       href={service.href}
//                       className="flex items-center gap-2 text-gray-400 transition-colors hover:text-accent group"
//                     >
//                       <span className="transition-opacity opacity-0 text-accent group-hover:opacity-100">
//                         {service.icon}
//                       </span>
//                       <span>{service.name}</span>
//                     </Link>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* Contact Info */}
//             <motion.div variants={itemVariants}>
//               <h4 className="flex items-center gap-2 mb-6 text-lg text-white font-display">
//                 <span className="w-1 h-4 bg-accent" />
//                 Get in Touch
//               </h4>
              
//               <ul className="space-y-4">
//                 <motion.li 
//                   whileHover={{ x: 5 }}
//                   className="flex items-start gap-3"
//                 >
//                   <span className="text-lg text-accent">📍</span>
//                   <div>
//                     <div className="mb-1 text-xs text-gray-500">Visit Us</div>
//                     <span className="text-sm text-gray-300">{companyInfo.address}</span>
//                   </div>
//                 </motion.li>
                
//                 <motion.li 
//                   whileHover={{ x: 5 }}
//                   className="flex items-start gap-3"
//                 >
//                   <span className="text-lg text-accent">📞</span>
//                   <div>
//                     <div className="mb-1 text-xs text-gray-500">Call Us</div>
//                     <a href={`tel:${companyInfo.phone}`} className="text-sm text-gray-300 transition-colors hover:text-accent">
//                       {companyInfo.phone}
//                     </a>
//                   </div>
//                 </motion.li>
                
//                 <motion.li 
//                   whileHover={{ x: 5 }}
//                   className="flex items-start gap-3"
//                 >
//                   <span className="text-lg text-accent">✉️</span>
//                   <div>
//                     <div className="mb-1 text-xs text-gray-500">Email Us</div>
//                     <a href={`mailto:${companyInfo.email}`} className="text-sm text-gray-300 transition-colors hover:text-accent">
//                       {companyInfo.email}
//                     </a>
//                   </div>
//                 </motion.li>
                
//                 <motion.li 
//                   whileHover={{ x: 5 }}
//                   className="flex items-start gap-3"
//                 >
//                   <span className="text-lg text-accent">⏰</span>
//                   <div>
//                     <div className="mb-1 text-xs text-gray-500">Business Hours</div>
//                     <span className="text-sm text-gray-300">{companyInfo.hours}</span>
//                   </div>
//                 </motion.li>
//               </ul>

//               {/* Emergency Contact */}
//               <motion.div 
//                 whileHover={{ scale: 1.02 }}
//                 className="p-4 mt-6 border rounded-lg bg-accent/10 border-accent/20"
//               >
//                 <div className="mb-1 text-xs text-accent">24/7 Support</div>
//                 <a href="tel:+923001234567" className="text-sm font-medium text-white transition-colors hover:text-accent">
//                   +92 300 1234567
//                 </a>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Bottom Bar */}
//           <motion.div 
//             variants={itemVariants}
//             className="pt-8 mt-16 border-t border-white/10"
//           >
//             <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
//               {/* Copyright */}
//               <div className="text-sm text-gray-500">
//                 © {new Date().getFullYear()} ZENO. All rights reserved.
//                 <span className="mx-2">•</span>
//                 <span className="text-accent">v2.0.0</span>
//               </div>

//               {/* Legal Links */}
//               <div className="flex flex-wrap gap-6 text-sm">
//                 {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Sitemap'].map((item, index) => (
//                   <Link
//                     key={index}
//                     href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                     className="text-gray-500 transition-colors hover:text-accent"
//                   >
//                     {item}
//                   </Link>
//                 ))}
//               </div>

//               {/* Made with love */}
//               <div className="flex items-center gap-1 text-sm text-gray-500">
//                 <span>Made with</span>
//                 <motion.span
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ repeat: Infinity, duration: 2 }}
//                   className="text-accent"
//                 >
//                   ❤️
//                 </motion.span>
//                 <span>in Karachi</span>
//               </div>
//             </div>

//             {/* Certifications */}
//             <div className="flex justify-center gap-4 mt-6 text-xs text-gray-600">
//               <span>ISO 27001 Certified</span>
//               <span>•</span>
//               <span>PCI DSS Compliant</span>
//               <span>•</span>
//               <span>GDPR Ready</span>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Back to Top Button */}
//         <motion.button
//           initial={{ opacity: 0, scale: 0 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           whileHover={{ scale: 1.1 }}
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="absolute flex items-center justify-center w-10 h-10 transition-shadow rounded-full shadow-lg -top-5 right-10 bg-accent text-primary hover:shadow-xl"
//         >
//           ↑
//         </motion.button>
//       </div>
//     </footer>
//   );
// }  







// src/components/layout/Footer.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('idle'); // idle, loading, success, error
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscriptionStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setSubscriptionStatus('success');
      setEmail('');
      setTimeout(() => setSubscriptionStatus('idle'), 3000);
    }, 1000);
  };

  // Company info
  const companyInfo = {
    name: 'ZENO',
    tagline: 'Software Development House',
    founded: '2021',
    address: 'DHA Phase 6, Karachi',
    phone: '+92 21 3587 6543',
    email: 'hello@zeno.pk',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM'
  };

  // Navigation links with icons
  const navLinks = [
    { name: 'About', href: '/about', icon: '🏢' },
    { name: 'Services', href: '/services', icon: '⚡' },
    { name: 'Work', href: '/work', icon: '💼' },
    { name: 'Contact', href: '/contact', icon: '📞' }
  ];

  // Services with icons
  const services = [
    { name: 'Web Development', href: '/services/web-development', icon: '💻' },
    { name: 'Mobile Apps', href: '/services/mobile-apps', icon: '📱' },
    { name: 'Cloud Solutions', href: '/services/cloud', icon: '☁️' },
    { name: 'DevOps', href: '/services/devops', icon: '⚙️' },
    { name: 'AI/ML', href: '/services/ai-ml', icon: '🤖' },
    { name: 'UI/UX Design', href: '/services/design', icon: '🎨' }
  ];

  // Social media links
  const socialLinks = [
    { name: 'LinkedIn', icon: 'in', href: 'https://linkedin.com/company/zeno', color: 'hover:bg-[#0077B5]' },
    { name: 'Twitter', icon: '𝕏', href: 'https://twitter.com/zeno', color: 'hover:bg-[#1DA1F2]' },
    { name: 'Instagram', icon: 'ig', href: 'https://instagram.com/zeno', color: 'hover:bg-[#E4405F]' },
    { name: 'GitHub', icon: 'gh', href: 'https://github.com/zeno', color: 'hover:bg-[#333]' },
    { name: 'Dribbble', icon: 'dr', href: 'https://dribbble.com/zeno', color: 'hover:bg-[#EA4C89]' }
  ];

  // Trust badges
  const trustBadges = [
    { name: 'ISO 27001', icon: '🛡️' },
    { name: 'PCI DSS', icon: '💳' },
    { name: 'GDPR', icon: '🔒' },
    { name: 'Clutch Top', icon: '⭐' }
  ];

  // ✅ OPTIMIZED: Animation variants with responsive values
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
    hidden: { opacity: 0, y: windowWidth < 768 ? 10 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: windowWidth < 768 ? 0.3 : 0.5 }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] text-white border-t border-white/10 overflow-hidden">
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

      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative z-10 px-4 container-custom sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="py-8 md:py-12 lg:py-16"
        >
          {/* ✅ OPTIMIZED: Top Section - Newsletter - Responsive */}
          <motion.div 
            variants={itemVariants}
            className="grid gap-4 p-4 mb-8 border rounded-lg lg:grid-cols-2 md:gap-6 lg:gap-8 md:mb-12 lg:mb-16 md:p-6 lg:p-8 bg-gradient-to-r from-accent/10 to-transparent border-accent/20 md:rounded-xl lg:rounded-2xl"
          >
            <div className="text-center lg:text-left">
              <h3 className="mb-1 text-lg text-white md:text-xl lg:text-2xl xl:text-3xl font-display md:mb-2">
                Stay <span className="gradient-text">Updated</span>
              </h3>
              <p className="text-xs text-gray-400 md:text-sm lg:text-base">
                Get insights on enterprise software trends and ZENO's latest projects.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 sm:flex-row md:gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-xs text-white placeholder-gray-500 transition-colors border rounded-lg md:px-4 md:py-3 bg-black/50 border-white/20 md:text-sm focus:border-accent focus:outline-none"
                required
              />
              <motion.button
                whileHover={{ scale: windowWidth < 768 ? 1.01 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={subscriptionStatus === 'loading'}
                className="relative px-4 py-2 overflow-hidden text-xs font-medium rounded-lg md:px-5 lg:px-6 md:py-3 bg-accent text-primary md:text-sm disabled:opacity-50 group whitespace-nowrap"
              >
                <span className="relative z-10">
                  {subscriptionStatus === 'loading' ? (
                    <svg className="w-3 h-3 mx-auto md:w-4 md:h-4 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : subscriptionStatus === 'success' ? '✓' : 'Subscribe'}
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>

          {/* ✅ OPTIMIZED: Main Footer Grid - Responsive */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-10 xl:gap-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="text-center sm:text-left">
              <div className="mb-3 md:mb-4 lg:mb-6">
                <h2 className="mb-1 text-2xl text-white md:text-3xl lg:text-4xl font-display md:mb-2">
                  {companyInfo.name}
                  <span className="block text-[10px] md:text-xs lg:text-sm text-accent mt-0.5 md:mt-1">{companyInfo.tagline}</span>
                </h2>
              </div>
              
              <p className="mb-4 text-xs leading-relaxed text-gray-400 md:text-sm md:mb-5 lg:mb-6">
                Premium software development house based in DHA, Karachi. 
                Building enterprise solutions since {companyInfo.founded}.
              </p>

              {/* Trust Badges - responsive */}
              <div className="flex flex-wrap justify-center gap-1 mb-4 sm:justify-start md:gap-2 md:mb-5 lg:mb-6">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2 }}
                    className="px-2 md:px-2.5 lg:px-3 py-0.5 md:py-1 bg-accent/10 border border-accent/20 rounded-full text-[8px] md:text-[10px] lg:text-xs text-accent flex items-center gap-0.5 md:gap-1"
                  >
                    <span>{badge.icon}</span>
                    <span className="hidden xs:inline">{badge.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Social Links - responsive */}
              <div className="flex flex-wrap justify-center gap-1 sm:justify-start md:gap-2">
                {socialLinks.slice(0, windowWidth < 640 ? 3 : 5).map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className={`w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-accent transition-all text-xs md:text-sm ${social.color} rounded-lg`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="text-center sm:text-left">
              <h4 className="flex items-center justify-center gap-1 mb-3 text-base text-white md:text-lg lg:text-xl font-display md:mb-4 lg:mb-6 sm:justify-start md:gap-2">
                <span className="w-1 h-3 md:h-4 bg-accent" />
                Quick Links
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: windowWidth < 768 ? 2 : 5 }}
                  >
                    <Link 
                      href={link.href}
                      className="flex items-center justify-center gap-1 text-xs text-gray-400 transition-colors sm:justify-start md:gap-2 md:text-sm hover:text-accent group"
                    >
                      <span className="text-xs transition-opacity opacity-0 text-accent group-hover:opacity-100 md:text-sm">
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="text-center sm:text-left">
              <h4 className="flex items-center justify-center gap-1 mb-3 text-base text-white md:text-lg lg:text-xl font-display md:mb-4 lg:mb-6 sm:justify-start md:gap-2">
                <span className="w-1 h-3 md:h-4 bg-accent" />
                Our Services
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {services.slice(0, windowWidth < 640 ? 4 : 6).map((service, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: windowWidth < 768 ? 2 : 5 }}
                  >
                    <Link 
                      href={service.href}
                      className="flex items-center justify-center gap-1 text-xs text-gray-400 transition-colors sm:justify-start md:gap-2 md:text-sm hover:text-accent group"
                    >
                      <span className="text-xs transition-opacity opacity-0 text-accent group-hover:opacity-100 md:text-sm">
                        {service.icon}
                      </span>
                      <span>{service.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="text-center sm:text-left">
              <h4 className="flex items-center justify-center gap-1 mb-3 text-base text-white md:text-lg lg:text-xl font-display md:mb-4 lg:mb-6 sm:justify-start md:gap-2">
                <span className="w-1 h-3 md:h-4 bg-accent" />
                Get in Touch
              </h4>
              
              <ul className="space-y-2 md:space-y-3 lg:space-y-4">
                <motion.li 
                  whileHover={{ x: windowWidth < 768 ? 2 : 5 }}
                  className="flex items-start justify-center gap-2 sm:justify-start md:gap-3"
                >
                  <span className="text-sm text-accent md:text-base lg:text-lg">📍</span>
                  <div>
                    <div className="text-[8px] md:text-[10px] lg:text-xs text-gray-500 mb-0.5">Visit Us</div>
                    <span className="text-xs text-gray-300 md:text-sm">{companyInfo.address}</span>
                  </div>
                </motion.li>
                
                <motion.li 
                  whileHover={{ x: windowWidth < 768 ? 2 : 5 }}
                  className="flex items-start justify-center gap-2 sm:justify-start md:gap-3"
                >
                  <span className="text-sm text-accent md:text-base lg:text-lg">📞</span>
                  <div>
                    <div className="text-[8px] md:text-[10px] lg:text-xs text-gray-500 mb-0.5">Call Us</div>
                    <a href={`tel:${companyInfo.phone}`} className="text-xs text-gray-300 transition-colors md:text-sm hover:text-accent">
                      {companyInfo.phone}
                    </a>
                  </div>
                </motion.li>
                
                <motion.li 
                  whileHover={{ x: windowWidth < 768 ? 2 : 5 }}
                  className="flex items-start justify-center gap-2 sm:justify-start md:gap-3"
                >
                  <span className="text-sm text-accent md:text-base lg:text-lg">✉️</span>
                  <div>
                    <div className="text-[8px] md:text-[10px] lg:text-xs text-gray-500 mb-0.5">Email Us</div>
                    <a href={`mailto:${companyInfo.email}`} className="text-xs text-gray-300 transition-colors md:text-sm hover:text-accent">
                      {companyInfo.email}
                    </a>
                  </div>
                </motion.li>
                
                <motion.li 
                  whileHover={{ x: windowWidth < 768 ? 2 : 5 }}
                  className="flex items-start justify-center gap-2 sm:justify-start md:gap-3"
                >
                  <span className="text-sm text-accent md:text-base lg:text-lg">⏰</span>
                  <div>
                    <div className="text-[8px] md:text-[10px] lg:text-xs text-gray-500 mb-0.5">Business Hours</div>
                    <span className="text-xs text-gray-300 md:text-sm">{companyInfo.hours}</span>
                  </div>
                </motion.li>
              </ul>

              {/* Emergency Contact - responsive */}
              <motion.div 
                whileHover={{ scale: windowWidth < 768 ? 1.01 : 1.02 }}
                className="mt-4 md:mt-5 lg:mt-6 p-3 md:p-3.5 lg:p-4 bg-accent/10 border border-accent/20 rounded-lg"
              >
                <div className="text-[8px] md:text-[10px] lg:text-xs text-accent mb-0.5">24/7 Support</div>
                <a href="tel:+923001234567" className="text-xs font-medium text-white transition-colors md:text-sm lg:text-base hover:text-accent">
                  +92 300 1234567
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* ✅ OPTIMIZED: Bottom Bar - Responsive */}
          <motion.div 
            variants={itemVariants}
            className="pt-6 mt-8 border-t md:mt-12 lg:mt-16 md:pt-7 lg:pt-8 border-white/10"
          >
            <div className="flex flex-col items-center justify-between gap-3 lg:flex-row md:gap-4 lg:gap-6">
              {/* Copyright */}
              <div className="text-[10px] md:text-xs lg:text-sm text-gray-500 text-center lg:text-left">
                © {new Date().getFullYear()} ZENO. All rights reserved.
                <span className="mx-1 md:mx-2">•</span>
                <span className="text-accent">v2.0.0</span>
              </div>

              {/* Legal Links - responsive */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 text-[10px] md:text-xs lg:text-sm">
                {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Sitemap'].map((item, index) => (
                  <Link
                    key={index}
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-500 transition-colors hover:text-accent whitespace-nowrap"
                  >
                    {windowWidth < 640 ? item.split(' ')[0] : item}
                  </Link>
                ))}
              </div>

              {/* Made with love */}
              <div className="flex items-center gap-1 text-[10px] md:text-xs lg:text-sm text-gray-500">
                <span>Made with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-accent"
                >
                  ❤️
                </motion.span>
                <span>in Karachi</span>
              </div>
            </div>

            {/* Certifications - responsive */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 mt-4 md:mt-5 lg:mt-6 text-[8px] md:text-[10px] lg:text-xs text-gray-600">
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>PCI DSS Compliant</span>
              <span>•</span>
              <span>GDPR Ready</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ✅ OPTIMIZED: Back to Top Button - responsive */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: windowWidth < 768 ? 1.05 : 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute flex items-center justify-center w-8 h-8 text-sm transition-shadow rounded-full shadow-lg -top-4 md:-top-5 right-2 md:right-4 lg:right-6 xl:right-10 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-accent text-primary hover:shadow-xl md:text-base lg:text-lg"
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
}