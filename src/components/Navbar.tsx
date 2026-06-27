import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, MapPin, Award, ArrowRight, Trash2, ShieldCheck, Flame } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, q: number) => void;
  checkout: () => void;
  openLocator: () => void;
  openCustomizer: (item: any) => void;
  points: number;
}

export default function Navbar({
  cart,
  removeFromCart,
  updateQuantity,
  checkout,
  openLocator,
  points
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checking_out' | 'success'>('cart');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);

  const handleCheckoutSimulate = () => {
    setCheckoutStep('checking_out');
    setTimeout(() => {
      setCheckoutStep('success');
      setTimeout(() => {
        checkout(); // clears cart and resets
        setCheckoutStep('cart');
        setCartOpen(false);
      }, 3500);
    }, 2500);
  };

  const navLinks = [
    { name: 'Menu', href: '#menu-experience' },
    { name: 'Deals', href: '#limited-campaign' },
    { name: 'Rewards', href: '#loyalty-rewards' },
    { name: 'Locations', href: '#restaurant-locator' },
    { name: 'Sustainability', href: '#sustainability' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, cubicBezier: [0.16, 1, 0.3, 1] }}
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bk-charcoal/90 backdrop-blur-md border-b border-white/10 py-4 shadow-xl'
            : 'bg-gradient-to-b from-bk-charcoal/80 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-bk-orange rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 border border-bk-orange-light/40">
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
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-bk-cream/80 hover:text-bk-orange transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-bk-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Loyalty Points display */}
            <a
              href="#loyalty-rewards"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-bk-brown/40 border border-bk-gold/30 hover:bg-bk-brown/80 transition-all duration-300 text-xs font-mono font-medium text-bk-gold"
            >
              <Award className="w-4 h-4 text-bk-gold" />
              <span>{points} Crown Points</span>
            </a>

            {/* Quick Find Store */}
            <button
              onClick={openLocator}
              className="p-2.5 rounded-full hover:bg-white/5 transition-colors text-bk-cream/80 hover:text-bk-orange cursor-pointer"
              title="Find Nearby Flagship"
              id="btn-nav-locator"
            >
              <MapPin className="w-5 h-5" />
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-white/5 transition-colors text-bk-cream/80 hover:text-bk-orange cursor-pointer"
              title="View Cart"
              id="btn-nav-cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-bk-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center font-mono border-2 border-bk-charcoal animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Order Now primary CTA */}
            <a
              href="#menu-experience"
              className="px-6 py-2.5 bg-bk-orange text-bk-cream font-display font-bold text-sm tracking-wide rounded-full hover:bg-bk-orange-light shadow-[0_4px_20px_rgba(242,97,34,0.3)] hover:shadow-[0_4px_25px_rgba(242,97,34,0.5)] transition-all duration-300 hover:-translate-y-0.5"
              id="btn-nav-order-now"
            >
              Order Online
            </a>
          </div>

          {/* Mobile hamburger & cart combo */}
          <div className="flex sm:hidden items-center gap-4">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2"
              id="btn-nav-cart-mobile"
            >
              <ShoppingBag className="w-6 h-6 text-bk-cream" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-bk-red text-white text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center font-mono">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-bk-cream hover:text-bk-orange transition-colors"
              id="btn-nav-menu-mobile"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            id="mobile-menu-drawer"
            className="fixed inset-0 top-[72px] bg-bk-charcoal z-40 px-6 py-8 flex flex-col justify-between sm:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold text-bk-cream hover:text-bk-orange transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-6">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-bk-brown/20 border border-bk-gold/20 text-bk-gold text-sm font-mono justify-center">
                  <Award className="w-4 h-4 text-bk-gold" />
                  <span>{points} Crown Jewels Points</span>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openLocator();
                  }}
                  className="flex items-center justify-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl text-bk-cream hover:bg-white/10"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Find Flagship Restaurant</span>
                </button>
              </div>
            </div>

            <div className="pb-10">
              <a
                href="#menu-experience"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 bg-bk-orange text-bk-cream rounded-full font-display font-black text-center tracking-wide shadow-lg"
              >
                <span>ORDER NOW</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* High-end Cart Drawer & Checkout Simulator */}
      <AnimatePresence>
        {cartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-xs"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              id="cart-drawer"
              className="fixed top-0 right-0 h-full w-full max-w-md bg-bk-charcoal border-l border-white/10 shadow-2xl z-50 flex flex-col justify-between overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-bk-charcoal-light/50">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-bk-orange" />
                  <h3 className="font-display font-bold text-lg text-bk-cream">
                    Your Order Bag
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/5 text-bk-cream/60">
                    {totalItems} items
                  </span>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-bk-cream/60 hover:text-bk-cream transition-colors"
                  id="btn-cart-close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {checkoutStep === 'cart' && (
                  <>
                    {cart.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center py-20">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                          <ShoppingBag className="w-8 h-8 text-bk-cream/30" />
                        </div>
                        <h4 className="font-display font-bold text-lg text-bk-cream">
                          Your bag is empty
                        </h4>
                        <p className="text-xs text-bk-cream/50 max-w-xs mt-1">
                          Browse our flame-grilled catalog and customize your perfect stack.
                        </p>
                        <a
                          href="#menu-experience"
                          onClick={() => setCartOpen(false)}
                          className="mt-6 px-6 py-2 bg-bk-orange/20 border border-bk-orange/40 text-bk-orange hover:bg-bk-orange hover:text-bk-cream text-xs font-bold rounded-full transition-all duration-300"
                        >
                          Explore Menu
                        </a>
                      </div>
                    ) : (
                      cart.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-xl bg-bk-charcoal-light border border-white/5 hover:border-white/10 transition-all flex gap-3"
                        >
                          <img
                            src={item.menuItem.image}
                            alt={item.menuItem.name}
                            className="w-16 h-16 rounded-lg object-cover bg-bk-brown/20 border border-white/10"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start">
                                <h4 className="font-display font-bold text-sm text-bk-cream leading-tight">
                                  {item.menuItem.name}
                                </h4>
                                <span className="font-mono text-sm font-semibold text-bk-cream">
                                  ${(item.menuItem.price * item.quantity).toFixed(2)}
                                </span>
                              </div>
                              <p className="text-[10px] text-bk-cream/50 font-mono mt-0.5">
                                {item.menuItem.calories * item.quantity} kcal
                              </p>

                              {/* Customizations display */}
                              {(item.customizations.lettuce !== 'normal' ||
                                item.customizations.tomato !== 'normal' ||
                                item.customizations.onion !== 'normal' ||
                                item.customizations.cheese !== 'normal' ||
                                item.customizations.mayo !== 'normal' ||
                                item.customizations.patty > 1) && (
                                <div className="mt-1.5 flex flex-wrap gap-1">
                                  {item.customizations.patty > 1 && (
                                    <span className="text-[9px] px-1.5 py-0.5 rounded-sm bg-bk-orange/10 text-bk-orange border border-bk-orange/20">
                                      {item.customizations.patty === 2 ? 'Double' : 'Triple'} Patty
                                    </span>
                                  )}
                                  {Object.entries(item.customizations).map(([key, value]) => {
                                    if (key === 'patty' || value === 'normal') return null;
                                    return (
                                      <span
                                        key={key}
                                        className="text-[9px] px-1.5 py-0.5 rounded-sm bg-white/5 text-bk-cream/60"
                                      >
                                        {value === 'none' ? 'No' : 'Extra'} {key}
                                      </span>
                                    );
                                  })}
                                </div>
                              )}
                            </div>

                            <div className="flex items-center justify-between mt-3">
                              {/* Quantity selector */}
                              <div className="flex items-center gap-2 bg-bk-charcoal rounded-md p-1 border border-white/5">
                                <button
                                  onClick={() =>
                                    item.quantity > 1
                                      ? updateQuantity(item.id, item.quantity - 1)
                                      : removeFromCart(item.id)
                                  }
                                  className="w-5 h-5 rounded-md hover:bg-white/5 flex items-center justify-center text-xs text-bk-cream/60 hover:text-bk-cream cursor-pointer"
                                >
                                  -
                                </button>
                                <span className="text-xs font-mono w-4 text-center text-bk-cream font-bold">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-5 h-5 rounded-md hover:bg-white/5 flex items-center justify-center text-xs text-bk-cream/60 hover:text-bk-cream cursor-pointer"
                                >
                                  +
                                </button>
                              </div>

                              {/* Remove button */}
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-1 rounded text-bk-red/60 hover:text-bk-red hover:bg-bk-red/10 transition-colors cursor-pointer"
                                title="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    )}
                  </>
                )}

                {checkoutStep === 'checking_out' && (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20 space-y-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border-4 border-bk-brown border-t-bk-orange animate-spin" />
                      <Flame className="w-6 h-6 text-bk-orange fill-bk-orange absolute inset-0 m-auto animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-lg text-bk-cream">
                        Grilling Your Order
                      </h4>
                      <p className="text-xs text-bk-cream/60 max-w-xs">
                        Connecting to our high-speed flagship terminal kitchen...
                      </p>
                    </div>
                  </div>
                )}

                {checkoutStep === 'success' && (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20 space-y-6">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center"
                    >
                      <ShieldCheck className="w-8 h-8 text-emerald-400" />
                    </motion.div>
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-xl text-emerald-400">
                        Order Transmitted!
                      </h4>
                      <p className="text-xs text-bk-cream/60 max-w-xs leading-relaxed">
                        Your Order ID is <span className="text-bk-gold font-mono font-bold">#BK-93822-NY</span>.
                        The flames are lit. Tracking is active in your mobile app dashboard!
                      </p>
                    </div>
                    <div className="text-xs font-mono p-4 rounded-xl bg-white/5 border border-white/10 w-full text-left space-y-1.5">
                      <div className="flex justify-between text-bk-cream/50">
                        <span>Preparation State:</span>
                        <span className="text-bk-orange font-bold flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 fill-bk-orange" /> SIZZLING
                        </span>
                      </div>
                      <div className="flex justify-between text-bk-cream/50">
                        <span>Delivery Partner:</span>
                        <span className="text-bk-cream">Royal Speed Courier</span>
                      </div>
                      <div className="flex justify-between text-bk-cream/50">
                        <span>Eta:</span>
                        <span className="text-bk-gold">14 - 18 minutes</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Checkout Actions */}
              {cart.length > 0 && checkoutStep === 'cart' && (
                <div className="p-6 border-t border-white/10 bg-bk-charcoal-light/70 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-bk-cream/60 font-mono">
                      <span>Bag Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-bk-cream/60 font-mono">
                      <span>Flagship Packaging</span>
                      <span className="text-bk-gold">FREE</span>
                    </div>
                    <div className="flex justify-between text-xs text-bk-cream/60 font-mono">
                      <span>Est. Taxes</span>
                      <span>${(subtotal * 0.08).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-white/5 my-2 pt-2 flex justify-between text-sm font-bold">
                      <span className="text-bk-cream font-display">Total Bill</span>
                      <span className="text-bk-orange font-mono text-base">
                        ${(subtotal * 1.08).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckoutSimulate}
                    className="w-full py-4 bg-bk-orange text-bk-cream rounded-full font-display font-black text-center text-sm tracking-wider shadow-lg hover:bg-bk-orange-light transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    id="btn-cart-checkout"
                  >
                    <span>PLACE FLAGSHIP ORDER</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-bk-cream/40 text-center flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-bk-gold" />
                    Double flame-grilled guarantee. Clean ingredients.
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
