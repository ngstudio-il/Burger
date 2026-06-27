import { MenuItem, LocationStore, Deal } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'whopper-double',
    name: 'Gourmet Double Whopper',
    category: 'burgers',
    price: 9.49,
    description: 'Two quarter-pound flame-grilled beef patties topped with juicy tomatoes, crisp lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a toasted sesame seed brioche bun.',
    calories: 920,
    image: '/src/assets/images/hero_whopper_1782584110528.jpg',
    ingredients: ['100% Flame-Grilled Beef', 'Vine-Ripened Tomatoes', 'Crisp Iceberg Lettuce', 'White Onion Rings', 'Pickles', 'Melted Cheddar', 'Sesame Brioche Bun'],
    tags: ['Flame-Grilled', 'Signature', 'Double Patty'],
    nutrition: { protein: '48g', carbs: '52g', fat: '58g' }
  },
  {
    id: 'smokehouse-king',
    name: 'Smokehouse BBQ Bacon King',
    category: 'limited',
    price: 10.99,
    description: 'Two flame-grilled beef patties topped with thick-cut smoked bacon, crispy onion rings, melted American cheese, and a rich, sweet hickory-smoked BBQ sauce, on a soft toasted bun.',
    calories: 1140,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Flame-Grilled Beef', 'Smoked Applewood Bacon', 'Golden Onion Rings', 'Hickory BBQ Sauce', 'American Cheese', 'Brioche Bun'],
    tags: ['Limited Time', 'Rich BBQ', 'Smoked Bacon'],
    nutrition: { protein: '56g', carbs: '64g', fat: '72g' }
  },
  {
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
  },
  {
    id: 'truffle-beef',
    name: 'Black Truffle Swiss Angus',
    category: 'limited',
    price: 12.49,
    description: 'A thick, juicy half-pound Angus beef patty flame-broiled, smothered in rich black truffle aioli, melted Emmental Swiss cheese, and caramelized balsamic onions on an artisanal glaze bun.',
    calories: 880,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Flame-Grilled Angus Beef', 'Black Truffle Aioli', 'Melted Swiss Cheese', 'Caramelized Balsamic Onions', 'Artisanal Glazed Bun'],
    tags: ['Limited Time', 'Gourmet', 'Truffle'],
    nutrition: { protein: '45g', carbs: '38g', fat: '54g' }
  },
  {
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
  },
  {
    id: 'onion-rings',
    name: 'Gourmet Crispy Onion Rings',
    category: 'fries',
    price: 3.99,
    description: 'Thick-cut, whole white onions battered in a light, crunchy breading, fried to golden-brown perfection and served with our signature Zesty sauce.',
    calories: 410,
    image: 'https://images.unsplash.com/photo-1639024471283-2bc7b3c6a267?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Sweet White Onions', 'Crispy Panko Batter', 'Signature Zesty Dipping Sauce'],
    tags: ['Crispy Side', 'Savory Dip', 'Vegetarian'],
    nutrition: { protein: '4g', carbs: '51g', fat: '21g' }
  },
  {
    id: 'royal-spicy-chicken',
    name: 'Spicy Royal Crispy Chicken',
    category: 'chicken',
    price: 8.79,
    description: 'A premium crispy chicken breast glazed with our proprietary ghost pepper and cayenne chili sauce, topped with crunchy dill pickles and creamy sauce on a toasted bun.',
    calories: 670,
    image: 'https://images.unsplash.com/photo-1627662236973-4f8259fa2441?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Spicy Fried Chicken Breast', 'Ghost Pepper Glaze', 'Dill Pickles', 'Creamy Mayo Sauce', 'Sesame Bun'],
    tags: ['Spicy Hot', 'Signature Glaze'],
    nutrition: { protein: '34g', carbs: '49g', fat: '36g' }
  },
  {
    id: 'croissanwich-bacon',
    name: 'Bacon, Egg & Cheese Croissan’wich',
    category: 'breakfast',
    price: 5.49,
    description: 'Crisp Applewood smoked bacon, fluffy folded eggs, and melted American cheese, layered between our legendary flaky, buttery toasted croissant.',
    calories: 390,
    image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Buttery Croissant', 'Applewood Smoked Bacon', 'Fluffy Folded Eggs', 'Melted American Cheese'],
    tags: ['Breakfast Classic', 'Flaky & Buttery'],
    nutrition: { protein: '16g', carbs: '29g', fat: '23g' }
  },
  {
    id: 'croissanwich-sausage',
    name: 'Sausage, Egg & Cheese Biscuit',
    category: 'breakfast',
    price: 5.49,
    description: 'Sizzling hot pork sausage patty, fluffy egg, and melted American cheese on a warm, golden buttermilk biscuit baked fresh in-house.',
    calories: 520,
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Buttermilk Biscuit', 'Sizzling Pork Sausage', 'Fluffy Egg', 'American Cheese'],
    tags: ['Biscuit Love', 'Hearty Morning'],
    nutrition: { protein: '19g', carbs: '36g', fat: '34g' }
  },
  {
    id: 'fudge-sundae',
    name: 'Decadent Chocolate Fudge Sundae',
    category: 'desserts',
    price: 4.29,
    description: 'Velvety smooth vanilla soft serve ice cream layered with hot, rich chocolate fudge, topped with a gourmet caramel drizzle and crushed waffle cone.',
    calories: 320,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Vanilla Soft-Serve', 'Rich Chocolate Fudge', 'Caramel Drizzle', 'Waffle Cone Crumbs'],
    tags: ['Sweet Treat', 'Hot Fudge', 'Dessert Star'],
    nutrition: { protein: '6g', carbs: '48g', fat: '11g' }
  },
  {
    id: 'apple-pie',
    name: 'Baked Apple Pie Turnover',
    category: 'desserts',
    price: 2.99,
    description: 'A crisp, flaky pastry crust sprinkled with cinnamon sugar, filled with sweet, warm apple chunks cooked in cinnamon syrup. Baked fresh daily.',
    calories: 290,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Flaky Pastry Crust', 'Cinnamon Apples', 'Cinnamon Sugar Glaze'],
    tags: ['Baked Fresh', 'Warm Delight'],
    nutrition: { protein: '3g', carbs: '41g', fat: '13g' }
  },
  {
    id: 'caramel-shake',
    name: 'Salted Caramel Royal Shake',
    category: 'drinks',
    price: 4.99,
    description: 'Thick, creamy soft serve blended with luxury salted caramel sauce, topped with fresh whipped cream and a salted caramel swirl.',
    calories: 590,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Vanilla Milkshake Base', 'Salted Caramel Swirl', 'Whipped Cream'],
    tags: ['Creamy', 'Decadent Shake'],
    nutrition: { protein: '11g', carbs: '88g', fat: '20g' }
  },
  {
    id: 'craft-soda',
    name: 'Handcrafted Vanilla Cream Soda',
    category: 'drinks',
    price: 2.99,
    description: 'Refreshing carbonated water infused with natural Madagascar vanilla bean syrup, ice cold, topped with a dash of heavy cream.',
    calories: 180,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Madagascar Vanilla', 'Sparkling Carbonation', 'Touch of Sweet Cream', 'Ice'],
    tags: ['Refreshing', 'Craft Brewed'],
    nutrition: { protein: '1g', carbs: '42g', fat: '2g' }
  },
  {
    id: 'jr-king-meal',
    name: 'Junior Cheeseburger King Meal',
    category: 'kids',
    price: 6.49,
    description: 'A perfectly sized flame-grilled beef patty with cheese, pickles, and ketchup. Includes a small crispy fry, organic apple juice box, and an exclusive Royal collectible toy.',
    calories: 450,
    image: 'https://images.unsplash.com/photo-1534790566193-3532484f9de6?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Flame-Grilled Beef Patty', 'Cheddar Cheese', 'Pickle', 'Ketchup', 'Organic Apple Juice', 'Kids Fries'],
    tags: ['Kids Choice', 'Toy Included', 'Meal Bundle'],
    nutrition: { protein: '20g', carbs: '52g', fat: '18g' }
  }
];

