import React from 'react';
import Container from '../Container/Container';
import tokenomicsImg from '@/assets/images/Group 1171275346.png';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiCopy } from "react-icons/fi";
import { MdLibraryAddCheck } from "react-icons/md";

const Tokenomics = () => {

  const [copied, setCopied] = useState(false);

  // Copy the contact ID =============
  const copyLink = () => {
    if (!copied) {
      navigator.clipboard.writeText('CA: 0xaa86d4542969389b57936be83e5c888de001a95e').then(() => {
        toast.success('Copied!');
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };

  return (
    <div className='xl:mt-[200px] lg:mt-[150px] md:mt-[80px] mt-[60px]' id='tokenomics'>
      <Container>
        <p className='text-[#FBA32C] font-pantonRust font-medium 2xl:text-[115px] xl:text-[85px] lg:text-[65px] md:text-[60px] text-[30px] lg:leading-[138px] tracking-[2.3px] text-center lg:mb-[100px] md:mb-[50px] mb-[20px]'>TOKENOMICS</p>

        {/* tokenomics contain section  */}
        <div className='lg:flex items-center relative'>

          {/* ----------------- tokenomics left text section ----------- */}
          <div className='lg:w-[50%] bg-[#342114] rounded-[32px] 2xl:p-[40px] xl:p-[30px] lg:p-[20px] md:p-[30px] p-[15px]'>

            <p className='text-[#FBA32C] font-pantonRust xl:text-[40px] lg:text-[30px] md:text-[28px] text-[20px] lg:leading-[48px] lg:tracking-[0.4px] xl:mb-[24px] lg:mb-[18px] md:mb-[14px] mb-[10px]'>NO TAX. NO NONSENSE</p>

            <p className='text-[#B2ACA8] font-passeroOne 2xl:text-[20px] xl:text-[17px] lg:text-[15px] md:text-[14px] text-[12px] xl:leading-[32px] lg:leading-[24px] capitalize lg:mb-[16px] md:mb-[12px] mb-[10px]'>In the magical realm, the $KEKE project has transformed. 92.3% tokens are in liquidity pool, LP tokens burnt, and contract renounced. The remaining 7.7% resides in a multi-sig wallet for future centralized exchange listings and liquidity pools, </p>

            <p className='text-[#B2ACA8] font-passeroOne 2xl:text-[20px] xl:text-[17px] lg:text-[15px] md:text-[14px] text-[12px] xl:leading-[32px] lg:leading-[24px] capitalize lg:mb-[24px] md:mb-[20px] mb-[12px]'>trackable via the blockchain. KEK, bestows prosperity on its followers with zero taxes for $KEKE transactions. The economy thrives with KEK’s guidance and the faithful reap the rewards.</p>

            <div className='flex lg:gap-[88px] md:gap-[30px] gap-[24px]'>
              <div>
                <p className='text-[#FBA32C] font-passeroOne 2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[16px] lg:leading-[32px] lg:tracking-[0.4px] lg:mb-[-16px]'>TOTALL SUPPLY</p>
                <p className='text-[#FBA32C] font-passeroOne 2xl:text-[44px] xl:text-[40px] lg:text-[30px] md:text-[25px] text-[22px] lg:leading-[70.4px] lg:tracking-[0.88px] capitalize'>100000000000</p>
              </div>
              <div>
                <p className='text-[#FBA32C] font-passeroOne 2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[16px] lg:leading-[32px] lg:tracking-[0.4px] lg:mb-[-16px]'>TOKEN TICKER</p>
                <p className='text-[#FBA32C] font-passeroOne 2xl:text-[44px] xl:text-[40px] lg:text-[30px] md:text-[25px] text-[22px] lg:leading-[70.4px] lg:tracking-[0.88px] capitalize'>$FROG</p>
              </div>
            </div>

            {/* Copied text */}
            <div className='xl:mt-[24px] lg:mt-[16px] mt-[12px]'>
              <div className="flex items-center 2xl:gap-7 lg:gap-6 gap-5">
                <p className="text-[#FBA32C] font-passeroOne 2xl:text-[26px] xl:text-[21px] lg:text-[16px] md:text-[20px] text-[13px] lg:leading-[31.2px]">CA: 0xaa86d4542969389b57936be83e5c888de001a95e</p>
                <button onClick={() => { setCopied(!copied); copyLink() }}>
                  {
                    copied ? <MdLibraryAddCheck className="text-[15px] md:text-[20px] cursor-pointer text-[#FBA32C]" /> :
                      <FiCopy className="text-[15px] md:text-[20px] cursor-pointer text-[#FBA32C]" />
                  }
                </button>
              </div>
            </div>

          </div>

          {/* --------------- Tokenomics right img section ----------------- */}

          <div className='lg:w-[50%] 2xl:ml-[-35px] xl:ml-[-20px]'>

            <img className='2xl:w-auto xl:w-[86%] lg:w-[80%] md:w-[76%] w-[68%]' src={tokenomicsImg} alt="image" />

            {/* card 1 */}
            <div className='absolute 2xl:top-[110px] xl:top-[114px] lg:top-[126px] md:top-[445px] top-[345px] 2xl:right-[-10px] xl:right-[10px] lg:right-[10px] md:right-[105px] right-[70px]'>
              <p className='text-[#B2ACA8] font-passeroOne 2xl:text-[24px] xl:text-[22px] md:text-[18px] text-[12px] xl:leading-[40.8px] lg:leading-[5.8px] lg:tracking-[0.48px]'>Public sell</p>
              <p className='text-[#FBA32C] font-pantonRust 2xl:text-[47px] xl:text-[40px] md:text-[28px] text-[20px] font-medium lg:leading-[56.4px] lg:tracking-[0.47px]'>50%</p>
            </div>

            {/* card 2 */}
            <div className='absolute 2xl:top-[280px] xl:top-[240px] lg:top-[215px] md:top-[575px] top-[408px] 2xl:right-[-60px] xl:right-[-22px] lg:right-[-5px] md:right-[80px] right-[55px]'>
              <p className='text-[#B2ACA8] font-passeroOne 2xl:text-[24px] xl:text-[22px] md:text-[18px] text-[12px] xl:leading-[40.8px] lg:leading-[5.8px] lg:tracking-[0.48px]'>Airdrop</p>
              <p className='text-[#FE7339] font-pantonRust 2xl:text-[47px] xl:text-[40px] md:text-[28px] text-[20px] font-medium lg:leading-[56.4px] lg:tracking-[0.47px]'>05%</p>
            </div>

            {/* card 3 */}
            <div className='absolute 2xl:top-[430px] xl:top-[355px] lg:top-[300px] md:top-[700px] top-[467px] 2xl:right-[20px] xl:right-[34px] lg:right-[35px] md:right-[145px] right-[85px]'>
              <p className='text-[#B2ACA8] font-passeroOne 2xl:text-[24px] xl:text-[22px] md:text-[18px] text-[12px] xl:leading-[40.8px] lg:leading-[5.8px] lg:tracking-[0.48px]'>Presale</p>
              <p className='text-[#75C70E] font-pantonRust 2xl:text-[47px] xl:text-[40px] md:text-[28px] text-[20px] font-medium lg:leading-[56.4px] lg:tracking-[0.47px]'>45%</p>
            </div>

          </div>

        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;