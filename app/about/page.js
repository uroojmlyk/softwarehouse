

// src/app/about/page.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  
  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    
    // Cleanup
    return () => {
      // Any cleanup if needed
    };
  }, []);

  // Company stats
  const stats = [
    { value: '50+', label: 'Projects Delivered', icon: '🚀' },
    { value: '15+', label: 'Enterprise Clients', icon: '🏢' },
    { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { value: '5+', label: 'Years of Excellence', icon: '📈' }
  ];

  // Core values
  const values = [
    {
      title: 'Excellence First',
      description: 'We don\'t just deliver code; we deliver excellence. Every line of code, every design decision, every client interaction is held to the highest standard.',
      icon: '✨'
    },
    {
      title: 'Local Roots, Global Vision',
      description: 'Based in DHA, Karachi, we understand local business challenges while maintaining global development standards.',
      icon: '🌍'
    },
    {
      title: 'Partnership Mindset',
      description: 'We see ourselves as your technology partner, not just a vendor. Your success is our success.',
      icon: '🤝'
    },
    {
      title: 'Innovation Driven',
      description: 'We constantly explore emerging technologies to bring innovative solutions to our clients.',
      icon: '💡'
    }
  ];

  // Team members
  const team = [
    {
      name: 'Ali Raza',
      role: 'Founder & CEO',
      bio: 'Ex-Google engineer with 12+ years in enterprise software. Passionate about building solutions that matter.',
      image: '/man.jpg',
      expertise: ['Software Architecture', 'Cloud Computing']
    },
    {
      name: 'Fatima Khan',
      role: 'CTO',
      bio: 'Full-stack architect with expertise in scalable systems. Leads technical strategy and innovation.',
      image: '/women.jpg',
      expertise: ['System Design', 'AI/ML']
    },
    {
      name: 'Omar Farooq',
      role: 'Head of Design',
      bio: 'Award-winning UI/UX designer focused on creating intuitive, beautiful digital experiences.',
      image: '/man3.jpg',
      expertise: ['UI/UX', 'Design Systems']
    },
    {
      name: 'Zara Ahmed',
      role: 'Lead Developer',
      bio: 'Full-stack developer with deep expertise in React, Node.js, and cloud technologies.',
      image: '/women2.jpg',
      expertise: ['React/Next.js', 'Node.js']
    }
  ];

  // Milestones
  const milestones = [
    { year: '2021', event: 'ZENO founded in DHA, Karachi', achieved: true },
    { year: '2022', event: 'First enterprise client (Bank Alfalah)', achieved: true },
    { year: '2023', event: 'Expanded to 15+ team members', achieved: true },
    { year: '2024', event: 'ISO 27001 certification achieved', achieved: true },
    { year: '2025', event: 'Launching AI innovation lab', achieved: false }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "ZENO transformed our digital infrastructure. Their understanding of Karachi's business landscape is unparalleled.",
      author: 'Kamran Ahmed',
      role: 'CTO, Engro Digital'
    },
    {
      quote: "The team's professionalism and technical expertise made our project a resounding success.",
      author: 'Fatima Sheikh',
      role: 'Product Manager, Bank Alfalah'
    }
  ];

  // ✅ OPTIMIZED: Animation variants with responsive delays
  const fadeInUp = {
    hidden: { opacity: 0, y: windowWidth < 768 ? 20 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: windowWidth < 768 ? 0.4 : 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: windowWidth < 768 ? 0.05 : 0.1,
        delayChildren: windowWidth < 768 ? 0.1 : 0.2
      }
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
        <div className="text-sm text-accent md:text-base">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0B0B] via-[#151515] to-[#1E1E1E] pt-20 md:pt-24 lg:pt-32 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding">
        {/* ✅ OPTIMIZED: Background Pattern - disabled on mobile */}
        {windowWidth >= 768 && (
          <div className="absolute inset-0 opacity-[0.15]">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(201, 169, 89, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201, 169, 89, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />
          </div>
        )}

        <div className="relative z-10 px-4 container-custom sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4 md:mb-6">
              <span className="px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 border border-accent/30 bg-black/40 backdrop-blur-md rounded-full text-transparent bg-gradient-to-r from-accent to-[#FFD700] bg-clip-text text-[10px] md:text-xs lg:text-sm tracking-[0.2em] font-medium">
                ✦ ABOUT US ✦
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${fontClasses.display} text-white mb-4 md:mb-6 px-4`}
            >
              Crafting Digital Excellence from{' '}
              <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent block sm:inline`}>
                Karachi
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className={`text-base sm:text-lg md:text-xl text-gray-300/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4 ${fontClasses.body}`}
            >
              ZENO is a premium software development house based in DHA, Karachi. 
              We partner with enterprises to build innovative, scalable, and secure digital solutions.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col justify-center gap-3 px-4 sm:flex-row md:gap-4">
              <Link 
                href="/contact"
                className="relative px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 overflow-hidden rounded-lg group"
              >
                <span className={`absolute inset-0 bg-gradient-to-r ${goldGradients.light} opacity-90`} />
                <span className="relative z-10 text-[#0B0B0B] font-medium text-sm md:text-base lg:text-lg px-2 md:px-3 lg:px-4">
                  Start Your Journey
                </span>
              </Link>
              
              <Link 
                href="/work"
                className="px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 transition-colors border rounded-lg border-accent/30 text-sm md:text-base lg:text-lg text-accent hover:bg-accent/10"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ✅ OPTIMIZED: Stats Section - Responsive Grid */}
      <section className="section-padding">
        <div className="px-4 container-custom sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-4 text-center transition-all border rounded-lg md:p-5 lg:p-6 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 group hover:border-accent/30"
              >
                <div className="mb-2 text-2xl transition-transform md:mb-3 md:text-3xl lg:text-4xl group-hover:scale-110">
                  {stat.icon}
                </div>
                <div className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl ${fontClasses.display} bg-gradient-to-r ${goldGradients.medium} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className={`text-xs md:text-sm text-gray-400 mt-1 md:mt-2 ${fontClasses.body}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ✅ OPTIMIZED: Story Section - Responsive */}
      <section className="section-padding">
        <div className="px-4 container-custom sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:gap-12 lg:gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: windowWidth < 768 ? 0.4 : 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${fontClasses.display} text-white mb-4 md:mb-6 text-center lg:text-left`}>
                Our <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Story</span>
              </h2>
              
              <div className={`space-y-3 md:space-y-4 text-sm md:text-base text-gray-300 text-center lg:text-left ${fontClasses.body}`}>
                <p>
                  Founded in 2021, ZENO emerged from a simple observation: Karachi's businesses deserved world-class software development without having to look abroad. We set out to build a team that combines international expertise with deep local understanding.
                </p>
                <p>
                  Today, we're proud to have partnered with some of Pakistan's most respected enterprises, from Bank Alfalah to Engro. Our team of 15+ engineers, designers, and strategists work tirelessly to deliver solutions that drive real business impact.
                </p>
                <p>
                  But our journey is just beginning. We're constantly evolving, learning, and pushing boundaries to bring the best of global technology to local businesses.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:justify-start md:mt-8">
                <div className="flex -space-x-2 md:-space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full border-2 border-[#0B0B0B] bg-gradient-to-br from-accent/30 to-accent/10"
                    />
                  ))}
                </div>
                <div className={`text-xs md:text-sm text-gray-400 ${fontClasses.body}`}>
                  <span className="font-medium text-accent">15+</span> team members
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: windowWidth < 768 ? 0.4 : 0.6 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-xl md:rounded-2xl overflow-hidden group">
                <Image
                  src="/office.jpg"
                  alt="ZENO Office Karachi"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                
                {/* ✅ OPTIMIZED: Floating Card - responsive */}
                <div className="absolute p-3 border rounded-lg md:p-4 lg:p-6 bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 bg-black/60 backdrop-blur-xl md:rounded-xl border-accent/20">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="text-xl md:text-2xl lg:text-3xl">🏆</div>
                    <div>
                      <div className="text-xs font-medium text-white md:text-sm">Best Software House 2024</div>
                      <div className={`text-[8px] md:text-[10px] lg:text-xs text-accent ${fontClasses.body}`}>Karachi Technology Awards</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ OPTIMIZED: Values Section - Responsive Grid */}
      <section className="section-padding bg-gradient-to-b from-transparent to-white/5">
        <div className="px-4 container-custom sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: windowWidth < 768 ? 0.4 : 0.6 }}
            className="mb-8 text-center md:mb-12 lg:mb-16"
          >
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${fontClasses.display} text-white mb-3 md:mb-4`}>
              Our <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Values</span>
            </h2>
            <p className={`text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4 ${fontClasses.body}`}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5 lg:gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-5 transition-all border rounded-lg md:p-6 lg:p-8 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 md:rounded-xl group hover:border-accent/30"
              >
                <div className="mb-3 text-3xl transition-transform md:mb-4 md:text-4xl lg:text-5xl group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className={`text-lg md:text-xl lg:text-2xl ${fontClasses.display} text-white mb-2 md:mb-3`}>
                  {value.title}
                </h3>
                <p className={`text-xs md:text-sm text-gray-400 ${fontClasses.body}`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ✅ OPTIMIZED: Team Section - Responsive Grid */}
      <section className="section-padding">
        <div className="px-4 container-custom sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: windowWidth < 768 ? 0.4 : 0.6 }}
            className="mb-8 text-center md:mb-12 lg:mb-16"
          >
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${fontClasses.display} text-white mb-3 md:mb-4`}>
              Meet the <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Team</span>
            </h2>
            <p className={`text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4 ${fontClasses.body}`}>
              Passionate experts dedicated to your success
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5 lg:gap-6"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative mb-3 md:mb-4 overflow-hidden h-[250px] sm:h-[280px] md:h-[300px] lg:h-[320px] xl:h-[350px] rounded-lg md:rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* ✅ OPTIMIZED: Expertise Tags - responsive */}
                  <div className="absolute flex flex-wrap gap-1 transition-opacity opacity-0 md:gap-2 bottom-2 left-2 right-2 md:bottom-3 md:left-3 md:right-3 lg:bottom-4 lg:left-4 lg:right-4 group-hover:opacity-100">
                    {member.expertise.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-1.5 py-0.5 md:px-2 md:py-1 text-[8px] md:text-xs border rounded-full bg-accent/20 backdrop-blur-sm border-accent/30 text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className={`text-base md:text-lg lg:text-xl ${fontClasses.display} text-white mb-1 text-center lg:text-left`}>
                  {member.name}
                </h3>
                <p className={`text-accent text-xs md:text-sm mb-1 md:mb-2 text-center lg:text-left ${fontClasses.body}`}>
                  {member.role}
                </p>
                <p className={`text-xs md:text-sm text-gray-400 text-center lg:text-left ${fontClasses.body}`}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ✅ OPTIMIZED: Milestones Section - Responsive */}
      <section className="section-padding">
        <div className="px-4 container-custom sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${fontClasses.display} text-white mb-8 md:mb-12 text-center`}>
              Our <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Journey</span>
            </h2>

            <div className="px-2 space-y-4 md:space-y-5 lg:space-y-6 md:px-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * (windowWidth < 768 ? 0.05 : 0.1) }}
                  className="relative flex items-start gap-3 md:gap-4 lg:gap-6 group"
                >
                  <div className="relative">
                    <div className={`w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 rounded-full ${
                      milestone.achieved ? 'bg-accent' : 'bg-gray-600'
                    } group-hover:scale-125 transition-transform`} />
                    {index < milestones.length - 1 && (
                      <div className="absolute top-3 left-1.5 md:top-3.5 md:left-2 lg:top-4 lg:left-2 w-0.5 h-12 md:h-14 lg:h-16 bg-gradient-to-b from-accent/50 to-transparent" />
                    )}
                  </div>
                  
                  <div className="flex-1 pb-4 md:pb-5 lg:pb-6">
                    <div className={`text-lg md:text-xl lg:text-2xl ${fontClasses.display} text-accent mb-1 md:mb-2`}>
                      {milestone.year}
                    </div>
                    <p className={`text-xs md:text-sm lg:text-base text-white/90 ${fontClasses.body}`}>
                      {milestone.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ OPTIMIZED: Testimonials Section - Responsive Grid */}
      <section className="section-padding bg-gradient-to-b from-transparent to-white/5">
        <div className="px-4 container-custom sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={fadeInUp}
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${fontClasses.display} text-white mb-8 md:mb-12 text-center`}
            >
              What <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Clients</span> Say
            </motion.h2>

            <div className="grid gap-4 md:gap-5 lg:gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-5 border rounded-lg md:p-6 lg:p-8 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 md:rounded-xl"
                >
                  <div className="mb-2 font-serif text-3xl md:mb-3 md:text-4xl lg:text-5xl text-accent/20">"</div>
                  <p className={`text-xs md:text-sm lg:text-base text-gray-300 mb-4 md:mb-5 lg:mb-6 ${fontClasses.body}`}>
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className={`text-sm md:text-base text-white font-medium ${fontClasses.display}`}>
                      {testimonial.author}
                    </p>
                    <p className={`text-[10px] md:text-xs text-gray-400 ${fontClasses.body}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ OPTIMIZED: CTA Section - Responsive */}
      <section className="section-padding">
        <div className="px-4 container-custom sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: windowWidth < 768 ? 0.4 : 0.6 }}
            className="relative p-6 overflow-hidden text-center border rounded-lg md:p-8 lg:p-12 xl:p-16 bg-gradient-to-br from-accent/10 to-transparent border-accent/20 md:rounded-xl lg:rounded-2xl"
          >
            {/* ✅ OPTIMIZED: Background Pattern - disabled on mobile */}
            {windowWidth >= 768 && (
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }}
                />
              </div>
            )}

            <div className="relative z-10">
              <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ${fontClasses.display} text-white mb-3 md:mb-4 px-4`}>
                Ready to Start Your{' '}
                <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent block sm:inline`}>
                  Journey?
                </span>
              </h2>
              
              <p className={`text-sm md:text-base lg:text-lg text-gray-300 mb-5 md:mb-6 lg:mb-8 max-w-2xl mx-auto px-4 ${fontClasses.body}`}>
                Let's discuss how ZENO can help transform your business with innovative software solutions.
              </p>

              <div className="flex flex-col justify-center gap-3 px-4 sm:flex-row md:gap-4">
                <Link 
                  href="/contact"
                  className="relative px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 overflow-hidden rounded-lg group"
                >
                  <span className={`absolute inset-0 bg-gradient-to-r ${goldGradients.light} opacity-90`} />
                  <span className="relative z-10 text-[#0B0B0B] font-medium text-sm md:text-base lg:text-lg px-2 md:px-3 lg:px-4">
                    Start a Conversation
                  </span>
                </Link>
                
                <Link 
                  href="/services"
                  className="px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 transition-colors border rounded-lg border-accent/30 text-sm md:text-base lg:text-lg text-accent hover:bg-accent/10"
                >
                  Explore Services
                </Link>
              </div>

              {/* Live Indicator */}
              <div className="flex items-center justify-center gap-2 mt-5 md:mt-6 lg:mt-8">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
                <span className={`text-[10px] md:text-xs lg:text-sm text-gray-400 ${fontClasses.body}`}>
                  Available for new projects
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}