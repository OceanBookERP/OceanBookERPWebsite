import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { DemoFormData } from '../types';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(2, 13, 24, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={handleClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-xl)',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '32px',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-slate-100)',
            color: 'var(--color-slate-700)',
          }}
          aria-label="Close demo modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-ocean-50)',
                color: 'var(--color-ocean-600)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-navy-950)' }}>
              Demo Request Received
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-slate-600)', lineHeight: 1.5 }}>
              Thank you! We will reach out to organize your live walkthrough of OceanBookERP for <strong>{formData.companyName || 'your business'}</strong>.
            </p>
            <button onClick={handleClose} className="btn btn-primary" style={{ marginTop: '12px' }}>
              Close
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <img src="/oceanbook-logo.png" alt="Logo" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-navy-950)' }}>
                  Request Product Demo
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-slate-500)' }}>
                  See how OceanBookERP handles your seafood operations.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-navy-950)', marginBottom: '4px' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajiv Menon"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-slate-300)', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-navy-950)', marginBottom: '4px' }}>
                  Business / Company Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Coastal Fisheries & Exporters"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-slate-300)', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-navy-950)', marginBottom: '4px' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-slate-300)', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-navy-950)', marginBottom: '4px' }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-slate-300)', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-navy-950)', marginBottom: '4px' }}>
                  Primary Business Segment
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-slate-300)', backgroundColor: '#ffffff', outline: 'none' }}
                >
                  <option value="Seafood Trader">Seafood Trader</option>
                  <option value="Seafood Wholesaler">Seafood Wholesaler</option>
                  <option value="Seafood Processor">Seafood Processor</option>
                  <option value="Seafood Exporter">Seafood Exporter</option>
                  <option value="Fishing Fleet / Boat Owner">Fishing Fleet / Boat Owner</option>
                  <option value="Seafood Distributor">Seafood Distributor</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px', marginTop: '8px' }}
              >
                {loading ? 'Submitting...' : 'Submit Demo Request'}
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.74rem', color: 'var(--color-slate-500)' }}>
                <ShieldCheck size={13} style={{ color: 'var(--color-ocean-600)' }} />
                <span>Confidential evaluation inquiry.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
