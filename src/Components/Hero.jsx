import React from "react";
import logo from "../assets/logo.png";
import dot from "../assets/dot.svg";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";
import Shape1 from "../assets/Shape1.svg";
import Shape2 from "../assets/Shape2.svg";
import Shape3 from "../assets/Shape3.svg";
import Shape4 from "../assets/Shape4.svg";
import Shape5 from "../assets/Shape5.svg";

const Hero = () => {
  return (
    <div className=" w-[1440px] h-[912px] bg-[#f88414] ">
      <div className=" flex justify-between w-[1232px] h-[56px] py-[32px] pl-[95px] pt-[48px] ">
        <div className="flex space-x-1 ml-4 -mt-2 ">
          <img src={logo} alt="" className="w-8 h-8 bg-[#f88414]" />
          <h1 className="text-[24px] font-bold -mt-1 text-white">
            logo <span className=" font-normal -ml-[6px] ">ipsum</span>
          </h1>
        </div>
        <nav className="space-x-4 text-white ml-[40px]">
          <a
            href="#about"
            id="about"
            className="px-3 py-3 text-[16px]  hover:font-semibold "
          >
            About Us
          </a>
          <a
            href="#features"
            id="features"
            className="px-3 py-3 text-[16px]  hover:font-semibold"
          >
            Features
          </a>
          <a
            href="#teams"
            id="teams"
            className="px-3 py-3 text-[16px] hover:font-semibold"
          >
            Teams
          </a>
          <a
            href="#portfolio"
            id="portfolio"
            className="px-3 py-3 hover:font-semibold text-[16px] "
          >
            Portfolio
          </a>
          <a
            href="#client"
            id="client"
            className="px-3 py-3 hover:font-semibold text-[16px] "
          >
            Client
          </a>
          <a
            href="#contact"
            id="contact"
            className="px-3 py-3 hover:font-semibold text-[16px] "
          >
            Contact
          </a>
        </nav>
        <div className="text-white -mt-2 -mr-24 space-x-4">
          <a href="#fb" className="px-3 py-3 ">
            FB
          </a>
          <a href="#tw" className="px-3 py-3 ">
            TW
          </a>
          <a href="#ig" className="px-3 py-3 ">
            IG
          </a>
          <button className="p-2 text-white bg-[#169bff] rounded-md px-3">
            Hire Us
          </button>
        </div>
      </div>
      <div className=" w-[1440px] h-[789px] py-[171px] overflow-hidden -mt-[80px] ">
        <img src={dot} alt="" className=" ml-[1350px] " />
        <div className=" w-[1232px] h-[480px]  mx-[115px] -mt-[85px] flex justify-between ">
          <div className=" w-[411px] h-[480px]  text-white">
            <h1 className=" font-bold text-[48px] leading-[3.7rem] mt-[1.3rem] ">
              Creative Design and Development for your product
            </h1>
            <p className="text-[16px] mt-10 text-[#dedede]">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
            </p>
            <div className="flex justify-between mx-5 mt-10">
              <button className="bg-[#169bff] w-[168px] h-[53px] px-3 py-2 rounded-md">
                Get Started
              </button>
              <button className=" border-white border-[1.5px] w-[168px] h-[53px] px-3 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>
          <div className=" w-[712px] h-[480px]  flex ">
            <div className=" space-y-4 mt-20">
              <img
                src={img1}
                alt=""
                className=" w-[192px] h-[240px] rounded-xl"
              />
              <img
                src={img2}
                alt=""
                className=" w-[120px] h-[120px] rounded-xl ml-[4.3rem]"
              />
            </div>
            <div>
              <img
                src={img3}
                alt=""
                className=" w-[296px] h-[480px] mx-4 rounded-xl"
              />
            </div>
            <div className=" space-y-4 mt-10">
              <img
                src={img5}
                alt=""
                className=" w-[192px] h-[240px] rounded-xl"
              />
              <img
                src={img4}
                alt=""
                className="  w-[120px] h-[120px] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[3.489rem]">
        <img src={dot} alt="" />
        <div className=" w-[1024px] h-[144px] ml-[204px] bg-white border-[2px] -mt-32 flex justify-between p-[40px] space-x-12">
          <img src={Shape1} alt="" />
          <img src={Shape2} alt="" />
          <img src={Shape3} alt="" />
          <img src={Shape4} alt="" className="size-32 -mt-7" />
          <img src={Shape5} alt="" className="size-28 -mt-5" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
