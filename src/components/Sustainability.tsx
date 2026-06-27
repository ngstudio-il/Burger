import { motion } from 'motion/react';
import { Leaf, Award, Globe, Heart, ShieldCheck } from 'lucide-react';

export default function Sustainability() {
  const values = [
    {
      title: 'Pasture Sourced Beef',
      desc: 'We partner exclusively with multi-generational local family ranchers. 100% grass-fed and grain-finished beef with zero hormones, zero synthetic feeds.',
      icon: <Award className="w-5 h-5 text-bk-orange" />
    },
    {
      title: 'Uncompromised Cleanliness',
      desc: 'Our entire vault contains 100% clean ingredients. We have banned all synthetic dyes, artificial preservatives, high-fructose corn syrups, and MSG.',
      icon: <ShieldCheck className="w-5 h-5 text-bk-orange" />
    },
    {
      title: 'Compostable Packaging',
      desc: 'Wrapped in premium soy-ink unbleached papers. Our cardboard sleeves and packaging materials are FSC-certified compostable, driving a zero-waste loop.',
      icon: <Leaf className="w-5 h-5 text-bk-orange" />
    }
  ];

  return (
    <section id="sustainability" className="py-24 bg-bk-charcoal relative border-b border-white/5">
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-bk-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Storytelling Grid split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Block: Core Message Copy (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-bk-gold uppercase font-bold flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-bk-gold" />
                ENVIRONMENTAL & ETHICAL RESPONSIBILITY
              </span>
              <h2 className="text-4xl sm:text-5xl font-display font-black leading-tight text-bk-cream">
                ROOTED IN EARTH, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bk-gold via-bk-orange-light to-bk-orange">
                  FORGED ON OPEN FIRE
                </span>
              </h2>
            </div>

            <p className="text-sm text-bk-cream/70 leading-relaxed font-light">
              Great flavor shouldn't compromise the ecosystem. At Burger King, our flagship outposts represent a unified pledge: clean premium ingredients, sustainable farming practices, and ethical carbon-conscious packaging pathways.
            </p>

            {/* Values stack */}
            <div className="space-y-6 pt-6">
              {values.map((val) => (
                <div key={val.title} className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-bk-orange/10 border border-bk-orange/30 shrink-0 mt-1">
                    {val.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-bk-cream">{val.title}</h4>
                    <p className="text-xs text-bk-cream/50 leading-relaxed font-light">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Elegant High-end Graphic Panel (6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative group"
          >
            {/* Visual Backlight */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/20 to-bk-gold/20 rounded-3xl blur-md opacity-35" />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-bk-charcoal-light aspect-4/3 flex flex-col justify-end p-8 sm:p-12">
              <img
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=600"
                alt="Farm fresh ingredients sourcing"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bk-charcoal via-bk-charcoal/80 to-transparent" />

              <div className="relative z-10 space-y-4 text-left">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-display font-black text-xl text-bk-cream">
                  OUR TARGET: 100% RENEWABLE
                </h3>
                <p className="text-xs text-bk-cream/60 leading-relaxed font-light max-w-md">
                  We are actively tracking a carbon reduction roadmap. Across our premium flagship kitchens, we target 100% recycled unbleached fiber packaging bags and compostable liner materials by 2028.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
