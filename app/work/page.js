// // src/app/work/page.js
// 'use client';

// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRef, useState, useEffect } from 'react';

// export default function WorkPage() {
//   const [mounted, setMounted] = useState(false);
//   const [activeFilter, setActiveFilter] = useState('all');
//   const containerRef = useRef(null);
//   const heroRef = useRef(null);
  
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Smooth scroll progress
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   // Spring animations for smoothness
//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   // Parallax effects
//   const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.95]);
//   const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0.8]);
//   const heroY = useTransform(smoothProgress, [0, 0.2], [0, -50]);

//   // Projects data with detailed information
//   const projects = [
//     {
//       id: 1,
//       title: "FinTech Banking Platform",
//       client: "Bank Alfalah",
//       category: "Web Application",
//       industry: "Fintech",
//       year: "2024",
//       description: "A comprehensive digital banking platform processing 50,000+ daily transactions with 99.9% uptime. Features include real-time transfers, bill payments, and investment management.",
//       challenge: "The client needed to modernize their legacy banking system while maintaining zero downtime and ensuring bank-grade security.",
//       solution: "We architected a microservices-based solution with React frontend and Node.js backend, deployed on AWS with Kubernetes orchestration.",
//       results: [
//         "50K+ daily transactions",
//         "99.9% system uptime",
//         "40% faster processing",
//         "Zero security incidents"
//       ],
//       technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Kubernetes", "Redis"],
//       image: "/office.jpg",
//       gradient: "from-[#C9A959] to-[#FFD700]",
//       icon: "🏦",
//       featured: true
//     },
//     {
//       id: 2,
//       title: "Healthcare Management System",
//       client: "Karachi Medical",
//       category: "Custom Software",
//       industry: "Healthcare",
//       year: "2023",
//       description: "A comprehensive patient management system serving 10+ hospitals across Karachi. Streamlines appointments, records, billing, and telemedicine.",
//       challenge: "Multiple hospitals needed a unified system that could work across different locations while maintaining patient data privacy.",
//       solution: "Built a cloud-native solution with React, Node.js, and PostgreSQL. Implemented role-based access control and end-to-end encryption.",
//       results: [
//         "10+ hospitals onboarded",
//         "100K+ patient records",
//         "60% faster appointments",
//         "Telemedicine integrated"
//       ],
//       technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Redis", "WebRTC"],
//       image: "/office2.jpg",
//       gradient: "from-[#B8860B] to-[#DAA520]",
//       icon: "🏥",
//       featured: true
//     },
//     {
//       id: 3,
//       title: "E-commerce Marketplace",
//       client: "Local Retailer",
//       category: "Mobile App",
//       industry: "E-commerce",
//       year: "2023",
//       description: "A multi-vendor e-commerce platform connecting 200+ local sellers with customers across Karachi. Features real-time inventory, payments, and delivery tracking.",
//       challenge: "Creating a platform that could handle multiple vendors, real-time inventory, and seamless payments while being easy to use.",
//       solution: "Developed a Flutter mobile app with Firebase backend. Implemented real-time sync, payment gateway integration, and delivery partner APIs.",
//       results: [
//         "200+ active sellers",
//         "150% sales increase",
//         "50K+ monthly users",
//         "4.8★ app rating"
//       ],
//       technologies: ["Flutter", "Firebase", "Stripe", "Google Maps", "Node.js"],
//       image: "/office3.jpg",
//       gradient: "from-[#8B6914] to-[#C9A959]",
//       icon: "🛍️",
//       featured: true
//     },
//     {
//       id: 4,
//       title: "Logistics & Fleet Management",
//       client: "Karachi Port Trust",
//       category: "Web Application",
//       industry: "Logistics",
//       year: "2024",
//       description: "Real-time cargo tracking and fleet management system for one of Pakistan's largest ports. Optimizes routes, tracks shipments, and manages documentation.",
//       challenge: "Complex logistics operations needed digitization with real-time tracking and integration with existing port systems.",
//       solution: "Built with Next.js, GraphQL, and MongoDB. Integrated with GPS trackers, port APIs, and automated documentation system.",
//       results: [
//         "10K+ daily shipments",
//         "Real-time tracking",
//         "30% cost reduction",
//         "Paperless operations"
//       ],
//       technologies: ["Next.js", "GraphQL", "MongoDB", "Docker", "WebSockets"],
//       image: "/office4.jpg",
//       gradient: "from-[#C9A959] to-[#B8860B]",
//       icon: "🚚",
//       featured: false
//     },
//     {
//       id: 5,
//       title: "AI-Powered Analytics Dashboard",
//       client: "Engro Digital",
//       category: "Data Platform",
//       industry: "Analytics",
//       year: "2024",
//       description: "An intelligent analytics platform that uses machine learning to provide predictive insights for business decision-making.",
//       challenge: "Processing vast amounts of business data and providing actionable insights in real-time.",
//       solution: "Built with Python, TensorFlow, and React. Implemented ML models for forecasting and anomaly detection.",
//       results: [
//         "95% prediction accuracy",
//         "Real-time dashboards",
//         "Automated reporting",
//         "Data-driven decisions"
//       ],
//       technologies: ["Python", "TensorFlow", "React", "Django", "PostgreSQL"],
//       image: "/office5.jpg",
//       gradient: "from-[#DAA520] to-[#FFD700]",
//       icon: "📊",
//       featured: false
//     },
//     {
//       id: 6,
//       title: "Real Estate Platform",
//       client: "Property Plus",
//       category: "Web & Mobile",
//       industry: "Real Estate",
//       year: "2023",
//       description: "A comprehensive real estate platform for property listings, virtual tours, and agent management.",
//       challenge: "Creating an immersive property browsing experience with virtual tours and accurate search.",
//       solution: "Built with Next.js and React Native. Integrated 3D virtual tours, advanced search filters, and real-time chat.",
//       results: [
//         "5K+ property listings",
//         "100K+ monthly visits",
//         "Virtual tours enabled",
//         "50+ real estate agents"
//       ],
//       technologies: ["Next.js", "React Native", "Node.js", "MongoDB", "WebRTC"],
//       image: "/office6.jpg",
//       gradient: "from-[#C9A959] to-[#8B6914]",
//       icon: "🏢",
//       featured: false
//     }
//   ];

