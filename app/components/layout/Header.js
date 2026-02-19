



// // src/components/layout/Header.js
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close menu on escape key
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === 'Escape') setIsMenuOpen(false);
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, []);

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMenuOpen]);

//   const navItems = [
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Work', href: '/work' },
//     { name: 'Contact', href: '/contact' }
//   ];

//   // Animation variants
//   const menuVariants = {
//     hidden: { 
//       opacity: 0,
//       y: '-100%',
//     },
//     visible: { 
//       opacity: 1,
//       y: 0,
//       transition: { 
//         duration: 0.5,
//         ease: [0.33, 1, 0.68, 1],
//         staggerChildren: 0.08,
//         delayChildren: 0.2
//       }
//     },
//     exit: { 
//       opacity: 0,
//       y: '-100%',
//       transition: { 
//         duration: 0.4,
//         ease: [0.32, 0, 0.67, 0]
//       }
//     }
//   };

//   const menuItemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.4,
//         ease: [0.33, 1, 0.68, 1]
//       }
//     }
//   };

//   // Smooth icon animation
//   const lineVariants = {
//     closed: { rotate: 0, y: 0 },
//     open: (custom) => ({
//       rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
//       y: custom === 1 ? 8 : custom === 3 ? -8 : 0,
//       opacity: custom === 2 ? 0 : 1,
//       transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] }
//     })
//   };

//   return (
//     <>
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           scrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'
//         }`}
//       >
//         <nav className="container-custom">
//           <div className="flex items-center justify-between h-20 md:h-24">
//             {/* Left Spacer - Empty */}
//             <div className="w-10 md:w-12"></div>

//             {/* Center - Logo and Menu Icon */}
//             <div className="flex items-center gap-2 md:gap-3">
//               {/* Logo */}
//               <Link href="/" className="group" onClick={() => setIsMenuOpen(false)}>
//                 <motion.h1 
//                   className="text-3xl md:text-4xl font-display font-bold"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 25 }}
//                 >
//                   <span className="gradient-text">ZENO</span>
//                 </motion.h1>
//               </Link>

//               {/* Menu Icon - Beside Logo */}
//               <motion.button 
//                 className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center focus:outline-none bg-accent/10 hover:bg-accent/20 rounded-full transition-colors"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 aria-label="Toggle menu"
//               >
//                 <div className="relative w-5 h-5 md:w-6 md:h-6">
//                   {/* Top line */}
//                   <motion.span 
//                     className="absolute left-0 w-full h-0.5 bg-accent rounded-full origin-left"
//                     variants={lineVariants}
//                     custom={1}
//                     animate={isMenuOpen ? 'open' : 'closed'}
//                     style={{ top: '0' }}
//                   />
//                   {/* Middle line */}
//                   <motion.span 
//                     className="absolute left-0 w-full h-0.5 bg-accent rounded-full"
//                     variants={lineVariants}
//                     custom={2}
//                     animate={isMenuOpen ? 'open' : 'closed'}
//                     style={{ top: '8px' }}
//                   />
//                   {/* Bottom line */}
//                   <motion.span 
//                     className="absolute left-0 w-full h-0.5 bg-accent rounded-full origin-left"
//                     variants={lineVariants}
//                     custom={3}
//                     animate={isMenuOpen ? 'open' : 'closed'}
//                     style={{ top: '16px' }}
//                   />
//                 </div>
//               </motion.button>
//             </div>

//             {/* Right Spacer - Empty */}
//             <div className="w-10 md:w-12"></div>
//           </div>
//         </nav>
//       </motion.header>

//       {/* Full Screen Menu - Slide from Top */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-[#0F0F0F]/98 to-[#1A1A1A]/98 backdrop-blur-xl"
//             style={{ top: 0 }}
//           >
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-10">
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
//                   backgroundSize: '40px 40px'
//                 }}
//               />
//             </div>

//             {/* Animated Gradient Orbs */}
//             <motion.div 
//               className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"
//               animate={{
//                 scale: [1, 1.2, 1],
//                 opacity: [0.2, 0.3, 0.2]
//               }}
//               transition={{ duration: 8, repeat: Infinity }}
//             />
            
//             <motion.div 
//               className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"
//               animate={{
//                 scale: [1, 1.3, 1],
//                 opacity: [0.1, 0.2, 0.1]
//               }}
//               transition={{ duration: 10, repeat: Infinity }}
//             />

//             {/* Menu Content */}
//             <div className="container-custom relative z-10">
//               <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8">
//                 {/* Logo in Menu */}
//                 <motion.div
//                   variants={menuItemVariants}
//                   className="mb-4 md:mb-6"
//                 >
//                   <h2 className="text-4xl md:text-5xl font-display gradient-text">
//                     ZENO
//                   </h2>
//                 </motion.div>

//                 {/* Navigation Links - YE HI HAIN PAGES */}
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={index}
//                     variants={menuItemVariants}
//                     className="relative group"
//                   >
//                     <Link
//                       href={item.href}
//                       onClick={() => setIsMenuOpen(false)}
//                       className="block text-3xl md:text-5xl lg:text-6xl font-display text-white/80 hover:text-accent transition-colors duration-300 text-center"
//                     >
//                       {item.name}
//                     </Link>
                    
