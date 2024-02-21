import React, { useEffect, useState } from "react";
import Image3 from "../assets/photo3.jpg";
import Image4 from "../assets/photo4.jpg";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      //   console.log(e.clientX, e.clientY);
      let x = e.clientX;
      let y = e.clientY;

      let centerX = window.innerWidth / 2;
      let centerY = window.innerHeight / 2;

      let deltaX = centerX - x;
      let deltaY = centerY - y;

      //form moving black eye lid
      const translateX =
        Math.cos((rotate * Math.PI) / 180) * (window.innerWidth / 100); // Adjust 50 for desired distance
      const translateY =
        Math.sin((rotate * Math.PI) / 180) * (window.innerWidth / 100);
      setMoveX(translateX);
      setMoveY(translateY);

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);
      //   console.log(angle, "in radian");
    });
  });
  return (
    <div
      style={{ backgroundImage: `url(${Image4})` }}
      className="h-screen relative bg-cover bg-top z-0 flex justify-center items-center overflow-hidden   "
    >
      <div className="flex h-[15vw] absolute gap-10 ">
        <div className="w-[15vw] flex justify-center items-center h-full rounded-full bg-[#F4F4F4] ">
          <div
            style={{
              transform: `translate(${-moveX}px, ${-moveY}px)`,
            }}
            className=" flex  justify-center items-center w-[60%] h-[60%] bg-black rounded-full "
          >
            <div
              style={{ transform: `rotate(${rotate}deg)` }}
              className=" line w-full  p-[1px] h-[3vw] "
            >
              <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-[#F4F4F4]"></div>
            </div>
          </div>
        </div>
        <div className="w-[15vw] flex justify-center items-center h-full rounded-full bg-[#F4F4F4] ">
          <div
            style={{
              transform: `translate(${-moveX}px, ${-moveY}px)`,
            }}
            className="w-[60%] h-[60%] flex justify-center items-center  bg-black rounded-full "
          >
            <div
              style={{ transform: `rotate(${rotate}deg)` }}
              className=" line w-full  p-[1px] h-[2vw] "
            >
              <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-[#F4F4F4]"></div>
            </div>
          </div>
        </div>
        {/* <div className="w-[15vw] flex justify-center items-center h-full rounded-full bg-[#F4F4F4] ">
          <div
            style={{
              transform: `translate(-${moveX}px, -${moveY}px)`,
            }}
            className="w-2/3 flex justify-center items-center h-2/3 bg-black rounded-full "
          >
            <div
              style={{ transform: `rotate(${rotate}deg)` }}
              className=" line w-full  p-[1px] h-[2vw] "
            >
              <div className="w-[1.9vw] h-full rounded-full bg-[#F4F4F4]"></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Eyes;
