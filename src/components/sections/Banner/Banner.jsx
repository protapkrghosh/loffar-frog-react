import bannerBg from "@/assets/images/Rectangle.png"
import frogCard from "@/assets/images/Group.png"
import Container from "../Container/Container";
import { useEffect, useState } from "react";

const Banner = () => {
  const [presalePercentage, setPresalePercentage] = useState(2);

  // Dynamic timer
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-05-16") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),

      };
    }

    // Pad numbers with leading zeros
    Object.keys(timeLeft).forEach(interval => {
      timeLeft[interval] = timeLeft[interval].toString().padStart(2, '0');
    });

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setPresalePercentage(99 - timeLeft.hours * 1.2);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span key={interval} className="relative">
        <span className="text-[#1E1510] text-[15.99px] font-semibold font-pantonRust rounded-[8px] mx-[20px] py-3">
          {timeLeft[interval]}
        </span>{" "}

        {/* <span className="text-white text-[13px] md:text-[16px] uppercase absolute top-10 left-[16px] md:left-[22px] mt-[10px] md:mt-[15px]">
          {interval.slice(0, interval.length - 1)}
        </span>{" "} */}
      </span>
    );
  });

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

                  <div className="absolute bottom-[355px] 2xl:bottom-[380px] left-[64px] 2xl:left-[90px]">
                    <p className="text-[#1E1510] text-[15px] font-pantonRust font-extrabold leading-[19px] proportional-nums">Presale Ends in:</p>
                    <p className="text-[#1E1510] text-[14px] font-passeroOne leading-[16px] mt-[9px] mb-[11px]">Token Will Be On Raydium My 1fst 2024</p>

                    {/* Timers */}
                    <div className="relative">
                      <div className="h-[62px] w-[240px] bg-[#FBA32C] rounded-[8px]" />
                      {timerComponents.length ?
                        (
                          <div className="absolute -top-1">
                            <div className='flex justify-center text-[#1E1510] font-pantonRust absolute top-[14px]'>
                              {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                            </div>

                            <div className="text-[15px] text-[#1E1510] font-pantonRust font-semibold leading-[19px] space-x-14 absolute top-[16px] left-[55px]">
                              <span>:</span>
                              <span>:</span>
                              <span>:</span>
                            </div>

                            <div className="text-[8.6px] text-[#1E1510] font-passeroOne leading-[10px] space-x-[45px] absolute top-[43px] left-[25px]">
                              <span>Day</span>
                              <span>Hrs</span>
                              <span>Mins</span>
                              <span>Sec</span>
                            </div>
                          </div>
                        ) : <span className="text-[#1E1510] font-pantonRust absolute top-5 left-[72px]">Time's up!</span>
                      }
                    </div>
                  </div>
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
