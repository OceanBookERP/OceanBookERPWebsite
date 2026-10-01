import React from 'react';
import { 
  Building, 
  Cpu, 
  Database, 
  Compass
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Building size={14} />
            <span>About OceanBookERP</span>
          </div>
          <h2 className="section-title">
            Purpose-Built Business Software for Seafood Operations
          </h2>
          <p className="section-subtitle">
            OceanBookERP is a dedicated commercial desktop enterprise resource planning and accounting application engineered specifically for seafood traders, wholesalers, processors, exporters, and fishing fleet operators.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '40px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Text */}
          <div>
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--color-navy-950)',
                marginBottom: '16px',
              }}
            >
              Combining Desktop Reliability with Deep Industry Workflows
            </h3>

            <p
              style={{
                fontSize: '0.96rem',
                color: 'var(--color-slate-600)',
                lineHeight: 1.65,
                marginBottom: '18px',
              }}
            >
              The seafood trade operates in high-pressure environments: noisy harbor docks, fast-paced fish auctions, cold storage facilities, and fluctuating international exchange markets. Standard generic ERPs lack support for marine species taxonomy, count/size brackets, voyage-based trip expense settlements, and cold-chain logistics.
            </p>

            <p
              style={{
                fontSize: '0.96rem',
                color: 'var(--color-slate-600)',
                lineHeight: 1.65,
                marginBottom: '24px',
              }}
            >
              OceanBookERP unifies this entire workflow under one cohesive system. It integrates double-entry accounting precision with specialized maritime fleet management, inventory lot tracking, and sales dispatch operations.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              <div
                style={{
                  padding: '16px',
                  backgroundColor: 'var(--color-slate-50)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-slate-200)',
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--color-navy-950)', fontSize: '0.94rem', marginBottom: '4px' }}>
                  Local Data Sovereignty
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-slate-600)' }}>
                  All company records are stored locally with zero dependence on remote cloud servers for core billing.
                </div>
              </div>

              <div
                style={{
                  padding: '16px',
                  backgroundColor: 'var(--color-slate-50)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-slate-200)',
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--color-navy-950)', fontSize: '0.94rem', marginBottom: '4px' }}>
                  Double-Entry Precision
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-slate-600)' }}>
                  Strict financial accounting engine that produces balanced ledgers, Trial Balances, and P&L statements.
                </div>
              </div>
            </div>
          </div>

          {/* Right Pillar Card */}
          <div
            style={{
              backgroundColor: 'var(--color-navy-950)',
              borderRadius: 'var(--radius-xl)',
              padding: '36px',
              color: '#ffffff',
              border: '1px solid rgba(45, 212, 191, 0.25)',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <img
                src="/oceanbook-logo.png"
                alt="Logo"
                style={{ width: '36px', height: '36px', objectFit: 'contain' }}
              />
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
                  OceanBook<span style={{ color: 'var(--color-ocean-400)' }}>ERP</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-400)' }}>
                  Core System Principles
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', gap: '14px' }}>
                <Cpu size={22} style={{ color: 'var(--color-ocean-400)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                    Engineered for Desktop Speed
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-slate-300)', marginTop: '2px' }}>
                    Instant keyboard navigation, fast transaction lookups, and sub-millisecond local query responses.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px' }}>
                <Database size={22} style={{ color: 'var(--color-ocean-400)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                    Resilient Local Data Storage
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-slate-300)', marginTop: '2px' }}>
                    ACID-compliant storage engine with automated local database backups and reliable transaction safety.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px' }}>
                <Compass size={22} style={{ color: 'var(--color-ocean-400)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                    Unified Business Ecosystem
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-slate-300)', marginTop: '2px' }}>
                    Single interconnected platform serving company masters, parties, stock, sales, trips, and dispatch.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
