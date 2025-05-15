
import React from 'react';
import { Box, CheckCircle, Truck, AlertTriangle, UserCheck, PackageX, FileX } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const OrderStatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Orders */}
      <Card className="bg-blue-50 border-blue-100">
        <CardContent className="p-6 flex items-start justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium mb-2">Total Orders</p>
            <p className="text-4xl font-bold text-gray-900">26</p>
          </div>
          <div className="bg-blue-500 rounded-full p-3">
            <Box className="h-6 w-6 text-white" />
          </div>
        </CardContent>
      </Card>

      {/* New Orders */}
      <Card className="bg-blue-50 border-blue-100">
        <CardContent className="p-6 flex items-start justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium mb-2">New Orders</p>
            <p className="text-4xl font-bold text-gray-900">10</p>
          </div>
          <div className="bg-blue-500 rounded-full p-3">
            <Box className="h-6 w-6 text-white" />
          </div>
        </CardContent>
      </Card>

      {/* In Progress */}
      <Card className="bg-amber-50 border-amber-100">
        <CardContent className="p-6 flex items-start justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium mb-2">In Progress</p>
            <p className="text-4xl font-bold text-gray-900">2</p>
          </div>
          <div className="bg-amber-500 rounded-full p-3">
            <Box className="h-6 w-6 text-white" />
          </div>
        </CardContent>
      </Card>

      {/* Ready for Collection */}
      <Card className="bg-amber-50 border-amber-100">
        <CardContent className="p-6 flex items-start justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium mb-2">Ready for Collection</p>
            <p className="text-4xl font-bold text-gray-900">7</p>
          </div>
          <div className="bg-amber-500 rounded-full p-3">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
        </CardContent>
      </Card>

      {/* Delivered */}
      <Card className="bg-green-50 border-green-100">
        <CardContent className="p-6 flex items-start justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium mb-2">Delivered</p>
            <p className="text-4xl font-bold text-gray-900">5</p>
          </div>
          <div className="bg-green-500 rounded-full p-3">
            <Truck className="h-6 w-6 text-white" />
          </div>
        </CardContent>
      </Card>

      {/* Cancelled */}
      <Card className="bg-red-50 border-red-100">
        <CardContent className="p-6 flex items-start justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium mb-2">Cancelled</p>
            <p className="text-4xl font-bold text-gray-900">1</p>
          </div>
          <div className="bg-red-500 rounded-full p-3">
            <AlertTriangle className="h-6 w-6 text-white" />
          </div>
        </CardContent>
      </Card>

      {/* Cancelled Orders */}
      <Card className="bg-red-50 border-red-100">
        <CardContent className="p-6 flex items-start justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium mb-2">Cancelled Orders</p>
            <p className="text-4xl font-bold text-gray-900">3</p>
          </div>
          <div className="bg-red-500 rounded-full p-3">
            <FileX className="h-6 w-6 text-white" />
          </div>
        </CardContent>
      </Card>

      {/* Assigned */}
      <Card className="bg-cyan-50 border-cyan-100">
        <CardContent className="p-6 flex items-start justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium mb-2">Assigned</p>
            <p className="text-4xl font-bold text-gray-900">10</p>
          </div>
          <div className="bg-cyan-500 rounded-full p-3">
            <UserCheck className="h-6 w-6 text-white" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderStatsCards;
