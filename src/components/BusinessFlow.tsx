import React, { useState } from 'react';
import { 
  GitMerge, 
  ShoppingCart, 
  PackageCheck, 
  Boxes, 
  Receipt, 
  CreditCard, 
  Truck, 
  BarChart4, 
  Ship, 
  Compass, 
  Fuel, 
  Fish, 
  Anchor, 
  BadgePercent,
  CheckCircle2
} from 'lucide-react';

export const BusinessFlow: React.FC = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<'commercial' | 'fishing'>('commercial');

  const commercialSteps = [
    { num: '01', title: 'Purchase Bill', desc: 'Procure seafood lots with species, grade, and size', icon: ShoppingCart },
    { num: '02', title: 'Receive Stock', desc: 'Verify landing weight, condition, and container counts', icon: PackageCheck },
    { num: '03', title: 'Manage Inventory', desc: 'Real-time lot allocation and cold storage tracking', icon: Boxes },
    { num: '04', title: 'Sales Order', desc: 'Customer commitment with price terms & credit checks', icon: Receipt },
    { num: '05', title: 'Tax Invoicing', desc: 'GST/Tax calculation and automatic double-entry ledger posting', icon: Receipt },
    { num: '06', title: 'Payment Receipt', desc: 'Bank/Cash treasury vouchers with bill-by-bill adjustment', icon: CreditCard },
    { num: '07', title: 'Dispatch & Delivery', desc: 'Assign transporter, driver, and update delivery status', icon: Truck },
    { num: '08', title: 'Reports & Control', desc: 'Party statements, P&L, balance sheet, and audit logs', icon: BarChart4 },
  ];

  const fishingSteps = [
    { num: '01', title: 'Boat Registry', desc: 'Fleet master with registration, engine HP, and licenses', icon: Ship },
    { num: '02', title: 'Fishing Trip Log', desc: 'Log voyage departure date, sea zones, and crew manifest', icon: Compass },
    { num: '03', title: 'Trip Expenses', desc: 'Record diesel, ice, bait, rations, and harbor fees', icon: Fuel },
    { num: '04', title: 'Catch Recording', desc: 'Track marine harvest at sea by species and volume', icon: Fish },
    { num: '05', title: 'Port Landing', desc: 'Weigh-in at harbor and inspect fresh catch quality', icon: Anchor },
    { num: '06', title: 'Stock Entry', desc: 'Automatic inward inventory entry into seafood masters', icon: Boxes },
    { num: '07', title: 'Consignment Sale', desc: 'Direct sale or auction invoicing linked to voyage', icon: Receipt },
    { num: '08', title: 'Trip Profitability', desc: 'Crew share/wage settlement and net voyage profit margin', icon: BadgePercent },
  ];

  const activeSteps = selectedWorkflow === 'commercial' ? commercialSteps : fishingSteps;

  return (
    <section id="workflow" className="section section-dark">
      <div className="container">
        <div className="section-header">
          <div className="section-badge section-badge-dark">
            <GitMerge size={14} style={{ color: 'var(--color-ocean-400)' }} />
            <span>End-to-End Operational Workflows</span>
          </div>
          <h2 className="section-title">
            How the Business Flows in OceanBookERP
          </h2>
          <p className="section-subtitle">
            One unbroken data chain connects your harbor landings, cold-storage inventory, sales invoicing, logistics, and financial statements.
          </p>

          {/* Workflow Toggle Buttons */}
          <div
            style={{
              display: 'inline-flex',
              padding: '6px',
              backgroundColor: 'rgba(4, 28, 44, 0.8)',
              border: '1px solid rgba(45, 212, 191, 0.25)',
              borderRadius: 'var(--radius-full)',
              marginTop: '28px',
            }}
          >
            <button
              onClick={() => setSelectedWorkflow('commercial')}
              style={{
                padding: '8px 24px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                backgroundColor: selectedWorkflow === 'commercial' ? 'var(--color-ocean-600)' : 'transparent',
                color: '#ffffff',
                boxShadow: selectedWorkflow === 'commercial' ? 'var(--shadow-sm)' : 'none',
              }}
            >
              Commercial Trading & Processing Flow
            </button>
            <button
              onClick={() => setSelectedWorkflow('fishing')}
              style={{
                padding: '8px 24px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                backgroundColor: selectedWorkflow === 'fishing' ? 'var(--color-ocean-600)' : 'transparent',
                color: '#ffffff',
                boxShadow: selectedWorkflow === 'fishing' ? 'var(--shadow-sm)' : 'none',
              }}
            >
              Fishing Vessel & Trip Economics Flow
            </button>
          </div>
        </div>

        {/* Visual Workflow Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            position: 'relative',
          }}
          className="workflow-grid"
        >
          {activeSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="card card-dark"
                style={{
                  position: 'relative',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'rgba(15, 118, 110, 0.35)',
                        border: '1px solid rgba(45, 212, 191, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-ocean-300)',
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        color: 'var(--color-ocean-400)',
                      }}
                    >
                      STEP {step.num}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '8px',
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--color-slate-300)',
                      lineHeight: 1.5,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '16px',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.75rem',
                    color: 'var(--color-ocean-400)',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2 size={13} />
                  <span>Fully Connected Data</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .workflow-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .workflow-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
