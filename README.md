# AI Product Recommendation System

A React-based product recommendation system powered by Google Gemini API.

## Features

- 🤖 AI-powered product recommendations using Google Gemini
- 📱 Display of 12 sample products across multiple categories
- 🔍 Natural language query support (e.g., "I want a phone under $500")
- 🎨 Clean, responsive UI with gradient design
- ⚡ Built with React + Vite for fast development

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Get Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 3. Configure Environment

Open the `.env` file and replace `your_gemini_api_key_here` with your actual API key:

```
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

### 4. Run the Application

```bash
npm run dev
```

The app will open at `http://localhost:5173`

## Usage

1. View all 12 products displayed on the page
2. Enter a natural language query like:
   - "I want a phone under $500"
   - "Show me budget laptops"
   - "I need wireless headphones under $100"
   - "Recommend a tablet for work"
3. Click "Get Recommendations"
4. The AI will filter and show matching products
5. Click "Show All Products" to reset

## Project Structure

```
├── src/
│   ├── App.jsx              # Main component
│   ├── App.css              # Styling
│   ├── main.jsx             # Entry point
│   ├── products.js          # Product data
│   └── geminiService.js     # Gemini API integration
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

1. User enters a preference query
2. App sends the query + product list to Gemini API
3. Gemini analyzes the request and returns matching product IDs
4. App filters and displays recommended products
5. User can reset to see all products again

## Technologies

- React 18
- Vite
- Google Gemini API
- CSS3 with gradients and animations
