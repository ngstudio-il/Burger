import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuExperience from './components/MenuExperience';
import FeaturedSpotlight from './components/FeaturedSpotlight';
import LimitedTimeCampaign from './components/LimitedTimeCampaign';
import LoyaltyRewards from './components/LoyaltyRewards';
import OrderJourney from './components/OrderJourney';
import RestaurantLocator from './components/RestaurantLocator';
import SocialProof from './components/SocialProof';
import MobileAppShowcase from './components/MobileAppShowcase';
import Sustainability from './components/Sustainability';
import Footer from './components/Footer';

import { MenuItem, CartItem, LocationStore } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [points, setPoints] = useState<number>(380); // Starts with initial VIP balance

  // Add points handler
  const addPoints = (amount: number) => {
    setPoints((prev) => prev + amount);
  };

  // Add item to cart with customizations
  const addToCart = (menuItem: MenuItem, customizations: CartItem['customizations']) => {
    setCart((prevCart) => {
      // Check if item with exact same customizations already exists
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.menuItem.id === menuItem.id &&
          JSON.stringify(item.customizations) === JSON.stringify(customizations)
      );

      if (existingIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += 1;
        return updatedCart;
      } else {
        // Generate a unique ID for this cart line instance
        const id = `${menuItem.id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        return [...prevCart, { id, menuItem, customizations, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const checkout = () => {
    // Award 10 points for every dollar spent on checkout!
    const subtotal = cart.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
    const pointsAwarded = Math.floor(subtotal * 10);
    addPoints(pointsAwarded);
    setCart([]); // Reset cart
  };

  const openLocator = () => {
    const el = document.getElementById('restaurant-locator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectStore = (store: LocationStore) => {
    console.log('Selected store:', store);
  };

  const openCustomizer = (item: MenuItem) => {
    console.log('Opening customizer for:', item);
  };

  return (
    <div className="min-h-screen bg-bk-charcoal text-bk-cream relative selection:bg-bk-orange selection:text-white">
      {/* Premium Transparent solid floating Nav bar */}
      <Navbar
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        checkout={checkout}
        openLocator={openLocator}
        openCustomizer={openCustomizer}
        points={points}
      />

      {/* Cinematic Hero header */}
      <Hero />

      {/* Immersive Menu Experience */}
      <MenuExperience addToCart={addToCart} />

      {/* Alternating Featured Spotlights */}
      <FeaturedSpotlight addToCart={addToCart} />

      {/* Countdown Promo campaigns */}
      <LimitedTimeCampaign />

      {/* Points slide progress rewards tracker */}
      <LoyaltyRewards points={points} addPoints={addPoints} />

      {/* Step journey timeline */}
      <OrderJourney />

      {/* Stylized vector map Locator */}
      <RestaurantLocator onSelectStore={handleSelectStore} />

      {/* App store show mockups */}
      <MobileAppShowcase />

      {/* Social proofs ratings UGC cards */}
      <SocialProof />

      {/* Eco integrity farm story */}
      <Sustainability />

      {/* Luxurious footer */}
      <Footer />
    </div>
  );
}
