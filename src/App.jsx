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
import { default as NikeCarousel } from "./components/NikeCarousel/Component.jsx";
import { default as MovieCardsStack } from "./components/MovieCardsStack/Component.jsx";

function App() {
  return (
    <div className="w-[100vw] overflow-x-hidden flex flex-col items-center justify-center align-center text-center gap-4 mt-5">
      <h2 className="font-bold text-xl">Dualite Examples</h2>
      <div className="w-[100%] flex flex-col gap-3 items-center justify-center align-center text-center">
        <h2>Carousel</h2>
        <NikeCarousel width={350} />

        <br />

        <h2>Nike Card</h2>
        <NikeCard width={350} />

        <br />

        <h2>Testimonial Card</h2>
        <TestimonialCard width={350} />

        <br />

        <h2>Animated Hero Section</h2>
        <HeroDragSection />
        <br />

        <h2>Stairway to Heaven Animation</h2>
        <StairwayToHeaven width={350} />

        <br />

        <h2>Movie Cards Stack</h2>
        <MovieCardsStack width={300} />

        <br />

        <br />
        <h2>Dualite Logo</h2>
        <DualiteLogoAnim />

        <br />

        {/* <h2>Flower Animation</h2>
        <Flower /> */}

        <br />
{/* 
        <h2>Cool Cube Background Animation</h2>
        <CubeBg /> */}

        <br />

        <h2>Robo Loader Animation</h2>
        <RoboLoader />
        <br />

        <h2>Loader Animation</h2>
        <Loader />

        <br />

        {/* <h2>Table Tenis Loader Animation</h2>
        <TTLoader /> */}

        <br />

        <footer>
          <hr />
          <p>
            All source codes are available on{" "}
            <a
              href="https://github.com/dualiteindia/dualite-animations-examples"
              target="_blank"
              rel="noreferrer"
            >
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
    </div>
  );
}

export default App;
