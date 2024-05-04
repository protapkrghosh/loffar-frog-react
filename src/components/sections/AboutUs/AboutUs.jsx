import React from 'react';
import Container from '../Container/Container';
import aboutImg from '@/assets/images/Group 1171275328.png';

const AboutUs = () => {
  return (
    <div>
      <div className='h-[40px] w-full mt-[-130px] 2xl:mt-[-5px] bg-[#FBA32C]' />
      <div className='xl:mt-[185px] lg:mt-[145px] md:mt-[90px] mt-[60px]'>
        <Container>

          <div className='lg:flex items-center lg:space-x-4'>
            <div className='lg:w-[60%]'>
              <p className='text-[#FBA32C] lg:text-start text-center 2xl:text-[105px] xl:text-[85px] lg:text-[65px] md:text-[60px] text-[30px] font-pantonRust font-medium lg:leading-[126px] lg:tracking-[2.1px] lg:mb-[24px] md:mb-[18px] mb-[14px]'>about Us frog</p>

              <p className='text-[#B2ACA8] lg:text-start text-center xl:text-[24px] lg:text-[20px] md:text-[16px] text-[12px] font-passeroOne xl:leading-[40.8px] lg:leading-[30.8px] md:leading-[22.8px] tracking-[0.48px] lg:mb-[16px] md:mb-[14px] mb-[12px]'>Welcome to Loffar Frog, where imagination meets innovation. As the whimsical minds behind the scenes, we're dedicated to crafting delightful experiences that enchant and inspire. </p>

              <p className='text-[#B2ACA8] lg:text-start text-center xl:text-[24px] lg:text-[20px] md:text-[16px] text-[12px] font-passeroOne xl:leading-[40.8px] lg:leading-[30.8px] md:leading-[22.8px] lg:mb-[40px] md:mb-[24px] mb-[18px]'>With a playful approach to design and a commitment to excellence, we hop into every project with boundless enthusiasm. Dive into our world of creativity and let Loffar Frog redefine the art of storytelling. Join us on this adventure, where every leap brings us closer to new horizons.</p>

              <div className='md:space-x-6 space-x-3 lg:text-start text-center'>
                <button className='bg-[#FBA32C] hover:bg-transparent border border-[#FBA32C] text-[#1E1510] hover:text-[#FBA32C] font-passeroOne md:text-[24px] text-[16px] lg:leading-[38.4px] lg:tracking-[0.48px] rounded-[8px] md:px-[24px] px-[18px] md:py-[12px] py-[8px] duration-300'>BUY Now</button>

                <button className='border border-[#FBA32C] bg-[#1E1510] hover:bg-[#FBA32C] text-[#FBA32C] hover:text-[#1E1510] font-passeroOne md:text-[24px] text-[16px] lg:leading-[38.4px] lg:tracking-[0.48px] rounded-[8px] md:px-[24px] px-[18px] md:py-[12px] py-[8px] duration-300'>Learn More</button>
              </div>
            </div>

            <div className='lg:w-[40%] lg:mt-0 mt-[50px]'>
              <img className='lg:ml-[50px] lg:w-auto w-[80%] mx-auto' src={aboutImg} alt="image" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;