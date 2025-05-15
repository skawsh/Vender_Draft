
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Mock data
const recentOrders = [
  { id: '12345', customer: 'Emma Thompson', service: 'Dry Cleaning', items: 3, total: '$45.00', status: 'Completed' },
  { id: '12346', customer: 'Michael Johnson', service: 'Wash & Fold', items: 5, total: '$35.00', status: 'Processing' },
  { id: '12347', customer: 'Sophia Williams', service: 'Ironing', items: 8, total: '$40.00', status: 'Pending' },
  { id: '12348', customer: 'James Brown', service: 'Stain Removal', items: 2, total: '$25.00', status: 'Delivering' },
  { id: '12349', customer: 'Olivia Davis', service: 'Wash & Fold', items: 4, total: '$30.00', status: 'Completed' },
];

const OrdersSummary: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Latest 5 orders received</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-sm">
                  <th className="text-left py-3 px-2 font-medium">ID</th>
                  <th className="text-left py-3 px-2 font-medium">Customer</th>
                  <th className="text-left py-3 px-2 font-medium">Service</th>
                  <th className="text-left py-3 px-2 font-medium">Items</th>
                  <th className="text-left py-3 px-2 font-medium">Total</th>
                  <th className="text-left py-3 px-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={order.id} className="border-b text-sm table-row-hover">
                    <td className="py-3 px-2">{order.id}</td>
                    <td className="py-3 px-2">{order.customer}</td>
                    <td className="py-3 px-2">{order.service}</td>
                    <td className="py-3 px-2">{order.items}</td>
                    <td className="py-3 px-2">{order.total}</td>
                    <td className="py-3 px-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Services Performance</CardTitle>
          <CardDescription>Most popular services this month</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Wash & Fold</span>
              <span className="text-sm text-muted-foreground">65%</span>
            </div>
            <Progress value={65} className="h-2" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Dry Cleaning</span>
              <span className="text-sm text-muted-foreground">45%</span>
            </div>
            <Progress value={45} className="h-2" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Ironing</span>
              <span className="text-sm text-muted-foreground">30%</span>
            </div>
            <Progress value={30} className="h-2" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Stain Removal</span>
              <span className="text-sm text-muted-foreground">20%</span>
            </div>
            <Progress value={20} className="h-2" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Leather/Suede</span>
              <span className="text-sm text-muted-foreground">10%</span>
            </div>
            <Progress value={10} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrdersSummary;
