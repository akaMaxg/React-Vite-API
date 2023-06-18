import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PersonPage from "./pages/PersonPage";
import NavBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/person" element={<PersonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
