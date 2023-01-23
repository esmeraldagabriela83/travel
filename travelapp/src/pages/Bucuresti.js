import React from "react";


import Bucuresti1 from "../js/Bucuresti1.js";
import Bucuresti2 from "../js/Bucuresti2.js";


//import '../App.css';


function Bucuresti(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

  {/* <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article> */}


  <Bucuresti1  propColor={"yellowgreen"} propNr={53} propText={"Bucuresti1"}/>

  <Bucuresti2  propColor={"gold"} propNr={95} propText={"Bucuresti2"}/>




  </>);

}

export default Bucuresti;