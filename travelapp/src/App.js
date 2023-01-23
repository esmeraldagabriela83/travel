import React from "react";
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom";

import "./styles/main.scss";

//npm install react-router-dom + Enter in terminal


//import logo from './logo.svg';
//import './App.css';


import Navbar from "./js/Navbar.js";
import Showcase from "./js/Showcase.js";
import Modal from "./js/Modal.js";
import Questions from "./js/Questions.js";
import Instructors from "./js/Instructors.js";
import Footer from "./js/Footer.js";


import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import Transport from "./pages/Transport.js";
import Bucuresti from "./pages/Bucuresti.js";



function App() {
  return (
    <section className="App">
     
     <Navbar propColor={"skyblue"} propNr={90} propText={"Navbar"}/>
     <Showcase propColor={"DarkKhaki"} propNr={690} propText={"Showcase"}/>
     <Modal propColor={"yellow"} propNr={34} propText={"Modal"}/>

     <Router>
      
<div className="container" id="links_to_page">

     <div className="row text-center g-3 linkPages mt-1">

        <div className="col-md "> 
          <div className="card bg-info text-light my-3 my-md-5 py-3">
          <Link to="/">Location</Link>
          </div>
        </div>

        <div className="col-md">
          <div className="card bg-info text-light my-3 my-md-5 py-3">
          <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="col-md">
          <div className="card bg-info text-light my-3 my-md-5 py-3">
          <Link to="/transport">Transport</Link>
          </div>
        </div>

        <div className="col-md">
          <div className="card bg-info text-light my-3 my-md-5 py-3">
          <Link to="/bucuresti">Visit Bucharest</Link>
          </div>
        </div>

     </div>

 </div>
     
      
            <Routes>
      
             <Route path="/" element={<Home  propColor={"pink"} propNr={37} propText={"Home"}/>}/>
             <Route path="/contact" element={<Contact  propColor={"magenta"} propNr={37} propText={"Contact"}/>}/> 
             <Route path="/transport" element={<Transport  propColor={"yellow"} propNr={50} propText={"Transport"}/>}/>
             <Route path="/bucuresti" element={<Bucuresti  propColor={"gold"} propNr={40} propText={"Bucuresti"}/>}/>
             <Route path="*" element={<h1>Page not found</h1>}/>
      
            </Routes>
      
      </Router>


  


     <Questions propColor={"pink"} propNr={678} propText={"Questions"}/>
     <Instructors propColor={"DarkSalmon"} propNr={23} propText={"Instructors"}/>
     <Footer propColor={"DarkGyellowoldenRod"} propNr={30} propText={"Footer"}/>

    </section>
  );
}

export default App;
