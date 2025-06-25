import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Tag } from 'lucide-react';

interface OfferBannerProps {
  /** The main headline for the offer. */
  title?: string;
  /** A short description of the offer. */
  description?: string;
  /** The text to display on the call-to-action button. */
  buttonText?: string;
  /** The destination path for the button link. */
  buttonLink?: string;
}

const OfferBanner: React.FC<OfferBannerProps> = ({
  title = "Limited Time Offer",
  description = "Discover our curated travel packages at unbeatable prices. Your next adventure awaits!",
  buttonText = "Explore Deals",
  buttonLink = "/listingspage",
}) => {
  console.log('OfferBanner loaded');

  return (
    <Card className="relative w-full overflow-hidden border-2 border-accent/20 bg-gradient-to-br from-secondary/50 via-background to-secondary/20 p-6 shadow-lg shadow-accent/10 transition-transform duration-300 hover:scale-[1.02] sm:p-8">
      <div className="absolute -right-10 -top-10 z-0 h-40 w-40 text-accent/10">
        <Tag className="h-full w-full" />
      </div>
      <div className="relative z-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="space-y-2">
          <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
            {title}
          </h2>
          <p className="max-w-prose text-foreground/80 font-body">
            {description}
          </p>
        </div>
        <div className="mt-2 flex-shrink-0 md:mt-0">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default OfferBanner;