export const LOCATIONS: LocationStore[] = [
  {
    id: 'loc-manhattan',
    name: 'Fifth Avenue Flagship',
    address: '425 Fifth Ave, New York, NY 10016',
    distance: '0.4 miles',
    phone: '(212) 555-0199',
    hours: 'Open 24 Hours',
    services: { driveThru: false, delivery: true, dineIn: true, wifi: true, playking: false },
    lat: 40.7510,
    lng: -73.9818
  },
  {
    id: 'loc-times-square',
    name: 'Broadway & 46th',
    address: '1540 Broadway, New York, NY 10036',
    distance: '0.9 miles',
    phone: '(212) 555-0231',
    hours: 'Open 24 Hours',
    services: { driveThru: false, delivery: true, dineIn: true, wifi: true, playking: true },
    lat: 40.7580,
    lng: -73.9855
  },
  {
    id: 'loc-brooklyn',
    name: 'Flatbush Premium Lounge',
    address: '120 Flatbush Ave, Brooklyn, NY 11217',
    distance: '3.1 miles',
    phone: '(718) 555-0144',
    hours: '6:00 AM - 2:00 AM',
    services: { driveThru: true, delivery: true, dineIn: true, wifi: true, playking: true },
    lat: 40.6830,
    lng: -73.9780
  },
  {
    id: 'loc-queens',
    name: 'Astoria Boulevard Drive-Thru',
    address: '31-05 Astoria Blvd, Queens, NY 11102',
    distance: '4.8 miles',
    phone: '(718) 555-0188',
    hours: '5:00 AM - 3:00 AM',
    services: { driveThru: true, delivery: true, dineIn: true, wifi: true, playking: false },
    lat: 40.7725,
    lng: -73.9215
  }
];

