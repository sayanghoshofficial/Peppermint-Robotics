import {Carrer,Home} from "./Components";
// import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/carrer" element={<Carrer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
