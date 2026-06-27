import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Flame, ShieldCheck, Sparkles, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LoyaltyRewardsProps {
  points: number;
  addPoints: (p: number) => void;
}

export default function LoyaltyRewards({ points, addPoints }: LoyaltyRewardsProps) {
  const [sliderValue, setSliderValue] = useState<number>(400);
  const [phoneInput, setPhoneInput] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  // Rewards Milestones definition
  const milestones = [
    { points: 150, name: 'Hot Apple turnover', desc: 'Baked crisp turnovers stuffed with fresh sweet apples.', image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=300' },
    { points: 400, name: 'Golden Salted Fries', desc: 'A large basket of premium Idaho crisp golden-cut fries.', image: '/src/assets/images/golden_fries_1782584139309.jpg' },
    { points: 750, name: 'Royal Chicken Sandwich', desc: 'Premium double-dipped white meat breast crunchy sandwich.', image: '/src/assets/images/royal_chicken_1782584123806.jpg' },
    { points: 1000, name: 'Gourmet Double Whopper', desc: 'The signature double flame-broiled beef and cheese masterpiece.', image: '/src/assets/images/hero_whopper_1782584110528.jpg' }
  ];

  // Get current active milestone based on slider
  const getActiveMilestone = () => {
    // find the closest milestone that is <= sliderValue
    const reverseMilestones = [...milestones].reverse();
    const active = reverseMilestones.find((m) => sliderValue >= m.points);
    return active || milestones[0];
  };

  const activeReward = getActiveMilestone();

  const handlePhoneSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!phoneInput) return;
    setIsSubscribed(true);
    addPoints(200); // Give 200 points on club sign up!
  };

  return (
    <section id="loyalty-rewards" className="py-24 bg-bk-charcoal-light relative">
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-bk-orange/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bk-gold/15 border border-bk-gold/30 text-xs font-mono font-semibold text-bk-gold uppercase"
          >
            <Award className="w-3.5 h-3.5 text-bk-gold" />
            Crown Rewards Club
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-bk-cream">
            EARN CROWNS, EAT ROYALTY
          </h2>
          <p className="text-sm sm:text-base text-bk-cream/60 leading-relaxed">
            Every dollar spent logs points directly into your account. Drag our dynamic progress slider to see what rewards await your collection.
          </p>
        </div>

        {/* Main Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Interactive Point slider & Unlocks */}
          <div className="lg:col-span-7 space-y-8 text-left bg-bk-charcoal border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            
            {/* Crown point tally inside component */}
            <div className="flex items-center justify-between pb-6 border-b border-white/5">
              <div>
                <span className="text-[10px] text-bk-cream/40 font-mono block">YOUR PROFILE STATUS</span>
                <span className="text-lg font-display font-black text-bk-cream flex items-center gap-2">
                  <Flame className="w-5 h-5 text-bk-orange fill-bk-orange" />
                  Royal Ambassador
                </span>
              </div>
              <div className="px-4 py-2 bg-bk-brown/40 border border-bk-gold/30 rounded-xl font-mono text-sm text-bk-gold">
                {points} Crown points
              </div>
            </div>

            {/* INTERACTIVE MILESTONE SLIDER */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono font-bold">
                <span className="text-bk-cream/50 uppercase">SLIDE TO ACCUMULATE POINTS</span>
                <span className="text-bk-gold text-sm">{sliderValue} POINTS</span>
              </div>

              <div className="relative pt-2">
                {/* Horizontal slider input */}
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  className="w-full h-2.5 bg-bk-charcoal-light rounded-full appearance-none cursor-pointer accent-bk-orange outline-none border border-white/5"
                  style={{
                    background: `linear-gradient(to right, #D62300 0%, #D62300 ${(sliderValue / 1000) * 100}%, #EBDCCB ${(sliderValue / 1000) * 100}%, #EBDCCB 100%)`
                  }}
                />

                {/* Milestone Node Points ticks */}
                <div className="flex justify-between text-[10px] text-bk-cream/40 font-mono mt-3">
                  {milestones.map((node) => (
                    <button
                      key={node.points}
                      onClick={() => setSliderValue(node.points)}
                      className={`flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        sliderValue >= node.points ? 'text-bk-gold font-bold scale-105' : 'hover:text-bk-cream'
                      }`}
                    >
                      <div className={`w-2.5 h-2.5 rounded-full border ${sliderValue >= node.points ? 'bg-bk-gold border-bk-gold' : 'bg-bk-charcoal border-white/20'}`} />
                      <span>{node.points} pts</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* DYNAMIC REWARD UNLOCKED CARD */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReward.points}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="p-5 rounded-2xl bg-bk-charcoal-light border border-white/5 flex flex-col sm:flex-row gap-5 items-center relative overflow-hidden"
              >
                {/* Glowing border highlight */}
                <div className="absolute top-0 left-0 w-2 h-full bg-bk-gold" />

                <img
                  src={activeReward.image}
                  alt={activeReward.name}
                  className="w-24 h-24 object-cover rounded-xl border border-white/10"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1 text-center sm:text-left space-y-1">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-bk-gold/10 text-[9px] font-mono font-bold text-bk-gold uppercase">
                    Unlocked at {activeReward.points} Points
                  </div>
                  <h4 className="font-display font-black text-lg text-bk-cream mt-1">
                    {activeReward.name}
                  </h4>
                  <p className="text-xs text-bk-cream/50 leading-relaxed font-light">
                    {activeReward.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Crown Club Sign up newsletter block */}
            <div className="pt-6 border-t border-white/5 space-y-4">
              <div className="text-left">
                <span className="text-[10px] text-bk-cream/40 font-mono block">JOIN THE CROWN CLUB</span>
                <span className="text-sm font-bold text-bk-cream">
                  Claim an instant 200 points & free medium fries on sign up!
                </span>
              </div>

              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Welcome to the Club! We credited <strong className="text-bk-gold">200 points</strong> to your dashboard. Check your SMS inbox!</span>
                </motion.div>
              ) : (
                <form onSubmit={handlePhoneSubmit} className="flex gap-2.5">
                  <input
                    type="tel"
                    placeholder="Enter phone number (for SMS crown alerts)"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="flex-1 px-4 py-3.5 bg-bk-charcoal-light border border-white/10 rounded-xl text-xs text-bk-cream focus:outline-none focus:border-bk-orange placeholder-white/35"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 bg-bk-orange hover:bg-bk-orange-light text-bk-cream font-display font-bold text-xs tracking-wider uppercase rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>JOIN</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Block: Member Benefits & Mobile App graphic */}
          <div className="lg:col-span-5 space-y-8 text-left lg:pl-6">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-bk-orange uppercase font-bold">
                MEMBER PERKS
              </span>
              <h3 className="font-display font-black text-3xl text-bk-cream leading-tight">
                THE PRESTIGE OF <br />
                THE CROWN CLUB
              </h3>
              <p className="text-sm text-bk-cream/60 leading-relaxed font-light">
                Our members are priority. Dine like a king with premium features unlocked the second you establish your identity on our app.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Skip the Lobby Lines', desc: 'Order ahead on our web or mobile panel and collect your hot food immediately from the VIP counter.' },
                { title: 'Birthday Crown Treat', desc: 'A free signature burger of your choice on your birthday month. No strings attached.' },
                { title: 'Secret Menu Access', desc: 'Reveal hidden limited experimental burger trials before they are launched to the general public.' }
              ].map((benefit) => (
                <div key={benefit.title} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-bk-orange/10 border border-bk-orange/30 flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-bk-orange" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-bk-cream">{benefit.title}</h4>
                    <p className="text-xs text-bk-cream/50 leading-relaxed font-light">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#mobile-app-showcase"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-bk-gold hover:text-bk-orange transition-colors"
              >
                <Smartphone className="w-4 h-4" />
                <span>Download the Royal Mobile Wallet</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
