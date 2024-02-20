import React from "react";
import logo1 from "../assets/logo.png";

const Cards = () => {
  return (
    <div className=" flex px-[5vw] mt-[10vh] bg-zinc-800 gap-[1vw] h-screen ">
      <div className="flex relative justify-center items-center flex-1 h-[60vh] rounded-xl bg-[#004D43] ">
        <span className="px-6 cursor-pointer text-[4vw] text-[#CDEA68]  font-bold  ">
          Animuze
        </span>
        <div className="absolute bottom-[4vh] left-[3vw]">
          <span className=" border-2 border-[#CDEA68] text-white rounded-2xl px-2 py-1 ">
            {" "}
            &copy; 2019-2022
          </span>
        </div>
      </div>
      <div className="flex gap-[2vh] flex-1 h-[60vh] rounded-xl ">
        <div className="h-full relative flex justify-center items-center w-full bg-zinc-900 rounded-xl">
          <span className=" cursor-pointer text-[4vw] text-zinc-100  font-bold  ">
            Clutch
          </span>
          <div className="absolute bottom-[4vh] left-[3vw]">
            <span className=" hover:bg-white transition cursor-pointer duration-500 hover:text-black uppercase border-2 border-zinc-100 text-white rounded-2xl px-2 py-1 ">
              {" "}
              rating 5.0 on clutch
            </span>
          </div>
        </div>
        <div className="h-full relative flex justify-center items-center w-full bg-zinc-900 rounded-xl">
          <img
            src={logo1}
            alt=""
            className="cursor-pointer h-[6vw]  text-zinc-100  font-bold  "
          ></img>
          <div className="absolute bottom-[4vh] left-[3vw]">
            <span className=" border-2 hover:bg-white transition cursor-pointer duration-500 hover:text-black uppercase border-zinc-100 text-white rounded-2xl px-2 py-1 ">
              {" "}
              business bootcamp alumni
            </span>
          </div>
        </div>
        {/* <div className="h-full w-full bg-zinc-900 rounded-xl"></div> */}
      </div>
    </div>
  );
};

export default Cards;
