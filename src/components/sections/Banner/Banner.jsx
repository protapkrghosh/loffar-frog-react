import bannerBg from "@/assets/images/Rectangle.png"
import frogCard from "@/assets/images/Group.png"
import Container from "../Container/Container";
import { useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { MdLibraryAddCheck } from "react-icons/md";
import toast from 'react-hot-toast';

const Banner = () => {
  const [copied, setCopied] = useState(false);
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
        <span className="text-[#1E1510] text-[12px] md:text-[16px] lg:text-[15px] xl:text-[15.99px] font-semibold font-pantonRust rounded-[8px] mx-[16px] md:mx-[20px] lg:mx-[24px] xl:mx-[24px] 2xl:mx-[26px] py-3">
          {timeLeft[interval]}
        </span>{" "}

        {/* <span className="text-white text-[13px] md:text-[16px] uppercase absolute top-10 left-[16px] md:left-[22px] mt-[10px] md:mt-[15px]">
          {interval.slice(0, interval.length - 1)}
        </span>{" "} */}
      </span>
    );
  });


  // Copy the contact ID =============
  const copyLink = () => {
    if (!copied) {
      navigator.clipboard.writeText('0xaa86d4542969389b57936be83e5c888de001a95e').then(() => {
        toast.success('Copied!');
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };

  return (
    <div>
      <div>
        <img src={bannerBg} alt="Image" className="h-[1000px] lg:h-[1150px]  xl:h-[1150px] 2xl:h-auto w-full -mt-[125px] -mb-[800px] lg:-mb-[950px] xl:-mb-[928px] 2xl:-mb-[1050px] hidden lg:block" />

        <div className="mt-14 lg:mt-0 mb-[200px] md:mb-[235px]">
          <Container>
            <div className="lg:flex justify-between items-center gap-x-[35px] xl:gap-x-[91px]">
              <div className="lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                <div className="relative">
                  <img src={frogCard} alt="Image" className="h-[700px] md:h-[860px] lg:h-[840px] xl:h-[820px] 2xl:h-[820px] md:w-[550px] lg:w-auto xl:scale-105 2xl:scale-110 mx-auto lg:mx-0"/>

                  <div className="absolute bottom-[60px] md:bottom-[55px] lg:bottom-[48px] xl:bottom-[40px] 2xl:bottom-[25px] left-[65px] md:left-[170px] lg:left-[100px] xl:left-[90px] 2xl:left-[95px]">
                    <p className="text-[#1E1510] text-[12px] md:text-[15px] font-pantonRust font-extrabold leading-[19px] proportional-nums">Presale Ends in:</p>
                    <p className="text-[#1E1510] text-[10px] md:text-[14px] lg:text-[13px] xl:text-[14px] font-passeroOne leading-[16px] mt-1 md:mt-[9px] mb-[5px] md:mb-[11px]">Token Will Be On Raydium My 1fst 2024</p>

                    {/* Timers */}
                    <div className="relative">
                      <div className="h-[45px] md:h-[58px] w-[180px] md:w-[235px] lg:w-[250px] xl:w-[260px] 2xl:w-[265px] bg-[#FBA32C] rounded-[8px] -ml-[10px] md:ml-[0px] lg:-ml-[20px] xl:-ml-[18px] 2xl:-ml-[18px]" />
                      {timerComponents.length ?
                        (
                          <div className="absolute -top-1">
                            <div className='flex justify-center text-[#1E1510] font-pantonRust absolute top-[5px] md:top-[14px] -left-[11px] md:left-0 lg:-left-[27px] xl:-left-[24px] 2xl:-left-7'>
                              {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                            </div>

                            <div className="text-[12px] md:text-[15px] text-[#1E1510] font-pantonRust font-semibold leading-[19px] space-x-[44px] md:space-x-14 lg:space-x-[62px] xl:space-x-[63px] 2xl:space-x-[68px] absolute top-[9px] md:top-[16px] left-[30px] md:left-[55px] lg:left-[36px] xl:left-[40px] 2xl:left-[40px]">
                              <span>:</span>
                              <span>:</span>
                              <span>:</span>
                            </div>

                            <div className="text-[8.6px] text-[#1E1510] font-passeroOne leading-[10px] space-x-[31px] md:space-x-[45px] lg:space-x-[53px] xl:space-x-[53px] 2xl:space-x-[56px] absolute top-[32px] md:top-[43px] left-[7px] md:left-[25px] lg:left-[2px] xl:left-[4px] 2xl:left-[4px]">
                              <span>Day</span>
                              <span>Hrs</span>
                              <span>Mins</span>
                              <span>Sec</span>
                            </div>
                          </div>
                        ) : <span className="text-[#1E1510] font-pantonRust absolute top-5 left-[72px]">Time's up!</span>
                      }
                    </div>

                    <div>
                      <p className="bg-[#efc79b] text-[#1E1510] text-center text-[10px] md:text-[13px] xl:text-[14px] font-passeroOne leading-[16px] tracking-[0.56px] rounded-[6px] pr-1 md:pr-3 py-[3px] md:py-[6px] mt-[10px] md:mt-[18px] mb-2 md:mb-3 -ml-6 lg:-ml-9 xl:-ml-9 2xl:-ml-12 w-fit capitalize"><span className="bg-[#FBA32C] pl-1 md:pl-3 pr-[5px] py-[5px] md:py-[8px] rounded-[6px]">over 2 Million</span> Contribution Received and Growing</p>

                      <p className="text-[#624737] text-[12px] md:text-[17px] xl:text-[18px] font-pantonRust font-medium leading-[21px] ml-4 lg:ml-3 xl:ml-4 2xl:ml-0">Send Sol To This Wallet</p>

                      {/* Copied text */}
                      <div className='flex justify-center md:justify-start -ml-10 md:-ml-6 lg:-ml-9 xl:-ml-9 2xl:-ml-12 my-[5px] md:my-3'>
                        <div className="flex justify-center items-center text-[10.2px] md:text-[13px] xl:text-[14px] border border-[#d88c28] bg-[#FBA32C] px-[5px] md:px-[11px] py-[5px] md:py-[9px] rounded-[6px] w-fit">
                          <p className="text-[#1E1510] font-passeroOne mr-2 md:mr-3">0xaa86d4542969389b57936be83e5c888de001a95e</p>
                          <button onClick={() => { setCopied(!copied); copyLink() }}>
                            {
                              copied ? <MdLibraryAddCheck className="text-[10px] md:text-[12px] xl:text-[13px] cursor-pointer text-[#1E1510]" /> :
                                <FiCopy className="text-[10px] md:text-[12px] xl:text-[13px] cursor-pointer text-[#1E1510]" />
                            }
                          </button>
                        </div>
                      </div>

                      <p className="text-[#624737] text-[12px] md:text-[17px] xl:text-[18px] font-pantonRust font-medium leading-[21px] -ml-[2px] md:-ml-[4px] lg:-ml-[15px] xl:-ml-3 2xl:-ml-6">HOW TO PARTICIPATE IN PRESALE</p>

                      <div className="text-[#1E1510] text-[9px] md:text-[12px] xl:text-[13px] 2xl:text-[14px] text-center font-passeroOne leading-[16px] tracking-[0.56px] capitalize mt-[8px] mb-[12px] -ml-[35px] md:-ml-[45px] lg:-ml-[58px] xl:-ml-[55px] 2xl:-ml-[75px]">
                        <p className="bg-[#efc69b91] border-[0.5px] border-[#EDBB8D] rounded-[6px] py-[4px] md:py-[6px]">Send Sol to our provided wallet.</p>

                        <p className="bg-[#efc69b91] border-[0.5px] border-[#EDBB8D] rounded-[6px] py-[4px] md:py-[6px] my-[3px] md:my-[6px]">Minimum: 0.50 Sol and Maximum 150 Sol From A Single Wallet.</p>

                        <p className="bg-[#efc69b91] border-[0.5px] border-[#EDBB8D] rounded-[6px] py-[4px] md:py-[6px]">tokens will be airdropped to the sending wallet.</p>

                        <p className="bg-[#FBA32C] border-[0.6px] border-[#d88c28] rounded-[6px] md:px-3 2xl:px-[10px] py-[4px] md:py-[6px] mt-[6px] md:mt-3 lg:mt-2 xl:mt-3">NB: Don't use a Exchange to send SOL! Use your own wallet..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Banner Content */}
              <div className="lg:w-[40%] xl:w-[50%] 2xl:w-[60%] mt-10 md:mt-20 lg:mt-0">
                <h3 className="text-[19px] md:text-[32px] lg:text-[27px] xl:text-[40px] 2xl:text-[60px] text-[#FBA32C] text-center lg:text-start font-pantonRust leading-[50px] md:leading-[72px] tracking-[1.2px]">Welcome to</h3>

                <h1 className="text-[30px] md:text-[60px] lg:text-[48px] xl:text-[77px] 2xl:text-[116px] text-[#FBA32C] text-center lg:text-start font-pantonRust 2xl:leading-[150px] tracking-[2.5px] -mt-3 2xl:mt-[8px]">Loffar frog</h1>

                <p className="lg:text-[15px] xl:text-[15px] 2xl:text-[24px] text-[#B2ACA8]  text-center lg:text-start font-passeroOne leading-[25px] xl:leading-[35px] 2xl:leading-[40px] tracking-[0.48px] mt-3 md:mt-0 lg:mt-[15px] xl:mt-0 2xl:mt-[24px] mb-[40px] 2xl:mb-[50px] xl:w-[95%] 2xl:w-full">Where imagination leaps beyond boundaries, crafting worlds of whimsy and wonder. Dive into our pond of creativity and join the adventure today!</p>

                <div className="flex justify-center lg:justify-normal">
                  <div className="space-y-3 md:space-x-5 lg:space-x-2 xl:space-x-7">
                    <button className='border border-[#FBA32C] hover:bg-[#fba12c15] text-[#FBA32C] font-passeroOne text-[13px] xl:text-[15px] 2xl:text-[20px] lg:leading-[32px] lg:tracking-[0.4px] rounded-[8px] px-[20px] lg:px-3 xl:px-[20px] 2xl:px-[24px] py-3 lg:py-1 xl:py-2 2xl:py-[12px] duration-100 w-full md:w-auto'>BUY ON OKX</button>

                    <button className='border border-[#FBA32C] hover:bg-[#fba12c15] text-[#FBA32C] font-passeroOne text-[13px] xl:text-[15px] 2xl:text-[20px] lg:leading-[32px] lg:tracking-[0.4px] rounded-[8px] px-[20px] lg:px-3 xl:px-[20px] 2xl:px-[24px] py-3 lg:py-1 xl:py-2 2xl:py-[12px] duration-100 w-full md:w-auto'>BUY ON MEXC</button>

                    <button className='border border-[#FBA32C] hover:bg-[#fba12c15] text-[#FBA32C] font-passeroOne text-[13px] xl:text-[15px] 2xl:text-[20px] lg:leading-[32px] lg:tracking-[0.4px] rounded-[8px] md:px-[20px] lg:px-3 xl:px-[20px] 2xl:px-[24px] py-3 lg:py-1 xl:py-2 2xl:py-[12px] duration-100 w-full md:w-auto'>BUY ON UNISWAP</button>
                  </div>
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
