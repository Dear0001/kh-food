import React from "react";
import "./App.css";
import Navigation from "./components/Pages/Navbar/Navigation";
import Footer from "./components/Pages/Footer/Foorter";
import About from "./components/Pages/About/About";

import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import BlogSection from "./components/Pages/Blog/BlogSection";
import Home from './components/Pages/Home/Home'
import Contact from './components/Pages/Contact/Contact';
import Detail from './components/Pages/Detail/Detail'
import Appetizer from "./components/Pages/Appetizer/Appetizer";


const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/blog" Component={BlogSection} />
          <Route path="/contact" Component={Contact} />
          <Route path="/detail" Component={Detail} />
          <Route path="/appertizer" Component={Appetizer} />
        </Switch>
        <Footer />
    </Router>
  );
};

export default App;