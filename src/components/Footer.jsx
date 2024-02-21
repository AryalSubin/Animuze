import React from "react";

const Footer = () => {
  return (
    <div className="h-screen pt-4 font-poppins text-white  bg-zinc-800 ">
      <div className="  md:flex px-[5vw] ">
        <div className="flex flex-1">
          <h1 className="uppercase text-[#EF4444] font-bold tracking-tighter leading-none text-[6vw] ">
            EYE- <br />
            OPENING
          </h1>
        </div>
        <div className="flex flex-col text-xl flex-1">
          <h1 className="uppercase text-[#EF4444] text-[6vw] font-bold tracking-tighter leading-none tracking ">
            PRESENTATIONS
          </h1>
          <div className="flex md:mt-[4vw] mt-[10vw] flex-col">
            <span className="mb-[1vw]">S:</span>
            {["Instagram", "Behance", "Facebook", "Linkedin"].map(
              (item, id) => {
                return (
                  <a href="#" id={id} className={` cursor-pointer underline `}>
                    {item}
                  </a>
                );
              }
            )}
          </div>
          <div className="flex md:mt-[4vw] mt-[10vw] ">
            <div className="flex  flex-col flex-1">
              <span className="mb-[1vw]">L:</span>
              {[
                "202-1965 W 4th Ave",
                "Vancouver, Canada",
                "30 Chukarina St",
                "Lviv, Ukraine",
              ].map((item, id) => {
                return (
                  <span
                    id={id}
                    className={`${
                      id == 1 && "mb-[3vw]"
                    } cursor-pointer underline `}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
            <div className="flex flex-col items-end flex-1">
              <div className="flex flex-col">
                <span className="mb-[1vw]">M:</span>
                {[
                  "Home",
                  "Services",
                  "Our Work",
                  "About US",
                  "Insights",
                  "Contact Us",
                ].map((item, id) => {
                  return (
                    <span id={id} className={` cursor-pointer underline `}>
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  md:pt-[5vw] pt-[20vw] px-[5vw]">
        <a
          href="#"
          className="px-6 flex flex-1 cursor-pointer text-[4vw] md:text-[2vw] text-[#EF4444]  font-bold  "
        >
          Animuze
        </a>
        <div className="flex justify-between text-[2vw] md:text-[1vw] items-center flex-1">
          <span className="opacity-35 "> &copy; animuze design 2024 </span>
          <span className="opacity-35"> Website by Subin </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
