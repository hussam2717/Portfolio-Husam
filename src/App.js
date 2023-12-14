import React from "react";
import "./App.css";
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Services from "./Components/Services/Services";
import Qualification from "./Components/Qualification/Qualification";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Scrollup from "./Components/ScrollUP/Scrollup";




function App() {
  return (
    <div className="App">
      
    <Header/>

    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Contact/>
    </main>
      
      <Footer/>
      <Scrollup/>


    </div>
  );
}

export default App;
