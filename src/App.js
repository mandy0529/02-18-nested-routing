import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Donald from "./pages/Donald";
import Elsa from "./pages/Elsa";
import Home from "./pages/Home";
import Pooh from "./pages/Pooh";
import Sponge from "./pages/Sponge";
import Woodie from "./pages/Woodie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="donald" element={<Donald />} />
            <Route path="pooh" element={<Pooh />} />
            <Route path="sponge" element={<Sponge />} />
            <Route path="woodie" element={<Woodie />} />
            <Route path="elsa" element={<Elsa />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
