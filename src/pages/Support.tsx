
import React from 'react';
import { HelpCircle, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Support = () => {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-1 flex items-center gap-2">
          <HelpCircle className="h-8 w-8 text-primary" />
          Support
        </h1>
        <p className="text-muted-foreground">Get help and assistance with your laundry studio</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone Support Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              Phone Support
            </CardTitle>
            <CardDescription>
              Contact our support team via phone during working hours
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Phone className="h-10 w-10 p-2 bg-blue-100 text-blue-700 rounded-full" />
              <div>
                <h3 className="font-semibold">Admin Contact Number</h3>
                <p className="text-lg text-blue-700">+91 98765 12345</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                Working Hours
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Saturday</p>
                  <p className="text-muted-foreground">10:00 AM - 4:00 PM</p>
                </div>
                <div className="col-span-2">
                  <p className="font-medium">Sunday</p>
                  <p className="text-muted-foreground">Closed</p>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <h3 className="font-medium mb-2">Important Note</h3>
              <p className="text-sm text-muted-foreground">
                For urgent matters, please contact us during working hours. 
                For non-urgent inquiries, you can use our email support or submit a support ticket.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full gap-2" onClick={() => {
              toast.info('Calling support', {
                description: 'Redirecting to phone app...'
              });
            }}>
              <Phone className="h-4 w-4" />
              Call Support Now
            </Button>
          </CardFooter>
        </Card>

        {/* Email Support Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Email Support
            </CardTitle>
            <CardDescription>
              Get assistance via email for non-urgent matters
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <Mail className="h-10 w-10 p-2 bg-green-100 text-green-700 rounded-full" />
              <div>
                <h3 className="font-semibold">Admin Email Address</h3>
                <p className="text-lg text-green-700">support@skawsh.com</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Email Response Time</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond to all email inquiries within 24 hours on business days.
                Please provide detailed information about your issue to help us assist you better.
              </p>
            </div>
            
            <div className="pt-2">
              <h3 className="font-medium mb-2">For faster assistance</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Include your account details</li>
                <li>• Describe the issue clearly</li>
                <li>• Attach screenshots if applicable</li>
                <li>• Mention your order number if relevant</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="w-full gap-2"
              onClick={() => {
                window.location.href = 'mailto:support@skawsh.com';
              }}
            >
              <Mail className="h-4 w-4" />
              Send Email
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Support;
