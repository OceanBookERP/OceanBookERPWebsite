import React, { useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-navy-950)',
        color: '#ffffff',
        borderTop: '1px solid rgba(45, 212, 191, 0.2)',
        paddingTop: '64px',
        paddingBottom: '40px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: '40px',
            marginBottom: '48px',
          }}
          className="footer-grid"
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img
                src="/oceanbook-logo.png"
                alt="OceanBookERP Logo"
                style={{ width: '38px', height: '38px', objectFit: 'contain' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1.1,
                  }}
                >
                  OceanBook<span style={{ color: 'var(--color-ocean-400)' }}>ERP</span>
                </span>
                <span style={{ fontSize: '0.68rem', color: 'var(--color-slate-400)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                  Seafood Commercial ERP
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--color-slate-400)', lineHeight: 1.6, maxWidth: '320px', marginBottom: '20px' }}>
              Smart ERP & Accounting Software for the Seafood Industry. Connecting fleets, cold storage inventory, tax invoicing, dispatch, and double-entry accounting.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--color-ocean-400)' }}>
              <ShieldCheck size={16} />
              <span>Desktop Performance • Local Data Sovereignty</span>
            </div>
          </div>

          {/* Column 1: Core Modules */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '18px' }}>
              Modules
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a href="#features" style={{ fontSize: '0.88rem', color: 'var(--color-slate-400)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-400)')}>
                  Seafood Masters & Taxonomy
                </a>
              </li>
              <li>
                <a href="#features" style={{ fontSize: '0.88rem', color: 'var(--color-slate-400)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-400)')}>
                  Inventory & Lot Tracking
                </a>
              </li>
              <li>
                <a href="#operations" style={{ fontSize: '0.88rem', color: 'var(--color-slate-400)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-400)')}>
                  Fishing Trips & Landings
                </a>
              </li>
              <li>
                <a href="#accounting" style={{ fontSize: '0.88rem', color: 'var(--color-slate-400)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-400)')}>
                  Double-Entry Ledgers
                </a>
              </li>
              <li>
                <a href="#dispatch" style={{ fontSize: '0.88rem', color: 'var(--color-slate-400)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-400)')}>
                  Dispatch & Cold Chain
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '18px' }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a href="#solutions" style={{ fontSize: '0.88rem', color: 'var(--color-slate-400)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-400)')}>
                  Seafood Traders
                </a>
              </li>
              <li>
                <a href="#solutions" style={{ fontSize: '0.88rem', color: 'var(--color-slate-400)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-400)')}>
                  Seafood Wholesalers
                </a>
              </li>
              <li>
                <a href="#solutions" style={{ fontSize: '0.88rem', color: 'var(--color-slate-400)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-400)')}>
                  Processors & Exporters
                </a>
              </li>
              <li>
                <a href="#solutions" style={{ fontSize: '0.88rem', color: 'var(--color-slate-400)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-400)')}>
                  Fishing Fleets & Boats
                </a>
              </li>
              <li>
                <a href="#multi-company" style={{ fontSize: '0.88rem', color: 'var(--color-slate-400)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-400)')}>
                  Multi-Company Setup
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Legal */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '18px' }}>
              Product & Legal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a href="#about" style={{ fontSize: '0.88rem', color: 'var(--color-slate-400)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-400)')}>
                  About OceanBookERP
                </a>
              </li>
              <li>
                <a href="#contact" style={{ fontSize: '0.88rem', color: 'var(--color-slate-400)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-400)')}>
                  Request a Demo
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal('privacy')}
                  style={{ fontSize: '0.88rem', color: 'var(--color-slate-400)', textAlign: 'left' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-400)')}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal('terms')}
                  style={{ fontSize: '0.88rem', color: 'var(--color-slate-400)', textAlign: 'left' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-400)')}
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.82rem',
            color: 'var(--color-slate-400)',
          }}
        >
          <div>
            © {new Date().getFullYear()} OceanBookERP. All rights reserved.
          </div>
          <div>
            Smart ERP & Accounting Software for the Seafood Industry.
          </div>
        </div>
      </div>

      {/* Legal Dialog Modal */}
      {legalModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(2, 13, 24, 0.85)',
            backdropFilter: 'blur(6px)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setLegalModal(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '600px',
              width: '100%',
              padding: '32px',
              position: 'relative',
              color: 'var(--color-slate-800)',
              maxHeight: '80vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLegalModal(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                padding: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-slate-100)',
                color: 'var(--color-slate-700)',
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-navy-950)', marginBottom: '16px' }}>
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>

            {legalModal === 'privacy' ? (
              <div style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-slate-600)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p>
                  OceanBookERP is committed to protecting the privacy of your business data. This website is a product information and demonstration portal.
                </p>
                <p>
                  Information submitted via demonstration inquiries (such as your name, business name, phone number, and operational interests) is utilized solely for product evaluation discussions and customer communications.
                </p>
                <p>
                  The OceanBookERP desktop software stores all operational data locally on your machine in a secure local database. We do not extract, monitor, or sell your private trade, pricing, or financial records.
                </p>
              </div>
            ) : (
              <div style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-slate-600)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p>
                  OceanBookERP is commercial business software provided for seafood industry management, inventory control, and accounting operations.
                </p>
                <p>
                  Users and businesses are responsible for verifying their tax configuration settings, invoice formatting, and financial reports in accordance with local maritime and commercial regulatory requirements.
                </p>
                <p>
                  All content, trademarks, and design elements of OceanBookERP on this website are protected.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