//   // Filter categories
//   const filters = [
//     { id: 'all', label: 'All Projects', count: projects.length },
//     { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category.includes('Web')).length },
//     { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category.includes('Mobile')).length },
//     { id: 'fintech', label: 'Fintech', count: projects.filter(p => p.industry === 'Fintech').length },
//     { id: 'healthcare', label: 'Healthcare', count: projects.filter(p => p.industry === 'Healthcare').length },
//     { id: 'ecommerce', label: 'E-commerce', count: projects.filter(p => p.industry === 'E-commerce').length }
//   ];

//   // Filter projects based on active filter
//   const filteredProjects = projects.filter(project => {
//     if (activeFilter === 'all') return true;
//     if (activeFilter === 'web') return project.category.includes('Web');
//     if (activeFilter === 'mobile') return project.category.includes('Mobile');
//     return project.industry.toLowerCase() === activeFilter;
//   });

//   // Animation variants for smooth scrolling
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2
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
//         ease: [0.16, 1, 0.3, 1]
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: [0.16, 1, 0.3, 1]
//       }
//     }
//   };

//   const goldGradients = {
//     light: 'from-[#C9A959] via-[#D4AF37] to-[#FFD700]',
//     medium: 'from-[#B8860B] via-[#C9A959] to-[#DAA520]',
//     dark: 'from-[#8B6914] via-[#B8860B] to-[#C9A959]'
//   };

//   const fontClasses = {
//     display: 'font-display tracking-[-0.02em]',
//     serif: 'font-serif tracking-normal',
//     body: 'font-sans leading-relaxed'
//   };

//   if (!mounted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-[#0B0B0B] to-[#1E1E1E] flex items-center justify-center">
//         <div className="text-accent">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <main 
//       ref={containerRef}
//       className="min-h-screen bg-gradient-to-br from-[#0B0B0B] via-[#151515] to-[#1E1E1E] pt-24 md:pt-32 overflow-x-hidden"
//     >
//       {/* Smooth Scroll Progress Bar */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-[#FFD700] to-accent z-50 origin-left"
//         style={{ scaleX: smoothProgress }}
//       />

//       {/* Hero Section with Parallax */}
//       <section ref={heroRef} className="relative min-h-[70vh] flex items-center section-padding overflow-hidden">
//         {/* Animated Background */}
//         <motion.div 
//           className="absolute inset-0"
//           style={{ scale: heroScale, opacity: heroOpacity }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
//           <div 
//             className="absolute inset-0 opacity-20"
//             style={{
//               backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
//               backgroundSize: '60px 60px'
//             }}
//           />
//         </motion.div>

