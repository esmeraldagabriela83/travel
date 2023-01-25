import React, {useState , useEffect} from 'react';
import { nanoid } from "nanoid";

function EditableRowActivity(props){

//destructurare props

const {editFormDataActivityProp , handleEditFormChangeActivityProp , handleCancelClickActivityProp}=props;

//----------------

return(

<>

<tr>

<td><input type="text" name="name" required="required" placeholder="write an activity" value={editFormDataActivityProp.name} onChange={handleEditFormChangeActivityProp} className="form-control" /></td>
<td><input type="number" name="price" required="required" placeholder="write price correct"  value={editFormDataActivityProp.price}  onChange={handleEditFormChangeActivityProp} className="form-control" /></td>

<td style={{display:"flex" , alignItems:"center" , justifyContent:"space-around"}}>

<button type="submit" className="btn btn-primary btn-lg my-1" >Save</button>
<button type="button" className="btn btn-primary btn-lg my-1"  onClick={handleCancelClickActivityProp}>Cancel</button>

</td>
</tr>

</>

)

}

export default EditableRowActivity;
















//