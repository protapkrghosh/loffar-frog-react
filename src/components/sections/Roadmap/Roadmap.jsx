import React from 'react';
import Container from '../Container/Container';
import roadmapImg from '@/assets/images/Group 1171275336.png';
import roadmapCardLogo from '@/assets/images/roadmap-logo.png';

const Roadmap = () => {
  return (
    <div className='lg:mt-[214px]'>
      <div className="max-w-[1600px] mx-auto xl:pl-24 lg:pl-16 md:px-10 sm:px-2 px-4">
        {/* ---------------- roadmap text ---------------- */}
        <div>
          <p className='text-[#FBA32C] font-pantonRust font-medium text-[115px] leading-[138px] tracking-[2.3px] lg:mb-[8px]'>ROADMAP</p>

          <p className='text-[#B2ACA8] font-passeroOne text-[20px] leading-[34px] tracking-[0.4px] lg:w-[42%]'>The $KEKE project's roadmap includes enhancing liquidity, expanding exchange listings, integrating NFTs, and fostering community engagement through gamification and partnerships.</p>
        </div>

        {/* ----------- roadmap section ------------ */}

        <div>

          {/* images  */}
          <div className='lg:mt-[-245px]'>
            <img className='lg:w-[93%] mx-auto' src={roadmapImg} alt="image" />
          </div>

          {/* text  */}
          <div>

            {/* ------------- card 1 -------------- */}
            <div className='xl:ml-[155px] lg:mt-[24px]'>
              <p className='text-[#FBA32C] font-pantonRust font-medium text-[30px] lg:leading-[36px] lg:tracking-[0.3px] lg:mb-[16px]'>PHASE 1</p>

              <div className='flex items-center md:gap-4 lg:mb-[22px]'>
                <img className='lg:w-auto' src={roadmapCardLogo} alt="image" />
                <p className='text-[#B2ACA8] font-passeroOne md:text-[18px] lg:leading-[21.6px] tracking-[1.44px]'>Uniswap Launch</p>
              </div>

              <div className='flex items-center md:gap-4 lg:mb-[22px]'>
                <img className='lg:w-auto' src={roadmapCardLogo} alt="image" />
                <p className='text-[#B2ACA8] font-passeroOne md:text-[18px] lg:leading-[21.6px] tracking-[1.44px]'>1,000+ Holders</p>
              </div>

              <div className='flex items-center md:gap-4'>
                <img className='lg:w-auto' src={roadmapCardLogo} alt="image" />
                <p className='text-[#B2ACA8] font-passeroOne md:text-[18px] lg:leading-[21.6px] tracking-[1.44px]'>CoinGecko/Coinmarketcap</p>
              </div>

            </div>

            {/* ------------- card 2 -------------- */}
            <div className='xl:ml-[715px] lg:mt-[-337px]'>
              <p className='text-[#FBA32C] font-pantonRust font-medium text-[30px] lg:leading-[36px] lg:tracking-[0.3px] lg:mb-[16px]'>PHASE 2</p>

              <div className='flex items-center md:gap-4 lg:mb-[22px]'>
                <img className='lg:w-auto' src={roadmapCardLogo} alt="image" />
                <p className='text-[#B2ACA8] font-passeroOne font-medium md:text-[18px] lg:leading-[21.6px] tracking-[1.44px]'>KOL Marketing</p>
              </div>

              <div className='flex items-center md:gap-4 lg:mb-[22px]'>
                <img className='lg:w-auto' src={roadmapCardLogo} alt="image" />
                <p className='text-[#B2ACA8] font-passeroOne font-medium md:text-[18px] lg:leading-[21.6px] tracking-[1.44px]'>Meme Contast</p>
              </div>

              <div className='flex items-center md:gap-4'>
                <img className='lg:w-auto' src={roadmapCardLogo} alt="image" />
                <p className='text-[#B2ACA8] font-passeroOne md:text-[18px] lg:leading-[21.6px] tracking-[1.44px]'>First CEX Listing</p>
              </div>

            </div>

            {/* ------------- card 3 -------------- */}
            <div className='xl:ml-[1245px] lg:mt-[-457px]'>
              <p className='text-[#FBA32C] font-pantonRust font-medium text-[30px] lg:leading-[36px] lg:tracking-[0.3px] lg:mb-[16px]'>PHASE 3</p>

              <div className='flex items-center md:gap-4 lg:mb-[22px]'>
                <img className='lg:w-auto' src={roadmapCardLogo} alt="image" />
                <p className='text-[#B2ACA8] font-passeroOne font-medium md:text-[18px] lg:leading-[21.6px] tracking-[1.44px]'>KOL Marketing</p>
              </div>

              <div className='flex items-center md:gap-4 lg:mb-[22px]'>
                <img className='lg:w-auto' src={roadmapCardLogo} alt="image" />
                <p className='text-[#B2ACA8] font-passeroOne font-medium md:text-[18px] lg:leading-[21.6px] tracking-[1.44px]'>Meme Contast</p>
              </div>

              <div className='flex items-center md:gap-4'>
                <img className='lg:w-auto' src={roadmapCardLogo} alt="image" />
                <p className='text-[#B2ACA8] font-passeroOne font-medium md:text-[18px] lg:leading-[21.6px] tracking-[1.44px]'>First CEX Listing</p>
              </div>

            </div>

          </div>

        </div>


      </div>
    </div>
  );
};

export default Roadmap;