import React from 'react';
import { motion } from 'motion/react';

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      icon: "📓",
      tag: "Stationery",
      name: "Kindness Journal",
      desc: "A beautiful daily journal to write your acts of kindness and gratitude.",
      price: "From ₹299",
      link: "https://www.amazon.in/s?k=kindness+journal"
    },
    {
      id: 2,
      icon: "💧",
      tag: "Essentials",
      name: "Steel Water Bottle",
      desc: "Carry water to share. A small act of kindness starts with being prepared.",
      price: "From ₹399",
      link: "https://www.amazon.in/s?k=steel+water+bottle"
    },
    {
      id: 3,
      icon: "👕",
      tag: "Apparel",
      name: "Be Kind T-Shirt",
      desc: "Wear your values. Spread the kindness message wherever you go.",
      price: "From ₹499",
      link: "https://www.amazon.in/s?k=be+kind+t-shirt"
    },
    {
      id: 4,
      icon: "🧘",
      tag: "Wellness",
      name: "Mindfulness Cards",
      desc: "Daily affirmation and mindfulness cards to start your day with purpose.",
      price: "From ₹349",
      link: "https://www.amazon.in/s?k=mindfulness+affirmation+cards"
    }
  ];

  return (
    <section id="products" className="py-28 px-4 md:px-8 relative z-10 bg-neo-bg border-b-4 border-neo-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-neo-pink text-neo-black px-4 py-1.5 font-mono font-bold text-xs uppercase border-2 border-neo-black shadow-[4px_4px_0px_0px_#111111] mb-6 tracking-wider">Recommended</div>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-neo-black uppercase">Products We Love</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const bgColors = ['bg-neo-yellow', 'bg-neo-blue', 'bg-neo-green', 'bg-neo-pink'];
            const bgColor = bgColors[index % bgColors.length];
            return (
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={product.id} 
              className="bg-neo-white border-4 border-neo-black shadow-[8px_8px_0px_0px_#111111] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#111111]"
            >
              <div className={`w-full h-48 ${bgColor} flex items-center justify-center text-6xl border-b-4 border-neo-black drop-shadow-[2px_2px_0px_#111111]`}>
                {product.icon}
              </div>
              <div className="p-6 pb-8">
                <span className="inline-block bg-neo-black text-neo-white font-mono text-[0.6rem] font-bold tracking-[0.2em] px-2 py-1 uppercase mb-4">{product.tag}</span>
                <div className="font-heading font-black text-xl text-neo-black mb-3 leading-tight">{product.name}</div>
                <p className="text-sm text-neo-black font-medium leading-[1.6] mb-6 min-h-[60px]">{product.desc}</p>
                <div className="text-lg text-neo-black font-black mb-6 bg-neo-yellow inline-block px-3 py-1 border-2 border-neo-black shadow-[4px_4px_0px_#111111]">{product.price}</div>
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="block w-full py-4 bg-neo-white text-neo-black border-4 border-neo-black shadow-[4px_4px_0px_#111111] font-mono text-sm font-bold uppercase text-center transition-all duration-200 active:translate-y-1 active:shadow-none hover:bg-neo-blue hover:text-neo-white">
                  🛒 View on Amazon
                </a>
              </div>
            </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16 w-full flex justify-center"
        >
          <p className="inline-block bg-neo-white border-4 border-neo-black px-6 py-3 font-mono text-sm font-bold text-neo-black shadow-[6px_6px_0px_0px_#111111]">
            * These are Amazon affiliate links. We earn a small commission at no extra cost to you. Thank you! 🙏
          </p>
        </motion.div>
      </div>
    </section>
  );
}
