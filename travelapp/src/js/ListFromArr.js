import React from "react";

import foreignCountries from "./countries.js";
import CountryComponent from "./CountryComponent.js";

console.log("foreignCountries arr is :" , foreignCountries);
console.log("foreignCountries.length arr is :" , foreignCountries.length);
console.log("typeof foreignCountries: " , typeof(foreignCountries));

function ListFromArr(props){

    //destructurare props
    const{propColor , propNr , propText}=props;
    console.log(`props from f c : ${propText} are : `, props);
    console.log(`props from f c : ${propText} are : `, propColor , propNr , propText);


return(<>

 {/* <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
 </article> */}


 <article id="foreignCountries_id">

{foreignCountries.map((country , index) =>{
    //map are intotdeauna return


return(
<CountryComponent propIndexCountry={country.indexCountry} 
                  propNameCountry={country.nameCountry} 
                  propColorCountry={country.colorCountry} 
                  propImgCountry={country.imgCountry}
                  propLinkImgCountry={country.linkImg}
                  propLinkHrefCountry={country.linkHref}
                  propTextContent={country.textForeignCountry}
                  propColor={"Chocolate"} 
                  propText={"CountryComponent"} />
);

})}

 </article>

</>);

}

export default ListFromArr;