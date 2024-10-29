// app/pages/inspire_me/page.js


import FAQ from '@/app/components/FAQs';
import CustomVisuals from '@/app/components/graphic_design/CustomVisuals';
import GraphicDesignWorkProcess from '@/app/components/graphic_design/GraphicDesignWorkProcess';
import OurExpertise from '@/app/components/graphic_design/OurExpertise';
import OurPartnershipJourney from '@/app/components/graphic_design/OurPartnershipJourney';
import WhyPartnerWithUs from '@/app/components/graphic_design/WhyPartnerWithUs';
import HappyClients from '@/app/components/HappyClients';
import RecentProjects from '@/app/components/RecentProjects';
import Image from 'next/image';
import CustomerRootLayout from '@/app/user/layout';
import UiUxDesignImageSection from '@/app/components/graphic_design/UiUxDesignImageSection';
import UiUxDesignSection from '@/app/components/graphic_design/UiUxServicesSection';
import PortfolioSection from '@/app/components/PortfolioSection';
import Reviews from '@/app/components/Reviews';
import UxUiDesignFAQ from '@/app/components/graphic_design/UxUiDesignFAQ';
// import Portfolio from '../../components/Portfolio';
// import Layout

export default function InspireMePage() {
  return (
    // <Layout>
    <CustomerRootLayout>

      {/* Portfolio Section */}
        <UiUxDesignImageSection/>
        <UiUxDesignSection/>
        <PortfolioSection/>
        <Reviews/>
        <UxUiDesignFAQ/>
      </CustomerRootLayout>
    // </Layout>
  );
}
