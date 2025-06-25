import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PackageCard from '@/components/PackageCard';

// Shadcn UI Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Filter } from 'lucide-react';

const samplePackages = [
  {
    slug: 'kerala-backwaters-bliss-7d',
    imageUrl: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1932&auto=format&fit=crop',
    destination: 'Kerala Backwaters',
    price: 45000,
    highlights: ['7-Day Houseboat Stay', 'Ayurvedic Massage', 'Local Cuisine Tour'],
  },
  {
    slug: 'rajasthan-royal-forts-tour-10d',
    imageUrl: 'https://images.unsplash.com/photo-1599661046227-1427849c4def?q=80&w=1954&auto=format&fit=crop',
    destination: 'Royal Rajasthan',
    price: 75000,
    highlights: ['Jaipur, Udaipur, Jodhpur', 'Camel Safari', 'Fort & Palace Tours'],
  },
  {
    slug: 'himalayan-adventure-ladakh-8d',
    imageUrl: 'https://images.unsplash.com/photo-1610255331557-ac454aba3d3b?q=80&w=1974&auto=format&fit=crop',
    destination: 'Himalayan Adventure',
    price: 90000,
    highlights: ['Leh-Ladakh Expedition', 'Pangong Lake Visit', 'Monastery Tours'],
  },
  {
    slug: 'goa-beach-paradise-5d',
    imageUrl: 'https://images.unsplash.com/photo-1560179406-1f6c4b832a5a?q=80&w=1974&auto=format&fit=crop',
    destination: 'Goa Beach Paradise',
    price: 30000,
    highlights: ['North & South Goa', 'Water Sports', 'Nightlife Experience'],
  },
  {
    slug: 'spiritual-varanasi-3d',
    imageUrl: 'https://images.unsplash.com/photo-1561361523-7a716c56b0a8?q=80&w=1974&auto=format&fit=crop',
    destination: 'Spiritual Varanasi',
    price: 25000,
    highlights: ['Ganges River Aarti', 'Boat Tour', 'Temple Visits'],
  },
  {
    slug: 'tea-gardens-of-darjeeling-6d',
    imageUrl: 'https://images.unsplash.com/photo-1626084329999-6e38600d80c0?q=80&w=1935&auto=format&fit=crop',
    destination: 'Darjeeling Tea Gardens',
    price: 55000,
    highlights: ['Toy Train Ride', 'Tea Plantation Tour', 'Tiger Hill Sunrise'],
  },
];

const Listingspage = () => {
  console.log('Listingspage loaded');
  const [priceRange, setPriceRange] = useState([20000, 100000]);

  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <Header />

      <div className="container mx-auto flex flex-col lg:flex-row gap-8 px-4 py-8">
        {/* Sidebar for Filters */}
        <aside className="lg:w-1/4 xl:w-1/5">
          <Card className="sticky top-24 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-heading">
                <Filter className="mr-2 h-5 w-5 text-primary" />
                Filter & Sort
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="p-4 space-y-6">
              {/* Sort By */}
              <div>
                <Label htmlFor="sort-by" className="text-base font-semibold font-heading">Sort By</Label>
                <Select>
                  <SelectTrigger id="sort-by" className="mt-2">
                    <SelectValue placeholder="Recommended" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="duration-asc">Duration: Short to Long</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div>
                <Label htmlFor="price-range" className="text-base font-semibold font-heading">Price Range</Label>
                <Slider
                  id="price-range"
                  min={10000}
                  max={200000}
                  step={1000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>₹{priceRange[0].toLocaleString()}</span>
                  <span>₹{priceRange[1].toLocaleString()}</span>
                </div>
              </div>

              {/* Inclusions */}
              <div>
                <h3 className="text-base font-semibold font-heading mb-2">Inclusions</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="flights" />
                    <Label htmlFor="flights" className="font-normal cursor-pointer">Flights Included</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="meals" />
                    <Label htmlFor="meals" className="font-normal cursor-pointer">All Meals</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="tours" />
                    <Label htmlFor="tours" className="font-normal cursor-pointer">Guided Tours</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="visa" />
                    <Label htmlFor="visa" className="font-normal cursor-pointer">Visa Assistance</Label>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">Apply Filters</Button>
            </CardContent>
          </Card>
        </aside>

        {/* Main Content: Package Grid */}
        <main className="flex-1">
          <h1 className="text-3xl font-bold font-heading mb-6 text-foreground">
            Explore Travel Packages
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {samplePackages.map((pkg) => (
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

          {/* Pagination */}
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Listingspage;