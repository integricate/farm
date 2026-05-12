import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          🐔 Umesh Poultry Farm
        </Link>
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/#about" onClick={closeMobileMenu}>About</Link></li>
          <li><Link to="/#services" onClick={closeMobileMenu}>Services</Link></li>
          <li><Link to="/#contact" onClick={closeMobileMenu}>Contact</Link></li>
          <li><Link to="/docs" onClick={closeMobileMenu}>Documents</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>Welcome to Umesh Poultry Farm</h1>
        <p>Quality Poultry Products Since 2020 | Trusted by Hundreds of Customers Across Nepal</p>
        <div>
          <a href="#contact" className="btn btn-primary">Contact Us</a>
          <Link to="/docs" className="btn btn-secondary">View Documents</Link>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title fade-in">About Us</h2>
        <p className="section-subtitle fade-in">Committed to Quality and Excellence Since 2020</p>
        <div className="about-grid">
          <div className="about-card fade-in">
            <div className="about-card-icon">🏆</div>
            <h3>Quality First</h3>
            <p>We maintain the highest standards in poultry farming, ensuring healthy and quality products for our customers.</p>
          </div>
          <div className="about-card fade-in">
            <div className="about-card-icon">🌱</div>
            <h3>Sustainable Practices</h3>
            <p>Our farm follows eco-friendly and sustainable farming practices to protect the environment.</p>
          </div>
          <div className="about-card fade-in">
            <div className="about-card-icon">👨‍🌾</div>
            <h3>Expert Team</h3>
            <p>Our experienced team ensures proper care and management of our poultry for optimal production.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title fade-in">Our Products & Services</h2>
        <p className="section-subtitle fade-in">Fresh and Healthy Poultry Products</p>
        <div className="services-grid">
          <div className="service-card fade-in">
            <div style={{ fontSize: '3rem' }}>🥚</div>
            <h3>Fresh Eggs</h3>
            <p>Daily fresh eggs from healthy hens, available in bulk quantities.</p>
          </div>
          <div className="service-card fade-in">
            <div style={{ fontSize: '3rem' }}>🐔</div>
            <h3>Live Birds</h3>
            <p>Healthy live chickens and birds for breeding or commercial purposes.</p>
          </div>
          <div className="service-card fade-in">
            <div style={{ fontSize: '3rem' }}>🍗</div>
            <h3>Dressed Chicken</h3>
            <p>Clean and hygienically processed chicken ready for cooking.</p>
          </div>
          <div className="service-card fade-in">
            <div style={{ fontSize: '3rem' }}>📦</div>
            <h3>Bulk Supply</h3>
            <p>Regular supply contracts for restaurants, hotels, and retailers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title fade-in">Get In Touch</h2>
        <p className="section-subtitle fade-in">We'd Love to Hear From You</p>
        <div className="contact-info">
          <div className="contact-item fade-in">
            <div className="contact-item-icon">📞</div>
            <div className="contact-item-text">
              <h4>Phone</h4>
              <p>+977 9767579040</p>
            </div>
          </div>
          <div className="contact-item fade-in">
            <div className="contact-item-icon">✉️</div>
            <div className="contact-item-text">
              <h4>Email</h4>
              <p>info@umeshpoultryfarm.com.np</p>
            </div>
          </div>
          <div className="contact-item fade-in">
            <div className="contact-item-icon">💼</div>
            <div className="contact-item-text">
              <h4>LinkedIn</h4>
              <p>linkedin.com/company/umeshpoultryfarm</p>
            </div>
          </div>
          <div className="contact-item fade-in">
            <div className="contact-item-icon">📍</div>
            <div className="contact-item-text">
              <h4>Location</h4>
              <p>Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Umesh Poultry Farm</h3>
            <p>Quality poultry products since 2020. Committed to excellence and customer satisfaction.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Documents</h3>
            <ul>
              <li><Link to="/docs">All Documents</Link></li>
              <li><Link to="/docs">Tax Clearance</Link></li>
              <li><Link to="/docs">Financial Reports</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li>📞 +977 9767579040</li>
              <li>✉️ info@umeshpoultryfarm.com.np</li>
              <li>💼 LinkedIn Profile</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Umesh Poultry Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
