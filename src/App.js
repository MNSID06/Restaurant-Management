import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Homepage from "./Components/Homepage/Homepage";
import Register from "./Components/User/register";
import Menu from "./Components/Menu/Menu";
import { Checkout } from "./Components/Cart/Checkout";
import Payment from "./Components/Payment/Payment";
import { Login } from "./Components/User/login";

function App() {
  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Home" element={<Menu />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Cart" element={<Checkout />}></Route>
          <Route path="/Payment" element={<Payment />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
