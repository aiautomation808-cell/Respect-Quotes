/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuotesSection from './components/QuotesSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const displayToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  return (
    <div className="relative font-sans text-[#e8e0d0] bg-[#0d1b2a]">
      {/* Toast */}
      <div 
        className={`fixed top-20 left-1/2 -translate-x-1/2 bg-blue-accent text-white px-7 py-2.5 text-xs tracking-widest uppercase rounded z-[999] transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_4px_20px_rgba(30,136,229,0.4)] ${showToast ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'}`}
      >
        {toastMessage}
      </div>

      <Navbar />
      <main>
        <Hero />
        <QuotesSection showToast={displayToast} />
        <AboutSection />
        <ProductsSection />
        <ContactSection showToast={displayToast} />
      </main>
      <Footer />
    </div>
  );
}

