import { useEffect } from "react";
import "./style.css";
import "./animation.css";
import runAnimations from "./scripts";
const DualiteLogoAnim = () => {
  useEffect(() => {
    runAnimations();
  }, []);
  return (
    <div className="parent-div">
      <div className="dualite-1-423065 pos-abs" id="id-436010143">
        <div className="rectangle3431du-1-360524 pos-abs" id="id-436010144">
          <div
            className="nodeBg-436010144 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
            id="id-bg-436010144"
          ></div>
        </div>
        <div className="rectangle3531du-1-635034 pos-abs" id="id-436010145">
          <div
            className="nodeBg-436010145 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
            id="id-bg-436010145"
          ></div>
        </div>
        <div className="vector631dualit-0-84108 pos-abs" id="id-436010153">
          <div
            className="nodeBg-436010153 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
            id="id-bg-436010153"
          ></div>
        </div>
        <div
          className="ellipse2231dual-0-102030 pos-abs"
          id="id-436010158"
        ></div>
        <div
          className="ellipse2331dual-0-18270 pos-abs"
          id="id-436010159"
        ></div>
        <div
          className="ellipse2131dual-0-25608 pos-abs"
          id="id-436010172"
        ></div>
        <div className="dualite31dualit-0-655302 pos-abs" id="id-436010165">
          <div
            className="nodeBg-436010165 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
            id="id-bg-436010165"
          ></div>
        </div>
        <div className="ellipse2131dual-0-8260 pos-abs" id="id-436010152"></div>
      </div>
    </div>
  );
};

export default DualiteLogoAnim;
