import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-4 md:px-8 bg-[#1b2d42]/30 border-y border-blue-accent/10 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[0.62rem] tracking-[0.35em] uppercase text-blue-accent mb-3 block">Our Story</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white italic">About SoulBook</h2>
          <div className="w-10 h-0.5 bg-blue-accent/40 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          <div className="group relative bg-[#0d1b2a]/60 border border-blue-accent/10 p-8 rounded overflow-hidden transition-all duration-400 hover:border-blue-accent/25 hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-blue-accent transition-all duration-400 group-hover:h-full"></div>
            <span className="text-3xl block mb-5">📖</span>
            <h3 className="font-serif text-xl text-white italic mb-4">About This Website</h3>
            <p className="text-sm text-white/40 leading-[1.85] font-light">
              SoulBook was created as a home for words that matter — quotes about kindness, respect, humanity, and compassion. Every quote here is handpicked to remind us that the world becomes better when we treat each other with love and dignity.
            </p>
          </div>

          <div className="group relative bg-[#0d1b2a]/60 border border-blue-accent/10 p-8 rounded overflow-hidden transition-all duration-400 hover:border-blue-accent/25 hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-blue-accent transition-all duration-400 group-hover:h-full"></div>
            <span className="text-3xl block mb-5">🎬</span>
            <h3 className="font-serif text-xl text-white italic mb-4">About the Channel</h3>
            <p className="text-sm text-white/40 leading-[1.85] font-light">
              Our YouTube channel is dedicated to <span className="text-blue-light font-medium">kindness & humanity tribute shorts</span> — real moments of people helping the elderly, feeding the poor, and spreading compassion. With <span className="text-blue-light font-medium">20,000+ subscribers</span>, we create content that makes people feel something real.
            </p>
          </div>

          <div className="group relative bg-[#0d1b2a]/60 border border-blue-accent/10 p-8 rounded overflow-hidden transition-all duration-400 hover:border-blue-accent/25 hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-blue-accent transition-all duration-400 group-hover:h-full"></div>
            <span className="text-3xl block mb-5">👤</span>
            <h3 className="font-serif text-xl text-white italic mb-4">About the Creator</h3>
            <div className="inline-flex items-center gap-2 bg-blue-accent/10 border border-blue-accent/20 px-4 py-1.5 rounded-full text-[0.72rem] tracking-wide text-blue-light uppercase mb-4">
              ✦ Creator & Founder
            </div>
            <p className="text-sm text-white/40 leading-[1.85] font-light">
              Hi, I'm <span className="text-blue-light font-medium">Anant Choursiya</span> from <span className="text-blue-light font-medium">Ashta, India</span>. I started this journey because I believe kindness stories deserve to be seen. Every video I make is a tribute to the beautiful humans who silently make this world a better place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
