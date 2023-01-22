import React from "react";



//import '../App.css';
//https://www.youtube.com/watch?v=ueaP7ShYE8I


function Home(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

<h2 className="container">Romania-location</h2>

<p className="lead container">
Romania is a country located at the crossroads of Central, Eastern, and Southeastern Europe.<br></br>
It borders Bulgaria to the south, Ukraine to the north, Hungary to the west, Serbia to the southwest, Moldova to the east, and the Black Sea to the southeast.
</p>



  <div className="container">

  <div className="row">
 
    <div className="col">
    <a href="https://www.pexels.com/ro-ro/fotografie/rural-rustic-peisaj-rural-la-ara-2638503/" target="_blank">
                    <img src="./images/flag.jpg" alt="countryside1-img" className="img-fluid mt-3 mb-3"/>
    </a>
    </div>
    
  </div>
  



 </div>    

  </>);

}

export default Home;