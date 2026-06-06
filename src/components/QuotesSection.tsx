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
    <section id="quotes" className="py-24 px-4 md:px-8 min-h-screen flex flex-col items-center justify-center relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-neo-blue text-neo-black px-4 py-1.5 font-mono font-bold text-xs uppercase border-2 border-neo-black shadow-[4px_4px_0px_0px_#111111] mb-6 tracking-wider">
            Daily Inspiration
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-neo-black uppercase tracking-tight">Open the Book</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex gap-4 flex-wrap justify-center mb-10 w-full max-w-2xl px-4"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 border-2 border-neo-black font-bold text-sm tracking-wide transition-all duration-200 uppercase shadow-neo active:shadow-none active:translate-y-1
                ${activeCategory === cat 
                  ? 'bg-neo-black text-neo-white shadow-none translate-y-1' 
                  : 'bg-neo-white text-neo-black hover:-translate-y-1 hover:shadow-neo-lg hover:bg-neo-yellow'}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Book Container */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full max-w-4xl h-[460px] md:h-[500px]"
        >
          <div className="w-full h-full relative flex flex-col md:flex-row bg-neo-white overflow-hidden border-4 border-neo-black shadow-neo-lg">
            {/* Left Page (Deco) - Hidden on mobile, visible on md+ */}
            <div className="hidden md:flex flex-col w-1/2 h-full border-r-4 border-neo-black relative bg-neo-white page-lines p-10 justify-center items-center text-center">
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
                    <div className="text-3xl text-neo-black tracking-[0.2em] mb-6 font-bold">★★★</div>
                    <div className="font-heading font-black text-4xl text-neo-black uppercase leading-tight">
                      Words of<span className="block bg-neo-yellow px-4 py-2 border-4 border-neo-black transform -rotate-2 mt-4 shadow-[4px_4px_0px_#111111]">Kindness & Respect</span>
                    </div>
                    <div className="text-3xl text-neo-black tracking-[0.2em] my-8 font-bold">★★★</div>
                    <div className="bg-neo-black text-neo-white font-mono text-xs px-4 py-2 font-bold uppercase tracking-wider">Turn the page to discover</div>
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
                    <div className="text-3xl text-neo-black tracking-[0.2em] mb-6 font-bold">★★★</div>
                    <div className="font-heading font-black text-4xl text-neo-black uppercase leading-tight">
                      {getDecoText()}<span className="block bg-neo-pink px-4 py-2 border-4 border-neo-black transform rotate-2 mt-4 shadow-[4px_4px_0px_#111111]">& the Soul</span>
                    </div>
                    <div className="text-3xl text-neo-black tracking-[0.2em] my-8 font-bold">★★★</div>
                    <div className="bg-neo-black text-neo-white font-mono text-xs px-4 py-2 font-bold uppercase tracking-wider">Words that remind us</div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute bottom-6 right-6 font-mono text-sm font-bold border-2 border-neo-black bg-neo-white w-10 h-10 flex items-center justify-center shadow-[4px_4px_0px_0px_#111111]">{currentIndex > 0 ? currentIndex : 'i'}</div>
            </div>

            {/* Right Page (Content) */}
            <div className="w-full md:w-1/2 h-full relative bg-neo-white page-lines p-8 md:p-12 flex flex-col justify-center" style={{ perspective: '1200px' }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={(dir: number) => ({ opacity: 0, rotateY: dir > 0 ? 90 : -90, transformOrigin: 'left center' })}
                  animate={{ opacity: 1, rotateY: 0, transformOrigin: 'left center' }}
                  exit={(dir: number) => ({ opacity: 0, rotateY: dir > 0 ? -90 : 90, transformOrigin: 'left center' })}
                  transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative z-10 w-full"
                >
                  <div className="inline-block bg-neo-green font-mono font-bold text-xs tracking-wider uppercase text-neo-black border-2 border-neo-black shadow-[2px_2px_0px_#111111] px-3 py-1.5 mb-8">
                    {currentQuote?.category || 'Quotes'}
                  </div>
                  
                  <div className="relative font-heading font-bold text-2xl md:text-4xl leading-tight text-neo-black mb-10 z-10">
                    <span className="absolute -top-10 -left-6 text-8xl text-neo-blue font-black -z-10 opacity-50" style={{ textShadow: '4px 4px 0px #111111' }}>"</span>
                    {currentQuote?.text || "No quotes found for this category."}
                  </div>
                  
                  {filteredQuotes.length > 0 && (
                     <div className="flex gap-4">
                       <button onClick={() => handleCopy(currentQuote.text)} className="px-6 py-2.5 bg-neo-yellow hover:bg-neo-white border-2 border-neo-black shadow-[4px_4px_0px_#111111] active:shadow-none active:translate-y-1 text-neo-black font-bold tracking-wide uppercase rounded-none transition-all">
                         Copy
                       </button>
                       <button onClick={() => handleShare(currentQuote.text)} className="px-6 py-2.5 bg-neo-white hover:bg-neo-blue border-2 border-neo-black shadow-[4px_4px_0px_#111111] active:shadow-none active:translate-y-1 text-neo-black font-bold tracking-wide uppercase rounded-none transition-all">
                         Share
                       </button>
                     </div>
                  )}
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-6 left-6 font-mono text-sm font-bold border-2 border-neo-black bg-neo-white w-10 h-10 flex items-center justify-center shadow-[4px_4px_0px_0px_#111111]">{currentIndex + 1}</div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Controles */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-8 mt-12 bg-neo-white border-4 border-neo-black shadow-neo-lg px-8 py-5"
        >
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className="w-14 h-14 border-[3px] border-neo-black font-black text-2xl bg-neo-yellow text-neo-black flex items-center justify-center shadow-[4px_4px_0px_#111111] hover:bg-neo-white hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111111] active:translate-y-1 active:shadow-none disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_#111111] disabled:bg-neo-bg transition-all"
          >
            ←
          </button>
          
          <div className="flex gap-3 items-center mx-4">
            {Array.from({ length: maxDots }).map((_, i) => (
              <div 
                key={i} 
                onClick={() => {
                  if (i !== currentIndex) {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }
                }}
                className={`transition-all duration-300 border-[3px] border-neo-black cursor-pointer ${
                  i === dotIndex 
                  ? 'bg-neo-pink w-8 h-8 shadow-[2px_2px_0px_#111111]' 
                  : 'w-5 h-5 bg-neo-white hover:bg-neo-yellow hover:scale-110'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            disabled={currentIndex === filteredQuotes.length - 1 || filteredQuotes.length === 0}
            className="w-14 h-14 border-[3px] border-neo-black font-black text-2xl bg-neo-blue text-neo-black flex items-center justify-center shadow-[4px_4px_0px_#111111] hover:bg-neo-white hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111111] active:translate-y-1 active:shadow-none disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_#111111] disabled:bg-neo-bg transition-all"
          >
            →
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-mono text-sm font-bold bg-neo-black text-neo-white px-6 py-2.5 mt-8 uppercase border-[3px] border-neo-black shadow-neo"
        >
          Page {filteredQuotes.length > 0 ? currentIndex + 1 : 0} of {filteredQuotes.length}
        </motion.div>

      </div>
    </section>
  );
}
