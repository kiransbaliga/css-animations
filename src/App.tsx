import { Route, Routes } from "react-router-dom";
import CardsAnimation from "./pages/cardsAnimation";
import SlotMachine from "./pages/SlotMachine";
import TextEffect from "./pages/TextEffect/TextEffect";
import Threed from "./pages/3d/Threed";
import PolyRythm from "./pages/polyrythm/PolyRythm";
import RickAndMorty from "./pages/rickAndMorty/RickAndMorty";
import Slider from "./pages/slider/Slider";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cards" element={<CardsAnimation />} />
        <Route path="/games" element={<SlotMachine />} />
        <Route path="/text" element={<TextEffect />} />
        <Route path="/3d" element={<Threed />} />
        <Route path="/polyrythm" element={<PolyRythm />} />
        <Route path="/rickandmorty" element={<RickAndMorty />} />
        <Route path="/" element={<Slider />} />
      </Routes>
    </div>
  );
}
