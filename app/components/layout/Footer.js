// src/components/layout/Footer.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('idle'); // idle, loading, success, error

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] text-white border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C9A959 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          {/* Top Section - Newsletter */}
          <motion.div 
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-8 mb-16 p-8 bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 rounded-2xl"
          >
            <div>
              <h3 className="text-2xl font-display text-white mb-2">
                Stay <span className="gradient-text">Updated</span>
              </h3>
              <p className="text-gray-400">
                Get insights on enterprise software trends and ZENO's latest projects.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={subscriptionStatus === 'loading'}
                className="px-6 py-3 bg-accent text-primary font-medium disabled:opacity-50 relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {subscriptionStatus === 'loading' ? '...' : 
                   subscriptionStatus === 'success' ? '✓' : 'Subscribe'}
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

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div variants={itemVariants}>
              <div className="mb-6">
                <h2 className="text-3xl font-display text-white mb-2">
                  {companyInfo.name}
                  <span className="block text-sm text-accent mt-1">{companyInfo.tagline}</span>
                </h2>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Premium software development house based in DHA, Karachi. 
                Building enterprise solutions since {companyInfo.founded}.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2 }}
                    className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent flex items-center gap-1"
                  >
                    <span>{badge.icon}</span>
                    <span>{badge.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-accent transition-all ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-display text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-4 bg-accent" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <Link 
                      href={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors group"
                    >
                      <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-display text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-4 bg-accent" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <Link 
                      href={service.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors group"
                    >
                      <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        {service.icon}
                      </span>
                      <span>{service.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-display text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-4 bg-accent" />
                Get in Touch
              </h4>
              
              <ul className="space-y-4">
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-accent text-lg">📍</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Visit Us</div>
                    <span className="text-gray-300 text-sm">{companyInfo.address}</span>
                  </div>
                </motion.li>
                
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-accent text-lg">📞</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Call Us</div>
                    <a href={`tel:${companyInfo.phone}`} className="text-gray-300 text-sm hover:text-accent transition-colors">
                      {companyInfo.phone}
                    </a>
                  </div>
                </motion.li>
                
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-accent text-lg">✉️</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Email Us</div>
                    <a href={`mailto:${companyInfo.email}`} className="text-gray-300 text-sm hover:text-accent transition-colors">
                      {companyInfo.email}
                    </a>
                  </div>
                </motion.li>
                
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-accent text-lg">⏰</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Business Hours</div>
                    <span className="text-gray-300 text-sm">{companyInfo.hours}</span>
                  </div>
                </motion.li>
              </ul>

              {/* Emergency Contact */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg"
              >
                <div className="text-xs text-accent mb-1">24/7 Support</div>
                <a href="tel:+923001234567" className="text-white text-sm font-medium hover:text-accent transition-colors">
                  +92 300 1234567
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} ZENO. All rights reserved.
                <span className="mx-2">•</span>
                <span className="text-accent">v2.0.0</span>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap gap-6 text-sm">
                {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Sitemap'].map((item, index) => (
                  <Link
                    key={index}
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-500 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Made with love */}
              <div className="flex items-center gap-1 text-sm text-gray-500">
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

            {/* Certifications */}
            <div className="flex justify-center gap-4 mt-6 text-xs text-gray-600">
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>PCI DSS Compliant</span>
              <span>•</span>
              <span>GDPR Ready</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute -top-5 right-10 w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
}