import React, {useState} from "react";
//import '../App.css';


//https://github.com/bradtraversy/bootstrap-bootcamp-website/blob/main/index.html
//https://www.youtube.com/watch?v=4sosXZsdy-s


function ContactDetails(props){


      //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

{/* <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article> */}


<article id="contact_details">

<div className="container">

    <div className="row">

     <div className="col-md">
<h2 className="mb-4">Contact info</h2>

<ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Main Location:</span> Pantelimon Bucuresti
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Phone:</span> 0722 66 96 10
              </li>
              
              <li className="list-group-item">
                <span className="fw-bold">Email:</span> esmeraldagabriela83@yahoo.com
              </li>
            </ul>
     </div>

    </div>

</div>

</article>


</>);

}

export default ContactDetails;