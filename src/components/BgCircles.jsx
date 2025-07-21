import React from "react";
import test from "../assets/ellipseTest.png";

const BgCircles = () => {
  return (
    <>
      <div
        className="z-1 absolute h-[40vw] top-[500%] left-[70%] w-[45vw] rotate-[-50deg]  rounded-full blur-xl"
        style={{
          background: `
            radial-gradient( 
              circle at 50% 50%,
              rgba(48, 19, 81, .7) 0%,
              rgba(48, 19, 81, .7) 20%,
              rgba(48, 19, 81, .7) 40%,
              rgba(48, 19, 81, .7) 60%,
              rgba(48, 19, 81, 0.1) 80%,
              rgba(48, 19, 81, .7) 90%,
              rgba(48, 19, 81, .7) 100%
            )
          `,
          filter: "blur(80px)",
        }}
      ></div>
      <div
        className="z-1 absolute left-[-10%] top-[450%] h-[30vw] w-[40vw] rotate-[68deg] rounded-full blur-xl"
        style={{
          background: `
            radial-gradient(
              circle at 40% 40%,
              rgba(122, 78, 43, .5) 0%,
              rgba(122, 78, 43, .4) 20%,
              rgba(122, 78, 43, 0.3) 50%,
              rgba(122, 78, 43, 0.2) 60%,
                rgba(122, 78, 43, 0.15) 70%,
                  rgba(122, 78, 43, 0.1) 80%,
              rgba(122, 78, 43, .05) 100%
            )
          `,
          filter: "blur(80px)",
        }}
      ></div>
      <div
        className="z-1 absolute left-[80%] top-[90%] h-[40vw] w-[30vw] rotate-[68deg] rounded-full blur-xl"
        style={{
          background: `
            radial-gradient(
              circle at 40% 40%,
              rgba(122, 78, 43, .5) 0%,
              rgba(122, 78, 43, .4) 20%,
              rgba(122, 78, 43, 0.3) 50%,
              rgba(122, 78, 43, 0.2) 60%,
                rgba(122, 78, 43, 0.15) 70%,
                  rgba(122, 78, 43, 0.1) 80%,
              rgba(122, 78, 43, .05) 100%
            )
          `,
          filter: "blur(80px)",
        }}
      ></div>
      <div
        className="z-20 absolute h-[30vw] top-[175%] left-[-15%] w-[35vw] rotate-[90deg]  rounded-full blur-xl"
        style={{
          background: `
            radial-gradient( 
              circle at 50% 50%,
              rgba(48, 19, 81, .0) 0%,
              rgba(48, 19, 81, .1) 20%,
              rgba(48, 19, 81, .2) 40%,
              rgba(48, 19, 81, .3) 60%,
              rgba(48, 19, 81, 0.4) 80%,
              rgba(48, 19, 81, .4) 90%,
              rgba(48, 19, 81, .5) 100%
            )
          `,
          filter: "blur(80px)",
        }}
      ></div>
      <div
        className="z-20 absolute h-[30vw]  top-[232%] left-[-5%] w-[40vw] rotate-[200deg] border rounded-full blur-xl"
        style={{
          background: `
      radial-gradient(
        circle at 40% 40%,
        rgba(59, 255, 255, 0.5) 0%,
        rgba(59, 255, 255, .5) 20%,
        rgba(59, 255, 255, .5) 40%,
        rgba(59, 255, 255, 0.4) 50%,
        rgba(59, 255, 255, 0) 80%,
        rgba(59, 255, 255, 0) 90%,
        rgba(59, 255, 255, 0) 100%
      )
    `,
          filter: "blur(120px)",
        }}
      ></div>

      <div
        className="z-10 absolute left-[25%] top-[232%] h-[40vw] w-[40vw] rotate-[135deg] rounded-full blur-xl"
        style={{
          background: `
            radial-gradient(
              circle at 40% 40%,
              rgba(122, 78, 43, .6) 0%,
              rgba(122, 78, 43, .6) 20%,
              rgba(122, 78, 43,.6) 50%,
              rgba(122, 78, 43, .6) 60%,
                rgba(122, 78, 43, .6) 70%,
                  rgba(122, 78, 43, 0.1) 80%,
              rgba(122, 78, 43, .6) 100%
            )
          `,
          filter: "blur(80px)",
        }}
      ></div>

      <div
        className="z-1 absolute h-[30vw] top-[235%] left-[65%] w-[35vw] rotate-[45deg] rounded-full blur-xl"
        style={{
          background: `
      radial-gradient(
        circle at 50% 50%,
        rgba(251, 249, 187, .5) 0%,
        rgba(251, 249, 187, .5) 20%,
        rgba(251, 249, 187, .5) 40%,
        rgba(251, 249, 187, .5) 60%,
        rgba(251, 249, 187, 0.1) 80%,
        rgba(251, 249, 187, .5) 90%,
        rgba(251, 249, 187, .5) 100%
      )
    `,
          filter: "blur(80px)",
        }}
      ></div>
    </>
  );
};

export default BgCircles;
