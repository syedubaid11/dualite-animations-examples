import "./App.css";
import DualiteLogoAnim from "./components/DualiteLogo/DualiteLogoAnim.jsx";
import Flower from "./components/Flower/Flower.jsx";

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
          gap: "2rem",
        }}
      >
        <DualiteLogoAnim />

        <Flower />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </>
  );
}

export default App;
