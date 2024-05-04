import React from 'react';
import Container from '../Container/Container';
import faqImg from '@/assets/images/Group 1171275370.png';

const Faq = () => {
  return (
    <div className='my-[60px] md:my-[100px] xl:mt-[430px] lg:mt-[350px] md:mt-[100px] mt-[60px]' id='partners'>
      <Container>

        <div className='flex items-center flex-col-reverse lg:flex-row 2xl:space-x-[40px] xl:space-x-[50px] lg:space-x-[5px] gap-x-10 xl:gap-x-0'>

          {/* left side */}
          <div className='lg:w-[51%] mt-10 lg:mt-0'>
            {/* card 1  */}
            <div className='border border-[#775A34] bg-[#301F0C] px-7 py-5 xl:py-7 rounded-[16px] mb-[30px]'>
              <p className='text-[#FBA32C] font-passeroOne text-[20px] xl:text-[24px] leading-[33.6px] pb-[15px] lg:pb-[12px] xl:pb-[18px] uppercase'>What is Loffar Frog?</p>

              <p className='text-[#B2ACA8] font-passeroOne text-[15px] xl:text-[17px] 2xl:text-[18px] leading-[28.8px] capitalize xl:w-[95%]'>Loffar Frog is a creative hub where imagination takes flight. We specialize in crafting unique experiences and innovative solutions.</p>
            </div>

            {/* card 2  */}
            <div className='border border-[#775A34] bg-[#301F0C] px-7 py-5 xl:py-7 rounded-[16px] mb-[30px]'>
              <p className='text-[#FBA32C] font-passeroOne text-[20px] xl:text-[24px] leading-[33.6px] pb-[15px] lg:pb-[12px] xl:pb-[18px] uppercase'>What is Loffar Frog?</p>
              <p className='text-[#B2ACA8] font-passeroOne text-[15px] xl:text-[17px] 2xl:text-[18px] leading-[28.8px] capitalize xl:w-[95%]'>Joining the Loffar Frog community is easy! Simply explore our website to discover our latest projects and initiatives.</p>
            </div>

            {/* card 3  */}
            <div className='border border-[#775A34] bg-[#301F0C] px-7 py-5 xl:py-7 rounded-[16px] mb-[30px]'>
              <p className='text-[#FBA32C] font-passeroOne text-[20px] xl:text-[24px] leading-[33.6px] lg:pb-[12px] xl:pb-[18px] uppercase'>What is Loffar Frog?</p>
              <p className='text-[#B2ACA8] font-passeroOne text-[15px] xl:text-[17px] 2xl:text-[18px] leading-[28.8px] capitalize xl:w-[95%]'>Yes, we love bringing unique visions to life! Contact us to discuss how we can tailor our services to meet your specific needs.</p>
            </div>

            {/* card 4  */}
            <div className='border border-[#775A34] bg-[#301F0C] px-7 py-5 xl:py-7 rounded-[16px]'>
              <p className='text-[#FBA32C] font-passeroOne text-[20px] xl:text-[24px] leading-[33.6px] pb-[15px] lg:pb-[12px] xl:pb-[18px] uppercase'>What is Loffar Frog?</p>
              <p className='text-[#B2ACA8] font-passeroOne text-[15px] xl:text-[17px] 2xl:text-[18px] leading-[28.8px] capitalize xl:w-[93%]'>Stay connected with Loffar Frog by subscribing to our newsletter and following us on social media for the latest news and updates.</p>
            </div>

            {/* <div className='2xl:w-[700px] xl:w-[500px] mt-14 lg:mt-0 block lg:hidden'>
              <img className='xl:ml-[-60px] lg:h-[500px] xl:h-[600px] 2xl:h-auto md:w-[70%] lg:w-auto mx-auto lg:mx-0' src={faqImg} alt="image" />
            </div> */}

          </div>

          {/* right side  */}

          <div className='lg:w-[49%]'>


            <div className=''>
              <img className='lg:w-auto md:w-[90%]' src={faqImg} alt="image" />
            </div>

          </div>

        </div>

      </Container>
    </div>
  );
};

export default Faq;