import React from 'react';
import { Link } from 'react-router-dom';

// Layout Components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Custom Components
import PackageCard from '../components/PackageCard';
import OfferBanner from '../components/OfferBanner';

// Shadcn UI
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Icons
import { Search } from 'lucide-react';

// Placeholder data for featured packages
const featuredPackages = [
  {
    slug: 'golden-triangle-tour',
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    destination: 'Golden Triangle',
    price: 35000,
    highlights: ['Visit Taj Mahal', 'Explore Jaipur Forts', 'Rickshaw Ride in Delhi'],
  },
  {
    slug: 'kerala-backwaters-escape',
    imageUrl: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    destination: 'Kerala Backwaters',
    price: 42000,
    highlights: ['Houseboat Stay', 'Local Cuisine Tasting', 'Kathakali Performance'],
  },
  {
    slug: 'rajasthan-desert-safari',
    imageUrl: 'https://images.unsplash.com/photo-1605413197298-547a1f4c0a52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    destination: 'Rajasthan Desert',
    price: 28000,
    highlights: ['Camel Safari', 'Thar Desert Camping', 'Folk Music & Dance'],
  },
];

const Homepage = () => {
  console.log('Homepage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section className="relative h-[60vh] min-h-[400px] md:h-[70vh] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1598091383021-15d1435a2e54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Beautiful landscape of India" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 container px-4 flex flex-col items-center">
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight">
              Discover the Soul of India
            </h1>
            <p className="mt-4 max-w-2xl font-body text-lg md:text-xl text-primary-foreground/90">
              From majestic mountains to serene backwaters, your unforgettable journey starts here.
            </p>
            <div className="mt-8 flex w-full max-w-lg items-center space-x-2 rounded-md bg-white p-2 shadow-lg">
              <Input
                type="text"
                placeholder="Search destinations (e.g., Kerala, Rajasthan...)"
                className="flex-1 border-0 text-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button asChild type="submit" size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/listingspage">
                  <Search className="h-5 w-5 md:mr-2" />
                  <span className="hidden md:inline">Search</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* --- Featured Packages Section --- */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                Featured Travel Packages
              </h2>
              <p className="mt-2 max-w-2xl mx-auto text-muted-foreground font-body">
                Handpicked experiences that promise adventure, culture, and relaxation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPackages.map((pkg) => (
                <PackageCard
                  key={pkg.slug}
                  slug={pkg.slug}
                  imageUrl={pkg.imageUrl}
                  destination={pkg.destination}
                  price={pkg.price}
                  highlights={pkg.highlights}
                />
              ))}
            </div>
          </div>
        </section>

        {/* --- Special Offer Section --- */}
        <section className="py-16 lg:py-24 bg-secondary/20">
            <div className="container">
                <OfferBanner />
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Homepage;