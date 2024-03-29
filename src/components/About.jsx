import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import Image from "../assets/photo1.jpg";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.3"
      className="bg-[#CDEA68] rounded-tl-xl font-poppins tracking-tighter leading-none rounded-tr-xl "
    >
      <p className="text-[3.5vw]  tracking-tight  leading-none max-w-[85%] p-10 ">
        Animuze is a strategic partner for fast-growing tech businesses that
        need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </p>
      <div className="border-t-[1px] border-[#94a84d] pb-32 text-lg md:flex pt-10 px-10 ">
        <div className="flex py-[5vw] flex-1">
          <p>What you can expect </p>
        </div>
        <div className="flex gap-[5vw] flex-1">
          <div className="flex  flex-col gap-10">
            <p className="">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="flex justify-start w-full items-center ">
            <div className="flex flex-col">
              S:{" "}
              <a className="underline" href="#">
                Instagram
              </a>
              <a className="underline" href="#">
                Behance
              </a>
              <a className="underline" href="#">
                Facebook
              </a>{" "}
              <a className="underline" href="">
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-[#94a84d] pb-20 px-10">
        <div className="md:flex  pt-4 ">
          <div className="flex flex-1 pb-[3vw] flex-col">
            <p className="text-[4vw] pb-4 tracking-tight ">Our approach:</p>
            <div className="bg-black  relative group flex justify-between items-center gap-8  px-8 py-4 rounded-full max-w-fit text-white   ">
              <p className="uppercase">Read More</p>
              <div className="h-2 w-2 rounded-full bg-white group-hover:scale-[5] transition duration-500 "></div>
              <div className="absolute right-[28px] scale-0 rotate-45 transition duration-300 ease-in-out group-hover:scale-100 text-black ">
                <FaArrowUpLong />
              </div>
            </div>
          </div>
          <div className="flex flex-1">
            <div className=" rounded-xl group hover:scale-[.98] transition duration-1000 overflow-hidden   flex h-[60vh] w-full bg-red-500">
              <img
                className="w-full group-hover:scale-[1.05]  transition duration-1000  h-full overflow-hidden object-cover"
                src={Image}
                alt="lalal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
