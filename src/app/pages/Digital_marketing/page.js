// app/pages/inspire_me/page.js


import FAQ from '@/app/components/FAQs';
import Image from 'next/image';
import CustomerRootLayout from '@/app/user/layout';
import DigitalMarketingImageSection from '@/app/components/socialmedia/DigitalMarketingImageSection';
import DigitalServices from '@/app/components/socialmedia/DigitalServicesSection';
import DigitalMarketingSection from '@/app/components/socialmedia/DigitalServicesSection';
import Reviews from '@/app/components/Reviews';
import PortfolioSection from '@/app/components/PortfolioSection';
import DigitalMarketingFAQ from '@/app/components/DigitalMarketingFAQ';
// import Portfolio from '../../components/Portfolio';
// import Layout

export default function InspireMePage() {
  return (
    // <Layout>
    <CustomerRootLayout>

      {/* Portfolio Section */}
        <DigitalMarketingImageSection/>
        <DigitalMarketingSection/>
        <PortfolioSection/>
        <Reviews/>
        <DigitalMarketingFAQ/>
      </CustomerRootLayout>
    // </Layout>
  );
}
