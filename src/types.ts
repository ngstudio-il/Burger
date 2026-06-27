export interface MenuItem {
  id: string;
  name: string;
  category: 'burgers' | 'chicken' | 'fries' | 'breakfast' | 'desserts' | 'drinks' | 'kids' | 'limited';
  price: number;
  description: string;
  calories: number;
  image: string;
  ingredients: string[];
  tags: string[];
  nutrition: {
    protein: string;
    carbs: string;
    fat: string;
  };
}

export interface CartItem {
  id: string; // unique for this instance in cart
  menuItem: MenuItem;
  customizations: {
    lettuce: 'none' | 'normal' | 'extra';
    tomato: 'none' | 'normal' | 'extra';
    onion: 'none' | 'normal' | 'extra';
    cheese: 'none' | 'normal' | 'extra';
    mayo: 'none' | 'normal' | 'extra';
    patty: number; // 1, 2, or 3
  };
  quantity: number;
}

export interface LocationStore {
  id: string;
  name: string;
  address: string;
  distance: string;
  phone: string;
  hours: string;
  services: {
    driveThru: boolean;
    delivery: boolean;
    dineIn: boolean;
    wifi: boolean;
    playking: boolean;
  };
  lat: number;
  lng: number;
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  code: string;
  discount: string;
  expiry: string;
}
