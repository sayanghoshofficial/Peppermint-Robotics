import { Career, Footer, Form, Home, Navbar } from "./Components";
// import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/carrer" element={<Career />} />
          <Route path="/form/:id" element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
