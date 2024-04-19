import "./App.css";
import DualiteLogoAnim from "./components/DualiteLogo/DualiteLogoAnim.jsx";
import Flower from "./components/Flower/Flower.jsx";
import CubeBg from "./components/CoolCubeBg/CubeBg.jsx";
import Loader from "./components/Loader/Loader.jsx";
import HeroDragSection from "./components/HeroDragSection/HeroDragSection.jsx";

function App() {
  return (
    <>
      <h1>Dualite Animations Examples</h1>
      <p className="read-the-docs">
        Here are some sample animations created using the Dualite Figma Plugin
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <br />
        <h2>Dualite Logo Animation</h2>
        <DualiteLogoAnim />

        <br />

        <h2>Flower Animation</h2>
        <Flower />

        <br />

        <h2>Cool Cube Background Animation</h2>
        <CubeBg />

        <br />

        <h2>Drag Hero Animation</h2>
        <HeroDragSection />

        <br />

        <h2>Loader Animation</h2>
        <Loader />
        <br />
      </div>
    </>
  );
}

export default App;
