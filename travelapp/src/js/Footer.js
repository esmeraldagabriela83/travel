import React from "react";
//import '../App.css';


function Footer(props){

    //destructurare props
    const {propColor , propNr , propText}=props;
    console.log("props are: " , propColor , propNr , propText);
  
  
  return(<>
  
 
  
    <footer className="p-5 bg-dark text-white position-relative">
  
      <div className="container">
        
      <p className="lead">Copyright &copy; 2023 Frontend React Bootstrap Sass Portfolio App</p>
      <a href="#" className="position-absolute bottom-0 end-0 p-5"><i className="bi bi-arrow-up-circle h1"></i></a>

      <ul className="linksMedia">

<li><a href="https://twitter.com/" target="_blank"><i className="bi bi-twitter text-black-50 mx-1"></i></a></li>
<li><a href="https://facebook.com/" target="_blank"><i className="bi bi-facebook text-black-50 mx-1"></i></a></li>
<li><a href="https://linkedin.com/" target="_blank"><i className="bi bi-linkedin text-black-50 mx-1"></i></a></li>
<li><a href="https://instagram.com/" target="_blank"><i className="bi bi-instagram text-black-50 mx-1"></i></a></li>

</ul>

      </div>
  
    </footer>
  
  
  
    </>);
  
  }
  
  export default Footer;