import Container from '@/components/sections/Container/Container';


const Footer = () => {
  return (
    <div className='bg-[#FBA32C]'>
      <Container>
        {/* second part footer  */}
        <div className='flex justify-between items-center py-[33px]'>

          <div className='flex items-center gap-[40px]'>
            <p className='text-[#1E1510] font-passeroOne text-[20px] leading-[36px] uppercase'>loffar frog © {new Date().getFullYear()}</p>
            <p className='text-[#1E1510] font-passeroOne text-[20px] leading-[36px] uppercase cursor-pointer'>hi@loffar frog.com</p>
          </div>

          <div>
            <p className='text-[#1E1510] font-passeroOne text-[20px] leading-[32px] uppercase'>© 2023 , KINGDOM OF KEK, All Rights Reserved</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;