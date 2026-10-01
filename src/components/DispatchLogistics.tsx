import React from 'react';
import { 
  Truck, 
  FileCheck, 
  UserCheck, 
  Car, 
  MapPin, 
  ShieldCheck, 
  Clock
} from 'lucide-react';

export const DispatchLogistics: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Sales Invoice Inward',
      desc: 'Dispatch orders link directly to billed sales invoices, ensuring product quantities match the invoice.',
      icon: FileCheck,
    },
    {
      num: '02',
      title: 'Transporter Assignment',
      desc: 'Select authorized logistics carriers from the unified party master with agreed freight rates.',
      icon: Truck,
    },
    {
      num: '03',
      title: 'Vehicle & Driver Log',
      desc: 'Assign vehicle registration number, driver name, mobile number, and refrigerated container specs.',
      icon: Car,
    },
    {
      num: '04',
      title: 'Status & Delivery Audit',
      desc: 'Update logistics states in real-time: Draft → Loaded → Dispatched → In-Transit → Delivered.',
      icon: MapPin,
    },
  ];

  return (
    <section id="dispatch" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Truck size={14} />
            <span>Connected Distribution</span>
          </div>
          <h2 className="section-title">
            Dispatch & Logistics Without Inventory Duplication
          </h2>
          <p className="section-subtitle">
            In many systems, dispatch and inventory fight each other, causing duplicate stock deductions. OceanBookERP coordinates dispatch tracking directly with your sales ledger while preserving accurate warehouse lot quantities.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid-4" style={{ marginBottom: '40px' }}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="card"
                style={{
                  border: '1px solid var(--color-slate-200)',
                  backgroundColor: '#ffffff',
                  padding: '24px',
                }}
              >
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
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-ocean-50)',
                      border: '1px solid var(--color-ocean-100)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-ocean-700)',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--color-ocean-600)',
                    }}
                  >
                    STEP {step.num}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    color: 'var(--color-navy-950)',
                    marginBottom: '8px',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--color-slate-600)',
                    lineHeight: 1.5,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Logistics Highlights Callout */}
        <div
          style={{
            backgroundColor: 'var(--color-slate-50)',
            border: '1px solid var(--color-slate-200)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="dispatch-highlights"
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <ShieldCheck size={22} style={{ color: 'var(--color-ocean-600)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--color-navy-950)' }}>
                Zero Double-Deduction
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--color-slate-600)', marginTop: '2px' }}>
                Stock is deducted strictly once upon invoice issuance; dispatch tracks physical distribution.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <UserCheck size={22} style={{ color: 'var(--color-ocean-600)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--color-navy-950)' }}>
                Driver & Vehicle Records
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--color-slate-600)', marginTop: '2px' }}>
                Maintains transporter contact numbers, vehicle registration, and driver identity for compliance.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <Clock size={22} style={{ color: 'var(--color-ocean-600)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--color-navy-950)' }}>
                Status Updates
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--color-slate-600)', marginTop: '2px' }}>
                Track delivery milestone timestamps from loading dock to customer receipt confirmation.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .dispatch-highlights {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
