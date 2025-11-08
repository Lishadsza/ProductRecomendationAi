# 🛍️ AI Product Search & Recommendation System

An intelligent product search application powered by smart filtering algorithms with Google Gemini API integration. Search for products using natural language and get instant, accurate recommendations.

## ✨ Features

- 🔍 **Smart Search** - Natural language product search with intelligent filtering
- 🎯 **Category Detection** - Automatically detects product categories (phones, laptops, tablets, etc.)
- 💰 **Price Filtering** - Search with price constraints (e.g., "under ₹50000")
- 🏷️ **Brand Recognition** - Filter by specific brands (Samsung, Apple, Xiaomi, etc.)
- 📱 **48 Products** - Diverse catalog across 15+ categories
- 🎨 **Modern UI** - Clean, responsive design with smooth animations
- ⚡ **Fast Performance** - Built with React + Vite
- 🤖 **AI Fallback** - Google Gemini API integration (optional)

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Lishadsza/ProductRecomendationAi.git
cd ProductRecomendationAi
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your Gemini API key (optional)
VITE_GEMINI_API_KEY=your_api_key_here
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:5173
```

## 🎯 Usage Examples

Try these search queries:

**Category Searches:**
- `gaming laptop` - Shows gaming laptops
- `smartphone`, `phone`, or `mobile` - Shows phones
- `tablet`, `tabs`, or `tab` - Shows tablets
- `smartwatch` - Shows smartwatches
- `headphones` or `earbuds` - Shows headphones
- `fitness tracker` or `smart band` - Shows fitness bands

**Price Filters:**
- `gaming laptop under ₹80000` - Gaming laptops under 80k
- `phone under ₹30000` - Budget phones
- `laptop under ₹50000` - Affordable laptops

**Brand Searches:**
- `samsung phone` - Samsung phones only
- `apple` - All Apple products
- `xiaomi tablet` - Xiaomi tablets
- `asus gaming laptop` - Asus gaming laptops

**Combined Searches:**
- `best gaming laptop` - Premium gaming laptops
- `budget phone under ₹25000` - Cheap phones
- `samsung smartwatch` - Samsung smartwatches

## 📁 Project Structure

```
ProductRecomendationAi/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx             # Landing page
│   │   ├── Home.css
│   │   ├── Products.jsx         # Product search page
│   │   ├── Products.css
│   │   ├── HelpCentre.jsx       # Help & FAQ
│   │   └── HelpCentre.css
│   ├── App.jsx                  # Main app component
│   ├── App.css
│   ├── main.jsx                 # Entry point
│   ├── products.js              # Product database (48 products)
│   └── geminiService.js         # Smart filter + Gemini API
├── .env.example                 # Environment template
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Technologies

- **Frontend:** React 18, React Router DOM
- **Build Tool:** Vite 5
- **Styling:** CSS3 with custom animations
- **AI Integration:** Google Gemini API (optional)
- **State Management:** React Hooks

## 🧠 How It Works

1. **User Input** - User enters a search query in natural language
2. **Query Analysis** - System extracts:
   - Category keywords (laptop, phone, tablet, etc.)
   - Price constraints (under, below, within)
   - Brand names (Samsung, Apple, etc.)
   - Intent keywords (best, budget, premium)
3. **Smart Filtering** - Products are filtered based on:
   - Category match
   - Price range
   - Brand preference
   - Intent-based sorting
4. **Results Display** - Matching products shown with details
5. **AI Fallback** - If Gemini API is configured, it provides additional intelligence

## 🔑 Getting Gemini API Key (Optional)

The app works without an API key using smart filtering. To enable Gemini AI:

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key to your `.env` file

## 📦 Product Categories

- Phones (8 products)
- Tablets (8 products)
- Gaming Laptops (5 products)
- Laptops (3 products)
- Smartwatches (2 products)
- Headphones (5 products)
- Smart Home (4 products)
- Fitness Trackers (2 products)
- TVs (3 products)
- Cameras (2 products)
- Gaming Consoles (2 products)
- Gaming Accessories (1 product)
- Home Appliances (1 product)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Lishad**
- GitHub: [@Lishadsza](https://github.com/Lishadsza)

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- React team for the amazing framework
- Vite for blazing fast development experience
