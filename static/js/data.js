const products = [
  {
    id: 1,
    name: "Jollof Rice & Chicken",
    restaurant: "Mama's Kitchen",
    price: 3500,
    originalPrice: 4200,
    rating: 4.8,
    reviews: 234,
    deliveryTime: "25-35",
    category: "local",
    description: "Smoky party-style jollof rice served with a perfectly grilled chicken thigh, fried plantain, and fresh coleslaw. A true Nigerian classic that never disappoints!",
    emoji: "🍚",
    gradient: "linear-gradient(135deg, #ff6b35, #f7c948)"
  },
  {
    id: 2,
    name: "Shawarma (Large)",
    restaurant: "The Shawarma Place",
    price: 4500,
    originalPrice: null,
    rating: 4.6,
    reviews: 189,
    deliveryTime: "20-30",
    category: "fast-food",
    description: "Loaded chicken shawarma wrapped in fresh Lebanese bread with garlic sauce, ketchup, mayo, and crispy fries stuffed inside. Absolutely massive!",
    emoji: "🌯",
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)"
  },
  {
    id: 3,
    name: "Pounded Yam & Egusi",
    restaurant: "Iya Basira Foods",
    price: 4000,
    originalPrice: 4500,
    rating: 4.9,
    reviews: 312,
    deliveryTime: "30-45",
    category: "local",
    description: "Smooth pounded yam paired with rich egusi soup loaded with assorted meat, stockfish, and spinach. Comfort food at its absolute finest.",
    emoji: "🥘",
    gradient: "linear-gradient(135deg, #a8edea, #fed6e3)"
  },
  {
    id: 4,
    name: "Fried Rice & Turkey",
    restaurant: "Mama's Kitchen",
    price: 3800,
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    deliveryTime: "25-35",
    category: "local",
    description: "Colorful fried rice cooked with mixed vegetables, seasoned to perfection and served with a juicy deep-fried turkey drumstick.",
    emoji: "🍛",
    gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)"
  },
  {
    id: 5,
    name: "Chicken Burger Combo",
    restaurant: "Burger Hub",
    price: 5200,
    originalPrice: 6000,
    rating: 4.5,
    reviews: 98,
    deliveryTime: "15-25",
    category: "fast-food",
    description: "Crispy chicken burger with fresh lettuce, tomatoes, and our special sauce. Comes with a side of golden fries and a chilled soft drink.",
    emoji: "🍔",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)"
  },
  {
    id: 6,
    name: "Suya (Beef)",
    restaurant: "Mallam Suya Spot",
    price: 2500,
    originalPrice: null,
    rating: 4.9,
    reviews: 445,
    deliveryTime: "20-30",
    category: "grills",
    description: "Perfectly spiced and grilled beef suya skewers, served with sliced onions, tomatoes, cabbage, and extra spicy yaji pepper on the side.",
    emoji: "🥩",
    gradient: "linear-gradient(135deg, #f5af19, #f12711)"
  },
  {
    id: 7,
    name: "Peppered Snail",
    restaurant: "Iya Basira Foods",
    price: 5500,
    originalPrice: 6500,
    rating: 4.7,
    reviews: 87,
    deliveryTime: "35-50",
    category: "local",
    description: "Succulent giant African snails slow-cooked in a fiery pepper sauce with onions, scotch bonnets, and aromatic spices. A true delicacy!",
    emoji: "🐌",
    gradient: "linear-gradient(135deg, #ff9a9e, #fecfef)"
  },
  {
    id: 8,
    name: "Chicken Pizza (Medium)",
    restaurant: "Pizza Palace",
    price: 7500,
    originalPrice: 8500,
    rating: 4.4,
    reviews: 201,
    deliveryTime: "30-40",
    category: "fast-food",
    description: "Loaded chicken pizza with stretchy mozzarella cheese, bell peppers, onions, sweetcorn, and our signature tomato sauce on a crispy thin base.",
    emoji: "🍕",
    gradient: "linear-gradient(135deg, #fa709a, #fee140)"
  },
  {
    id: 9,
    name: "Ofada Rice & Ayamase",
    restaurant: "Mama's Kitchen",
    price: 3200,
    originalPrice: null,
    rating: 4.8,
    reviews: 178,
    deliveryTime: "25-35",
    category: "local",
    description: "Locally grown unpolished ofada rice served with spicy designer stew (ayamase) made with assorted peppers, locust beans, and palm oil.",
    emoji: "🍚",
    gradient: "linear-gradient(135deg, #89f7fe, #66a6ff)"
  },
  {
    id: 10,
    name: "Grilled Chicken & Chips",
    restaurant: "Chicken Republic",
    price: 4800,
    originalPrice: 5500,
    rating: 4.6,
    reviews: 267,
    deliveryTime: "20-30",
    category: "grills",
    description: "Flame-grilled half chicken marinated in a special blend of herbs and spices for 24 hours, served with crispy chips and creamy coleslaw.",
    emoji: "🍗",
    gradient: "linear-gradient(135deg, #fddb92, #d1fdff)"
  },
  {
    id: 11,
    name: "Pepper Soup (Goat Meat)",
    restaurant: "Iya Basira Foods",
    price: 3000,
    originalPrice: null,
    rating: 4.8,
    reviews: 134,
    deliveryTime: "30-40",
    category: "local",
    description: "Spicy and aromatic goat meat pepper soup prepared with traditional herbs, uziza leaves, and scent leaves. Perfect for any time of the day!",
    emoji: "🍲",
    gradient: "linear-gradient(135deg, #fbc2eb, #a6c1ee)"
  },
  {
    id: 12,
    name: "Smoothie Bowl",
    restaurant: "Green Bliss Cafe",
    price: 3500,
    originalPrice: 4000,
    rating: 4.3,
    reviews: 76,
    deliveryTime: "15-20",
    category: "drinks",
    description: "Thick blended acai and banana smoothie bowl topped with fresh strawberries, granola, coconut flakes, chia seeds, and a drizzle of honey.",
    emoji: "🥤",
    gradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)"
  }
];

const categories = [
  { id: "all", name: "All", emoji: "🍽️" },
  { id: "local", name: "Local Dishes", emoji: "🥘" },
  { id: "fast-food", name: "Fast Food", emoji: "🍔" },
  { id: "grills", name: "Grills & BBQ", emoji: "🥩" },
  { id: "drinks", name: "Drinks & Smoothies", emoji: "🥤" }
];

function formatPrice(price) {
  return "₦" + price.toLocaleString();
}

function getProduct(id) {
  return products.find(p => p.id === parseInt(id));
}

function getRelatedProducts(product, limit = 4) {
  return products
    .filter(p => p.id !== product.id && p.category === product.category)
    .concat(products.filter(p => p.id !== product.id && p.category !== product.category))
    .slice(0, limit);
}
