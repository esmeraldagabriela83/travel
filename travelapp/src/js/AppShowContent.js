import React, {useState} from "react";
import CountryCardContent from "./CountryCardContent.js";


function AppShowContent(props){

   //destructurare props
   const{propColor , propNr , propText}=props;
   console.log(`props from f c : ${propText} are : `, props);
   console.log(`props from f c : ${propText} are : `, propColor , propNr , propText);

//---------------------

const [showContent , setShowContent] = useState(false) ;
//---------------------

return(<>

 {/* <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
 </article>
    */}


<article id="show_hide_contentID">

<div className="container">

<button className="btn btn-lg my-3 btn-dark" 
        onClick={(event) => {setShowContent(!showContent)}}
        style={{border:`3px solid ${showContent ? "WhiteSmoke" : "MistyRose"}` ,
                color:showContent ? "WhiteSmoke" : "MistyRose"}}>
            Bulgaria
</button>


{showContent && <CountryCardContent   propColor={"tomato"} propNr={700} propText={"CountryCardContent"} />}

</div>        

</article>



</>);



}

export default AppShowContent;