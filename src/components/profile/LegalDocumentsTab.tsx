
import React from 'react';
import { FileText, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LegalDocumentsTabProps {
  legalDocumentsRead: {
    termsOfService: boolean;
    privacyPolicy: boolean;
  };
  handleViewDocument: (document: string) => void;
}

const LegalDocumentsTab: React.FC<LegalDocumentsTabProps> = ({
  legalDocumentsRead,
  handleViewDocument
}) => {
  return (
    <div className="space-y-4 mt-4">
      <h3 className="text-lg font-medium">Legal Documents</h3>
      <div className="grid gap-2">
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5 flex items-center gap-3">
            <FileText className="h-5 w-5 text-primary" />
            <div>
              <h4 className="font-medium">Terms of Service</h4>
              <p className="text-sm text-muted-foreground">
                Our terms and conditions for using Skawsh Laundry
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">Updated: May 10, 2025</span>
            {legalDocumentsRead.termsOfService && (
              <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                <Eye className="h-3 w-3" /> Viewed
              </span>
            )}
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => handleViewDocument('termsOfService')}
            >
              View
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5 flex items-center gap-3">
            <FileText className="h-5 w-5 text-primary" />
            <div>
              <h4 className="font-medium">Privacy Policy</h4>
              <p className="text-sm text-muted-foreground">
                How we collect, use, and protect your data
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">Updated: April 28, 2025</span>
            {legalDocumentsRead.privacyPolicy && (
              <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                <Eye className="h-3 w-3" /> Viewed
              </span>
            )}
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => handleViewDocument('privacyPolicy')}
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalDocumentsTab;
