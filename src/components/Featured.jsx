import React, { useState } from "react";
import FImage from "../assets/Fyde.png";
import VImage from "../assets/Vise.jpg";

const Featured = () => {
  const [firstEnter, setFirstEnter] = useState(false);
  return (
    <div className="bg-zinc-800 text-white ">
      <div className="mt-[15vh] px-[5vw] pb-[5vh]  ">
        <h1 className="text-[4vw]">Featured Projects</h1>
      </div>
      <div className="border-t-[1px] flex gap-5 justify-between px-[5vw] py-8 border-zinc-400">
        {/* card 1  */}
        <div className="flex relative w-full flex-col">
          <div className="flex items-center gap-2 py-2">
            <div className="h-3 w-3 bg-white rounded-full"></div>
            <span className="uppercase">FYDE</span>
          </div>
          <h1 className="absolute z-10 top-[18vw] text-[4vw] right-[-5vw]  ">
            {"FYDE".split("").map((item, id) => {
              return <span key={id}>{item}</span>;
            })}
          </h1>
          <div className="  overflow-hidden bg-cover  w-full rounded-xl ">
            <div className=" relative group hover:scale-[.95] transition overflow-hidden rounded-xl duration-700">
              <img
                className="w-full group-hover:scale-[1.1] transition duration-1000 ease-in-out rounded-xl"
                src={FImage}
                alt=""
              />
            </div>
          </div>
          <div className="flex mt-[1vw] gap-4">
            <span className="px-4 hover:bg-white hover:text-black cursor-pointer transition duration-700 py-1 rounded-3xl border-[1px] border-white">
              AUDIT
            </span>
            <span className="px-4 hover:bg-white hover:text-black cursor-pointer transition duration-700 py-1 rounded-3xl border-[1px] border-white">
              COPYWRITING
            </span>
            <span className="px-4 hover:bg-white hover:text-black cursor-pointer transition duration-700 py-1 rounded-3xl border-[1px] border-white">
              SALES DECK
            </span>
            <span className="px-4 hover:bg-white hover:text-black cursor-pointer transition duration-700 py-1 rounded-3xl border-[1px] border-white">
              SLIDES DESIGN
            </span>
          </div>
        </div>
        {/* card2 */}
        <div className="flex relative w-full flex-col">
          <div className="flex items-center gap-2 py-2">
            <div className="h-3 w-3 bg-white rounded-full"></div>
            <p className="uppercase">VISE</p>
          </div>
          <h1 className="absolute z-10 top-[18vw] text-[4vw] left-[-5vw]  ">
            {"VISE".split("").map((item, id) => {
              return <span key={id}>{item}</span>;
            })}
          </h1>
          <div className=" overflow-hidden bg-cover  w-full rounded-xl ">
            <div className="group hover:scale-[.95] transition overflow-hidden rounded-xl duration-700">
              <img
                className="w-full group-hover:scale-[1.1] transition duration-1000 ease-in-out rounded-xl"
                src={VImage}
                alt=""
              />
            </div>
          </div>
          <div className="flex mt-[1vw] gap-4">
            <span className="px-4 hover:bg-white hover:text-black cursor-pointer transition duration-700 py-1 rounded-3xl border-[1px] border-white">
              AGENCY
            </span>
            <span className="px-4 hover:bg-white hover:text-black cursor-pointer transition duration-700 py-1 rounded-3xl border-[1px] border-white">
              COMPANY PRESENTATION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
