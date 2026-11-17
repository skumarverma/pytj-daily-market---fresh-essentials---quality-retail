export interface Department {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  image: string;
  highlights: string[];
  popularItems: {
    name: string;
    description: string;
    tag: string;
  }[];
  b2bAvailable: boolean;
}

export interface BusinessDetails {
  name: string;
  tradeName: string;
  tagline: string;
  managingDirector: {
    name: string;
    title: string;
    experience: string;
    bio: string;
    vision: string;
  };
  phones: string[];
  primaryPhone: string;
  whatsappPhone: string;
  emails: string[];
  primaryEmail: string;
  tradeLicenseNo: string;
  gstin: string;
  address: {
    building: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
  };
  serviceSchedule: {
    days: string;
    statusText: string;
  };
}

export const BUSINESS_DATA: BusinessDetails = {
  name: "PYTJ Daily Market",
  tradeName: "M/s PYTJ Daily Market",
  tagline: "FRESH ESSENTIALS, QUALITY PRODUCTS, EVERY DAY",
  managingDirector: {
    name: "Smt. Yabom Buchi Nyokir",
    title: "Managing Director",
    experience: "Graduate Entrepreneur with 5 Years of Business Experience",
    bio: "Smt. Yabom Buchi Nyokir, Managing Director of PYTJ Daily Market, is a graduate entrepreneur with 5 years of business experience. She possesses practical understanding of retail operations, customer requirements, product sourcing, and day-to-day business management.",
    vision: "Her vision is to strengthen PYTJ Daily Market through diversified offerings, modern infrastructure, own-brand products, and strategic expansion, establishing it as a trusted and scalable retail brand."
  },
  phones: ["+91 8575291355", "+91 6909504999"],
  primaryPhone: "+918575291355",
  whatsappPhone: "918575291355",
  emails: ["pytjGroup@gmail.com", "PytjGroup7@gmail.com"],
  primaryEmail: "pytjGroup@gmail.com",
  tradeLicenseNo: "IMC/DEV-23/2026/1783",
  gstin: "12AQMPB0460H1ZE",
  address: {
    building: "Flat/Block No. 01, Nyokir Complex",
    landmark: "O’ Point Tinali",
    city: "Itanagar",
    district: "Papum Pare District",
    state: "Arunachal Pradesh",
    pincode: "791111",
    country: "India",
    fullAddress: "Flat/Block No. 01, Nyokir Complex, O’ Point Tinali, Itanagar, Papum Pare District, Arunachal Pradesh – 791111, India"
  },
  serviceSchedule: {
    days: "Monday – Sunday (Open All 7 Days)",
    statusText: "Open Every Day for Fresh Essentials & Daily Shopping"
  }
};

