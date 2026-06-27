import { motion } from 'motion/react';
import { Smartphone, Sparkles, Star, Award, ShieldCheck, Flame } from 'lucide-react';

export default function MobileAppShowcase() {
  const highlights = [
    { title: 'Dynamic Flame-Tracker', desc: 'Watch your Whopper pass through real flame chambers with a visual temperature index.' },
    { title: 'Contactless Express Collect', desc: 'Secure geofenced VIP pick-ups. Tap the app as you park and walk in to hot food immediately.' },
    { title: 'Crown Point Bank', desc: 'A beautiful digital currency ledger with milestone tracking animations and gift vouchers.' }
  ];

  return (
    <section id="mobile-app-showcase" className="py-24 bg-bk-charcoal-light relative overflow-hidden">
      {/* Visual abstract glow in corner */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-bk-orange/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left column: App Copy & badging (7 cols) */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bk-orange/10 border border-bk-orange/20 text-xs font-mono font-bold text-bk-orange uppercase">
              <Smartphone className="w-3.5 h-3.5" />
              BK Flagship Mobile
            </div>

            <h2 className="text-4xl sm:text-5xl font-display font-black leading-tight text-bk-cream">
              THE KINGDOM IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bk-orange via-bk-orange-light to-bk-gold">
                YOUR POCKET
              </span>
            </h2>

            <p className="text-sm sm:text-base text-bk-cream/70 leading-relaxed font-light">
              Unlock the ultimate Burger King control panel. Built with fluid animations, instant payments, geofenced location sensors, and real-time custom ingredient configurations.
            </p>
          </div>

          {/* List highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-4 items-start"
              >
                <div className="p-2 rounded-lg bg-bk-orange/10 border border-bk-orange/30 text-bk-orange shrink-0 mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-bk-cream">{item.title}</h4>
                  <p className="text-xs text-bk-cream/50 leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download badges mockup (Custom CSS badges) */}
          <div className="flex flex-wrap gap-4 pt-4">
            {/* Apple App Store */}
            <a
              href="https://apple.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-bk-charcoal border border-white/15 hover:border-bk-orange hover:bg-bk-charcoal-light transition-all text-bk-cream cursor-pointer"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M18.71,19.5C17.88,20.74,17,21.95,15.66,22c-1.34,.05-1.77-.77-3.29-.77c-1.53,0-2,.75-3.27,.8c-1.31,.05-2.3-1.32-3.14-2.53C4.25,17,2.94,12.45,4.7,9.39c.87-1.52,2.43-2.48,4.12-2.51,1.28-.02,2.5,.87,3.29,.87c.78,0,2.26-1.07,3.81-.91,1.66,.17,2.96,.84,3.64,1.81-1.43,.86-2.4,2.2-2.38,4c.02,2.15,1.75,3.17,3.75,3.23c-1.09,2.65-2.27,5.32-4.22,3.63M15.97,4.17c.66-.81,1.11-1.93,.99-3.06-1,.04-2.22,.67-2.94,1.52-.64,.74-1.2,1.88-1.05,3,.15,.01,.3,.02,.45,.02,1.06,0,2.21-.67,2.55-1.48Z"/>
              </svg>
              <div className="text-left font-mono">
                <span className="text-[9px] text-bk-cream/40 block leading-none">Download on the</span>
                <span className="text-xs font-bold leading-none block mt-1">App Store</span>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-bk-charcoal border border-white/15 hover:border-bk-orange hover:bg-bk-charcoal-light transition-all text-bk-cream cursor-pointer"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M3,5.27V18.73L16.55,12L3,5.27M17.87,11.33L19.5,12.13L17.87,12.93L16.55,12L17.87,11.33M3,3.15L17.87,10.53L3,12V3.15M3,20.85V12L17.87,13.47L3,20.85Z"/>
              </svg>
              <div className="text-left font-mono">
                <span className="text-[9px] text-bk-cream/40 block leading-none">Get it on</span>
                <span className="text-xs font-bold leading-none block mt-1">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right column: Stylized Animated iPhone Mockup (5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Parallax circles in background */}
          <div className="absolute w-72 h-72 rounded-full border border-white/5 animate-pulse" />

          {/* Phone body mockup */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 20 }}
            className="w-[280px] h-[560px] rounded-[42px] border-8 border-[#502314] bg-bk-charcoal p-3.5 relative shadow-[0_25px_60px_rgba(80,35,20,0.15)] border-b-[10px] select-none"
          >
            {/* Phone Speaker Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#502314] rounded-b-2xl z-40 flex items-center justify-center">
              <div className="w-12 h-1 bg-bk-charcoal-light rounded-full mb-1" />
            </div>

            {/* Simulated App Screen */}
            <div className="w-full h-full rounded-[30px] bg-bk-charcoal overflow-hidden border border-white/5 relative flex flex-col justify-between p-4 pt-10">
              
              {/* Top Banner section */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-bk-orange flex items-center justify-center border border-white/10">
                      <Flame className="w-3.5 h-3.5 text-bk-cream fill-bk-cream" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-bk-cream/80">Crown Bank</span>
                  </div>
                  <span className="text-[10px] font-mono text-bk-gold px-2 py-0.5 rounded bg-bk-gold/10 border border-bk-gold/20">Ambassador</span>
                </div>

                {/* Points Card */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-bk-brown to-[#30140A] border border-bk-gold/20 text-left space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[8px] text-bk-cream/50 font-mono block">YOUR SAVINGS LEDGER</span>
                      <span className="text-xl font-display font-black text-bk-cream mt-0.5">840 Crowns</span>
                    </div>
                    <Award className="w-6 h-6 text-bk-gold" />
                  </div>
                  
                  {/* Progress milestones */}
                  <div className="space-y-1">
                    <div className="h-1.5 bg-bk-charcoal/80 rounded-full overflow-hidden border border-white/5">
                      <div className="h-full bg-bk-gold" style={{ width: '84%' }} />
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-bk-cream/40">
                      <span>750 Unlock</span>
                      <span>1000 Premium Max</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Section: Active Order Sizzler Tracking */}
              <div className="p-3 rounded-xl bg-bk-charcoal-light border border-white/5 space-y-2 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-mono text-bk-cream/40">ACTIVE GRATE ORDER</span>
                  <span className="text-[8px] font-mono text-bk-orange animate-pulse">SIZZLING</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <img
                    src="/src/assets/images/hero_whopper_1782584110528.jpg"
                    alt="Whopper tracking"
                    className="w-8 h-8 rounded-md object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 space-y-0.5">
                    <p className="text-[10px] font-bold text-bk-cream leading-tight">Gourmet Double Whopper</p>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-bk-orange" style={{ width: '65%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick-actions bar */}
              <div className="pt-3 border-t border-white/5 grid grid-cols-3 gap-2 text-center text-[8px] font-mono text-bk-cream/40">
                <div className="py-1 bg-white/5 rounded text-bk-gold font-bold">VIP CODE</div>
                <div className="py-1 bg-white/5 rounded">MENU</div>
                <div className="py-1 bg-white/5 rounded">LOCATIONS</div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
