import React from "react";
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom";
//npm install react-router-dom + Enter in terminal

import Home from "../pages/Home.js";
import Contact from "../pages/Contact.js";
import Transport from "../pages/Transport.js";
import Bucuresti from "../pages/Bucuresti.js";

import Questions from "../js/Questions.js";
import Instructors from "../js/Instructors.js";

import Mountain from "../pages/Mountain.js";
import Seaside from "../pages/Seaside.js";

import Showcase from "../js/Showcase.js";
import Modal from "../js/Modal.js";


function Navbar(props){

    //destructurare props
     const {propColor , propNr , propText}=props;
console.log("props from Navbar are : " , propColor , propNr , propText);




return(<>

<Router>



       <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 " id="navbar">

          <div className="container">

              <Link to="/" style={{textDecoration:"none"}}><p id="logo" className="text-light"><em>Travel</em> <strong>Project</strong></p></Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
              <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto">
                        
                          <li className="nav-item">
                          <Link to="/contact" style={{textDecoration:"none"}}><p className="page_link">Contact</p></Link>
                          </li>
                          <li className="nav-item">
                          <Link to="/transport" style={{textDecoration:"none"}}><p className="page_link">Transport</p></Link>
                          </li>
                          <li className="nav-item">
                          <Link to="/bucuresti" style={{textDecoration:"none"}}><p className="page_link">Visit Bucharest</p></Link>
                          </li>

                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Info
                            </a>
                            <ul className="dropdown-menu">
                          
                              <li><Link to="/questions" style={{textDecoration:"none"}}><p className="page_link_dropdown">Questions</p></Link></li>
                              <li><Link to="/instructors" style={{textDecoration:"none"}}><p className="page_link_dropdown">Instructors</p></Link></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><Link to="/mountain" style={{textDecoration:"none"}}><p className="page_link_dropdown">Mountain</p></Link></li>
                              <li><Link to="/seaside" style={{textDecoration:"none"}}><p className="page_link_dropdown">Seaside</p></Link></li>
                      
                            </ul>
                          </li>


                        </ul>
              </div>

          </div>
     
</nav>

<Showcase propColor={"DarkKhaki"} propNr={690} propText={"Showcase"}/>
<Modal propColor={"yellow"} propNr={34} propText={"Modal"}/>
           
  
                  <Routes>
            
                   <Route path="/" element={<Home  propColor={"pink"} propNr={37} propText={"Home"}/>}/>
                   <Route path="/contact" element={<Contact  propColor={"magenta"} propNr={37} propText={"Contact"}/>}/> 
                   <Route path="/transport" element={<Transport  propColor={"yellow"} propNr={50} propText={"Transport"}/>}/>
                   <Route path="/bucuresti" element={<Bucuresti  propColor={"gold"} propNr={40} propText={"Bucuresti"}/>}/>
                   <Route path="/questions" element={<Questions  propColor={"red"} propNr={40} propText={"Questions"}/>}/>
                   <Route path="/instructors" element={<Instructors  propColor={"magenta"} propNr={40} propText={"Instructors"}/>}/>
                   <Route path="/mountain" element={<Mountain  propColor={"pink"} propNr={47} propText={"Mountain"}/>}/>
                   <Route path="/seaside" element={<Seaside  propColor={"cornflowerblue"} propNr={43} propText={"Seaside"}/>}/>
                   <Route path="*" element={<h1>Page not found</h1>}/>
            
                  </Routes>
            
            </Router>


            </>);
  
}  

export default Navbar;