export const DEPARTMENTS: Department[] = [
  {
    id: "produce",
    name: "Fresh Farm Produce",
    tagline: "Daily Farm-Fresh Vegetables & Seasonal Fruits",
    badge: "Sourced Daily",
    description: "Hand-selected fresh vegetables, crisp greens, seasonal and exotic fruits sourced directly to meet the daily nutritional needs of Itanagar families.",
    image: "/images/fresh-produce.jpg",
    highlights: [
      "Daily morning harvest arrivals",
      "Organized tiered wooden baskets for damage-free selection",
      "Local seasonal greens & exotic culinary vegetables",
      "Carefully graded for freshness and zero spoilage"
    ],
    popularItems: [
      { name: "Crisp Green Cabbage & Broccoli", description: "Farm fresh, tight heads, pesticide-controlled", tag: "Daily Fresh" },
      { name: "Vine-Ripe Tomatoes & Red Carrots", description: "Juicy, nutrient-dense cooking essentials", tag: "Pantry Must" },
      { name: "Hill Chayote (Squash) & Beans", description: "Fresh native harvest from local mountain farmers", tag: "Local Favorite" },
      { name: "Fresh Seasonal Apples & Bananas", description: "Sweet, naturally ripened fruit selections", tag: "Energy Boost" }
    ],
    b2bAvailable: true
  },
  {
    id: "meat-fish",
    name: "Fresh Meat & Fish Counter",
    tagline: "Hygienically Cut Poultry, Dressed Meats & Daily Fish",
    badge: "Cold-Chain Preserved",
    description: "Dedicated hygienic cutting and cold-preserved counter for fresh river and pond fish, dressed tender chicken, and meat cuts prepared under sanitized conditions.",
    image: "/images/meat-and-fish.jpg",
    highlights: [
      "Strict temperature-controlled refrigeration and ice beds",
      "Sanitized stainless steel counters and modern digital weighing",
      "Custom cuts (curry cut, boneless, whole fish cleaned on request)",
      "Daily fresh supply — never thawed or stale"
    ],
    popularItems: [
      { name: "Fresh Rohu & Katla Fish", description: "Cleaned, scaled, and sliced as per your preference", tag: "Fresh Daily Catch" },
      { name: "Dressed Farm Chicken", description: "Hygienically processed, tender, ready-to-cook", tag: "Best Seller" },
      { name: "Specialty Fresh River Fish", description: "Locally sourced freshwater varieties based on availability", tag: "Local Delicacy" },
      { name: "Custom B2B Bulk Cuts", description: "Packaged bulk cuts for hotels, restaurants & caterers", tag: "Commercial Grade" }
    ],
    b2bAvailable: true
  },
  {
    id: "grocery",
    name: "Grocery & Daily Essentials",
    tagline: "Pantry Staples, Packaged Foods & Household Goods",
    badge: "100+ Trusted Brands",
    description: "Wide aisles stocked with high-grade rice, pulses, cooking oils, aromatic spices, packaged breakfast foods, dairy, instant noodles, and home cleaning necessities.",
    image: "/images/grocery-essentials.jpg",
    highlights: [
      "Full range of branded and unbranded staple grains & pulses",
      "Premium cold pressed & refined edible oils and ghee",
      "Snacks, biscuits, tea, coffee, and daily dairy cartons",
      "Clean price tags and transparent MRP compliance"
    ],
    popularItems: [
      { name: "Aromatic Rice & Whole Pulses (Dal)", description: "Premium long grain and daily cooking lentils", tag: "Staple" },
      { name: "Mustard Oil, Sunflower Oil & Ghee", description: "Pure, quality certified cooking mediums", tag: "Essential" },
      { name: "Packaged Snacks & Quick Meals", description: "Noodles, biscuits, namkeen & hot breakfast oats", tag: "Quick Grab" },
      { name: "Dairy & Beverage Chiller Stock", description: "Milk, butter, juices and chilled refreshments", tag: "Chilled" }
    ],
    b2bAvailable: true
  },
  {
    id: "cosmetics",
    name: "Cosmetics & Skincare",
    tagline: "Daily Beauty, Grooming & Dermatological Care",
    badge: "Authentic Products",
    description: "Dedicated beauty and personal care shelves featuring daily skincare, hair care, body lotions, face washes, soaps, cosmetics, and hygiene essentials.",
    image: "/images/cosmetics-skincare.jpg",
    highlights: [
      "100% genuine products sourced from authorized distributors",
      "Skincare suited for local hill climates and humidity",
      "Personal grooming, oral care, and baby hygiene range",
      "Affordable luxury and everyday personal care under one roof"
    ],
    popularItems: [
      { name: "Daily Moisturization & Creams", description: "Hydrating creams, winter care, and SPF protection", tag: "Skincare" },
      { name: "Hair Care Shampoos & Oils", description: "Nourishing remedies for strong, radiant hair", tag: "Hair Care" },
      { name: "Gentle Soaps & Body Washes", description: "Refreshing hygiene for the entire family", tag: "Personal Care" },
      { name: "Beauty Essentials & Lip Care", description: "Color cosmetics and daily protective lip balms", tag: "Beauty" }
    ],
    b2bAvailable: false
  },
  {
    id: "wholesale",
    name: "Wholesale & B2B Commercial Supply",
    tagline: "Reliable Bulk Supply for Hotels, Restaurants & Institutions",
    badge: "Commercial Partner",
    description: "Dedicated wholesale division catering to Itanagar's top restaurants, cafes, hotel kitchens, institutional hostels, and special event caterers with scheduled deliveries.",
    image: "/images/wholesale-b2b.jpg",
    highlights: [
      "Special contracted wholesale pricing on bulk produce and meat",
      "Consistent supply guarantee without sudden stock shortages",
      "GST invoice with full tax compliance (GSTIN: 12AQMPB0460H1ZE)",
      "Direct owner line for customized delivery schedules"
    ],
    popularItems: [
      { name: "Hotel Kitchen Fresh Produce Crates", description: "Daily calibrated potato, onion, tomato and greens crates", tag: "Bulk Produce" },
      { name: "Commercial Meat & Fish Supply", description: "Standardized cuts delivered fresh in thermal bins", tag: "Bulk Protein" },
      { name: "Staple Grocery Sacks & Oil Tins", description: "25kg/50kg sacks of rice, flour, sugar and 15L oil cans", tag: "Pantry Bulk" },
      { name: "Event & Catering Custom Orders", description: "Tailored supply for weddings, festivals & community feasts", tag: "Events" }
    ],
    b2bAvailable: true
  }
];

