import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-32 pb-16 relative z-10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        className="inline-block bg-neo-yellow text-neo-black border-2 border-neo-black font-mono font-bold text-xs px-4 py-2 uppercase shadow-neo mb-8"
      >
        Words that move the soul
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.1 }}
        className="font-heading text-5xl md:text-7xl lg:text-[7rem] leading-none font-black text-neo-black tracking-tighter"
      >
        Kindness &<br />
        <span className="block text-neo-pink mt-2" style={{ textShadow: '4px 4px 0px #111111' }}>Respect</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg md:text-xl text-neo-black font-medium max-w-[500px] leading-relaxed mt-8 bg-neo-white border-2 border-neo-black p-4 shadow-[4px_4px_0px_0px_#111111]"
      >
        A collection of quotes that inspire humanity, compassion, and the beauty of treating others with love.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 flex gap-6 flex-wrap justify-center"
      >
        <a href="#quotes" className="px-8 py-4 bg-neo-blue text-neo-black font-bold font-sans text-sm tracking-widest uppercase rounded-none border-2 border-neo-black shadow-neo transition-all duration-200 active:shadow-none active:translate-y-1 hover:-translate-y-1 hover:shadow-neo-lg">
          Read Quotes
        </a>
        <a href="#about" className="px-8 py-4 bg-neo-white text-neo-black font-bold font-sans text-sm tracking-widest uppercase rounded-none border-2 border-neo-black shadow-neo transition-all duration-200 active:shadow-none active:translate-y-1 hover:-translate-y-1 hover:bg-neo-yellow hover:shadow-neo-lg">
          About Us
        </a>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 bg-neo-white border-2 border-neo-black shadow-[4px_4px_0px_0px_#111111] px-4 py-2"
      >
        <span className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-neo-black">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-xl leading-none font-bold text-neo-blue"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
