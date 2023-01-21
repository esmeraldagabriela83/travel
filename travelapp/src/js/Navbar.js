import React from "react";



function Navbar(props){

    //destructurare props
     const {propColor , propNr , propText}=props;
console.log("props from Navbar are : " , propColor , propNr , propText);

return(

<nav className="navbar navbar-expand-lg bg-primary navbar-dark py-3 fixed-top">

<div className="container">

<a href="#" className="navbar-brand"><strong>Travel</strong> Project</a>

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navmenu">
<ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#budget" className="nav-link">Budget</a>
            </li>
            <li className="nav-item">
              <a href="#questions" className="nav-link">Questions</a>
            </li>
            <li className="nav-item">
              <a href="#instructors" className="nav-link">Instructors</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Visit
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#mountain">Mountain</a></li>
                <li><a className="dropdown-item" href="#seaside">Seaside</a></li>
                <li><a className="dropdown-item" href="#danubeDelta">The Danube Delta</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#advices">Advices</a></li>
              </ul>
            </li>

          </ul>
</div>

</div>

</nav>

);
  
}  

export default Navbar;