export const VALUE_ADDED_PRODUCTS = [
  {
    title: "PYTJ Packaged Foods",
    desc: "Hygienically packaged local grains, dry pulses, and spices prepared under safe standards."
  },
  {
    title: "Bakery & Breads",
    desc: "Fresh daily oven-baked breads, tea rusks, and wholesome baked goods."
  },
  {
    title: "Artisanal Pickles & Relishes",
    desc: "Authentic Northeastern and homemade traditional pickles crafted with traditional recipes."
  },
  {
    title: "Smoked Meat & Dry Fish",
    desc: "Traditional regional smoked delicacies preserved with care for authentic local flavors."
  },
  {
    title: "Packaged Mineral Water",
    desc: "Purified bottled mineral water for daily hydration, retail, and commercial event orders."
  },
  {
    title: "Eco Disposable Plates & Products",
    desc: "Convenient disposable supplies and food-grade packaging containers."
  },
  {
    title: "Household Candles & Essentials",
    desc: "Utility candles and essential household products for everyday reliable use."
  }
];

/* PDF Dataset: Services We Provide (Page 5) */
export const SERVICES_WE_PROVIDE = {
  quote: "We provide fresh food, groceries, daily essentials, cosmetics, and skincare products under one roof, supported by quality sourcing, convenient shopping, reliable availability, and planned cold-storage facilities for improved freshness.",
  pillars: [
    {
      title: "Quality Sourcing",
      desc: "Direct farm and verified distributor sourcing ensuring healthy, graded goods for Itanagar families.",
      icon: "ShieldCheck"
    },
    {
      title: "Convenient Shopping",
      desc: "True one-stop destination saving time and travel across town by combining all everyday categories.",
      icon: "ShoppingBag"
    },
    {
      title: "Reliable Availability",
      desc: "Consistent daily stock levels and transparent, honest pricing with zero arbitrary market inflation.",
      icon: "CheckCircle2"
    },
    {
      title: "Cold-Storage Facilities",
      desc: "Dedicated commercial chillers and deep freezers preserving crispness, nutrition, and food safety.",
      icon: "Snowflake"
    }
  ]
};

export const WHY_CHOOSE_US = [
  {
    title: "One-Stop Convenience",
    desc: "Fresh food, groceries, daily essentials, cosmetics, and skincare—all under one roof.",
    icon: "ShoppingBag"
  },
  {
    title: "Freshness & Quality Focus",
    desc: "Strong emphasis on hygienic sourcing, product quality, and planned cold-storage support.",
    icon: "Snowflake"
  },
  {
    title: "Own-Brand Potential",
    desc: "Developing packaged foods, bakery products, pickles, smoked products, and other PYTJ-branded offerings.",
    icon: "Award"
  },
  {
    title: "Strong Local Connect",
    desc: "Products and services tailored to the everyday needs and preferences of consumers in Arunachal Pradesh.",
    icon: "HeartHandshake"
  }
];

export const STORE_STATS = [
  { value: "500+", label: "Products in Stock", sub: "Produce, Meats, FMCG & Skincare" },
  { value: "7 Days", label: "Open Every Week", sub: "Serving Families & Businesses Daily" },
  { value: "100%", label: "Hygienic Cold Chain", sub: "Dedicated commercial refrigeration" },
  { value: "1 Stop", label: "Complete Destination", sub: "At Nyokir Complex, '0' Point Tinali" }
];

/* PDF Dataset 1: Market Challenges (Page 3) */
export const MARKET_CHALLENGES = [
  {
    id: "cold-storage",
    title: "Limited Cold Storage",
    desc: "Inadequate storage facilities lead to spoilage and reduced freshness of vegetables, fruits, meat, and fish."
  },
  {
    id: "fragmented",
    title: "Fragmented Shopping Experience",
    desc: "Customers often visit multiple stores for fresh food, groceries, cosmetics, skincare, and daily essentials."
  },
  {
    id: "local-products",
    title: "Limited Quality Local Products",
    desc: "Consumers have fewer choices for hygienically processed, packaged, and locally produced food products."
  },
  {
    id: "availability",
    title: "Inconsistent Product Availability",
    desc: "Supply and logistics challenges can affect the regular availability, quality, and affordability of essential products."
  }
];

/* PDF Dataset 2: Solutions (Page 4) */
export const CORE_SOLUTIONS = [
  {
    id: "cold-support",
    title: "Cold Storage Support",
    desc: "Improve preservation and extend the shelf life of fresh and perishable products."
  },
  {
    id: "one-stop",
    title: "One-Stop Retail Experience",
    desc: "Bring food, groceries, personal care, and household essentials together conveniently."
  },
  {
    id: "own-brand",
    title: "Own-Brand Product Range",
    desc: "Develop hygienically processed and packaged products tailored to local consumer demand."
  },
  {
    id: "supply-mgmt",
    title: "Efficient Supply Management",
    desc: "Strengthen sourcing, inventory, and distribution to ensure consistent product availability."
  }
];

