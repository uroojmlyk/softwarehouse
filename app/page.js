// src/app/page.js
"use client"; 
import { motion } from 'framer-motion';
import Hero from './components/home/Hero';
import TrustSignals from './components/home/TrustSignals';
import ServicesShowcase from './components/home/ServicesShowcase';
import WorkProcess from './components/home/WorkProcess';
import FeaturedWork from './components/home/FeaturedWork';
import Testimonials from './components/home/Testimonials';
import ContactCTA from './components/home/ContactCTA';
export default function Home() {
  return (
    <> 
       <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <TrustSignals />
      <ServicesShowcase />
      <WorkProcess />
      <FeaturedWork />
      <Testimonials/>
      <ContactCTA />
      </motion.div>
    </>
  );
}