import React from "react";
import "../styles/main.scss";



function Mountain(props){

    //destructurare props
    const {propColor , propNr , propText}=props;
    console.log("props are: " , propColor , propNr , propText);


return(<>

  {/* <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article> */}


<article id="mountain_article">
    <div className="container">

    <h2>Carpathian Mountains</h2>

    <a href="https://www.pexels.com/ro-ro/fotografie/munte-iarba-mare-inalt-808910/" target="_blank">
        <img src="./images/munte1.jpg" className="rounded mx-auto d-block w-50" alt="mountain_img"></img>
    </a>

    <p className="card-text">
    The Carpathian Mountains or Carpathians (/kɑːrˈpeɪθiənz/) are a range of mountains forming an arc across Central Europe. Roughly 1,500 km (930 mi) long, 
    it is the third-longest European mountain range after the Urals at 2,500 km (1,600 mi) and the Scandinavian Mountains at 1,700 km (1,100 mi). <br></br>
    The range stretches from the far eastern Czech Republic (3%) and Austria (1%) in the northwest through Slovakia (21%), Poland (10%), Ukraine (10%),
     Romania (50%) to Serbia (5%) in the south.[1][2][3][4] The highest range within the Carpathians is known as the Tatra mountains in Slovakia and Poland, 
     where the highest peaks exceed 2,600 m (8,500 ft).
     The second-highest range is the Southern Carpathians in Romania, where the highest peaks range between 2,500 m (8,200 ft) and 2,550 m (8,370 ft).
    </p>

    <a href="https://en.wikipedia.org/wiki/Carpathian_Mountains"  target="_blank"  className="btn btn-primary btn-lg ">Read more</a>

    </div>
</article>

</>);


}

export default Mountain;