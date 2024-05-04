import React from 'react';
import Container from '../Container/Container';
import roadmapImg from '@/assets/images/Group 1171275336.png';
import roadmapCardLogo from '@/assets/images/roadmap-logo.png';

const Roadmap = () => {
  return (
    <div className='xl:mt-[200px] lg:mt-[214px] md:mt-[90px] mt-[60px]' id='roadmap'>
      <Container>
        {/* ---------------- roadmap text ---------------- */}
        <div>
          <p className='text-[#FBA32C] lg:text-start text-center font-pantonRust font-medium 2xl:text-[115px] xl:text-[85px] lg:text-[65px] md:text-[60px] text-[30px] lg:leading-[138px] lg:tracking-[2.3px] xl:mb-[8px] md:mb-[8px] mb-[6px]' data-aos="fade-up"
            data-aos-duration="1000">ROADMAP</p>

          <p className='text-[#B2ACA8] lg:text-start text-center font-passeroOne lg:text-[20px] md:text-[16px] lg:leading-[34px] lg:tracking-[0.4px] lg:w-[42%] lg:px-0 md:px-5 px-3' data-aos="fade-up"
            data-aos-duration="2000">The $KEKE project's roadmap includes enhancing liquidity, expanding exchange listings, integrating NFTs, and fostering community engagement through gamification and partnerships.</p>
        </div>

        {/* ----------- roadmap section ------------ */}

        <div>

          {/* images  */}
          <div className='hidden lg:block xl:mt-[-245px] lg:mt-[-140px]'>
            <img className='2xl:w-[93%] xl:w-[90%] lg:w-[82%] mx-auto' src={roadmapImg} alt="image" />
          </div>


          {/* -------------- Large Device ------------ */}
          {/* text  */}
          <div className='hidden lg:block lg:mt-0 md:mt-[14px] relative'>

            {/* ------------- card 1 -------------- */}
            <div className='2xl:ml-[155px] xl:ml-[140px] lg:ml-[135px] 2xl:mt-[24px] xl:mt-[25px] lg:mt-[25px]'>
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
            <div className='absolute 2xl:top-[-465px] xl:top-[-380px] lg:top-[-265px] 2xl:right-[-10px] xl:right-[-25px] lg:right-[-27px]'>
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










          {/* -------------- Small Device ------------ */}
          {/* text  */}
          <div className='block lg:hidden lg:mt-0 md:mt-[45px] mt-[25px]'>

            <div className='grid md:grid-cols-2 grid-cols-1 md:ml-32 ml-10'>

              {/* ------------- card 1 -------------- */}
              <div className='2xl:ml-[155px] xl:ml-[130px] lg:ml-[100px] 2xl:mt-[24px] xl:mt-[25px] lg:mt-[25px]'>
                <p className='text-[#FBA32C] font-pantonRust font-medium md:text-[26px] text-[20px] lg:leading-[36px] lg:tracking-[0.3px] md:mb-[14px] mb-[8px]'>PHASE 1</p>

                <div className='flex items-center md:gap-4 gap-3 md:mb-[14px] mb-[10px]'>
                  <img className='md:w-[6%] w-[5%]' src={roadmapCardLogo} alt="image" />
                  <p className='text-[#B2ACA8] font-passeroOne md:text-[18px] text-[14px]'>Uniswap Launch</p>
                </div>

                <div className='flex items-center md:gap-4 gap-3 md:mb-[14px] mb-[10px]'>
                  <img className='md:w-[6%] w-[5%]' src={roadmapCardLogo} alt="image" />
                  <p className='text-[#B2ACA8] font-passeroOne md:text-[18px] text-[14px]'>1,000+ Holders</p>
                </div>

                <div className='flex items-center md:gap-4 gap-3 md:mb-[14px] mb-[10px]'>
                  <img className='md:w-[6%] w-[5%]' src={roadmapCardLogo} alt="image" />
                  <p className='text-[#B2ACA8] font-passeroOne md:text-[18px] text-[14px]'>CoinGecko/Coinmarketcap</p>
                </div>

              </div>

              {/* ------------- card 2 -------------- */}
              <div className='2xl:ml-[715px] xl:ml-[586px] lg:ml-[455px] 2xl:mt-[-337px] xl:mt-[-305px] lg:mt-[-270px]'>
                <p className='text-[#FBA32C] font-pantonRust font-medium md:text-[26px] text-[20px] lg:leading-[36px] lg:tracking-[0.3px] md:mb-[14px] mb-[8px]'>PHASE 2</p>

                <div className='flex items-center md:gap-4 gap-3 md:mb-[14px] mb-[10px]'>
                  <img className='md:w-[6%] w-[5%]' src={roadmapCardLogo} alt="image" />
                  <p className='text-[#B2ACA8] font-passeroOne font-medium md:text-[18px] text-[14px]'>KOL Marketing</p>
                </div>

                <div className='flex items-center md:gap-4 gap-3 md:mb-[14px] mb-[10px]'>
                  <img className='md:w-[6%] w-[5%]' src={roadmapCardLogo} alt="image" />
                  <p className='text-[#B2ACA8] font-passeroOne font-medium md:text-[18px] text-[14px]'>Meme Contast</p>
                </div>

                <div className='flex items-center md:gap-4 gap-3 md:mb-[14px] mb-[10px]'>
                  <img className='md:w-[6%] w-[5%]' src={roadmapCardLogo} alt="image" />
                  <p className='text-[#B2ACA8] font-passeroOne md:text-[18px] text-[14px]'>First CEX Listing</p>
                </div>

              </div>

              {/* ------------- card 3 -------------- */}
              <div className='2xl:ml-[1245px] xl:ml-[995px] lg:ml-[760px] 2xl:mt-[-457px] xl:mt-[-397px] lg:mt-[-345px]'>
                <p className='text-[#FBA32C] font-pantonRust font-medium md:text-[26px] text-[20px] lg:leading-[36px] lg:tracking-[0.3px] md:mb-[14px] mb-[8px]'>PHASE 3</p>

                <div className='flex items-center md:gap-4 gap-3 md:mb-[14px] mb-[10px]'>
                  <img className='md:w-[6%] w-[5%]' src={roadmapCardLogo} alt="image" />
                  <p className='text-[#B2ACA8] font-passeroOne font-medium md:text-[18px] text-[14px]'>KOL Marketing</p>
                </div>

                <div className='flex items-center md:gap-4 gap-3 md:mb-[14px] mb-[10px]'>
                  <img className='md:w-[6%] w-[5%]' src={roadmapCardLogo} alt="image" />
                  <p className='text-[#B2ACA8] font-passeroOne font-medium md:text-[18px] text-[14px]'>Meme Contast</p>
                </div>

                <div className='flex items-center md:gap-4 gap-3'>
                  <img className='md:w-[6%] w-[5%]' src={roadmapCardLogo} alt="image" />
                  <p className='text-[#B2ACA8] font-passeroOne font-medium md:text-[18px] text-[14px]'>First CEX Listing</p>
                </div>

              </div>

            </div>

          </div>

        </div>


      </Container>
    </div>
  );
};

export default Roadmap;