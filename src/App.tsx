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
    <div className="relative font-sans text-neo-black bg-transparent">
      {/* Toast */}
      <div 
        className={`fixed top-24 left-1/2 -translate-x-1/2 bg-neo-green text-neo-black border-2 border-neo-black px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-none z-[999] transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-neo ${showToast ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'}`}
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

