import React from "react";
import "../styles/main.scss";

// import "../styles/Transport.scss";
//import '../App.css';

//https://getbootstrap.com/docs/5.2/components/card/
//https://icons.getbootstrap.com/


//variables for propText
const text1="SinceWorld War I, the Romanian railway network has been significantly expanded, and is now the fourth largest in Europe by total track length, comprising 22,298 km (13,855 mi). The route length is 10,788 km (6,703 mi). Romania is a member of the International Union of Railways (UIC). The UIC Country Code for Romania is 53.";

const text2="Motorways are identified by A followed by a number. As of December 2022, Romania has 995 km of highway completed with more under planning or construction. In recent years, a master plan for the national motorway network has been developed and approved by the European Commission in July 2015.";

const text3="The air traffic in Romania reached 20.28 million passengers in 2017[9] and 23.19 million passengers in 2019. The national carrier of Romania is TAROM, the largest Romanian airline is Blue Air while Wizz Air has the largest share of Romania's air transport market. There are 20 airports in Romania (estimated as of 2006).";



function Transport(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

  {/* <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article> */}





  <article className="p-5" id="transport_article">

<div className="container">

  <div className="row text-center g-3">

      <div className="col-md">
      <div className="card bg-primary">

      <div className="card-body">
      <div className="h1 mb-3 transportSVG">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-train-lightrail-front-fill" viewBox="0 0 16 16">
        <path d="M6.5 0a.5.5 0 0 0 0 1h1v1.011c-1.525.064-3.346.394-4.588.655C1.775 2.904 1 3.915 1 5.055V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V5.055c0-1.14-.775-2.15-1.912-2.39-1.242-.26-3.063-.59-4.588-.654V1h1a.5.5 0 0 0 0-1h-3ZM8 4c1.136 0 2.645.2 3.604.346.825.126 1.356.9 1.244 1.697-.022.16-.046.335-.07.522C12.643 7.596 12.5 8.949 12.5 10c0 .428.024.933.062 1.464.066.93.174 1.92.266 2.682.042.34.08.634.109.854h-1.01a62.703 62.703 0 0 1-.327-3H9.354c-.36 0-.704-.143-.958-.396a.353.353 0 0 0-.25-.104h-.292a.353.353 0 0 0-.25.104 1.354 1.354 0 0 1-.958.396H4.4a62.692 62.692 0 0 1-.328 3H3.064c.029-.22.067-.514.108-.854.092-.761.2-1.752.266-2.682.038-.531.062-1.036.062-1.464 0-1.051-.143-2.404-.278-3.435a51.762 51.762 0 0 0-.07-.522c-.112-.798.42-1.571 1.244-1.697C5.356 4.199 6.864 4 8 4Zm-1.354 7H4.47c.019-.353.03-.692.03-1 0-.927-.104-2.051-.216-3h7.432c-.112.949-.216 2.073-.216 3 0 .308.011.647.03 1H9.354a.353.353 0 0 1-.25-.104 1.354 1.354 0 0 0-.958-.396h-.292c-.36 0-.704.143-.958.396a.353.353 0 0 1-.25.104Zm5.199-5h-7.69l-.013-.096a.497.497 0 0 1 .405-.57C5.505 5.188 6.947 5 8 5s2.495.188 3.453.334a.497.497 0 0 1 .405.57L11.845 6ZM6 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm4 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z"/>
        </svg>
      </div>
      <h3 className="card-title mb-3">Train</h3>
      <p className="card-text mb-3">{text1}</p>
      <a href="https://en.wikipedia.org/wiki/Rail_transport_in_Romania"  target="_blank" className="btn btn-dark btn-lg ">Read more</a>
      </div>

      </div>
      </div>


      <div className="col-md">
      <div className="card bg-warning">

      <div className="card-body">
      <div className="h1 mb-3 transportSVG">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-car-front-fill" viewBox="0 0 16 16">
        <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
        </svg>
      </div>
      <h3 className="card-title mb-3">Car</h3>
      <p className="card-text mb-3">{text2}</p>
      <a href="https://en.wikipedia.org/wiki/Transport_in_Romania"  target="_blank"  className="btn btn-primary btn-lg ">Read more</a>
      </div>

      </div>
      </div>



      <div className="col-md">
      <div className="card bg-primary">

      <div className="card-body">
      <div className="h1 mb-3 transportSVG">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-airplane-fill" viewBox="0 0 16 16">
        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
        </svg>
      </div>
      <h3 className="card-title mb-3">Plane</h3>
      <p className="card-text mb-3">{text3}</p>
      <a href="https://en.wikipedia.org/wiki/Transport_in_Romania"  target="_blank"  className="btn btn-dark btn-lg ">Read more</a>
      </div>

      </div>
      </div>




  </div>

</div>

</article>


  </>);

}

export default Transport;