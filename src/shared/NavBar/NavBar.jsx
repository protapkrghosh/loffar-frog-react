import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import logo from "@/assets/images/loffar logo 2.png";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [activeLink, setActiveLink] = useState("home");


  // Determine which section is currently in view based on scroll position
  useEffect(() => {
    const changeActiveLink = () => {
      const scrollPosition = window.scrollY;

      const homeSection = document.getElementById("home");
      const aboutTokenSection = document.getElementById("aboutToken");
      const tokenomicsSection = document.getElementById("tokenomics");
      const buySection = document.getElementById("buy");
      const roadmapSection = document.getElementById("roadmap");

      if (
        homeSection.offsetTop <= scrollPosition &&
        homeSection.offsetTop + homeSection.offsetHeight > scrollPosition
      ) {
        setActiveLink("home");
      } else if (
        aboutTokenSection.offsetTop <= scrollPosition &&
        aboutTokenSection.offsetTop + aboutTokenSection.offsetHeight >
        scrollPosition
      ) {
        setActiveLink("aboutToken");
      } else if (
        tokenomicsSection.offsetTop <= scrollPosition &&
        tokenomicsSection.offsetTop + tokenomicsSection.offsetHeight >
        scrollPosition
      ) {
        setActiveLink("tokenomics");
      } else if (
        buySection.offsetTop <= scrollPosition &&
        buySection.offsetTop + buySection.offsetHeight > scrollPosition
      ) {
        setActiveLink("buy");
      } else if (
        roadmapSection.offsetTop <= scrollPosition &&
        roadmapSection.offsetTop + roadmapSection.offsetHeight > scrollPosition
      ) {
        setActiveLink("roadmap");
      }
    };

    window.addEventListener("scroll", changeActiveLink);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", changeActiveLink);
    };
  }, []);


  // Change color of navbar based on scroll position
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 0) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={color ? 'sticky top-0 z-50 duration-300 pt-8' : 'pt-8 duration-300'}>
      <div className="max-w-[1600px] mx-auto xl:px-24 lg:px-16 md:px-10 sm:px-2 px-4">
        <div className="w-full top-0 left-0 z-10 bg-[#FBA32C] rounded-[10px]">
          <div className={`md:flex justify-between items-center ${color ? 'py-3 2xl:py-5' : 'py-3 2xl:py-5'}`}>

            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-[52px] cursor-pointer md:hidden">
              {
                open ? <IoClose className="text-[#DF355F]" /> : <IoMenu className="text-[#DF355F]" />
              }
            </div>

            <ul className={`md:flex md:items-center md:py-3 pt-5 pb-7 space-x-1 space-y-4 md:space-y-0 absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 rounded-[5px] ${open ? 'top-[100px] opacity-100 bg-[#ce964d] z-10' : 'top-[-490px]'}`}>

              <li>
                <Link to="home" smooth={true} offset={-30} duration={600} className={`text-[18px] font-passeroOne ml-[2px] lg:ml-5 md:ml-3 cursor-pointer rounded-[4px] lg:px-4 md:px-2 px-4 py-[9px] 2xl:py-[13px] border border-transparent ${activeLink === "home" ? ' text-[#1E1510] border-[#1d140f] bg-[#fcb95f]' : 'hover:bg-[#fcb95f] hover:border-[#1E1510] duration-200'}`} onClick={() => setActiveLink("home")}>Home</Link>
              </li>

              <li>
                <Link to="about" smooth={true} offset={-140} duration={600} className={`text-[18px] font-passeroOne duration-300 cursor-pointer rounded-[4px] lg:px-4 md:px-2 px-4 py-[9px] 2xl:py-[13px] border border-transparent ${activeLink === "about" ? 'text-[#1E1510] border-[#1d140f] bg-[#fcb95f]' : 'hover:bg-[#fcb95f] hover:border-[#1E1510] duration-200'}`} onClick={() => setActiveLink("about")}>About</Link>
              </li>

              <li>
                <Link to="tokenomics" smooth={true} offset={-140} duration={600} className={`text-[18px] font-passeroOne duration-300 cursor-pointer rounded-[4px] lg:px-4 md:px-2 px-4 py-[9px] 2xl:py-[13px] border border-transparent ${activeLink === "tokenomics" ? 'text-[#1E1510] border-[#1d140f] bg-[#fcb95f]' : 'hover:bg-[#fcb95f] hover:border-[#1E1510] duration-200'}`} onClick={() => setActiveLink("tokenomics")}>Tokenomics</Link>
              </li>

              <li>
                <Link to="roadmap" smooth={true} offset={-160} duration={600} className={`text-[18px] font-passeroOne duration-300 cursor-pointer rounded-[4px] lg:px-4 md:px-2 px-4 py-[9px] 2xl:py-[13px] border border-transparent ${activeLink === "roadmap" ? 'text-[#1E1510] border-[#1d140f] bg-[#fcb95f]' : 'hover:bg-[#fcb95f] hover:border-[#1E1510] duration-200'}`} onClick={() => setActiveLink("roadmap")}>Roadmap</Link>
              </li>

              <li>
                <Link to="partners" smooth={true} offset={-220} duration={600} className={`text-[18px] font-passeroOne duration-300 cursor-pointer rounded-[4px] lg:px-4 md:px-2 px-4 py-[9px] 2xl:py-[13px] border border-transparent ${activeLink === "partners" ? 'text-[#1E1510] border-[#1d140f] bg-[#fcb95f]' : 'hover:bg-[#fcb95f] hover:border-[#1E1510] duration-200'}`} onClick={() => setActiveLink("partners")}>Faq</Link>
              </li>

              <div className="block md:hidden">
                <div className="">
                  <div className='flex gap-[16px]'>
                    <a href="" target='_blank' className='text-[#1E1510] p-2 2xl:p-3 border border-[#1E1510] hover:bg-[#fcb95f] rounded-[5px] duration-300'><FaXTwitter className='w-[24px] h-[24px]' /></a>

                    <a href="" target='_blank' className='text-[#1E1510] p-2 2xl:p-3 border border-[#1E1510] hover:bg-[#fcb95f] rounded-[5px] duration-300'><FaTelegramPlane className='w-[24px] h-[24px]' /></a>

                    <a href="" target='_blank' className='text-[#1E1510] p-2 2xl:p-3 border border-[#1E1510] hover:bg-[#fcb95f] rounded-[5px] duration-300'><PiGithubLogoFill className='w-[24px] h-[24px]' /></a>
                  </div>

                  <div className="mr-9 mt-5">
                    <Button className="mb-3 bg-[#fcb95f] hover:bg-[#eeae59] text-[#1E1510] rounded-[4px] border border-[#1E1510] text-[16px] font-passeroOne font-normal uppercase w-full">Sign in</Button>
                    <Button className="bg-[#fcb95f] hover:bg-[#eeae59] text-[#1E1510] rounded-[4px] border border-[#1E1510] text-[16px] font-passeroOne font-normal uppercase w-full">Log  in</Button>
                  </div>

                </div>
              </div>
            </ul>


            <Link to="home" smooth={true} offset={-30} duration={600} className="md:hidden lg:block cursor-pointer flex items-center">
              <img src={logo} alt="Logo" className="w-[45px] 2xl:w-[50px] ml-5 md:ml-0" />
            </Link>

            <div className="md:block hidden">
              <div className="flex items-center">
                <div className='flex gap-[16px] lg:mr-0 md:mr-3'>
                  <a href="" target='_blank' className='text-[#1E1510] p-2 2xl:p-3 border border-[#1E1510] hover:bg-[#fcb95f] rounded-[5px] duration-300'><FaXTwitter className='w-[24px] h-[24px]' /></a>

                  <a href="" target='_blank' className='text-[#1E1510] p-2 2xl:p-3 border border-[#1E1510] hover:bg-[#fcb95f] rounded-[5px] duration-300'><FaTelegramPlane className='w-[24px] h-[24px]' /></a>

                  <a href="" target='_blank' className='text-[#1E1510] p-2 2xl:p-3 border border-[#1E1510] hover:bg-[#fcb95f] rounded-[5px] duration-300'><PiGithubLogoFill className='w-[24px] h-[24px]' /></a>
                </div>

                <div className="hidden lg:block h-[1px] 2xl:w-[91px] w-[75px] bg-[#1E1510] opacity-70 rotate-90 xl:-mx-4 md:-mx-7" />

                <Button className="bg-[#fcb95f] hover:bg-[#eeae59] text-[#1E1510] rounded-[4px] border border-[#1E1510] text-[16px] font-passeroOne font-normal xl:mr-5 md:mr-3 uppercase">Sign in</Button>
                <Button className="bg-[#fcb95f] hover:bg-[#eeae59] text-[#1E1510] rounded-[4px] border border-[#1E1510] text-[16px] font-passeroOne font-normal lg:mr-5 md:mr-3 uppercase">Log  in</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
