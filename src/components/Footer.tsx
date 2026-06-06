import React from 'react';

export default function Footer() {
  return (
    <footer className="py-20 px-8 flex flex-col items-center gap-10 text-center z-10 bg-neo-white">
      <div className="font-heading font-black text-4xl text-neo-black tracking-tight border-4 border-neo-black px-8 py-4 bg-neo-yellow shadow-[6px_6px_0px_0px_#111111] transform -rotate-2">
        <span className="text-neo-blue" style={{ textShadow: '2px 2px 0px #111111' }}>Soul</span>Book
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 my-4">
        <a href="#quotes" className="font-mono text-sm font-bold text-neo-black border-b-4 border-neo-black uppercase transition-all duration-200 hover:-translate-y-1 hover:text-neo-blue hover:border-neo-blue">Quotes</a>
        <a href="#about" className="font-mono text-sm font-bold text-neo-black border-b-4 border-neo-black uppercase transition-all duration-200 hover:-translate-y-1 hover:text-neo-pink hover:border-neo-pink">About</a>
        <a href="#products" className="font-mono text-sm font-bold text-neo-black border-b-4 border-neo-black uppercase transition-all duration-200 hover:-translate-y-1 hover:text-neo-green hover:border-neo-green">Products</a>
        <a href="#contact" className="font-mono text-sm font-bold text-neo-black border-b-4 border-neo-black uppercase transition-all duration-200 hover:-translate-y-1 hover:text-neo-pink hover:border-neo-pink">Contact</a>
      </div>
      
      <p className="text-base text-neo-black font-medium leading-[1.8] max-w-sm px-4">
        Made with ❤️ by Anant Choursiya · Ashta, India<br/>
        Spreading kindness, one quote at a time.
      </p>
      
      <p className="font-mono text-xs font-bold bg-neo-black text-neo-white border-2 border-neo-black shadow-[4px_4px_0px_0px_#ffde59] px-6 py-3 mt-4">
        © 2026 SoulBook. All rights reserved.
      </p>
    </footer>
  );
}
