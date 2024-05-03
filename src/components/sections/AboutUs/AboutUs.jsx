import React from 'react';
import Container from '../Container/Container';
import aboutImg from '@/assets/images/Group 1171275328.png';

const AboutUs = () => {
  return (
    <div className='xl:mt-[185px]'>

      <Container>

        <div className='flex items-center lg:space-x-4'>
          <div className='lg:w-[60%]'>
            <p className='text-[#FBA32C] text-[105px] font-pantonRust font-medium leading-[126px] tracking-[2.1px] lg:mb-[24px]'>about Us frog</p>
            <p className='text-[#B2ACA8] text-[24px] font-passeroOne leading-[40.8px] tracking-[0.48px] lg:mb-[16px]'>Welcome to Loffar Frog, where imagination meets innovation. As the whimsical minds behind the scenes, we're dedicated to crafting delightful experiences that enchant and inspire. </p>

            <p className='text-[#B2ACA8] text-[24px] font-passeroOne leading-[40.8px] tracking-[0.48px] lg:mb-[40px]'>With a playful approach to design and a commitment to excellence, we hop into every project with boundless enthusiasm. Dive into our world of creativity and let Loffar Frog redefine the art of storytelling. Join us on this adventure, where every leap brings us closer to new horizons.</p>

            <div className='space-x-6'>
              <button className='bg-[#FBA32C] text-[#1E1510] font-passeroOne lg:text-[24px] lg:leading-[38.4px] lg:tracking-[0.48px] rounded-[8px] px-[24px] py-[12px]'>BUY Now</button>
              
              <button className='border border-[#FBA32C] bg-[#1E1510] text-[#FBA32C] font-passeroOne lg:text-[24px] lg:leading-[38.4px] lg:tracking-[0.48px] rounded-[8px] px-[24px] py-[12px]'>Learn More</button>
            </div>
          </div>

          <div className='lg:w-[40%]'>
            <img className='lg:ml-[50px]' src={aboutImg} alt="image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;