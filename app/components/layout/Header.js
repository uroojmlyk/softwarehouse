

// // src/components/layout/Header.js
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import ThemeToggle from '../ui/ThemeToggle';

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(0);

//   // ✅ ALL HOOKS AT TOP LEVEL - Fixed order
//   useEffect(() => {
//     setMounted(true);
//     setWindowWidth(window.innerWidth);
    
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize, { passive: true });
    
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
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
//     document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
//     return () => { document.body.style.overflow = 'unset'; };
//   }, [isMenuOpen]);

//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Work', href: '/work' },
//     { name: 'Contact', href: '/contact' }
//   ];

//   // Menu variants
//   const menuVariants = {
//     hidden: { opacity: 0, clipPath: 'circle(0% at 50% 50%)' },
//     visible: { 
//       opacity: 1, clipPath: 'circle(150% at 50% 50%)',
//       transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], staggerChildren: 0.1, delayChildren: 0.3 }
//     },
//     exit: { 
//       opacity: 0, clipPath: 'circle(0% at 50% 50%)',
//       transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
//     }
//   };

//   const menuItemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
//   };

//   const lineVariants = {
//     closed: { rotate: 0, y: 0 },
//     open: (custom) => ({
//       rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
//       y: custom === 1 ? 8 : custom === 3 ? -8 : 0,
//       opacity: custom === 2 ? 0 : 1,
//       transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
//     })
//   };

//   const fontClasses = {
//     display: 'font-display tracking-[-0.02em]',
//     body: 'font-sans leading-relaxed'
//   };

//   // ✅ Loading state - AFTER all hooks
//   if (!mounted) {
//     return (
//       <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
//         <nav className="px-4 container-custom sm:px-6">
//           <div className="flex items-center justify-between h-16 sm:h-20">
//             <div className="w-8 sm:w-12"></div>
//             <div className="flex items-center gap-2">
//               <h1 className="text-xl text-white sm:text-2xl font-display">ZENO</h1>
//             </div>
//             <div className="w-8 sm:w-12"></div>
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
//         transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           scrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-lg' : 'bg-transparent'
//         }`}
//       >
//         <nav className="px-4 container-custom sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
//             {/* Left Spacer */}
//             <div className="w-8 sm:w-12 lg:w-16"></div>

//             {/* ✅ Logo and Controls - PROPERLY ALIGNED */}
//             <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
//               {/* Logo */}
//               <Link href="/" onClick={() => setIsMenuOpen(false)}>
//                 <motion.h1 
//                   className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-display"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <span className="text-white">ZENO</span>
//                   <span className="text-[#C9A87C] ml-0.5">.</span>
//                 </motion.h1>
//               </Link>

//               {/* ✅ ThemeToggle - Logo ke RIGHT side, menu icon ke LEFT side */}
//               <ThemeToggle />

//               {/* Menu Icon */}
//               <motion.button 
//                 className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full focus:outline-none bg-[#C9A87C] hover:bg-[#B68B5C] transition-colors duration-300 shadow-lg shadow-[#C9A87C]/20"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 aria-label="Toggle menu"
//               >
//                 <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
//                   {/* Top line */}
//                   <motion.span 
//                     className="absolute left-0 w-full h-0.5 bg-white rounded-full"
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
//                     style={{ top: windowWidth < 640 ? '8px' : '10px' }}
//                   />
//                   {/* Bottom line */}
//                   <motion.span 
//                     className="absolute left-0 w-full h-0.5 bg-white rounded-full"
//                     variants={lineVariants}
//                     custom={3}
//                     animate={isMenuOpen ? 'open' : 'closed'}
//                     style={{ top: windowWidth < 640 ? '16px' : '20px' }}
//                   />
//                 </div>
//               </motion.button>
//             </div>

//             {/* Right Spacer */}
//             <div className="w-8 sm:w-12 lg:w-16"></div>
//           </div>
//         </nav>
//       </motion.header>

//       {/* Menu Design */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed inset-0 z-40 flex items-center justify-center bg-[#0A0A0A]"
//           >
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-10">
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   backgroundImage: `radial-gradient(circle at 2px 2px, #C9A87C 1px, transparent 1px)`,
//                   backgroundSize: '40px 40px'
//                 }}
//               />
//             </div>

//             {/* Gradient Orbs */}
//             <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A87C]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
//             <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B68B5C]/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

