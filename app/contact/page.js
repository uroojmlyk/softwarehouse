// src/app/contact/page.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function ContactPage() {
  // ✅ ALL HOOKS AT TOP LEVEL - No conditions, no early returns
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  const [activeField, setActiveField] = useState(null);
  
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const companyRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const budgetRef = useRef(null);
  const timelineRef = useRef(null);
  const formRef = useRef(null);
  const sectionRef = useRef(null);

  // ✅ useEffect at top level
  useEffect(() => {
    setMounted(true);
  }, []);

  // Form handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          budget: '',
          timeline: ''
        });
      }, 3000);
    }, 1500);
  };

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

  const goldGradients = {
    light: 'from-[#C9A959] via-[#D4AF37] to-[#FFD700]',
    medium: 'from-[#B8860B] via-[#C9A959] to-[#DAA520]'
  };

  const fontClasses = {
    display: 'font-display tracking-[-0.02em]',
    body: 'font-sans leading-relaxed'
  };

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

  // FAQ data
  const faqs = [
    {
      question: "How quickly can you start?",
      answer: "We can typically begin within 1-2 weeks, depending on project scope and current availability."
    },
    {
      question: "What information do you need?",
      answer: "Project brief, technical requirements, timeline expectations, and budget range help us provide accurate proposals."
    },
    {
      question: "Do you offer maintenance?",
      answer: "Yes! We provide ongoing support and maintenance packages for all our projects."
    }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0B0B0B] to-[#1E1E1E] flex items-center justify-center">
        <div className="text-accent">Loading...</div>
      </div>
    );
  }

  return (
    <main 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-[#0B0B0B] via-[#151515] to-[#1E1E1E] pt-20 md:pt-24 lg:pt-32 overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center section-padding overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="relative z-10 px-4 container-custom sm:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4 md:mb-6">
              <span className="px-4 md:px-6 py-2 md:py-3 border border-accent/30 bg-black/40 backdrop-blur-md rounded-full text-transparent bg-gradient-to-r from-accent to-[#FFD700] bg-clip-text text-xs md:text-sm tracking-[0.2em] font-medium">
                ✦ GET IN TOUCH ✦
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${fontClasses.display} text-white mb-4 md:mb-6`}
            >
              Let's <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Create</span> Something Amazing
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className={`text-base md:text-lg lg:text-xl text-gray-300/90 mb-6 md:mb-8 max-w-2xl mx-auto ${fontClasses.body}`}
            >
              Have a project in mind? We'd love to hear about it. Tell us your vision, and let's make it happen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="px-4 container-custom sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Left Column - Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 
                variants={itemVariants}
                className={`text-2xl md:text-3xl lg:text-4xl ${fontClasses.display} text-white mb-6 md:mb-8`}
              >
                Send Us a <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Message</span>
              </motion.h2>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                {/* Name & Email Row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div variants={itemVariants} className="relative">
                    <label className={`block text-xs md:text-sm text-gray-400 mb-1 md:mb-2 ${fontClasses.body}`}>
                      Full Name *
                    </label>
                    <input
                      ref={nameRef}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      required
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        activeField === 'name' ? 'border-accent' : 'border-white/10'
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${fontClasses.body}`}
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative">
                    <label className={`block text-xs md:text-sm text-gray-400 mb-1 md:mb-2 ${fontClasses.body}`}>
                      Email Address *
                    </label>
                    <input
                      ref={emailRef}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      required
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        activeField === 'email' ? 'border-accent' : 'border-white/10'
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${fontClasses.body}`}
                      placeholder="john@company.com"
                    />
                  </motion.div>
                </div>

                {/* Company & Phone Row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div variants={itemVariants} className="relative">
                    <label className={`block text-xs md:text-sm text-gray-400 mb-1 md:mb-2 ${fontClasses.body}`}>
                      Company
                    </label>
                    <input
                      ref={companyRef}
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setActiveField('company')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        activeField === 'company' ? 'border-accent' : 'border-white/10'
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${fontClasses.body}`}
                      placeholder="Your Company"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative">
                    <label className={`block text-xs md:text-sm text-gray-400 mb-1 md:mb-2 ${fontClasses.body}`}>
                      Phone Number
                    </label>
                    <input
                      ref={phoneRef}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setActiveField('phone')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        activeField === 'phone' ? 'border-accent' : 'border-white/10'
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${fontClasses.body}`}
                      placeholder="+92 300 1234567"
                    />
                  </motion.div>
                </div>

                {/* Budget & Timeline Row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div variants={itemVariants} className="relative">
                    <label className={`block text-xs md:text-sm text-gray-400 mb-1 md:mb-2 ${fontClasses.body}`}>
                      Budget Range
                    </label>
                    <select
                      ref={budgetRef}
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      onFocus={() => setActiveField('budget')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        activeField === 'budget' ? 'border-accent' : 'border-white/10'
                      } rounded-lg text-gray-400 focus:outline-none transition-colors ${fontClasses.body}`}
                    >
                      <option value="">Select budget</option>
                      <option value="< $10k">Less than $10k</option>
                      <option value="$10k - $25k">$10k - $25k</option>
                      <option value="$25k - $50k">$25k - $50k</option>
                      <option value="$50k - $100k">$50k - $100k</option>
                      <option value="> $100k">More than $100k</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative">
                    <label className={`block text-xs md:text-sm text-gray-400 mb-1 md:mb-2 ${fontClasses.body}`}>
                      Timeline
                    </label>
                    <select
                      ref={timelineRef}
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      onFocus={() => setActiveField('timeline')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        activeField === 'timeline' ? 'border-accent' : 'border-white/10'
                      } rounded-lg text-gray-400 focus:outline-none transition-colors ${fontClasses.body}`}
                    >
                      <option value="">Select timeline</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="3-4 months">3-4 months</option>
                      <option value="4-6 months">4-6 months</option>
                      <option value="6+ months">6+ months</option>
                    </select>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div variants={itemVariants} className="relative">
                  <label className={`block text-xs md:text-sm text-gray-400 mb-1 md:mb-2 ${fontClasses.body}`}>
                    Your Message *
                  </label>
                  <textarea
                    ref={messageRef}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    required
                    rows="5"
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      activeField === 'message' ? 'border-accent' : 'border-white/10'
                    } rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors resize-none ${fontClasses.body}`}
                    placeholder="Tell us about your project..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className="relative w-full px-8 py-4 overflow-hidden rounded-lg sm:w-auto group disabled:opacity-50"
                  >
                    <span className={`absolute inset-0 bg-gradient-to-r ${goldGradients.light} opacity-90`} />
                    <span className="relative z-10 text-[#0B0B0B] font-medium text-base md:text-lg px-4 flex items-center justify-center gap-2">
                      {formStatus === 'submitting' && (
                        <>
                          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending...</span>
                        </>
                      )}
                      {formStatus === 'success' && (
                        <>
                          <span>✓</span>
                          <span>Message Sent!</span>
                        </>
                      )}
                      {formStatus === 'idle' && (
                        <>
                          <span>Send Message</span>
                          <span>→</span>
                        </>
                      )}
                    </span>
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-6 md:space-y-8"
            >
              {/* Quick Contact Cards */}
              <motion.div variants={itemVariants}>
                <h3 className={`text-xl md:text-2xl ${fontClasses.display} text-white mb-4 md:mb-6`}>
                  Quick <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Contact</span>
                </h3>
                
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {quickContacts.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.action}
                      target={contact.icon === '📍' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="flex flex-col items-center p-4 transition-all border md:p-5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 hover:border-accent/30 rounded-xl group"
                    >
                      <span className="mb-2 text-2xl transition-transform md:text-3xl group-hover:scale-110">
                        {contact.icon}
                      </span>
                      <span className="text-xs text-gray-400">{contact.label}</span>
                      <span className={`text-xs md:text-sm text-white text-center mt-1 ${fontClasses.body}`}>
                        {contact.value}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div 
                variants={itemVariants}
                className="p-6 border md:p-8 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 rounded-xl"
              >
                <h3 className={`text-xl md:text-2xl ${fontClasses.display} text-white mb-4 flex items-center gap-2`}>
                  <span className="w-1 h-6 bg-accent" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {businessHours.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className={`text-sm text-gray-400 ${fontClasses.body}`}>{item.day}</span>
                      <span className={`text-sm text-white ${fontClasses.body}`}>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* FAQ Preview */}
              <motion.div 
                variants={itemVariants}
                className="p-6 border md:p-8 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-white/10 rounded-xl"
              >
                <h3 className={`text-xl md:text-2xl ${fontClasses.display} text-white mb-4 flex items-center gap-2`}>
                  <span className="w-1 h-6 bg-accent" />
                  Common Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center justify-between list-none cursor-pointer">
                        <span className={`text-sm text-white ${fontClasses.body}`}>{faq.question}</span>
                        <span className="text-sm transition-transform text-accent group-open:rotate-180">▼</span>
                      </summary>
                      <p className={`mt-2 text-xs text-gray-400 pl-2 ${fontClasses.body}`}>
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </motion.div>

              {/* Map Preview */}
              <motion.div 
                variants={itemVariants}
                className="relative h-[200px] md:h-[250px] rounded-xl overflow-hidden group"
              >
                <Image
                  src="/office7.jpg"
                  alt="ZENO Office Location"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className={`text-white text-sm md:text-base font-medium ${fontClasses.display}`}>
                    DHA Phase 6, Karachi
                  </p>
                  <p className={`text-xs text-gray-300 ${fontClasses.body}`}>
                    Visit our office
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="px-4 container-custom sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-6 overflow-hidden text-center border md:p-8 lg:p-12 bg-gradient-to-br from-accent/10 to-transparent border-accent/20 rounded-xl md:rounded-2xl"
          >
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
              <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl ${fontClasses.display} text-white mb-3 md:mb-4`}>
                Prefer to <span className={`bg-gradient-to-r ${goldGradients.light} bg-clip-text text-transparent`}>Call</span> Us?
              </h2>

              <p className={`text-sm md:text-base text-gray-300 mb-4 md:mb-6 ${fontClasses.body}`}>
                We're available Monday-Friday, 9am-6pm
              </p>

              <a 
                href="tel:+922135876543"
                className="inline-flex items-center gap-2 text-xl transition-colors md:text-2xl lg:text-3xl text-accent hover:text-white"
              >
                📞 +92 21 3587 6543
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}