/* PDF Dataset 3: STP Strategy (Page 6) */
export const STP_STRATEGY = {
  segmentation: {
    title: "Segmentation",
    desc: "Households, working professionals, local retailers, hotels, restaurants, beauty-conscious consumers, and customers seeking fresh food and everyday essentials."
  },
  targeting: {
    title: "Targeting",
    desc: "Families and individuals seeking fresh, hygienic, quality products and convenient one-stop shopping at accessible prices."
  },
  positioning: {
    title: "Positioning",
    desc: "Position PYTJ Daily Market as a trusted one-stop destination for freshness, quality, convenience, and diverse everyday needs in Arunachal Pradesh."
  }
};

/* PDF Dataset 4: Market Opportunity (Page 7) */
export const MARKET_OPPORTUNITY = {
  retail: "India’s retail market is estimated at US$1.09 trillion in 2025 and is projected to exceed US$2.36 trillion by 2030, with organised retail expected to capture over 35%.",
  fmcg: "India’s FMCG market reached approximately US$289.1 billion in 2025 and is projected to reach US$642.87 billion by 2030, growing at a 17.3% CAGR.",
  trends: "Rising incomes, digital adoption, premiumisation, convenience-led shopping and organised retail are reshaping India’s market, while Tier-II and Tier-III cities increasingly drive demand for branded and accessible consumer products.",
  source: "Source: IBEF"
};

/* PDF Dataset 5: Revenue Model (Page 8) */
export const REVENUE_STREAMS = [
  {
    title: "Retail Product Sales",
    desc: "Revenue from fresh produce, meat, fish, groceries, daily essentials, cosmetics, and skincare products."
  },
  {
    title: "Own-Brand Product Sales",
    desc: "Higher-margin revenue from planned packaged foods, bakery products, pickles, smoked products, mineral water, and other PYTJ-branded products."
  },
  {
    title: "Wholesale & B2B Sales",
    desc: "Bulk supply of food and essential products to hotels, restaurants, retailers, institutions, and other commercial customers."
  }
];

/* PDF Dataset 6: Benchmarking & Competitive Advantage (Page 10) */
export const BENCHMARKING_DATA = {
  existingSolutions: "Itanagar consumers are served by supermarkets, departmental stores, grocery outlets and hypermarkets such as Reliance SMART Bazaar, Vishal Mega Mart, N.E. Departmental Store and independent retailers.",
  issuesWithExisting: "The market remains fragmented across specialized and general retailers, creating scope for stronger integration of fresh perishables, beauty products, localized offerings, cold-storage capabilities and value-added products.",
  competitiveAdvantage: "PYTJ Daily Market differentiates itself through a diversified mix of fresh produce, meat, fish, groceries, cosmetics and skincare under one roof. Planned cold-storage infrastructure strengthens freshness and inventory management, while own-brand packaged foods and locally relevant products create additional value. Strong local market understanding and future multi-outlet expansion provide a foundation for building a distinctive regional retail brand."
};

/* PDF Dataset 7: Go-To-Market Strategy (Page 11) */
export const GO_TO_MARKET_STEPS = [
  "Strengthen Local Presence",
  "Expand Product Range",
  "Build Customer Loyalty",
  "Develop B2B Partnerships",
  "Launch New Outlets"
];

/* PDF Dataset 8: Growth Roadmap (Page 12) */
export const GROWTH_ROADMAP = [
  {
    step: "01",
    title: "Strengthen Core Operations",
    desc: "Optimize inventory, sourcing, product variety, and customer experience."
  },
  {
    step: "02",
    title: "Build Cold Infrastructure",
    desc: "Establish cold-storage facilities for efficient preservation of perishable products."
  },
  {
    step: "03",
    title: "Launch Own Products",
    desc: "Introduce PYTJ-branded packaged foods, bakery items, pickles, smoked products, and mineral water."
  },
  {
    step: "04",
    title: "Expand Market Presence",
    desc: "Open new outlets across Arunachal Pradesh and gradually enter other promising regional markets."
  }
];

/* PDF Dataset 9: Fund Utilization (Page 13) */
export const FUND_UTILIZATION = [
  { label: "Cold Storage & Infrastructure", percentage: 30 },
  { label: "Machinery & Production Setup", percentage: 25 },
  { label: "Inventory & Working Capital", percentage: 20 },
  { label: "New Outlet Expansion", percentage: 15 },
  { label: "Marketing & Branding", percentage: 10 }
];
