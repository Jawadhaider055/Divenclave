// app/pages/inspire_me/page.js

import FAQ from '@/app/components/FAQs';
import Image from 'next/image';
import CustomerRootLayout from '@/app/user/layout';
import VideoEditingImageSection from '@/app/components/viedo_editing/VideoEditingImageSection';
import VideoEditingSection from '@/app/components/viedo_editing/VideoEditingServicesSection';
import PortfolioSection from '@/app/components/PortfolioSection';
import Reviews from '@/app/components/Reviews';
import VideoEditingFAQ from '@/app/components/viedo_editing/VideoEditingFAQ';
// import Portfolio from '../../components/Portfolio';
// import Layout

export default function InspireMePage() {
  return (
    // <Layout>
    <CustomerRootLayout>
      <VideoEditingImageSection/>
      <VideoEditingSection/>
      <PortfolioSection/>
      <Reviews/>
      <VideoEditingFAQ/>
      </CustomerRootLayout>
    // </Layout>
  );
}
