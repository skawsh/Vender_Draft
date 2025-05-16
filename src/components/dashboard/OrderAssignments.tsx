
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { User, Package } from 'lucide-react';

interface DriverAssignment {
  id: number;
  driverName: string;
  orderId: string;
  action: string;
  location: string;
  time: string;
  address: string;
}

interface OrderAssignmentsProps {
  driverAssignments: DriverAssignment[];
}

const OrderAssignments: React.FC<OrderAssignmentsProps> = ({ driverAssignments }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2 p-2 bg-gray-50 dark:bg-card rounded-lg">
        <h2 className="text-lg font-medium">Today's orders assignment status</h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Today's orders assignment status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {driverAssignments.length > 0 ? (
              driverAssignments.map(assignment => (
                <div key={assignment.id} className="flex items-start gap-3 pb-3 border-b">
                  <div className={`p-2 ${assignment.action === "drop" ? "bg-blue-100" : "bg-green-100"} rounded-md`}>
                    {assignment.action === "drop" ? (
                      <User className="h-4 w-4 text-blue-500" />
                    ) : (
                      <Package className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">
                      {assignment.driverName} has assigned to {assignment.action} the {assignment.orderId} {assignment.action === "collect" ? "from" : "at"} {assignment.location}
                    </p>
                    <p className="text-sm text-muted-foreground">{assignment.address}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-4">
                <p className="text-muted-foreground">No active assignments</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderAssignments;
