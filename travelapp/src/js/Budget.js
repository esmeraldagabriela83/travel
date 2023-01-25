import React, {useState} from "react";
import { nanoid } from "nanoid";
import newData from "./newMock-data.json";

import ReadOnlyRowActivity from "./componentsActivity/ReadOnlyRowActivity.js";
import EditableRowActivity from "./componentsActivity/EditableRowActivity.js";






//import '../App.css';

//comanda in terminal:npm i uuid  Enter


function Budget(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //---------------------------------------------------------------------------------------------------------------------------------------------------------

  //<button onClick={handleNewData}>show new data and person data</button>

  const handleNewData=(event) =>{
    console.log("!!!!!!!!!!!!!!!! newData" , newData);
    console.log("!!!!!!!!!!!!!!!! newData.length" , newData.length);
  }


  //----------------

  const [done , setDone]=useState(false);

  const [totalBudget , setTotalBudget]=useState(750);

//modify total budget background color
//   let defaultTitleColor="floralWhite";

  const randomColor = Math.floor(Math.random()*16777215).toString(16);



//---------------------------------------------------------------------------
const [nContacts , setNcontacts]=useState(newData);

let totalPrices=0;
nContacts.forEach(budgetSumFunction);

function budgetSumFunction(item){
    totalPrices= totalPrices + parseFloat(item.price);
  }
  
  let remainingDifference=totalBudget - totalPrices;
  //---------------------------
  
  // const modifyBudgetByUserValueInput=(event) =>{
  //   setTotalBudget(event.target.value);
  // }
  
  //from inside input tag
  // onChange={modifyBudgetByUserValueInput}
  
  //--------------
  
  const handleEditBudget=(event) =>{
    console.log("you clicked to edit new budget");
      setDone(true);
  }
  
  //----------------
  
  const handleSaveNewBudget=(event) =>{
    console.log("you clicked to save new budget");
  
  const userInputBudget=document.getElementById('userInputBudget');
  setTotalBudget(userInputBudget.value);
  
  //modify total budget background color
  const titleTotalBudget=document.getElementById('titleTotalBudget');
  console.log("randomColor is : " , randomColor);
  titleTotalBudget.style.backgroundColor= "#" + randomColor;
  
  //modify remaining background color
  const remaining=document.getElementById('remaining');
  
      setDone(false);
  }
  
//--------------------------------------preia valorile din input-urile ce apartin formularului completat de user-----------------------------------------

const [addFormDatActivity , setAddFormDataActivity]=useState({
    name:"",
    price:0
  });
  //---------------
  
  const [editFormDataActivity , setEditFormDataActivity]=useState({
    name:"",
    price:0
  });
  
  //--------------
  
    const [editContactIdActivity, setEditContactIdActivity] = useState(null);
  
  //--------------
  
  const handleAddFormChangeActivity=(event) =>{
    event.preventDefault();
  //destructurare obiect
  const newCopyaddFormDatActivity={...addFormDatActivity , [event.target.name]: event.target.value};
  
  setAddFormDataActivity(newCopyaddFormDatActivity) ;
  }
  
  //------------------
  
  const handleEditFormChangeActivity=(event) =>{
  
    event.preventDefault();
  
    const newCopyFormDataActivity={...editFormDataActivity , [event.target.name]: event.target.value}
  setEditFormDataActivity(newCopyFormDataActivity);
  }

  
//---------------------

const handleAddFormSubmitActivity=(event) =>{

    event.preventDefault();
  
  const newContactActivity={
    id: nanoid(),
    name:addFormDatActivity.name,
    price:addFormDatActivity.price
  };
  
  console.log("newContactActivity" , newContactActivity);
  //destructurare array
  const newnContacts=[...nContacts, newContactActivity];
  console.log("newnContacts is : " , newnContacts);
  
  setNcontacts(newnContacts);
  
  }
  
  
  //------------------------
  
  const handleEditFormSubmitActivity=(event) =>{
  
    event.preventDefault();
  
    const editedContactActivity={
  id:editContactIdActivity,
  name:editFormDataActivity.name ,
  price:editFormDataActivity.price
    };
  
    const newnContacts=[...nContacts];
  
      const index = nContacts.findIndex((nContact) => nContact.id === editContactIdActivity);
  
      newnContacts[index]=editedContactActivity;
  
  setNcontacts(newnContacts);
  setEditContactIdActivity(null);
  }
  
  //-------------------------------------------------------------
  
  const handleEditClickActivity=(event , nContact) =>{

    event.preventDefault();
  
    setEditContactIdActivity(nContact.id);
  
    console.log("editContactIdActivity at function handleEditClickActivity : " , editContactIdActivity);
  
    const formValuesActivity={
      name:nContact.name,
      price:nContact.price
    };
  
    setEditFormDataActivity(formValuesActivity);
  
    console.log("editFormDataActivity at function handleEditClickActivity : " , editFormDataActivity);
  
  }
  
  //------------------
  
  
  const handleCancelClickActivity=(event) =>{
  
  setEditContactIdActivity(null);
  
  }
  
  //------------------------
  
  const handleDeleteClickActivity=(event , contactIdActivity) =>{
  
    const newnContacts=[...nContacts];
  
    const index = nContacts.findIndex((contact) => contact.id === contactIdActivity);
  
    newnContacts.splice(index, 1);
  
    setNcontacts(newnContacts);
  
  }
  




    
//--------------------------------------------------------------------------------------------------------------------------------------------------------return-
  return(<>
  
    {/* <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article> */}


<article id="budget_id">



<div className="container">

    <div className="row text-center g-3">

        <div className="col-md"></div>
        <div className="col-md">
        <div className="card bg-primary">

            <div className="card-body">
            
                <div className="h1 mb-3 transportSVG">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-piggy-bank-fill" viewBox="0 0 16 16">
                <path d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595Zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199Zm-8.999-.65a.5.5 0 1 1-.276-.96A7.613 7.613 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.602 6.602 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                </svg>
                </div>

                <h2 className="mb-4">Calculate the budget</h2>

            </div>

        </div>
        </div>
        <div className="col-md"></div>

    </div>

</div>




<div className="container budget">



        <h2 id="titleTotalBudget">Total budget : {totalBudget}</h2>

            {done ?
        <>

        <label htmlFor="userInputBudget" className="col-form-label">Modify your budget</label><br></br>
        <input type="number" name="userInputBudget" id="userInputBudget" placeholder="write nr" className="form-control" />
        

        <button className="btn btn-primary btn-lg my-1"  onClick={handleSaveNewBudget}>Save modified budget</button>

            </> :
        <>

            <button className="btn btn-primary btn-lg my-1"  onClick={handleEditBudget}>Edit your budget</button>
        </> }

    {remainingDifference >0 ?
    <h2 id="remaining" style={{backgroundColor:"PaleGreen"}}>Remaining : {remainingDifference}</h2>
                            :
        <h2 id="remaining" style={{backgroundColor:"LightPink"}}>Remaining : {remainingDifference}</h2>
    }



    <h2 id="titleTotalPrices">Spent so far : {totalPrices}</h2>




            <form onSubmit={handleEditFormSubmitActivity}>
            <table>

            <thead>
            <tr>
            <th>Activity</th>
            <th>Price</th>
            <th>Actions</th>
            </tr>
            </thead>

            <tbody>

            {nContacts.map((nContact , index) =>{
            //map are intotdeauna return
            return(<>

            {editContactIdActivity === nContact.id ?
                                                    <EditableRowActivity editFormDataActivityProp={editFormDataActivity} handleEditFormChangeActivityProp={handleEditFormChangeActivity} handleCancelClickActivityProp={handleCancelClickActivity}/>
                                                    :
                                                    <ReadOnlyRowActivity nContactProp={nContact} indexProp={index} handleEditClickActivityProp={handleEditClickActivity} handleDeleteClickActivityProp={handleDeleteClickActivity}/>}

            </>);
            })}

            </tbody>

            </table>
            </form>

            <h2>Add an activity</h2>

            <form onSubmit={handleAddFormSubmitActivity}>
            <input type="text" name="name" id="name" required="required" placeholder="write an activity" onChange={handleAddFormChangeActivity} className="form-control" /><br></br>
            <input type="number" name="price" id="price" required="required" placeholder="write it`s price" onChange={handleAddFormChangeActivity} className="form-control" /><br></br>

            <button className="btn btn-primary btn-lg my-1"  type="submit">Add an activity</button>
            </form>

   





</div>



</article>

  
  </>);


}

export default Budget;