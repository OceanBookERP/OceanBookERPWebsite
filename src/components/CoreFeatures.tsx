import React, { useState } from 'react';
import {
  Building2,
  Boxes,
  Receipt,
  Landmark,
  Anchor,
  Truck,
  FileSpreadsheet,
  Layers,
  Check
} from 'lucide-react';

export const CoreFeatures: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const featureGroups = [
    {
      id: 'business',
      name: 'Business Management',
      icon: Building2,
      shortDesc: 'Foundational company and unified party directory for all commercial seafood operations.',
      capabilities: [
        {
          title: 'Company Management',
          desc: 'Manage company profiles, legal credentials, GSTIN, PAN, state codes, and financial year opening/closing periods.',
        },
        {
          title: 'Unified Party Directory',
          desc: 'Single comprehensive master unifying customers, suppliers, commission agents, transporters, and vessel crew.',
        },
        {
          title: 'Product & Seafood Masters',
          desc: 'Define marine catalog linkages connecting species, quality grades, count sizes, UOM units, and standard pricing.',
        },
        {
          title: 'Multi-Company Support',
          desc: 'Host multiple distinct businesses or sister firms within one system with dedicated company data isolation.',
        },
      ],
    },
    {
      id: 'inventory',
      name: 'Seafood Inventory',
      icon: Boxes,
      shortDesc: 'Multi-dimensional seafood stock tracking with species, grades, sizes, and batch lot traceability.',
      capabilities: [
        {
          title: 'Seafood Inventory Tracking',
          desc: 'Real-time stock valuation across fresh, frozen, dried, and live physical conditions.',
        },
        {
          title: 'Stock Movements & Ledger',
          desc: 'Audited inward and outward stock movements with complete transaction history and zero phantom quantities.',
        },
        {
          title: 'Species, Grades & Sizes',
          desc: 'Granular marine taxonomy: species vernacular/scientific names, export quality grades, and count brackets.',
        },
        {
          title: 'Units & Lot Tracking',
          desc: 'Multi-unit measurements (KG, Ton, Box, Crate, Pcs) with decimal precision and batch/lot allocation.',
        },
      ],
    },
    {
      id: 'sales-purchase',
      name: 'Sales & Purchases',
      icon: Receipt,
      shortDesc: 'Complete commercial procurement and sales pipeline with tax invoices and return adjustments.',
      capabilities: [
        {
          title: 'Sales Invoicing',
          desc: 'Fast tax invoicing with multi-line item entries, party billing/shipping addresses, and instant ledger sync.',
        },
        {
          title: 'Purchase Bills',
          desc: 'Raw catch and bulk inventory purchase recording with supplier bill tracking and unit cost allocation.',
        },
        {
          title: 'Sales & Purchase Returns',
          desc: 'Integrated Credit Notes and Debit Notes handling product returns and price adjustments accurately.',
        },
        {
          title: 'GST & Tax Configuration',
          desc: 'Flexible CGST, SGST, IGST calculations or tax-exempt classifications depending on business requirements.',
        },
      ],
    },
    {
      id: 'accounting',
      name: 'Accounting & Ledgers',
      icon: Landmark,
      shortDesc: 'Rigorous double-entry accounting engine fully integrated with seafood operational workflows.',
      capabilities: [
        {
          title: 'Double-Entry Accounting',
          desc: 'Strict Tally-standard accounting architecture with automated vouchers for all operational transactions.',
        },
        {
          title: 'Chart of Accounts & Ledgers',
          desc: 'Hierarchical account groups (Asset, Liability, Income, Expense) with custom general ledgers and opening balances.',
        },
        {
          title: 'Receipts & Payments',
          desc: 'Treasury vouchers for Cash, Bank, Cheque, and Online transfers with party bill adjustment reconciliation.',
        },
        {
          title: 'Financial Statements',
          desc: 'Real-time Trial Balance, Profit & Loss Statement, and Balance Sheet with Dr/Cr reconciliation.',
        },
      ],
    },
    {
      id: 'fishing',
      name: 'Fishing Operations',
      icon: Anchor,
      shortDesc: 'From sea to sale: vessel management, trip logs, catch landings, crew settlements, and trip profitability.',
      capabilities: [
        {
          title: 'Boat & Fleet Management',
          desc: 'Vessel master records including registration numbers, engine horsepower, license details, and capacity.',
        },
        {
          title: 'Fishing Trips & Voyages',
          desc: 'Log multi-day trips with departure/arrival timestamps, sea zone tracking, and voyage conditions.',
        },
        {
          title: 'Catch & Landing Recording',
          desc: 'Direct landing data entry by species, weight, and port of arrival feeding directly into warehouse inventory.',
        },
        {
          title: 'Trip Expenses & Crew Settlement',
          desc: 'Track trip operational costs (diesel, ice, food, bait) and compute crew shares, advances, and net trip profitability.',
        },
      ],
    },
    {
      id: 'dispatch',
      name: 'Dispatch & Transport',
      icon: Truck,
      shortDesc: 'Connected logistics and distribution management linking sales orders directly to transport delivery.',
      capabilities: [
        {
          title: 'Dispatch Management',
          desc: 'Convert sales invoices into dispatch notes without creating duplicate warehouse stock deductions.',
        },
        {
          title: 'Transporter, Vehicle & Driver',
          desc: 'Maintain dedicated transporter master directories with vehicle registration, driver contact, and freight terms.',
        },
        {
          title: 'Freight & Delivery Status',
          desc: 'Track logistics lifecycle: Draft, Loaded, Dispatched, In-Transit, Delivered, and Returned.',
        },
        {
          title: 'Logistics Tracking Reports',
          desc: 'Comprehensive dispatch registers with destination party and carrier tracking for cold-chain assurance.',
        },
      ],
    },
    {
      id: 'reports',
      name: 'Reports & Control',
      icon: FileSpreadsheet,
      shortDesc: 'Actionable executive business intelligence, inventory audits, and system data reliability.',
      capabilities: [
        {
          title: 'Business & Sales Registers',
          desc: 'Chronological sales and purchase registers, party-wise transaction summaries, and bill-wise aging.',
        },
        {
          title: 'Inventory Valuation Reports',
          desc: 'Real-time species stock balance, reorder tracking, and batch movement audit trails.',
        },
        {
          title: 'Trip Economics & Analytics',
          desc: 'Vessel-wise profitability reports comparing catch revenue against operational diesel, ice, and crew costs.',
        },
        {
          title: 'Backup, Restore & Audit Logs',
          desc: 'Reliable local database backup, instant restore, and comprehensive user activity audit trails.',
        },
      ],
    },
  ];

  const currentGroup = featureGroups[activeCategory];
  const CurrentIcon = currentGroup.icon;

  return (
    <section id="features" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>Complete Feature Suite</span>
          </div>
          <h2 className="section-title">
            Engineered Specifically for Seafood Operations
          </h2>
          <p className="section-subtitle">
            Every capability in OceanBookERP is designed around the actual day-to-day workflow of seafood trading, processing, accounting, and fleet operations.
          </p>
        </div>

        {/* Feature Category Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          {featureGroups.map((group, index) => {
            const Icon = group.icon;
            const isActive = activeCategory === index;
            return (
              <button
                key={group.id}
                onClick={() => setActiveCategory(index)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  backgroundColor: isActive ? 'var(--color-navy-900)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--color-slate-700)',
                  border: isActive ? '1px solid var(--color-navy-900)' : '1px solid var(--color-slate-200)',
                  boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <Icon size={16} style={{ color: isActive ? 'var(--color-ocean-400)' : 'var(--color-slate-500)' }} />
                <span>{group.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Feature Showcase Box */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            border: '1px solid var(--color-slate-200)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Header of Active Tab */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              paddingBottom: '28px',
              borderBottom: '1px solid var(--color-slate-100)',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-ocean-50)',
                border: '1px solid var(--color-ocean-100)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-ocean-700)',
                flexShrink: 0,
              }}
            >
              <CurrentIcon size={28} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-950)' }}>
                {currentGroup.name}
              </h3>
              <p style={{ color: 'var(--color-slate-600)', fontSize: '0.98rem', marginTop: '4px' }}>
                {currentGroup.shortDesc}
              </p>
            </div>
          </div>

          {/* 4 Capabilities Grid */}
          <div className="grid-2">
            {currentGroup.capabilities.map((cap, i) => (
              <div
                key={i}
                style={{
                  padding: '24px',
                  backgroundColor: 'var(--color-slate-50)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-slate-200)',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-ocean-600)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: 'var(--color-navy-950)',
                      marginBottom: '6px',
                    }}
                  >
                    {cap.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--color-slate-600)',
                      lineHeight: 1.55,
                    }}
                  >
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
