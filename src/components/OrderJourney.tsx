import { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Settings, ShieldCheck, Flame, Bike, Check } from 'lucide-react';

export default function OrderJourney() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      title: 'Choose',
      desc: 'Browse our high-end Flame Vault catalog and select your premium flame-grilled burger base.',
      icon: <Compass className="w-6 h-6" />,
      tag: 'Step 01'
    },
    {
      id: 1,
      title: 'Customize',
      desc: 'Stack up to 3 patties, melt extra cheddar, and customize precise ingredient ratios in real-time.',
      icon: <Settings className="w-6 h-6" />,
      tag: 'Step 02'
    },
    {
      id: 2,
      title: 'Pay Seamlessly',
      desc: 'Lock in your order with secure, zero-friction high-speed express digital checkout pipelines.',
      icon: <ShieldCheck className="w-6 h-6" />,
      tag: 'Step 03'
    },
    {
      id: 3,
      title: 'Track Live',
      desc: 'Watch our kitchen terminal light up the flames. Real-time grilling status sent to your dashboard.',
      icon: <Flame className="w-6 h-6" />,
      tag: 'Step 04'
    },
    {
      id: 4,
      title: 'Receive Hot',
      desc: 'Collected by our Royal Speed Couriers or retrieved instantly from our VIP lobby counter.',
      icon: <Bike className="w-6 h-6" />,
      tag: 'Step 05'
    }
  ];

  return (
    <section id="order-journey" className="py-24 bg-bk-charcoal relative overflow-hidden border-b border-white/5">
      {/* Background blur ring */}
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-bk-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-bk-orange uppercase font-bold">
            FULFILLMENT METRICS
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-bk-cream">
            THE INSTANT SATISFACTION ENGINE
          </h2>
          <p className="text-sm sm:text-base text-bk-cream/60 leading-relaxed">
            Five simple steps between your craving and a piping hot, charcoal-scented bite. Follow our seamless express pipeline.
          </p>
        </div>

        {/* Desktop Step Stepper (Horizontal) */}
        <div className="hidden lg:grid grid-cols-5 gap-6 relative">
          
          {/* Continuous connection line */}
          <div className="absolute top-14 left-10 right-10 h-0.5 bg-white/10 z-0">
            <div
              className="h-full bg-bk-orange transition-all duration-500"
              style={{ width: `${(activeStep / 4) * 100}%` }}
            />
          </div>

          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className="relative z-10 flex flex-col items-center text-center cursor-pointer group"
            >
              {/* Animated Node Circle */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  activeStep >= step.id
                    ? 'bg-bk-orange border-bk-orange text-bk-cream shadow-[0_0_20px_rgba(242,97,34,0.4)]'
                    : 'bg-bk-charcoal border-white/10 text-bk-cream/40 group-hover:border-white/30'
                }`}
              >
                {activeStep > step.id ? <Check className="w-6 h-6" /> : step.icon}
              </motion.div>

              {/* Step Title & Details */}
              <div className="mt-6 space-y-2">
                <span className="text-[9px] font-mono font-bold tracking-widest text-bk-gold uppercase block">
                  {step.tag}
                </span>
                <h4 className={`font-display font-bold text-base transition-colors duration-300 ${activeStep === step.id ? 'text-bk-orange' : 'text-bk-cream'}`}>
                  {step.title}
                </h4>
                <p className="text-xs text-bk-cream/50 leading-relaxed font-light max-w-[180px] mx-auto">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Stepper (Vertical Card layout) */}
        <div className="lg:hidden flex flex-col gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-6 rounded-2xl border transition-all duration-300 text-left flex gap-5 items-start ${
                activeStep === step.id
                  ? 'bg-bk-charcoal-light border-bk-orange/40 shadow-xl'
                  : 'bg-bk-charcoal-light/40 border-white/5 opacity-70'
              }`}
            >
              <div className={`p-3 rounded-xl border shrink-0 ${activeStep === step.id ? 'bg-bk-orange/10 border-bk-orange text-bk-orange' : 'bg-white/5 border-white/10 text-bk-cream/40'}`}>
                {step.icon}
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-mono font-bold text-bk-gold uppercase tracking-wider block">
                  {step.tag}
                </span>
                <h4 className="font-display font-bold text-sm text-bk-cream">
                  {step.title}
                </h4>
                <p className="text-xs text-bk-cream/50 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
