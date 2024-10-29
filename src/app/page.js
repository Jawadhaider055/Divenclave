import FAQ from "./components/FAQs";
import Footer from "./components/Footer";
import HaveACall from "./components/HaveACall";
import CaseStudySection from './components/CaseStudySection';
import GraphicDesigning from "./components/GraphicDesigning";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesWeOffer from "./components/ServicesWeOffer";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";
import Image from "next/image";
import CustomerRootLayout from "./user/layout";
import SomeClients from './components/SomeClients'; // Adjust the path if needed
import Reviews from './components/Reviews'; // Correct import for your custom Reviews component

export default function Home() {
  return (
    <CustomerRootLayout>
      {/* <Header/> */}
      <HeroSection/>
      <WhatWeDo/>
      <WhoWeAre/>
      <ServicesWeOffer/>
      {/* <GraphicDesigning/> */}
      <SomeClients/>
      <Reviews/>  {/* Your Reviews component added here */}
      <HaveACall/>
      <CaseStudySection/>
      {/* <HowItWorks/> */}
      <FAQ/>
      {/* <Footer/> */}
    </CustomerRootLayout>
  );
}
