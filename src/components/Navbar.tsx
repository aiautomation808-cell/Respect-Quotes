import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] px-4 md:px-10 py-4 flex justify-between items-center bg-[#0d1b2a]/90 backdrop-blur-md border-b border-blue-accent/10">
      <div className="font-serif text-xl text-blue-light italic">
        <span className="text-white not-italic">Soul</span>Book
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#quotes" className="text-xs tracking-widest uppercase text-white/40 no-underline transition-colors duration-300 hover:text-blue-light">Quotes</a></li>
        <li><a href="#about" className="text-xs tracking-widest uppercase text-white/40 no-underline transition-colors duration-300 hover:text-blue-light">About</a></li>
        <li><a href="#products" className="text-xs tracking-widest uppercase text-white/40 no-underline transition-colors duration-300 hover:text-blue-light">Products</a></li>
        <li><a href="#contact" className="text-xs tracking-widest uppercase text-white/40 no-underline transition-colors duration-300 hover:text-blue-light">Contact</a></li>
      </ul>
    </nav>
  );
}
