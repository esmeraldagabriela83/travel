import React from "react";



//import '../App.css';



function Home(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

<article id="home_location">

<h2 className="container">Romania-location</h2>

<p className="lead container">
Romania is a country located at the crossroads of Central, Eastern, and Southeastern Europe.<br></br>
It borders Bulgaria to the south, Ukraine to the north, Hungary to the west, Serbia to the southwest, Moldova to the east, and the Black Sea to the southeast.
</p>


  </article>

  </>);

}

export default Home;