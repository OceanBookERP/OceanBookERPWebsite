import React from 'react';
import { 
  Scale, 
  FileCheck2, 
  Percent, 
  Check
} from 'lucide-react';

export const GstTax: React.FC = () => {
  return (
    <section id="tax" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Scale size={14} />
            <span>Taxation & Compliance</span>
          </div>
          <h2 className="section-title">
            Configurable GST & Tax Management
          </h2>
          <p className="section-subtitle">
            Tax treatment varies across the seafood spectrum — from raw primary catch and unprocessed fish to value-added frozen blocks and international exports. OceanBookERP provides full tax flexibility.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'stretch' }}>
          {/* Card 1: Configurable Compliance */}
          <div
            className="card"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-slate-200)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
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
                  marginBottom: '20px',
                }}
              >
                <Percent size={24} />
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy-950)', marginBottom: '12px' }}>
                Adaptive Tax Calculations
              </h3>

              <p style={{ fontSize: '0.94rem', color: 'var(--color-slate-600)', lineHeight: 1.6, marginBottom: '20px' }}>
                OceanBookERP does not force a rigid single-tax assumption. Configure rates at the product master level and let the engine determine tax splits automatically based on intra-state or inter-state transactions.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Automated CGST + SGST split for intra-state sales',
                  'IGST computation for inter-state commercial distribution',
                  'Exempt & Nil-rated classification for primary fresh catch',
                  'Export zero-rated tax configuration with export invoice details',
                  'HSN/SAC code directory mapping per seafood product SKU',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--color-slate-700)' }}>
                    <Check size={16} style={{ color: 'var(--color-ocean-600)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Flexible for Registered and Unregistered Operations */}
          <div
            className="card"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-slate-200)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
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
                  marginBottom: '20px',
                }}
              >
                <FileCheck2 size={24} />
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy-950)', marginBottom: '12px' }}>
                Tailored for Every Entity Type
              </h3>

              <p style={{ fontSize: '0.94rem', color: 'var(--color-slate-600)', lineHeight: 1.6, marginBottom: '20px' }}>
                Whether you are a formal GST-registered corporate seafood processing plant, an exporter claiming duty draw-backs, or an artisanal boat owner operating in the primary exempt trade, the software accommodates your setup seamlessly.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Operate with or without GST registration requirements',
                  'Party GSTIN validation with state code recognition',
                  'Itemized tax summary tables generated on every invoice',
                  'Periodic sales & purchase registers for chartered accountants',
                  'Export-ready document headers with LUT / bond options',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--color-slate-700)' }}>
                    <Check size={16} style={{ color: 'var(--color-ocean-600)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
