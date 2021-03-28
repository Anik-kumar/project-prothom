// import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Fruits from "./components/fruits/Fruits";
import FruitDetails from "./components/fruits/FruitDetails";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/fruits/:id" component={FruitDetails}></Route>
          <Route path="/fruits" component={Fruits} />
          <Route exact path="/" component={Home}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
