import React from "react";

import ContactForm from "../js/ContactForm.js";
import ContactDetails from "../js/ContactDetails.js";

//import '../App.css';


function Contact(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

  {/* <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article> */}


  <div className="container">
  <div className="row align-items-start justify-content-between g-3">

  <div className="col-md">
    <ContactForm  propColor={"yellow"} propNr={658} propText={"ContactForm"}/>
    </div>

    <div className="col-md">
     <ContactDetails  propColor={"pink"} propNr={678} propText={"ContactDetails"}/>
    </div>
    
  </div>
</div>


  </>);

}

export default Contact;