import AboutUs from '@/components/sections/AboutUs/AboutUs';
import Faq from '@/components/sections/Faq/Faq';
import Roadmap from '@/components/sections/Roadmap/Roadmap';
import { Factory } from 'lucide-react';
import React from 'react';

const Home = () => {
  return (
    <div>
      <AboutUs />
      <Roadmap />
      <Faq />
    </div>
  );
};

export default Home;
