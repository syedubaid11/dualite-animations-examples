import "./App.css";
import DualiteLogoAnim from "./components/DualiteLogo/DualiteLogoAnim.jsx";
import Flower from "./components/Flower/Flower.jsx";
import CubeBg from "./components/CoolCubeBg/CubeBg.jsx";
import Loader from "./components/Loader/Loader.jsx";
import HeroDragSection from "./components/HeroDragSection/HeroDragSection.jsx";
import RoboLoader from "./components/RoboLoader/RoboLoader.jsx";
import TTLoader from "./components/TTloader.jsx/tt.jsx";
import { default as StairwayToHeaven } from "./components/StairwayToHeaven/Component.jsx";
import { default as NikeCard } from "./components/NikeCard/Component";
import { default as TestimonialCard } from "./components/TestimonialCard/Component";

function App() {
  return (
    <>
      <h1>Dualite Animations Examples</h1>
      <p
        className="read-the-docs"
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
        }}
      >
        Here are some sample animations created using the Dualite Figma Plugin.
        <br />
        The designs were taken from Figma Community, thanks to all the individual creators.
        <br />
        <br />
        To convert your Figma designs to Resuseable & Interactive <br />
        React components, check out the&nbsp;
        <a href="https://bit.ly/DUALITE?utm_source=animSamples" target="_blank" rel="noreferrer">
          Dualite Figma Plugin
        </a>
        .
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
        <h2>Nike Card</h2>
        <NikeCard width={300} />

        <br />

        <h2>Testimonial Card</h2>
        <TestimonialCard width={500} />

        <br />

        <h2>Stairway to Heaven Animation</h2>
        <StairwayToHeaven />

        <br />

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

        <h2>Robo Loader Animation</h2>
        <RoboLoader />
        <br />

        <h2>Loader Animation</h2>
        <Loader />

        <br />

        <h2>Table Tenis Loader Animation</h2>
        <TTLoader />

        <br />

        <footer>
          <hr />
          <p>
            All source codes are available on{" "}
            <a href="https://github.com/dualiteindia/dualite-animations-examples" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
          <p>
            Made with ❤️ by{" "}
            <a href="https://dualite.dev" target="_blank" rel="noreferrer">
              Dualite
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
