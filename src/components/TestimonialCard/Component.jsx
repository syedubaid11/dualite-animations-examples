import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Component = ({
  width = 1080,
  image1 = images.image1,
  image2 = images.image2,
  image3 = images.image3,
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
}) => {
  const ref = useRef(null);
  const updateWidth = (width) => {
    if (ref.current) {
      ref.current.style.setProperty("--custom-width", `${width}px`);
    }
  };
  useEffect(() => {
    updateWidth(width);
    runAnimations();
  }, [ref]);

  return (
    <div
      className="wrapper-div-11201513 relative overflow-hidden m-auto p-[0px] box-border"
      ref={ref}
    >
      <div className=" absolute w-[100%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden bg-[#ffffffff]  ">
        {/* Frame 381 */}
        <section className=" absolute w-[56.3%] h-[60.13%] top-[21.57%] left-[21.85%] opacity-[1] z-[0]  rotate-[0deg]   rounded-tl-[31.868444442749023px] rounded-tr-[31.868444442749023px] rounded-br-[31.868444442749023px] rounded-bl-[31.868444442749023px] bg-[#3e66dfff] shadow-[19.917774200439453px_7.967111110687256px_79.67109680175781px_0px_rgba(0,0,0,0.1599999964237213)]  ">
          <div className=" absolute w-[44.08%] h-[24.39%] top-[12.27%] left-[27.96%] opacity-[1] z-[0]  rotate-[0deg]    ">
            <div className=" absolute w-[59.6%] h-[100%] top-[0%] left-[20.15%] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden rounded-full box-border border-l-[3.9765846729278564px] border-l-[#ffffffff] border-r-[3.9765846729278564px] border-r-[#ffffffff] border-t-[3.9765846729278564px] border-t-[#ffffffff] border-b-[3.9765846729278564px] border-b-[#ffffffff] shadow-[0px_15.906338691711426px_15.906338691711426px_0px_rgba(0,0,0,0.07999999821186066)]  ">
              <img
                src={`${image1}`}
                className="absolute bg-transparent bg-center bg-no-repeat w-full h-full bg-cover nodeBg-11201519 object-cover "
                alt="Ellipse 31 Image"
              />{" "}
            </div>
            <div className=" absolute w-[100%] h-[50.09%] top-[25.04%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]    ">
              <div className=" absolute w-[29.85%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden rounded-full box-border border-l-[3.983555555343628px] border-l-[#ffffffff] border-r-[3.983555555343628px] border-r-[#ffffffff] border-t-[3.983555555343628px] border-t-[#ffffffff] border-b-[3.983555555343628px] border-b-[#ffffffff] shadow-[0px_7.967111110687256px_7.967111110687256px_0px_rgba(0,0,0,0.07999999821186066)]  ">
                <img
                  src={`${image2}`}
                  className="absolute bg-transparent bg-center bg-no-repeat w-full h-full bg-cover nodeBg-11201517 object-cover "
                  alt="Ellipse 21 Image"
                />{" "}
              </div>
              <div className=" absolute w-[29.85%] h-[100%] top-[0%] left-[70.15%] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden rounded-full box-border border-l-[3.983555555343628px] border-l-[#ffffffff] border-r-[3.983555555343628px] border-r-[#ffffffff] border-t-[3.983555555343628px] border-t-[#ffffffff] border-b-[3.983555555343628px] border-b-[#ffffffff] shadow-[0px_7.967111110687256px_7.967111110687256px_0px_rgba(0,0,0,0.07999999821186066)]  ">
                <img
                  src={`${image3}`}
                  className="absolute bg-transparent bg-center bg-no-repeat w-full h-full bg-cover nodeBg-11201518 object-cover "
                  alt="Ellipse 41 Image"
                />{" "}
              </div>
            </div>
          </div>
          <div className=" absolute w-[36.84%] h-[6.16%] top-[40.34%] left-[31.58%] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
            <span className="sharif-shaz-11201520-0 ">{text1}</span>
          </div>
          <div className=" absolute w-[73.79%] h-[27.72%] top-[50.18%] left-[13.1%] opacity-[1] z-[2]  rotate-[0deg]   text-center leading-[0px]  ">
            <span className="lorem-ipsum-dol-11201521-0 ">{text2}</span>
          </div>
          <div className=" absolute w-[52.35%] h-[6.16%] top-[81.57%] left-[23.83%] opacity-[1] z-[3]  rotate-[0deg]    ">
            <div className=" absolute w-[48.7%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
              <span className="c-5050-rating-11201523-0 ">{text3}</span>
              <span className="c-5050-rating-11201523-1 ">{text4}</span>
            </div>
            <div className=" absolute w-[43.79%] h-[69.68%] top-[15.16%] left-[56.21%] opacity-[1] z-[1]  rotate-[0deg]    ">
              <div className=" absolute w-[20%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]    ">
                <div className=" absolute w-[80.28%] h-[76.7%] top-[7.99%] left-[9.86%] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                  <div className="nodeBg-I11201525_223  absolute top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
              <div className=" absolute w-[20%] h-[100%] top-[0%] left-[20%] opacity-[1] z-[1]  rotate-[0deg]    ">
                <div className=" absolute w-[80.28%] h-[76.7%] top-[7.99%] left-[9.86%] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                  <div className="nodeBg-I11201526_223  absolute top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
              <div className=" absolute w-[20%] h-[100%] top-[0%] left-[40%] opacity-[1] z-[2]  rotate-[0deg]    ">
                <div className=" absolute w-[80.28%] h-[76.7%] top-[7.99%] left-[9.86%] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                  <div className="nodeBg-I11201527_223  absolute top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
              <div className=" absolute w-[20%] h-[100%] top-[0%] left-[60%] opacity-[1] z-[3]  rotate-[0deg]    ">
                <div className=" absolute w-[80.28%] h-[76.7%] top-[7.99%] left-[9.86%] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                  <div className="nodeBg-I11201528_223  absolute top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
              <div className=" absolute w-[20%] h-[100%] top-[0%] left-[80%] opacity-[1] z-[4]  rotate-[0deg]    ">
                <div className=" absolute w-[80.28%] h-[76.7%] top-[7.99%] left-[9.86%] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                  <div className="nodeBg-I11201529_223  absolute top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Component;
