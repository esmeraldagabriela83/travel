import React from "react";
import "../styles/main.scss";



function Seaside(props){

    //destructurare props
    const {propColor , propNr , propText}=props;
    console.log("props are: " , propColor , propNr , propText);


return(<>

  {/* <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article> */}


<article id="seaside_article">
    <div className="container">

    <h2>Romanian Black Sea resorts</h2>

    <a href="https://www.pexels.com/ro-ro/fotografie/coasta-arm-turism-calatorie-2531325/" target="_blank">
        <img src="./images/mareaneagra.jpg" className="rounded mx-auto d-block w-50" alt="seaside_img"></img>
    </a>

    <p className="card-text">
    The Romanian Black Sea resorts or the Romanian Riviera stretch along the Black Sea coast from the Danube Delta at the northern end down to the Bulgarian Black Sea Coast in the south, along 275 kilometers of coastline.

    The most important resort is Mamaia, situated north of the city of Constanța on a narrow land slice that separates the Black Sea and Lake Siutghiol. Mamaia is a popular destination in the summer for Romanians and foreign tourists alike as a result of major investments in tourist infrastructure.

    Other important resorts have names from Roman and Greek mythology, such as Eforie Nord, Neptun, Venus, Saturn, Jupiter and Olimp.

    Other resorts include Eforie Sud, 2 Mai, and Cap Aurora. Further, Costinești is the traditional students' resort, while Vama Veche, in the extreme south bordering Bulgaria, is a fishing village well known for its hippie atmosphere.
    </p>

    <a href="https://en.wikipedia.org/wiki/Romanian_Black_Sea_resorts"  target="_blank"  className="btn btn-primary btn-lg ">Read more</a>

    </div>
</article>

</>);


}

export default Seaside;