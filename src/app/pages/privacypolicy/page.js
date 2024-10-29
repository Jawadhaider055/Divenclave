import CustomerRootLayout from '@/app/user/layout'; // Import your layout
import PrivacyPolicyContent from '@/app/components/PrivacyPolicyContent'; // You can create a component to hold the privacy policy content

export default function PrivacyPolicyPage() {
  return (
    <CustomerRootLayout>
      <PrivacyPolicyContent />
    </CustomerRootLayout>
  );
}
