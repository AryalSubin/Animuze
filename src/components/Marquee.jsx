import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="0.1"
      className="py-[6vw] rounded-tl-2xl rounded-tr-2xl bg-[#004D43]"
    >
      <div className=" text-white  whitespace-nowrap font-bold flex overflow-hidden text-[18vw] tracking-tighter leading-none pb-10 border-[#ffffff86] border-y-[1px] uppercase">
        <motion.p
          className="pr-[5vw]"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          we are animuze
        </motion.p>
        <motion.p
          className="pr-[5vw]"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          we are animuze
        </motion.p>
      </div>
    </div>
  );
};

export default Marquee;
