import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConnectMe from "./components/ConnectMe";

function App({ element }) {
  return (
    <>
      <div className="home py-2 flex flex-col justify-between h-screen">
        <Navbar />
        {element}
        <div className="footer">
          <ConnectMe />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
