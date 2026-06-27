import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Flame, ArrowRight, Play, Award, ShieldAlert } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse positions for parallax depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for buttery smooth motion
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / (width / 2);
      const y = (e.clientY - top - height / 2) / (height / 2);

      // Scale down movement slightly to keep it subtle and elegant
      mouseX.set(x * 35);
      mouseY.set(y * 35);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      id="hero-section"
      className="relative min-h-screen bg-bk-charcoal flex items-center justify-center overflow-hidden pt-20 px-6"
    >
      {/* Cinematic Fire Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-r from-bk-orange/15 via-bk-red/10 to-transparent blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full bg-bk-orange-light/10 blur-[90px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#F5EBDF_90%)] z-10 pointer-events-none" />
      <div 
         className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
         style={{
           backgroundImage: `radial-gradient(rgba(80,35,20,0.15) 1px, transparent 1px)`,
           backgroundSize: '24px 24px',
         }}
      />

      {/* Floating Sparkles / Embers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-bk-orange"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              opacity: Math.random() * 0.7 + 0.3,
              scale: Math.random() * 0.8 + 0.4
            }}
            animate={{
              y: -100,
              x: `calc(x + ${Math.sin(i) * 60}px)`,
              opacity: [0, 0.8, 0.8, 0]
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        {/* Hero Copy (Left side) */}
        <div className="lg:col-span-6 space-y-8 text-left max-w-2xl lg:max-w-none">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bk-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-bk-orange"></span>
            </span>
            <span className="text-xs font-mono font-bold text-bk-gold tracking-wider uppercase flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-bk-orange text-bk-orange" />
              100% Flame-Grilled Excellence Since 1954
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl xl:text-7.5xl font-display font-black leading-tight text-bk-cream tracking-tight"
            >
              CRAFTED BY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bk-orange via-bk-orange-light to-bk-gold">
                FIRE & FURY
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-bk-cream/70 leading-relaxed font-sans font-light"
            >
              This is not fast food. This is an artisanal masterpiece forged on real 800° open flames. Designed for burger purists who demand premium beef, toasted brioche, and hand-sliced toppings.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#menu-experience"
              className="px-8 py-4 bg-bk-orange text-bk-cream font-display font-black text-base tracking-wider rounded-full hover:bg-bk-orange-light shadow-[0_4px_30px_rgba(242,97,34,0.4)] hover:shadow-[0_4px_40px_rgba(242,97,34,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <span>ORDER ONLINE NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#menu-experience"
              className="px-8 py-4 bg-white/5 border border-white/10 text-bk-cream hover:bg-white/10 font-display font-bold text-base tracking-wider rounded-full hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Menu</span>
            </a>
          </motion.div>

          {/* Key Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-6 border-t border-white/5 grid grid-cols-3 gap-6 font-mono text-left"
          >
            <div>
              <p className="text-xl sm:text-2xl font-black text-bk-orange font-display">800°F</p>
              <p className="text-[11px] text-bk-cream/50 tracking-wider uppercase mt-1">Grate Temperature</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-bk-gold font-display">100%</p>
              <p className="text-[11px] text-bk-cream/50 tracking-wider uppercase mt-1">Angus & Beef</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-bk-cream font-display">Fresh</p>
              <p className="text-[11px] text-bk-cream/50 tracking-wider uppercase mt-1">Toppings Daily</p>
            </div>
          </motion.div>
        </div>

        {/* Cinematic Parallax Burger Canvas (Right side) */}
        <div className="lg:col-span-6 relative flex items-center justify-center h-[400px] sm:h-[500px] xl:h-[600px] select-none">
          {/* Base Flame Glow behind Burger */}
          <motion.div
            style={{ x: springX, y: springY }}
            className="absolute w-[300px] h-[300px] rounded-full bg-bk-orange/15 blur-[60px] pointer-events-none mix-blend-screen"
          />

          {/* Smoke Rings Overlay */}
          <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 rounded-full border border-white/5 bg-white/[0.01] blur-md"
                initial={{ y: 150, opacity: 0, scale: 0.6 }}
                animate={{
                  y: -250,
                  opacity: [0, 0.4, 0.4, 0],
                  scale: [0.6, 1.4, 2.0, 2.5],
                  rotate: [0, 45, 90, 180]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: 'easeOut'
                }}
              />
            ))}
          </div>

          {/* PARALLAX FLOATING INGREDIENTS */}
          
          {/* 1. Deepest Layer: Shadows and backlights */}

          {/* 2. Main Burger Stack Layer */}
          <motion.div
            style={{
              x: springX,
              y: springY,
              rotate: useSpring(mouseX, { stiffness: 100, damping: 40 }),
            }}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 w-full max-w-[460px] cursor-grab active:cursor-grabbing"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/src/assets/images/hero_whopper_1782584110528.jpg"
              alt="The Double Flame Whopper"
              className="w-full h-auto object-contain rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/10 relative z-10"
              referrerPolicy="no-referrer"
            />

            {/* Glowing Ring Accent on the Burger */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-bk-orange/20 to-transparent pointer-events-none mix-blend-screen" />
          </motion.div>

          {/* 3. Foremost Layer: Floating Fresh Slices (Lettuce, Tomato, Onion) reacting with high multiplier */}
          
          {/* Floating Fresh Lettuce leaf (top left) */}
          <motion.div
            style={{
              x: useSpring(mouseX, { stiffness: 40, damping: 10 }),
              y: useSpring(mouseY, { stiffness: 40, damping: 10 }),
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-8 left-4 z-30 w-20 h-20 pointer-events-none opacity-80"
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]">
              <path d="M10 50C10 20 40 10 50 10C65 10 85 25 85 45C85 65 70 85 50 85C30 85 10 70 10 50Z" fill="#2E7D32" fillOpacity="0.85"/>
              <path d="M15 50C25 40 45 42 50 20M50 20C55 35 75 30 80 45M50 20V85" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.div>

          {/* Floating Tomato Slice (bottom right) */}
          <motion.div
            style={{
              x: useSpring(mouseX, { stiffness: 30, damping: 12 }),
              y: useSpring(mouseY, { stiffness: 30, damping: 12 }),
            }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-12 right-2 z-30 w-24 h-24 pointer-events-none opacity-85"
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_12px_20px_rgba(0,0,0,0.6)]">
              <circle cx="50" cy="50" r="40" fill="#D84315" fillOpacity="0.9"/>
              <circle cx="50" cy="50" r="32" stroke="#FF5722" strokeWidth="4"/>
              {/* Seeds sections */}
              <circle cx="38" cy="38" r="5" fill="#FFC107" fillOpacity="0.8"/>
              <circle cx="62" cy="38" r="5" fill="#FFC107" fillOpacity="0.8"/>
              <circle cx="38" cy="62" r="5" fill="#FFC107" fillOpacity="0.8"/>
              <circle cx="62" cy="62" r="5" fill="#FFC107" fillOpacity="0.8"/>
            </svg>
          </motion.div>

          {/* Floating Red Onion slice (top right) */}
          <motion.div
            style={{
              x: useSpring(mouseX, { stiffness: 50, damping: 14 }),
              y: useSpring(mouseY, { stiffness: 50, damping: 14 }),
            }}
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-16 right-6 z-30 w-16 h-16 pointer-events-none opacity-75"
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]">
              <circle cx="50" cy="50" r="35" stroke="#880E4F" strokeWidth="8" fill="transparent"/>
              <circle cx="50" cy="50" r="28" stroke="#E91E63" strokeWidth="4" fill="transparent"/>
              <circle cx="50" cy="50" r="22" stroke="#F8BBD0" strokeWidth="2" fill="transparent"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
