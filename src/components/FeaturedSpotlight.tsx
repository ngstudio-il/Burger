import { motion } from 'motion/react';
import { Flame, Star, Award, ChevronRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { MenuItem } from '../types';

interface FeaturedSpotlightProps {
  addToCart: (item: any, customizations: any) => void;
}

export default function FeaturedSpotlight({ addToCart }: FeaturedSpotlightProps) {
  // Items to highlight
  const chickenItem: MenuItem = {
    id: 'royal-chicken',
    name: 'Royal Crispy Chicken Fillet',
    category: 'chicken',
    price: 8.29,
    description: 'A premium white meat chicken breast fillet, crispy fried with a savory blend of herbs and spices, topped with shredded lettuce, vine-ripened tomatoes, and creamy savory sauce on a potato bun.',
    calories: 610,
    image: '/src/assets/images/royal_chicken_1782584123806.jpg',
    ingredients: ['Crispy Fried Chicken Fillet', 'Shredded Lettuce', 'Savory Mayo', 'Vine-Ripened Tomatoes', 'Toasted Potato Bun'],
    tags: ['Crispy', 'Premium White Meat', 'Savory'],
    nutrition: { protein: '32g', carbs: '44g', fat: '33g' }
  };

  const friesItem: MenuItem = {
    id: 'golden-fries',
    name: 'Golden Salted French Fries',
    category: 'fries',
    price: 3.49,
    description: 'Premium cut, piping hot, golden-brown french fries. Crispy on the outside, fluffy on the inside, sprinkled with a touch of coarse sea salt crystals.',
    calories: 380,
    image: '/src/assets/images/golden_fries_1782584139309.jpg',
    ingredients: ['Premium Idaho Potatoes', '100% Vegetable Oil', 'Coarse Sea Salt'],
    tags: ['Crispy', 'Sides Essential', 'Vegan Friendly'],
    nutrition: { protein: '5g', carbs: '48g', fat: '17g' }
  };

  return (
    <section id="featured-spotlight" className="py-24 bg-bk-charcoal-light relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-bk-orange/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-bk-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-32">
        
        {/* Spotlight 1: Royal Crispy Chicken */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Large Image Frame (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative group"
          >
            {/* Visual Backlight */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-bk-orange to-bk-gold rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-500" />
            
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] aspect-4/3 bg-bk-charcoal">
              <img
                src={chickenItem.image}
                alt={chickenItem.name}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bk-charcoal via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Info Label */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 md:right-8 bg-bk-charcoal border border-bk-gold/40 rounded-2xl p-4 shadow-xl max-w-xs z-20"
            >
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-5 h-5 text-bk-gold" />
                <span className="text-xs font-display font-black text-bk-cream tracking-wide uppercase">
                  100% Whole Muscle
                </span>
              </div>
              <p className="text-[10px] text-bk-cream/60 font-mono leading-relaxed">
                Zero fillers. Crisp golden crumb with a hand-selected blend of southern peppercorns.
              </p>
            </motion.div>
          </motion.div>

          {/* Storytelling Content (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-bk-orange uppercase font-bold flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-bk-orange" />
                CHEF'S SIGNATURE CHICKEN
              </span>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-bk-cream leading-tight">
                THE SOUTHERN ROYAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bk-orange to-bk-gold">
                  CRISPY FILLET
                </span>
              </h3>
            </div>

            <p className="text-sm text-bk-cream/70 leading-relaxed font-light">
              We sourced premium white meat chicken breast and perfected a double-dip crunch profile. Glazed with subtle savory spices, capped with vine-ripe sweet tomato slices and hand-shredded fresh iceberg lettuce on a soft buttery potato brioche.
            </p>

            {/* Key details list */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2.5 text-bk-cream/80">
                <div className="w-1.5 h-1.5 rounded-full bg-bk-orange" />
                <span>Marinated in gourmet buttermilk, onion garlic and proprietary white pepper</span>
              </div>
              <div className="flex items-center gap-2.5 text-bk-cream/80">
                <div className="w-1.5 h-1.5 rounded-full bg-bk-orange" />
                <span>Hand-sorted lettuce shreds for maximum crisped mouthfeel</span>
              </div>
              <div className="flex items-center gap-2.5 text-bk-cream/80">
                <div className="w-1.5 h-1.5 rounded-full bg-bk-orange" />
                <span>Savory gourmet mayo layer on top and bottom potato bun lids</span>
              </div>
            </div>

            {/* Price & Action CTA */}
            <div className="pt-6 border-t border-white/5 flex items-center gap-6">
              <div>
                <span className="text-[10px] text-bk-cream/40 font-mono block">SPOTLIGHT PRICE</span>
                <span className="text-2xl font-mono font-black text-bk-gold">${chickenItem.price.toFixed(2)}</span>
              </div>

              <button
                onClick={() => addToCart(chickenItem, { lettuce: 'normal', tomato: 'normal', onion: 'normal', cheese: 'normal', mayo: 'normal', patty: 1 })}
                className="flex-1 py-4 bg-bk-orange hover:bg-bk-orange-light text-bk-cream font-display font-black text-xs tracking-wider uppercase rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4.5 h-4.5" />
                <span>BAG THIS CRUNCH SPECIAL</span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* Spotlight 2: Golden Fries */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Storytelling Content (Left on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 lg:order-1 order-2 space-y-6 text-left"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-bk-gold uppercase font-bold flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-bk-gold" />
                THE GOLD STANDARD SIDE
              </span>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-bk-cream leading-tight">
                GOLDEN-BROWN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bk-gold via-bk-orange-light to-bk-orange">
                  FRENCH FRIES
                </span>
              </h3>
            </div>

            <p className="text-sm text-bk-cream/70 leading-relaxed font-light">
              Premium Idaho Russet Burbank potatoes, precision sliced and double-fried in a custom vegetable blend. Crispy, golden outer shield with a steaming hot, fluffy baked-potato interior. Dusted in coarse-grain sea salt crystals the second they emerge from the grill basket.
            </p>

            {/* Key details list */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2.5 text-bk-cream/80">
                <div className="w-1.5 h-1.5 rounded-full bg-bk-gold" />
                <span>Hand-sorted and selected for length and moisture percentage</span>
              </div>
              <div className="flex items-center gap-2.5 text-bk-cream/80">
                <div className="w-1.5 h-1.5 rounded-full bg-bk-gold" />
                <span>Sealed with dynamic fry-basket heat retention</span>
              </div>
              <div className="flex items-center gap-2.5 text-bk-cream/80">
                <div className="w-1.5 h-1.5 rounded-full bg-bk-gold" />
                <span>Sprinkled with authentic pure sea salt crystals</span>
              </div>
            </div>

            {/* Price & Action CTA */}
            <div className="pt-6 border-t border-white/5 flex items-center gap-6">
              <div>
                <span className="text-[10px] text-bk-cream/40 font-mono block">SPOTLIGHT PRICE</span>
                <span className="text-2xl font-mono font-black text-bk-gold">${friesItem.price.toFixed(2)}</span>
              </div>

              <button
                onClick={() => addToCart(friesItem, { lettuce: 'normal', tomato: 'normal', onion: 'normal', cheese: 'normal', mayo: 'normal', patty: 1 })}
                className="flex-1 py-4 bg-white/5 hover:bg-bk-orange text-bk-cream border border-white/10 hover:border-bk-orange font-display font-black text-xs tracking-wider uppercase rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4.5 h-4.5" />
                <span>ADD GOLD TO BAG</span>
              </button>
            </div>
          </motion.div>

          {/* Large Image Frame (Right on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 lg:order-2 order-1 relative group"
          >
            {/* Visual Backlight */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-bk-gold to-bk-orange rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-500" />
            
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] aspect-4/3 bg-bk-charcoal">
              <img
                src={friesItem.image}
                alt={friesItem.name}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bk-charcoal via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Info Label */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 md:left-8 bg-bk-charcoal border border-bk-orange/40 rounded-2xl p-4 shadow-xl max-w-xs z-20"
            >
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-bk-orange" />
                <span className="text-xs font-display font-black text-bk-cream tracking-wide uppercase">
                  Zero Trans Fats
                </span>
              </div>
              <p className="text-[10px] text-bk-cream/60 font-mono leading-relaxed">
                Fried exclusively in 100% cholesterol-free premium oil. Always fresh, always burning.
              </p>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
