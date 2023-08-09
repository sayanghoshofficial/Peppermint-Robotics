import { Career, Footer, Form, Home, Navbar, NotFound } from "./Components";
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
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
