import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

interface PackageCardProps {
  slug: string;
  imageUrl: string;
  destination: string;
  price: number;
  highlights: string[];
}

const PackageCard: React.FC<PackageCardProps> = ({
  slug,
  imageUrl,
  destination,
  price,
  highlights
}) => {
  console.log('PackageCard loaded for:', destination);

  return (
    <Card className="group relative w-full overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl dark:border-gray-800">
      <div className="relative h-64 overflow-hidden">
        {/* Image */}
        <img
          src={imageUrl}
          alt={`A scenic view of ${destination}`}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        
        {/* Overlay revealed on hover */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <h3 className="font-heading text-lg font-semibold text-white">Package Inclusions</h3>
          <ul className="mt-2 space-y-1 text-sm">
            {highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="flex items-center text-primary-foreground/90">
                <Check className="mr-2 h-4 w-4 text-accent" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Content */}
      <CardContent className="p-4">
        <h2 className="font-heading text-2xl font-bold text-card-foreground">{destination}</h2>
        <div className="mt-2 flex items-center justify-between">
          <p className="font-body text-xl font-semibold text-primary">
            <span className="text-sm font-normal text-muted-foreground">From </span>
            ${price.toLocaleString()}
          </p>
          <Button asChild>
            <Link to={`/bookingpage?package=${slug}`}>
              View Package
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PackageCard;