'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <div className="icon">M</div>
            <span>Makesworth</span>
          </Link>
          
          <div className="nav-links">
            <Link href="#about">About</Link>
            <Link href="#tools">Free Tools</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact" className="nav-cta">Free Consultation</Link>
          </div>

          <button 
            className="mob-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      
      {menuOpen && (
        <div className="mobile-menu" style={{ background: 'var(--navy)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
           <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
           <Link href="#tools" onClick={() => setMenuOpen(false)}>Tools</Link>
           <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}