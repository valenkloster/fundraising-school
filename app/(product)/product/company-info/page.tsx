'use client'; // Ensure this is a client component

import CompanyForm from '@/components/vc_list/company_form';
import { useState } from 'react';

export default function Page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenDialog}>Open Company Info</button>
      <CompanyForm isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </div>
  );
}
