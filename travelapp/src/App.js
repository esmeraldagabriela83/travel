import React from "react";


import "./styles/main.scss";




//import logo from './logo.svg';
//import './App.css';


import Navbar from "./js/Navbar.js";

import Budget from "./js/Budget.js";
import AppShowContent from "./js/AppShowContent.js";
import ListFromArr from "./js/ListFromArr.js";
import AppConditionalRenderingBooleanContent from "./js/AppConditionalRenderingBooleanContent.js";
import MultipleBtn from "./js/MultipleBtn.js";

import Footer from "./js/Footer.js";





function App() {

  
  return (
    <section className="App">
     
     <Navbar propColor={"skyblue"} propNr={90} propText={"Navbar"}/>

     <Budget propColor={"olive"} propNr={93} propText={"Budget"}/>

     <div className="container">
      <h2 id="foreignCountryToVisit_title" style={{marginTop:"1em"}}>Other countries to visit</h2>
    </div>

     <AppShowContent  propColor={"cornflowerblue"} propNr={27} propText={"AppShowContent"}/>
     <ListFromArr  propColor={"blue"} propNr={97} propText={"ListFromArr"}/>
     <AppConditionalRenderingBooleanContent  propColor={"gold"} propNr={47} propText={"AppConditionalRenderingBooleanContent"}/>
     <MultipleBtn  propColor={"olive"} propNr={17} propText={"MultipleBtn"}/>

     <Footer propColor={"DarkGyellowoldenRod"} propNr={30} propText={"Footer"}/>

    </section>
  );



}

export default App;
