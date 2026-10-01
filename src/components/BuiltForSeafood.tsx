import React from 'react';
import { 
  Users, 
  TrendingUp, 
  Store, 
  Factory, 
  Globe, 
  Ship, 
  Truck,
  Check
} from 'lucide-react';

export const BuiltForSeafood: React.FC = () => {
  const segments = [
    {
      icon: TrendingUp,
      title: 'Seafood Traders',
      subtitle: 'Fast Turnaround & Margins',
      desc: 'Connect fast procurement from landing centers with customer sales orders. Maintain accurate party credit ledgers, multi-unit pricing, and profit tracking per consignment.',
      features: ['Party credit period control', 'Lot-wise margin tracking', 'Rapid tax invoice generation'],
    },
    {
      icon: Store,
      title: 'Seafood Wholesalers',
      subtitle: 'Bulk Crates & Cold Storage',
      desc: 'Handle large volume movements across multiple species, crate/box conversions, dynamic daily price lists, and aging analysis of party outstanding balances.',
      features: ['Species-wise stock position', 'Multi-crate & KG conversions', 'Bill-wise payment adjustments'],
    },
    {
      icon: Factory,
      title: 'Seafood Processors',
      subtitle: 'Grading, Processing & Yield',
      desc: 'Track raw seafood catch intake, classification into species/grades/size counts, transformation into fresh/frozen/dried condition, and inventory valuation.',
      features: ['Species & grade classifications', 'Fresh to frozen tracking', 'Lot shrinkage & yield management'],
    },
    {
      icon: Globe,
      title: 'Seafood Exporters',
      subtitle: 'International Standards & Tax',
      desc: 'Support export-grade seafood specifications, container shipment dispatch, multi-currency invoicing (INR, USD, EUR, AED), and export tax compliance.',
      features: ['Export grade specifications', 'Multi-currency ledger entries', 'Container dispatch notes'],
    },
    {
      icon: Ship,
      title: 'Fishing Fleet Operators',
      subtitle: 'Voyage Logs & Crew Payouts',
      desc: 'Complete vessel and fleet management. Track multi-day fishing trips, diesel/ice operational expenses, catch landings at harbor, and crew share settlements.',
      features: ['Vessel master records', 'Trip expense accounting', 'Catch landing to inventory sync'],
    },
    {
      icon: Truck,
      title: 'Seafood Distributors & Logistics',
      subtitle: 'Cold Chain Delivery',
      desc: 'Coordinate refrigerated freight with transporter records, vehicle registration, driver details, delivery confirmations, and integrated freight accounting.',
      features: ['Transporter directory', 'Driver and vehicle assignment', 'Delivery status lifecycle'],
    },
  ];

  return (
    <section id="solutions" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Users size={14} />
            <span>Built For Your Business Model</span>
          </div>
          <h2 className="section-title">
            Tailored for Every Stakeholder in the Seafood Supply Chain
          </h2>
          <p className="section-subtitle">
            Whether managing a single trading desk, a cold storage wholesale warehouse, a processing plant, or an active fishing fleet, OceanBookERP configures to your workflow.
          </p>
        </div>

        <div className="grid-3">
          {segments.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <div
                key={idx}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid var(--color-slate-200)',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-ocean-50)',
                      color: 'var(--color-ocean-700)',
                      marginBottom: '16px',
                      border: '1px solid var(--color-ocean-100)',
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-navy-950)' }}>
                    {seg.title}
                  </h3>
                  <div
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--color-ocean-600)',
                      marginBottom: '12px',
                    }}
                  >
                    {seg.subtitle}
                  </div>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--color-slate-600)',
                      lineHeight: 1.55,
                      marginBottom: '20px',
                    }}
                  >
                    {seg.desc}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: '1px solid var(--color-slate-100)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  {seg.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.84rem',
                        color: 'var(--color-slate-700)',
                        fontWeight: 500,
                      }}
                    >
                      <Check size={14} style={{ color: 'var(--color-ocean-600)', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
