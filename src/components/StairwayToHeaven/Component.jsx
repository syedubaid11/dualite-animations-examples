import React, { useEffect, useRef } from "react";
import "./css/style.css";
import "./css/animation.css";
import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Component = ({ width = 869, text1 = texts.text1 }) => {
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
    <div className="wrapper-div-03 " ref={ref}>
      <div className="pos-abs frame-4032-03" id="id-03">
        <div className="pos-abs rectangle-6-037" id="id-037"></div>
        <div className="pos-abs rectangle-2-05" id="id-05"></div>
        <div className="pos-abs rectangle-1-06" id="id-06"></div>
        {/* Stars1 */}
        <section className="pos-abs stars-07" id="id-07">
          <div className="pos-abs stars-08" id="id-08">
            <div className="pos-abs ellipse-16-022" id="id-022"></div>
            <div className="pos-abs star-9-017" id="id-017">
              <div
                className="nodeBg-017 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-017"
              ></div>
            </div>
            <div className="pos-abs star-1-09" id="id-09">
              <div
                className="nodeBg-09 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-09"
              ></div>
            </div>
            <div className="pos-abs ellipse-1-021" id="id-021"></div>
            <div className="pos-abs star-12-013" id="id-013">
              <div
                className="nodeBg-013 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-013"
              ></div>
            </div>
            <div className="pos-abs star-2-010" id="id-010">
              <div
                className="nodeBg-010 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-010"
              ></div>
            </div>
            <div className="pos-abs ellipse-11-034" id="id-034"></div>
            <div className="pos-abs star-8-016" id="id-016">
              <div
                className="nodeBg-016 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-016"
              ></div>
            </div>
            <div className="pos-abs ellipse-10-033" id="id-033"></div>
            <div className="pos-abs ellipse-2-023" id="id-023"></div>
            <div className="pos-abs star-10-018" id="id-018">
              <div
                className="nodeBg-018 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-018"
              ></div>
            </div>
            <div className="pos-abs star-3-011" id="id-011">
              <div
                className="nodeBg-011 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-011"
              ></div>
            </div>
            <div className="pos-abs ellipse-3-024" id="id-024"></div>
            <div className="pos-abs star-11-019" id="id-019">
              <div
                className="nodeBg-019 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-019"
              ></div>
            </div>
            <div className="pos-abs ellipse-8-036" id="id-036"></div>
            <div className="pos-abs star-7-015" id="id-015">
              <div
                className="nodeBg-015 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-015"
              ></div>
            </div>
            <div className="pos-abs ellipse-15-027" id="id-027"></div>
            <div className="pos-abs ellipse-12-025" id="id-025"></div>
            <div className="pos-abs ellipse-13-026" id="id-026"></div>
            <div className="pos-abs ellipse-7-035" id="id-035"></div>
            <div className="pos-abs star-4-012" id="id-012">
              <div
                className="nodeBg-012 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-012"
              ></div>
            </div>
            <div className="pos-abs ellipse-14-028" id="id-028"></div>
            <div className="pos-abs ellipse-4-029" id="id-029"></div>
            <div className="pos-abs ellipse-5-030" id="id-030"></div>
            <div className="pos-abs star-5-020" id="id-020">
              <div
                className="nodeBg-020 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-020"
              ></div>
            </div>
            <div className="pos-abs ellipse-9-032" id="id-032"></div>
            <div className="pos-abs star-6-014" id="id-014">
              <div
                className="nodeBg-014 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-014"
              ></div>
            </div>
            <div className="pos-abs ellipse-6-031" id="id-031"></div>
          </div>
          <div className="pos-abs stars2-066" id="id-066">
            <div className="pos-abs ellipse-16-075" id="id-075"></div>
            <div className="pos-abs star-1-067" id="id-067">
              <div
                className="nodeBg-067 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-067"
              ></div>
            </div>
            <div className="pos-abs ellipse-1-074" id="id-074"></div>
            <div className="pos-abs star-12-070" id="id-070">
              <div
                className="nodeBg-070 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-070"
              ></div>
            </div>
            <div className="pos-abs ellipse-11-083" id="id-083"></div>
            <div className="pos-abs star-8-072" id="id-072">
              <div
                className="nodeBg-072 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-072"
              ></div>
            </div>
            <div className="pos-abs ellipse-10-082" id="id-082"></div>
            <div className="pos-abs star-3-068" id="id-068">
              <div
                className="nodeBg-068 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-068"
              ></div>
            </div>
            <div className="pos-abs ellipse-3-076" id="id-076"></div>
            <div className="pos-abs star-11-073" id="id-073">
              <div
                className="nodeBg-073 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-073"
              ></div>
            </div>
            <div className="pos-abs ellipse-15-078" id="id-078"></div>
            <div className="pos-abs ellipse-13-077" id="id-077"></div>
            <div className="pos-abs ellipse-7-084" id="id-084"></div>
            <div className="pos-abs star-4-069" id="id-069">
              <div
                className="nodeBg-069 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-069"
              ></div>
            </div>
            <div className="pos-abs ellipse-14-079" id="id-079"></div>
            <div className="pos-abs ellipse-5-080" id="id-080"></div>
            <div className="pos-abs ellipse-9-081" id="id-081"></div>
            <div className="pos-abs star-6-071" id="id-071">
              <div
                className="nodeBg-071 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
                id="id-bg-071"
              ></div>
            </div>
          </div>
        </section>
        <div className="pos-abs rectangle-3-038" id="id-038"></div>
        <div className="pos-abs vector-1-04" id="id-04">
          <div
            className="nodeBg-04 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
            id="id-bg-04"
          ></div>
        </div>
        <div className="pos-abs rectangle-4-039" id="id-039"></div>
        <div className="pos-abs rectangle-5-040" id="id-040"></div>
        <div className="pos-abs loading-your-st-041" id="id-041">
          <span className="loading-your-st-041-0 ">{text1}</span>
        </div>
      </div>
    </div>
  );
};
export default Component;
