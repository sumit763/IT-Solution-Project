import React from "react";
import Pimg1 from "../assets/Pimg1.svg";
import Pimg2 from "../assets/Pimg2.svg";
import dot from "../assets/dot.svg";
import img3 from "../assets/3.svg";
import img4 from "../assets/4.svg";
import img5 from "../assets/5.svg";

const Portfolio = () => {
  return (
    <div>
      <div className="w-[1440px] h-[1600px] overflow-hidden">
        <div className=" w-[1232px] h-[1500px] mt-[10rem]">
          <p className="font-bold text-[16px] text-gray-600 mx-[670px] mb-[2rem]">
            PORTFOLIO
          </p>
          <h1 className=" w-[425px] h-[64px] font-bold text-[48px] mx-[507px] mb-[3rem]">
            Our Latest Works
          </h1>
          <nav className=" w-[564px] h-[24px] mx-[438px] space-x-8 mb-[4rem] ">
            <a
              href="#all"
              className=" text-[16px] text-gray-600 hover:text-orange-600 "
            >
              All
            </a>
            <a
              href="#brand"
              className=" text-[16px] text-gray-600 hover:text-orange-600 "
            >
              Brand
            </a>
            <a
              href="#design"
              className=" text-[16px] text-gray-600 hover:text-orange-600 "
            >
              UI/UX Design
            </a>
            <a
              href="#illustration"
              className=" text-[16px] text-gray-600 hover:text-orange-600 "
            >
              Illustration
            </a>
            <a
              href="#logo"
              className=" text-[16px] text-gray-600 hover:text-orange-600 "
            >
              Logo
            </a>
            <a
              href="#marketing"
              className=" text-[16px] text-gray-600 hover:text-orange-600 "
            >
              Marketing Strategy
            </a>
          </nav>
          <div className=" grid grid-cols-2 w-[1220px] h-[1030px] mx-[104px] gap-3">
            <img src={Pimg1} alt="" className=" w-[608px] h-[512px] " />
            <img src={Pimg2} alt="" className=" w-[608px] h-[512px] " />
            <img src={Pimg1} alt="" className=" w-[608px] h-[512px] " />
            <img src={Pimg2} alt="" className=" w-[608px] h-[512px] " />
          </div>
          <button className=" mx-[638px] w-[163px] h-[53px] text-white bg-[#169bff] rounded-lg mt-[3.7rem] ">
            View More
          </button>
        </div>
        <img src={dot} alt="" className=" ml-[85.5rem] -mt-[45.59rem] " />
      </div>
      <div className=" w-[1184px] h-[624px] mx-[144px] my-[8rem]">
        <p className=" w-[101px] h-[24px] text-[16px] font-bold text-gray-500 mx-[544px]">
          MILESTONE
        </p>
        <h1 className=" w-[499px] h-[128px] font-bold text-[48px]  text-center text-gray-600 mx-[331px] leading-[3.4rem] my-[1.4rem] ">
          How About some Fact Number About us
        </h1>
        <p className=" w-[511px] h-[48px] text-[16px] text-gray-500 mx-[365px] text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quis
          corrupti placeat veritatis, dicta totam.
        </p>
        <div className=" w-[816px] h-[152px] mx-[290px] mt-[3rem] flex flex-col justify-center">
          <div className=" w-[720px] h-[64px] text-[48px] font-bold flex justify-between ">
            <h1>1000</h1>
            <h1>235</h1>
            <h1>1100</h1>
            <h1>1200</h1>
          </div>
          <div className=" w-[700px] h-[24px] text-[16px] flex justify-between ">
            <p>Happy Client</p>
            <p>Our Team</p>
            <p>Our Client</p>
            <p>Awards</p>
          </div>
        </div>
        <div className=" w-[816px] h-[152px] flex justify-between "></div>
        {/* <div className="size-10 rounded-[50%] bg-green-500 absolute -mt-[40rem] ml-[10rem]"></div> */}
        <img
          src={img3}
          alt=""
          className=" absolute -mt-[41.4rem] -ml-[0.89rem]"
        />
        <img
          src={img4}
          alt=""
          className=" absolute -ml-[0.89rem] -mt-[12.4rem]"
        />
        <div className="size-10 rounded-[50%] bg-green-500 absolute -mt-[42.5rem] ml-[19rem] "></div>
        <div className="size-10 rounded-[50%] bg-blue-500 absolute -mt-[22rem] ml-4 "></div>
        <div className="size-10 rounded-[50%] bg-blue-500 absolute ml-[65rem] -mt-[38rem] "></div>
        <div className="size-10 rounded-[50%] bg-red-500 absolute ml-[74rem] -mt-[16rem]"></div>
        <div className="size-[5.5rem] rounded-[50%] bg-green-500 absolute ml-[77.5rem] -mt-[10rem]"></div>
        <div className="size-10 rounded-[50%] bg-orange-500 absolute ml-[65rem] -mt-[3.8rem]"></div>
        <div className="size-10 rounded-[50%] bg-red-500 absolute ml-[24rem] -mt-[3.8rem]"></div>
        <img
          src={img5}
          alt=""
          className=" absolute ml-[63rem] -mt-[35.5rem] "
        />
      </div>
    </div>
  );
};

export default Portfolio;
