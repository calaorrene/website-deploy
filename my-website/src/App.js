import './App.css';
import './ModernButton.css';
import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';

function App() {
  const [page, setPage] = useState('Home');
  const [navOpen, setNavOpen] = useState(false);

  const renderPage = () => {
    switch (page) {
      case 'Home':
        return <Home />;
      case 'Blog':
        return <Blog />;
      case 'Services':
        return <Services />;
      case 'Gallery':
        return <Gallery />;
      case 'About Us':
        return <AboutUs />;
      default:
        return <Home />;
    }
  };

  const handleNavClick = (pageName) => {
    setPage(pageName);
    setNavOpen(false);
  };

  return (
    <div>
      <header className="main-header">
        <nav className="main-nav">
          <div className="logo">
            {/* Replace with <img src="logo.png" alt="Logo" style={{ height: 40 }} /> for an image logo */}
            MyLogo
          </div>
          <div className="hamburger">
            <Hamburger toggled={navOpen} toggle={setNavOpen} size={28} />
          </div>
          <ul className={`nav-list${navOpen ? ' open' : ''}`}>
            <li>
              <button className="modern-btn" onClick={() => handleNavClick('Home')}>Home</button>
            </li>
            <li>
              <button className="modern-btn" onClick={() => handleNavClick('Blog')}>Blog</button>
            </li>
            <li>
              <button className="modern-btn" onClick={() => handleNavClick('Services')}>Services</button>
            </li>
            <li>
              <button className="modern-btn" onClick={() => handleNavClick('Gallery')}>Gallery</button>
            </li>
            <li>
              <button className="modern-btn" onClick={() => handleNavClick('About Us')}>About Us</button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;