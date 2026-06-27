import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Flame, Send, Check, ShieldCheck, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const [emailInput, setEmailInput] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubscribed(true);
    setEmailInput('');
  };

  const footerLinks = [
    {
      title: 'Our Flame Menu',
      links: [
        { name: 'Double Whopper®', href: '#menu-experience' },
        { name: 'Smokehouse BBQ King', href: '#menu-experience' },
        { name: 'Royal Crispy Chicken', href: '#featured-spotlight' },
        { name: 'Black Truffle Swiss', href: '#limited-campaign' },
        { name: 'Golden Salted Fries', href: '#featured-spotlight' }
      ]
    },
    {
      title: 'Crown Members',
      links: [
        { name: 'Rewards Board', href: '#loyalty-rewards' },
        { name: 'Milestone Sliders', href: '#loyalty-rewards' },
        { name: 'Exclusive Secret Menu', href: '#loyalty-rewards' },
        { name: 'Grate Tracker App', href: '#mobile-app-showcase' }
      ]
    },
    {
      title: 'Ethical Sourcing',
      links: [
        { name: 'Grass-Fed Beef Pledge', href: '#sustainability' },
        { name: 'MSG-Free Vault Integrity', href: '#sustainability' },
        { name: 'FSC Compostable Packaging', href: '#sustainability' },
        { name: 'Carbon Offsets Map', href: '#sustainability' }
      ]
    },
    {
      title: 'Flagship Operations',
      links: [
        { name: 'Find Flagship Kitchen', href: '#restaurant-locator' },
        { name: 'Order Delivery Online', href: '#menu-experience' },
        { name: 'Franchising Prospects', href: '#' },
        { name: 'Culinary Careers', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-bk-charcoal border-t border-white/5 py-20 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-bk-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Top block: Branding and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-white/5">
          
          {/* Brand description block (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-bk-orange rounded-full flex items-center justify-center border border-bk-orange-light/20 shadow-lg">
                <Flame className="w-5 h-5 text-bk-cream fill-bk-cream" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-tight leading-none text-bk-cream">
                  BURGER<span className="text-bk-orange">KING</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-bk-gold uppercase font-bold">
                  Royal Flagship
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-bk-cream/50 leading-relaxed font-light max-w-sm">
              Establishing a premium, world-class standard for flame-grilled perfection. Every patty seared over 800°F live coals. Fully customized, ethically sourced, and delivered scorching hot.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com/burgerking' },
                { icon: <Facebook className="w-4 h-4" />, href: 'https://facebook.com/burgerking' },
                { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com/burgerking' },
                { icon: <Youtube className="w-4 h-4" />, href: 'https://youtube.com/burgerking' }
              ].map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-bk-orange text-bk-cream/60 hover:text-bk-cream flex items-center justify-center border border-white/10 hover:border-bk-orange transition-all"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Premium Newsletter Sign-up (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-bk-gold uppercase font-bold">
                WEEKLY SPECIAL EXPERIMENTAL DROPS
              </span>
              <h3 className="font-display font-black text-xl text-bk-cream">
                LOCK IN CULINARY SECRET ALERTS
              </h3>
            </div>
            
            <p className="text-xs text-bk-cream/50 leading-relaxed font-light max-w-lg">
              Subscribe to receive instant push alerts when experimental custom burger recipes are cataloged or secret menu vaults open in your metropolitan radius.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Subscribed! Check your email inbox for our premier welcome bundle details.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-lg">
                <input
                  type="email"
                  placeholder="Enter your email to secure access..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 px-4 py-3 bg-bk-charcoal-light border border-white/10 rounded-xl text-xs text-bk-cream focus:outline-none focus:border-bk-orange placeholder-white/20"
                  required
                />
                <button
                  type="submit"
                  className="px-5 bg-bk-orange hover:bg-bk-orange-light text-bk-cream font-display font-bold text-xs tracking-wider uppercase rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
                >
                  <span>SECURE ACCESS</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Middle block: Navigation Links columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {footerLinks.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="text-xs font-mono tracking-widest text-bk-gold uppercase font-bold">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-bk-cream/50 hover:text-bk-orange transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom block: Disclaimers and Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-bk-cream/30 text-center md:text-left">
          <div className="space-y-1">
            <p>TM & © 2026 Burger King Corporation. All Rights Reserved. </p>
            <p className="text-[10px]">Flame-grilled and Whopper are registered trademarks of Burger King Corporation.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-bk-orange transition-colors">Integrity Charter</a>
            <a href="#" className="hover:text-bk-orange transition-colors">Privacy Shield</a>
            <a href="#" className="hover:text-bk-orange transition-colors">SMS Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