//             {/* Menu Content */}
//             <div className="relative z-10 w-full max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
//               <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 lg:space-y-8">
//                 {/* Logo in Menu */}
//                 <motion.div variants={menuItemVariants} className="mb-4 text-center sm:mb-6 lg:mb-8">
//                   <h2 className="mb-2 text-3xl text-white sm:text-4xl lg:text-5xl xl:text-6xl font-display">
//                     ZENO
//                   </h2>
//                   <div className="w-12 h-0.5 mx-auto bg-[#C9A87C] sm:w-16 lg:w-20"></div>
//                 </motion.div>

//                 {/* Navigation Links */}
//                 {navItems.map((item, index) => (
//                   <motion.div key={index} variants={menuItemVariants} className="relative group">
//                     <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
//                       <motion.span 
//                         className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display text-center text-white transition-colors duration-300 group-hover:text-[#C9A87C]"
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ type: "spring", stiffness: 400 }}
//                       >
//                         {item.name}
//                       </motion.span>
//                     </Link>
//                     <motion.div 
//                       className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A87C]"
//                       initial={{ width: 0 }}
//                       whileHover={{ width: '100%' }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </motion.div>
//                 ))}

//                 {/* Contact Info */}
//                 <motion.div variants={menuItemVariants} className="pt-6 mt-4 text-center border-t border-white/10 sm:pt-8 sm:mt-6 lg:pt-10 lg:mt-8">
//                   <p className="text-xs text-gray-400 sm:text-sm">Based in DHA, Karachi</p>
//                   <a href="mailto:hello@zeno.pk" className="text-sm text-[#C9A87C] hover:text-white transition-colors sm:text-base">
//                     hello@zeno.pk
//                   </a>
//                   <p className="mt-2 text-xs text-gray-500">+92 21 3587 6543</p>
//                 </motion.div>

//                 {/* Social Links */}
//                 <motion.div variants={menuItemVariants} className="flex gap-3 mt-2 sm:gap-4 sm:mt-3">
//                   {['LI', 'TW', 'IG', 'GH'].map((social, index) => (
//                     <motion.a
//                       key={index}
//                       href="#"
//                       whileHover={{ y: -3, scale: 1.1 }}
//                       className="w-8 h-8 sm:w-10 sm:h-10 border border-white/10 rounded-full flex items-center justify-center text-xs text-gray-400 sm:text-sm hover:border-[#C9A87C] hover:text-[#C9A87C] transition-all"
//                     >
//                       {social}
//                     </motion.a>
//                   ))}
//                 </motion.div>

//                 {/* Close Hint */}
//                 <motion.p variants={menuItemVariants} className="absolute text-gray-600 transform -translate-x-1/2 bottom-4 left-1/2 text-[10px] sm:text-xs">
//                   Press ESC to close
//                 </motion.p>
//               </div>
//             </div>

