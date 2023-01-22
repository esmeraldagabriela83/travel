import React from "react";

//https://www.youtube.com/watch?v=4sosXZsdy-s
//Live demo
//https://getbootstrap.com/docs/5.2/components/modal/


function Modal(props){

    //destructurare props
const {propColor , propNr , propText}=props;
console.log("props are: " , propColor , propNr , propText);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return(<>
  
<div className="modal fade" id="info" tabIndex="-1" aria-labelledby="enrollmentLabel" aria-hidden="true">
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h1 className="modal-title fs-5" id="enrollmentLabel">React portfolio app with Bootstrap and SASS</h1>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">



   <p>The most visited cities are Bucharest, Constanța, Brașov, Timișoara, Sibiu, Alba-Iulia, Cluj-Napoca, Sighișoara and Iași. <br></br>
    Natural touristic attractions include <strong className="text-primary">the Danube</strong>,
     <strong className="text-primary">the Carpathian Mountains</strong>,
      and <strong className="text-primary">the Black Sea</strong>.</p> 



    </div>

    <div className="modal-footer">
<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<a href="https://en.wikipedia.org/wiki/Tourism_in_Romania#Industrial_and_creative_tourism" target="_blank"  className="btn btn-primary">Read more</a>
</div>

  </div>
</div>
</div>



  </>);

}


export default Modal;