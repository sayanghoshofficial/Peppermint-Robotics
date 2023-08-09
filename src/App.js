import {Carrer,Footer,Home,Navbar} from "./Components";
// import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/carrer" element={<Carrer />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
