import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Homepage from "./Components/Homepage/Homepage";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Home" element={<Menu />}></Route>
          <Route path="/Login" element></Route>
          <Route path="/Register" element></Route>
          <Route path="/Cart" element></Route>
          <Route path="/Payment" element></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
