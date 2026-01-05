
import React from 'react';

const services = [
  {
    title: "নিখুঁত স্ক্রিপ্ট ✍️",
    desc: "আপনার মেসেজটি মানুষের হৃদয়ে পৌঁছাতে আমরা লিখি আকর্ষণীয় ও সেলস-ফোকাসড স্ক্রিপ্ট।",
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    title: "শক্তিশালী ভয়েসওভার 🎙️",
    desc: "প্রফেশনাল ভয়েস আর্টিস্টের মাধ্যমে আপনার বিজ্ঞাপনে প্রাণ সঞ্চার করি আমরা।",
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    title: "দৃষ্টিনন্দন এডিটিং 🎬",
    desc: "আধুনিক ট্রানজিশন ও ভিজ্যুয়াল ইফেক্ট সহ ভিডিওটি হবে অত্যন্ত চমৎকার ও পেশাদার।",
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">আমাদের বিশেষত্ব</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="p-8 bg-slate-950 border border-slate-800 rounded-2xl hover:border-orange-500/50 transition-colors group">
              <div className="mb-6 bg-slate-900 w-16 h-16 flex items-center justify-center rounded-xl group-hover:bg-orange-600/10 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
