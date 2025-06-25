import React from 'react';

// Import Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import the main tool for this page
import TripCostEstimatorTool from '@/components/TripCostEstimatorTool';

/**
 * TripCostEstimatorPage
 * A dedicated page featuring an interactive tool for users to estimate the cost of their trip.
 * It helps in budget planning by allowing users to select various travel components.
 */
const Tripcostestimatorpage = () => {
  console.log('Tripcostestimatorpage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="flex-grow flex items-center justify-center container mx-auto px-4 py-12 md:py-20">
        {/* 
          The TripCostEstimatorTool is the core component of this page.
          It is self-contained, including its own Card layout, form elements,
          and the final call-to-action button that links to the listings page.
        */}
        <TripCostEstimatorTool />
      </main>
      
      <Footer />
    </div>
  );
};

export default Tripcostestimatorpage;