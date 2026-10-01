import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Operations', href: '#operations' },
    { label: 'Accounting', href: '#accounting' },
    { label: 'Reports', href: '#reports' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--header-height)',
        zIndex: 1000,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: scrolled ? 'rgba(4, 28, 44, 0.95)' : 'rgba(4, 28, 44, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(45, 212, 191, 0.2)' : '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.25)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Exact Brand Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <img
            src="/oceanbook-logo.png"
            alt="OceanBookERP Logo"
            style={{
              width: '40px',
              height: '40px',
              objectFit: 'contain',
              display: 'block',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 800,
                letterSpacing: '-0.01em',
                color: '#ffffff',
                lineHeight: 1.1,
              }}
            >
              OceanBook<span style={{ color: 'var(--color-ocean-400)' }}>ERP</span>
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                color: 'var(--color-slate-400)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontWeight: 600,
              }}
            >
              Seafood Commercial ERP
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.92rem',
                fontWeight: 500,
                color: 'var(--color-slate-300)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-300)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={onOpenDemo}
            className="btn btn-primary btn-sm"
            style={{
              display: 'none',
            }}
            id="desktop-cta-btn"
          >
            <span>Request a Demo</span>
            <ArrowRight size={15} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              color: '#ffffff',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
            className="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-navy-950)',
            borderBottom: '1px solid rgba(45, 212, 191, 0.2)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 20px 30px rgba(0,0,0,0.5)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              style={{
                fontSize: '1.05rem',
                fontWeight: 500,
                color: 'var(--color-slate-200)',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDemo();
            }}
            className="btn btn-primary"
            style={{ marginTop: '8px', width: '100%' }}
          >
            <span>Request a Demo</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          #desktop-cta-btn {
            display: inline-flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
