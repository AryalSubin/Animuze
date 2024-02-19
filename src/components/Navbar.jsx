import React from "react";

const Navbar = () => {
  return (
    <div className="flex fixed top-0 left-0 w-full text-gray-100 shadow-sm bg-transparent text-md  font-poppins p-2 justify-between ">
      <div className="flex sm:flex-[.2] md:flex-[.5] lg:flex-[.7] xl:flex-1 items-center">
        <span className="px-6   font-bold  ">Animuze</span>
      </div>
      <div className="sm:flex hidden  font-light flex-1 capitalize p-1 gap-8">
        {["services", "our work", "about us", "insights", "contact us"].map(
          (item, id) => {
            return id === 4 ? (
              <div className="relative ml-[15vw]">
                <a
                  // style={{
                  //     // transform: "translateY(20px)",
                  //   transition:
                  //     // "transform 0.5s cubic-bezier(0.2, 0.6, 0.35, 1) 0s",
                  // }}
                  className="navbtn   cursor-pointer "
                  key={id}
                >
                  {item}
                </a>
              </div>
            ) : (
              <div className="relative">
                <a
                  //   style={{
                  //     //   transform: "translateY(20px)",
                  //     transition:
                  //       "transform 0.5s cubic-bezier(0.2, 0.6, 0.35, 1) 0s",
                  //   }}
                  className="relative navbtn cursor-pointer  hover:transition-transform  transition-[2]"
                  key={id}
                >
                  {item}
                </a>
              </div>
            );
          }
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
