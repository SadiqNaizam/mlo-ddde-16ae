import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Mountain, User, Menu } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Packages', href: '/listingspage' },
  { label: 'Offers', href: '/listingspage' }, // As per thought process, offers are on the listings page
  { label: 'Trip Cost Estimator', href: '/tripcostestimatorpage' },
];

const Header: React.FC = () => {
  console.log('Header loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-muted-foreground'
    }`;
  
  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `text-lg font-medium transition-colors hover:text-primary ${
    isActive ? 'text-primary' : 'text-muted-foreground'
  }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-heading text-xl font-bold">Bharat Yatra</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={navLinkClasses}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/userdashboardpage">
              <User className="h-5 w-5" />
              <span className="sr-only">User Dashboard</span>
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-10">
                {navItems.map((item) => (
                  <NavLink key={item.href} to={item.href} className={mobileNavLinkClasses}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;