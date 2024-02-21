import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import Image2 from "../assets/photo2.jpg";
import { motion } from "framer-motion";

function Landing() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.8"
      className=" data-scroll text-white w-full h-screen"
    >
      <div className="text-structure md:pt-52 pt-[30vw] px-[10vw] md:px-20">
        {["we create", "eye-opening", " presentations"].map((text, id) => {
          return (
            <div key={id} className="masker flex ">
              {id === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  style={{ backgroundImage: `url(${Image2})` }}
                  className="w-[9vw] bg-top bg-auto rounded-lg object-cover overflow-hidden h-[4.79vw] relative mr-2 top-[.75vw] bg-red-500"
                >
                  {/* <img
                    className="object-cover overflow-hidden "
                    src={Image2}
                    alt="img2"
                  /> */}
                </motion.div>
              )}
              <h1 className="uppercase tracking-tighter leading-[0.9] text-[8vw] md:text-[7vw] font-bold font-poppins">
                {text}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="w-full border-t-[1px] border-zinc-700 mt-[20vh] md:mt-24"></div>
      <div className="md:flex  justify-between font-bold px-8 py-4 ">
        <p className="mb-[10vw]">For public and private companies</p>
        <p className="mb-[10vw]">From the first pitch to IPO</p>
        <div className="flex mb-[10vw] group items-center md:justify-center gap-4">
          <div className="uppercase cursor-pointer group  items-center gap-2 group-hover:bg-white group-hover:text-black transition duration-700 px-4 py-1 border-2 rounded-full border-white">
            <span>start the project</span>
          </div>
          <div className="h-9 relative w-9 flex  justify-center items-center rotate-45 border-white border-2  rounded-full  group-hover:text-black  ease-linear transition duration-700 ">
            <div className="absolute z-[99]">
              <FaArrowUpLong />
            </div>
            <div className="h-1 w-1 scale-0 group-hover:scale-[8.3] rounded-full transition duration-700 group-hover:text-black  group-hover:bg-white "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
