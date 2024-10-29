// app/pages/inspire_me/page.js

import AboutSection from '@/app/components/AboutSection';
import ImpressivePortfolio from '@/app/components/ImpressivePortfolio';
import Image from 'next/image';
import CustomerRootLayout from '@/app/user/layout';
import AboutUsImage from '@/app/components/AboutUsImage';
// import Portfolio from '../../components/Portfolio';
// import Layout

export default function InspireMePage() {
  return (
    // <Layout>
    <CustomerRootLayout>
      <AboutUsImage/>
      {/* Portfolio Section */}
      </CustomerRootLayout>
    // </Layout>
  );
}
