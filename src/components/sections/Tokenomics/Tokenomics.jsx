import React from 'react';
import Container from '../Container/Container';
import tokenomicsImg from '@/assets/images/Group 1171275346.png';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoCopy } from "react-icons/io5";
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
    <div className='lg:mt-[200px]'>
      <Container>
        <p className='text-[#FBA32C] font-pantonRust font-medium text-[115px] lg:leading-[138px] tracking-[2.3px] text-center lg:mb-[100px]'>TOKENOMICS</p>

        {/* tokenomics contain section  */}
        <div className='flex items-center relative'>

          {/* ----------------- tokenomics left text section ----------- */}
          <div className='w-[50%] bg-[#342114] rounded-[32px] lg:p-[40px]'>
            <p className='text-[#FBA32C] font-pantonRust lg:text-[40px] lg:leading-[48px] lg:tracking-[0.4px] lg:mb-[24px]'>NO TAX. NO NONSENSE</p>

            <p className='text-[#B2ACA8] font-passeroOne lg:text-[20px] lg:leading-[32px] capitalize lg:mb-[16px]'>In the magical realm, the $KEKE project has transformed. 92.3% tokens are in liquidity pool, LP tokens burnt, and contract renounced. The remaining 7.7% resides in a multi-sig wallet for future centralized exchange listings and liquidity pools, </p>

            <p className='text-[#B2ACA8] font-passeroOne lg:text-[20px] lg:leading-[32px] capitalize lg:mb-[24px]'>trackable via the blockchain. KEK, bestows prosperity on its followers with zero taxes for $KEKE transactions. The economy thrives with KEK’s guidance and the faithful reap the rewards.</p>

            <div className='flex lg:gap-[88px]'>
              <div>
                <p className='text-[#FBA32C] font-passeroOne text-[20px] lg:leading-[32px] lg:tracking-[0.4px] lg:mb-[-16px]'>TOTALL SUPPLY</p>
                <p className='text-[#FBA32C] font-passeroOne text-[44px] lg:leading-[70.4px] lg:tracking-[0.88px] capitalize'>100000000000</p>
              </div>
              <div>
                <p className='text-[#FBA32C] font-passeroOne text-[20px] lg:leading-[32px] lg:tracking-[0.4px] lg:mb-[-16px]'>TOKEN TICKER</p>
                <p className='text-[#FBA32C] font-passeroOne text-[44px] lg:leading-[70.4px] lg:tracking-[0.88px] capitalize'>$FROG</p>
              </div>
            </div>


            {/* Copied text */}
            <div className='flex justify-center md:justify-start mt-10'>
              <div className="flex justify-center items-center text-[14px] lg:text-[16px] xl:text-[19px] bg-[#DF355F] border py-3 xl:py-[15px] rounded-full w-full px-5 xl:px-6">
                <p className="text-[#D0CFCF] mr-2 md:mr-5">CA: 0xaa86d4542969389b57936be83e5c888de001a95e</p>
                <button onClick={() => { setCopied(!copied); copyLink() }}>
                  {
                    copied ? <MdLibraryAddCheck className="text-[15px] md:text-[20px] cursor-pointer text-[#fff]" /> :
                      <IoCopy className="text-[15px] md:text-[20px] cursor-pointer text-[#fff]" />
                  }
                </button>
              </div>
            </div>

          </div>


          {/* --------------- Tokenomics right img section ----------------- */}

          <div className='w-[50%] lg:ml-[-35px]'>
            <img className='xl:w-auto' src={tokenomicsImg} alt="image" />


            {/* card 1 */}
            <div className='absolute xl:top-[110px] xl:right-[-10px]'>
              <p className='text-[#B2ACA8] font-passeroOne text-[24px] lg:leading-[40.8px] lg:tracking-[0.48px]'>Public sell</p>
              <p className='text-[#FBA32C] font-pantonRust lg:text-[47px] font-medium leading-[56.4px] lg:tracking-[0.47px]'>50%</p>
            </div>

            {/* card 2 */}
            <div className='absolute xl:top-[280px] xl:right-[-60px]'>
              <p className='text-[#B2ACA8] font-passeroOne text-[24px] lg:leading-[40.8px] lg:tracking-[0.48px]'>Airdrop</p>
              <p className='text-[#FE7339] font-pantonRust lg:text-[47px] font-medium leading-[56.4px] lg:tracking-[0.47px]'>05%</p>
            </div>

            {/* card 3 */}
            <div className='absolute xl:top-[430px] xl:right-[20px]'>
              <p className='text-[#B2ACA8] font-passeroOne text-[24px] lg:leading-[40.8px] lg:tracking-[0.48px]'>Presale</p>
              <p className='text-[#75C70E] font-pantonRust lg:text-[47px] font-medium leading-[56.4px] lg:tracking-[0.47px]'>45%</p>
            </div>

          </div>

        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;