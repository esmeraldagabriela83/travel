import React from "react";
//import '../App.css';


function Footer(props){

    //destructurare props
    const {propColor , propNr , propText}=props;
    console.log("props are: " , propColor , propNr , propText);
  
  
  return(<>
  
 
  
    <footer className="p-5 bg-dark text-white position-relative">
  
      <div className="container">
        
      <p className="lead text-center">Copyright &copy; 2023 Frontend React Bootstrap Sass Portfolio App</p>
      <a href="#navbar" className="position-absolute bottom-0 end-0 p-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
  <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
</svg>
      </a>

      </div>
  
    </footer>
  
  
  
    </>);
  
  }
  
  export default Footer;