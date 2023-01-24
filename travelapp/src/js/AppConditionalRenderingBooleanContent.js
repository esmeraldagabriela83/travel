import React, {useState} from "react";



const americaSRC="./images/america.jpg";

const brazilSRC="./images/brazil.jpg";





const trueContentAmerica=<div className="card" style={{width: "100%"}}>
<a href="https://www.pexels.com/ro-ro/fotografie/vehicul-lateral-margine-langa-213407/" target="_blank">
    <img src={americaSRC} className="card-img-top" alt="america_img"/>
</a>
<div className="card-body">
  <h5 className="card-title">America</h5>
  <p className="card-text">
  America consists of two large subcontinents that separate the Atlantic and Pacific oceans: North America and South America. They are connected by an isthmus that narrows to the south, called Isthmian America. It, together with the islands to its east, form Central America. Both Americas could fit into a triangle, the north based on the Pacific Ocean and the south on the American Mediterranean. Between them penetrates a channel of water from the Atlantic, bordered by two large peninsulas: the Labrador-Appalachian one (with the island of Terranova at the top) and the Brazilian one (with Cape Branco).
  </p>
  <a href="https://ro.wikipedia.org/wiki/America"  target="_blank" className="btn btn-lg my-5 btn-primary">Read more</a>
</div>
</div>


const falseContentBrazil=<div className="card" style={{width: "100%"}}>
<a href="https://www.pexels.com/ro-ro/fotografie/contur-silueta-rio-de-janeiro-ora-de-aur-9447543/" target="_blank">
    <img src={brazilSRC} className="card-img-top" alt="brazil_img"/>
</a>
<div className="card-body">
  <h5 className="card-title">Brazil</h5>
  <p className="card-text">
  Brazil (Portuguese: Brasil; Brazilian Portuguese: [bɾaˈziw] (listen)),[nt 1] officially the Federative Republic of Brazil (Portuguese: República Federativa do Brasil),[9] is the largest country in South America and in Latin America. At 8.5 million square kilometers (3,300,000 sq mi)[10] and with over 217 million people, Brazil is the world's fifth-largest country by area and the seventh most populous. Its capital is Brasília, and its most populous city is São Paulo. The federation is composed of the union of the 26 states and the Federal District. It is the only country in the Americas to have Portuguese as an official language.[11][12] It is one of the most multicultural and ethnically diverse nations, due to over a century of mass immigration from around the world,[13] and the most populous Roman Catholic-majority country.
  </p>
  <a href="https://en.wikipedia.org/wiki/Brazil"  target="_blank" className="btn btn-lg my-5 btn-primary">Read more</a>
</div>
</div>




function AppConditionalRenderingBooleanContent(props){

   //destructurare props
   const{propColor , propNr , propText}=props;
   console.log(`props from f c : ${propText} are : `, props);
   console.log(`props from f c : ${propText} are : `, propColor , propNr , propText);

//--------------------------

const [stateForeignCountry , setForeignCountry]=useState(false);

const handleChangeStateContent=(event , param) =>{
    event.preventDefault();
    
    setForeignCountry(param);
    
    }

//-----------------------------------
   return(<>
   
   {/* <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
 </article> */}
   



<article id="appConditionalRrendering_id">

{/* <h1 style={{color:stateForeignCountry ? "green" : "red" }}>my color is depending on stateUser</h1>
<h1 style={{color:stateForeignCountry ? "green" : "red" }}>{stateForeignCountry ? "true" : "false"}</h1> */}

<div className="container">



    <button className="btn btn-lg my-1 btn-dark"
            onClick={(event) =>handleChangeStateContent(event , !stateForeignCountry)} 
            style={{border:`3px solid ${stateForeignCountry ? "WhiteSmoke" : "MistyRose"}` , color:stateForeignCountry ? "WhiteSmoke" : "MistyRose"}}>
                    {stateForeignCountry ? "America" : "Brazil"}
        </button>




    {stateForeignCountry ? trueContentAmerica : falseContentBrazil}


  
</div>



</article>


   
   </>);

}
export default AppConditionalRenderingBooleanContent;