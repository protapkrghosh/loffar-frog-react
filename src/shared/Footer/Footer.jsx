import Container from '@/components/sections/Container/Container';


const Footer = () => {
  return (
    <div className='bg-[#FBA32C]' id='contract'>
      <Container>
        {/* second part footer  */}
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center py-[20px] md:py-[33px]'>

          <div className='flex items-center gap-[40px]'>
            <p className='text-[#1E1510] font-passeroOne lg:text-[20px] leading-[36px] uppercase'>loffar frog © {new Date().getFullYear()}</p>
            <p className='text-[#1E1510] font-passeroOne lg:text-[20px] leading-[36px] uppercase cursor-pointer'>hi@loffar frog.com</p>
          </div>

          <div>
            <p className='text-[#1E1510] font-passeroOne lg:text-[20px] leading-[32px] uppercase'>© 2023 , KINGDOM OF KEK, All Rights Reserved</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;