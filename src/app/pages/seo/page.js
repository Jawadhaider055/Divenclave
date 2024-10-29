// app/pages/inspire_me/page.js


import FAQ from '@/app/components/FAQs';
import HappyClients from '@/app/components/HappyClients';
import OurExpertise from '@/app/components/OurSeoExpertise';
import RecentProjects from '@/app/components/RecentProjects';
import SeoCards from '@/app/components/SeoCards';
import SeoServicesProcess from '@/app/components/SeoServicesProcess';
import SeoServiceWorkProcess from '@/app/components/SeoServiceWorkProcess';
import WhyPartnerWithUs from '@/app/components/WhySeoPartnerWithUs';
import Image from 'next/image';
import CustomerRootLayout from '@/app/user/layout';
import SeoImageSection from '@/app/components/SeoImageSection';
import SeoServices from '@/app/components/SeoServices';
import Reviews from '@/app/components/Reviews';
import PortfolioSection from '@/app/components/PortfolioSection';
import SeoFAQ from '@/app/components/SeoFaq';
//import { Reviews } from '@mui/icons-material';
// import Portfolio from '../../components/Portfolio';
// import Layout

export default function InspireMePage() {
  return (
    // <Layout>
    <CustomerRootLayout>

      {/* Portfolio Section */}

        <SeoImageSection/>
        {/* <OurExpertise/> */}
        <SeoServices/>
        <PortfolioSection/>
        <Reviews/>
        <SeoFAQ/>
      </CustomerRootLayout>
    // </Layout>
  );
}
