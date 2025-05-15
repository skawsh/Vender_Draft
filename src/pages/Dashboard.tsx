
import React, { useState } from 'react';
import OrderStatsCards from '@/components/dashboard/OrderStatsCards';
import PerformanceCharts from '@/components/dashboard/PerformanceCharts';
import OngoingOrders from '@/components/dashboard/OngoingOrders';
import OrdersTabs from '@/components/dashboard/OrdersTabs';
import OrdersSummary from '@/components/dashboard/OrdersSummary';
import OrderFilterPopover from '@/components/dashboard/OrderFilterPopover';

const Dashboard: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Orders");

  return (
    <div className="space-y-6 animate-fade-in p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your laundry business performance</p>
      </div>

      {/* Orders Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Orders</h2>
        <OrderFilterPopover selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      </div>

      {/* Order Stats Cards */}
      <OrderStatsCards />

      {/* Performance Charts */}
      <PerformanceCharts />

      {/* Ongoing Orders */}
      <OngoingOrders />

      {/* Orders Tabs - Recent Orders and Cancelled Orders */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Order History</h2>
        <OrdersTabs />
      </div>

      {/* Orders Summary Grid */}
      <OrdersSummary />
    </div>
  );
};

export default Dashboard;
