
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ShoppingBag, Receipt, TrendingUp, IndianRupee } from "lucide-react";

interface RevenueSummaryProps {
  revenueSummary: {
    todayEarnings: number;
    quickWashEarnings: number;
    standardWashEarnings: number;
    combinedWashEarnings: number;
    pendingPayments: number;
    lastMonthRevenue: number;
    totalRevenue: number;
  };
}

const RevenueSummaryTiles: React.FC<RevenueSummaryProps> = ({ revenueSummary }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      <Card className="bg-[#E5DEFF] border-none shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Today's Earnings</p>
              <h3 className="text-2xl font-bold mt-1">₹{revenueSummary.todayEarnings}</h3>
            </div>
            <div className="bg-[#8B5CF6] p-2 rounded-full">
              <Clock className="h-5 w-5 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#D3E4FD] border-none shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Quick Wash Revenue</p>
              <h3 className="text-2xl font-bold mt-1">₹{revenueSummary.quickWashEarnings}</h3>
            </div>
            <div className="bg-[#0EA5E9] p-2 rounded-full">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#FDE1D3] border-none shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Standard Wash Revenue</p>
              <h3 className="text-2xl font-bold mt-1">₹{revenueSummary.standardWashEarnings}</h3>
            </div>
            <div className="bg-[#F97316] p-2 rounded-full">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#FFDEE2] border-none shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Combined Wash Revenue</p>
              <h3 className="text-2xl font-bold mt-1">₹{revenueSummary.combinedWashEarnings}</h3>
            </div>
            <div className="bg-[#D946EF] p-2 rounded-full">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#FEF7CD] border-none shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Payments</p>
              <h3 className="text-2xl font-bold mt-1">₹{revenueSummary.pendingPayments}</h3>
            </div>
            <div className="bg-[#e6a31c] p-2 rounded-full">
              <Receipt className="h-5 w-5 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#F2FCE2] border-none shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Last Month Revenue</p>
              <h3 className="text-2xl font-bold mt-1">₹{revenueSummary.lastMonthRevenue}</h3>
            </div>
            <div className="bg-[#4ade80] p-2 rounded-full">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#F1F0FB] border-none shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <h3 className="text-2xl font-bold mt-1">₹{revenueSummary.totalRevenue}</h3>
            </div>
            <div className="bg-[#8B5CF6] p-2 rounded-full">
              <IndianRupee className="h-5 w-5 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RevenueSummaryTiles;
