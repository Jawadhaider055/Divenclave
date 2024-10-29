// app/pages/termsforservices/page.js

import CustomerRootLayout from '@/app/user/layout'; // Import your layout
import TermsAndConditionsContent from '@/app/components/TermsAndConditionsContent'; // Import the content component

export default function TermsAndConditionsPage() {
  return (
    <CustomerRootLayout>
      <TermsAndConditionsContent/>
    </CustomerRootLayout>
  );
}
