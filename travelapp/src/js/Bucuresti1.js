import React from "react";
//import '../App.css';

//--------------------------------



const learn_content1="The Palace of the Parliament in Bucharest, Romania (known before the 1989 revolution as the House of the Republic or House of the People), measures 270 m by 240 m, 84 m high, and 92 m underground made in the spirit of socialist realist architecture. It is 10 minutes away from Piața Unirii and 20 minutes from the North Railway Station (by bus 123).";

const learn_content2="The hill on which the Palace of Parliament stands today is generally a creation of nature, having an original height of 18 m, but the side facing Libertății Boulevard is artificially raised.";

//--------------------------------

function Bucuresti1(props){

//destructurare props
const {propColor , propNr, propText}=props;


return(<>

  {/* <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article> */}

  

<article id="bucuresti1" className="p-5 bg-warning">

  <div className="container">

     <div className="row align-items-center justify-content-between">

        <div className="col-md">
          <a href="https://www.pexels.com/ro-ro/fotografie/palat-punct-de-reper-monument-parlament-11016776/" target="_blank">
           <img src="./images/casa-poporului.jpg" alt="learn-section-img" className="img-fluid" id="cake_img"/>
          </a> 
        </div>

        <div className="col-md p-5">
            <h2>Visit Bucharest</h2>

            <p className="lead">{learn_content1}</p>

            <p>{learn_content2}</p>

            <a href="https://ro.wikipedia.org/wiki/Palatul_Parlamentului" target="_blank" className="btn btn-secondary btn-lg mt-3"><i className="bi bi-chevron-right"></i>Read more</a>
        </div>

     </div>

  </div>

</article>

  </>);

}

export default Bucuresti1;