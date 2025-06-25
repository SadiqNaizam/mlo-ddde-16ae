import React from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Shadcn/ui Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Icons
import { User, Bell, Shield, LogOut } from 'lucide-react';

// Placeholder data for the dashboard
const user = {
  name: 'Samira Rao',
  email: 'samira.rao@example.com',
  memberSince: '2023-01-15',
  avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
};

const bookings = [
  {
    id: 'T837J',
    destination: 'Kerala Backwaters Escape',
    date: '2024-11-20',
    status: 'Upcoming',
    price: 45000,
  },
  {
    id: 'P921K',
    destination: 'Rajasthan Royal Tour',
    date: '2024-02-10',
    status: 'Completed',
    price: 85000,
  },
  {
    id: 'M483L',
    destination: 'Himalayan Trek',
    date: '2023-09-05',
    status: 'Completed',
    price: 62000,
  },
];

const UserDashboardPage = () => {
  console.log('UserDashboardPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">My Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome back, {user.name}! Manage your trips and account settings here.</p>
        </header>

        <Tabs defaultValue="bookings" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-8">
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Booking History</CardTitle>
                <CardDescription>View your past and upcoming adventures with Bharat Yatra.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Destination</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>{booking.destination}</TableCell>
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>
                          <Badge variant={booking.status === 'Upcoming' ? 'secondary' : 'default'} className={booking.status === 'Upcoming' ? 'bg-accent text-accent-foreground' : ''}>
                            {booking.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                           <Button variant="link" size="sm">View Details</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Personal Information</CardTitle>
                <CardDescription>Keep your profile details up to date.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback><User /></AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold font-heading">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">Member since {user.memberSince}</p>
                  </div>
                </div>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={user.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue={user.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 12345 67890" />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Account Settings</CardTitle>
                <CardDescription>Manage your notification preferences and account security.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                 <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <Label className="text-base flex items-center"><Bell className="mr-2 h-4 w-4" /> Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive updates on bookings and special offers.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <Label className="text-base flex items-center"><Shield className="mr-2 h-4 w-4" /> Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
                    </div>
                    <Switch />
                  </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4 flex justify-between">
                <Button variant="destructive"><LogOut className="mr-2 h-4 w-4" /> Logout</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default UserDashboardPage;