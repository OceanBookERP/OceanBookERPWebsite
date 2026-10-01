import React, { useState } from 'react';
import { 
  Monitor, 
  Anchor, 
  Truck, 
  Landmark, 
  Boxes, 
  CheckCircle2
} from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  const screenModules = [
    {
      id: 'dashboard',
      label: 'Executive Dashboard',
      icon: Monitor,
      title: 'Real-Time Seafood Business Intelligence',
      description: 'Unified operational dashboard showing active fishing voyages, daily catch weight landed, inventory valuation across cold storage lots, and today’s sales billing summary.',
      highlights: [
        'Live fleet voyage status with vessel tracking',
        'Species-wise stock holding by weight and value',
        'Daily sales turnover vs. procurement totals',
        'Immediate cash & bank liquidity summary',
      ],
      systemInfo: 'Module: Executive Dashboard • Real-time Data Persistence • Instant Local Aggregations',
    },
    {
      id: 'seafood',
      label: 'Seafood & Products Master',
      icon: Boxes,
      title: 'Marine Taxonomy & Multi-Unit Product Catalog',
      description: 'Structured product management specifically configured for marine species (vernacular & scientific names), quality grades (Export Grade A, B), count size brackets (e.g. 10/20, 20/30 count/KG), and physical conditions (Fresh, Frozen, Dried, Live).',
      highlights: [
        'Species master with vernacular and scientific classification',
        'Standard export grading specifications',
        'Count/size bracket matrix with decimal UOM support',
        'Standard cost, selling price and GST rate configuration',
      ],
      systemInfo: 'Module: Seafood Masters • Relational Catalog Linkage • Precision Units',
    },
    {
      id: 'trips',
      label: 'Fishing Trips & Crew',
      icon: Anchor,
      title: 'Voyage Log, Catch Intake & Crew Settlement',
      description: 'Comprehensive voyage management tracking multi-day sea trips, provisioning costs (diesel, ice, food supplies), species-wise catch landings, and automated crew revenue share/salary calculations.',
      highlights: [
        'Departure & return timestamp logs with harbor records',
        'Itemized trip expenses (Diesel, Ice, Rations, Advance)',
        'Catch landing weight recording directly to stock',
        'Crew settlement calculation with advance deductions',
      ],
      systemInfo: 'Module: Fishing Trips Hub • Harbor Landings • Crew Settlements',
    },
    {
      id: 'dispatch',
      label: 'Dispatch & Logistics',
      icon: Truck,
      title: 'Carrier Assignment & Cold-Chain Tracking',
      description: 'Logistics coordination linking billed sales invoices to transport carriers, refrigerated vehicles, and drivers without creating duplicate warehouse stock deductions.',
      highlights: [
        'Direct link to billed tax invoices',
        'Transporter directory with vehicle and driver assignment',
        'Milestone tracking: Draft → Loaded → Dispatched → In-Transit → Delivered',
        'Carrier freight billing and delivery status audit',
      ],
      systemInfo: 'Module: Dispatch Hub • Transporter Master • Zero Stock Duplication',
    },
    {
      id: 'accounting',
      label: 'Financial Statements',
      icon: Landmark,
      title: 'Connected Double-Entry Accounting & Ledgers',
      description: 'Strict double-entry accounting with standard chart of account groups, party ledgers, bill-by-bill outstanding aging, Trial Balance Dr/Cr reconciliation, Profit & Loss, and Balance Sheet.',
      highlights: [
        'Automatic double-entry posting from sales and purchases',
        'Treasury vouchers (Receipts & Payments for Cash/Bank)',
        'Bill-wise aging analysis (0-30, 31-60, 61-90, 90+ days)',
        'Synchronized Trial Balance, Profit & Loss, and Balance Sheet',
      ],
      systemInfo: 'Module: Accounting Master • Double-Entry Precision • Dr/Cr Balanced',
    },
  ];

  const currentScreen = screenModules.find((s) => s.id === activeTab) || screenModules[0];
  const CurrentIcon = currentScreen.icon;

  return (
    <section id="showcase" className="section section-dark">
      <div className="container">
        <div className="section-header">
          <div className="section-badge section-badge-dark">
            <Monitor size={14} style={{ color: 'var(--color-ocean-400)' }} />
            <span>Desktop ERP Showcase</span>
          </div>
          <h2 className="section-title">
            Engineered for Commercial Speed & Precision
          </h2>
          <p className="section-subtitle">
            OceanBookERP runs as a dedicated high-performance desktop application with zero cloud lag, native desktop reliability, and an intuitive layout designed for fast day-to-day operations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '36px',
          }}
        >
          {screenModules.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  backgroundColor: isActive ? 'var(--color-ocean-600)' : 'rgba(7, 43, 68, 0.6)',
                  color: isActive ? '#ffffff' : 'var(--color-slate-300)',
                  border: isActive ? '1px solid var(--color-ocean-400)' : '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.2s ease',
                }}
              >
                <Icon size={16} style={{ color: isActive ? '#ffffff' : 'var(--color-ocean-400)' }} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop Application Frame Container */}
        <div
          style={{
            background: 'linear-gradient(180deg, #072b44 0%, #041c2c 100%)',
            border: '1px solid rgba(45, 212, 191, 0.3)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
          }}
        >
          {/* Desktop Shell Titlebar */}
          <div
            style={{
              height: '44px',
              backgroundColor: '#020d18',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span style={{ marginLeft: '12px', fontSize: '0.8rem', color: 'var(--color-slate-400)', fontWeight: 500 }}>
                OceanBookERP Desktop • Commercial Release
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(15, 118, 110, 0.4)',
                  color: 'var(--color-ocean-300)',
                  fontWeight: 600,
                }}
              >
                Commercial Edition
              </span>
            </div>
          </div>

          {/* Module Detailed Content Panel */}
          <div
            style={{
              padding: '40px',
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '36px',
              alignItems: 'center',
            }}
            className="showcase-content-grid"
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(15, 118, 110, 0.3)',
                  border: '1px solid rgba(45, 212, 191, 0.25)',
                  color: 'var(--color-ocean-300)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '16px',
                }}
              >
                <CurrentIcon size={14} />
                <span>{currentScreen.label}</span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px', lineHeight: 1.3 }}>
                {currentScreen.title}
              </h3>

              <p style={{ fontSize: '1rem', color: 'var(--color-slate-300)', lineHeight: 1.6, marginBottom: '28px' }}>
                {currentScreen.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {currentScreen.highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(45, 212, 191, 0.2)',
                        border: '1px solid var(--color-ocean-400)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-ocean-300)',
                        flexShrink: 0,
                      }}
                    >
                      <CheckCircle2 size={13} />
                    </div>
                    <span style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 500 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Product Capability Summary Card */}
            <div
              style={{
                backgroundColor: 'rgba(2, 13, 24, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <img src="/oceanbook-logo.png" alt="Logo" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>OceanBookERP System Suite</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-slate-400)' }}>Desktop Business Performance</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem' }}>
                  <span style={{ color: 'var(--color-slate-400)' }}>Industry Classification</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Marine Species Taxonomy</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem' }}>
                  <span style={{ color: 'var(--color-slate-400)' }}>Stock Synchronization</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Multi-Unit Lot Precision</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem' }}>
                  <span style={{ color: 'var(--color-slate-400)' }}>Financial Accounting</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Strict Double-Entry Standard</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem' }}>
                  <span style={{ color: 'var(--color-slate-400)' }}>Multi-Company</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Strict Entity Data Isolation</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem' }}>
                  <span style={{ color: 'var(--color-slate-400)' }}>Audit & Control</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Voucher & Log Verification</span>
                </div>
              </div>

              <div
                style={{
                  padding: '12px',
                  backgroundColor: 'rgba(15, 118, 110, 0.2)',
                  border: '1px solid rgba(45, 212, 191, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.78rem',
                  color: 'var(--color-ocean-300)',
                  lineHeight: 1.45,
                }}
              >
                {currentScreen.systemInfo}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .showcase-content-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
};
