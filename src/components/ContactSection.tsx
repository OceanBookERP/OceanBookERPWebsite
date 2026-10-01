import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import type { DemoFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<DemoFormData>({
    fullName: '',
    companyName: '',
    businessType: 'Seafood Trader',
    email: '',
    phone: '',
    modules: ['Seafood Inventory', 'Sales Invoicing', 'Double-Entry Accounting'],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const availableModules = [
    'Seafood Inventory & Lot Tracking',
    'Sales Invoicing & Tax Calculation',
    'Purchase & Procurement Bills',
    'Double-Entry Accounting & Ledgers',
    'Fishing Trips & Crew Settlement',
    'Dispatch & Logistics Tracking',
    'Multi-Company Management',
    'Financial Statements & Reports',
  ];

  const handleModuleToggle = (moduleName: string) => {
    setFormData((prev) => {
      const exists = prev.modules.includes(moduleName);
      if (exists) {
        return { ...prev, modules: prev.modules.filter((m) => m !== moduleName) };
      } else {
        return { ...prev, modules: [...prev.modules, moduleName] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean form handling (ready to hook to Webhook / Netlify Forms / Formspree)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <div className="section-header">
          <div className="section-badge section-badge-dark">
            <Sparkles size={14} style={{ color: 'var(--color-ocean-400)' }} />
            <span>Product Evaluation</span>
          </div>
          <h2 className="section-title">
            See OceanBookERP in Action
          </h2>
          <p className="section-subtitle">
            Discover how OceanBookERP can fit into your seafood business operations. Request a guided walkthrough tailored to your trade workflow.
          </p>
        </div>

        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            color: 'var(--color-slate-800)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
          {submitted ? (
            <div
              style={{
                textAlign: 'center',
                padding: '48px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-ocean-50)',
                  border: '2px solid var(--color-ocean-400)',
                  color: 'var(--color-ocean-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CheckCircle2 size={36} />
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-navy-950)' }}>
                Demo Request Submitted Successfully
              </h3>

              <p style={{ fontSize: '1rem', color: 'var(--color-slate-600)', maxWidth: '520px', lineHeight: 1.6 }}>
                Thank you for your interest in OceanBookERP. We have received your demonstration inquiry for <strong>{formData.companyName || 'your business'}</strong> and will follow up with scheduling details.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="btn btn-secondary"
                style={{ marginTop: '16px' }}
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                }}
                className="form-row-2"
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--color-navy-950)',
                      marginBottom: '6px',
                    }}
                  >
                    Full Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-slate-300)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--color-navy-950)',
                      marginBottom: '6px',
                    }}
                  >
                    Company / Trade Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Marine Traders"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-slate-300)',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '20px',
                }}
                className="form-row-3"
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--color-navy-950)',
                      marginBottom: '6px',
                    }}
                  >
                    Business Type <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-slate-300)',
                      backgroundColor: '#ffffff',
                      outline: 'none',
                    }}
                  >
                    <option value="Seafood Trader">Seafood Trader</option>
                    <option value="Seafood Wholesaler">Seafood Wholesaler</option>
                    <option value="Seafood Processor">Seafood Processor</option>
                    <option value="Seafood Exporter">Seafood Exporter</option>
                    <option value="Fishing Fleet / Boat Owner">Fishing Fleet / Boat Owner</option>
                    <option value="Seafood Distributor & Logistics">Seafood Distributor & Logistics</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--color-navy-950)',
                      marginBottom: '6px',
                    }}
                  >
                    Email Address <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-slate-300)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--color-navy-950)',
                      marginBottom: '6px',
                    }}
                  >
                    Phone / WhatsApp <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-slate-300)',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Modules Checklist */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--color-navy-950)',
                    marginBottom: '8px',
                  }}
                >
                  Modules of Interest:
                </label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '8px',
                  }}
                  className="modules-grid"
                >
                  {availableModules.map((moduleName) => {
                    const isSelected = formData.modules.includes(moduleName);
                    return (
                      <button
                        type="button"
                        key={moduleName}
                        onClick={() => handleModuleToggle(moduleName)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: isSelected ? 'var(--color-ocean-50)' : 'var(--color-slate-50)',
                          border: isSelected ? '1px solid var(--color-ocean-400)' : '1px solid var(--color-slate-200)',
                          color: isSelected ? 'var(--color-ocean-800)' : 'var(--color-slate-700)',
                          fontSize: '0.82rem',
                          fontWeight: 500,
                          textAlign: 'left',
                        }}
                      >
                        <span
                          style={{
                            width: '14px',
                            height: '14px',
                            borderRadius: '3px',
                            border: isSelected ? '1px solid var(--color-ocean-600)' : '1px solid var(--color-slate-400)',
                            backgroundColor: isSelected ? 'var(--color-ocean-600)' : 'transparent',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            fontSize: '10px',
                            flexShrink: 0,
                          }}
                        >
                          {isSelected ? '✓' : ''}
                        </span>
                        <span>{moduleName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--color-navy-950)',
                    marginBottom: '6px',
                  }}
                >
                  Operational Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about your seafood business operations, cold storage facilities, fishing fleet, or accounting needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-slate-300)',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-lg"
                style={{
                  width: '100%',
                  marginTop: '8px',
                }}
              >
                {loading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Request Product Demo</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              <div
                style={{
                  textAlign: 'center',
                  fontSize: '0.78rem',
                  color: 'var(--color-slate-500)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <ShieldCheck size={14} style={{ color: 'var(--color-ocean-600)' }} />
                <span>Your operational information is kept confidential and strictly used for evaluation.</span>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .form-row-2, .form-row-3, .modules-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
