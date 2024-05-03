import bannerBg from "@/assets/images/Rectangle.png"
import frogCard from "@/assets/images/Group.png"
import Container from "../Container/Container";

const Banner = () => {
  return (
    <div>
      <div>
        <img src={bannerBg} alt="Image" className="h-[1000px] 2xl:h-auto w-full xl:-mt-[125px] xl:-mb-[800px] 2xl:-mb-[1090px]" />

        <div className="mb-[275px] 2xl:mb-[">
          <Container>
            <div className="md:flex justify-between items-center gap-x-[91px]">
              <div className="md:w-[40%] xl:w-[45%] 2xl:w-[40%]">
                <div className="relative">
                  <img src={frogCard} alt="Image" />

                  {/* <div className="absolute bottom-96 left-24">
                    <p className="text-[#1E1510] text-[15px] font-passeroOne font-medium leading-[19px] proportional-nums">Presale Ends in:</p>
                    <p className="text-[#1E1510] text-[14px] font-passeroOne leading-[16px]">Token Will Be On Raydium My 1fst 2024</p>
                  </div> */}
                </div>
              </div>

              {/* Banner Content */}
              <div className="md:w-[60%] xl:w-[55%] 2xl:w-[60%]">
                <h3 className="text-[60px] text-[#FBA32C] font-pantonRust leading-[72px] tracking-[1.2px]">Welcome to</h3>
                <h1 className="text-[85px] 2xl:text-[116px] text-[#FBA32C] font-pantonRust leading-[150px] tracking-[2.5px] -mt-3 2xl:mt-[8px]">Loffar frog</h1>

                <p className="2xl:text-[24px] text-[#B2ACA8] font-passeroOne leading-[40px] tracking-[0.48px] 2xl:mt-[24px] mb-[40px] 2xl:mb-[50px] xl:w-[95%] 2xl:w-full">Where imagination leaps beyond boundaries, crafting worlds of whimsy and wonder. Dive into our pond of creativity and join the adventure today!</p>

                <div className="space-x-7">
                  <button className='border border-[#FBA32C] hover:bg-[#fba12c15] text-[#FBA32C] font-passeroOne 2xl:text-[20px] lg:leading-[32px] lg:tracking-[0.4px] rounded-[8px] px-[20px] 2xl:px-[24px] py-[12px] duration-100'>BUY ON OKX</button>

                  <button className='border border-[#FBA32C] hover:bg-[#fba12c15] text-[#FBA32C] font-passeroOne 2xl:text-[20px] lg:leading-[32px] lg:tracking-[0.4px] rounded-[8px] px-[20px] 2xl:px-[24px] py-[12px] duration-100'>BUY ON MEXC</button>

                  <button className='border border-[#FBA32C] hover:bg-[#fba12c15] text-[#FBA32C] font-passeroOne 2xl:text-[20px] lg:leading-[32px] lg:tracking-[0.4px] rounded-[8px] px-[20px] 2xl:px-[24px] py-[12px] duration-100'>BUY ON UNISWAP</button>
                </div>
              </div>
            </div>
          </Container>
        </div>

      </div>
    </div>
  );
};

export default Banner;
