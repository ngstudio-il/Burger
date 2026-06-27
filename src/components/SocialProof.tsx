import { motion } from 'motion/react';
import { Star, Flame, Award, Heart, ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function SocialProof() {
  const stats = [
    { value: '14.8M+', label: 'Flame Whoppers Grilled', desc: 'Precision-timed over 800° open coal beds.' },
    { value: '4.92 / 5', label: 'App Store Rating', desc: 'Across 120,000+ verified customer reviews.' },
    { value: '18 Mins', label: 'Average Flagship Delivery', desc: 'Delivered searing hot via royal couriers.' }
  ];

  const ugcGallery = [
    { id: 1, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=300', tag: '@burgerking_fans' },
    { id: 2, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=300', tag: '@grillmaster_nyc' },
    { id: 3, img: 'https://images.unsplash.com/photo-1627662236973-4f8259fa2441?auto=format&fit=crop&q=80&w=300', tag: '@luxury_eats' },
    { id: 4, img: 'https://images.unsplash.com/photo-1639024471283-2bc7b3c6a267?auto=format&fit=crop&q=80&w=300', tag: '@fastfood_critique' }
  ];

  return (
    <section id="social-proof" className="py-24 bg-bk-charcoal relative">
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-bk-gold/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* Statistics Board block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-bk-charcoal-light border border-white/5 text-center flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-3xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-bk-orange to-bk-gold block">
                  {stat.value}
                </span>
                <span className="text-sm font-display font-bold text-bk-cream block">
                  {stat.label}
                </span>
              </div>
              <p className="text-xs text-bk-cream/50 leading-relaxed font-light">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials block */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-bk-orange uppercase font-bold">
              VERIFIED TASTE REPORTS
            </span>
            <h3 className="font-display font-black text-3xl text-bk-cream">
              CRITICS & CONNOISSEURS AGREE
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {TESTIMONIALS.map((test, i) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-bk-charcoal-light border border-white/5 flex flex-col justify-between relative text-left group hover:border-bk-orange/10 transition-colors"
              >
                {/* Quote Icon watermark */}
                <Quote className="w-12 h-12 text-bk-orange/5 absolute top-6 right-6" />

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-bk-gold fill-bk-gold" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-xs sm:text-sm text-bk-cream/70 leading-relaxed font-light italic">
                    "{test.text}"
                  </p>
                </div>

                {/* Profile card details */}
                <div className="flex gap-3.5 items-center pt-6 mt-6 border-t border-white/5 shrink-0">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-bk-cream">{test.name}</h4>
                    <p className="text-[10px] text-bk-cream/40 font-mono mt-0.5">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* UGC / Community Gallery section */}
        <div className="space-y-10 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-bk-gold uppercase font-bold">
                COMMUNITY REVELRY
              </span>
              <h3 className="font-display font-black text-2xl text-bk-cream mt-1">
                #BURGERKINGROYALTY IN THE WILD
              </h3>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono font-bold text-bk-orange hover:text-bk-orange-light transition-colors flex items-center gap-1.5"
            >
              <Heart className="w-4 h-4 fill-bk-orange text-bk-orange" />
              <span>DINE IN PUBLIC AND GET FEATURED</span>
            </a>
          </div>

          {/* Grid UGC images */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {ugcGallery.map((ugc) => (
              <motion.div
                key={ugc.id}
                whileHover={{ y: -6 }}
                className="relative rounded-xl overflow-hidden aspect-square border border-white/5 shadow-md group cursor-pointer"
              >
                <img
                  src={ugc.img}
                  alt="UGC post"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="text-xs font-mono font-bold text-bk-gold">
                    {ugc.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
