import React from "react";

function CountryCardContent(props){


   //destructurare props
   const{propColor , propNr , propText}=props;
   console.log(`props from f c : ${propText} are : `, props);
   console.log(`props from f c : ${propText} are : `, propColor , propNr , propText);

//---------------------

return(<>

{/* <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
 </article> */}


 <article id="country_card_content_id">

<div className="container">

<div className="card" style={{width: "100%"}}>
  <a href="https://www.pexels.com/ro-ro/fotografie/in-picioare-vertical-rau-apa-curgatoare-3880051/" target="_blank">
    <img src="./images/bulgaria.jpg" class="card-img-top" alt="bulgaria_img"/>
  </a>
  <div className="card-body">
    <h5 className="card-title">Bulgaria</h5>
    <p className="card-text">
    Bulgaria (/bʌlˈɡɛəriə, bʊl-/ (listen); Bulgarian: България, romanized: Bǎlgariya), officially the Republic of Bulgaria (Bulgarian: Реnубʌиkа Бъʌƨаpия),[a] is a country in Southeast Europe. It is situated on the eastern flank of the Balkans, and is bordered by Romania to the north, Serbia and North Macedonia to the west, Greece and Turkey to the south, and the Black Sea to the east. Bulgaria covers a territory of 110,994 square kilometres (42,855 sq mi), and is the sixteenth-largest country in Europe. Sofia is the nation's capital and largest city; other major cities are Plovdiv, Varna and Burgas.
        </p>
    <a href="https://en.wikipedia.org/wiki/Bulgaria" target="_blank" className="btn btn-lg my-5 btn-primary">Read more</a>
  </div>
</div>

</div>

 </article>

</>);


}

export default CountryCardContent;