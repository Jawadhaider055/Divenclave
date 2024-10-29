// app/pages/inspire_me/page.js


import IntroCallForm from '@/app/components/IntroCallForm';
import Image from 'next/image';
import CustomerRootLayout from '@/app/user/layout';
import ContactSection from '@/app/components/ContactSection';
// import Portfolio from '../../components/Portfolio';
// import Layout

export default function InspireMePage() {
  return (
    // <Layout>
    <CustomerRootLayout>
      <ContactSection/>
      </CustomerRootLayout>
    // </Layout>
  );
}
