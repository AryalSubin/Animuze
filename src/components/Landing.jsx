import React from "react";

function Landing() {
  return (
    <div className="bg-zinc-900  text-white w-full h-screen">
      <div className="text-structure pt-52 px-20">
        {["we create", "eye-opening", " presentations"].map((text, id) => {
          return (
            <div key={id} className="masker ">
              <h1 className="uppercase tracking-tighter leading-[0.9] text-[7vw] font-bold font-poppins">
                {text}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="w-full border-t-[1px] border-zinc-700 mt-24"></div>
      <div className="flex justify-between font-bold px-8 py-4 ">
        <p>For public and private companies</p>
        <p>From the first pitch to IPO</p>
        <div className="uppercase group flex items-center gap-2 hover:bg-white hover:text-black transition-[1] px-4 py-1 border-2 rounded-full border-white">
          <span>start the project</span>
          <div className="h-2 w-2 bg-white  rounded-full group-hover:bg-black group-hover:h-4 group-hover:w-4 transition-[.5] "></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
