
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuth } from '@/context/AuthContext';
import ProfileHeader from '@/components/profile/ProfileHeader';
import StudioInformationSection from '@/components/profile/StudioInformationSection';
import AccountSettingsCard from '@/components/profile/AccountSettingsCard';

const Profile = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  
  const [profileData, setProfileData] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    address: '123 Laundry Lane, Mumbai, Maharashtra',
    studio: 'Skawsh Laundry Studio',
    joinDate: 'January 15, 2023'
  });

  const [studioInfo, setStudioInfo] = useState({
    basic: {
      ownerName: 'Saiteja Samala',
      studioName: 'Saiteja Laundry',
      emailAddress: 'saitejasamala0808@gmail.com',
      primaryNumber: '8099830308',
      secondaryNumber: '9000135876',
      isEditing: false
    },
    address: {
      streetAddress: '1-23/45, Main Street',
      city: 'Hyderabad',
      state: 'Telangana',
      zipCode: '500081',
      latitude: '17.3850',
      longitude: '78.4867',
      isEditing: false
    },
    business: {
      businessName: 'Saiteja Laundry Services',
      businessRegistrationNumber: 'UADJFDFJ4427287',
      gstNumber: 'GST9876541',
      panNumber: 'ABCDE1234F',
      openingTime: '09:00 AM',
      closingTime: '09:00 PM',
      priceAdjustment: '10%',
      isEditing: false
    },
    studio: {
      numberOfEmployees: '2',
      dailyCapacity: '100',
      specialEquipment: 'Special dry cleaning',
      selectedWashCategory: 'Standard Wash, Express Wash',
      isEditing: false
    },
    payment: {
      accountHolderName: 'Saiteja Samala',
      bankName: 'HDFC',
      accountNumber: '50107846646453',
      ifscCode: 'HDFC00236898',
      branchName: 'Gachibowli Phase-2',
      upiId: 'saitejasamala@upi',
      selectedPaymentSchedule: 'Daily Payment',
      isEditing: false
    }
  });
  
  const [expandedInfoSections, setExpandedInfoSections] = useState<Record<string, boolean>>({
    'basic': false,
    'address': false,
    'business': false,
    'studio': false,
    'payment': false
  });

  const [legalDocumentsRead, setLegalDocumentsRead] = useState({
    termsOfService: false,
    privacyPolicy: false,
  });

  const toggleEditSection = (section: keyof typeof studioInfo) => {
    setStudioInfo(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        isEditing: !prev[section].isEditing
      }
    }));
  };

  const handleInfoChange = (section: keyof typeof studioInfo, field: string, value: string) => {
    setStudioInfo(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const saveInfoChanges = (section: keyof typeof studioInfo) => {
    setStudioInfo(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        isEditing: false
      }
    }));
    toast.success(`${section.charAt(0).toUpperCase() + section.slice(1)} information updated successfully`);
  };

  const cancelInfoEdit = (section: keyof typeof studioInfo) => {
    setStudioInfo(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        isEditing: false
      }
    }));
    toast.info('Edit canceled');
  };

  const toggleInfoSection = (section: string) => {
    setExpandedInfoSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleViewDocument = (document) => {
    setLegalDocumentsRead(prev => ({
      ...prev,
      [document]: !prev[document]
    }));
    toast.success(`Viewing ${document.charAt(0).toUpperCase() + document.slice(1).replace(/([A-Z])/g, ' $1')}`);
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <ProfileHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Studio Information Section */}
        <StudioInformationSection 
          studioInfo={studioInfo}
          expandedInfoSections={expandedInfoSections}
          toggleInfoSection={toggleInfoSection}
          toggleEditSection={toggleEditSection}
          handleInfoChange={handleInfoChange}
          saveInfoChanges={saveInfoChanges}
          cancelInfoEdit={cancelInfoEdit}
        />

        {/* Account Settings */}
        <AccountSettingsCard 
          legalDocumentsRead={legalDocumentsRead}
          handleViewDocument={handleViewDocument}
          handleLogout={handleLogout}
        />
      </div>
    </div>
  );
};

export default Profile;
