import {Carrer,Home} from "./Components";
// import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/carrer" element={<Carrer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
