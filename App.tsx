
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AIScriptGenerator from './components/AIScriptGenerator';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-orange-500/30 selection:text-orange-500">
      <Header />
      <main>
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">🚀 আপনার ব্র্যান্ডকে সবার সামনে তুলে ধরতে</h2>
                    <p className="text-lg md:text-xl text-orange-100 mb-8 opacity-90 italic">আমরা দেব আধুনিক ভিডিও বিজ্ঞাপনের পূর্ণাঙ্গ সমাধান!</p>
                    <a 
                      href="https://wa.me/8801585517492" 
                      className="inline-block bg-white text-orange-600 px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-black/20"
                    >
                        এখনই শুরু করুন
                    </a>
                </div>
            </div>
        </div>

        <Services />
        <AIScriptGenerator />
        <Pricing />
        
        <section className="py-20 text-center">
            <h3 className="text-2xl font-bold mb-8">আমাদের সাথে যুক্ত হোন</h3>
            <div className="flex justify-center gap-8">
                <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">১০০+</div>
                    <div className="text-slate-400 text-sm">সফল প্রজেক্ট</div>
                </div>
                <div className="w-px h-12 bg-slate-800"></div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">৯৯%</div>
                    <div className="text-slate-400 text-sm">হ্যাপি ক্লায়েন্ট</div>
                </div>
            </div>
        </section>

      </main>
      <Footer />

      {/* Persistent WhatsApp Floating Button */}
      <a 
        href="https://wa.me/8801585517492" 
        target="_blank" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        title="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap ml-0 group-hover:ml-2 font-bold">WhatsApp Order</span>
      </a>
    </div>
  );
};

export default App;
