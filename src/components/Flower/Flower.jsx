import { useEffect } from "react";
import "./flower.css";
import runAnimations2 from "./scripts";

const Flower = () => {
  useEffect(() => {
    runAnimations2();
  }, []);
  return (
    <div className="parent-div-flower">
      <div className="frame-4174-1-871410 pos-abs" id="id-436010187">
        <div
          className="ellipse2031fram-1-44802 pos-abs"
          id="id-436010189"
        ></div>
        <div
          className="ellipse1531fram-1-105963 pos-abs"
          id="id-436010190"
        ></div>
        <div
          className="ellipse1631fram-1-108852 pos-abs"
          id="id-436010191"
        ></div>
        <div
          className="ellipse1731fram-1-115260 pos-abs"
          id="id-436010192"
        ></div>
        <div
          className="ellipse1831fram-1-13905 pos-abs"
          id="id-436010193"
        ></div>
        <div
          className="ellipse1931fram-1-441000 pos-abs"
          id="id-436010194"
        ></div>
        <div
          className="ellipse1431fram-1-79443 pos-abs"
          id="id-436010195"
        ></div>
        <div
          className="rectangle3331fr-1-289590 pos-abs"
          id="id-436010188"
        ></div>
      </div>
    </div>
  );
};

export default Flower;
