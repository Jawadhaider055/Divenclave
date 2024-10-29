// app/pages/inspire_me/page.js

import AdvancedWebDevelopment from '@/app/components/AdvancedWebDevelopment';
import ApproachToWebDevelopment from '@/app/components/ApproachToWebDevelopment';
import BuildForFuture from '@/app/components/BuildForFuture';
import FAQ from '@/app/components/FAQs';
import HappyClients from '@/app/components/HappyClients';
import OurExpertise from '@/app/components/OurExpertise';
import RecentProjects from '@/app/components/RecentProjects';
import WebDevelopmentProcess from '@/app/components/WebDevelopmentProcess';
import WhyPartnerWithUs from '@/app/components/WhyPartnerWithUs';
import WebVideoSection from '@/app/components/WebVideoSection';

import Image from 'next/image';
import CustomerRootLayout from '@/app/user/layout';
import Portfolio from '@/app/components/Portfolio';
import Reviews from '@/app/components/Reviews';
import PortfolioSection from '@/app/components/PortfolioSection';
import WebDevelopmentFAQ from '@/app/components/WebDevelopmentFAQ';

export default function InspireMePage() {
  return (
    <CustomerRootLayout>
        <WebVideoSection />
        <BuildForFuture />
        <PortfolioSection/>
        <Reviews/>
        <WebDevelopmentFAQ/>
    </CustomerRootLayout>
  );
}
