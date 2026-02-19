




// // src/components/layout/Header.js
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mounted, setMounted] = useState(false); // ✅ Fix for hydration

//   useEffect(() => {
//     setMounted(true); // ✅ Client-side mount ho gaya
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === 'Escape') setIsMenuOpen(false);
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, []);

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

//   const menuVariants = {
//     hidden: { opacity: 0, y: '-100%' },
//     visible: { 
//       opacity: 1, y: 0,
//       transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
//     },
//     exit: { opacity: 0, y: '-100%', transition: { duration: 0.4 } }
//   };

//   const lineVariants = {
//     closed: { rotate: 0, y: 0 },
//     open: (custom) => ({
//       rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
//       y: custom === 1 ? 9 : custom === 3 ? -9 : 0,
//       opacity: custom === 2 ? 0 : 1,
//       transition: { duration: 0.3 }
//     })
//   };

//   // ✅ Agar client-side mount nahi hua to simple version do
//   if (!mounted) {
//     return (
//       <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
//         <nav className="container-custom">
//           <div className="flex items-center justify-between h-20 md:h-24">
//             <div className="w-10 md:w-12"></div>
//             <div className="flex items-center gap-2 md:gap-3">
//               <Link href="/">
//                 <h1 className="text-3xl font-bold md:text-4xl font-display">
//                   <span className="gradient-text">ZENO</span>
//                 </h1>
//               </Link>
//               <div className="w-8 h-8 rounded-full md:w-10 md:h-10 bg-accent/20"></div>
//             </div>
//             <div className="w-10 md:w-12"></div>
//           </div>
//         </nav>
//       </header>
//     );
//   }

//   return (
//     <>
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           scrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'
//         }`}
//       >
//         <nav className="container-custom">
//           <div className="flex items-center justify-between h-20 md:h-24">
//             <div className="w-10 md:w-12"></div>

//             <div className="flex items-center gap-2 md:gap-3">
//               <Link href="/" onClick={() => setIsMenuOpen(false)}>
//                 <motion.h1 
//                   className="text-3xl font-bold md:text-4xl font-display"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <span className="gradient-text">ZENO</span>
//                 </motion.h1>
//               </Link>

//               {/* ✅ Menu Icon - Ab Clearly Dikhega */}
//               <motion.button 
//                 className="relative flex items-center justify-center w-10 h-10 transition-all duration-300 border-2 rounded-full shadow-lg md:w-12 md:h-12 focus:outline-none bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent border-white/20 shadow-accent/30"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 whileHover={{ scale: 1.08, rotate: 90 }}
//                 whileTap={{ scale: 0.95 }}
//                 aria-label="Toggle menu"
//               >
//                 <div className="relative w-5 h-5 md:w-6 md:h-6">
//                   {/* Top line - White color for contrast */}
//                   <motion.span 
//                     className="absolute left-0 w-full h-0.5 bg-white rounded-full origin-left"
//                     variants={lineVariants}
//                     custom={1}
//                     animate={isMenuOpen ? 'open' : 'closed'}
//                     style={{ top: '0' }}
//                   />
//                   {/* Middle line */}
//                   <motion.span 
//                     className="absolute left-0 w-full h-0.5 bg-white rounded-full"
//                     variants={lineVariants}
//                     custom={2}
//                     animate={isMenuOpen ? 'open' : 'closed'}
//                     style={{ top: '8px' }}
//                   />
//                   {/* Bottom line */}
//                   <motion.span 
//                     className="absolute left-0 w-full h-0.5 bg-white rounded-full origin-left"
//                     variants={lineVariants}
//                     custom={3}
//                     animate={isMenuOpen ? 'open' : 'closed'}
//                     style={{ top: '16px' }}
//                   />
//                 </div>
//               </motion.button>
//             </div>

//             <div className="w-10 md:w-12"></div>
//           </div>
//         </nav>
//       </motion.header>

//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-[#0F0F0F]/98 to-[#1A1A1A]/98 backdrop-blur-xl"
//           >
//             <div className="absolute inset-0 opacity-10" 
//               style={{
//                 backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
//                 backgroundSize: '40px 40px'
//               }}
//             />

//             <div className="relative z-10 container-custom">
//               <div className="flex flex-col items-center justify-center space-y-8">
//                 <motion.h2 
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                   className="mb-8 text-5xl md:text-6xl font-display gradient-text"
//                 >
//                   ZENO
//                 </motion.h2>

//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 + index * 0.1 }}
//                   >
//                     <Link
//                       href={item.href}
//                       onClick={() => setIsMenuOpen(false)}
//                       className="block text-4xl text-center transition-colors md:text-6xl font-display text-white/80 hover:text-accent"
//                     >
//                       {item.name}
//                     </Link>
//                   </motion.div>
//                 ))}

//                 <motion.div 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.7 }}
//                   className="pt-6 mt-8 text-center border-t border-white/10"
//                 >
//                   <p className="mb-2 text-sm text-gray-400">DHA Phase 6, Karachi</p>
//                   <a href="mailto:hello@zeno.pk" className="transition-colors text-accent hover:text-white">
//                     hello@zeno.pk
//                   </a>
//                 </motion.div>
//               </div>
//             </div>

