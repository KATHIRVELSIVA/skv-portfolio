import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-150px 0px -150px 0px', threshold: 0 }
    );
    
    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: isScrolled ? (isDark ? 'rgba(20, 20, 25, 0.95)' : 'rgba(250, 248, 245, 0.95)') : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? `1px solid ${isDark ? 'var(--bg-dark-200)' : 'var(--bg-oat-200)'}` : 'none',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: '0 1.5rem'
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem',
          fontSize: '0.875rem'
        }}
      >
        <button
          onClick={() => scrollToSection('hero')}
          className="nav-brand"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            fontWeight: 600,
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            flexShrink: 0
          }}
        >
          K
        </button>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {!isMobile && navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: activeSection === item.id ? 500 : 400,
                padding: '0.5rem',
                borderBottom: activeSection === item.id ? '2px solid var(--color-sage)' : '2px solid transparent',
                fontSize: '0.875rem',
                fontFamily: 'var(--font-sans)'
              }}
            >
              {item.label}
            </button>
          ))}

          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                padding: '0.4rem',
                fontSize: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s ease',
              }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          )}

          <button
            onClick={toggleTheme}
            title="Toggle dark mode"
            className="theme-toggle-btn"
            style={{
              border: `1px solid ${isDark ? 'var(--bg-dark-200)' : 'var(--bg-oat-200)'}`,
              cursor: 'pointer',
              padding: '0.4rem 0.6rem',
              fontFamily: 'monospace',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '2px'
            }}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && isMobileMenuOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            backgroundColor: isDark ? 'rgba(20, 20, 25, 0.98)' : 'rgba(250, 248, 245, 0.98)',
            borderTop: `1px solid ${isDark ? 'var(--bg-dark-200)' : 'var(--bg-oat-200)'}`,
            animation: 'slideDown 0.2s ease'
          }}
        >
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-mobile-link ${activeSection === item.id ? 'active' : ''}`}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontWeight: activeSection === item.id ? 500 : 400,
                padding: '0.75rem 1.5rem',
                textAlign: 'left',
                fontSize: '0.875rem',
                fontFamily: 'var(--font-sans)',
                borderBottom: idx < navItems.length - 1 ? `1px solid ${isDark ? 'var(--bg-dark-200)' : 'var(--bg-oat-200)'}` : 'none',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
