
import React, { useState } from 'react';
import { generateAdScript } from '../services/gemini';

const AIScriptGenerator: React.FC = () => {
  const [product, setProduct] = useState('');
  const [audience, setAudience] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!product || !audience) return;
    setLoading(true);
    try {
      const script = await generateAdScript(product, audience);
      setResult(script || 'দুঃখিত, কোনো স্ক্রিপ্ট তৈরি করা সম্ভব হয়নি।');
    } catch (error) {
      console.error(error);
      setResult('একটি ত্রুটি ঘটেছে। আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের AI টুল দিয়ে <span className="text-orange-500">ফ্রি স্ক্রিপ্ট</span> আইডিয়া নিন</h2>
          <p className="text-slate-400">আপনার পণ্য সম্পর্কে লিখুন, আমাদের Gemini AI আপনাকে একটি প্রাথমিক স্ক্রিপ্ট তৈরি করে দেবে।</p>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">পণ্যের নাম বা ধরন</label>
              <input 
                type="text" 
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="যেমন: স্মার্ট ওয়াচ, ফ্যাশন ব্র্যান্ড"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">কাদের জন্য বিজ্ঞাপন? (Target Audience)</label>
              <input 
                type="text" 
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="যেমন: তরুণ প্রজন্ম, কর্মজীবী নারী"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
              />
            </div>
          </div>
          
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            )}
            স্ক্রিপ্ট তৈরি করুন
          </button>

          {result && (
            <div className="mt-8 p-6 bg-slate-950 border border-orange-500/30 rounded-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">AI Generated Script</span>
                <button 
                  onClick={() => navigator.clipboard.writeText(result)}
                  className="text-xs text-slate-400 hover:text-white"
                >কপি করুন</button>
              </div>
              <div className="whitespace-pre-wrap text-slate-200 leading-relaxed font-mono text-sm max-h-96 overflow-y-auto pr-2">
                {result}
              </div>
              <div className="mt-6 p-4 bg-orange-600/10 border border-orange-600/20 rounded-lg text-sm text-orange-400">
                পেশাদার এডিটিং ও ভয়েসওভার পেতে আমাদের ১১৯০ টাকার প্যাকেজটি বেছে নিন!
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIScriptGenerator;
