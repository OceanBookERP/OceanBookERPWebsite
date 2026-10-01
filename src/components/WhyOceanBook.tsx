import React from 'react';
import { 
  Fish, 
  RefreshCw, 
  Anchor, 
  Truck, 
  BarChart3, 
  Scale, 
  CheckCircle
} from 'lucide-react';

export const WhyOceanBook: React.FC = () => {
  const problemSolutions = [
    {
      icon: Fish,
      title: 'Seafood Inventory is Unique',
      description:
        'Generic ERPs treat all items like static hardware. Seafood requires multi-dimensional tracking: marine species, quality grades, count/size brackets (e.g. 10/20, 20/30), physical states (Fresh, Frozen, Dried, Live), and lot shrinkage.',
      tag: 'Industry-Specific Taxonomy',
    },
    {
      icon: RefreshCw,
      title: 'Connected Purchases, Stock & Sales',
      description:
        'Every seafood purchase immediately updates species-wise lot balances. Invoicing draws down inventory accurately, preventing stock mismatch or double entry between the warehouse floor and sales desk.',
      tag: 'Real-time Synchronization',
    },
    {
      icon: Anchor,
      title: 'Marine Fishing Trip Economics',
      description:
        'Fishing operations involve multi-day sea trips, variable expenses (diesel, ice, food supplies, bait), catch landings, and complex crew share or wage settlements that standard software cannot model.',
      tag: 'Sea-to-Sale Traceability',
    },
    {
      icon: Truck,
      title: 'Dispatch & Logistics Tracking',
      description:
        'Seafood distribution demands tight cold-chain visibility. OceanBookERP connects sales invoices with transporters, vehicle & driver logs, freight charges, and live delivery status without duplicating inventory movements.',
      tag: 'Operational Logistics',
    },
    {
      icon: BarChart3,
      title: 'Unified Accounting & Ledgers',
      description:
        'Eliminate disjointed accounting packages and messy spreadsheets. Enjoy full double-entry accounting, party ledgers, bill-wise outstanding, aging, Trial Balance, P&L, and Balance Sheet integrated with daily trade.',
      tag: 'Financial Precision',
    },
    {
      icon: Scale,
      title: 'Multi-Company & Tax Flexibility',
      description:
        'Operate multiple seafood firms or trading entities within a single installation with complete data isolation, company-specific profiles, and configurable GST/tax compliance.',
      tag: 'Multi-Entity Control',
    },
  ];

  return (
    <section id="why" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Scale size={14} />
            <span>Why OceanBookERP</span>
          </div>
          <h2 className="section-title">
            Purpose-Built for the Complex Realities of Seafood Commerce
          </h2>
          <p className="section-subtitle">
            Generic accounting software and standard ERPs fail when dealing with marine species classifications, catch landings, cold-storage shrinkage, and trip-based crew settlements. OceanBookERP bridges the gap.
          </p>
        </div>

        <div className="grid-3">
          {problemSolutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid var(--color-slate-200)',
                  backgroundColor: '#ffffff',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-ocean-50)',
                      color: 'var(--color-ocean-700)',
                      marginBottom: '20px',
                      border: '1px solid var(--color-ocean-100)',
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      marginBottom: '12px',
                      color: 'var(--color-navy-950)',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--color-slate-600)',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: '1px solid var(--color-slate-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    className="pill pill-teal"
                    style={{ fontSize: '0.78rem' }}
                  >
                    <CheckCircle size={12} />
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
