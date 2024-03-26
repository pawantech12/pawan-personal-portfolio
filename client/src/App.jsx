import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App({ element }) {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="flex justify-center">{element}</div>
        <Footer />
      </div>
    </>
  );
}

export default App;