//         {/* Floating Particles */}
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 rounded-full bg-accent/30"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -50, 0],
//               x: [0, Math.random() * 30 - 15, 0],
//               opacity: [0.2, 0.6, 0.2],
//             }}
//             transition={{
//               duration: 8 + Math.random() * 8,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "easeInOut"
//             }}
//           />
//         ))}

//         <div className="relative z-10 container-custom">
//           <motion.div
//             style={{ y: heroY }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//               className="inline-block mb-6"
//             >
//               <span className="px-6 py-3 border border-accent/30 bg-black/40 backdrop-blur-md rounded-full text-transparent bg-gradient-to-r from-accent to-[#FFD700] bg-clip-text text-sm tracking-[0.2em] font-medium">
//                 ✦ OUR PORTFOLIO ✦
//               </span>
//             </motion.div>

//             <motion.h1 
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//               className={`text-6xl md:text-7xl lg:text-8xl ${fontClasses.display} text-white mb-6`}
//             >
//               <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent block`}>
//                 Featured
//               </span>
//               <span className="text-white/90">
//                 Work
//               </span>
//             </motion.h1>

//             <motion.p 
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//               className={`text-xl text-gray-300/90 mb-8 max-w-2xl mx-auto ${fontClasses.body}`}
//             >
//               Real solutions for real businesses. Each project tells a story of innovation, 
//               collaboration, and technical excellence.
//             </motion.p>

//             {/* Smooth Scroll Indicator */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.5 }}
//               className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
//             >
//               <motion.div
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{ repeat: Infinity, duration: 2 }}
//                 className="flex flex-col items-center gap-2 text-white/40"
//               >
//                 <span className="text-xs tracking-widest">EXPLORE</span>
//                 <div className="w-0.5 h-12 bg-gradient-to-b from-accent to-transparent" />
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Filter Section */}
//       <section className="py-12">
//         <div className="container-custom">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-wrap justify-center gap-3"
//           >
//             {filters.map((filter) => (
//               <motion.button
//                 key={filter.id}
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setActiveFilter(filter.id)}
//                 className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
//                   activeFilter === filter.id
//                     ? `bg-gradient-to-r ${goldGradients.light} text-[#0B0B0B]`
//                     : 'border border-white/10 text-white/60 hover:text-white hover:border-accent/30'
//                 }`}
//               >
//                 {filter.label} ({filter.count})
//               </motion.button>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Projects Grid with Smooth Scroll Animations */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             className="space-y-24"
//           >
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 variants={itemVariants}
//                 className="relative group"
//               >
//                 <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
//                   {/* Image Side with Parallax */}
//                   <motion.div
//                     className={`relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
//                     whileHover={{ scale: 1.02 }}
//                     transition={{ duration: 0.4 }}
//                   >
//                     <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
//                       <Image
//                         src={project.image}
//                         alt={project.title}
//                         fill
//                         className="object-cover transition-transform duration-1000 group-hover:scale-110"
//                       />
                      
//                       {/* Gradient Overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                      
//                       {/* Category Badge */}
//                       <div className="absolute top-6 left-6">
//                         <span className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-[#0B0B0B] text-sm font-medium rounded-full`}>
//                           {project.category}
//                         </span>
//                       </div>

//                       {/* Year Badge */}
//                       <div className="absolute top-6 right-6">
//                         <span className="px-4 py-2 text-sm border rounded-full bg-black/60 backdrop-blur-sm border-accent/30 text-accent">
//                           {project.year}
//                         </span>
//                       </div>

//                       {/* Icon */}
//                       <div className="absolute text-6xl transition-opacity bottom-6 left-6 opacity-30 group-hover:opacity-100">
//                         {project.icon}
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* Content Side */}
//                   <motion.div
//                     className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
//                     initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                   >
//                     {/* Client */}
//                     <p className={`text-accent text-sm mb-2 ${fontClasses.body}`}>
//                       {project.client}
//                     </p>

//                     {/* Title */}
//                     <h2 className={`text-3xl md:text-4xl ${fontClasses.display} text-white mb-4`}>
//                       {project.title}
//                     </h2>

