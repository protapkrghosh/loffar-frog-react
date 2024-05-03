import React from 'react';
import Container from '../Container/Container';
import faqImg from '@/assets/images/Group 1171275338.png';

const Faq = () => {
  return (
    <div className='lg:mt-[400px]'>
      <Container>

        <div className='flex 2xl:space-x-[150px] xl:space-x-[90px]'>

          {/* left side */}
          <div className='lg:w-[55%]'>

            {/* card 1  */}
            <div className='border border-[#775A34] bg-[#301F0C] lg:px-8 lg:py-7 rounded-[16px] lg:mb-[30px]'>
              <p className='text-[#FBA32C] font-passeroOne text-[24px] leading-[33.6px] lg:pb-[18px] uppercase'>What is Loffar Frog?</p>
              <p className='text-[#B2ACA8] font-passeroOne text-[18px] leading-[28.8px] capitalize xl:w-[95%]'>Loffar Frog is a creative hub where imagination takes flight. We specialize in crafting unique experiences and innovative solutions.</p>
            </div>

            {/* card 2  */}
            <div className='border border-[#775A34] bg-[#301F0C] lg:px-8 lg:py-7 rounded-[16px] lg:mb-[30px]'>
              <p className='text-[#FBA32C] font-passeroOne text-[24px] leading-[33.6px] lg:pb-[18px] uppercase'>What is Loffar Frog?</p>
              <p className='text-[#B2ACA8] font-passeroOne text-[18px] leading-[28.8px] capitalize xl:w-[95%]'>Joining the Loffar Frog community is easy! Simply explore our website to discover our latest projects and initiatives.</p>
            </div>

            {/* card 3  */}
            <div className='border border-[#775A34] bg-[#301F0C] lg:px-8 lg:py-7 rounded-[16px] lg:mb-[30px]'>
              <p className='text-[#FBA32C] font-passeroOne text-[24px] leading-[33.6px] lg:pb-[18px] uppercase'>What is Loffar Frog?</p>
              <p className='text-[#B2ACA8] font-passeroOne text-[18px] leading-[28.8px] capitalize xl:w-[95%]'>Yes, we love bringing unique visions to life! Contact us to discuss how we can tailor our services to meet your specific needs.</p>
            </div>

            {/* card 4  */}
            <div className='border border-[#775A34] bg-[#301F0C] lg:px-8 lg:py-7 rounded-[16px]'>
              <p className='text-[#FBA32C] font-passeroOne text-[24px] leading-[33.6px] lg:pb-[18px] uppercase'>What is Loffar Frog?</p>
              <p className='text-[#B2ACA8] font-passeroOne text-[18px] leading-[28.8px] capitalize xl:w-[95%]'>Stay connected with Loffar Frog by subscribing to our newsletter and following us on social media for the latest news and updates.</p>
            </div>

          </div>

          {/* right side  */}

          <div className='lg:w-[45%] lg:mt-[-75px]'>

            <p className='text-[#FBA32C] font-pantonRust font-medium text-[115px] leading-[138px] tracking-[2.3px] lg:mb-[16px]'>Faq</p>

            <p className='text-[#B2ACA8] font-passeroOne text-[20px] lg:leading-[34px] lg:tracking-[0.4px] lg:mb-[50px] xl:w-[90%]'>Explore our FAQ section for quick answers to common queries about Loffar Frog, your gateway to creativity and innovation.</p>

            <div className='2xl:w-[700px] xl:w-[500px]'>
              <img className='xl:ml-[-60px]' src={faqImg} alt="image" />
            </div>

          </div>

        </div>

      </Container>
    </div>
  );
};

export default Faq;