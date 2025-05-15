
import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import LegalDocumentsTab from './LegalDocumentsTab';
import SecurityTab from './SecurityTab';
import LegalDocumentDialog from './LegalDocumentDialog';

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
  const [openDocument, setOpenDocument] = useState<string | null>(null);
  
  const handleOpenDocument = (document: string) => {
    setOpenDocument(document);
    handleViewDocument(document);
  };

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
              handleViewDocument={handleOpenDocument} 
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
      
      <LegalDocumentDialog 
        isOpen={openDocument !== null}
        onClose={() => setOpenDocument(null)}
        documentType={openDocument || ''}
      />
    </Card>
  );
};

export default AccountSettingsCard;
