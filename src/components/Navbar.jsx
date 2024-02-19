import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [prevYPosition, setPreviousYPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentYPosition = window.scrollY;

      if (
        prevYPosition > currentYPosition &&
        prevYPosition - currentYPosition > 10
      ) {
        setVisible(true);
      }
      if (
        currentYPosition > prevYPosition &&
        currentYPosition - prevYPosition > 10
      ) {
        setVisible(false);
      }
      // if (currentYPosition < 100) {
      //   setVisible(true);
      // }
      setPreviousYPosition(currentYPosition);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visible, prevYPosition]);

  return (
    <div
      className={`flex fixed top-0 left-0 w-full backdrop-blur-md transition duration-500 text-white shadow-sm bg-transparent text-md z-[999]  font-poppins px-2 py-4 justify-between ${
        visible ? `` : ` -translate-y-[100%]`
      } `}
    >
      <div className="flex sm:flex-[.2] md:flex-[.5] lg:flex-[.7] xl:flex-1 items-center">
        <a
          href="#"
          className="px-6 cursor-pointer text-2xl text-[#EF4444]  font-bold  "
        >
          Animuze
        </a>
      </div>
      <div className="sm:flex hidden font-medium flex-1 capitalize p-1 gap-8">
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
