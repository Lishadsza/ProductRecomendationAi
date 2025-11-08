import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const quickLinks = [
    { 
      icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>,
      title: 'Search by Need',
      query: ''
    },
    { 
      icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/></svg>,
      title: 'Budget Buys',
      query: 'budget products under ₹30000'
    },
    { 
      icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>,
      title: 'Top Rated by AI',
      query: 'premium flagship products'
    },
    { 
      icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>,
      title: 'Tech & Gadgets',
      query: 'phone tablet laptop'
    },
    { 
      icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>,
      title: 'Home & Lifestyle',
      query: 'tv smartwatch headphones'
    },
    { 
      icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>,
      title: "What's Trending",
      query: 'samsung apple oneplus'
    }
  ];

  // Navigate to Products page with pre-filled search query via router state
  const handleQuickLinkClick = (query) => {
    navigate('/products', { state: { searchQuery: query } });
  };

  const howItWorks = [
    {
      icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>,
      step: 'Step 1',
      title: 'Tell Us Your Needs',
      description: 'Describe what you\'re looking for in natural language'
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>,
      step: 'Step 2',
      title: 'AI Matches Features',
      description: 'Our AI analyzes products to find the best matches'
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>,
      step: 'Step 3',
      title: 'Get Personalized Picks',
      description: 'Receive curated recommendations just for you'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Smart Product Discovery</h1>
          <p>AI-powered recommendations tailored to your needs</p>
          <Link to="/products" className="cta-button">
            Start AI Discovery
          </Link>
        </div>
      </section>

      <section className="quick-links">
        <div className="quick-links-grid">
          {quickLinks.map((link, idx) => (
            <div 
              key={idx} 
              className="quick-link-card"
              onClick={() => handleQuickLinkClick(link.query)}
            >
              <div className="quick-link-icon">
                {link.icon}
              </div>
              <h3>{link.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <h2>How Smart Discovery Works</h2>
        <div className="steps-grid">
          {howItWorks.map((item, idx) => (
            <div key={idx} className="step-card">
              <div className="step-icon">
                {item.icon}
              </div>
              <span className="step-label">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
