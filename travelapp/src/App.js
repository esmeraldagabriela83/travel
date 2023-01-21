import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom";

//npm install react-router-dom + Enter in terminal


//import logo from './logo.svg';
//import './App.css';

import Navbar from "./js/Navbar.js";
import Questions from "./js/Questions.js";
import Instructors from "./js/Instructors.js";
import Footer from "./js/Footer.js";


//import Home from "./pages/Home.js";
import Info from "./pages/Info.js";
import Contact from "./pages/Contact.js";
import Transport from "./pages/Transport.js";
import Bucuresti from "./pages/Bucuresti.js";

function App() {
  return (
    <section className="App">
     
     <Navbar propColor={"skyblue"} propNr={90} propText={"Navbar"}/>

     <Questions propColor={"pink"} propNr={678} propText={"Questions"}/>
     <Instructors propColor={"DarkSalmon"} propNr={23} propText={"Instructors"}/>

    <Router>
      
<ul className="linkPages">
{/* <li><Link to="/">Home</Link></li> */}
<li><Link to="/info">Info</Link></li>
<li><Link to="/contact">Contact</Link></li>
<li><Link to="/transport">Transport</Link></li>
<li><Link to="/bucuresti">Visit Bucharest</Link></li>
</ul>

      <Routes>

       {/* <Route path="/" element={<Home  propColor={"pink"} propNr={37} propText={"Home"}/>}/> */}
       <Route path="/info" element={<Info  propColor={"red"} propNr={37} propText={"Info"}/>}/> 
       <Route path="/contact" element={<Contact  propColor={"magenta"} propNr={37} propText={"Contact"}/>}/> 
       <Route path="/transport" element={<Transport  propColor={"yellow"} propNr={50} propText={"Transport"}/>}/>
       <Route path="/bucuresti" element={<Bucuresti  propColor={"gold"} propNr={40} propText={"Bucuresti"}/>}/>
       <Route path="*" element={<h1>Page not found</h1>}/>

      </Routes>

    </Router>

    <Footer propColor={"DarkGyellowoldenRod"} propNr={30} propText={"Footer"}/>

    </section>
  );
}

export default App;