//             {/* Close on backdrop click */}
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
import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // ✅ ALL HOOKS AT TOP LEVEL
  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' }
  ];

  // Menu variants
  const menuVariants = {
    hidden: { opacity: 0, clipPath: 'circle(0% at 50% 50%)' },
    visible: { 
      opacity: 1, clipPath: 'circle(150% at 50% 50%)',
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], staggerChildren: 0.1, delayChildren: 0.3 }
    },
    exit: { 
      opacity: 0, clipPath: 'circle(0% at 50% 50%)',
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  };

  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    open: (custom) => ({
      rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
      y: custom === 1 ? 8 : custom === 3 ? -8 : 0,
      opacity: custom === 2 ? 0 : 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    })
  };

  const fontClasses = {
    display: 'font-display tracking-[-0.02em]',
    body: 'font-sans leading-relaxed'
  };

  // ✅ Loading state - AFTER all hooks
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <nav className="px-4 container-custom sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="w-8 sm:w-12"></div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl text-white sm:text-2xl font-display">ZENO</h1>
            </div>
            <div className="w-8 sm:w-12"></div>
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
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#0A0A0A]/80 dark:bg-[#0A0A0A]/80 light:bg-white/80 backdrop-blur-lg' 
            : 'bg-transparent'
        }`}
      >
        <nav className="px-4 container-custom sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Left Spacer */}
            <div className="w-8 sm:w-12 lg:w-16"></div>

            {/* Logo and Controls */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              {/* Logo - Light/Dark aware */}
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <motion.h1 
                  className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-display"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-white dark:text-white light:text-gray-900">ZENO</span>
                  <span className="text-[#C9A87C] ml-0.5">.</span>
                </motion.h1>
              </Link>

              {/* ThemeToggle */}
              <ThemeToggle />

              {/* Menu Icon - Gold remains same */}
              <motion.button 
                className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full focus:outline-none bg-[#C9A87C] hover:bg-[#B68B5C] transition-colors duration-300 shadow-lg shadow-[#C9A87C]/20"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                  <motion.span 
                    className="absolute left-0 w-full h-0.5 bg-white rounded-full"
                    variants={lineVariants}
                    custom={1}
                    animate={isMenuOpen ? 'open' : 'closed'}
                    style={{ top: '0' }}
                  />
                  <motion.span 
                    className="absolute left-0 w-full h-0.5 bg-white rounded-full"
                    variants={lineVariants}
                    custom={2}
                    animate={isMenuOpen ? 'open' : 'closed'}
                    style={{ top: windowWidth < 640 ? '8px' : '10px' }}
                  />
                  <motion.span 
                    className="absolute left-0 w-full h-0.5 bg-white rounded-full"
                    variants={lineVariants}
                    custom={3}
                    animate={isMenuOpen ? 'open' : 'closed'}
                    style={{ top: windowWidth < 640 ? '16px' : '20px' }}
                  />
                </div>
              </motion.button>
            </div>

            {/* Right Spacer */}
            <div className="w-8 sm:w-12 lg:w-16"></div>
          </div>
        </nav>
      </motion.header>

      {/* Menu Design - Light/Dark aware */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white"
          >
            {/* Background Pattern - Light/Dark aware */}
            <div className="absolute inset-0 opacity-10 dark:opacity-10 light:opacity-5">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #C9A87C 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>

            {/* Gradient Orbs - Light/Dark aware */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A87C]/5 dark:bg-[#C9A87C]/5 light:bg-[#C9A87C]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B68B5C]/5 dark:bg-[#B68B5C]/5 light:bg-[#B68B5C]/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

            {/* Menu Content */}
            <div className="relative z-10 w-full max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 lg:space-y-8">
                {/* Logo in Menu - Light/Dark aware */}
                <motion.div variants={menuItemVariants} className="mb-4 text-center sm:mb-6 lg:mb-8">
                  <h2 className="mb-2 text-3xl text-white dark:text-white light:text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl font-display">
                    ZENO
                  </h2>
                  <div className="w-12 h-0.5 mx-auto bg-[#C9A87C] sm:w-16 lg:w-20"></div>
                </motion.div>

                {/* Navigation Links - Light/Dark aware */}
                {navItems.map((item, index) => (
                  <motion.div key={index} variants={menuItemVariants} className="relative group">
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                      <motion.span 
                        className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display text-center text-white dark:text-white light:text-gray-900 transition-colors duration-300 group-hover:text-[#C9A87C]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A87C]"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}

                {/* Contact Info - Light/Dark aware */}
                <motion.div variants={menuItemVariants} className="pt-6 mt-4 text-center border-t border-white/10 dark:border-white/10 light:border-gray-200 sm:pt-8 sm:mt-6 lg:pt-10 lg:mt-8">
                  <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-500 sm:text-sm">Based in DHA, Karachi</p>
                  <a href="mailto:hello@zeno.pk" className="text-sm text-[#C9A87C] hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors sm:text-base">
                    hello@zeno.pk
                  </a>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-500 light:text-gray-600">+92 21 3587 6543</p>
                </motion.div>

                {/* Social Links - Light/Dark aware */}
                <motion.div variants={menuItemVariants} className="flex gap-3 mt-2 sm:gap-4 sm:mt-3">
                  {['LI', 'TW', 'IG', 'GH'].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="w-8 h-8 sm:w-10 sm:h-10 border border-white/10 dark:border-white/10 light:border-gray-300 rounded-full flex items-center justify-center text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 sm:text-sm hover:border-[#C9A87C] hover:text-[#C9A87C] transition-all"
                    >
                      {social}
                    </motion.a>
                  ))}
                </motion.div>

                {/* Close Hint */}
                <motion.p variants={menuItemVariants} className="absolute text-gray-500 dark:text-gray-500 light:text-gray-400 transform -translate-x-1/2 bottom-4 left-1/2 text-[10px] sm:text-xs">
                  Press ESC to close
                </motion.p>
              </div>
            </div>

            {/* Close on backdrop click */}
            <div className="absolute inset-0 -z-10" onClick={() => setIsMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}