//                     {/* Hover Line */}
//                     <motion.div 
//                       className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-300"
//                       style={{ width: 0 }}
//                       whileHover={{ width: '100%' }}
//                     />
//                   </motion.div>
//                 ))}

//                 {/* Contact Info */}
//                 <motion.div 
//                   variants={menuItemVariants}
//                   className="mt-8 pt-6 border-t border-white/10 text-center"
//                 >
//                   <p className="text-gray-400 text-xs md:text-sm mb-2">Based in DHA, Karachi</p>
//                   <a 
//                     href="mailto:hello@zeno.pk" 
//                     className="text-accent text-sm md:text-base hover:text-white transition-colors"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     hello@zeno.pk
//                   </a>
//                 </motion.div>

//                 {/* Social Links */}
//                 <motion.div 
//                   variants={menuItemVariants}
//                   className="flex gap-3 md:gap-4 mt-2"
//                 >
//                   {['LI', 'TW', 'IG', 'GH'].map((social, index) => (
//                     <motion.a
//                       key={index}
//                       href="#"
//                       whileHover={{ y: -2 }}
//                       className="w-8 h-8 md:w-10 md:h-10 border border-accent/30 rounded-full flex items-center justify-center text-accent text-xs md:text-sm hover:bg-accent hover:text-primary transition-all"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       {social}
//                     </motion.a>
//                   ))}
//                 </motion.div>

//                 {/* Close Hint */}
//                 <motion.p 
//                   variants={menuItemVariants}
//                   className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[10px] md:text-xs text-gray-500"
//                 >
//                   Press ESC or click outside to close
//                 </motion.p>
//               </div>
//             </div>

//             {/* Close on backdrop click */}
//             <div 
//               className="absolute inset-0 -z-10"
//               onClick={() => setIsMenuOpen(false)}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }    








// src/components/layout/Header.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ Fix for hydration

  useEffect(() => {
    setMounted(true); // ✅ Client-side mount ho gaya
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' }
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
    },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.4 } }
  };

  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    open: (custom) => ({
      rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
      y: custom === 1 ? 9 : custom === 3 ? -9 : 0,
      opacity: custom === 2 ? 0 : 1,
      transition: { duration: 0.3 }
    })
  };

  // ✅ Agar client-side mount nahi hua to simple version do
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20 md:h-24">
            <div className="w-10 md:w-12"></div>
            <div className="flex items-center gap-2 md:gap-3">
              <Link href="/">
                <h1 className="text-3xl md:text-4xl font-display font-bold">
                  <span className="gradient-text">ZENO</span>
                </h1>
              </Link>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-accent/20 rounded-full"></div>
            </div>
            <div className="w-10 md:w-12"></div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20 md:h-24">
            <div className="w-10 md:w-12"></div>

            <div className="flex items-center gap-2 md:gap-3">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <motion.h1 
                  className="text-3xl md:text-4xl font-display font-bold"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="gradient-text">ZENO</span>
                </motion.h1>
              </Link>

              {/* ✅ Menu Icon - Ab Clearly Dikhega */}
              <motion.button 
                className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center focus:outline-none 
                  bg-gradient-to-r from-accent to-accent/80
                  hover:from-accent/90 hover:to-accent
                  rounded-full 
                  border-2 border-white/20
                  shadow-lg shadow-accent/30
                  transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.08, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5 md:w-6 md:h-6">
                  {/* Top line - White color for contrast */}
                  <motion.span 
                    className="absolute left-0 w-full h-0.5 bg-white rounded-full origin-left"
                    variants={lineVariants}
                    custom={1}
                    animate={isMenuOpen ? 'open' : 'closed'}
                    style={{ top: '0' }}
                  />
                  {/* Middle line */}
                  <motion.span 
                    className="absolute left-0 w-full h-0.5 bg-white rounded-full"
                    variants={lineVariants}
                    custom={2}
                    animate={isMenuOpen ? 'open' : 'closed'}
                    style={{ top: '8px' }}
                  />
                  {/* Bottom line */}
                  <motion.span 
                    className="absolute left-0 w-full h-0.5 bg-white rounded-full origin-left"
                    variants={lineVariants}
                    custom={3}
                    animate={isMenuOpen ? 'open' : 'closed'}
                    style={{ top: '16px' }}
                  />
                </div>
              </motion.button>
            </div>

            <div className="w-10 md:w-12"></div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-[#0F0F0F]/98 to-[#1A1A1A]/98 backdrop-blur-xl"
          >
            <div className="absolute inset-0 opacity-10" 
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />

            <div className="container-custom relative z-10">
              <div className="flex flex-col items-center justify-center space-y-8">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl md:text-6xl font-display gradient-text mb-8"
                >
                  ZENO
                </motion.h2>

                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-4xl md:text-6xl font-display text-white/80 hover:text-accent transition-colors text-center"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-8 pt-6 border-t border-white/10 text-center"
                >
                  <p className="text-gray-400 text-sm mb-2">DHA Phase 6, Karachi</p>
                  <a href="mailto:hello@zeno.pk" className="text-accent hover:text-white transition-colors">
                    hello@zeno.pk
                  </a>
                </motion.div>
              </div>
            </div>

            <div className="absolute inset-0 -z-10" onClick={() => setIsMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}