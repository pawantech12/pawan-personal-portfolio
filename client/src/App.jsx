import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConnectMe from "./components/ConnectMe";

function App({ element }) {
  return (
    <>
      <div className="home py-2">
        <Navbar />
        {element}
        <ConnectMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
