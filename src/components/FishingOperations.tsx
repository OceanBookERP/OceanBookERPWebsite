import React from 'react';
import { 
  Anchor, 
  Ship, 
  Fuel, 
  Fish, 
  Users, 
  Coins, 
  TrendingUp, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface FishingOperationsProps {
  onOpenDemo: () => void;
}

export const FishingOperations: React.FC<FishingOperationsProps> = ({ onOpenDemo }) => {
  const operationsHighlights = [
    {
      icon: Ship,
      title: 'Fleet & Vessel Registry',
      desc: 'Maintain detailed vessel records with marine registration numbers, engine horsepower, gross tonnage, harbor base, and licensing permits.',
    },
    {
      icon: Fuel,
      title: 'Trip Expense Ledger',
      desc: 'Accurately itemize voyage provisioning expenses: diesel fuel, ice blocks, food rations, net repair, port fees, and advance cash to crew.',
    },
    {
      icon: Fish,
      title: 'Catch & Landing Entry',
      desc: 'Direct landing intake at the jetty. Record species, weight (KG/Tons), quality condition, and landing harbor with automatic stock injection.',
    },
    {
      icon: Users,
      title: 'Crew Share & Wage Settlement',
      desc: 'Flexible crew settlement calculation: calculate gross revenue, subtract trip operational expenses, compute boat owner share, and settle crew balance.',
    },
    {
      icon: Coins,
      title: 'Direct Link to Sales Invoices',
      desc: 'Seamlessly link landed catches directly into wholesale sales invoices or auction records with zero duplicate re-entry.',
    },
    {
      icon: TrendingUp,
      title: 'Net Trip Profitability',
      desc: 'Instant financial insight per voyage. View gross catch revenue against total diesel, ice, provisioning, and crew payout for clean net profit analysis.',
    },
  ];

  return (
    <section id="operations" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Anchor size={14} />
            <span>Maritime Fleet Module</span>
          </div>
          <h2 className="section-title">
            From Sea to Sale: Complete Fishing Operations Management
          </h2>
          <p className="section-subtitle">
            Most generic accounting packages cannot handle marine voyages, variable trip expenses, jetty landings, and crew percentage shares. OceanBookERP is purpose-built to connect your fleet with your financial ledger.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid-3" style={{ marginBottom: '48px' }}>
          {operationsHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card"
                style={{
                  border: '1px solid var(--color-slate-200)',
                  backgroundColor: '#ffffff',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-ocean-50)',
                    border: '1px solid var(--color-ocean-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-ocean-700)',
                    marginBottom: '16px',
                  }}
                >
                  <Icon size={22} />
                </div>

                <h3
                  style={{
                    fontSize: '1.18rem',
                    fontWeight: 700,
                    color: 'var(--color-navy-950)',
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--color-slate-600)',
                    lineHeight: 1.55,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--color-navy-950) 0%, var(--color-navy-900) 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            color: '#ffffff',
            border: '1px solid rgba(45, 212, 191, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--color-ocean-400)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '8px',
              }}
            >
              <Sparkles size={14} />
              <span>Full Financial Transparency</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
              Connect Every Boat Voyage Directly to Your Profit & Loss
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--color-slate-300)', lineHeight: 1.55 }}>
              No more manual notebook ledgers or delayed crew settlement disputes. Maintain accurate diesel consumption, catch intake logs, and crew settlements right at the landing dock.
            </p>
          </div>

          <button onClick={onOpenDemo} className="btn btn-primary btn-lg">
            <span>Explore Fishing Module</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
