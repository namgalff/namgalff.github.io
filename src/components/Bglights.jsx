import React from "react";
import ellipseW1 from "../assets/bglights/ellipseW1.svg";

import ellipseW2 from "../assets/bglights/ellipseW2.svg";
import ellipseW3 from "../assets/bglights/ellipseW3.svg";
import ellipseW4 from "../assets/bglights/ellipseW4.svg";
import ellipseW5 from "../assets/bglights/ellipseW5.svg";
import ellipseW6 from "../assets/bglights/ellipseW6.svg";
import ellipseW7 from "../assets/bglights/ellipseW7.svg";
import ellipseW8 from "../assets/bglights/ellipseW8.svg";
import ellipseW9 from "../assets/bglights/ellipseW9.svg";
import ellipseM1 from "../assets/bglights/ellipseM1.svg";
import ellipseM2 from "../assets/bglights/ellipseM2.svg";

const Bglights = () => {
  return (
    <div className=" ">
      <img src={ellipseW1} className=" absolute right-0 top-[5%] z-[10] " />
      <img src={ellipseW2} className=" absolute left-0 top-[25%] z-[10] " />
      <img src={ellipseW3} className=" absolute left-0 top-[40%] z-[10] " />
      <img src={ellipseW4} className=" absolute left-0 top-[40%] z-[10] " />
      <img
        src={ellipseW5}
        className=" absolute left-[10%] top-[40%] z-[10] "
      />
      <img
        src={ellipseW6}
        className=" absolute left-[20%] top-[40%] z-[10] "
      />
      <img src={ellipseW7} className=" absolute right-0 top-[40%] z-[10] " />
      <img
        src={ellipseW8}
        className="hidden lg:block absolute  left-0 top-[60%] z-[10] "
      />
      <img
        src={ellipseW9}
        className="hidden lg:block  absolute right-0 top-[80%] z-[10] "
      />
      <img
        src={ellipseM1}
        className=" absolute lg:hidden left-0 top-[80%] z-[10] "
      />
      <img
        src={ellipseM2}
        className=" absolute lg:hidden right-0 top-[60%] z-[10] "
      />
    </div>
  );
};

export default Bglights;
