// src/app/about/page.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
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
      image: '/man2.jpg',
      expertise: ['Software Architecture', 'Cloud Computing']
    },
    {
      name: 'Fatima Khan',
      role: 'CTO',
      bio: 'Full-stack architect with expertise in scalable systems. Leads technical strategy and innovation.',
      image: '/office3.jpg',
      expertise: ['System Design', 'AI/ML']
    },
    {
      name: 'Omar Farooq',
      role: 'Head of Design',
      bio: 'Award-winning UI/UX designer focused on creating intuitive, beautiful digital experiences.',
      image: '/office4.jpg',
      expertise: ['UI/UX', 'Design Systems']
    },
    {
      name: 'Zara Ahmed',
      role: 'Lead Developer',
      bio: 'Full-stack developer with deep expertise in React, Node.js, and cloud technologies.',
      image: '/office5.jpg',
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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        <div className="text-accent">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0B0B] via-[#151515] to-[#1E1E1E] pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding">
        {/* Background Pattern */}
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

        <div className="relative z-10 container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-6">
              <span className="px-6 py-3 border border-accent/30 bg-black/40 backdrop-blur-md rounded-full text-transparent bg-gradient-to-r from-accent to-[#FFD700] bg-clip-text text-sm tracking-[0.2em] font-medium">
                ✦ ABOUT US ✦
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className={`text-5xl md:text-6xl lg:text-7xl ${fontClasses.display} text-white mb-6`}
            >
              Crafting Digital Excellence from{' '}
              <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>
                Karachi
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className={`text-xl text-gray-300/90 mb-8 max-w-2xl mx-auto ${fontClasses.body}`}
            >
              ZENO is a premium software development house based in DHA, Karachi. 
              We partner with enterprises to build innovative, scalable, and secure digital solutions.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex justify-center gap-4">
              <Link 
                href="/contact"
                className="relative px-8 py-4 overflow-hidden rounded-lg group"
              >
                <span className={`absolute inset-0 bg-gradient-to-r ${goldGradients.light} opacity-90`} />
                <span className="relative z-10 text-[#0B0B0B] font-medium text-lg px-4">
                  Start Your Journey
                </span>
              </Link>
              
              <Link 
                href="/work"
                className="px-8 py-4 transition-colors border rounded-lg border-accent/30 text-accent hover:bg-accent/10"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 text-center transition-all border rounded-lg bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 group hover:border-accent/30"
              >
                <div className="mb-3 text-4xl transition-transform group-hover:scale-110">
                  {stat.icon}
                </div>
                <div className={`text-3xl md:text-4xl ${fontClasses.display} bg-gradient-to-r ${goldGradients.medium} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className={`text-sm text-gray-400 mt-2 ${fontClasses.body}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-4xl md:text-5xl ${fontClasses.display} text-white mb-6`}>
                Our <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Story</span>
              </h2>
              
              <div className={`space-y-4 text-gray-300 ${fontClasses.body}`}>
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

              <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full border-2 border-[#0B0B0B] bg-gradient-to-br from-accent/30 to-accent/10"
                    />
                  ))}
                </div>
                <div className={`text-sm text-gray-400 ${fontClasses.body}`}>
                  <span className="font-medium text-accent">15+</span> team members
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden group">
                <Image
                  src="/office.jpg"
                  alt="ZENO Office Karachi"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                
                {/* Floating Card */}
                <div className="absolute p-6 border bottom-8 left-8 bg-black/60 backdrop-blur-xl rounded-xl border-accent/20">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🏆</div>
                    <div>
                      <div className="font-medium text-white">Best Software House 2024</div>
                      <div className={`text-xs text-accent ${fontClasses.body}`}>Karachi Technology Awards</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-white/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className={`text-4xl md:text-5xl ${fontClasses.display} text-white mb-4`}>
              Our <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Values</span>
            </h2>
            <p className={`text-xl text-gray-300 max-w-2xl mx-auto ${fontClasses.body}`}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-8 transition-all border bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 rounded-xl group hover:border-accent/30"
              >
                <div className="mb-4 text-5xl transition-transform group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className={`text-2xl ${fontClasses.display} text-white mb-3`}>
                  {value.title}
                </h3>
                <p className={`text-gray-400 ${fontClasses.body}`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className={`text-4xl md:text-5xl ${fontClasses.display} text-white mb-4`}>
              Meet the <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Team</span>
            </h2>
            <p className={`text-xl text-gray-300 max-w-2xl mx-auto ${fontClasses.body}`}>
              Passionate experts dedicated to your success
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative mb-4 overflow-hidden h-80 rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Expertise Tags - Show on Hover */}
                  <div className="absolute flex flex-wrap gap-2 transition-opacity opacity-0 bottom-4 left-4 right-4 group-hover:opacity-100">
                    {member.expertise.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 text-xs border rounded-full bg-accent/20 backdrop-blur-sm border-accent/30 text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className={`text-xl ${fontClasses.display} text-white mb-1`}>
                  {member.name}
                </h3>
                <p className={`text-accent text-sm mb-2 ${fontClasses.body}`}>
                  {member.role}
                </p>
                <p className={`text-gray-400 text-sm ${fontClasses.body}`}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className={`text-4xl md:text-5xl ${fontClasses.display} text-white mb-12 text-center`}>
              Our <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Journey</span>
            </h2>

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start gap-6 group"
                >
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full ${
                      milestone.achieved ? 'bg-accent' : 'bg-gray-600'
                    } group-hover:scale-125 transition-transform`} />
                    {index < milestones.length - 1 && (
                      <div className="absolute top-4 left-2 w-0.5 h-16 bg-gradient-to-b from-accent/50 to-transparent" />
                    )}
                  </div>
                  
                  <div className="flex-1 pb-6">
                    <div className={`text-2xl ${fontClasses.display} text-accent mb-2`}>
                      {milestone.year}
                    </div>
                    <p className={`text-white/90 ${fontClasses.body}`}>
                      {milestone.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-white/5">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={fadeInUp}
              className={`text-4xl md:text-5xl ${fontClasses.display} text-white mb-12 text-center`}
            >
              What <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Clients</span> Say
            </motion.h2>

            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-8 border bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 rounded-xl"
                >
                  <div className="mb-4 font-serif text-5xl text-accent/20">"</div>
                  <p className={`text-gray-300 mb-6 ${fontClasses.body}`}>
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className={`text-white font-medium ${fontClasses.display}`}>
                      {testimonial.author}
                    </p>
                    <p className={`text-sm text-gray-400 ${fontClasses.body}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 overflow-hidden text-center border md:p-16 bg-gradient-to-br from-accent/10 to-transparent border-accent/20 rounded-2xl"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>

            <div className="relative z-10">
              <h2 className={`text-4xl md:text-5xl ${fontClasses.display} text-white mb-4`}>
                Ready to Start Your{' '}
                <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>
                  Journey?
                </span>
              </h2>
              
              <p className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto ${fontClasses.body}`}>
                Let's discuss how ZENO can help transform your business with innovative software solutions.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link 
                  href="/contact"
                  className="relative px-8 py-4 overflow-hidden rounded-lg group"
                >
                  <span className={`absolute inset-0 bg-gradient-to-r ${goldGradients.light} opacity-90`} />
                  <span className="relative z-10 text-[#0B0B0B] font-medium text-lg px-4">
                    Start a Conversation
                  </span>
                </Link>
                
                <Link 
                  href="/services"
                  className="px-8 py-4 transition-colors border rounded-lg border-accent/30 text-accent hover:bg-accent/10"
                >
                  Explore Services
                </Link>
              </div>

              {/* Live Indicator */}
              <div className="flex items-center justify-center gap-2 mt-8">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className={`text-sm text-gray-400 ${fontClasses.body}`}>
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