import React from "react";

const About = () => {
  return (
    <div className=" w-[816px] h-[381px] text-center my-[200px] mx-[312px]  flex flex-col items-center space-y-8 text-gray-700 ">
      <div className=" w-[88px] h-[24px] ">
        {" "}
        <p className="text-[16px] font-bold text-gray-500">ABOUT US</p>
      </div>
      <div className=" w-[546px] h-[128px] ">
        <h1 className="text-[48px] font-bold leading-[65px]">
          We are not just a team, but we are family
        </h1>
      </div>
      <div className=" w-[816px] h-[72px] ">
        <p className="text-[16px] text-gray-500 text-center mx-3">
          Develop a website by finding a product identity that has value and
          branding to become a characteristic of a company. We will also
          facilitate the business marketing of these products with our SEO
          experts so that they become a ready-to-use website and help sell a
          product from the company
        </p>
      </div>
      <div>
        <button className="w-[168px] h-[53px]  bg-[#169bff] text-white rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
