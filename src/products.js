export const products = [
  // Phones (5)
  {
    id: 1,
    name: "iPhone 14",
    category: "Phone",
    price: 79900,
    description: "Latest Apple smartphone with A15 Bionic chip",
    features: ["5G", "128GB", "6.1-inch display"]
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    category: "Phone",
    price: 74999,
    description: "Flagship Android phone with excellent camera",
    features: ["5G", "256GB", "6.1-inch AMOLED"]
  },
  {
    id: 3,
    name: "OnePlus 11",
    category: "Phone",
    price: 56999,
    description: "Premium phone with fast charging",
    features: ["5G", "128GB", "Snapdragon 8 Gen 2"]
  },
  {
    id: 4,
    name: "Xiaomi 13 Pro",
    category: "Phone",
    price: 49999,
    description: "Feature-packed flagship with Leica camera",
    features: ["5G", "256GB", "120Hz display"]
  },
  {
    id: 5,
    name: "Realme 11 Pro",
    category: "Phone",
    price: 23999,
    description: "Budget-friendly phone with good performance",
    features: ["5G", "128GB", "108MP camera"]
  },

  // Tablets (8)
  {
    id: 6,
    name: "iPad Pro 12.9",
    category: "Tablet",
    price: 112900,
    description: "Professional tablet with M2 chip",
    features: ["M2 chip", "12.9-inch", "256GB"]
  },
  {
    id: 7,
    name: "iPad Air",
    category: "Tablet",
    price: 59900,
    description: "Versatile tablet with M1 chip",
    features: ["M1 chip", "10.9-inch", "64GB"]
  },
  {
    id: 8,
    name: "Samsung Galaxy Tab S9 Ultra",
    category: "Tablet",
    price: 109999,
    description: "Premium Android tablet with S Pen",
    features: ["14.6-inch", "256GB", "S Pen included"]
  },
  {
    id: 9,
    name: "Samsung Galaxy Tab S9",
    category: "Tablet",
    price: 76999,
    description: "High-end tablet with AMOLED display",
    features: ["11-inch", "128GB", "IP68 rating"]
  },
  {
    id: 10,
    name: "OnePlus Pad",
    category: "Tablet",
    price: 37999,
    description: "Entertainment-focused tablet",
    features: ["11.6-inch", "128GB", "144Hz display"]
  },
  {
    id: 11,
    name: "Xiaomi Pad 6",
    category: "Tablet",
    price: 26999,
    description: "Budget tablet with good specs",
    features: ["11-inch", "128GB", "Snapdragon 870"]
  },
  {
    id: 12,
    name: "Lenovo Tab P11 Pro",
    category: "Tablet",
    price: 44999,
    description: "Productivity tablet with OLED screen",
    features: ["11.5-inch OLED", "128GB", "Dolby Atmos"]
  },
  {
    id: 13,
    name: "Realme Pad 2",
    category: "Tablet",
    price: 19999,
    description: "Affordable tablet for daily use",
    features: ["11.5-inch", "128GB", "8360mAh battery"]
  },

  // Smartwatches (2)
  {
    id: 14,
    name: "Apple Watch Series 9",
    category: "Smartwatch",
    price: 45900,
    description: "Advanced smartwatch with health tracking",
    features: ["Always-on display", "ECG", "Blood oxygen"]
  },
  {
    id: 15,
    name: "Samsung Galaxy Watch 6",
    category: "Smartwatch",
    price: 31999,
    description: "Feature-rich Android smartwatch",
    features: ["AMOLED", "Sleep tracking", "40mm"]
  },

  // TVs (3)
  {
    id: 16,
    name: "Samsung 55\" QLED 4K TV",
    category: "TV",
    price: 64999,
    description: "Premium QLED TV with quantum dot technology",
    features: ["55-inch", "4K", "120Hz", "HDR10+"]
  },
  {
    id: 17,
    name: "LG 43\" 4K Smart TV",
    category: "TV",
    price: 32999,
    description: "Affordable 4K smart TV with webOS",
    features: ["43-inch", "4K", "webOS", "HDR"]
  },
  {
    id: 18,
    name: "Sony Bravia 65\" OLED",
    category: "TV",
    price: 189999,
    description: "Premium OLED TV with stunning picture quality",
    features: ["65-inch", "4K OLED", "120Hz", "Google TV"]
  },

  // Laptops (3)
  {
    id: 19,
    name: "MacBook Air M2",
    category: "Laptop",
    price: 114900,
    description: "Thin and light laptop with Apple M2 chip",
    features: ["M2 chip", "8GB RAM", "256GB SSD"]
  },
  {
    id: 20,
    name: "Dell XPS 13",
    category: "Laptop",
    price: 94990,
    description: "Premium Windows ultrabook",
    features: ["Intel i7", "16GB RAM", "512GB SSD"]
  },
  {
    id: 21,
    name: "HP Pavilion 15",
    category: "Laptop",
    price: 54990,
    description: "Affordable laptop for everyday tasks",
    features: ["AMD Ryzen 5", "8GB RAM", "512GB SSD"]
  },

  // Headphones (3)
  {
    id: 22,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 29990,
    description: "Premium noise-cancelling headphones",
    features: ["ANC", "30hr battery", "LDAC"]
  },
  {
    id: 23,
    name: "Apple AirPods Pro 2",
    category: "Headphones",
    price: 26900,
    description: "Wireless earbuds with active noise cancellation",
    features: ["ANC", "Spatial audio", "MagSafe"]
  },
  {
    id: 24,
    name: "boAt Rockerz 450",
    category: "Headphones",
    price: 1499,
    description: "Budget wireless headphones",
    features: ["Bluetooth", "15hr battery", "40mm drivers"]
  },

  // More Phones (3)
  {
    id: 25,
    name: "Vivo V29 Pro",
    category: "Phone",
    price: 39999,
    description: "Camera-focused smartphone with curved display",
    features: ["5G", "256GB", "50MP OIS camera"]
  },
  {
    id: 26,
    name: "Motorola Edge 40",
    category: "Phone",
    price: 29999,
    description: "Sleek design with fast performance",
    features: ["5G", "128GB", "144Hz display"]
  },
  {
    id: 27,
    name: "Nothing Phone 2",
    category: "Phone",
    price: 44999,
    description: "Unique design with Glyph interface",
    features: ["5G", "256GB", "Snapdragon 8+ Gen 1"]
  },

  // More Laptops (3)
  {
    id: 28,
    name: "Asus VivoBook 15",
    category: "Laptop",
    price: 42990,
    description: "Lightweight laptop for students",
    features: ["Intel i5", "8GB RAM", "512GB SSD"]
  },
  {
    id: 29,
    name: "Acer Aspire 5",
    category: "Laptop",
    price: 48990,
    description: "All-rounder laptop for work and play",
    features: ["AMD Ryzen 7", "16GB RAM", "512GB SSD"]
  },
  {
    id: 30,
    name: "MSI GF63 Thin",
    category: "Gaming Laptop",
    price: 64990,
    description: "Gaming laptop with dedicated graphics",
    features: ["Intel i5", "8GB RAM", "GTX 1650"]
  },
  
  // Gaming Laptops (4)
  {
    id: 45,
    name: "Asus ROG Strix G15",
    category: "Gaming Laptop",
    price: 89990,
    description: "High-performance gaming laptop with RGB",
    features: ["AMD Ryzen 7", "16GB RAM", "RTX 3050"]
  },
  {
    id: 46,
    name: "Lenovo Legion 5",
    category: "Gaming Laptop",
    price: 94990,
    description: "Premium gaming laptop with excellent cooling",
    features: ["AMD Ryzen 5", "16GB RAM", "RTX 3060"]
  },
  {
    id: 47,
    name: "HP Victus 15",
    category: "Gaming Laptop",
    price: 72990,
    description: "Budget gaming laptop with solid performance",
    features: ["Intel i5", "8GB RAM", "RTX 3050"]
  },
  {
    id: 48,
    name: "Acer Predator Helios 300",
    category: "Gaming Laptop",
    price: 109990,
    description: "Flagship gaming laptop for serious gamers",
    features: ["Intel i7", "16GB RAM", "RTX 4060"]
  },

  // Smart Home Devices (4)
  {
    id: 31,
    name: "Amazon Echo Dot 5th Gen",
    category: "Smart Home",
    price: 5499,
    description: "Smart speaker with Alexa",
    features: ["Voice control", "Music streaming", "Smart home hub"]
  },
  {
    id: 32,
    name: "Google Nest Hub",
    category: "Smart Home",
    price: 8999,
    description: "Smart display with Google Assistant",
    features: ["7-inch display", "Voice control", "Video calls"]
  },
  {
    id: 33,
    name: "TP-Link Tapo Smart Bulb",
    category: "Smart Home",
    price: 799,
    description: "WiFi-enabled color changing bulb",
    features: ["16M colors", "Voice control", "App control"]
  },
  {
    id: 34,
    name: "Mi Smart Camera 360",
    category: "Smart Home",
    price: 2999,
    description: "Home security camera with 360° view",
    features: ["1080p", "Night vision", "Two-way audio"]
  },

  // More Headphones (2)
  {
    id: 35,
    name: "JBL Tune 760NC",
    category: "Headphones",
    price: 5999,
    description: "Wireless headphones with ANC",
    features: ["ANC", "35hr battery", "Foldable"]
  },
  {
    id: 36,
    name: "Realme Buds Air 3",
    category: "Headphones",
    price: 3499,
    description: "TWS earbuds with fast charging",
    features: ["ANC", "30hr total", "Fast charging"]
  },

  // Cameras (2)
  {
    id: 37,
    name: "Canon EOS 1500D",
    category: "Camera",
    price: 31999,
    description: "DSLR camera for beginners",
    features: ["24.1MP", "WiFi", "Full HD video"]
  },
  {
    id: 38,
    name: "GoPro Hero 11",
    category: "Camera",
    price: 44999,
    description: "Action camera for adventures",
    features: ["5.3K video", "Waterproof", "HyperSmooth"]
  },

  // Fitness & Lifestyle (3)
  {
    id: 39,
    name: "Fitbit Charge 5",
    category: "Fitness Tracker",
    price: 14999,
    description: "Advanced fitness tracker",
    features: ["Heart rate", "GPS", "Sleep tracking"]
  },
  {
    id: 40,
    name: "Mi Smart Band 7",
    category: "Fitness Tracker",
    price: 2799,
    description: "Budget fitness band",
    features: ["AMOLED", "14-day battery", "120+ sports modes"]
  },
  {
    id: 41,
    name: "Dyson V11 Vacuum",
    category: "Home Appliance",
    price: 49900,
    description: "Cordless vacuum cleaner",
    features: ["60min runtime", "LCD screen", "HEPA filter"]
  },

  // Gaming (3)
  {
    id: 42,
    name: "PlayStation 5",
    category: "Gaming Console",
    price: 54990,
    description: "Next-gen gaming console",
    features: ["4K gaming", "Ultra-fast SSD", "DualSense controller"]
  },
  {
    id: 43,
    name: "Xbox Series S",
    category: "Gaming Console",
    price: 37990,
    description: "Compact gaming console",
    features: ["1440p gaming", "512GB SSD", "Game Pass"]
  },
  {
    id: 44,
    name: "Logitech G502 Hero",
    category: "Gaming Accessory",
    price: 4995,
    description: "High-performance gaming mouse",
    features: ["25K DPI", "11 buttons", "RGB lighting"]
  },

  // Budget Phones (under 20000)
  {
    id: 49,
    name: "Redmi Note 12",
    category: "Phone",
    price: 15999,
    description: "Budget smartphone with great features",
    features: ["5G", "128GB", "48MP camera"]
  },
  {
    id: 50,
    name: "Samsung Galaxy M14",
    category: "Phone",
    price: 13990,
    description: "Affordable Samsung with long battery life",
    features: ["5G", "128GB", "6000mAh battery"]
  },
  {
    id: 51,
    name: "Poco X5",
    category: "Phone",
    price: 18999,
    description: "Performance-focused budget phone",
    features: ["5G", "128GB", "Snapdragon 695"]
  },

  // Budget Phones (under 50000)
  {
    id: 52,
    name: "Google Pixel 7a",
    category: "Phone",
    price: 43999,
    description: "Premium mid-range with excellent camera",
    features: ["5G", "128GB", "Google Tensor G2"]
  },
  {
    id: 53,
    name: "iPhone 13",
    category: "Phone",
    price: 49900,
    description: "Previous gen iPhone at great price",
    features: ["5G", "128GB", "A15 Bionic"]
  },

  // Budget Headphones (under 20000)
  {
    id: 54,
    name: "OnePlus Buds Pro 2",
    category: "Headphones",
    price: 11999,
    description: "Premium TWS with spatial audio",
    features: ["ANC", "39hr battery", "LHDC codec"]
  },
  {
    id: 55,
    name: "Sennheiser HD 450BT",
    category: "Headphones",
    price: 9990,
    description: "Quality over-ear headphones",
    features: ["ANC", "30hr battery", "Foldable"]
  },

  // Budget Tablets (under 20000)
  {
    id: 56,
    name: "Samsung Galaxy Tab A8",
    category: "Tablet",
    price: 17999,
    description: "Budget tablet for entertainment",
    features: ["10.5-inch", "64GB", "Quad speakers"]
  },
  {
    id: 57,
    name: "Lenovo Tab M10",
    category: "Tablet",
    price: 12999,
    description: "Affordable tablet for basic use",
    features: ["10.1-inch", "64GB", "5000mAh battery"]
  },

  // Budget Tablets (under 50000)
  {
    id: 58,
    name: "iPad 10th Gen",
    category: "Tablet",
    price: 44900,
    description: "Latest budget iPad with modern design",
    features: ["A14 Bionic", "10.9-inch", "64GB"]
  },
  {
    id: 59,
    name: "Samsung Galaxy Tab S8",
    category: "Tablet",
    price: 49999,
    description: "Premium Android tablet",
    features: ["11-inch", "128GB", "S Pen included"]
  },

  // Budget Gaming Laptops (under 50000)
  {
    id: 60,
    name: "Asus TUF F15",
    category: "Gaming Laptop",
    price: 49990,
    description: "Entry-level gaming laptop",
    features: ["Intel i5", "8GB RAM", "GTX 1650"]
  },
  {
    id: 61,
    name: "Acer Nitro 5",
    category: "Gaming Laptop",
    price: 47990,
    description: "Budget gaming with good cooling",
    features: ["AMD Ryzen 5", "8GB RAM", "GTX 1650"]
  },

  // Budget Vacuum Cleaners (under 20000)
  {
    id: 62,
    name: "Eureka Forbes Vogue",
    category: "Home Appliance",
    price: 8999,
    description: "Compact vacuum cleaner for home",
    features: ["1000W", "Bagless", "HEPA filter"]
  },
  {
    id: 63,
    name: "Philips PowerPro",
    category: "Home Appliance",
    price: 12990,
    description: "Powerful vacuum with cyclonic action",
    features: ["1800W", "Bagless", "2L capacity"]
  },

  // Budget Vacuum Cleaners (under 50000)
  {
    id: 64,
    name: "iRobot Roomba 694",
    category: "Home Appliance",
    price: 29990,
    description: "Robot vacuum with smart features",
    features: ["WiFi", "Auto-charging", "App control"]
  },
  {
    id: 65,
    name: "Dyson V8",
    category: "Home Appliance",
    price: 39900,
    description: "Cordless stick vacuum",
    features: ["40min runtime", "Lightweight", "HEPA filter"]
  }
];
