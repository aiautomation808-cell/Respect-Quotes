import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { quotes } from '../data/quotes';

export default function QuotesSection({ showToast }: { showToast: (msg: string) => void }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredQuotes, setFilteredQuotes] = useState(quotes);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredQuotes(quotes);
    } else {
      setFilteredQuotes(quotes.filter(q => q.category === activeCategory));
    }
    setCurrentIndex(0);
  }, [activeCategory]);

  const handleNext = () => {
    if (currentIndex < filteredQuotes.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    showToast('Copied! ✓');
  };

  const handleShare = (text: string) => {
    if (navigator.share) {
      navigator.share({ text: `"${text}" — SoulBook` }).catch(console.error);
    } else {
      handleCopy(text);
    }
  };

  const categories = ['all', 'kindness', 'respect', 'humanity', 'compassion', 'whatsapp'];

  const getDecoText = () => {
    const titles = ["Kindness", "Respect", "Humanity", "Compassion", "Inspiration"];
    return titles[currentIndex % titles.length];
  };

  const currentQuote = filteredQuotes[currentIndex];
  // Calculate a max of 8 dots for pagination
  const maxDots = Math.min(filteredQuotes.length, 8);
  const dotIndex = Math.min(currentIndex, maxDots - 1);

  return (
    <section id="quotes" className="py-24 px-4 md:px-8 min-h-screen flex flex-col items-center justify-center relative z-10">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        
        <div className="text-center mb-14">
          <span className="text-[0.62rem] tracking-[0.35em] uppercase text-blue-accent mb-3 block">Daily Inspiration</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white italic">Open the Book</h2>
          <div className="w-10 h-0.5 bg-blue-accent/40 mx-auto mt-4"></div>
        </div>

        <div className="flex gap-2.5 flex-wrap justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 border rounded font-sans text-xs tracking-wide transition-all duration-300 capitalize
                ${activeCategory === cat 
                  ? 'border-blue-accent text-blue-light bg-blue-accent/10' 
                  : 'border-blue-accent/20 text-white/40 hover:border-blue-accent hover:text-blue-light hover:bg-blue-accent/10'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Book Container */}
        <div className="relative w-full max-w-3xl h-[460px] md:h-[500px]">
          <div className="absolute -bottom-6 inset-x-12 h-9 bg-[radial-gradient(ellipse,rgba(0,0,0,0.55)_0%,transparent_70%)] blur-md"></div>
          
          <div className="w-full h-full relative rounded-md shadow-2xl flex bg-page-bg overflow-hidden border border-blue-accent/10">
            {/* Left Page (Deco) - Hidden on mobile, visible on md+ */}
            <div className="hidden md:flex flex-col w-1/2 h-full border-r border-[#648cb4]/20 relative bg-page-bg page-lines p-10 justify-center items-center text-center">
              <AnimatePresence mode="wait">
                {currentIndex === 0 ? (
                  <motion.div
                    key="cover"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center"
                  >
                    <div className="text-xl text-blue-accent/30 tracking-[0.4em] mb-4">✦ ✦ ✦</div>
                    <div className="font-serif text-2xl text-ink italic leading-snug">
                      Words of<span className="block text-blue-accent text-[0.85em] mt-1">Kindness & Respect</span>
                    </div>
                    <div className="text-xl text-blue-accent/30 tracking-[0.4em] my-4">— ✦ —</div>
                    <div className="text-xs text-ink-muted leading-relaxed max-w-[160px]">Turn the page to discover quotes</div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`deco-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center"
                  >
                    <div className="text-xl text-blue-accent/30 tracking-[0.4em] mb-4">✦ ✦ ✦</div>
                    <div className="font-serif text-2xl text-ink italic leading-snug">
                      {getDecoText()}<span className="block text-blue-accent text-[0.85em] mt-1">& the Soul</span>
                    </div>
                    <div className="text-xl text-blue-accent/30 tracking-[0.4em] my-4">— ✦ —</div>
                    <div className="text-xs text-ink-muted leading-relaxed max-w-[160px]">Words that remind us to be human</div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute bottom-4 right-6 text-[0.65rem] text-ink-muted italic">{currentIndex > 0 ? currentIndex : 'i'}</div>
            </div>

            {/* Right Page (Content) */}
            <div className="w-full md:w-1/2 h-full relative bg-page-bg2 page-lines p-8 md:p-10 flex flex-col justify-center" style={{ perspective: '1200px' }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={(dir) => ({ opacity: 0, rotateY: dir > 0 ? 90 : -90, transformOrigin: 'left center' })}
                  animate={{ opacity: 1, rotateY: 0, transformOrigin: 'left center' }}
                  exit={(dir) => ({ opacity: 0, rotateY: dir > 0 ? -90 : 90, transformOrigin: 'left center' })}
                  transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative z-10 w-full"
                >
                  <p className="text-[0.58rem] tracking-[0.28em] uppercase text-blue-accent mb-4 opacity-70">{currentQuote?.category || 'Quotes'}</p>
                  <span className="font-serif text-6xl leading-[0.5] text-blue-accent/10 block mb-2">"</span>
                  <p className="font-serif text-lg md:text-xl leading-[1.85] text-ink italic mb-6">
                    {currentQuote?.text || "No quotes found for this category."}
                  </p>
                  <div className="w-6 h-0.5 bg-blue-accent/35 mb-4"></div>
                  
                  {filteredQuotes.length > 0 && (
                     <div className="flex gap-2 mt-5">
                       <button onClick={() => handleCopy(currentQuote.text)} className="px-4 py-1.5 bg-blue-accent hover:bg-[#1976d2] text-white text-[0.68rem] tracking-wide uppercase rounded font-sans transition-colors">
                         Copy
                       </button>
                       <button onClick={() => handleShare(currentQuote.text)} className="px-4 py-1.5 bg-transparent border border-blue-accent/30 text-ink-muted hover:border-blue-accent hover:text-blue-accent text-[0.68rem] tracking-wide uppercase rounded font-sans transition-colors">
                         Share
                       </button>
                     </div>
                  )}
                </motion.div>
              </AnimatePresence>
              
              {/* Corner fold for next page visual hint */}
              <div 
                onClick={handleNext}
                className="absolute bottom-0 right-0 w-7 h-7 bg-gradient-to-br from-transparent to-blue-light/20 cursor-pointer hidden md:block" 
                style={{ background: 'linear-gradient(135deg, transparent 50%, rgba(100,140,200,0.2) 50%)'}}
              />
              <div className="absolute bottom-4 left-6 text-[0.65rem] text-ink-muted italic">{currentIndex + 1}</div>
            </div>
          </div>
        </div>

        {/* Navigation Controles */}
        <div className="flex items-center gap-6 mt-8">
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className="w-12 h-12 rounded-full border border-blue-accent/30 bg-[#0d1b2a]/80 backdrop-blur text-blue-light flex items-center justify-center transition-all hover:border-blue-accent hover:bg-blue-accent/10 hover:scale-110 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-[#0d1b2a]/80"
          >
            &#8592;
          </button>
          
          <div className="flex gap-1.5 items-center">
            {Array.from({ length: maxDots }).map((_, i) => (
              <div 
                key={i} 
                onClick={() => {
                  if (i !== currentIndex) {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }
                }}
                className={`transition-all duration-300 cursor-pointer ${
                  i === dotIndex 
                  ? 'bg-blue-accent w-4 h-1.5 rounded-sm shadow-[0_0_8px_rgba(30,136,229,0.4)]' 
                  : 'w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            disabled={currentIndex === filteredQuotes.length - 1 || filteredQuotes.length === 0}
            className="w-12 h-12 rounded-full border border-blue-accent/30 bg-[#0d1b2a]/80 backdrop-blur text-blue-light flex items-center justify-center transition-all hover:border-blue-accent hover:bg-blue-accent/10 hover:scale-110 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-[#0d1b2a]/80"
          >
            &#8594;
          </button>
        </div>
        
        <div className="text-[0.7rem] tracking-widest text-white/40 uppercase mt-4">
          Page {filteredQuotes.length > 0 ? currentIndex + 1 : 0} of {filteredQuotes.length}
        </div>

      </div>
    </section>
  );
}
