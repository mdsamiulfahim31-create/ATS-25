
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-orange-500 to-red-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/20">
            A
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            ATS 25
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-orange-500 transition-colors">সার্ভিস</a>
          <a href="#pricing" className="hover:text-orange-500 transition-colors">মূল্য</a>
          <a href="#ai-tool" className="hover:text-orange-500 transition-colors">এআই স্ক্রিপ্ট</a>
          <a 
            href="https://wa.me/8801585517492" 
            target="_blank" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full transition-all hover:scale-105 active:scale-95"
          >
            অর্ডার করুন
          </a>
        </nav>
        <div className="md:hidden">
            <a href="https://wa.me/8801585517492" className="bg-orange-600 text-xs px-4 py-2 rounded-full font-bold">অর্ডার</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
