import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Search, Phone, Clock, ShieldCheck, Car, Bike, Wifi, Sparkles, Navigation } from 'lucide-react';
import { LOCATIONS } from '../data';
import { LocationStore } from '../types';

interface RestaurantLocatorProps {
  onSelectStore: (store: LocationStore) => void;
}

export default function RestaurantLocator({ onSelectStore }: RestaurantLocatorProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStore, setSelectedStore] = useState<LocationStore>(LOCATIONS[0]);

  // Filter locations based on query
  const filteredStores = LOCATIONS.filter(
    (store) =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectStore = (store: LocationStore) => {
    setSelectedStore(store);
    onSelectStore(store);
  };

  return (
    <section id="restaurant-locator" className="py-24 bg-bk-charcoal-light relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-bk-gold uppercase font-bold">
            NEIGHBOURHOOD OUTPOSTS
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-bk-cream">
            FIND A FLAGSHIP KITCHEN
          </h2>
          <p className="text-sm sm:text-base text-bk-cream/60 leading-relaxed font-light">
            We operate highly-engineered luxury flagship kitchens across the metropolis. Search below to connect with your nearest glowing embers.
          </p>
        </div>

        {/* Locator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Search & Store List (7 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6 bg-bk-charcoal border border-white/5 rounded-3xl p-6 sm:p-8 shadow-xl max-h-[600px] overflow-hidden">
            
            {/* Search Input Bar */}
            <div className="relative shrink-0">
              <Search className="w-4 h-4 text-bk-cream/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by street or borough (e.g. Fifth Ave, Brooklyn)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-bk-charcoal-light border border-white/10 rounded-xl text-xs text-bk-cream focus:outline-none focus:border-bk-orange placeholder-white/25"
              />
            </div>

            {/* Store Cards Scroll list */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin">
              {filteredStores.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <p className="text-xs text-bk-cream/40 font-mono">No matching flagship outposts found.</p>
                </div>
              ) : (
                filteredStores.map((store) => (
                  <button
                    key={store.id}
                    onClick={() => handleSelectStore(store)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex gap-4 cursor-pointer relative ${
                      selectedStore.id === store.id
                        ? 'bg-bk-charcoal-light border-bk-gold shadow-lg'
                        : 'bg-bk-charcoal-light/40 border-white/5 hover:border-white/15'
                    }`}
                  >
                    {/* Visual active border marker */}
                    {selectedStore.id === store.id && (
                      <div className="absolute top-0 bottom-0 left-0 w-1 bg-bk-gold rounded-l-xl" />
                    )}

                    <div className="p-2.5 rounded-lg bg-white/5 text-bk-gold shrink-0 h-10 w-10 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>

                    <div className="space-y-2 flex-1">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-display font-black text-sm text-bk-cream leading-tight">
                            {store.name}
                          </h4>
                          <span className="font-mono text-[10px] text-bk-gold font-bold shrink-0">
                            {store.distance}
                          </span>
                        </div>
                        <p className="text-xs text-bk-cream/50 mt-0.5 line-clamp-1">
                          {store.address}
                        </p>
                      </div>

                      {/* Store Services Quick Icons */}
                      <div className="flex gap-2 text-bk-cream/40">
                        {store.services.driveThru && <Car className="w-3.5 h-3.5 text-bk-orange" title="Drive-Thru Enabled" />}
                        {store.services.delivery && <Bike className="w-3.5 h-3.5 text-bk-orange" title="Express Delivery" />}
                        {store.services.wifi && <Wifi className="w-3.5 h-3.5 text-bk-cream/60" title="Free VIP Wi-Fi" />}
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>

          </div>

          {/* Right Block: Interactive Stylized Map Preview (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-bk-charcoal flex flex-col justify-between min-h-[400px]">
            
            {/* Interactive map graphics (SVG map grid) */}
            <div className="absolute inset-0 z-0 opacity-40 select-none bg-[radial-gradient(#502314_1.5px,transparent_1.5px)] [background-size:20px_20px]">
              {/* Styled map ring overlays */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-bk-gold/5 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-bk-orange/5" />
              
              {/* Grid abstract vector streets */}
              <svg className="absolute inset-0 w-full h-full text-[#502314]/10" xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="0%" x2="10%" y2="100%" stroke="currentColor" strokeWidth="2" />
                <line x1="45%" y1="0%" x2="45%" y2="100%" stroke="currentColor" strokeWidth="2" />
                <line x1="85%" y1="0%" x2="85%" y2="100%" stroke="currentColor" strokeWidth="2" />
                <line x1="0%" y1="30%" x2="100%" y2="30%" stroke="currentColor" strokeWidth="2" />
                <line x1="0%" y1="75%" x2="100%" y2="75%" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            {/* Live glowing pinpoint markers */}
            <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedStore.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-bk-orange/30 rounded-full blur-md animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="w-12 h-12 rounded-full bg-bk-orange border-2 border-bk-gold flex items-center justify-center shadow-2xl">
                      <Navigation className="w-5 h-5 text-bk-cream rotate-45 fill-bk-cream" />
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-bk-charcoal border border-bk-gold rounded-full text-[10px] font-mono font-bold text-bk-gold tracking-wider uppercase">
                    {selectedStore.name} ACTIVE
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom active store details slide (over Map) */}
            <div className="p-6 sm:p-8 bg-gradient-to-t from-bk-charcoal via-bk-charcoal/90 to-transparent relative z-20 mt-auto pt-24">
              <div className="p-5 rounded-2xl bg-bk-charcoal/95 border border-white/10 backdrop-blur-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/5">
                  <div className="text-left">
                    <span className="text-[10px] text-bk-cream/40 font-mono tracking-widest uppercase block">
                      STORE SELECTION
                    </span>
                    <h3 className="font-display font-black text-lg text-bk-cream">
                      {selectedStore.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-bk-gold font-mono font-bold">
                    <Clock className="w-4 h-4" />
                    <span>{selectedStore.hours}</span>
                  </div>
                </div>

                {/* Info row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-left text-bk-cream/70">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-bk-orange" />
                    <span>{selectedStore.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-bk-orange" />
                    <span className="line-clamp-1">{selectedStore.address}</span>
                  </div>
                </div>

                {/* Quick actions inside card */}
                <div className="flex flex-wrap gap-2 pt-1 text-[10px] font-mono font-bold">
                  <div className="px-2.5 py-1 rounded bg-bk-orange/10 text-bk-orange border border-bk-orange/20 flex items-center gap-1">
                    <Car className="w-3.5 h-3.5" />
                    DRIVE-THRU AVAILABLE
                  </div>
                  <div className="px-2.5 py-1 rounded bg-bk-gold/10 text-bk-gold border border-bk-gold/20 flex items-center gap-1">
                    <Bike className="w-3.5 h-3.5" />
                    EXPRESS COURIER RADIUS
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
