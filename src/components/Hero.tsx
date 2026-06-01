import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-24 pb-16 relative">
      <motion.p 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-[0.65rem] tracking-[0.4em] uppercase text-blue-accent mb-6"
      >
        Words that move the soul
      </motion.p>
      
      <motion.h1 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-serif text-4xl md:text-7xl lg:text-[6.5rem] leading-none font-semibold text-white"
      >
        Kindness &<br />
        <em className="block text-blue-light font-normal text-3xl md:text-6xl lg:text-[5.5rem] mt-2">Respect</em>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="text-base text-white/40 max-w-[420px] leading-relaxed mt-6 font-light"
      >
        A collection of quotes that inspire humanity, compassion, and the beauty of treating others with love.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="mt-10 flex gap-4 flex-wrap justify-center"
      >
        <a href="#quotes" className="px-8 py-3 bg-blue-accent text-white font-sans text-sm tracking-widest uppercase rounded cursor-pointer transition-all duration-300 hover:bg-[#1976d2] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(30,136,229,0.3)]">
          Read Quotes
        </a>
        <a href="#about" className="px-8 py-3 bg-transparent text-blue-light border border-blue-accent/30 font-sans text-sm tracking-widest uppercase rounded cursor-pointer transition-all duration-300 hover:border-blue-accent hover:bg-blue-accent/10">
          About Us
        </a>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        <motion.div 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-[45px] bg-gradient-to-b from-blue-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
