
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const SecurityTab = () => {
  return (
    <div className="space-y-4 mt-4">
      <h3 className="text-lg font-medium">Security Settings</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="current-password">Current Password</Label>
          <Input id="current-password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="new-password">New Password</Label>
          <Input id="new-password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm New Password</Label>
          <Input id="confirm-password" type="password" />
        </div>
        <Button onClick={() => toast.success('Password updated successfully')} className="bg-primary hover:bg-primary/90">
          Update Password
        </Button>
      </div>
    </div>
  );
};

export default SecurityTab;
