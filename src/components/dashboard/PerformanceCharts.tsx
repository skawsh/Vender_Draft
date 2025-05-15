
import React from 'react';
import { ShoppingBag, BarChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as RechartsBarChart, Bar } from 'recharts';

// Mock data for charts
const revenueData = [
  { name: 'Jan', value: 12000 },
  { name: 'Feb', value: 18000 },
  { name: 'Mar', value: 15000 },
  { name: 'Apr', value: 21000 },
  { name: 'May', value: 19000 },
  { name: 'Jun', value: 25000 },
  { name: 'Jul', value: 28000 },
];

const ordersData = [
  { name: 'Mon', value: 40 },
  { name: 'Tue', value: 30 },
  { name: 'Wed', value: 45 },
  { name: 'Thu', value: 50 },
  { name: 'Fri', value: 60 },
  { name: 'Sat', value: 75 },
  { name: 'Sun', value: 35 },
];

const PerformanceCharts: React.FC = () => {
  return (
    <Tabs defaultValue="revenue" className="w-full">
      <TabsList className="w-full sm:w-auto">
        <TabsTrigger value="revenue" className="flex items-center gap-2">
          <BarChart className="h-4 w-4" />
          Revenue
        </TabsTrigger>
        <TabsTrigger value="orders" className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          Orders
        </TabsTrigger>
      </TabsList>
      <TabsContent value="revenue" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the current year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={revenueData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    name="Revenue"
                    stroke="#0A96EA" 
                    strokeWidth={2} 
                    dot={{ r: 4 }} 
                    activeDot={{ r: 6 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="orders" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Orders Overview</CardTitle>
            <CardDescription>Daily orders for the current week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={ordersData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Bar dataKey="value" name="Orders" fill="#0A96EA" radius={[4, 4, 0, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default PerformanceCharts;
