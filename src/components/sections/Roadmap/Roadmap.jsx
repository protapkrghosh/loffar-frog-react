import React from 'react';
import Container from '../Container/Container';
import roadmapImg from '@/assets/images/Group 1171275336.png';
import roadmapCardLogo from '@/assets/images/roadmap-logo.png';

const Roadmap = () => {
  return (
    <div className='lg:mt-[214px]'>
      <Container>
        {/* ---------------- roadmap text ---------------- */}
        <div>
          <p className='text-[#FBA32C] font-pantonRust font-medium 2xl:text-[115px] xl:text-[85px] lg:text-[65px] lg:leading-[138px] lg:tracking-[2.3px] xl:mb-[8px]'>ROADMAP</p>

          <p className='text-[#B2ACA8] font-passeroOne lg:text-[20px] lg:leading-[34px] lg:tracking-[0.4px] lg:w-[42%]'>The $KEKE project's roadmap includes enhancing liquidity, expanding exchange listings, integrating NFTs, and fostering community engagement through gamification and partnerships.</p>
        </div>

        {/* ----------- roadmap section ------------ */}

        <div>

          {/* images  */}
          <div className='xl:mt-[-245px] lg:mt-[-140px]'>
            <img className='2xl:w-[93%] xl:w-[92%] lg:w-[92%] mx-auto' src={roadmapImg} alt="image" />
          </div>

          {/* text  */}
          <div>

            {/* ------------- card 1 -------------- */}
            <div className='2xl:ml-[155px] xl:ml-[130px] lg:ml-[100px] 2xl:mt-[24px] xl:mt-[25px] lg:mt-[25px]'>
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
            <div className='2xl:ml-[715px] xl:ml-[586px] lg:ml-[455px] 2xl:mt-[-337px] xl:mt-[-305px] lg:mt-[-270px]'>
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
            <div className='2xl:ml-[1245px] xl:ml-[995px] lg:ml-[760px] 2xl:mt-[-457px] xl:mt-[-397px] lg:mt-[-345px]'>
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


      </Container>
    </div>
  );
};

export default Roadmap;