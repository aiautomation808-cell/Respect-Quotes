import React from 'react';
import { motion } from 'motion/react';

export default function ContactSection({ showToast }: { showToast: (msg: string) => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Message sent! ✓');
  };

  return (
    <section id="contact" className="py-28 px-4 md:px-8 border-y-4 border-neo-black relative z-10 bg-neo-yellow overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 text-left">
        
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <div className="mb-10 text-left">
            <div className="inline-block bg-neo-white text-neo-black px-4 py-1.5 font-mono font-bold text-xs uppercase border-2 border-neo-black shadow-[4px_4px_0px_0px_#111111] mb-6 tracking-wider">Get in Touch</div>
            <h2 className="font-heading font-black text-5xl md:text-6xl text-neo-black uppercase">Contact Us</h2>
          </div>
          
          <p className="text-neo-black text-lg font-medium leading-[1.6] mb-10 bg-neo-white p-6 border-4 border-neo-black shadow-[8px_8px_0px_0px_#111111]">
            Have a brand collaboration idea, a kindness story to share, or just want to say hello? We'd love to hear from you.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6 bg-neo-white border-4 border-neo-black shadow-[6px_6px_0px_#111111] p-5 transition-transform hover:-translate-y-1">
              <div className="text-4xl drop-shadow-[2px_2px_0px_#111111]">📧</div>
              <div>
                <h4 className="font-mono text-xs font-bold tracking-[0.1em] uppercase text-neo-black bg-neo-pink inline-block px-2 py-0.5 mb-2 border-2 border-neo-black">Email</h4>
                <p className="text-base font-bold"><a href="mailto:aiautomation808@gmail.com" className="text-neo-blue hover:text-neo-black underline decoration-2 underline-offset-4">aiautomation808@gmail.com</a></p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 bg-neo-white border-4 border-neo-black shadow-[6px_6px_0px_#111111] p-5 transition-transform hover:-translate-y-1">
              <div className="text-4xl drop-shadow-[2px_2px_0px_#111111]">📍</div>
              <div>
                <h4 className="font-mono text-xs font-bold tracking-[0.1em] uppercase text-neo-black bg-neo-green inline-block px-2 py-0.5 mb-2 border-2 border-neo-black">Location</h4>
                <p className="text-base font-bold">Ashta, Madhya Pradesh, India</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 bg-neo-white border-4 border-neo-black shadow-[6px_6px_0px_#111111] p-5 transition-transform hover:-translate-y-1">
              <div className="text-4xl drop-shadow-[2px_2px_0px_#111111]">🎬</div>
              <div>
                <h4 className="font-mono text-xs font-bold tracking-[0.1em] uppercase text-neo-black bg-neo-blue inline-block px-2 py-0.5 mb-2 border-2 border-neo-black">YouTube</h4>
                <p className="text-base font-bold"><a href="#" className="text-neo-black hover:text-neo-blue underline decoration-2 underline-offset-4">@YourChannelName</a> — 20K+</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 mt-12 md:mt-0"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-neo-white border-4 border-neo-black shadow-[12px_12px_0px_0px_#111111] p-8 md:p-10">
            <h3 className="font-heading font-black text-3xl uppercase mb-2 text-neo-black border-b-4 border-neo-black pb-4">Drop a Message</h3>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[0.65rem] font-bold tracking-[0.1em] uppercase text-neo-black block px-1">Your Name</label>
              <input type="text" placeholder="Rahul Sharma" className="bg-neo-bg border-[3px] border-neo-black text-neo-black p-4 font-mono text-sm font-bold shadow-[4px_4px_0px_#111111] outline-none transition-transform focus:-translate-y-1 focus:shadow-[6px_6px_0px_#111111]" required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[0.65rem] font-bold tracking-[0.1em] uppercase text-neo-black block px-1">Email Address</label>
              <input type="email" placeholder="you@example.com" className="bg-neo-bg border-[3px] border-neo-black text-neo-black p-4 font-mono text-sm font-bold shadow-[4px_4px_0px_#111111] outline-none transition-transform focus:-translate-y-1 focus:shadow-[6px_6px_0px_#111111]" required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[0.65rem] font-bold tracking-[0.1em] uppercase text-neo-black block px-1">Subject</label>
              <input type="text" placeholder="Collaboration / Kindness Story" className="bg-neo-bg border-[3px] border-neo-black text-neo-black p-4 font-mono text-sm font-bold shadow-[4px_4px_0px_#111111] outline-none transition-transform focus:-translate-y-1 focus:shadow-[6px_6px_0px_#111111]" required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[0.65rem] font-bold tracking-[0.1em] uppercase text-neo-black block px-1">Message</label>
              <textarea placeholder="Tell us your story..." className="bg-neo-bg border-[3px] border-neo-black text-neo-black p-4 font-mono text-sm font-bold shadow-[4px_4px_0px_#111111] outline-none transition-transform focus:-translate-y-1 focus:shadow-[6px_6px_0px_#111111] resize-y min-h-[140px]" required></textarea>
            </div>
            
            <button type="submit" className="mt-4 py-4 px-8 bg-neo-blue border-4 border-neo-black text-neo-black font-black text-lg tracking-wider uppercase cursor-pointer transition-all duration-200 active:shadow-none active:translate-y-1 shadow-[6px_6px_0px_0px_#111111] hover:bg-neo-pink hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#111111]">
              Send Message →
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
