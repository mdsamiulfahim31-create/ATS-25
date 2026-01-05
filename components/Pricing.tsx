
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-lg mx-auto bg-slate-950 border-2 border-orange-600 rounded-3xl overflow-hidden relative shadow-2xl shadow-orange-900/20">
          <div className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] uppercase font-bold px-4 py-1 -rotate-0 rounded-bl-xl">
            সীমিত সময়ের জন্য
          </div>
          
          <div className="p-10 text-center border-b border-slate-800">
            <h3 className="text-xl font-bold text-slate-400 mb-2">অল-ইন-ওয়ান প্যাকেজ</h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl text-slate-500 line-through">৳২০০০</span>
              <span className="text-5xl font-black text-white">৳১১৯০</span>
            </div>
            <p className="text-orange-500 font-medium">মাত্র ১১৯০ টাকায় পূর্ণাঙ্গ বিজ্ঞাপন</p>
          </div>

          <div className="p-10">
            <ul className="space-y-4 mb-10">
              {[
                "নিখুঁত ও আকর্ষণীয় স্ক্রিপ্ট",
                "পেশাদার ভয়েসওভার (Voiceover)",
                "সিনেমাটিক ভিডিও এডিটিং",
                "কপিরাইট ফ্রি ব্যাকগ্রাউন্ড মিউজিক",
                "১ টি রিভিশন (Revision)",
                "দ্রুত ডেলিভারি (২৪-৪৮ ঘণ্টা)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/8801585517492" 
              target="_blank"
              className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-orange-600/40"
            >
              এখনই অর্ডার করুন
            </a>
            <p className="text-center text-xs text-slate-500 mt-4 italic">
              *অফারটি সীমিত সময়ের জন্য প্রযোজ্য
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
