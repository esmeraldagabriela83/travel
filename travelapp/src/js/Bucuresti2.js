import React from "react";
//import '../App.css';

//--------------------------------



const learn_content3="Banca Comercială Română (BCR), a member of Erste Group, Austria, is one of the most important financial groups in Romania, including universal banking operations (retail, corporate & investment banking, treasury and capital markets), as well as profile companies from the market of leasing, private pensions and housing banks.";
const learn_content4="BCR is part of the BCR Group which also includes BCR Banca pentru Locuințe SA, BCR Pensii, Private Pension Fund Management Society SA, BCR Leasing IFN SA and BCR Chisinau SA.";

//--------------------------------

//--------------------------------

function Bucuresti2(props){

//destructurare props
const {propColor , propNr, propText}=props;

return(<>

  

  <article id="bucuresti2" className="p-5 bg-dark text-light">

    <div className="container">

       <div className="row align-items-center justify-content-between">

          <div className="col-md p-5">
              <h2>Visit Bucharest</h2>

              <p className="lead">{learn_content3}</p>

              <p>{learn_content4}</p>

              <a href="https://ro.wikipedia.org/wiki/Banca_Comercial%C4%83_Rom%C3%A2n%C4%83" target="_blank" className="btn btn-secondary btn-lg mt-3"><i className="bi bi-chevron-right"></i>Read more</a>
          </div>


          <div className="col-md">
            <a href="https://www.pexels.com/ro-ro/fotografie/amurg-exterior-de-cladire-urban-iluminat-10774499/" target="_blank" >
             <img src="./images/bcr.jpg" alt="learn-section-img" className="img-fluid" id="plate_img"/>
            </a>
          </div>

       </div>

    </div>

  </article>

  </>);

}

export default Bucuresti2;