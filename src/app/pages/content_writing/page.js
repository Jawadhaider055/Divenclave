// app/pages/inspire_me/page.js


import FAQ from '@/app/components/FAQs';


import Image from 'next/image';
import CustomerRootLayout from '@/app/user/layout';
import ContentWritingImageSection from '@/app/components/content_writing/ContentWritingImageSection';
import ContentWritingSection from '@/app/components/content_writing/ContentWritingServicesSection';
import PortfolioSection from '@/app/components/PortfolioSection';
import Reviews from '@/app/components/Reviews';
import ContentWritingFAQ from '@/app/components/content_writing/ContentWritingFaq';
// import Portfolio from '../../components/Portfolio';
// import Layout

export default function InspireMePage() {
  return (
    // <Layout>
     <CustomerRootLayout>
      <ContentWritingImageSection/>
      <ContentWritingSection/>
      <PortfolioSection/>
      <Reviews/>
      <ContentWritingFAQ/>
     </CustomerRootLayout>
    // </Layout>
  );
}
