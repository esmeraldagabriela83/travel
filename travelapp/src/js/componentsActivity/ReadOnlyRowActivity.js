import React, {useState , useEffect} from 'react';
import { nanoid } from "nanoid";

function ReadOnlyRowActivity(props){

//destructurare props

const {nContactProp , indexProp , handleEditClickActivityProp , handleDeleteClickActivityProp}=props;

//----------------

return(

<>


<tr key={indexProp}>
<td>{nContactProp.name}</td>
<td>{nContactProp.price}</td>

<td style={{display:"flex" , alignItems:"center" , justifyContent:"space-around"}}>
<button type="button" className="btn btn-primary btn-lg my-1"  onClick={(event) => handleEditClickActivityProp(event , nContactProp)}>Edit</button>
<button type="button" className="btn btn-primary btn-lg my-1"  onClick={(event) => handleDeleteClickActivityProp(nContactProp.id)}>Delete</button>
</td>
</tr>


</>

)

}

export default ReadOnlyRowActivity;
















//