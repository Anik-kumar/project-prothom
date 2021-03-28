import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Fruits from "./components/Fruits";
import FruitDetails from "./components/FruitDetails";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/fruits/:id" component={FruitDetails}></Route>
          <Route exec path="/" component={Fruits}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
