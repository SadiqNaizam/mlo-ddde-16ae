import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Mountain className="h-6 w-6 text-primary" />
              <span className="font-heading text-xl font-bold">Bharat Yatra</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your gateway to unforgettable journeys across India.
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-heading font-semibold mb-3">Company</h4>
              <nav className="flex flex-col gap-2">
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-3">Legal</h4>
              <nav className="flex flex-col gap-2">
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-3">Connect</h4>
              <div className="flex gap-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Bharat Yatra. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;