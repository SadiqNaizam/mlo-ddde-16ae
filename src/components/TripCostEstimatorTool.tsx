import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Shadcn UI Imports
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

// Custom Component Import
import AnimatedCounter from '@/components/AnimatedCounter';

// Icons
import { Plane, Hotel, Users, CalendarDays, IndianRupee } from 'lucide-react';

// Define the cost structure for estimation
const COST_CONFIG = {
  hotel: {
    budget: 2500, // per night
    'mid-range': 6000,
    luxury: 15000,
  },
  flight: 8000, // per person, one-way estimate
  activities: 1000, // per person per day
};

type HotelTier = 'budget' | 'mid-range' | 'luxury';

const TripCostEstimatorTool: React.FC = () => {
  console.log('TripCostEstimatorTool loaded');

  // State for user inputs
  const [duration, setDuration] = useState<number>(5);
  const [travelers, setTravelers] = useState<number>(2);
  const [hotelTier, setHotelTier] = useState<HotelTier>('mid-range');
  const [includeFlights, setIncludeFlights] = useState<boolean>(true);

  // State for the calculated cost
  const [totalCost, setTotalCost] = useState<number>(0);

  // Effect to recalculate cost whenever an input changes
  useEffect(() => {
    const hotelCost = COST_CONFIG.hotel[hotelTier] * duration * travelers;
    const flightCost = includeFlights ? COST_CONFIG.flight * travelers * 2 : 0; // round trip
    const activityCost = COST_CONFIG.activities * duration * travelers;

    const newTotalCost = hotelCost + flightCost + activityCost;
    setTotalCost(newTotalCost);
  }, [duration, travelers, hotelTier, includeFlights]);

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border-border bg-card">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl lg:text-4xl font-heading text-primary">Trip Cost Estimator</CardTitle>
        <CardDescription className="font-body text-muted-foreground">
          Plan your perfect Indian getaway within your budget.
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="p-6 md:p-8 space-y-8">
        {/* Controls Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="duration" className="flex items-center text-lg font-heading">
                <CalendarDays className="mr-2 h-5 w-5 text-primary" />
                Trip Duration (Nights)
              </Label>
              <div className="flex items-center gap-4">
                <Slider
                  id="duration"
                  min={1}
                  max={30}
                  step={1}
                  value={[duration]}
                  onValueChange={(value) => setDuration(value[0])}
                  className="flex-grow"
                />
                <span className="font-bold text-lg w-12 text-center bg-secondary text-secondary-foreground rounded-md py-1">
                  {duration}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="travelers" className="flex items-center text-lg font-heading">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Number of Travelers
              </Label>
               <div className="flex items-center gap-4">
                <Slider
                  id="travelers"
                  min={1}
                  max={10}
                  step={1}
                  value={[travelers]}
                  onValueChange={(value) => setTravelers(value[0])}
                  className="flex-grow"
                />
                <span className="font-bold text-lg w-12 text-center bg-secondary text-secondary-foreground rounded-md py-1">
                  {travelers}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
             <div className="space-y-3">
              <Label htmlFor="hotel-tier" className="flex items-center text-lg font-heading">
                <Hotel className="mr-2 h-5 w-5 text-primary" />
                Accommodation
              </Label>
              <Select value={hotelTier} onValueChange={(value: HotelTier) => setHotelTier(value)}>
                <SelectTrigger id="hotel-tier" className="w-full">
                  <SelectValue placeholder="Select hotel type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Budget (≈ ₹2,500/night)</SelectItem>
                  <SelectItem value="mid-range">Mid-Range (≈ ₹6,000/night)</SelectItem>
                  <SelectItem value="luxury">Luxury (≈ ₹15,000/night)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
               <div className="space-y-0.5">
                  <Label htmlFor="include-flights" className="flex items-center text-lg font-heading">
                    <Plane className="mr-2 h-5 w-5 text-primary" />
                    Include Flights
                  </Label>
                  <p className="text-sm text-muted-foreground font-body">
                    Add estimated round-trip flight costs.
                  </p>
                </div>
              <Switch
                id="include-flights"
                checked={includeFlights}
                onCheckedChange={setIncludeFlights}
              />
            </div>
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex flex-col md:flex-row items-center justify-between p-6 bg-secondary/20">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-heading text-muted-foreground">Estimated Total Cost</p>
          <div className="flex items-center justify-center md:justify-start text-4xl md:text-5xl font-bold text-primary">
            <IndianRupee className="h-8 w-8 mr-1" />
            <AnimatedCounter value={totalCost} />
          </div>
        </div>
        <Button size="lg" asChild className="font-bold text-lg">
          <Link to={`/listingspage?maxPrice=${totalCost}&travelers=${travelers}`}>
            Find Packages In This Budget
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TripCostEstimatorTool;