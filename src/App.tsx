import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyOceanBook } from './components/WhyOceanBook';
import { CoreFeatures } from './components/CoreFeatures';
import { BuiltForSeafood } from './components/BuiltForSeafood';
import { BusinessFlow } from './components/BusinessFlow';
import { FishingOperations } from './components/FishingOperations';
import { AccountingSection } from './components/AccountingSection';
import { DispatchLogistics } from './components/DispatchLogistics';
import { ProductShowcase } from './components/ProductShowcase';
import { MultiCompany } from './components/MultiCompany';
import { GstTax } from './components/GstTax';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DemoRequestModal } from './components/DemoRequestModal';

export const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="oceanbook-app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Header & Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        {/* 2. Hero Section */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* 3. Why OceanBookERP */}
        <WhyOceanBook />

        {/* 4. Core Features */}
        <CoreFeatures />

        {/* 5. Built for Seafood Businesses */}
        <BuiltForSeafood />

        {/* 6. How the Business Flows */}
        <BusinessFlow />

        {/* 7. Fishing Operations Section */}
        <FishingOperations onOpenDemo={handleOpenDemo} />

        {/* 8. Accounting Section */}
        <AccountingSection />

        {/* 9. Dispatch & Logistics Section */}
        <DispatchLogistics />

        {/* 10. Product Showcase */}
        <ProductShowcase />

        {/* 11. Multi-Company Support */}
        <MultiCompany />

        {/* 12. GST / Tax Management */}
        <GstTax />

        {/* 13. About OceanBookERP */}
        <AboutSection />

        {/* 14. Contact / Request a Demo */}
        <ContactSection />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Global Interactive Demo Modal */}
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
};

export default App;
