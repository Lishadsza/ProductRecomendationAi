import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../products';
import { getRecommendations } from '../geminiService';
import './Products.css';

function Products() {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAll, setShowAll] = useState(true);

  const searchIcon = (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '24px', height: '24px', marginRight: '8px' }}>
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );

  const rocketIcon = (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px', marginRight: '6px' }}>
      <path d="M12 2.5s4.5 2.04 4.5 10.5c0 2.49-1.04 5.57-1.6 7H9.1c-.56-1.43-1.6-4.51-1.6-7C7.5 4.54 12 2.5 12 2.5zm2 8.5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-7 7h10v2H7v-2z" />
    </svg>
  );

  const refreshIcon = (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px', marginRight: '6px' }}>
      <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" />
    </svg>
  );

  // Auto-execute search if query passed from Home page via router state
  useEffect(() => {
    if (location.state?.searchQuery) {
      const searchQuery = location.state.searchQuery;
      setQuery(searchQuery);
      if (searchQuery) {
        handleSearch(searchQuery);
      }
    }
  }, [location.state]);

  const handleSearch = async (searchQuery) => {
    setLoading(true);
    setError('');
    setShowAll(false);

    try {
      const results = await getRecommendations(searchQuery, products);
      setRecommendations(results);
      if (results.length === 0) {
        setError('No products match your preferences. Try a different query.');
      }
    } catch (err) {
      setError(err.message || 'Failed to get recommendations.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    handleSearch(query);
  };

  const handleReset = () => {
    setQuery('');
    setRecommendations([]);
    setError('');
    setShowAll(true);
  };

  const displayProducts = showAll ? products : recommendations;

  return (
    <div className="products-page">
      <div className="search-header">
        <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '40px', height: '40px' }}>
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          AI Product Search
        </h1>
        <p>Find exactly what you need with smart recommendations</p>

        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try: 'Gaming laptop under ₹70000' or 'Best Samsung smartwatch' or 'Budget fitness tracker'"
            disabled={loading}
            className="search-input"
          />
          <button type="submit" disabled={loading} className="search-btn">
            {loading ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px', marginRight: '6px', animation: 'spin 1s linear infinite' }}>
                  <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" />
                </svg>
                Searching...
              </span>
            ) : (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {rocketIcon}
                Search
              </span>
            )}
          </button>
          {!showAll && (
            <button type="button" onClick={handleReset} className="reset-btn">
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {refreshIcon}
                Show All
              </span>
            </button>
          )}
        </form>

        {error && <div className="error-msg">{error}</div>}
      </div>

      <div className="products-container">
        {loading ? (
          <div className="loading-container">
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '60px', height: '60px', animation: 'spin 1s linear infinite', color: '#0d7377' }}>
              <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" />
            </svg>
            <p className="loading-text">Searching for products...</p>
          </div>
        ) : (
          <>
            <h2 className="section-title">
              {showAll ? `All Products (${displayProducts.length})` : `Recommended (${displayProducts.length})`}
            </h2>

            <div className="products-grid">
              {displayProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-header">
                    <span className="product-category">{product.category}</span>
                  </div>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-features">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {displayProducts.length === 0 && (
              <p className="no-products">No products to display</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Products;