//                     {/* Description */}
//                     <p className={`text-gray-300 mb-6 ${fontClasses.body}`}>
//                       {project.description}
//                     </p>

//                     {/* Challenge & Solution */}
//                     <div className="mb-6 space-y-4">
//                       <div>
//                         <h3 className={`text-sm font-medium text-white mb-2 ${fontClasses.display}`}>
//                           Challenge
//                         </h3>
//                         <p className={`text-sm text-gray-400 ${fontClasses.body}`}>
//                           {project.challenge}
//                         </p>
//                       </div>
//                       <div>
//                         <h3 className={`text-sm font-medium text-white mb-2 ${fontClasses.display}`}>
//                           Solution
//                         </h3>
//                         <p className={`text-sm text-gray-400 ${fontClasses.body}`}>
//                           {project.solution}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Results */}
//                     <div className="mb-6">
//                       <h3 className={`text-sm font-medium text-white mb-3 ${fontClasses.display}`}>
//                         Key Results
//                       </h3>
//                       <div className="grid grid-cols-2 gap-3">
//                         {project.results.map((result, idx) => (
//                           <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: idx * 0.1 }}
//                             className="flex items-center gap-2"
//                           >
//                             <span className="text-accent">✦</span>
//                             <span className={`text-sm text-gray-300 ${fontClasses.body}`}>
//                               {result}
//                             </span>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Technologies */}
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {project.technologies.map((tech, idx) => (
//                         <span
//                           key={idx}
//                           className="px-3 py-1 text-xs border rounded-full bg-accent/10 border-accent/20 text-accent"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>

//                     {/* View Project Link */}
//                     <Link
//                       href={`/work/${project.id}`}
//                       className="inline-flex items-center gap-2 transition-colors text-white/60 hover:text-accent group/link"
//                     >
//                       <span>View Case Study</span>
//                       <motion.span
//                         animate={{ x: [0, 5, 0] }}
//                         transition={{ repeat: Infinity, duration: 1.5 }}
//                         className="transition-transform group-hover/link:translate-x-1"
//                       >
//                         →
//                       </motion.span>
//                     </Link>
//                   </motion.div>
//                 </div>

//                 {/* Decorative Line */}
//                 {index < filteredProjects.length - 1 && (
//                   <motion.div
//                     className="absolute left-0 right-0 h-px -bottom-12 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
//                     initial={{ scaleX: 0 }}
//                     whileInView={{ scaleX: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 1 }}
//                   />
//                 )}
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Section with Counters */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-2 gap-6 md:grid-cols-4"
//           >
//             {[
//               { value: "50+", label: "Projects", icon: "🚀" },
//               { value: "15+", label: "Clients", icon: "🏢" },
//               { value: "98%", label: "Satisfaction", icon: "⭐" },
//               { value: "5+", label: "Years", icon: "📅" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="p-8 text-center border bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 rounded-xl group"
//               >
//                 <div className="mb-3 text-4xl transition-transform group-hover:scale-110">
//                   {stat.icon}
//                 </div>
//                 <motion.div
//                   initial={{ scale: 0.5 }}
//                   whileInView={{ scale: 1 }}
//                   viewport={{ once: true }}
//                   className={`text-4xl md:text-5xl ${fontClasses.display} bg-gradient-to-r ${goldGradients.medium} bg-clip-text text-transparent`}
//                 >
//                   {stat.value}
//                 </motion.div>
//                 <div className={`text-sm text-gray-400 mt-2 ${fontClasses.body}`}>
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Testimonial Section */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <div className="relative">
//               <div className="absolute left-0 font-serif text-8xl text-accent/10 -top-12">"</div>
//               <div className="absolute right-0 font-serif text-8xl text-accent/10 -bottom-12">"</div>
              
//               <p className={`text-2xl md:text-3xl text-gray-300 leading-relaxed mb-8 ${fontClasses.serif}`}>
//                 "ZENO didn't just deliver a product — they became our technology partners. 
//                 Their understanding of Karachi's business landscape is unparalleled."
//               </p>
              
//               <div>
//                 <p className={`text-xl text-white ${fontClasses.display}`}>
//                   Kamran Ahmed
//                 </p>
//                 <p className={`text-sm text-accent ${fontClasses.body}`}>
//                   CTO, Engro Digital
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="relative p-12 overflow-hidden text-center border md:p-16 bg-gradient-to-br from-accent/10 to-transparent border-accent/20 rounded-2xl"
//           >
//             {/* Animated Background */}
//             <motion.div
//               className="absolute inset-0 opacity-10"
//               animate={{
//                 backgroundPosition: ['0% 0%', '100% 100%'],
//               }}
//               transition={{
//                 duration: 20,
//                 repeat: Infinity,
//                 ease: "linear"
//               }}
//               style={{
//                 backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
//                 backgroundSize: '40px 40px'
//               }}
//             />

//             <div className="relative z-10">
//               <h2 className={`text-4xl md:text-5xl ${fontClasses.display} text-white mb-4`}>
//                 Ready to Start Your{' '}
//                 <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>
//                   Success Story?
//                 </span>
//               </h2>

//               <p className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto ${fontClasses.body}`}>
//                 Let's discuss how we can help bring your vision to life.
//               </p>

//               <div className="flex flex-col justify-center gap-4 sm:flex-row">
//                 <Link 
//                   href="/contact"
//                   className="relative px-8 py-4 overflow-hidden rounded-lg group"
//                 >
//                   <span className={`absolute inset-0 bg-gradient-to-r ${goldGradients.light} opacity-90`} />
//                   <span className="relative z-10 text-[#0B0B0B] font-medium text-lg px-4">
//                     Start a Project
//                   </span>
//                 </Link>
                
//                 <Link 
//                   href="/services"
//                   className="px-8 py-4 transition-colors border rounded-lg border-accent/30 text-accent hover:bg-accent/10"
//                 >
//                   Explore Services
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }  






// src/app/work/page.js
'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function WorkPage() {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  
  // ✅ FIXED: States for scroll values
  const [scrollYProgress, setScrollYProgress] = useState(null);
  const [smoothProgress, setSmoothProgress] = useState({ get: () => 0 });
  const [heroScale, setHeroScale] = useState({ get: () => 1 });
  const [heroOpacity, setHeroOpacity] = useState({ get: () => 1 });
  const [heroY, setHeroY] = useState({ get: () => 0 });
  
  useEffect(() => {
    setMounted(true);
    
    // ✅ Client-side par hi useScroll initialize karo
    if (containerRef.current) {
      const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
      });
      
      setScrollYProgress(scrollYProgress);
      
      // Spring animation
      const smooth = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });
      
      setSmoothProgress(smooth);
      
      // Transform values
      const scale = useTransform(smooth, [0, 0.2], [1, 0.95]);
      const opacity = useTransform(smooth, [0, 0.2], [1, 0.8]);
      const y = useTransform(smooth, [0, 0.2], [0, -50]);
      
      setHeroScale(scale);
      setHeroOpacity(opacity);
      setHeroY(y);
    }
  }, []);

  // Projects data
  const projects = [
    {
      id: 1,
      title: "FinTech Banking Platform",
      client: "Bank Alfalah",
      category: "Web Application",
      industry: "Fintech",
      year: "2024",
      description: "A comprehensive digital banking platform processing 50,000+ daily transactions with 99.9% uptime.",
      challenge: "Modernize legacy banking system with zero downtime and bank-grade security.",
      solution: "Microservices architecture with React, Node.js, and Kubernetes on AWS.",
      results: [
        "50K+ daily transactions",
        "99.9% system uptime",
        "40% faster processing"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Kubernetes"],
      image: "/office.jpg",
      gradient: "from-[#C9A959] to-[#FFD700]",
      icon: "🏦"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      client: "Karachi Medical",
      category: "Custom Software",
      industry: "Healthcare",
      year: "2023",
      description: "A comprehensive patient management system serving 10+ hospitals across Karachi.",
      challenge: "Unified system across multiple locations with patient data privacy.",
      solution: "Cloud-native solution with React, Node.js, and end-to-end encryption.",
      results: [
        "10+ hospitals onboarded",
        "100K+ patient records",
        "60% faster appointments"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      image: "/office2.jpg",
      gradient: "from-[#B8860B] to-[#DAA520]",
      icon: "🏥"
    },
    {
      id: 3,
      title: "E-commerce Marketplace",
      client: "Local Retailer",
      category: "Mobile App",
      industry: "E-commerce",
      year: "2023",
      description: "A multi-vendor e-commerce platform connecting 200+ local sellers with customers.",
      challenge: "Handle multiple vendors, real-time inventory, and seamless payments.",
      solution: "Flutter mobile app with Firebase backend and payment gateway integration.",
      results: [
        "200+ active sellers",
        "150% sales increase",
        "50K+ monthly users"
      ],
      technologies: ["Flutter", "Firebase", "Stripe", "Node.js"],
      image: "/office3.jpg",
      gradient: "from-[#8B6914] to-[#C9A959]",
      icon: "🛍️"
    },
    {
      id: 4,
      title: "Logistics & Fleet Management",
      client: "Karachi Port Trust",
      category: "Web Application",
      industry: "Logistics",
      year: "2024",
      description: "Real-time cargo tracking and fleet management system.",
      challenge: "Complex logistics operations with real-time tracking needs.",
      solution: "Built with Next.js, GraphQL, and MongoDB with GPS integration.",
      results: [
        "10K+ daily shipments",
        "Real-time tracking",
        "30% cost reduction"
      ],
      technologies: ["Next.js", "GraphQL", "MongoDB", "Docker"],
      image: "/office4.jpg",
      gradient: "from-[#C9A959] to-[#B8860B]",
      icon: "🚚"
    },
    {
      id: 5,
      title: "AI-Powered Analytics Dashboard",
      client: "Engro Digital",
      category: "Data Platform",
      industry: "Analytics",
      year: "2024",
      description: "An intelligent analytics platform using machine learning for predictive insights.",
      challenge: "Process vast amounts of data and provide real-time insights.",
      solution: "Python, TensorFlow, and React with ML models for forecasting.",
      results: [
        "95% prediction accuracy",
        "Real-time dashboards",
        "Automated reporting"
      ],
      technologies: ["Python", "TensorFlow", "React", "Django"],
      image: "/office5.jpg",
      gradient: "from-[#DAA520] to-[#FFD700]",
      icon: "📊"
    }
  ];

  // Filter categories
  const filters = [
    { id: 'all', label: 'All', count: projects.length },
    { id: 'web', label: 'Web', count: projects.filter(p => p.category.includes('Web')).length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category.includes('Mobile')).length },
    { id: 'fintech', label: 'Fintech', count: projects.filter(p => p.industry === 'Fintech').length },
    { id: 'healthcare', label: 'Health', count: projects.filter(p => p.industry === 'Healthcare').length }
  ];

  // Filter projects
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'web') return project.category.includes('Web');
    if (activeFilter === 'mobile') return project.category.includes('Mobile');
    return project.industry.toLowerCase() === activeFilter;
  });

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
        duration: 0.6,
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

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0B0B0B] to-[#1E1E1E] flex items-center justify-center">
        <div className="text-accent">Loading...</div>
      </div>
    );
  }

  return (
    <main 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-[#0B0B0B] via-[#151515] to-[#1E1E1E] pt-20 md:pt-24 lg:pt-32 overflow-x-hidden"
    >
      {/* Progress Bar */}
      {scrollYProgress && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-[#FFD700] to-accent z-50 origin-left"
          style={{ scaleX: smoothProgress }}
        />
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center section-padding overflow-hidden">
        {/* Background */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            scale: heroScale, 
            opacity: heroOpacity 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </motion.div>

        <div className="relative z-10 px-4 container-custom sm:px-6">
          <motion.div
            style={{ y: heroY }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-4 md:mb-6"
            >
              <span className="px-4 md:px-6 py-2 md:py-3 border border-accent/30 bg-black/40 backdrop-blur-md rounded-full text-transparent bg-gradient-to-r from-accent to-[#FFD700] bg-clip-text text-xs md:text-sm tracking-[0.2em] font-medium">
                ✦ OUR WORK ✦
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${fontClasses.display} text-white mb-4 md:mb-6 px-4`}
            >
              <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent block`}>
                Featured
              </span>
              <span className="text-white/90">
                Projects
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-base md:text-lg lg:text-xl text-gray-300/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4 ${fontClasses.body}`}
            >
              Real solutions for real businesses in Karachi and beyond.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section - Responsive */}
      <section className="py-8 md:py-12">
        <div className="px-4 container-custom sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? `bg-gradient-to-r ${goldGradients.light} text-[#0B0B0B]`
                    : 'border border-white/10 text-white/60 hover:text-white hover:border-accent/30'
                }`}
              >
                {filter.label} ({filter.count})
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - Responsive */}
      <section className="section-padding">
        <div className="px-4 container-custom sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12 md:space-y-16 lg:space-y-24"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="relative group"
              >
                <div className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-2 md:gap-8 lg:gap-16">
                  {/* Image */}
                  <div className={`w-full ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl md:rounded-2xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                      
                      {/* Badges - Responsive */}
                      <div className="absolute flex flex-wrap gap-2 top-3 left-3 md:top-4 md:left-4">
                        <span className={`px-2 md:px-3 py-1 bg-gradient-to-r ${project.gradient} text-[#0B0B0B] text-xs md:text-sm font-medium rounded-full`}>
                          {project.category}
                        </span>
                        <span className="px-2 py-1 text-xs border rounded-full md:px-3 bg-black/60 backdrop-blur-sm border-accent/30 text-accent md:text-sm">
                          {project.year}
                        </span>
                      </div>

                      <div className="absolute text-3xl transition-opacity bottom-3 right-3 md:bottom-4 md:right-4 md:text-4xl lg:text-5xl opacity-30 group-hover:opacity-100">
                        {project.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <p className={`text-accent text-xs md:text-sm mb-1 md:mb-2 ${fontClasses.body}`}>
                      {project.client}
                    </p>

                    <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl ${fontClasses.display} text-white mb-2 md:mb-3`}>
                      {project.title}
                    </h2>

                    <p className={`text-sm md:text-base text-gray-300 mb-3 md:mb-4 ${fontClasses.body}`}>
                      {project.description}
                    </p>

                    {/* Results - Responsive Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4 sm:grid-cols-3 md:gap-3 md:mb-5">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-1 md:gap-2">
                          <span className="text-xs text-accent md:text-sm">✦</span>
                          <span className={`text-xs md:text-sm text-gray-300 ${fontClasses.body}`}>
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4 md:gap-2 md:mb-5">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 md:px-3 py-0.5 md:py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] md:text-xs text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[10px] md:text-xs text-gray-500">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/work/${project.id}`}
                      className="inline-flex items-center gap-1 text-xs transition-colors md:gap-2 md:text-sm text-white/60 hover:text-accent"
                    >
                      <span>View Case Study</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Divider */}
                {index < filteredProjects.length - 1 && (
                  <div className="h-px mt-8 md:mt-12 lg:mt-16 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Responsive */}
      <section className="section-padding">
        <div className="px-4 container-custom sm:px-6">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:gap-6">
            {[
              { value: "50+", label: "Projects", icon: "🚀" },
              { value: "15+", label: "Clients", icon: "🏢" },
              { value: "98%", label: "Satisfaction", icon: "⭐" },
              { value: "5+", label: "Years", icon: "📅" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 text-center border md:p-6 lg:p-8 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 rounded-xl"
              >
                <div className="mb-2 text-2xl md:text-3xl lg:text-4xl">{stat.icon}</div>
                <div className={`text-xl md:text-2xl lg:text-3xl ${fontClasses.display} bg-gradient-to-r ${goldGradients.medium} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className={`text-xs md:text-sm text-gray-400 mt-1 ${fontClasses.body}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="section-padding">
        <div className="px-4 container-custom sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-6 text-center border md:p-8 lg:p-12 bg-gradient-to-br from-accent/10 to-transparent border-accent/20 rounded-xl md:rounded-2xl"
          >
            <div className="relative z-10">
              <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl ${fontClasses.display} text-white mb-3 md:mb-4`}>
                Ready to Start Your{' '}
                <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>
                  Project?
                </span>
              </h2>

              <p className={`text-sm md:text-base text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto px-4 ${fontClasses.body}`}>
                Let's discuss how we can help bring your vision to life.
              </p>

              <div className="flex flex-col justify-center gap-3 px-4 sm:flex-row md:gap-4">
                <Link 
                  href="/contact"
                  className="relative px-6 py-3 overflow-hidden text-sm rounded-lg group md:px-8 md:py-4 md:text-base"
                >
                  <span className={`absolute inset-0 bg-gradient-to-r ${goldGradients.light} opacity-90`} />
                  <span className="relative z-10 text-[#0B0B0B] font-medium">
                    Start a Project
                  </span>
                </Link>
                
                <Link 
                  href="/services"
                  className="px-6 py-3 text-sm transition-colors border rounded-lg md:px-8 md:py-4 border-accent/30 text-accent hover:bg-accent/10 md:text-base"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}