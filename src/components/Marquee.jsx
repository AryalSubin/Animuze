import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="py-20 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]">
      <div className=" text-white gap-20 whitespace-nowrap font-bold flex overflow-hidden text-[20vw] tracking-tighter leading-none pb-10 border-white border-y-2 uppercase">
        <motion.p
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          we are animuze
        </motion.p>
        <motion.p
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