//             <div className="absolute inset-0 -z-10" onClick={() => setIsMenuOpen(false)} />
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  // ✅ HOME PAGE ADDED
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' }
  ];

  // ✅ NEW MENU VARIANT - Circle reveal instead of slide
  const menuVariants = {
    hidden: { 
      opacity: 0,
      scale: 0,
      borderRadius: '100%'
    },
    visible: { 
      opacity: 1,
      scale: 1,
      borderRadius: '0%',
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
    exit: { 
      opacity: 0,
      scale: 0,
      borderRadius: '100%',
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // ✅ MENU ITEM VARIANTS
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    open: (custom) => ({
      rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
      y: custom === 1 ? 9 : custom === 3 ? -9 : 0,
      opacity: custom === 2 ? 0 : 1,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const goldGradients = {
    light: 'from-[#C9A959] via-[#D4AF37] to-[#FFD700]',
    medium: 'from-[#B8860B] via-[#C9A959] to-[#DAA520]'
  };

  const fontClasses = {
    display: 'font-display tracking-[-0.02em]',
    body: 'font-sans leading-relaxed'
  };

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20 md:h-24">
            <div className="w-10 md:w-16 lg:w-20"></div>
            <div className="flex items-center gap-2 md:gap-3">
              <Link href="/">
                <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl font-display">
                  <span className="gradient-text">ZENO</span>
                </h1>
              </Link>
              <div className="w-8 h-8 rounded-full md:w-10 md:h-10 bg-accent/20"></div>
            </div>
            <div className="w-10 md:w-16 lg:w-20"></div>
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
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/40 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <nav className="px-4 container-custom sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
            {/* Left Spacer - Responsive */}
            <div className="w-8 sm:w-12 md:w-16 lg:w-20"></div>

            {/* Logo and Menu Icon */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <motion.h1 
                  className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl font-display"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>
                    ZENO
                  </span>
                </motion.h1>
              </Link>

              {/* Menu Icon - Responsive */}
              <motion.button 
                className="relative flex items-center justify-center w-8 h-8 transition-all duration-300 border-2 rounded-full shadow-lg sm:w-10 sm:h-10 md:w-12 md:h-12 focus:outline-none bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent border-white/20 shadow-accent/30"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.08, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                  {/* Top line */}
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

            {/* Right Spacer - Responsive */}
            <div className="w-8 sm:w-12 md:w-16 lg:w-20"></div>
          </div>
        </nav>
      </motion.header>

      {/* ✅ NEW MENU DESIGN - Circle Reveal with Gold Text */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F]"
            style={{ originX: 0.5, originY: 0.5 }}
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>

            {/* Floating Gold Orbs */}
            <motion.div
              className="absolute top-20 left-20 w-64 h-64 rounded-full bg-accent/10 blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <motion.div
              className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-accent/10 blur-[100px]"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            {/* Menu Content */}
            <div className="relative z-10 w-full max-w-4xl px-4 mx-auto sm:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8">
                {/* Logo in Menu */}
                <motion.div
                  variants={menuItemVariants}
                  className="mb-4 sm:mb-6 md:mb-8"
                >
                  <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${fontClasses.display} bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>
                    ZENO
                  </h2>
                  <div className="w-16 h-1 mx-auto mt-2 bg-gradient-to-r from-accent to-transparent sm:w-20 md:w-24"></div>
                </motion.div>

                {/* Navigation Links - GOLD COLOR */}
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={menuItemVariants}
                    className="relative group"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${fontClasses.display} text-center transition-all duration-300 hover:scale-110`}
                    >
                      <span className="text-transparent bg-gradient-to-r from-accent via-[#D4AF37] to-[#FFD700] bg-clip-text hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-accent">
                        {item.name}
                      </span>
                    </Link>
                    
                    {/* Underline Animation */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}

                {/* Contact Info */}
                <motion.div 
                  variants={menuItemVariants}
                  className="pt-6 mt-4 text-center border-t border-white/10 sm:pt-8 sm:mt-6 md:pt-10 md:mt-8"
                >
                  <p className={`text-xs text-gray-400 sm:text-sm ${fontClasses.body}`}>
                    Based in DHA, Karachi
                  </p>
                  <a 
                    href="mailto:hello@zeno.pk" 
                    className={`text-sm text-accent hover:text-white transition-colors sm:text-base ${fontClasses.body}`}
                  >
                    hello@zeno.pk
                  </a>
                  <p className={`text-xs text-gray-500 mt-2 ${fontClasses.body}`}>
                    +92 21 3587 6543
                  </p>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  variants={menuItemVariants}
                  className="flex gap-3 mt-2 sm:gap-4 sm:mt-3"
                >
                  {['LI', 'TW', 'IG', 'GH'].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className={`w-8 h-8 sm:w-10 sm:h-10 border border-accent/30 rounded-full flex items-center justify-center text-accent text-xs sm:text-sm hover:bg-gradient-to-r hover:from-accent hover:to-[#FFD700] hover:text-[#0B0B0B] transition-all`}
                    >
                      {social}
                    </motion.a>
                  ))}
                </motion.div>

                {/* Close Hint */}
                <motion.p 
                  variants={menuItemVariants}
                  className="absolute text-gray-600 transform -translate-x-1/2 bottom-4 left-1/2 text-[10px] sm:text-xs"
                >
                  Press ESC or click outside to close
                </motion.p>
              </div>
            </div>

            {/* Close on backdrop click */}
            <div 
              className="absolute inset-0 -z-10"
              onClick={() => setIsMenuOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}