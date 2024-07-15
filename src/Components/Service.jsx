import React from "react";
import img1 from "../assets/Placeholder.svg";
import dot from "../assets/dot.svg";
import Icon1 from "../assets/Icon1.svg";
import Icon2 from "../assets/Icon2.svg";
import Icon3 from "../assets/Icon3.svg";
import Icon4 from "../assets/Icon4.svg";
import image12 from "../assets/image12.svg";
import image22 from "../assets/image 2622.svg";
import image23 from "../assets/image23.svg";

const Service = () => {
  return (
    <div>
      <div className=" overflow-hidden w-[1410px] h-full">
        <div className=" w-[1336px] h-[880px] flex justify-between overflow-hidden ">
          <div className=" relative z-20 ">
            <img src={img1} alt="" className="w-[624px] h-[880px] " />
          </div>
          <div className=" w-[640px] h-[880px] flex justify-between relative ">
            <div className=" w-[440px] h-[150px] flex flex-col space-y-5 ml-20  mt-16">
              <div className="w-[127px] h-[24px] font-bold text-gray-600 text-[16px] ">
                <p>OUR SERVICE</p>
              </div>
              <div className="w-[440px] h-[64px] text-[48px] font-bold ">
                {" "}
                <h1>Service we Provide</h1>
              </div>
              <div className="w-[464px] h-[48px] text-[16px] text-gray-600 ">
                <p>
                  We will help a client's problems to develop the products they
                  have with high quality
                </p>
              </div>
              <div className=" w-[600px] h-[520px] grid grid-cols-2 absolute top-[20.8rem] ">
                <div className=" w-[296px] h-[256px] flex flex-col space-y-4 ">
                  <img src={Icon1} alt="" className=" w-[56px] h-[56px] " />
                  <h1 className=" font-bold text-[24px] w-[179px] h-[32px] text-gray-800 ">
                    IT Consultancy
                  </h1>
                  <p className=" w-[244px] h-[96px] text-[16px] text-gray-600">
                    Create customizable illustrations with attractive designs
                    that are made visually through high creativity
                  </p>
                </div>
                <div className=" w-[296px] h-[256px] flex flex-col space-y-4 ">
                  <img src={Icon2} alt="" className=" w-[56px] h-[56px] " />
                  <h1 className=" font-bold text-[24px] w-[179px] h-[32px] text-gray-800 ">
                    UI/UX Design
                  </h1>
                  <p className=" w-[244px] h-[96px] text-[16px] text-gray-600">
                    Make your website design / mobile application design more
                    colorful and give a cool impression on the eyes of the user
                  </p>
                </div>
                <div className=" w-[296px] h-[256px] flex flex-col space-y-4 ">
                  <img src={Icon3} alt="" className=" w-[56px] h-[56px] " />
                  <h1 className=" font-bold text-[24px] w-[179px] h-[32px] text-gray-800 ">
                    QA Testing
                  </h1>
                  <p className=" w-[244px] h-[96px] text-[16px] text-gray-600">
                    Create 2d / 3d video animation in a short period of time
                    designed to promote a company product
                  </p>
                </div>
                <div className=" w-[296px] h-[256px] flex flex-col space-y-4 ">
                  <img src={Icon4} alt="" className=" w-[56px] h-[56px] " />
                  <h1 className=" font-bold text-[24px] w-[220px] h-[32px] text-gray-800">
                    Database Security
                  </h1>
                  <p className=" w-[244px] h-[96px] text-[16px] text-gray-600">
                    Change the appearance of a design into code that will be
                    made into an amazing website
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={dot}
          alt=""
          className=" size-[116px] -mt-[50.5rem] ml-[82.4rem]"
        />
        <img
          src={dot}
          alt=""
          className=" size-[116px] mt-[38rem] ml-[34.5rem] relative z-10 "
        />
      </div>
      {/**  */}

      <div className="mb-20 w-[1440px] ">
        <div className=" w-[1051px] grid grid-cols-2 justify-between ml-[6.6rem] mt-[8rem]">
          <div className="flex flex-col ml-[2rem] ">
            <img
              src={image12}
              alt=""
              className="rounded-lg w-[192px] h-[208px]"
            />
            <img
              src={image22}
              alt=""
              className="rounded-2xl w-[296px] h-[376px] ml-[13.6rem] -mt-[8.7rem] "
            />
            <img
              src={image23}
              alt=""
              className="rounded-lg w-[88px] h-[88px] -mt-[14rem] ml-[7.5rem]"
            />
          </div>

          <div className="w-[430px] h-[300px] flex flex-col space-y-10  mt-[7.2rem]  ml-20">
            <h1 className="font-bold text-[48px] w-[427px] h-[128px] text-gray-800">
              Ready for Starting your own business
            </h1>
            <p className="text-[16px] text-gray-500 w-[427px] h-[24px]">
              Let's talk with us and more explore how we doing our works.
            </p>
            <button className="w-[168px] h-[53px] bg-[#169bff] text-white rounded-xl">
              Learn More
            </button>
          </div>
        </div>
        <img
          src={dot}
          alt="dot"
          className="ml-[3.3rem] -mt-[105px] w-[116px] h-auto "
        />
      </div>
    </div>
  );
};

export default Service;
