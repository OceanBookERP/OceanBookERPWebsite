import React from 'react';
import { 
  Landmark, 
  BookOpen, 
  CreditCard, 
  Layers, 
  Scale, 
  PieChart, 
  CheckCircle,
  ArrowRightLeft
} from 'lucide-react';

export const AccountingSection: React.FC = () => {
  const accountingFeatures = [
    {
      icon: BookOpen,
      title: 'Double-Entry General Ledgers',
      desc: 'Complete chart of accounts organized under standard Asset, Liability, Income, and Expense groups. Opening balances with Dr/Cr indicators.',
    },
    {
      icon: ArrowRightLeft,
      title: 'Sales & Purchases Integration',
      desc: 'Every sales invoice and supplier purchase bill automatically generates synchronized double-entry ledger postings with tax breakdown.',
    },
    {
      icon: CreditCard,
      title: 'Receipts & Payments Treasury',
      desc: 'Dedicated treasury vouchers for Cash, Bank accounts, Cheques, RTGS, and NEFT with bill-by-bill outstanding reconciliation.',
    },
    {
      icon: Scale,
      title: 'Party Outstanding & Bill Aging',
      desc: 'Instant party statement ledgers, overdue bill tracking, aging analysis (0-30, 31-60, 61-90, 90+ days), and credit period enforcement.',
    },
    {
      icon: Layers,
      title: 'Trial Balance & Financial Integrity',
      desc: 'Continuous debit-credit balance verification across all general ledgers, ensuring strict accounting integrity with zero imbalance.',
    },
    {
      icon: PieChart,
      title: 'Profit & Loss and Balance Sheet',
      desc: 'Generate real-time Profit & Loss statements and Balance Sheets directly reflecting operational seafood trade and fleet activities.',
    },
  ];

  return (
    <section id="accounting" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Landmark size={14} />
            <span>Commercial Financial Engine</span>
          </div>
          <h2 className="section-title">
            Keep Your Business Finances Connected
          </h2>
          <p className="section-subtitle">
            Accounting in OceanBookERP is not an afterthought or an export file. Your sales invoices, procurement bills, fleet expenses, and dispatch records post directly into your double-entry financial statements.
          </p>
        </div>

        {/* 6 Accounting Pillars */}
        <div className="grid-3" style={{ marginBottom: '40px' }}>
          {accountingFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="card"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-slate-200)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
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
                  <Icon size={20} />
                </div>

                <h3
                  style={{
                    fontSize: '1.12rem',
                    fontWeight: 700,
                    color: 'var(--color-navy-950)',
                    marginBottom: '8px',
                  }}
                >
                  {feat.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-slate-600)',
                    lineHeight: 1.55,
                  }}
                >
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Synchronized Financial Ecosystem Box */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-slate-200)',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle size={20} style={{ color: 'var(--color-ocean-600)' }} />
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-navy-950)' }}>
              Connected Accounting Capabilities Built into OceanBookERP
            </h4>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            {[
              'Sales Invoices & Credit Notes',
              'Purchase Bills & Debit Notes',
              'Receipt Vouchers (Cash / Bank)',
              'Payment Vouchers (Cash / Bank)',
              'Party Ledgers with Contact & GSTIN',
              'Bill-by-Bill Outstanding Tracking',
              'Detailed Ledger Account Statements',
              'Hierarchical Chart of Accounts',
              'Trial Balance Dr / Cr Verification',
              'Profit & Loss Statement',
              'Balance Sheet Report',
              'Multi-Company Independent Books',
            ].map((item, i) => (
              <span
                key={i}
                style={{
                  padding: '8px 14px',
                  backgroundColor: 'var(--color-slate-50)',
                  border: '1px solid var(--color-slate-200)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: 'var(--color-slate-800)',
                }}
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
