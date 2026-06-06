import React from 'react';
import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-4 md:px-8 border-y-4 border-neo-black relative z-10 bg-neo-pink overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-neo-white text-neo-black px-4 py-1.5 font-mono font-bold text-xs uppercase border-2 border-neo-black shadow-[4px_4px_0px_0px_#111111] mb-6 tracking-wider">Our Story</div>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-neo-black uppercase">About SoulBook</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-neo-white border-4 border-neo-black p-8 shadow-[8px_8px_0px_0px_#111111] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#111111]"
          >
            <span className="text-5xl block mb-6 drop-shadow-[2px_2px_0px_#111111]">📖</span>
            <h3 className="font-heading font-bold text-2xl text-neo-black mb-4">About This Website</h3>
            <p className="text-base text-neo-black font-medium leading-[1.6]">
              SoulBook was created as a home for words that matter — quotes about kindness, respect, humanity, and compassion. Every quote here is handpicked to remind us that the world becomes better when we treat each other with love and dignity.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative bg-neo-yellow border-4 border-neo-black p-8 shadow-[8px_8px_0px_0px_#111111] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#111111]"
          >
            <span className="text-5xl block mb-6 drop-shadow-[2px_2px_0px_#111111]">🎬</span>
            <h3 className="font-heading font-bold text-2xl text-neo-black mb-4">About the Channel</h3>
            <p className="text-base text-neo-black font-medium leading-[1.6]">
              Our YouTube channel is dedicated to <span className="bg-neo-white px-1 border border-neo-black font-bold">kindness & humanity tribute shorts</span> — real moments of people helping the elderly, feeding the poor, and spreading compassion. With <span className="bg-neo-white px-1 border border-neo-black font-bold">20,000+ subscribers</span>, we create content that makes people feel something real.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative bg-neo-blue border-4 border-neo-black p-8 shadow-[8px_8px_0px_0px_#111111] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#111111]"
          >
            <span className="text-5xl block mb-4 drop-shadow-[2px_2px_0px_#111111]">👤</span>
            <h3 className="font-heading font-bold text-2xl text-neo-black mb-4">About the Creator</h3>
            <div className="inline-block bg-neo-black text-neo-white border-2 border-neo-black px-4 py-1 font-mono text-xs font-bold tracking-wide uppercase mb-6 shadow-[2px_2px_0px_#ffde59]">
              ✦ Creator & Founder
            </div>
            <p className="text-base text-neo-black font-medium leading-[1.6]">
              Hi, I'm <span className="bg-neo-white px-1 border border-neo-black font-bold">Anant Choursiya</span> from <span className="bg-neo-white px-1 border border-neo-black font-bold">Ashta, India</span>. I started this journey because I believe kindness stories deserve to be seen. Every video I make is a tribute to the beautiful humans who silently make this world a better place.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
