
import React from 'react';
import { LogOut } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import LegalDocumentsTab from './LegalDocumentsTab';
import SecurityTab from './SecurityTab';

interface AccountSettingsCardProps {
  legalDocumentsRead: {
    termsOfService: boolean;
    privacyPolicy: boolean;
  };
  handleViewDocument: (document: string) => void;
  handleLogout: () => void;
}

const AccountSettingsCard: React.FC<AccountSettingsCardProps> = ({
  legalDocumentsRead,
  handleViewDocument,
  handleLogout
}) => {
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Manage your account preferences and settings</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="legal-documents" className="w-full">
          <TabsList>
            <TabsTrigger value="legal-documents">Legal Documents</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="legal-documents">
            <LegalDocumentsTab 
              legalDocumentsRead={legalDocumentsRead} 
              handleViewDocument={handleViewDocument} 
            />
          </TabsContent>

          <TabsContent value="security">
            <SecurityTab />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="destructive" onClick={handleLogout} className="flex items-center gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AccountSettingsCard;
