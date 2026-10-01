import React from 'react';
import { 
  ArrowRight, 
  Layers, 
  Anchor, 
  Boxes, 
  Receipt, 
  Truck, 
  Building2,
  Database
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--header-height) + 60px)',
        paddingBottom: '90px',
        background: 'linear-gradient(180deg, #020d18 0%, #041c2c 60%, #072b44 100%)',
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Maritime Grid Background Accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 50% 20%, rgba(15, 118, 110, 0.18) 0%, transparent 60%),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Hero Left Content */}
          <div>
            <div
              className="section-badge section-badge-dark"
              style={{ marginBottom: '20px' }}
            >
              <Anchor size={14} style={{ color: 'var(--color-ocean-400)' }} />
              <span>Commercial Seafood ERP Solution</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '24px',
                color: '#ffffff',
              }}
            >
              Smart ERP & Accounting Software for the{' '}
              <span
                style={{
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(90deg, #2dd4bf 0%, #38bdf8 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                Seafood Industry
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.65,
                color: 'var(--color-slate-300)',
                marginBottom: '36px',
                maxWidth: '600px',
              }}
            >
              Manage your seafood business, inventory, sales, accounting, fishing operations and dispatch from one connected system.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '44px',
              }}
            >
              <button
                onClick={onOpenDemo}
                className="btn btn-primary btn-lg"
                style={{
                  fontSize: '1rem',
                  padding: '14px 28px',
                }}
              >
                <span>Request a Demo</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#features"
                className="btn btn-outline-white btn-lg"
                style={{
                  fontSize: '1rem',
                  padding: '14px 28px',
                }}
              >
                <span>Explore Features</span>
              </a>
            </div>

            {/* Enterprise Architectural Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              className="hero-trust-grid"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Database size={20} style={{ color: 'var(--color-ocean-400)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>Local Data Security</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-400)' }}>Zero Cloud Vendor Lock-in</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Building2 size={20} style={{ color: 'var(--color-ocean-400)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>Multi-Company</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-400)' }}>Unified Master Hub</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Layers size={20} style={{ color: 'var(--color-ocean-400)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>Full Accounting</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-400)' }}>Tally-Style Precision</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual: Connected Seafood Business Cockpit */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                background: 'rgba(7, 38, 61, 0.75)',
                border: '1px solid rgba(45, 212, 191, 0.25)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), var(--shadow-glow)',
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Window Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '18px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img
                    src="/oceanbook-logo.png"
                    alt="Logo"
                    style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                  />
                  <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                    OceanBook<span style={{ color: 'var(--color-ocean-400)' }}>ERP</span>
                  </span>
                  <span
                    style={{
                      background: 'rgba(45, 212, 191, 0.15)',
                      color: 'var(--color-ocean-300)',
                      fontSize: '0.7rem',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontWeight: 600,
                    }}
                  >
                    Enterprise Commercial
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                </div>
              </div>

              {/* Connected Modules Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Flow Block 1: Fleet & Catch Landing */}
                <div
                  style={{
                    background: 'rgba(4, 28, 44, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(15, 118, 110, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-ocean-400)',
                      }}
                    >
                      <Anchor size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>
                        Fishing Trips & Catch Landings
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-400)' }}>
                        Boat Sea Lord II • Voyage #TRP-2026-08 • 4,200 KG Landed
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#10b981',
                      background: 'rgba(16, 185, 129, 0.12)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    Trip Settlement
                  </span>
                </div>

                {/* Flow Block 2: Seafood Inventory & Grading */}
                <div
                  style={{
                    background: 'rgba(4, 28, 44, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(2, 132, 199, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-sky-400)',
                      }}
                    >
                      <Boxes size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>
                        Species, Grade & Lot Inventory
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-400)' }}>
                        Black Tiger Prawns • Grade A • 20/30 Count • Fresh Frozen
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--color-sky-300)',
                      background: 'rgba(56, 189, 248, 0.12)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    Auto Stock Sync
                  </span>
                </div>

                {/* Flow Block 3: Sales Invoicing & GST */}
                <div
                  style={{
                    background: 'rgba(4, 28, 44, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(245, 158, 11, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-gold-400)',
                      }}
                    >
                      <Receipt size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>
                        Sales Invoicing & Ledger Posting
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-400)' }}>
                        Tax Invoice #INV-8831 • GST / Tax Breakdown • Party Ledger Sync
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--color-gold-400)',
                      background: 'rgba(245, 158, 11, 0.12)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    Double-Entry Posted
                  </span>
                </div>

                {/* Flow Block 4: Dispatch & Transport Tracking */}
                <div
                  style={{
                    background: 'rgba(4, 28, 44, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(168, 85, 247, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#c084fc',
                      }}
                    >
                      <Truck size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>
                        Dispatch, Vehicle & Freight
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-400)' }}>
                        Refrigerated Van GJ-03-XX-1102 • Status: Dispatched
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#c084fc',
                      background: 'rgba(168, 85, 247, 0.12)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    In Transit
                  </span>
                </div>
              </div>

              {/* Bottom Live System Indicator */}
              <div
                style={{
                  marginTop: '18px',
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.78rem',
                  color: 'var(--color-slate-400)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      display: 'inline-block',
                      boxShadow: '0 0 8px #10b981',
                    }}
                  />
                  <span>All Operational & Financial Masters In Sync</span>
                </div>
                <span>Multi-Company Enabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-trust-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
