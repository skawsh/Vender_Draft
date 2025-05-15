
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const OngoingOrders: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Ongoing Orders</h2>
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">S.NO</th>
                  <th className="text-left p-4 font-medium">ORDER ID</th>
                  <th className="text-left p-4 font-medium">WEIGHT / QUANTITY</th>
                  <th className="text-left p-4 font-medium">PRICE</th>
                  <th className="text-left p-4 font-medium">ORDER TYPE</th>
                  <th className="text-right p-4 font-medium">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b table-row-hover animate-table-row animate-delay-100">
                  <td className="p-4">1</td>
                  <td className="p-4">12121</td>
                  <td className="p-4">5kgs</td>
                  <td className="p-4">$500</td>
                  <td className="p-4">Quick Order</td>
                  <td className="p-4 text-right">
                    <button className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                      Accept
                    </button>
                  </td>
                </tr>
                <tr className="border-b table-row-hover animate-table-row animate-delay-200">
                  <td className="p-4">2</td>
                  <td className="p-4">45325</td>
                  <td className="p-4">5units</td>
                  <td className="p-4">$500</td>
                  <td className="p-4">Stand Order</td>
                  <td className="p-4 text-right">
                    <button className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                      Accept
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OngoingOrders;
