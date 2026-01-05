
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center font-bold text-white">
                A
              </div>
              <span className="text-xl font-bold text-white uppercase tracking-wider">ATS 25</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              আমরা আপনার ব্যবসাকে আধুনিক ভিডিও বিজ্ঞাপনের মাধ্যমে ডিজিটাল দুনিয়ায় পরিচিত করতে প্রতিশ্রুতিবদ্ধ। মানসম্পন্ন কাজ ও সাশ্রয়ী মূল্যে আমাদের বিজ্ঞাপন তৈরি করে নিন।
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">যোগাযোগ</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400">
                <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                01585517492
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                <a href="https://wa.me/8801585517492" target="_blank" className="hover:text-white transition-colors">WhatsApp Chat</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9.003 9.003 0 008.312-5.518L13.064 12l8.248-3.482A9.003 9.003 0 0012 3v18z" />
                </svg>
                <a href="https://www.facebook.com/ats25media" target="_blank" className="hover:text-white transition-colors">Facebook Page</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">পেজ ইনফরমেশন</h4>
            <p className="text-slate-400 mb-2">FB Page: <span className="text-white">ats 25 media and marketing</span></p>
            <div className="mt-6 flex gap-4">
               <a href="#" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
               </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ATS 25 Media and Marketing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">প্রাইভেসি পলিসি</a>
            <a href="#" className="hover:text-white transition-colors">টার্মস অ্যান্ড কন্ডিশন</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
