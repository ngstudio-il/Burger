import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Clock, Copy, Check, Star, ArrowRight, Compass } from 'lucide-react';

export default function LimitedTimeCampaign() {
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 14, minutes: 32, seconds: 59 });
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Dynamic ticking countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const campaignCodes = [
    { label: '50% Off Gourmet Burger', code: 'TRUFFLE50', desc: 'Unlock half off on our luxury Truffle selection.' },
    { label: 'Free Royal Truffle Side', code: 'TRUFFLEFRIES', desc: 'Complement your meal with a free salted fry.' }
  ];

  return (
    <section id="limited-campaign" className="py-24 bg-bk-charcoal relative overflow-hidden">
      {/* Immersive Fire & Coal background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] max-w-[900px] rounded-full bg-gradient-to-tr from-bk-red/10 to-bk-gold/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Banner header grid */}
        <div className="rounded-3xl bg-gradient-to-b from-bk-charcoal-light to-bk-charcoal border border-white/10 p-8 sm:p-12 xl:p-16 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Decorative glowing gradient boundary */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-bk-orange/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Left Block: Offer and countdown details */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              
              {/* Campaign tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bk-gold/10 border border-bk-gold/20 text-xs font-mono font-bold text-bk-gold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                LIMITED SEASONAL DROPS
              </div>

              <h2 className="text-4xl sm:text-5xl font-display font-black leading-tight text-bk-cream">
                THE BLACK TRUFFLE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bk-gold to-bk-orange-light">
                  SWISS ANGUS EDITION
                </span>
              </h2>

              <p className="text-sm sm:text-base text-bk-cream/70 leading-relaxed font-light">
                A masterpiece born from the world’s finest forests. Flown in fresh, our premium black truffle paste is folded into creamy whipped aioli, smothered over a flame-seared half-pound Angus patty and topped with caramelized onions.
              </p>
            </div>

            {/* COUNTDOWN TIMER */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-wider text-bk-cream/50 uppercase font-bold flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-bk-orange animate-pulse" />
                VAULT DOOR CLOSES IN:
              </span>
              
              <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-sm">
                {[
                  { label: 'Days', val: timeLeft.days },
                  { label: 'Hours', val: timeLeft.hours },
                  { label: 'Mins', val: timeLeft.minutes },
                  { label: 'Secs', val: timeLeft.seconds }
                ].map((unit) => (
                  <div key={unit.label} className="p-3 sm:p-4 rounded-2xl bg-bk-charcoal-light border border-white/5 flex flex-col items-center justify-center shadow-xs">
                    <span className="text-xl sm:text-3xl font-mono font-black text-bk-cream tracking-tight">
                      {String(unit.val).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] text-bk-cream/40 uppercase tracking-widest mt-1">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Campaign Codes container */}
            <div className="space-y-3 pt-4">
              <span className="text-[10px] font-mono tracking-wider text-bk-cream/40 uppercase font-bold">
                TAP TO LOCK IN CAMPAIGN DEALS:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {campaignCodes.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => handleCopyCode(item.code)}
                    className="p-4 rounded-xl bg-bk-charcoal hover:bg-bk-charcoal-light border border-white/5 hover:border-bk-gold/30 transition-all text-left flex items-start justify-between group cursor-pointer"
                  >
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-bk-cream group-hover:text-bk-orange transition-colors">
                        {item.label}
                      </p>
                      <p className="text-[9px] text-bk-cream/50 font-mono">
                        {item.desc}
                      </p>
                    </div>
                    <div className="p-1.5 rounded bg-white/5 text-bk-cream/60 group-hover:bg-bk-orange/20 group-hover:text-bk-orange transition-all">
                      {copiedCode === item.code ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block: Dramatic Visual Mock */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Background glow behind burger showcase */}
            <div className="absolute w-72 h-72 rounded-full bg-bk-gold/15 blur-[60px] pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group w-full max-w-[360px] aspect-3/4">
              <img
                src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=600"
                alt="The Truffle Angus"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bk-charcoal via-transparent to-transparent opacity-70" />

              {/* Float pricing info */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-bk-gold uppercase block font-bold">
                    Truffle Edition
                  </span>
                  <span className="text-xl font-display font-black text-bk-cream">
                    Black Truffle Angus
                  </span>
                </div>
                <div className="px-3 py-1 bg-bk-orange rounded-md text-xs font-mono font-bold text-bk-cream">
                  $12.49
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
