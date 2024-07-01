import React, { useEffect, useRef } from "react";
import "./css/style.css";
import "./css/animation.css";
import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Component = ({
  width = 1630,
  image1 = images.image1,
  image2 = images.image2,
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
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
    <div className="wrapper-div-11101510 " ref={ref}>
      <div className="pos-abs nike-carousel-11101510" id="id-11101510">
        <div className="pos-abs rectangle-5-11101593" id="id-11101593"></div>
        <div className="pos-abs rectangle-6-11101594" id="id-11101594"></div>
        <div className="pos-abs nike-11101568" id="id-11101568">
          <span className="nike-11101568-0 ">{text1}</span>
        </div>
        {/* Frame 13213155801 */}
        <section className="pos-abs frame-132131558-11101592" id="id-11101592">
          <div className="pos-abs instagram-11101519" id="id-11101519">
            <div className="pos-abs instagramvector-11101520" id="id-11101520">
              <div className="pos-abs vector-11101521" id="id-11101521">
                <div
                  className="nodeBg-11101521 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                  id="id-bg-11101521"
                ></div>
              </div>
              <div className="pos-abs vector-11101522" id="id-11101522">
                <div
                  className="nodeBg-11101522 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                  id="id-bg-11101522"
                ></div>
              </div>
            </div>
          </div>
          <div className="pos-abs twitter-11101523" id="id-11101523">
            <div className="pos-abs vector-11101524" id="id-11101524">
              <div
                className="nodeBg-11101524 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-11101524"
              ></div>
            </div>
          </div>
          <div className="pos-abs facebook-11101525" id="id-11101525">
            <div className="pos-abs vector-11101526" id="id-11101526">
              <div
                className="nodeBg-11101526 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-11101526"
              ></div>
            </div>
          </div>
        </section>
        <div className="pos-abs image-2-11101595" id="id-11101595">
          <div
            className="pos-abs image-div bg-no-repeat  bg-crop nodeBg-11101595 "
            id="id-bg-11101595"
            alt="image 21 Image"
          >
            {" "}
          </div>
        </div>
        <div className="pos-abs image-3-11101596" id="id-11101596">
          <div
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-11101596 "
            id="id-bg-11101596"
            alt="image 31 Image"
          >
            {" "}
          </div>
        </div>
        {/* left1 */}
        <section className="pos-abs left-11511628" id="id-11511628">
          <div className="pos-abs ellipse-1-11101577" id="id-11101577"></div>
          <div className="pos-abs iconsaxlinearar-11101578" id="id-11101578">
            <div className="pos-abs vector-11101579" id="id-11101579">
              <div
                className="nodeBg-11101579 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-11101579"
              ></div>
            </div>
          </div>
        </section>
        {/* right1 */}
        <section className="pos-abs right-11101633" id="id-11101633">
          <div className="pos-abs ellipse-1-11101581" id="id-11101581"></div>
          <div className="pos-abs iconsaxlinearar-11101582" id="id-11101582">
            <div className="pos-abs vector-11101583" id="id-11101583">
              <div
                className="nodeBg-11101583 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-11101583"
              ></div>
            </div>
          </div>
        </section>
        <div className="pos-abs nike-air-max-90-11101585" id="id-11101585">
          <span className="nike-air-max-90-11101585-0 ">{text2}</span>
        </div>
        {/* Frame 13213155791 */}
        <section className="pos-abs frame-132131557-11101591" id="id-11101591">
          <div className="pos-abs ellipse-1092-11101586" id="id-11101586"></div>
          <div className="pos-abs ellipse-1093-11101587" id="id-11101587"></div>
        </section>
        {/* card-body1 */}
        <section className="pos-abs cardbody-11101512" id="id-11101512">
          <div className="pos-abs button-11101516" id="id-11101516">
            <div className="pos-abs outline-11101517" id="id-11101517">
              <span className="outline-11101517-0 ">{text3}</span>
            </div>
          </div>
          <div className="pos-abs c-9770-11101554" id="id-11101554">
            <span className="c-9770-11101554-0 ">{text4}</span>
          </div>
          <div className="pos-abs c-110-11101515" id="id-11101515">
            <span className="c-110-11101515-0 ">{text5}</span>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Component;