export const DEALS: Deal[] = [
  {
    id: 'deal-1',
    title: 'Double Royalty Combo',
    description: 'Get two Gourmet Double Whoppers, two medium fries, and two drinks for an exclusive loyalty price.',
    code: 'ROYALTWIN',
    discount: '$14.99 Meal',
    expiry: 'Expires in 4 days'
  },
  {
    id: 'deal-2',
    title: 'Flame-Grilled Fridays',
    description: 'Enjoy 50% off any premium Burger with any side and drink purchase of $6 or more.',
    code: 'FLAME50',
    discount: '50% OFF Burger',
    expiry: 'Friday Only'
  },
  {
    id: 'deal-3',
    title: 'Free Delivery Weekend',
    description: 'Get free shipping directly from our flagship kitchen on any order over $15.',
    code: 'KINGSHIP',
    discount: 'Free Delivery',
    expiry: 'Expires Sunday'
  },
  {
    id: 'deal-4',
    title: 'Crown Jewels points boost',
    description: 'Claim double loyalty points on all chicken sandwich selections this week.',
    code: 'CROWNX2',
    discount: '2x POINTS',
    expiry: 'Expires in 5 days'
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Marcus Vance',
    role: 'Gourmet Critic & Food Writer',
    text: 'I was skeptical of a fast-food app redesign, but this is a masterpiece. The Gourmet Swiss Swiss Angus burger blew my expectations away. Flame-grilled beef actually holds its smoky flavor beautifully.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't2',
    name: 'Seraphina Vance',
    role: 'Digital Designer',
    text: 'The ordering flow and burger visual customizer on this website feels more fluid than Apple’s checkout. It is a genuine pleasure to design my burger stack on this premium UI.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't3',
    name: 'Chef Daniel Thorne',
    role: 'Artisanal Burger Consultant',
    text: 'Burger King’s flame-grilling is legendary, but this high-end showcase sets a new industry standard. Beautiful, honest ingredient representation and gorgeous photography.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];
