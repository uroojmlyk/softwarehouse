// src/app/services/page.js
'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const constraintsRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mouse follow spring animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Services data - unique offerings
  const services = [
    {
      id: 1,
      title: "Enterprise Web Development",
      tagline: "Scale without limits",
      description: "We architect and build web applications that handle millions of users. From fintech dashboards to e-commerce platforms, our solutions are built for scale, security, and speed.",
      icon: "🌐",
      color: "#C9A959",
      gradient: "from-[#C9A959] via-[#D4AF37] to-[#FFD700]",
      features: [
        { name: "React/Next.js", description: "Modern frontend architecture" },
        { name: "Node.js/Python", description: "Robust backend systems" },
        { name: "PostgreSQL/MongoDB", description: "Scalable databases" },
        { name: "AWS/Azure", description: "Cloud infrastructure" }
      ],
      capabilities: [
        "Custom CRM/ERP systems",
        "Fintech platforms",
        "E-commerce solutions",
        "Real-time applications"
      ],
      stats: { projects: "25+", uptime: "99.9%" }
    },
    {
      id: 2,
      title: "Mobile Innovation Lab",
      tagline: "Native experiences, cross-platform reach",
      description: "We craft mobile experiences that users love. Whether it's a consumer app or enterprise solution, our mobile team delivers pixel-perfect, performant applications.",
      icon: "📱",
      color: "#C9A959",
      gradient: "from-[#B8860B] via-[#C9A959] to-[#DAA520]",
      features: [
        { name: "React Native", description: "Cross-platform excellence" },
        { name: "Flutter", description: "Beautiful UI" },
        { name: "Swift/Kotlin", description: "Native power" },
        { name: "Firebase", description: "Real-time sync" }
      ],
      capabilities: [
        "Consumer apps",
        "Enterprise mobility",
        "IoT applications",
        "AR experiences"
      ],
      stats: { projects: "15+", downloads: "500K+" }
    },
    {
      id: 3,
      title: "Cloud & DevOps Transformation",
      tagline: "Infrastructure as code",
      description: "We help businesses modernize their infrastructure with cloud-native architectures, automated deployments, and 24/7 monitoring. Scale effortlessly with our DevOps expertise.",
      icon: "☁️",
      color: "#C9A959",
      gradient: "from-[#8B6914] via-[#B8860B] to-[#C9A959]",
      features: [
        { name: "Kubernetes", description: "Container orchestration" },
        { name: "CI/CD", description: "Automated pipelines" },
        { name: "Terraform", description: "Infrastructure as code" },
        { name: "Prometheus/Grafana", description: "Observability" }
      ],
      capabilities: [
        "Cloud migration",
        "Kubernetes setup",
        "DevOps automation",
        "SRE services"
      ],
      stats: { projects: "20+", uptime: "99.99%" }
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      tagline: "Intelligence at scale",
      description: "We integrate cutting-edge AI into your business processes. From predictive analytics to natural language processing, we build intelligent systems that drive decisions.",
      icon: "🤖",
      color: "#C9A959",
      gradient: "from-[#C9A959] via-[#B8860B] to-[#8B6914]",
      features: [
        { name: "TensorFlow/PyTorch", description: "Deep learning" },
        { name: "LangChain", description: "LLM applications" },
        { name: "Computer Vision", description: "Image recognition" },
        { name: "NLP", description: "Text understanding" }
      ],
      capabilities: [
        "Predictive analytics",
        "Chatbots & assistants",
        "Document processing",
        "Recommendation engines"
      ],
      stats: { projects: "10+", accuracy: "95%" }
    },
    {
      id: 5,
      title: "UI/UX Design Studio",
      tagline: "Design that converts",
      description: "Great software starts with great design. Our designers create intuitive, beautiful interfaces that users love. From research to pixel-perfect implementation.",
      icon: "🎨",
      color: "#C9A959",
      gradient: "from-[#DAA520] via-[#C9A959] to-[#B8860B]",
      features: [
        { name: "User Research", description: "Deep user understanding" },
        { name: "Wireframing", description: "Rapid prototyping" },
        { name: "Visual Design", description: "Pixel perfect" },
        { name: "Design Systems", description: "Consistent experiences" }
      ],
      capabilities: [
        "Product design",
        "Design systems",
        "User testing",
        "Interactive prototypes"
      ],
      stats: { projects: "30+", satisfaction: "98%" }
    },
    {
      id: 6,
      title: "Legacy Modernization",
      tagline: "Future-proof your systems",
      description: "Transform outdated systems into modern, maintainable applications. We help enterprises migrate from legacy codebases to contemporary architectures without business disruption.",
      icon: "🔄",
      color: "#C9A959",
      gradient: "from-[#FFD700] via-[#DAA520] to-[#B8860B]",
      features: [
        { name: "Code Migration", description: "Smooth transitions" },
        { name: "Database Refactoring", description: "Data integrity" },
        { name: "API Development", description: "Modern interfaces" },
        { name: "Performance Tuning", description: "Speed optimization" }
      ],
      capabilities: [
        "Legacy system audit",
        "Phased migration",
        "Training & handover",
        "Ongoing support"
      ],
      stats: { projects: "12+", success: "100%" }
    }
  ];

  // Technologies we use (for the infinite scroll)
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "Kubernetes", icon: "⎈" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "Flutter", icon: "📱" },
    { name: "GraphQL", icon: "◉" },
    { name: "Docker", icon: "🐳" }
  ];

  // Case studies (mini versions)
  const caseStudies = [
    {
      title: "Fintech Dashboard",
      client: "Karachi Bank",
      result: "50K+ daily transactions",
      icon: "🏦"
    },
    {
      title: "Healthcare Platform",
      client: "Karachi Medical",
      result: "100K+ patients served",
      icon: "🏥"
    },
    {
      title: "E-commerce App",
      client: "Local Retailer",
      result: "200+ sellers",
      icon: "🛍️"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Timelines vary based on complexity. A typical MVP takes 8-12 weeks, while enterprise solutions may take 4-6 months."
    },
    {
      question: "What is your engagement model?",
      answer: "We offer fixed-cost projects, dedicated teams, and time & material engagements. We'll recommend the best model for your needs."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Absolutely! We offer ongoing maintenance, support, and enhancement packages tailored to your needs."
    }
  ];

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
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const goldGradients = {
    light: 'from-[#C9A959] via-[#D4AF37] to-[#FFD700]',
    medium: 'from-[#B8860B] via-[#C9A959] to-[#DAA520]',
    dark: 'from-[#8B6914] via-[#B8860B] to-[#C9A959]'
  };

  const fontClasses = {
    display: 'font-display tracking-[-0.02em]',
    serif: 'font-serif tracking-normal',
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
    <main className="min-h-screen bg-gradient-to-br from-[#0B0B0B] via-[#151515] to-[#1E1E1E] pt-24 md:pt-32 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 20% 50%, rgba(201, 169, 89, 0.15) 0%, transparent 50%),
                          radial-gradient(circle at 80% 50%, rgba(201, 169, 89, 0.1) 0%, transparent 50%)`,
            }}
          />
        </div>
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Hero Section - Different Layout */}
      <section className="relative min-h-[60vh] flex items-center justify-center section-padding">
        <div className="relative z-10 container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <span className="px-6 py-3 border border-accent/30 bg-black/40 backdrop-blur-md rounded-full text-transparent bg-gradient-to-r from-accent to-[#FFD700] bg-clip-text text-sm tracking-[0.2em] font-medium">
                ✦ WHAT WE DO ✦
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className={`text-6xl md:text-7xl lg:text-8xl ${fontClasses.display} text-white mb-6`}
            >
              <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent block`}>
                Engineering
              </span>
              <span className="text-white/90">
                Beyond Code
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className={`text-xl text-gray-300/90 mb-8 max-w-2xl mx-auto ${fontClasses.body}`}
            >
              We don't just write code — we architect solutions that drive business growth. 
              From web to mobile, cloud to AI, we deliver excellence.
            </motion.p>

            {/* Interactive Tech Cloud */}
            <motion.div 
              variants={itemVariants}
              ref={constraintsRef}
              onMouseMove={handleMouseMove}
              className="relative flex items-center justify-center h-40"
            >
              {technologies.map((tech, index) => {
                const angle = (index / technologies.length) * Math.PI * 2;
                const radius = 80;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    animate={{
                      x: [x, x + 20, x],
                      y: [y, y + 10, y],
                    }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="px-4 py-2 text-sm border rounded-full bg-black/40 backdrop-blur-md border-accent/20 text-accent">
                      <span className="mr-2">{tech.icon}</span>
                      {tech.name}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Unique Card Design */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setActiveService(index)}
                className="relative overflow-hidden transition-all duration-500 border group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 hover:border-accent/30 rounded-2xl"
              >
                {/* Animated Background on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24">
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-gradient-to-bl from-accent/20 to-transparent" />
                </div>

                <div className="relative p-8">
                  {/* Icon with Glow */}
                  <motion.div
                    className="mb-6 text-6xl"
                    animate={{
                      scale: activeService === index ? [1, 1.2, 1] : 1,
                      rotate: activeService === index ? [0, 10, -10, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-2xl ${fontClasses.display} text-white mb-2`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-accent text-sm mb-4 ${fontClasses.body}`}>
                    {service.tagline}
                  </p>

                  {/* Description - Truncated */}
                  <p className={`text-gray-400 text-sm mb-6 line-clamp-2 ${fontClasses.body}`}>
                    {service.description}
                  </p>

                  {/* Stats Row */}
                  <div className="flex gap-4 mb-6">
                    {Object.entries(service.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-lg font-display text-accent`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Capabilities Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.capabilities.slice(0, 2).map((cap, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 text-xs border rounded-full bg-accent/10 border-accent/20 text-accent"
                      >
                        {cap}
                      </span>
                    ))}
                    {service.capabilities.length > 2 && (
                      <span className="px-2 py-1 text-xs text-gray-500">
                        +{service.capabilities.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Link */}
                  <Link 
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-sm transition-colors text-white/60 hover:text-accent group/link"
                  >
                    <span>Learn More</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="transition-transform group-hover/link:translate-x-1"
                    >
                      →
                    </motion.span>
                  </Link>
                </div>

                {/* Bottom Gradient Line */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section - Horizontal Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className={`text-4xl md:text-5xl ${fontClasses.display} text-white mb-4`}>
              Our <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Process</span>
            </h2>
            <p className={`text-xl text-gray-300 max-w-2xl mx-auto ${fontClasses.body}`}>
              A proven methodology that ensures your project's success
            </p>
          </motion.div>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                { step: "01", title: "Discover", desc: "We dive deep into your business needs" },
                { step: "02", title: "Design", desc: "Architecting the perfect solution" },
                { step: "03", title: "Develop", desc: "Agile sprints with regular updates" },
                { step: "04", title: "Deliver", desc: "Launch, support, and scale" }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative inline-block">
                    <div className="flex items-center justify-center w-24 h-24 text-2xl border-2 rounded-full bg-gradient-to-br from-accent/20 to-transparent border-accent text-accent font-display">
                      {phase.step}
                    </div>
                    {/* Pulsing Ring */}
                    <div className="absolute inset-0 border-2 rounded-full border-accent animate-ping opacity-20" />
                  </div>
                  <h3 className={`text-xl ${fontClasses.display} text-white mt-4 mb-2`}>
                    {phase.title}
                  </h3>
                  <p className={`text-sm text-gray-400 ${fontClasses.body}`}>
                    {phase.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Mini Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className={`text-4xl md:text-5xl ${fontClasses.display} text-white mb-4`}>
              Recent <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Success</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative p-8 overflow-hidden border bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 rounded-xl group"
              >
                <div className="mb-4 text-5xl">{study.icon}</div>
                <h3 className={`text-xl ${fontClasses.display} text-white mb-2`}>
                  {study.title}
                </h3>
                <p className={`text-accent text-sm mb-2 ${fontClasses.body}`}>
                  {study.client}
                </p>
                <p className={`text-sm text-gray-400 ${fontClasses.body}`}>
                  {study.result}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion Style */}
      <section className="section-padding">
        <div className="max-w-3xl container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className={`text-4xl md:text-5xl ${fontClasses.display} text-white mb-4`}>
              Common <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <details className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-lg p-6 [&_summary]:list-none cursor-pointer">
                  <summary className="flex items-center justify-between">
                    <h3 className={`text-lg ${fontClasses.display} text-white`}>
                      {faq.question}
                    </h3>
                    <motion.span
                      className="text-xl text-accent"
                      whileHover={{ scale: 1.2 }}
                    >
                      ✦
                    </motion.span>
                  </summary>
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 text-gray-400 ${fontClasses.body}`}
                  >
                    {faq.answer}
                  </motion.p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Different Design */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent blur-3xl" />
            
            <div className="relative p-12 overflow-hidden text-center border bg-gradient-to-br from-accent/10 to-transparent backdrop-blur-sm border-accent/20 rounded-2xl">
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />

              <div className="relative z-10">
                <motion.h2 
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className={`text-4xl md:text-5xl ${fontClasses.display} text-white mb-4`}
                >
                  Ready to Build Something{' '}
                  <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>
                    Amazing?
                  </span>
                </motion.h2>

                <p className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto ${fontClasses.body}`}>
                  Let's discuss how our services can transform your business.
                </p>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link 
                    href="/contact"
                    className="relative px-8 py-4 overflow-hidden rounded-lg group"
                  >
                    <span className={`absolute inset-0 bg-gradient-to-r ${goldGradients.light} opacity-90`} />
                    <span className="relative z-10 text-[#0B0B0B] font-medium text-lg px-4">
                      Start Your Project
                    </span>
                  </Link>
                  
                  <Link 
                    href="/work"
                    className="px-8 py-4 transition-colors border rounded-lg border-accent/30 text-accent hover:bg-accent/10"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}