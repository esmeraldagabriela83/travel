import React from "react";

//----have to match :btn cu atributul data-bs-target si div cu id pt fiecare element din acordeon

function Questions(props){

    //destructurare props
    const {propColor , propNr, propText}=props;
  
  
  return(<>
  
  <article id="questions" className="p-5">
  
    <div className="container mb-4">
  <h2 className="mb-4">FAQ</h2>
  
  
  <div className="accordion accordion-flush" id="accordionFlushExample">
  
  
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne">
        <button className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#questionOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne">
            Should I visit churches in Romania ?          
         
        </button>
      </h2>
      <div id="questionOne"
           className="accordion-collapse collapse"
           aria-labelledby="flush-headingOne"
           data-bs-parent="#accordionFlushExample">
  
  

  <div className="row align-items-center justify-content-between g-3">
           <div className="col-md">
              <a href="https://www.pexels.com/ro-ro/fotografie/arhitectura-turn-cruce-cruciuli-a-13807406/" target="_blank">
                <img src="./images/church1.jpg" alt="church1-img" className="img-fluid w-70 mt-3 mb-3" id="MYPHOTO_img"/>
                </a>
           </div>
  
           <div className="col-md">
              <a href="https://www.pexels.com/ro-ro/fotografie/credin-a-convingere-biserica-focuri-de-artificii-6079064/" target="_blank">
                <img src="./images/church2.jpg" alt="church2-img" className="img-fluid w-70 mt-3 mb-3" id="SPRINGTREE_img"/>
              </a>
           </div>
           </div>


  

           <div className="accordion-body">
        Monasteries represent the most important category of monuments that have survived the ravages of time, many of them being true mirrors of past eras.<br></br>
         Both the religious life of the community and the culture of the nation developed around the monasteries.
        They can also illustrate a military dimension, 
        many of them being true fortresses and playing an active role in the country's defensive system considering the restrictions imposed by the Ottoman rule especially after the middle of the 16th century.<br></br>
        The monasteries and hermitages built and maintained by voivodes and boyars, endowed with a rich heritage and important privileges, are repositories of a rich treasure of Romanian culture and civilization, some of which have been preserved throughout the centuries.
        The historical message is reflected in the wall paintings, preserved ancient tombstones, cult objects, printed books, funerary monuments and preserved stone inscriptions, but also from the glorification of the victories of the voivodes who built them, 
        part of these monuments representing a gesture of thanks to God for help in battles.
        Knowing and exploiting this important national heritage is necessary for any researcher of the history and culture of this country.
           </div>

           <a href="https://ro.wikipedia.org/wiki/Categorie:M%C4%83n%C4%83stiri_%C8%99i_schituri_ortodoxe_din_%C8%9Aara_Rom%C3%A2neasc%C4%83" 
         target="_blank">Source</a>
        

      </div>
    </div>
  
  
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingTwo">
        <button className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#questionTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo">
         Should I visit the urban area of Romania ?
        </button>
      </h2>
      <div id="questionTwo"
           className="accordion-collapse collapse"
           aria-labelledby="flush-headingTwo"
           data-bs-parent="#accordionFlushExample">
  
  
           <div className="row align-items-center justify-content-between g-3">
           <div className="col-md">
              <a href="https://www.pexels.com/ro-ro/fotografie/aerian-amurg-de-deasupra-de-la-inal-ime-3955001/" target="_blank">
                <img src="./images/urban1.jpg" alt="urban1-img" className="img-fluid w-70 mt-3 mb-3" id="MYPHOTO_img"/>
                </a>
           </div>
  
           <div className="col-md">
              <a href="https://www.pexels.com/ro-ro/fotografie/acoperi-uri-urban-ora-localitate-6627553/" target="_blank">
                <img src="./images/urban2.jpg" alt="urban2-img" className="img-fluid w-70 mt-3 mb-3" id="SPRINGTREE_img"/>
              </a>
           </div>
           </div>
  
  
        <div className="accordion-body">
        Urban area is an area characterized by a high population density, compared to the surrounding areas. <br></br>
        Urban areas can be cities, towns or conurbations, but the term does not extend to rural settlements such as villages and hamlets.<br></br>

        Urban areas are created and developed by the progress of urbanization. Measuring the degree of an urban area helps in analyzing population density,
        urban sprawl, and determining urban and rural populations (Cubillas 2007).<br></br>

        Unlike an urban area, a metropolitan area includes not only the urban environment but also satellite cities and rural land interventions,
        which are socio-economically connected to the core urban city, usually through commuting labor links, with the core city, 
        being the mayor of the labor market. <br></br>
        In fact, congested urbanized areas grow as the core population / center of economic activity in a larger metropolitan area or envelope.
             </div>
             <a href="https://ro.wikipedia.org/wiki/Zon%C4%83_urban%C4%83" target="_blank">Source</a>
      </div>
    </div>
  
  
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingThree">
        <button className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#questionThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree">
        Should I visit the countryside of Romania ?
        </button>
      </h2>
      <div id="questionThree"
           className="accordion-collapse collapse"
           aria-labelledby="flush-headingThree"
           data-bs-parent="#accordionFlushExample">

<div className="row align-items-center justify-content-between g-3">
         <div className="col-md">
            <a href="https://www.pexels.com/ro-ro/fotografie/rural-rustic-peisaj-rural-la-ara-2638503/" target="_blank">
                <img src="./images/countryside1.jpg" alt="countryside1-img" className="img-fluid w-70 mt-3 mb-3"/>
                </a>
         </div>
  
         <div className="col-md">
            <a href="https://www.pexels.com/ro-ro/fotografie/munte-amurg-in-aer-liber-pitoresc-3954876/" target="_blank">
                <img src="./images/countryside2.jpg" alt="countryside2-img" className="img-fluid w-70 mt-3 mb-3"/>
                </a>
         </div>
         </div>
         
         <div className="accordion-body">
            Rural areas are regions outside urban settlements.<br></br>
            They are characterized by the fact that they have a reduced population compared to that of the urban environment,
             and the inhabitants often work the land. Two types of human settlements are part of the countryside: the village and the hamlet.  
            </div>
            <a href="https://ro.wikipedia.org/wiki/Mediu_rural" target="_blank">Source</a>


      </div>
    
    </div>
  </div>
  
  
    </div>
  
  </article>
  
  
    </>);
  
  }
  
  export default Questions;
