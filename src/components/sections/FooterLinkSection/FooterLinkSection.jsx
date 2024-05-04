import Container from '@/components/sections/Container/Container';
import footerLogo from '@/assets/images/loffar logo 2.png';
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { Link } from "react-scroll";



const FooterLinkSection = () => {
  return (
    <div className='lg:mt-[160px] bg-[#1E130C]'>
      <Container>

        {/* -- First part footer -- */}
        <div className='hidden md:block'>
          <div className='flex justify-between xl:pt-[88px] xl:pb-[70px] py-[55px]'>
            <Link to="home" smooth={true} offset={-30} duration={600}>
              <img className='w-auto cursor-pointer' src={footerLogo} alt="image" />
            </Link>

            <div className='flex lg:gap-[32px] items-center'>
              <div className='flex gap-[14px] mr-6 lg:mr-0'>
                <a href="" target='_blank' className='text-[#F7B501] px-3 py-3 border border-[#F7B501] hover:bg-[#301F0C] rounded-[5px]' data-aos="fade-up"
                  data-aos-duration="600"><FaXTwitter className='w-[27px] h-[27px]' /></a>

                <a href="" target='_blank' className='text-[#F7B501] px-3 py-3 border border-[#F7B501] hover:bg-[#301F0C] rounded-[5px]' data-aos="fade-up"
                  data-aos-duration="1200"><FaTelegramPlane className='w-[27px] h-[27px]' /></a>

                <a href="" target='_blank' className='text-[#F7B501] px-3 py-3 border border-[#F7B501] hover:bg-[#301F0C] rounded-[5px]' data-aos="fade-up"
                  data-aos-duration="1800"><PiGithubLogoFill className='w-[27px] h-[27px]' /></a>
              </div>

              <div className='space-x-6'>
                <button className='bg-[#FBA32C] hover:bg-transparent border border-[#FBA32C] text-[#1E1510] hover:text-[#FBA32C] font-passeroOne lg:text-[20px] lg:leading-[32px] lg:tracking-[0.4px] rounded-[8px] px-[23px] py-[11.5px] duration-300' data-aos="fade-up"
                  data-aos-duration="2200">BUY ON OKX</button>

                <button className='border border-[#FBA32C] hover:bg-[#FBA32C] text-[#FBA32C] hover:text-[#1E1510] font-passeroOne lg:text-[20px] lg:leading-[32px] lg:tracking-[0.4px] rounded-[8px] px-[24px] py-[12px] duration-300' data-aos="fade-up"
                  data-aos-duration="2600">TOTALL SUPPLY</button>
              </div>

            </div>
          </div>
        </div>


        {/* Small device action button */}
        <div className='block md:hidden'>
          <div className='xl:pt-[88px] xl:pb-[70px] py-[55px]'>
            <div className='flex justify-between'>
              <Link to="home" smooth={true} offset={-30} duration={600}>
                <img className='w-auto cursor-pointer' src={footerLogo} alt="image" />
              </Link>

              <div className='flex gap-[14px]'>
                <a href="" target='_blank' className='text-[#F7B501] px-3 py-3 border border-[#F7B501] hover:bg-[#301F0C] rounded-[5px]'><FaXTwitter className='w-[27px] h-[27px]' /></a>

                <a href="" target='_blank' className='text-[#F7B501] px-3 py-3 border border-[#F7B501] hover:bg-[#301F0C] rounded-[5px]'><FaTelegramPlane className='w-[27px] h-[27px]' /></a>

                <a href="" target='_blank' className='text-[#F7B501] px-3 py-3 border border-[#F7B501] hover:bg-[#301F0C] rounded-[5px]'><PiGithubLogoFill className='w-[27px] h-[27px]' /></a>
              </div>
            </div>

            <div className='flex flex-col space-y-5 mt-10'>
              <button className='bg-[#FBA32C] hover:bg-transparent border border-[#FBA32C] text-[#1E1510] hover:text-[#FBA32C] font-passeroOne lg:text-[20px] lg:leading-[32px] lg:tracking-[0.4px] rounded-[8px] px-[23px] py-[11.5px] duration-300'>BUY ON OKX</button>

              <button className='border border-[#FBA32C] hover:bg-[#FBA32C] text-[#FBA32C] hover:text-[#1E1510] font-passeroOne lg:text-[20px] lg:leading-[32px] lg:tracking-[0.4px] rounded-[8px] px-[24px] py-[12px] duration-300'>TOTALL SUPPLY</button>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default FooterLinkSection;
