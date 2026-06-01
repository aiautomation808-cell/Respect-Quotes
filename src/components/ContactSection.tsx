import React from 'react';

export default function ContactSection({ showToast }: { showToast: (msg: string) => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Message sent! ✓');
  };

  return (
    <section id="contact" className="py-28 px-4 md:px-8 bg-[#1b2d42]/30 border-t border-blue-accent/10 relative z-10">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-center mb-10">
          <span className="text-[0.62rem] tracking-[0.35em] uppercase text-blue-accent mb-3 block">Get in Touch</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white italic">Contact Us</h2>
          <div className="w-10 h-0.5 bg-blue-accent/40 mx-auto mt-4"></div>
        </div>
        
        <p className="text-white/40 text-sm leading-[1.8] mt-4 mb-10 font-light">
          Have a brand collaboration idea, a kindness story to share, or just want to say hello? We'd love to hear from you.
        </p>

        <div className="flex flex-col gap-5 my-10">
          <div className="flex items-center gap-4 bg-[#0d1b2a]/60 border border-blue-accent/10 p-5 rounded text-left transition-all duration-300 hover:border-blue-accent/30 hover:translate-x-1">
            <div className="text-2xl shrink-0">📧</div>
            <div>
              <h4 className="text-xs tracking-[0.15em] uppercase text-blue-accent mb-1">Email</h4>
              <p className="text-sm text-white/90"><a href="mailto:aiautomation808@gmail.com" className="text-blue-light hover:text-white transition-colors">aiautomation808@gmail.com</a></p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-[#0d1b2a]/60 border border-blue-accent/10 p-5 rounded text-left transition-all duration-300 hover:border-blue-accent/30 hover:translate-x-1">
            <div className="text-2xl shrink-0">📍</div>
            <div>
              <h4 className="text-xs tracking-[0.15em] uppercase text-blue-accent mb-1">Location</h4>
              <p className="text-sm text-white/90">Ashta, Madhya Pradesh, India</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-[#0d1b2a]/60 border border-blue-accent/10 p-5 rounded text-left transition-all duration-300 hover:border-blue-accent/30 hover:translate-x-1">
            <div className="text-2xl shrink-0">🎬</div>
            <div>
              <h4 className="text-xs tracking-[0.15em] uppercase text-blue-accent mb-1">YouTube</h4>
              <p className="text-sm text-white/90"><a href="#" className="text-blue-light hover:text-white transition-colors">@YourChannelName</a> — 20K+ Subscribers</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-[#0d1b2a]/60 border border-blue-accent/10 p-5 rounded text-left transition-all duration-300 hover:border-blue-accent/30 hover:translate-x-1">
            <div className="text-2xl shrink-0">📱</div>
            <div>
              <h4 className="text-xs tracking-[0.15em] uppercase text-blue-accent mb-1">For Brand Deals</h4>
              <p className="text-sm text-white/90"><a href="mailto:aiautomation808@gmail.com" className="text-blue-light hover:text-white transition-colors">aiautomation808@gmail.com</a></p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.7rem] tracking-[0.15em] uppercase text-white/40">Your Name</label>
              <input type="text" placeholder="Rahul Sharma" className="bg-[#0d1b2a]/70 border border-blue-accent/15 text-white p-3 font-sans text-sm rounded outline-none transition-colors focus:border-blue-accent" required />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.7rem] tracking-[0.15em] uppercase text-white/40">Email Address</label>
              <input type="email" placeholder="you@example.com" className="bg-[#0d1b2a]/70 border border-blue-accent/15 text-white p-3 font-sans text-sm rounded outline-none transition-colors focus:border-blue-accent" required />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.7rem] tracking-[0.15em] uppercase text-white/40">Subject</label>
            <input type="text" placeholder="Brand Collaboration / Kindness Story / Other" className="bg-[#0d1b2a]/70 border border-blue-accent/15 text-white p-3 font-sans text-sm rounded outline-none transition-colors focus:border-blue-accent" required />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.7rem] tracking-[0.15em] uppercase text-white/40">Message</label>
            <textarea placeholder="Tell us your story or proposal..." className="bg-[#0d1b2a]/70 border border-blue-accent/15 text-white p-3 font-sans text-sm rounded outline-none transition-colors focus:border-blue-accent resize-y min-h-[110px]" required></textarea>
          </div>
          <button type="submit" className="mt-2 py-3 px-8 bg-blue-accent text-white font-sans text-sm tracking-[0.12em] uppercase cursor-pointer rounded transition-all duration-300 self-start hover:bg-[#1976d2] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(30,136,229,0.3)]">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}
