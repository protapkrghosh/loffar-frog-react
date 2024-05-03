import Container from '@/components/sections/Container/Container';
import footerLogo from '@/assets/images/loffar logo 2.png';
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";



const FooterLinkSection = () => {
  return (
    <div className='lg:mt-[200px] bg-[#1E130C]'>
      <Container>

        {/* First part footer  */}
        <div className='flex justify-between lg:pt-[88px] lg:pb-[70px]'>

          <div>
            <img className='w-auto' src={footerLogo} alt="image" />
          </div>

          <div className='flex lg:gap-[32px] items-center'>

            <div className='flex gap-[14px]'>
              <a href="" target='_blank' className='text-[#F7B501] px-3 py-3 border border-[#F7B501] hover:bg-[#301F0C] rounded-[5px]'><FaTwitter className='w-[27px] h-[27px]' /></a>

              <a href="" target='_blank' className='text-[#F7B501] px-3 py-3 border border-[#F7B501] hover:bg-[#301F0C] rounded-[5px]'><FaTelegramPlane className='w-[27px] h-[27px]' /></a>

              <a href="" target='_blank' className='text-[#F7B501] px-3 py-3 border border-[#F7B501] hover:bg-[#301F0C] rounded-[5px]'><PiGithubLogoFill className='w-[27px] h-[27px]' /></a>

            </div>

            <div className='space-x-6'>
              <button className='bg-[#FBA32C] text-[#1E1510] font2 lg:text-[20px] lg:leading-[32px] lg:tracking-[0.4px] rounded-[8px] px-[24px] py-[12px]'>BUY ON OKX</button>
              <button className='border border-[#FBA32C] hover:bg-[#301F0C] text-[#FBA32C] font2 lg:text-[20px] lg:leading-[32px] lg:tracking-[0.4px] rounded-[8px] px-[24px] py-[12px]'>TOTALL SUPPLY</button>
            </div>

          </div>
        </div>


      </Container>
    </div>
  );
};

export default FooterLinkSection;
