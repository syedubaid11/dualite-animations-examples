import { useEffect } from "react";
import "./heroDragSection.css";
import runAnimations from "./scripts";
const HeroDragSection = () => {
  useEffect(() => {
    runAnimations();
  }, []);
  return (
    <div className="parent-div-hero-drag">
      <div className="desktop--1-1-110200 pos-abs" id="id-73">
        <div className="rectangle-3-1-21855 pos-abs" id="id-721">
          <div
            className="nodeBg-721 pos-abs image-div bg-no-repeat fill-parent bg-cover"
            id="id-bg-721"
          >
            {" "}
          </div>
        </div>
        <div className="rectangle-4-1-30375 pos-abs" id="id-722">
          <div
            className="nodeBg-722 pos-abs image-div bg-no-repeat fill-parent bg-cover"
            id="id-bg-722"
          >
            {" "}
          </div>
        </div>
        <div className="rectangle-5-1-523696 pos-abs" id="id-723">
          <div
            className="nodeBg-723 pos-abs image-div bg-no-repeat fill-parent bg-cover"
            id="id-bg-723"
          >
            {" "}
          </div>
        </div>
        <div className="rectangle-6-1-633111 pos-abs" id="id-724">
          <div
            className="nodeBg-724 pos-abs image-div bg-no-repeat fill-parent bg-cover"
            id="id-bg-724"
          >
            {" "}
          </div>
        </div>
        <div className="balis-charm-lie-1-44376 pos-abs" id="id-719">
          <span className="balis-charm-lie-1-44376-0">
            {
              "Bali's charm lies in its diverse landscapes, from terraced rice fields to volcanic mountains, providing breathtaking vistas at every turn. Its vibrant culture, warm hospitality, and delicious cuisine make it a destination that leaves a lasting impression."
            }
            <br />
            <br />
            Click to go back.
          </span>
        </div>
        <div className="frame-2-1-248640 pos-abs" id="id-717">
          <div className="drag-me-up-1-516992 pos-abs" id="id-716">
            <span className="drag-me-up-1-516992-0">{"CLICK HERE"}</span>
          </div>
        </div>
        <div className="header-1-549668 pos-abs" id="id-714">
          <div className="frame-3-1-134135 pos-abs" id="id-718">
            <div className="siteview-1-426854 pos-abs" id="id-715">
              <span className="siteview-1-426854-0">{"SiteView"}</span>
            </div>
            <div className="frame-21-0-88830 pos-abs" id="id-735">
              <div className="learn-more-1-56027 pos-abs" id="id-736">
                <span className="learn-more-1-56027-0">{"Learn more"}</span>
              </div>
            </div>
            <div className="frame-3-1-98537 pos-abs" id="id-2023">
              <div className="dualitedev-1-120498 pos-abs" id="id-2024">
                <span className="dualitedev-1-120498-0">{"dualite.dev"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-1-1-173538 pos-abs" id="id-713">
          <div className="rectangle-2-1-75474 pos-abs" id="id-720"></div>
          <div className="london-1-190098 pos-abs" id="id-74">
            <span className="london-1-190098-0">{"London"}</span>
          </div>
          <div className="mask-group-1-155556 pos-abs" id="id-712">
            <div
              className="nodeBg-712 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
              id="id-bg-712"
            >
              {" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDragSection;
