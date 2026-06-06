import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] px-6 md:px-10 py-5 flex justify-between items-center bg-neo-bg border-b-[4px] border-neo-black">
      <div className="font-heading font-black text-2xl text-neo-black tracking-tight">
        <span className="text-neo-blue shadow-none" style={{ textShadow: '2px 2px 0px #111111' }}>Soul</span>Book
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#quotes" className="text-sm font-bold tracking-widest uppercase text-neo-black no-underline transition-transform duration-300 hover:text-neo-blue hover:-translate-y-1 inline-block">Quotes</a></li>
        <li><a href="#about" className="text-sm font-bold tracking-widest uppercase text-neo-black no-underline transition-transform duration-300 hover:text-neo-pink hover:-translate-y-1 inline-block">About</a></li>
        <li><a href="#products" className="text-sm font-bold tracking-widest uppercase text-neo-black no-underline transition-transform duration-300 hover:text-neo-green hover:-translate-y-1 inline-block">Products</a></li>
        <li><a href="#contact" className="text-sm font-bold tracking-widest uppercase text-neo-black no-underline transition-transform duration-300 hover:text-neo-yellow hover:-translate-y-1 inline-block">Contact</a></li>
      </ul>
    </nav>
  );
}
