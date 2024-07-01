import React, { useEffect, useRef } from "react";
import "./css/style.css";
import "./css/animation.css";
import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Component = ({
  width = 1080,
  image1 = images.image1,
  image2 = images.image2,
  image3 = images.image3,
  image4 = images.image4,
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
  text6 = texts.text6,
  text7 = texts.text7,
  text8 = texts.text8,
  text9 = texts.text9,
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
    <div className="wrapper-div-11611504 " ref={ref}>
      <div className="pos-abs movie-cards-sta-11611504" id="id-11611504">
        <div className="pos-abs star-1-11611523" id="id-11611523">
          <div
            className="nodeBg-11611523 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
            id="id-bg-11611523"
          ></div>
        </div>
        <div className="pos-abs movies-near-you-11611506" id="id-11611506">
          <span className="movies-near-you-11611506-0 ">{text1}</span>
        </div>
        <div className="pos-abs arrow-1-11611507" id="id-11611507">
          <div
            className="nodeBg-11611507 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
            id="id-bg-11611507"
          ></div>
        </div>
        {/* Names1 */}
        <section className="pos-abs names-11611513" id="id-11611513">
          <div className="pos-abs frame-63-11611514" id="id-11611514">
            <div className="pos-abs chandu-champion-11611515" id="id-11611515">
              <span className="chandu-champion-11611515-0 ">{text2}</span>
            </div>
            <div
              className="pos-abs c-2h-23mbiography-11611516"
              id="id-11611516"
            >
              <span className="c-2h-23mbiography-11611516-0 ">{text3}</span>
            </div>
          </div>
          <div className="pos-abs frame-64-11611517" id="id-11611517">
            <div className="pos-abs paradise-11611518" id="id-11611518">
              <span className="paradise-11611518-0 ">{text4}</span>
            </div>
            <div
              className="pos-abs c-1h-35m-drama-ro-11611519"
              id="id-11611519"
            >
              <span className="c-1h-35m-drama-ro-11611519-0 ">{text5}</span>
            </div>
          </div>
          <div className="pos-abs frame-65-11611520" id="id-11611520">
            <div className="pos-abs kalki-2898-ad-11611521" id="id-11611521">
              <span className="kalki-2898-ad-11611521-0 ">{text6}</span>
            </div>
            <div
              className="pos-abs c-3h-01mactionsif-11611522"
              id="id-11611522"
            >
              <span className="c-3h-01mactionsif-11611522-0 ">{text7}</span>
            </div>
          </div>
        </section>
        <div className="pos-abs image-163-11611505" id="id-11611505">
          <div
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-11611505 "
            id="id-bg-11611505"
            alt="image 1631 Image"
          >
            {" "}
          </div>
        </div>
        <div className="pos-abs rectangle-1-11611512" id="id-11611512">
          <div
            className="pos-abs image-div bg-no-repeat  bg-crop nodeBg-11611512 "
            id="id-bg-11611512"
            alt="Rectangle 11 Image"
          >
            {" "}
          </div>
        </div>
        <div className="pos-abs rectangle-2-11611511" id="id-11611511">
          <div
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-11611511 "
            id="id-bg-11611511"
            alt="Rectangle 21 Image"
          >
            {" "}
          </div>
        </div>
        <div className="pos-abs rectangle-3-11611510" id="id-11611510">
          <div
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-11611510 "
            id="id-bg-11611510"
            alt="Rectangle 31 Image"
          >
            {" "}
          </div>
        </div>
        <div className="pos-abs rectangle-4-11611509" id="id-11611509"></div>
        {/* Frame 681 */}
        <section className="pos-abs frame-68-11611524" id="id-11611524">
          <div className="pos-abs frame-67-11611528" id="id-11611528">
            <div
              className="pos-abs rectangle-5168-11611529"
              id="id-11611529"
            ></div>
            <div className="pos-abs previous-11611530" id="id-11611530">
              <span className="previous-11611530-0 ">{text8}</span>
            </div>
          </div>
          <div className="pos-abs frame-66-11611525" id="id-11611525">
            <div
              className="pos-abs rectangle-5167-11611526"
              id="id-11611526"
            ></div>
            <div className="pos-abs next-11611527" id="id-11611527">
              <span className="next-11611527-0 ">{text9}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Component;
