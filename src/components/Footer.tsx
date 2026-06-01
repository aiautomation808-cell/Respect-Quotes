import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 px-8 border-t border-blue-accent/10 flex flex-col items-center gap-4 text-center z-10 relative bg-[#0d1b2a]">
      <div className="font-serif text-2xl text-blue-light italic">
        <span className="text-white not-italic">Soul</span>Book
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 my-2">
        <a href="#quotes" className="text-xs text-white/40 tracking-widest uppercase transition-colors hover:text-blue-light">Quotes</a>
        <a href="#about" className="text-xs text-white/40 tracking-widest uppercase transition-colors hover:text-blue-light">About</a>
        <a href="#products" className="text-xs text-white/40 tracking-widest uppercase transition-colors hover:text-blue-light">Products</a>
        <a href="#contact" className="text-xs text-white/40 tracking-widest uppercase transition-colors hover:text-blue-light">Contact</a>
      </div>
      
      <p className="text-[0.78rem] text-white/40 leading-[1.7] font-light">
        Made with ❤️ by Anant Choursiya · Ashta, India<br/>
        Spreading kindness, one quote at a time.
      </p>
      
      <p className="text-[0.7rem] opacity-40 text-white/40 mt-2 font-light">
        © 2026 SoulBook. All rights reserved.
      </p>
    </footer>
  );
}
