import { Route, Routes } from "react-router-dom";
import CardsAnimation from "./pages/cardsAnimation";
import SlotMachine from "./pages/SlotMachine";
import TextEffect from "./pages/TextEffect/TextEffect";

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/cards' element={<CardsAnimation />} />
        <Route path="/games" element={<SlotMachine />} />
        <Route path="/text" element={<TextEffect />} />
      </Routes>
    </div>
  );
}
