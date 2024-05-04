import React from 'react';
import Container from '../Container/Container';
import faqImg from '@/assets/images/Group 1171275338.png';

const Faq = () => {
  return (
    <div className='my-[60px] md:my-[100px] xl:mt-[430px] lg:mt-[350px] md:mt-[160px] mt-[90px]' id='partners'>
      <Container>

        <div className='lg:flex 2xl:space-x-[150px] xl:space-x-[90px] gap-x-10 xl:gap-x-0'>

          {/* left side */}
          <div className='lg:w-[55%]'>

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
              <p className='text-[#B2ACA8] font-passeroOne text-[15px] xl:text-[17px] 2xl:text-[18px] leading-[28.8px] capitalize xl:w-[95%]'>Stay connected with Loffar Frog by subscribing to our newsletter and following us on social media for the latest news and updates.</p>
            </div>

          </div>

          {/* right side  */}

          <div className='lg:w-[45%] lg:mt-[-75px] md:mt-10 mt-5'>

            <p className='text-[#FBA32C] text-center lg:text-start font-pantonRust font-medium lg:text-[65px] md:text-[60px] text-[30px] xl:text-[115px] leading-[100px] md:leading-[138px] tracking-[2.3px] xl:mb-[16px]' data-aos="fade-up"
              data-aos-duration="1500">Faq</p>

            <p className='text-[#B2ACA8] text-center lg:text-start font-passeroOne text-[17px] lg:text-[19px] xl:text-[17px] 2xl:text-[20px] lg:leading-[34px] lg:tracking-[0.4px] lg:mb-[50px] xl:w-[90%] -mt-4 lg:mt-0' data-aos="fade-up"
              data-aos-duration="2200">Explore our FAQ section for quick answers to common queries about Loffar Frog, your gateway to creativity and innovation.</p>

            <div className='2xl:w-[700px] xl:w-[500px] mt-10 lg:mt-0'>
              <img className='xl:ml-[-60px] lg:h-[500px] xl:h-[600px] 2xl:h-auto md:w-[70%] lg:w-auto mx-auto lg:mx-0' src={faqImg} alt="image" />
            </div>

          </div>

        </div>

      </Container>
    </div>
  );
};

export default Faq;