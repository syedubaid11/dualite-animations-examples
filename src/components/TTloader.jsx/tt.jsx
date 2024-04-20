import { useEffect } from "react";
import "./tt.css";
import runAnimations from "./scripts";
const TTLoader = () => {
  useEffect(() => {
    runAnimations();
  }, []);
  return (
    <div className="parent-div-tt">
      <div className="c-85-1-12204 pos-abs" id="id-5272771">
        <div className="loading-1-39689 pos-abs" id="id-5272775">
          <span className="loading-1-39689-0">{"Loading"}</span>
        </div>
        <div className="rec-1-1-104400 pos-abs" id="id-5272772"></div>
        <div className="rec-2-1-29014 pos-abs" id="id-5272773"></div>
        <div className="circle-1-123525 pos-abs" id="id-5272774"></div>
      </div>
    </div>
  );
};

export default TTLoader;
