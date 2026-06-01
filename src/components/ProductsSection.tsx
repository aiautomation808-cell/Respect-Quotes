import React from 'react';

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
    <section id="products" className="py-28 px-4 md:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[0.62rem] tracking-[0.35em] uppercase text-blue-accent mb-3 block">Recommended</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white italic">Products We Love</h2>
          <div className="w-10 h-0.5 bg-blue-accent/40 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-[#1b2d42]/50 border border-blue-accent/10 rounded-md overflow-hidden transition-all duration-400 hover:border-blue-accent/30 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
              <div className="w-full h-40 bg-gradient-to-br from-blue-accent/15 to-[#0d1b2a]/80 flex items-center justify-center text-5xl border-b border-blue-accent/10">
                {product.icon}
              </div>
              <div className="p-5">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-blue-accent opacity-70 mb-2 block">{product.tag}</span>
                <div className="font-serif text-base text-white mb-2 italic">{product.name}</div>
                <p className="text-[0.78rem] text-white/40 leading-[1.6] mb-4">{product.desc}</p>
                <div className="text-[0.85rem] text-blue-light font-medium mb-4">{product.price}</div>
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="block w-full py-2 bg-[#ff9900] text-[#111] font-sans text-xs font-semibold tracking-wide uppercase rounded text-center transition-all duration-300 hover:bg-[#e68900] hover:-translate-y-px">
                  🛒 View on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-10 text-xs text-white/40 italic font-light">
          * These are Amazon affiliate links. We earn a small commission at no extra cost to you. Thank you for supporting SoulBook! 🙏
        </p>
      </div>
    </section>
  );
}
