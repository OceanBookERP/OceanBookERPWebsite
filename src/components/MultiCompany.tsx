import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Image, 
  Settings, 
  RefreshCw, 
  Lock
} from 'lucide-react';

export const MultiCompany: React.FC = () => {
  const companyFeatures = [
    {
      icon: Building2,
      title: 'Startup Company Selection',
      desc: 'Launch OceanBookERP and select your active trading company or subsidiary from a clean multi-firm selector modal.',
    },
    {
      icon: Lock,
      title: 'Complete Data Isolation',
      desc: 'Each company retains strict isolation for party directories, sales invoices, stock inventory lots, and financial vouchers.',
    },
    {
      icon: Image,
      title: 'Company-Specific Branding',
      desc: 'Upload custom company logos, trade names, registered addresses, GSTIN, PAN, and bank details for distinct invoice headers.',
    },
    {
      icon: Settings,
      title: 'Independent Financial Years',
      desc: 'Configure independent financial year opening/closing dates, currency symbols (INR ₹, USD $, EUR €, AED), and voucher numbering.',
    },
    {
      icon: RefreshCw,
      title: 'Instant In-App Switching',
      desc: 'Switch between sister firms, partner entities, or separate harbor branches with one click without closing the desktop app.',
    },
    {
      icon: ShieldCheck,
      title: 'Role-Based Access Governance',
      desc: 'Assign administrative and operator user permissions per company profile to safeguard sensitive financial data.',
    },
  ];

  return (
    <section id="multi-company" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Building2 size={14} />
            <span>Multi-Entity Management</span>
          </div>
          <h2 className="section-title">
            Run Multiple Companies in One Unified Installation
          </h2>
          <p className="section-subtitle">
            Many seafood operators manage distinct entities for fishing fleets, export packaging, and domestic trading. OceanBookERP supports seamless multi-company management without extra software licenses.
          </p>
        </div>

        <div className="grid-3">
          {companyFeatures.map((item, idx) => {
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
      </div>
    </section>
  );
};
