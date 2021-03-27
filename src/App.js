import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Fruits from "./components/Fruits";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Fruits />
      <Footer />
    </div>
  );
}

export default App;
