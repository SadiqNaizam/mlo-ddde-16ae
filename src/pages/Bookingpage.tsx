import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";

// Lucide Icons
import { CalendarIcon, User, AtSign, Phone, BedDouble, Users, Building, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';


// Zod schema for traveler details validation
const travelerFormSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  specialRequests: z.string().optional(),
});

const Bookingpage = () => {
  console.log('Bookingpage loaded');

  // State for the calendar
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // React Hook Form setup
  const form = useForm<z.infer<typeof travelerFormSchema>>({
    resolver: zodResolver(travelerFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      specialRequests: "",
    },
  });

  // Form submission handler
  function onSubmit(values: z.infer<typeof travelerFormSchema>) {
    console.log("Form Submitted:", values);
    toast({
      title: "Booking Submitted!",
      description: "We've received your details and will be in touch shortly.",
      className: "bg-primary text-primary-foreground",
    });
  }

  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary">Complete Your Booking</h1>
            <p className="mt-2 text-lg text-muted-foreground">Secure your dream trip in just a few steps.</p>
          </div>

          <Tabs defaultValue="package-details" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
              <TabsTrigger value="package-details">1. Package Details</TabsTrigger>
              <TabsTrigger value="traveler-info">2. Traveler Info</TabsTrigger>
              <TabsTrigger value="payment">3. Payment</TabsTrigger>
            </TabsList>
            
            {/* Tab 1: Package & Hotel Details */}
            <TabsContent value="package-details">
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center"><Briefcase className="mr-2 h-6 w-6 text-primary"/> Selected Package</CardTitle>
                  <CardDescription>Review and confirm your package details below.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 border rounded-lg bg-secondary/20">
                    <h3 className="text-xl font-bold font-heading">Enchanting Kerala Backwaters</h3>
                    <p className="text-muted-foreground">7 Days / 6 Nights</p>
                  </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                          <Label className="font-heading">Check-in Date</Label>
                          <Popover>
                              <PopoverTrigger asChild>
                                  <Button
                                      variant={"outline"}
                                      className={cn(
                                          "w-full justify-start text-left font-normal",
                                          !date && "text-muted-foreground"
                                      )}
                                  >
                                      <CalendarIcon className="mr-2 h-4 w-4" />
                                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                                  </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                              </PopoverContent>
                          </Popover>
                      </div>
                      <div className="space-y-2">
                          <Label htmlFor="guests" className="font-heading">Number of Guests</Label>
                          <Select defaultValue="2">
                              <SelectTrigger id="guests">
                                  <SelectValue placeholder="Select number of guests" />
                              </SelectTrigger>
                              <SelectContent>
                                  <SelectItem value="1">1 Guest</SelectItem>
                                  <SelectItem value="2">2 Guests</SelectItem>
                                  <SelectItem value="3">3 Guests</SelectItem>
                                  <SelectItem value="4">4 Guests</SelectItem>
                              </SelectContent>
                          </Select>
                      </div>
                  </div>
                  <Button className="w-full" onClick={() => document.querySelector<HTMLButtonElement>('[data-state="inactive"][value="traveler-info"]')?.click()}>Continue to Traveler Info</Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: Traveler Information Form */}
            <TabsContent value="traveler-info">
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center"><User className="mr-2 h-6 w-6 text-primary"/>Traveler Information</CardTitle>
                  <CardDescription>Please provide the details for the primary traveler.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-heading">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Ananya Sharma" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-heading">Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-heading">Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="e.g., 9876543210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="specialRequests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-heading">Special Requests (Optional)</FormLabel>
                            <FormControl>
                              <Textarea placeholder="e.g., room with a view, dietary restrictions" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full">Submit and Proceed to Payment</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 3: Payment */}
             <TabsContent value="payment">
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center">3. Secure Payment</CardTitle>
                  <CardDescription>Enter your payment details to confirm your booking.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                    <p className="text-muted-foreground">Payment gateway integration placeholder.</p>
                    <p className="font-bold text-2xl font-heading text-primary">Total Amount: $1,250</p>
                    <Button size="lg" className="w-full max-w-xs mx-auto">Pay Now</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bookingpage;