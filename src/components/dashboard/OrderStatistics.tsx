
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, ShoppingBag, Inbox, RotateCw, PackageCheck } from 'lucide-react';
import OrderFilterDropdown from '@/components/OrderFilterDropdown';

interface OrderStatisticsProps {
  handleFilterChange: (filterType: string, value?: any) => void;
}

const OrderStatistics: React.FC<OrderStatisticsProps> = ({ handleFilterChange }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2 p-2 bg-gray-50 dark:bg-card rounded-lg">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-medium">Orders</h2>
          <OrderFilterDropdown onFilterChange={handleFilterChange} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="card-stats bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">All Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">54</div>
            <div className="absolute right-4 top-4 p-2 bg-white/80 rounded-full text-gray-500">
              <Database size={20} />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-stats bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <div className="absolute right-4 top-4 p-2 bg-white/80 rounded-full text-blue-500">
              <ShoppingBag size={20} />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-stats bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Received Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <div className="absolute right-4 top-4 p-2 bg-white/80 rounded-full text-teal-500">
              <Inbox size={20} />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-stats bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <div className="absolute right-4 top-4 p-2 bg-white/80 rounded-full text-purple-500">
              <RotateCw size={20} />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-stats bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Ready for Collection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <div className="absolute right-4 top-4 p-2 bg-white/80 rounded-full text-green-500">
              <PackageCheck size={20} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderStatistics;
