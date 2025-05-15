
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LegalDocumentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  documentType: string;
}

const LegalDocumentDialog: React.FC<LegalDocumentDialogProps> = ({
  isOpen,
  onClose,
  documentType,
}) => {
  const getDocumentContent = () => {
    switch (documentType) {
      case 'termsOfService':
        return {
          title: 'Terms of Service',
          content: `
            # Terms of Service for Skawsh Laundry

            ## 1. Introduction
            Welcome to Skawsh Laundry. By using our services, you agree to be bound by these Terms of Service.

            ## 2. Services Offered
            Skawsh Laundry provides laundry and dry cleaning services through our network of professional laundry studios.

            ## 3. User Responsibilities
            You are responsible for providing accurate information when using our services, including delivery addresses and contact details.

            ## 4. Payment and Fees
            Payment is due upon service completion. We accept various payment methods as specified in our application.

            ## 5. Service Delivery
            We aim to process and deliver your laundry within the timeframes specified at the time of order. Delays may occur due to unforeseen circumstances.

            ## 6. Cancellation and Refunds
            Cancellations are accepted up to 2 hours before scheduled pickup. Refunds are processed according to our refund policy.

            ## 7. Liability
            While we take utmost care of your items, we have limited liability for certain valuable or delicate items. Please check our care guidelines.

            ## 8. Privacy
            Your privacy is important to us. Please refer to our Privacy Policy for details on how we collect and use your information.

            ## 9. Changes to Terms
            We may update these terms from time to time. Continued use of our services constitutes acceptance of any changes.

            ## 10. Contact Us
            For any questions or concerns regarding these terms, please contact our support team.

            Last updated: May 10, 2025
          `,
        };
      case 'privacyPolicy':
        return {
          title: 'Privacy Policy',
          content: `
            # Privacy Policy for Skawsh Laundry

            ## 1. Information We Collect
            We collect personal information such as your name, address, email, and phone number to provide our services.
            
            ## 2. How We Use Your Information
            Your information is used to process orders, communicate with you about services, and improve our offerings.
            
            ## 3. Information Sharing
            We share your information with laundry studios and delivery partners solely for the purpose of fulfilling your orders.
            
            ## 4. Data Security
            We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.
            
            ## 5. Cookies and Tracking
            Our application uses cookies and similar technologies to enhance your user experience and analyze usage patterns.
            
            ## 6. Your Choices
            You may update your personal information or opt out of certain communications at any time through your account settings.
            
            ## 7. Children's Privacy
            Our services are not intended for individuals under 18 years of age.
            
            ## 8. Changes to This Policy
            We may update this policy periodically. We will notify you of any significant changes.
            
            ## 9. Contact Information
            If you have questions about this policy, please contact our privacy team at privacy@skawshlaundry.com.
            
            Last updated: April 28, 2025
          `,
        };
      default:
        return {
          title: 'Document',
          content: 'Document content not found.',
        };
    }
  };

  const document = getDocumentContent();

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{document.title}</DialogTitle>
          <DialogDescription>
            Last updated: {documentType === 'termsOfService' ? 'May 10, 2025' : 'April 28, 2025'}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-grow mt-4 p-4 border rounded-md bg-gray-50">
          <pre className="whitespace-pre-wrap font-sans text-sm">
            {document.content}
          </pre>
        </ScrollArea>
        <DialogFooter className="mt-4">
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LegalDocumentDialog;
