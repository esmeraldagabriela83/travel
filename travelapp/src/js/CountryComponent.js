import React from "react";

function CountryComponent(props){

    
  //destructurare props
  const {propIndexCountry , propNameCountry , propColorCountry , propImgCountry , propLinkImgCountry, propLinkHrefCountry,  propTextContent, propColor , propText}=props;
 
  console.log(`props from f c : ${propText} are : `, props);

    return(<>

{/* <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
 </article>
     */}
<article id="foreignCountry_id">

<div className="container">

<div className="card" style={{width: "100%" , backgroundColor:`${propColorCountry}`}}>
  <a href={propLinkImgCountry} target="_blank">
    <img src={propImgCountry} class="card-img-top" alt="foregn_country"/>
    </a>
  <div className="card-body">
    <h5 className="card-title">{propNameCountry}</h5>
    <p className="card-text">{propTextContent}</p>
    <a href={propLinkHrefCountry}  target="_blank" className="btn btn-lg my-5 btn-primary">Read more</a>
  </div>
</div>

</div>

</article>
    
    </>);

}

export default CountryComponent;