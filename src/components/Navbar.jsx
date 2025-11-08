import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="logo-text">Product AI</span>
        </Link>
        
        <div className="nav-links">
          {/* Dynamically add 'active' class to current page link */}
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
            Catalog
          </Link>
          <Link to="/help" className={location.pathname === '/help' ? 'active' : ''}>
            Help Centre
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
