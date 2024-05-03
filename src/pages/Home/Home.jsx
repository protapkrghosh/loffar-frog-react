import AboutUs from '@/components/sections/AboutUs/AboutUs';
import Banner from '@/components/sections/Banner/Banner';
import Faq from '@/components/sections/Faq/Faq';
import FooterLinkSection from '@/components/sections/FooterLinkSection/FooterLinkSection';
import Roadmap from '@/components/sections/Roadmap/Roadmap';
import Tokenomics from '@/components/sections/Tokenomics/Tokenomics';
import { Factory } from 'lucide-react';
import React from 'react';

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <AboutUs />
      <Tokenomics />
      <Roadmap />
      <Faq />
      {/* <FooterLinkSection /> */}
    </div>
  );
};

export default Home;
