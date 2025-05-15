
import React from 'react';
import { ShoppingBag, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

// Mock data
const recentOrders = [
  { id: '12345', customer: 'Emma Thompson', service: 'Dry Cleaning', items: 3, total: '$45.00', status: 'Completed' },
  { id: '12346', customer: 'Michael Johnson', service: 'Wash & Fold', items: 5, total: '$35.00', status: 'Processing' },
  { id: '12347', customer: 'Sophia Williams', service: 'Ironing', items: 8, total: '$40.00', status: 'Pending' },
  { id: '12348', customer: 'James Brown', service: 'Stain Removal', items: 2, total: '$25.00', status: 'Delivering' },
  { id: '12349', customer: 'Olivia Davis', service: 'Wash & Fold', items: 4, total: '$30.00', status: 'Completed' },
];

// Mock data for cancelled orders
const cancelledOrders = [
  { 
    id: '12350', 
    customer: 'Daniel Wilson', 
    service: 'Dry Cleaning', 
    items: 4, 
    total: '$52.00', 
    cancelReason: 'Customer requested', 
    cancelDate: '2025-05-10' 
  },
  { 
    id: '12351', 
    customer: 'Ava Martinez', 
    service: 'Wash & Fold', 
    items: 7, 
    total: '$38.00', 
    cancelReason: 'Duplicate order', 
    cancelDate: '2025-05-12' 
  },
  { 
    id: '12352', 
    customer: 'Noah Garcia', 
    service: 'Stain Removal', 
    items: 2, 
    total: '$27.00', 
    cancelReason: 'Service unavailable', 
    cancelDate: '2025-05-13' 
  },
  { 
    id: '12353', 
    customer: 'Isabella Rodriguez', 
    service: 'Ironing', 
    items: 5, 
    total: '$35.00', 
    cancelReason: 'Address issue', 
    cancelDate: '2025-05-14' 
  },
  { 
    id: '12354', 
    customer: 'Liam Thompson', 
    service: 'Dry Cleaning', 
    items: 3, 
    total: '$42.00', 
    cancelReason: 'Customer requested', 
    cancelDate: '2025-05-15' 
  },
];

const OrdersTabs: React.FC = () => {
  return (
    <Tabs defaultValue="recent" className="w-full">
      <TabsList className="w-full sm:w-auto">
        <TabsTrigger value="recent" className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          Recent Orders
        </TabsTrigger>
        <TabsTrigger value="cancelled" className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          Cancelled Orders
        </TabsTrigger>
      </TabsList>
      <TabsContent value="recent" className="mt-4">
        <Card>
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
      </TabsContent>
      <TabsContent value="cancelled" className="mt-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Cancelled Orders</CardTitle>
            <CardDescription>Orders that have been cancelled</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Cancel Reason</TableHead>
                    <TableHead>Cancel Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cancelledOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.service}</TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell>{order.total}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                          {order.cancelReason}
                        </span>
                      </TableCell>
                      <TableCell>{order.cancelDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default OrdersTabs;
