import React from "react";



function Showcase(props){

    //destructurare props
     const {propColor , propNr , propText}=props;
  
  return(
  <>
    <article className="bg-dark text-light p-5 pb-lg-0 pt-lg-5 text-center text-sm-start" id="showcase_article">
  <div className="container">
  
  <div className="d-sm-flex align-items-center justify-content-between mt-3">
  
     <div>
     <h1 className="mt-5 mt-lg-0 pt-5">Travel with us <br></br>
     <span className="text-primary">All over the world</span></h1>
     
  
        <p className="lead text-warning my-3">The world is a book and those who do not travel read only one page</p>
        <p className="lead">Saint Augustine</p>
      
      <button
               className="btn btn-primary btn-lg my-5"
               data-bs-toggle="modal"
               data-bs-target="#info"
             >
               Information
             </button>
     </div>
  
  <img  className="img-fluid w-50 d-none d-sm-block mt-5" src="./images/undraw_traveling_qio0.svg" alt="illustratorImg"/>
  
  </div>
  
  </div>
    </article>
    </>
  );
  
  
  }
  
  export default Showcase;
