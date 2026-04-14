import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Autumn from "./pages/Autumn";
import Winter from "./pages/Winter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Spring" element={<Spring />} />
      <Route path="/Summer" element={<Summer />} />
      <Route path="/Autumn" element={<Autumn />} />
      <Route path="/Winter" element={<Winter />} />
    </Routes>
  );
}

export default App;
