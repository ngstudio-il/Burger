import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Star, ShoppingBag, Settings, Plus, Minus, Check, Scale, Eye, Info } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem, CartItem } from '../types';

interface MenuExperienceProps {
  addToCart: (item: MenuItem, custom: any) => void;
}

export default function MenuExperience({ addToCart }: MenuExperienceProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItemForCustomizer, setSelectedItemForCustomizer] = useState<MenuItem | null>(null);
  
  // Customizer local state
  const [pattyCount, setPattyCount] = useState<number>(1);
  const [cheese, setCheese] = useState<'none' | 'normal' | 'extra'>('normal');
  const [lettuce, setLettuce] = useState<'none' | 'normal' | 'extra'>('normal');
  const [tomato, setTomato] = useState<'none' | 'normal' | 'extra'>('normal');
  const [onion, setOnion] = useState<'none' | 'normal' | 'extra'>('normal');
  const [mayo, setMayo] = useState<'none' | 'normal' | 'extra'>('normal');

  const categories = [
    { id: 'all', name: 'Full Vault' },
    { id: 'burgers', name: 'Flame Burgers' },
    { id: 'limited', name: 'Crown Vault' },
    { id: 'chicken', name: 'Royal Poultry' },
    { id: 'fries', name: 'Sides & Salt' },
    { id: 'breakfast', name: 'Dawn Grills' },
    { id: 'desserts', name: 'Iced Sugar' },
    { id: 'drinks', name: 'Craft Sips' },
    { id: 'kids', name: 'Junior Kings' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const handleOpenCustomizer = (item: MenuItem) => {
    setSelectedItemForCustomizer(item);
    // Initialize customizer with standard values
    setPattyCount(item.id.includes('double') ? 2 : 1);
    setCheese('normal');
    setLettuce('normal');
    setTomato('normal');
    setOnion('normal');
    setMayo('normal');
  };

  const handleAddCustomizedToCart = () => {
    if (!selectedItemForCustomizer) return;
    const customizations = {
      lettuce,
      tomato,
      onion,
      cheese,
      mayo,
      patty: pattyCount
    };
    addToCart(selectedItemForCustomizer, customizations);
    setSelectedItemForCustomizer(null);
  };

  // Calculate customized price
  const getCustomizedPrice = () => {
    if (!selectedItemForCustomizer) return 0;
    let basePrice = selectedItemForCustomizer.price;
    // Add extra costs
    if (pattyCount > (selectedItemForCustomizer.id.includes('double') ? 2 : 1)) {
      basePrice += (pattyCount - (selectedItemForCustomizer.id.includes('double') ? 2 : 1)) * 2.50;
    }
    if (cheese === 'extra') basePrice += 0.80;
    if (lettuce === 'extra') basePrice += 0.40;
    if (tomato === 'extra') basePrice += 0.50;
    if (onion === 'extra') basePrice += 0.40;
    if (mayo === 'extra') basePrice += 0.30;
    return basePrice;
  };

  return (
    <section id="menu-experience" className="py-24 bg-bk-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bk-orange/10 border border-bk-orange/20 text-xs font-mono font-semibold text-bk-orange uppercase"
          >
            <Flame className="w-3.5 h-3.5 fill-bk-orange" />
            Flavour Crypt
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-bk-cream">
            THE DIGITAL FLAMES VAULT
          </h2>
          <p className="text-sm sm:text-base text-bk-cream/60 leading-relaxed">
            Every sandwich is made to order. Sift through our high-end flame grills, customize your ratios, and build a master culinary stack.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex justify-start md:justify-center overflow-x-auto pb-4 mb-12 scrollbar-none -mx-6 px-6">
          <div className="flex gap-2.5 p-1.5 rounded-full bg-bk-charcoal-light border border-white/5 whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-display font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-bk-orange text-bk-cream shadow-md'
                    : 'text-bk-cream/60 hover:text-bk-cream hover:bg-white/5'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid / Immersive Interactive layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, cubicBezier: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl bg-bk-charcoal-light border border-white/5 hover:border-bk-orange/20 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl"
              >
                {/* Visual Section & Hot Hover Effect */}
                <div className="relative aspect-video overflow-hidden bg-bk-brown/10 border-b border-white/5">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle shadows & overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bk-charcoal to-transparent opacity-60" />
                  
                  {/* Item tags */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-bk-charcoal/80 text-bk-gold border border-bk-gold/20 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Calories Counter indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 rounded bg-bk-charcoal/80 text-[10px] font-mono font-bold text-bk-cream/80 border border-white/10">
                    <Scale className="w-3.5 h-3.5 text-bk-orange" />
                    <span>{item.calories} kcal</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-display font-bold text-lg text-bk-cream leading-snug group-hover:text-bk-orange transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-mono text-lg font-black text-bk-gold">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-bk-cream/60 leading-relaxed font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Nutrients Highlights (Progress-like indicators) */}
                  <div className="py-3 border-y border-white/5 grid grid-cols-3 gap-2 font-mono text-center">
                    <div>
                      <p className="text-[10px] text-bk-cream/40 uppercase">Protein</p>
                      <p className="text-xs font-bold text-bk-cream mt-0.5">{item.nutrition.protein}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-bk-cream/40 uppercase">Carbs</p>
                      <p className="text-xs font-bold text-bk-cream mt-0.5">{item.nutrition.carbs}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-bk-cream/40 uppercase">Healthy Fat</p>
                      <p className="text-xs font-bold text-bk-cream mt-0.5">{item.nutrition.fat}</p>
                    </div>
                  </div>

                  {/* Hover Ingredient Disclosure */}
                  <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-2 pt-1.5">
                    <p className="text-[10px] font-mono tracking-wider text-bk-gold uppercase font-bold flex items-center gap-1">
                      <Info className="w-3.5 h-3.5" />
                      Built With
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {item.ingredients.map((ing) => (
                        <span key={ing} className="text-[9px] px-1.5 py-0.5 bg-white/5 border border-white/10 text-bk-cream/70 rounded">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Row */}
                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => addToCart(item, { lettuce: 'normal', tomato: 'normal', onion: 'normal', cheese: 'normal', mayo: 'normal', patty: item.id.includes('double') ? 2 : 1 })}
                      className="flex-1 py-3 bg-white/5 hover:bg-bk-orange text-bk-cream font-display font-bold text-xs tracking-wider uppercase rounded-xl border border-white/10 hover:border-bk-orange hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Quick Add</span>
                    </button>

                    {item.category === 'burgers' || item.category === 'limited' ? (
                      <button
                        onClick={() => handleOpenCustomizer(item)}
                        className="p-3 bg-white/5 hover:bg-bk-brown hover:text-bk-gold rounded-xl border border-white/10 transition-colors text-bk-cream/60 cursor-pointer"
                        title="Customize toppings stack"
                      >
                        <Settings className="w-4.5 h-4.5" />
                      </button>
                    ) : null}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 3D-Like Hamburger Customizer Overlay */}
        <AnimatePresence>
          {selectedItemForCustomizer && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItemForCustomizer(null)}
                className="fixed inset-0 bg-black/90 z-50 backdrop-blur-md"
              />

              {/* Customizer Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25 }}
                className="fixed inset-x-4 bottom-4 md:bottom-auto md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-4xl bg-bk-charcoal border border-white/10 rounded-3xl z-50 overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12"
              >
                {/* Left Side: Animated Stack Visualization */}
                <div className="md:col-span-5 bg-bk-charcoal-light p-8 flex flex-col justify-between border-r border-white/5 min-h-[300px] md:min-h-0">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest text-bk-gold uppercase font-bold">
                      Flagship Laboratory
                    </span>
                    <h3 className="font-display font-black text-2xl text-bk-cream">
                      {selectedItemForCustomizer.name}
                    </h3>
                    <p className="text-xs text-bk-cream/50 leading-relaxed font-light">
                      Stack, layer, and double up. Watch your calories, fat, and pricing update in real-time.
                    </p>
                  </div>

                  {/* High-fidelity Burger Stack Render Simulation */}
                  <div className="relative py-12 flex flex-col items-center justify-center">
                    {/* Top Bun */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-36 h-10 bg-gradient-to-b from-[#E59A54] to-[#C87B37] rounded-t-full border border-orange-200/20 shadow-lg relative flex items-center justify-center"
                    >
                      <span className="absolute top-2 w-1.5 h-0.5 bg-yellow-100 rounded-full opacity-60 rotate-12" />
                      <span className="absolute top-3 right-6 w-1 h-0.5 bg-yellow-100 rounded-full opacity-60 -rotate-12" />
                      <span className="absolute top-2.5 left-10 w-1 h-0.5 bg-yellow-100 rounded-full opacity-60 rotate-45" />
                      <span className="absolute bottom-1 text-[9px] font-mono font-bold text-bk-brown opacity-20 uppercase tracking-widest">
                        Brioche
                      </span>
                    </motion.div>

                    {/* Mayo / Sauce line */}
                    {mayo !== 'none' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`w-32 h-2 rounded-full mt-1 border ${
                          mayo === 'extra' ? 'bg-white h-3' : 'bg-white/80'
                        }`}
                      />
                    )}

                    {/* Lettuce */}
                    {lettuce !== 'none' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`w-36 bg-[#4CAF50] rounded-lg mt-1 relative overflow-hidden border border-emerald-400/20 ${
                          lettuce === 'extra' ? 'h-5' : 'h-3'
                        }`}
                      >
                        <div className="absolute inset-0 bg-[#388E3C] opacity-40 blur-xs" />
                      </motion.div>
                    )}

                    {/* Tomatoes */}
                    {tomato !== 'none' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex gap-1.5 mt-1"
                      >
                        <div className={`bg-[#F44336] rounded-full border border-red-400/30 ${tomato === 'extra' ? 'w-14 h-4' : 'w-12 h-3.5'}`} />
                        <div className={`bg-[#F44336] rounded-full border border-red-400/30 ${tomato === 'extra' ? 'w-14 h-4' : 'w-12 h-3.5'}`} />
                      </motion.div>
                    )}

                    {/* Onion rings */}
                    {onion !== 'none' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex gap-2 mt-1"
                      >
                        <div className={`border-2 border-fuchsia-200 rounded-full ${onion === 'extra' ? 'w-10 h-3' : 'w-8 h-2.5'}`} />
                        <div className={`border-2 border-fuchsia-200 rounded-full ${onion === 'extra' ? 'w-10 h-3' : 'w-8 h-2.5'}`} />
                      </motion.div>
                    )}

                    {/* Cheese layer */}
                    {cheese !== 'none' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`w-36 bg-[#FFC107] rounded-sm mt-1 skew-x-12 border border-yellow-400/20 ${
                          cheese === 'extra' ? 'h-3.5' : 'h-2'
                        }`}
                      />
                    )}

                    {/* Patties based on count */}
                    {[...Array(pattyCount)].map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0, y: 15 }}
                        animate={{ scale: 1, y: 0 }}
                        className="w-36 h-6 bg-gradient-to-b from-bk-brown to-[#30140A] rounded-md mt-1 border-b-2 border-black shadow-md flex items-center justify-center relative overflow-hidden"
                      >
                        {/* Grill marks */}
                        <div className="absolute inset-x-0 top-0 h-full flex justify-around opacity-30 pointer-events-none">
                          <div className="w-1.5 h-full bg-black/40 rotate-12" />
                          <div className="w-1.5 h-full bg-black/40 rotate-12" />
                          <div className="w-1.5 h-full bg-black/40 rotate-12" />
                          <div className="w-1.5 h-full bg-black/40 rotate-12" />
                        </div>
                      </motion.div>
                    ))}

                    {/* Bottom Bun */}
                    <div className="w-34 h-7 bg-gradient-to-t from-[#B86B2B] to-[#D58C4B] rounded-b-xl border border-orange-200/10 shadow-lg mt-1 flex items-center justify-center">
                      <span className="text-[8px] font-mono text-white/40 tracking-widest font-bold">BASE</span>
                    </div>
                  </div>

                  {/* Real-time stats display */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <div>
                      <span className="text-bk-cream/40 block">Total Heat</span>
                      <span className="text-bk-cream font-bold text-sm">
                        {selectedItemForCustomizer.calories + (pattyCount > 1 ? (pattyCount - 1) * 320 : 0)} kcal
                      </span>
                    </div>
                    <div>
                      <span className="text-bk-cream/40 block">Final Price</span>
                      <span className="text-bk-gold font-bold text-sm">
                        ${getCustomizedPrice().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Customize Control Panel */}
                <div className="md:col-span-7 p-8 space-y-6 overflow-y-auto max-h-[400px] md:max-h-[550px]">
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <h4 className="font-display font-bold text-base text-bk-cream">
                      Customization Deck
                    </h4>
                    <button
                      onClick={() => setSelectedItemForCustomizer(null)}
                      className="text-xs text-bk-cream/40 hover:text-bk-cream font-mono"
                    >
                      Reset Defaults
                    </button>
                  </div>

                  <div className="space-y-5">
                    {/* Patty Stack Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-bk-cream/80 font-bold">FLAME PATTY COUNT</span>
                        <span className="text-bk-orange font-bold">
                          {pattyCount === 1 ? 'Single' : pattyCount === 2 ? 'Double' : 'Triple Stack!'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={pattyCount === 1}
                          onClick={() => setPattyCount(Math.max(1, pattyCount - 1))}
                          className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-bk-cream disabled:opacity-30 disabled:hover:bg-white/5 cursor-pointer"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <div className="flex-1 h-2 bg-bk-charcoal-light rounded-full overflow-hidden border border-white/5 flex">
                          <div
                            className="bg-bk-orange transition-all duration-300"
                            style={{ width: `${(pattyCount / 3) * 100}%` }}
                          />
                        </div>
                        <button
                          disabled={pattyCount === 3}
                          onClick={() => setPattyCount(Math.min(3, pattyCount + 1))}
                          className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-bk-cream disabled:opacity-30 disabled:hover:bg-white/5 cursor-pointer"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Extra Cheese Toggles */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-bk-charcoal-light border border-white/5">
                      <div className="text-left">
                        <span className="text-xs font-bold text-bk-cream block">American Cheddar Cheese</span>
                        <span className="text-[10px] text-bk-cream/40 font-mono">+$0.80 for extra</span>
                      </div>
                      <div className="flex bg-bk-charcoal p-1 rounded-lg border border-white/5 text-[10px] font-mono font-bold">
                        {(['none', 'normal', 'extra'] as const).map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setCheese(opt)}
                            className={`px-3 py-1 rounded-md uppercase transition-all ${
                              cheese === opt ? 'bg-bk-orange text-white' : 'text-bk-cream/60 hover:text-bk-cream'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Fresh Lettuce Toggles */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-bk-charcoal-light border border-white/5">
                      <div className="text-left">
                        <span className="text-xs font-bold text-bk-cream block">Crisp Lettuce Shreds</span>
                        <span className="text-[10px] text-bk-cream/40 font-mono">+$0.40 for extra</span>
                      </div>
                      <div className="flex bg-bk-charcoal p-1 rounded-lg border border-white/5 text-[10px] font-mono font-bold">
                        {(['none', 'normal', 'extra'] as const).map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setLettuce(opt)}
                            className={`px-3 py-1 rounded-md uppercase transition-all ${
                              lettuce === opt ? 'bg-bk-orange text-white' : 'text-bk-cream/60 hover:text-bk-cream'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Vine Tomato Toggles */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-bk-charcoal-light border border-white/5">
                      <div className="text-left">
                        <span className="text-xs font-bold text-bk-cream block">Vine-Ripened Tomato</span>
                        <span className="text-[10px] text-bk-cream/40 font-mono">+$0.50 for extra</span>
                      </div>
                      <div className="flex bg-bk-charcoal p-1 rounded-lg border border-white/5 text-[10px] font-mono font-bold">
                        {(['none', 'normal', 'extra'] as const).map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setTomato(opt)}
                            className={`px-3 py-1 rounded-md uppercase transition-all ${
                              tomato === opt ? 'bg-bk-orange text-white' : 'text-bk-cream/60 hover:text-bk-cream'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* White Onion Toggles */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-bk-charcoal-light border border-white/5">
                      <div className="text-left">
                        <span className="text-xs font-bold text-bk-cream block">Fresh White Onion Rings</span>
                        <span className="text-[10px] text-bk-cream/40 font-mono">+$0.40 for extra</span>
                      </div>
                      <div className="flex bg-bk-charcoal p-1 rounded-lg border border-white/5 text-[10px] font-mono font-bold">
                        {(['none', 'normal', 'extra'] as const).map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setOnion(opt)}
                            className={`px-3 py-1 rounded-md uppercase transition-all ${
                              onion === opt ? 'bg-bk-orange text-white' : 'text-bk-cream/60 hover:text-bk-cream'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Creamy Mayo Toggles */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-bk-charcoal-light border border-white/5">
                      <div className="text-left">
                        <span className="text-xs font-bold text-bk-cream block">Premium Creamy Mayonnaise</span>
                        <span className="text-[10px] text-bk-cream/40 font-mono">+$0.30 for extra</span>
                      </div>
                      <div className="flex bg-bk-charcoal p-1 rounded-lg border border-white/5 text-[10px] font-mono font-bold">
                        {(['none', 'normal', 'extra'] as const).map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setMayo(opt)}
                            className={`px-3 py-1 rounded-md uppercase transition-all ${
                              mayo === opt ? 'bg-bk-orange text-white' : 'text-bk-cream/60 hover:text-bk-cream'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Add customized burger button */}
                  <div className="pt-6 border-t border-white/5 flex gap-4 items-center">
                    <div className="text-left">
                      <span className="text-[10px] text-bk-cream/40 font-mono block">FINAL PRICE</span>
                      <span className="text-xl font-mono font-black text-bk-gold">${getCustomizedPrice().toFixed(2)}</span>
                    </div>

                    <button
                      onClick={handleAddCustomizedToCart}
                      className="flex-1 py-4 bg-bk-orange hover:bg-bk-orange-light text-bk-cream rounded-xl font-display font-black text-sm tracking-widest uppercase shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Plus className="w-5 h-5" />
                      <span>ADD CUSTOMIZED STACK TO BAG</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
