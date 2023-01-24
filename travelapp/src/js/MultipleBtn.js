
import React, {useState, useEffect} from "react";


//----------------------
const colorDefaultChina="MistyRose";

const colorJapain="LightYellow";

const colorAfrica="PaleTurquoise";


//------------------------------
//----------------


const defaultImgChina="./images/china.jpg" ;
const imgJaponia="./images/japonia.jpg" ;
const imgAfrica="./images/africaDeSud.jpg" ;

//-----------------

const defaultImgLinkChina="https://www.pexels.com/ro-ro/fotografie/zgarie-nori-arhitectura-rau-apa-curgatoare-683419/";
const imgLinkJaponia="https://www.pexels.com/ro-ro/fotografie/parc-arc-primavara-sakura-1440476/";
const imgLinkAfrica="https://www.pexels.com/ro-ro/fotografie/deal-pisc-munte-africa-12844386/";

//-------------------------

const titleDefaultChina="China";
const titleJaponia="Japan";
const titleAfrica="South Africa";

//------------------------

//-------------------------

const pDefaultChina="China (written in traditional Chinese characters: 中國; written in simplified Chinese characters: 中国) represents a cultural region strongly linked to the ancient civilization that dominated these places. This multinational entity extends to most of East Asia.";

const pJaponia="Japan (Japanese: 日本, Nippon or Nihon,[nb 1] and formally 日本国, Nihonkoku)[nb 2] is an island country in East Asia. It is situated in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south. Japan is a part of the Ring of Fire, and spans an archipelago of 6852 islands covering 377,975 square kilometers.";

const pAfrica="South Africa, officially the Republic of South Africa (RSA), is the southernmost country in Africa. It is bounded to the south by 2,798 kilometres (1,739 mi) of coastline that stretch along the South Atlantic and Indian Oceans;[14][15][16] to the north by the neighbouring countries of Namibia, Botswana, and Zimbabwe; and to the east and northeast by Mozambique and Eswatini. It also completely enclaves the country Lesotho.[17]";

//------------------------

const linkHrefDefaultChina="https://ro.wikipedia.org/wiki/China";

const linkHrefJaponia="https://en.wikipedia.org/wiki/Japan";

const linkHrefAfrica="https://en.wikipedia.org/wiki/South_Africa";





function MultipleBtn(props){

   //destructurare props
   const{propColor , propNr , propText}=props;
   console.log(`props from f c : ${propText} are : `, props);
   console.log(`props from f c : ${propText} are : `, propColor , propNr , propText);

//--------------------------

//---------------------


const [stateObj , setStateObj]=useState(
    {
    indexObj:1,
    colorObj:colorDefaultChina,
    imgObj:defaultImgChina,
    imgObjLink:defaultImgLinkChina,
    titleObj:titleDefaultChina,
    pObj:pDefaultChina,
    pLinkObj:linkHrefDefaultChina
    
  }
  );

  //---------------------------------

  const handleChangeObjDefaultState=(event , indexParam , colorParam , imgParam , imgLinkParam , titleParam , pParam , pLinkParam ) =>{

    event.preventDefault();
  
      console.log(`you clicked btn to change the default obj index: ${stateObj.indexObj} into ${indexParam}........... `);
  
  
  //destructurare a obiectului stateObj pt a obtine keys // proprietati
  let { indexObj , colorObj , imgObj , imgObjLink , titleObj , pObj , pLinkObj }=stateObj;
  
  
  //destructurare cu spread operator
  
  const newCopyStateObj={...stateObj ,
                                      indexObj:indexParam , 
                                      colorObj:colorParam , 
                                      imgObj:imgParam , 
                                      imgObjLink:imgLinkParam,
                                      titleObj:titleParam,
                                      pObj:pParam,
                                      pLinkObj:pLinkParam};
  
  setStateObj(newCopyStateObj);
  }



//--------------------------------------------


return(<>

   {/* <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
 </article> */}


<article id="multiple_btnCountries_id">

<div className="container">





<button className="btn btn-lg my-3 btn-dark" 
        onClick={(event) =>handleChangeObjDefaultState(event, 2, colorJapain, defaultImgChina, defaultImgLinkChina,  titleDefaultChina,  pDefaultChina, linkHrefDefaultChina)}>
China
</button>


<button className="btn btn-lg my-3 btn-dark" 
        onClick={(event) =>handleChangeObjDefaultState(event, 3, colorAfrica, imgJaponia, imgLinkJaponia,  titleJaponia,  pJaponia, linkHrefJaponia)}>
Japan   
</button>


<button className="btn btn-lg my-3 btn-dark" 
        onClick={(event) =>handleChangeObjDefaultState(event, 1, colorDefaultChina, imgAfrica, imgLinkAfrica,  titleAfrica,  pAfrica, linkHrefAfrica)}>
South Africa
</button>



<div className="card" style={{width: "100%"}}>
  <a href={stateObj.imgObjLink} target="_blank">
    <img src={stateObj.imgObj} className="card-img-top" alt="multiple_Country"/>
    </a>
  <div className="card-body">
    <h5 className="card-title">{stateObj.titleObj}</h5>
    <p className="card-text">{stateObj.pObj}</p>
    <a href={stateObj.pLinkObj} target="_blank" className="btn btn-lg my-5 btn-primary">Read more</a>
  </div>
</div>

</div>

</article>



</>);


}

export default MultipleBtn;