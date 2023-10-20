import { Route, Routes } from "react-router-dom";
import CardsAnimation from "./pages/cardsAnimation";
import SlotMachine from "./pages/SlotMachine";

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/cards' element={<CardsAnimation />} />
        <Route path="/games" element={<SlotMachine/>}/>
      </Routes>
    </div>
  );
}
